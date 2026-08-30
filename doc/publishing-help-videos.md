# Fiskl Help Site — Publishing Guide

Internal wiki page. Covers the help site itself, and the step-by-step process for
recording and publishing a video.

---

## The help site at a glance

| | |
|---|---|
| **Repository** | `git@github.com:fiskl-accounting/fiskl-help.git` |
| **Live site** | https://help.fiskl.com |
| **Hosting** | Netlify (account `shawn+netlify@fiskl.com`, password in 1Password) |
| **Deploys** | Automatic on every push to `main` |
| **Build** | `pnpm run build` → publishes the `build` directory |
| **Framework** | Docusaurus 3, docs served from the site root |
| **Local dev** | `npm run dev` → http://localhost:3005 |
| **Languages** | English, Spanish, French |

Videos are **not** hosted on Netlify. Netlify meters bandwidth at roughly 20
credits per GB, and our plan includes 1,000 credits per month — a few hundred
views of a single video would consume the entire allowance and starve the
builds. Videos live on AWS instead. See below.

### Video hosting

| | |
|---|---|
| **Storage** | S3 bucket `fiskl-help-videos` (private, `us-east-1`) |
| **CDN** | CloudFront distribution `E3DKDTHCMPF21D` |
| **Public URL** | https://videos.fiskl.com |
| **AWS profile** | `prod-release` (account `396752440154`) |
| **Access** | Bucket is private; CloudFront reaches it via Origin Access Control |

The bucket is never public. Only CloudFront can read it, and everything is
served through `videos.fiskl.com` — never a raw `s3.amazonaws.com` or
`cloudfront.net` URL. That indirection means the storage provider can change
later without editing a single page.

Cost is effectively zero: CloudFront's always-free tier covers 1 TB per month
(about 35,000 views of a typical video), and S3-to-CloudFront transfer is free.

---

## Publishing a video, step by step

### Before you start (one time only)

Install the tools:

```bash
brew install ffmpeg              # encodes video and grabs the poster frame
pip install -U openai-whisper    # generates captions and the transcript
```

Whisper is optional but strongly recommended — see step 4 for why.

Add these to your shell profile (`~/.zshrc`):

```bash
export FISKL_VIDEO_BUCKET="s3://fiskl-help-videos/"
export FISKL_VIDEO_CF_DISTRIBUTION="E3DKDTHCMPF21D"
export FISKL_AWS_PROFILE="prod-release"
```

Confirm AWS access:

```bash
aws sts get-caller-identity --profile prod-release
```

---

### Step 1 — Record

Keep to these conventions so the library stays consistent:

- **Under five minutes, one job per video.** If it needs eight minutes, it is two videos.
- **Open by stating what you will accomplish**, in one sentence. No logo animation.
- **Use a demo company.** Never real client data — these are public and permanent.
- **Never show a live API key** on screen unless you revoke it afterwards.
- **Narrate intent, not pixels.** Say "open the API and Connections settings" rather
  than "click the third item", so the video survives a UI change.

### Step 2 — Export

Export as **1080p MP4**.

- **Not 4K.** It is roughly four times the bytes for every viewer and screen
  recordings gain nothing visually — text is already crisp at 1080p. Record at 4K
  if your editor likes the headroom for cropping, but export 1080p.
- **Not GIF.** No audio, no captions, no seek bar, and capped at 256 colours.
  GIF is only for tiny silent loops.

Do not worry about file size at this stage. A raw four-minute export is often
around 100 MB; the next step reduces that by about 78%.

### Step 3 — Choose an ID and a home page

Every video needs two things decided before you run the script.

**An ID** — lowercase letters, numbers and hyphens, prefixed with its area:
`api-connect-claude`, `invoicing-create-first-invoice`. This never changes once
published, because pages and anchors reference it.

**A doc page** — the help page the video belongs on. This matters more than it
looks: Fi cites a page and sends the user to it, so a video that is not on the
page covering its topic is invisible to Fi.

Valid categories: `api`, `getting-started`, `invoicing`, `accounting`, `banking`.

### Step 4 — Run the pipeline

One command does everything:

```bash
npm run add-video -- ~/Desktop/your-recording.mp4 api-connect-claude \
  --title "Connect Claude to your Fiskl account" \
  --category api \
  --doc /integrations/public-api/connect-ai-assistant \
  --description "Authorise an AI assistant to read and update your Fiskl data."
```

It will:

1. Re-encode to web-optimised 1080p (a real example went from 96 MB to 21 MB,
   visually identical, in 19 seconds)
2. Grab a poster frame at the three-second mark
3. Transcribe the audio into captions and a transcript, if whisper is installed
4. Upload the video, poster and captions to S3
5. Invalidate the CloudFront cache
6. Print a registry block ready to paste

Add `--no-upload` to test the encode without touching S3.

> **Why the transcript matters.** It is the single most valuable output. A video
> contributes **zero** searchable text on its own — Fi's knowledge base and Google
> both read text. The transcript turns four minutes of speech into around 600 words
> of step-by-step prose that both can retrieve. Without whisper installed you must
> write it by hand, and in practice that means it stops happening. Install whisper.

### Step 5 — Add it to the registry

Open `src/data/videos.ts` and paste the printed block into the `videos` array.
It looks like this:

```ts
{
    id: 'api-connect-claude',
    title: 'Connect Claude to your Fiskl account',
    description: 'Authorise an AI assistant to read and update your Fiskl data.',
    duration: 'PT4M8S',
    uploadDate: '2026-08-30',
    src: 'api-connect-claude.mp4',
    poster: 'api-connect-claude.jpg',
    captions: 'api-connect-claude.vtt',
    category: 'api',
    docPath: '/integrations/public-api/connect-ai-assistant',
    transcript: 'In this video we connect Claude to your Fiskl account...',
},
```

If whisper did not run, remove the `captions` line — otherwise the player
requests a file that does not exist.

### Step 6 — Embed it on the page

Add the import once, near the top of the page, below the frontmatter:

```mdx
import VideoEmbed from '@site/src/components/VideoEmbed';
```

Then place the video where it belongs, usually straight after the opening
paragraph:

```mdx
<VideoEmbed id="api-connect-claude" />
```

That single line gives you the player, poster, captions, transcript, and the
structured data Google needs. **Do not** hand-write a `<video>` tag — it would
download the whole file on page load and be invisible to search and to Fi.

### Step 7 — Check it locally

```bash
npm run dev
```

Open the page at http://localhost:3005 and confirm:

- The poster appears, and the video plays when selected
- The duration under the player matches the real length
- "Read the transcript" expands and the text matches what you said

### Step 8 — Publish

```bash
npm run build          # must pass before you push
git add -A
git commit -m "Add video: connect Claude to your Fiskl account"
git push origin main
```

Netlify builds and deploys automatically. It takes a few minutes.

If the page is new rather than an edit, sync the translations so Spanish and
French pick it up:

```bash
npm run create-page docs/path/to/your-page.md
```

---

## Replacing a video

Re-run `add-video` with the **same ID**. The script overwrites the files and
invalidates the CloudFront cache automatically.

The invalidation matters: files are cached for a year, so without it viewers
would keep seeing the old recording. If you upload manually for any reason, run
the invalidation yourself:

```bash
aws cloudfront create-invalidation \
  --distribution-id E3DKDTHCMPF21D \
  --paths "/your-video-id.*" "/posters/your-video-id.jpg" \
  --profile prod-release
```

Update `duration` and `uploadDate` in the registry, and replace the transcript
if the narration changed.

---

## Troubleshooting

**The video area shows a coloured gradient card instead of the poster.**
That is the deliberate fallback when a poster is missing or fails to load. Check
the poster exists:
`curl -I https://videos.fiskl.com/posters/your-video-id.jpg`

**The player shows "Video ... is not in the registry".**
The ID in `<VideoEmbed id="...">` does not match any `id` in
`src/data/videos.ts`. Usually a typo or a missing paste.

**The video returns 403.**
The S3 bucket policy is not allowing this CloudFront distribution. Confirm the
policy names the real account ID and distribution ID — placeholder text like
`YOUR_ACCOUNT_ID` is the usual cause.

**Changes to a video are not showing.**
CloudFront is still serving the cached copy. Run the invalidation above.

**The build fails on a broken link.**
Docusaurus fails the build on links to pages that do not exist. Check any new
links point at real pages.

---

## Where things live

| What | Where |
|---|---|
| Video registry (the source of truth) | `src/data/videos.ts` |
| Player component | `src/components/VideoEmbed/` |
| Publishing script | `scripts/add-video.js` |
| Help pages | `docs/` |
| Sidebar order | `sidebars.ts` |
| Translations | `i18n/es/`, `i18n/fr/` |

**A note on the sidebar:** it is a hand-maintained list, not generated. A new
page must be added to `sidebars.ts` or it will build fine but vanish from the
menu, and the sidebar will disappear entirely when someone opens it.
