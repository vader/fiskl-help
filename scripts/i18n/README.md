# Help Guide i18n — Automated Translation

Automated translation for the Fiskl **help guide** (Docusaurus) using AWS
Bedrock (Claude). This is the Docusaurus counterpart to the `fiskl-react`
i18n scripts — same Bedrock client, retry handling, finance glossary, and
prompt rules — but it understands Docusaurus content:

- **Markdown docs** (`.md`) with YAML frontmatter
- **Docusaurus JSON UI strings** (`code.json`, `navbar.json`, `footer.json`,
  `current.json`, blog `options.json`)
- **Both docs instances**: the main guide (`docs/`) and Atlas (`docs-atlas/`)

One script does both jobs:

- **Add a language** — translate everything from scratch (e.g. German)
- **Keep in sync** — translate only what's missing or stale after English changes

Human review stays in the loop: the script writes files, you review the git
diff and open a PR.

## How it maps content

| Source | Target |
|---|---|
| `docs/**/*.md` | `i18n/<locale>/docusaurus-plugin-content-docs/current/**/*.md` |
| `docs-atlas/**/*.md` | `i18n/<locale>/docusaurus-plugin-content-docs-atlas/current/**/*.md` |
| `i18n/en/**/*.json` | `i18n/<locale>/**/*.json` (only the `"message"` field is translated) |

**Frontmatter rules:** only `title`, `sidebar_label`, and `description` are
translated. `slug`, `sidebar_position`, `tags`, `keywords`, `hide_*`, `id`,
etc. are left untouched. Code blocks, links/URLs, image paths, `import`/JSX,
and Mermaid blocks in the body are preserved.

## Setup

Needs Python 3.10+ (3.12 recommended). Run everything from the **repo root**
(the directory containing `docs/` and `i18n/`).

```bash
cd scripts/i18n
python3.12 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cd ../..        # back to repo root before running the script
```

**Windows:**

```powershell
cd scripts\i18n
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
cd ..\..
```

AWS auth uses your existing AWS CLI credentials / environment. Pass
`--profile <name>` to pick a profile.

## Add a new language (e.g. German)

1. **Register the locale** in `docusaurus.config.ts` `i18n.locales` and add it
   to `LOCALES` in `scripts/manage-translation.js` (German is already done).
2. **Scaffold the JSON UI stubs** from the theme defaults:

   ```bash
   npm run write-translations -- --locale de
   ```

3. **Dry run** — see what will be translated, without calling Bedrock:

   ```bash
   python scripts/i18n/translate_docs.py --target-lang de --dry-run
   ```

4. **Sanity check one file** first and inspect the diff:

   ```bash
   python scripts/i18n/translate_docs.py --target-lang de --file docs/intro.md --profile stage-admin
   ```

5. **Translate everything** (main + Atlas docs + JSON UI):

   ```bash
   python scripts/i18n/translate_docs.py --target-lang de --profile stage-admin
   ```

6. **Build & preview** to confirm it renders:

   ```bash
   npm run build
   npm start -- --locale de
   ```

7. Review the git diff, send for human review, commit / open a PR.

## Keep languages in sync

After English docs change, re-run the script. It only touches files/keys that
are **missing** or **stale** (English newer than the translation). Existing,
reviewed translations are never overwritten unless you pass `--force`.

```bash
# Sync every non-English locale (de / fr / es) and remove orphaned files
python scripts/i18n/translate_docs.py --target-lang all --clean-orphans --profile stage-admin
```

## Options

| Flag | Description |
|---|---|
| `--target-lang` | `de`, `fr`, `es`, or `all` for every non-English locale **(required)** |
| `--repo-root` | Repo root containing `docs/` and `i18n/` (default: current dir) |
| `--file` | Translate a single source file only, e.g. `docs/intro.md` |
| `--dry-run` | Report what would change without calling Bedrock |
| `--force` | Re-translate even existing/non-stale targets (overwrites) |
| `--skip-existing` | Skip any `.md` target that already exists (no staleness check) |
| `--clean-orphans` | Delete target files with no matching English source |
| `--skip-json` | Translate docs only; skip the JSON UI strings |
| `--profile` | AWS CLI profile name, e.g. `stage-admin` |

## Environment overrides

```bash
# Different Bedrock region
BEDROCK_REGION=eu-west-1 python scripts/i18n/translate_docs.py --target-lang de ...

# Higher-quality model (Sonnet) for long-form prose
BEDROCK_MODEL_ID=us.anthropic.claude-sonnet-4-20250514-v1:0 \
  python scripts/i18n/translate_docs.py --target-lang de --profile stage-admin
```

Default model is Claude Haiku 4.5 (cost/speed), matching the core-app scripts.

## Glossary

`GLOSSARY` in `translate_docs.py` pins finance terms (Invoice → Rechnung,
Balance Sheet → Bilanz, …) so terminology stays consistent. Extend it per
language as reviewers flag preferred terms.
