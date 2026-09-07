#!/usr/bin/env node
/**
 * clean-transcript — ask Claude (via AWS Bedrock) to tidy up a raw whisper
 * transcript into a crisp narration script, ready for narrate-video.js.
 *
 * Usage:
 *   whisper recording.mp4 --model small --output_format txt --output_dir /tmp
 *   npm run clean-transcript -- /tmp/recording.txt --out script.txt
 *
 * Removes filler words, false starts, and stutters while keeping the same
 * information, order, and meaning — it does not rewrite or add content, only
 * tidies delivery. Always review the output before it's spoken; this is a
 * draft, not a rubber stamp.
 *
 * Reuses the same dedicated Bedrock credentials as the `social` project
 * (BEDROCK_AWS_ACCESS_KEY_ID/SECRET, distinct from the AWS profile used for
 * S3 uploads here) via the `aws bedrock-runtime converse` CLI — no new npm
 * dependency, matching how add-video.js already shells out to `aws` for S3.
 */

const {execFileSync} = require('child_process');
const {spawnSync} = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const BEDROCK_REGION = process.env.BEDROCK_REGION || 'eu-west-1';
const BEDROCK_MODEL_ID = process.env.BEDROCK_MODEL_ID
    || 'eu.anthropic.claude-haiku-4-5-20251001-v1:0';
const BEDROCK_AWS_ACCESS_KEY_ID = process.env.BEDROCK_AWS_ACCESS_KEY_ID || '';
const BEDROCK_AWS_SECRET_ACCESS_KEY = process.env.BEDROCK_AWS_SECRET_ACCESS_KEY || '';

const SYSTEM_PROMPT =
    'You clean up raw speech-to-text transcripts of software tutorial screen recordings ' +
    'into narration scripts. You do not add information, change meaning, reorder ideas, or ' +
    'remove instructional content. You only tidy delivery.';

const TASK_PROMPT =
    'Clean up this raw transcript of a spoken tutorial video narration. Remove filler words ' +
    '(um, uh, like, you know), false starts, stutters, and repeated words. Fix grammar and ' +
    'punctuation. Make sentences crisp and clear. Do NOT change the meaning, do NOT add new ' +
    'claims or steps, do NOT remove any instructional content, and keep the same order of ' +
    'ideas. Return ONLY the cleaned narration text — no headings, no notes, no markdown — ' +
    'ready to be read aloud verbatim.\n\nRAW TRANSCRIPT:\n';

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
            flags[arg.slice(2)] = argv[++i];
        } else {
            positional.push(arg);
        }
    }
    return {positional, flags};
}

function main() {
    const {positional, flags} = parseArgs(process.argv.slice(2));
    const [source] = positional;

    if (!source) {
        fail('Usage: npm run clean-transcript -- <raw-transcript.txt> [--out cleaned-script.txt]');
    }
    if (!fs.existsSync(source)) fail(`No such file: ${source}`);
    if (!has('aws')) fail('aws CLI is required. Install with: brew install awscli');
    if (!BEDROCK_AWS_ACCESS_KEY_ID || !BEDROCK_AWS_SECRET_ACCESS_KEY) {
        fail(
            'Set BEDROCK_AWS_ACCESS_KEY_ID and BEDROCK_AWS_SECRET_ACCESS_KEY (same dedicated ' +
            'Bedrock credentials the social project uses — distinct from FISKL_AWS_PROFILE).',
        );
    }

    const rawText = fs.readFileSync(source, 'utf8').trim();
    if (!rawText) fail(`${source} is empty.`);

    const parsed = path.parse(source);
    const outPath = flags.out || path.join(parsed.dir, `${parsed.name}-cleaned.txt`);

    const request = {
        modelId: BEDROCK_MODEL_ID,
        system: [{text: SYSTEM_PROMPT}],
        messages: [{role: 'user', content: [{text: TASK_PROMPT + rawText}]}],
        inferenceConfig: {maxTokens: 4096, temperature: 0.2},
    };

    const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fiskl-clean-transcript-'));
    const requestPath = path.join(workDir, 'request.json');
    fs.writeFileSync(requestPath, JSON.stringify(request));

    // Dedicated Bedrock credentials only, so this never picks up
    // FISKL_AWS_PROFILE or any ambient AWS_* creds meant for S3.
    const bedrockEnv = {...process.env};
    delete bedrockEnv.AWS_PROFILE;
    delete bedrockEnv.AWS_DEFAULT_PROFILE;
    bedrockEnv.AWS_ACCESS_KEY_ID = BEDROCK_AWS_ACCESS_KEY_ID;
    bedrockEnv.AWS_SECRET_ACCESS_KEY = BEDROCK_AWS_SECRET_ACCESS_KEY;
    bedrockEnv.AWS_DEFAULT_REGION = BEDROCK_REGION;

    console.log(`→ Asking Claude (${BEDROCK_MODEL_ID}) to clean up the transcript…`);
    let raw;
    try {
        raw = execFileSync(
            'aws', [
                'bedrock-runtime', 'converse',
                '--cli-input-json', `file://${requestPath}`,
                '--region', BEDROCK_REGION,
                '--output', 'json',
            ],
            {env: bedrockEnv, stdio: ['ignore', 'pipe', 'inherit']},
        );
    } catch (err) {
        fail(`Bedrock request failed: ${err.message}`);
    }

    let response;
    try {
        response = JSON.parse(raw.toString());
    } catch {
        fail(`Could not parse Bedrock response as JSON: ${raw.toString().slice(0, 500)}`);
    }

    const content = response?.output?.message?.content;
    const text = Array.isArray(content) ? content.map((c) => c.text || '').join('') : '';
    if (!text.trim()) {
        fail(`Bedrock returned no text: ${JSON.stringify(response).slice(0, 500)}`);
    }

    fs.writeFileSync(outPath, text.trim() + '\n');
    console.log(`\n✓ Cleaned script: ${outPath}`);
    console.log('\nRead it over before narrating — this is a draft, not a rubber stamp.');
    console.log('\nNext:');
    console.log(`  npm run narrate-video -- <recording.mp4> ${outPath}\n`);
}

main();
