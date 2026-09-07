#!/usr/bin/env node
/**
 * narrate-video — replace a help video's narration with the AI voice used for
 * social videos (same ElevenLabs voice), then hand off to add-video.js.
 *
 * Usage:
 *   npm run narrate-video -- ./recording.mp4 ./script.txt \
 *     [--out ./recording-dubbed.mp4] [--voice-id <id>] [--max-adjust 0.15]
 *
 * The script text is written/edited by hand, not transcribed from the
 * recording — this is the moment to fix filler words and tighten phrasing
 * before it's ever spoken.
 *
 * It synthesizes the narration with ElevenLabs (same request shape as the
 * `social` project's tts_elevenlabs.py adapter), nudges ElevenLabs' `speed`
 * setting to get close to the original recording's duration, then closes any
 * remaining gap with a bounded video-speed adjustment so the final video's
 * duration matches the new narration exactly. If the mismatch is too large to
 * close without a distracting speed change, it fails loudly instead of
 * force-fitting — that means the script needs trimming, not the video.
 *
 * The output is a plain dubbed MP4. Nothing here uploads anything — feed the
 * result into the existing, unmodified pipeline:
 *   npm run add-video -- <out.mp4> <video-id> --title "..." --category ... --doc ...
 */

const {execFileSync} = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY || '';
const ELEVENLABS_MODEL_ID = process.env.ELEVENLABS_MODEL_ID || 'eleven_multilingual_v2';
const DEFAULT_VOICE_ID = process.env.ELEVENLABS_VOICE_ID || '';

// ElevenLabs' documented range for the `speed` voice setting (same bounds
// `social`'s VoiceSettings uses). >1 = faster / shorter audio.
const SPEED_MIN = 0.7;
const SPEED_MAX = 1.2;

// How far we're willing to push ElevenLabs' `speed` to help hit the target
// duration. Narrower than its technical range (0.7-1.2 above) — outside
// roughly 0.9-1.15 the voice stops sounding "paced differently" and starts
// sounding artificially slow/fast. Beyond this, video retiming (below) does
// the rest of the work instead of further distorting the voice.
const SPEED_NATURAL_MIN = 0.9;
const SPEED_NATURAL_MAX = 1.15;

// If getting to the target duration would need more than this much video
// speed change, the script is the wrong length for the recording — fail
// instead of stretching the video into something distracting. Generous by
// default: a bounded video-speed change (mouse moves/typing pacing) is far
// less noticeable than pushing narration speech rate around, so it's the
// preferred lever for closing a duration gap.
const DEFAULT_MAX_ADJUST = 0.30;

// Skip re-timing the video at all below this — not worth a re-encode.
const RETIME_EPSILON = 0.01;

function fail(message) {
    console.error(`\n✗ ${message}\n`);
    process.exit(1);
}

function has(cmd) {
    return require('child_process').spawnSync('which', [cmd], {stdio: 'ignore'}).status === 0;
}

function parseArgs(argv) {
    const positional = [];
    const flags = {};
    for (let i = 0; i < argv.length; i++) {
        const arg = argv[i];
        if (arg.startsWith('--')) {
            flags[arg.slice(2)] = argv[++i];
        } else {
            positional.push(arg);
        }
    }
    return {positional, flags};
}

function probeDurationSeconds(file) {
    const out = execFileSync('ffprobe', [
        '-v', 'error', '-show_entries', 'format=duration',
        '-of', 'default=noprint_wrappers=1:nokey=1', file,
    ]).toString().trim();
    return parseFloat(out);
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

/** Mirrors social/api/app/providers/tts_elevenlabs.py's request shape exactly. */
async function synthesize(text, {apiKey, voiceId, modelId, speed}) {
    const resp = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps`,
        {
            method: 'POST',
            headers: {'xi-api-key': apiKey, 'Content-Type': 'application/json'},
            body: JSON.stringify({
                text,
                model_id: modelId,
                output_format: 'mp3_44100_128',
                // NOTE: mirrors social's VoiceSettings defaults (stability 0.5,
                // similarity_boost 0.75, style 0). That project's own code flags this
                // shape as unverified against live docs — sanity-check if this errors.
                voice_settings: {speed, stability: 0.5, similarity_boost: 0.75, style: 0},
            }),
        },
    );
    if (!resp.ok) {
        const body = await resp.text().catch(() => '');
        fail(`ElevenLabs request failed (${resp.status}): ${body.slice(0, 500)}`);
    }
    const data = await resp.json();
    return Buffer.from(data.audio_base64, 'base64');
}

async function synthesizeToDuration(text, {apiKey, voiceId, modelId}, targetSeconds, workDir) {
    let speed = 1.0;
    let mp3Path = path.join(workDir, 'narration.mp3');

    console.log(`→ Synthesizing narration (speed ${speed.toFixed(2)})…`);
    let mp3 = await synthesize(text, {apiKey, voiceId, modelId, speed});
    fs.writeFileSync(mp3Path, mp3);
    let duration = probeDurationSeconds(mp3Path);
    console.log(`  ${duration.toFixed(1)}s vs ${targetSeconds.toFixed(1)}s target`);

    const withinTolerance = Math.abs(duration - targetSeconds) / targetSeconds <= 0.03;
    if (!withinTolerance) {
        // Duration scales roughly as 1/speed — one corrective call gets us close.
        // Clamped to the NATURAL range, not ElevenLabs' full technical range: past
        // this point video retiming picks up the rest of the gap instead of making
        // the voice sound artificially slow/fast.
        const correctedSpeed = clamp(duration / targetSeconds, SPEED_NATURAL_MIN, SPEED_NATURAL_MAX);
        if (Math.abs(correctedSpeed - speed) > 0.01) {
            console.log(`→ Re-synthesizing narration (speed ${correctedSpeed.toFixed(2)})…`);
            mp3 = await synthesize(text, {apiKey, voiceId, modelId, speed: correctedSpeed});
            fs.writeFileSync(mp3Path, mp3);
            duration = probeDurationSeconds(mp3Path);
            console.log(`  ${duration.toFixed(1)}s vs ${targetSeconds.toFixed(1)}s target`);
        }
    }

    return {mp3Path, duration};
}

function mux(source, mp3Path, outPath, {videoSpeedFactor, duration}) {
    const needsRetime = Math.abs(videoSpeedFactor - 1) > RETIME_EPSILON;
    const args = ['-y', '-i', source, '-i', mp3Path];

    if (needsRetime) {
        args.push('-filter:v', `setpts=PTS*${videoSpeedFactor.toFixed(6)}`);
        args.push('-map', '0:v', '-map', '1:a');
        args.push('-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p');
    } else {
        args.push('-map', '0:v', '-map', '1:a');
        args.push('-c:v', 'copy');
    }
    args.push('-c:a', 'aac', '-b:a', '192k');
    args.push('-t', duration.toFixed(3));
    args.push(outPath);

    console.log(`→ Muxing${needsRetime ? ` (video retimed x${videoSpeedFactor.toFixed(3)})` : ''}…`);
    execFileSync('ffmpeg', args, {stdio: ['ignore', 'ignore', 'inherit']});
}

async function main() {
    const {positional, flags} = parseArgs(process.argv.slice(2));
    const [source, scriptFile] = positional;

    if (!source || !scriptFile) {
        fail(
            'Usage: npm run narrate-video -- <recording.mp4> <script.txt> ' +
            '[--out dubbed.mp4] [--voice-id <id>] [--max-adjust 0.15]',
        );
    }
    if (!fs.existsSync(source)) fail(`No such file: ${source}`);
    if (!fs.existsSync(scriptFile)) fail(`No such file: ${scriptFile}`);
    if (!has('ffmpeg')) fail('ffmpeg is required. Install with: brew install ffmpeg');
    if (!has('ffprobe')) fail('ffprobe is required (comes with ffmpeg).');
    if (typeof fetch !== 'function') fail('This script needs Node 18+ (for global fetch).');

    const apiKey = ELEVENLABS_API_KEY;
    if (!apiKey) fail('Set ELEVENLABS_API_KEY (same key the social project uses).');
    const voiceId = flags['voice-id'] || DEFAULT_VOICE_ID;
    if (!voiceId) {
        fail(
            'Set ELEVENLABS_VOICE_ID (or pass --voice-id) — use the same voice_id ' +
            'configured in the social project\'s workspace settings.',
        );
    }
    const maxAdjust = flags['max-adjust'] ? parseFloat(flags['max-adjust']) : DEFAULT_MAX_ADJUST;

    const parsed = path.parse(source);
    const outPath = flags.out || path.join(parsed.dir, `${parsed.name}-dubbed.mp4`);

    const text = fs.readFileSync(scriptFile, 'utf8').trim();
    if (!text) fail(`${scriptFile} is empty.`);

    const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fiskl-narrate-'));

    const videoDuration = probeDurationSeconds(source);
    console.log(`→ Original recording: ${videoDuration.toFixed(1)}s`);

    const {mp3Path, duration: narrationDuration} = await synthesizeToDuration(
        text,
        {apiKey, voiceId, modelId: ELEVENLABS_MODEL_ID},
        videoDuration,
        workDir,
    );

    const videoSpeedFactor = narrationDuration / videoDuration;
    const adjustment = Math.abs(videoSpeedFactor - 1);
    if (adjustment > maxAdjust) {
        fail(
            `Narration (${narrationDuration.toFixed(1)}s) vs recording (${videoDuration.toFixed(1)}s) ` +
            `would need a ${(adjustment * 100).toFixed(0)}% video speed change, over the ` +
            `${(maxAdjust * 100).toFixed(0)}% limit (--max-adjust). Trim or expand the script ` +
            `in ${scriptFile} instead of forcing it to fit.\n` +
            `  Narration audio is saved at: ${mp3Path}`,
        );
    }

    mux(source, mp3Path, outPath, {videoSpeedFactor, duration: narrationDuration});

    console.log(`\n✓ Dubbed video: ${outPath}`);
    console.log(`  ${narrationDuration.toFixed(1)}s` +
        (adjustment > RETIME_EPSILON ? ` (video retimed x${videoSpeedFactor.toFixed(3)})` : ' (no retime needed)'));
    if (adjustment > 0.1) {
        console.log(
            `\nNote: the video was retimed ${(adjustment * 100).toFixed(0)}% to match the ` +
            `narration length (script and original recording weren't close in length). If the ` +
            `pacing looks off, either trim the recording (or speed it up on export) so it's ` +
            `closer to how long the script naturally takes to read, or lengthen the script.`,
        );
    }
    console.log('\nNext, run the existing pipeline on this file:');
    console.log(`  npm run add-video -- ${outPath} <video-id> --title "..." --category ... --doc ... --no-upload\n`);
}

main().catch((err) => fail(err.stack || err.message));
