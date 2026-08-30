#!/usr/bin/env node
/**
 * add-video — prepare and upload one help video.
 *
 * Usage:
 *   npm run add-video -- ./recording.mp4 api-connect-claude \
 *     --title "Connect Claude to your Fiskl account" \
 *     --category api \
 *     --doc /integrations/public-api/connect-ai-assistant \
 *     [--description "..."] [--no-upload]
 *
 * It produces the poster frame and (when a transcriber is available) the
 * captions and transcript, uploads the set, and prints the registry block to
 * paste into src/data/videos.ts.
 *
 * The point of this script is momentum: if adding a video is a multi-step
 * manual chore, the videos stop coming. Everything here is either automated or
 * explicitly reported as skipped.
 */

const {execFileSync, spawnSync} = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Keep in step with VIDEO_BASE / POSTER_BASE in src/data/videos.ts.
const S3_BUCKET = process.env.FISKL_VIDEO_BUCKET || 's3://fiskl-help-videos/help/';

function fail(message) {
    console.error(`\n✗ ${message}\n`);
    process.exit(1);
}

function has(cmd) {
    return spawnSync('which', [cmd], {stdio: 'ignore'}).status === 0;
}

function parseArgs(argv) {
    const positional = [];
    const flags = {};
    for (let i = 0; i < argv.length; i++) {
        const arg = argv[i];
        if (arg.startsWith('--')) {
            const key = arg.slice(2);
            if (key === 'no-upload') {
                flags.noUpload = true;
            } else {
                flags[key] = argv[++i];
            }
        } else {
            positional.push(arg);
        }
    }
    return {positional, flags};
}

/** ffprobe duration in seconds → ISO 8601, the format schema.org requires. */
function isoDuration(seconds) {
    const total = Math.round(seconds);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `PT${m}M${s}S`;
}

function main() {
    const {positional, flags} = parseArgs(process.argv.slice(2));
    const [source, id] = positional;

    if (!source || !id) {
        fail(
            'Usage: npm run add-video -- <file.mp4> <video-id> --title "..." --category api --doc /path',
        );
    }
    if (!fs.existsSync(source)) fail(`No such file: ${source}`);
    if (!/^[a-z0-9-]+$/.test(id)) {
        fail(`Video id must be lowercase letters, numbers and hyphens: got "${id}"`);
    }
    if (!has('ffmpeg')) fail('ffmpeg is required. Install with: brew install ffmpeg');

    const title = flags.title || id;
    const category = flags.category || 'api';
    const docPath = flags.doc || '';
    const description = flags.description || '';

    const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fiskl-video-'));
    const mp4 = path.join(workDir, `${id}.mp4`);
    const jpg = path.join(workDir, `${id}.jpg`);
    const vtt = path.join(workDir, `${id}.vtt`);

    // 1. Normalise to a web-friendly MP4 (faststart moves the index to the
    //    front so playback can begin before the whole file arrives).
    console.log('→ Encoding for web…');
    execFileSync(
        'ffmpeg',
        ['-y', '-i', source, '-movflags', '+faststart', '-vcodec', 'libx264',
         '-crf', '23', '-preset', 'medium', '-acodec', 'aac', '-b:a', '128k', mp4],
        {stdio: ['ignore', 'ignore', 'inherit']},
    );

    // 2. Poster frame at 3s — usually past any intro fade.
    console.log('→ Grabbing poster frame…');
    execFileSync(
        'ffmpeg',
        ['-y', '-ss', '3', '-i', mp4, '-frames:v', '1', '-update', '1', '-q:v', '3', jpg],
        {stdio: ['ignore', 'ignore', 'ignore']},
    );

    // 3. Duration for the schema.
    const probe = execFileSync('ffprobe', [
        '-v', 'error', '-show_entries', 'format=duration',
        '-of', 'default=noprint_wrappers=1:nokey=1', mp4,
    ]).toString().trim();
    const duration = isoDuration(parseFloat(probe));

    // 4. Captions + transcript, when a transcriber is present. Optional by
    //    design — a missing transcriber must not block publishing.
    let transcript = '';
    let hasCaptions = false;
    if (has('whisper')) {
        console.log('→ Transcribing (whisper)…');
        execFileSync('whisper', [mp4, '--model', 'small', '--output_format', 'vtt',
            '--output_dir', workDir, '--language', 'en'], {stdio: 'inherit'});
        hasCaptions = fs.existsSync(vtt);
        if (hasCaptions) {
            // Strip WebVTT cue numbers/timestamps down to prose for the registry.
            transcript = fs.readFileSync(vtt, 'utf8')
                .split('\n')
                .filter((line) => line.trim() && !/^WEBVTT/.test(line) && !/-->/.test(line) && !/^\d+$/.test(line.trim()))
                .join(' ')
                .replace(/\s+/g, ' ')
                .trim();
        }
    } else {
        console.log('→ Skipping transcription (whisper not installed).');
        console.log('  Install with: pip install -U openai-whisper');
        console.log('  Or paste a transcript into the registry by hand — it is what makes');
        console.log('  the video findable by search and by Fi.');
    }

    // 5. Upload.
    if (flags.noUpload) {
        console.log(`\n→ Skipping upload. Files are in ${workDir}`);
    } else if (!has('aws')) {
        console.log(`\n→ aws CLI not found. Files are in ${workDir} — upload them manually.`);
    } else {
        console.log('→ Uploading…');
        const put = (file, dest) =>
            execFileSync('aws', ['s3', 'cp', file, dest, '--cache-control', 'public,max-age=31536000'],
                {stdio: 'inherit'});
        put(mp4, `${S3_BUCKET}${id}.mp4`);
        put(jpg, `${S3_BUCKET}posters/${id}.jpg`);
        if (hasCaptions) put(vtt, `${S3_BUCKET}${id}.vtt`);
    }

    // 6. Print the registry entry.
    const entry = {
        id,
        title,
        description,
        duration,
        uploadDate: new Date().toISOString().slice(0, 10),
        src: `${id}.mp4`,
        poster: `${id}.jpg`,
        ...(hasCaptions ? {captions: `${id}.vtt`} : {}),
        category,
        docPath,
        ...(transcript ? {transcript} : {}),
    };

    console.log('\n─── Paste into the videos array in src/data/videos.ts ───\n');
    console.log(
        JSON.stringify(entry, null, 4)
            .replace(/"([a-zA-Z]+)":/g, '$1:')
            .replace(/"/g, "'")
            .split('\n')
            .map((line, index, all) => {
                const indented = `    ${line}`;
                return index === all.length - 1 ? `${indented},` : indented;
            })
            .join('\n'),
    );
    console.log('\nThen add to the page:\n');
    console.log(`    import VideoEmbed from '@site/src/components/VideoEmbed';`);
    console.log(`    <VideoEmbed id="${id}" />\n`);
    if (!transcript) {
        console.log('⚠ No transcript. Add one before publishing — video is invisible to');
        console.log('  search and to Fi without it.\n');
    }
}

main();
