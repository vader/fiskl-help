#!/usr/bin/env python3
"""
Fiskl Help (Docusaurus) i18n Translation + Sync
================================================
Translates the Fiskl help guide into a target language using AWS Bedrock
(Claude), then keeps it in sync as English content changes. This is the
Docusaurus counterpart to the fiskl-react i18n scripts — the same Bedrock
client, retry handling, glossary, and prompt rules — extended to handle:

  1. Markdown docs (.md) with YAML frontmatter (translate title /
     sidebar_label / description + the body; leave slug / tags / position /
     keywords and other flags untouched).
  2. Docusaurus JSON UI strings (code.json, navbar.json, footer.json,
     current.json, blog options.json) — translate only the "message"
     field of each entry, never the key or "description".

It covers BOTH docs instances:
  - main:  docs/**            -> i18n/<locale>/docusaurus-plugin-content-docs/current/**
  - atlas: docs-atlas/**      -> i18n/<locale>/docusaurus-plugin-content-docs-atlas/current/**

Sync semantics (like sync_translations.py): a file/key is only translated
when it is MISSING or STALE in the target. Existing, human-reviewed
translations are NEVER overwritten unless you pass --force.

Usage:
    # Dry run — show what's missing/stale for German across docs + JSON
    python translate_docs.py --target-lang de --dry-run

    # Translate a single file first (recommended sanity check)
    python translate_docs.py --target-lang de --file docs/intro.md --profile stage-admin

    # Translate everything for German (main + atlas docs + JSON UI)
    python translate_docs.py --target-lang de --profile stage-admin

    # Sync ALL non-English locales (de/fr/es) and remove orphans
    python translate_docs.py --target-lang all --clean-orphans --profile stage-admin

Requirements:
    pip install -r requirements.txt   # boto3

AWS auth: uses your existing AWS CLI credentials / environment.
Run from the repo root (the directory containing docs/ and i18n/).
"""

import argparse
import json
import logging
import os
import re
import sys
import time
from pathlib import Path

import boto3
from botocore.exceptions import ClientError

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
BEDROCK_REGION = os.environ.get("BEDROCK_REGION", "us-east-1")
MODEL_ID = os.environ.get("BEDROCK_MODEL_ID", "us.anthropic.claude-haiku-4-5-20251001-v1:0")
MAX_RETRIES = 3
RETRY_DELAY_SECONDS = 5       # base delay — doubles on each retry
MAX_TOKENS = 8192

# Locales this site supports (everything except the en source).
ALL_TARGET_LANGS = ["de", "fr", "es"]

# Docusaurus content sources -> their i18n sub-path.
# Each entry: (source_dir, i18n_plugin_dir)
#   <i18n>/<locale>/<i18n_plugin_dir>/<relative path of source .md>
DOC_INSTANCES = [
    ("docs", "docusaurus-plugin-content-docs/current"),
    ("docs-atlas", "docusaurus-plugin-content-docs-atlas/current"),
]

# Docusaurus JSON UI files live under i18n/en/ and mirror per-locale.
# We translate only the "message" field of each entry.
I18N_DIR = "i18n"
SOURCE_LOCALE = "en"

# Frontmatter fields we DO translate. Everything else is left verbatim
# (slug, sidebar_position, tags, keywords, hide_*, id, etc.).
TRANSLATABLE_FRONTMATTER = {"title", "sidebar_label", "description"}

# Accounting / finance glossary fed into every prompt so terminology stays
# consistent. Mirrors the fiskl-react glossary. Extend per language.
GLOSSARY = {
    "de": {
        "Invoice": "Rechnung",
        "Invoices": "Rechnungen",
        "Quote": "Angebot",
        "Quotes": "Angebote",
        "Expense": "Ausgabe",
        "Expenses": "Ausgaben",
        "Vendor": "Lieferant",
        "Vendors": "Lieferanten",
        "Client": "Kunde",
        "Clients": "Kunden",
        "Account": "Konto",
        "Accounts": "Konten",
        "Balance Sheet": "Bilanz",
        "Trial Balance": "Saldenbilanz",
        "General Ledger": "Hauptbuch",
        "Cash Flow": "Kapitalflussrechnung",
        "Accounts Receivable": "Forderungen",
        "Accounts Payable": "Verbindlichkeiten",
        "Tax": "Steuer",
        "Taxes": "Steuern",
        "Sales Tax": "Umsatzsteuer",
        "VAT": "Mehrwertsteuer",
        "Revenue": "Umsatz",
        "Profit": "Gewinn",
        "Loss": "Verlust",
        "Mileage": "Kilometerstand",
        "Receipt": "Beleg",
        "Receipts": "Belege",
        "Payment": "Zahlung",
        "Payments": "Zahlungen",
        "Subscription": "Abonnement",
        "Dashboard": "Dashboard",
        "Settings": "Einstellungen",
        "Category": "Kategorie",
        "Categories": "Kategorien",
        "Currency": "Währung",
        "Currencies": "Währungen",
        "Team Member": "Teammitglied",
        "Team Members": "Teammitglieder",
        "Aging Report": "Fälligkeitsbericht",
        "Chart of Accounts": "Kontenrahmen",
        "Journal Entry": "Buchungssatz",
        "Reconciliation": "Abstimmung",
    },
    # Add fr / es glossaries here as needed for tighter consistency.
}

LANGUAGE_NAMES = {
    "de": "German",
    "es": "Spanish",
    "fr": "French",
    "pt": "Portuguese",
    "it": "Italian",
    "nl": "Dutch",
    "ja": "Japanese",
    "zh": "Chinese (Simplified)",
    "ar": "Arabic",
}

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)-8s  %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger("translate-docs")

# ---------------------------------------------------------------------------
# Bedrock client
# ---------------------------------------------------------------------------

def get_bedrock_client(region: str, profile: str | None = None):
    if profile:
        session = boto3.Session(profile_name=profile, region_name=region)
    else:
        session = boto3.Session(region_name=region)
    return session.client("bedrock-runtime")


def _glossary_block(target_lang: str) -> str:
    glossary = GLOSSARY.get(target_lang, {})
    if not glossary:
        return ""
    lines = "\n".join(f"  - {eng} → {trans}" for eng, trans in glossary.items())
    return f"\n\nGLOSSARY — always use these translations for consistency:\n{lines}\n"


def build_markdown_system_prompt(target_lang: str) -> str:
    """System prompt for translating Markdown document bodies."""
    lang_name = LANGUAGE_NAMES.get(target_lang, target_lang)
    return f"""You are a professional translator for the help documentation of Fiskl, a cloud accounting and invoicing platform.

Your task: translate Markdown documentation from English to {lang_name}.

RULES — follow these exactly:
1. Translate the prose, headings, list items, table cell text, and link text.
2. Return ONLY the translated Markdown — no commentary, no surrounding code fences, no extra text.
3. Preserve the Markdown structure exactly: heading levels, lists, tables, blockquotes, admonitions (:::note, :::tip, :::warning, etc.).
4. Do NOT translate or alter:
   - Code blocks (```...```) or inline code (`...`) — keep them byte-for-byte.
   - URLs and link targets — only the visible link text may be translated. e.g. [Invoices](/invoicing/overview) -> [Rechnungen](/invoicing/overview).
   - Image paths and alt-attribute references, file paths.
   - `import` statements and any JSX / HTML component tags or their props (e.g. <HomepageFeatures />, <div className="...">). Translate human-readable text content between tags, but never tag names, attributes, or className values.
   - Mermaid diagram code blocks (```mermaid ... ```).
   - Interpolation placeholders like {{variable}}, {{count}} — keep exactly.
   - Proper nouns: Fiskl, Stripe, PayPal, Xero, QuickBooks, Atlas.
   - Currency codes (USD, EUR, GBP), measurement units, email addresses.
   - Date format tokens (MM/DD/YYYY) — keep as-is.
5. Use a formal, professional tone appropriate for business accounting software.
6. Use the standard {lang_name} accounting terminology for finance terms.{_glossary_block(target_lang)}"""


def build_json_system_prompt(target_lang: str) -> str:
    """System prompt for translating Docusaurus JSON message values."""
    lang_name = LANGUAGE_NAMES.get(target_lang, target_lang)
    return f"""You are a professional translator for a cloud accounting and invoicing platform called Fiskl.

Your task: translate JSON key-value pairs from English to {lang_name}.

RULES — follow these exactly:
1. Translate ONLY the values. Never change the keys.
2. Return valid JSON only — no markdown fences, no commentary, no extra text.
3. Preserve the exact JSON structure, nesting, and key order.
4. Preserve ALL interpolation placeholders exactly as-is: {{name}}, {{count}}, {{blogLink}}, etc.
5. Preserve any HTML tags exactly: <strong>, <br/>, <a href="...">, etc.
6. Do NOT translate: currency codes (USD, EUR), proper nouns (Fiskl, Stripe, PayPal, Xero, QuickBooks, Docusaurus), email addresses, URLs.
7. Use formal/professional tone appropriate for business accounting software.
8. For accounting-specific terms, use the standard {lang_name} accounting terminology.
9. If a value is an empty string "", keep it as empty string.{_glossary_block(target_lang)}"""


def _invoke_bedrock(client, system_prompt: str, user_message: str, context: str) -> str:
    """Call Bedrock with retries; return the raw assistant text."""
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            response = client.invoke_model(
                modelId=MODEL_ID,
                contentType="application/json",
                accept="application/json",
                body=json.dumps({
                    "anthropic_version": "bedrock-2023-05-31",
                    "max_tokens": MAX_TOKENS,
                    "system": system_prompt,
                    "messages": [{"role": "user", "content": user_message}],
                }),
            )
            body = json.loads(response["body"].read())
            return body["content"][0]["text"]

        except ClientError as e:
            error_code = e.response["Error"]["Code"]
            if error_code == "ThrottlingException" and attempt < MAX_RETRIES:
                delay = RETRY_DELAY_SECONDS * (2 ** attempt)
                log.warning(f"  Throttled — waiting {delay}s before retry {attempt + 1}")
                time.sleep(delay)
            else:
                raise

    raise RuntimeError(f"Bedrock call failed for {context}")


# ---------------------------------------------------------------------------
# Markdown / frontmatter handling
# ---------------------------------------------------------------------------

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?\n)---\s*\n?", re.DOTALL)


def split_frontmatter(text: str) -> tuple[str, str]:
    """Return (frontmatter_block_without_fences, body). frontmatter may be ''."""
    m = FRONTMATTER_RE.match(text)
    if not m:
        return "", text
    return m.group(1), text[m.end():]


def translate_frontmatter_block(client, fm: str, target_lang: str, context: str) -> str:
    """
    Translate only the title/sidebar_label/description lines of a YAML
    frontmatter block, line by line. Everything else is passed through
    verbatim. We avoid a full YAML parser to preserve formatting, quoting,
    comments, and field order exactly.
    """
    if not fm.strip():
        return fm

    out_lines = []
    # Match `key: value` at top level (no leading whitespace = top-level key).
    kv_re = re.compile(r"^(?P<key>[A-Za-z0-9_-]+):(?P<sep>\s+)(?P<val>.+?)\s*$")
    for line in fm.splitlines(keepends=False):
        m = kv_re.match(line)
        if not m or m.group("key") not in TRANSLATABLE_FRONTMATTER:
            out_lines.append(line)
            continue

        raw_val = m.group("val")
        # Strip surrounding quotes if present; remember which to restore.
        quote = ""
        inner = raw_val
        if len(raw_val) >= 2 and raw_val[0] == raw_val[-1] and raw_val[0] in ("'", '"'):
            quote = raw_val[0]
            inner = raw_val[1:-1]

        if not inner.strip():
            out_lines.append(line)
            continue

        translated = translate_text_value(client, inner, target_lang, f"{context}:{m.group('key')}")
        # Re-quote: if the original was quoted keep that quote; otherwise quote
        # only when the translation now contains a YAML-significant char.
        if quote:
            translated = translated.replace(quote, "")  # avoid breaking the quote
            new_val = f"{quote}{translated}{quote}"
        elif re.search(r"[:#\[\]{}&*!|>'\"%@`]", translated) or translated.strip() != translated:
            new_val = '"' + translated.replace('"', '\\"') + '"'
        else:
            new_val = translated
        out_lines.append(f"{m.group('key')}:{m.group('sep')}{new_val}")

    return "\n".join(out_lines) + ("\n" if fm.endswith("\n") else "")


def translate_text_value(client, value: str, target_lang: str, context: str) -> str:
    """Translate a single short string (a frontmatter value). Plain text in/out."""
    lang_name = LANGUAGE_NAMES.get(target_lang, target_lang)
    system_prompt = build_markdown_system_prompt(target_lang)
    user_message = (
        f"Translate this single short documentation string to {lang_name}. "
        f"Return ONLY the translated text on one line, with no quotes and no commentary.\n\n"
        f"{value}"
    )
    raw = _invoke_bedrock(client, system_prompt, user_message, context).strip()
    # Models occasionally wrap a one-liner in quotes despite instructions.
    if len(raw) >= 2 and raw[0] == raw[-1] and raw[0] in ("'", '"'):
        raw = raw[1:-1]
    return raw.strip()


def translate_markdown_body(client, body: str, target_lang: str, context: str) -> str:
    """Translate a Markdown document body, preserving code/links/JSX."""
    if not body.strip():
        return body
    lang_name = LANGUAGE_NAMES.get(target_lang, target_lang)
    system_prompt = build_markdown_system_prompt(target_lang)
    user_message = (
        f"Translate this Markdown documentation to {lang_name}. "
        f"Return ONLY the translated Markdown.\n\n"
        f"{body}"
    )
    raw = _invoke_bedrock(client, system_prompt, user_message, context).strip()
    # Strip an accidental wrapping ```markdown fence if the model adds one.
    if raw.startswith("```"):
        first_nl = raw.find("\n")
        if first_nl != -1:
            raw = raw[first_nl + 1:]
        if raw.rstrip().endswith("```"):
            raw = raw.rstrip()[:-3].rstrip()
    # Preserve a trailing newline like the source.
    if body.endswith("\n") and not raw.endswith("\n"):
        raw += "\n"
    return raw


def translate_md_file(client, source_text: str, target_lang: str, context: str) -> str:
    """Translate a full .md file: frontmatter (selective) + body."""
    fm, body = split_frontmatter(source_text)
    if fm:
        new_fm = translate_frontmatter_block(client, fm, target_lang, context)
        new_body = translate_markdown_body(client, body, target_lang, context)
        # Preserve the source's blank line(s) between the frontmatter and the
        # body — translate_markdown_body strips them so the model never sees
        # leading whitespace.
        lead = body[: len(body) - len(body.lstrip("\n"))] or "\n"
        translated = f"---\n{new_fm}---\n{lead}{new_body}"
    else:
        translated = translate_markdown_body(client, body, target_lang, context)
    return translated


# ---------------------------------------------------------------------------
# JSON (Docusaurus message) handling
# ---------------------------------------------------------------------------

def translate_json_messages(client, entries: dict, target_lang: str, context: str) -> dict:
    """
    Translate the "message" field of each Docusaurus i18n entry.
    `entries` maps key -> {"message": str, "description"?: str}. We send a
    flat {key: message} map to Bedrock and merge the results back, leaving
    "description" untouched.
    """
    flat = {}
    for key, entry in entries.items():
        if isinstance(entry, dict) and "message" in entry and entry["message"].strip():
            flat[key] = entry["message"]

    if not flat:
        return {}

    lang_name = LANGUAGE_NAMES.get(target_lang, target_lang)
    system_prompt = build_json_system_prompt(target_lang)
    user_message = (
        f"Translate the values of these UI strings to {lang_name}. "
        f"Context: Docusaurus help-site UI labels for the Fiskl accounting platform.\n"
        f"Return ONLY the translated JSON object with the same keys.\n\n"
        f"{json.dumps(flat, ensure_ascii=False, indent=2)}"
    )

    for attempt in range(1, MAX_RETRIES + 1):
        raw = _invoke_bedrock(client, system_prompt, user_message, context).strip()
        if raw.startswith("```"):
            raw = raw.split("\n", 1)[1] if "\n" in raw else raw
            if raw.rstrip().endswith("```"):
                raw = raw.rstrip()[:-3].strip()
        try:
            return json.loads(raw)
        except json.JSONDecodeError as e:
            log.error(f"  Attempt {attempt}/{MAX_RETRIES} — invalid JSON for {context}: {e}")
            if attempt < MAX_RETRIES:
                time.sleep(RETRY_DELAY_SECONDS * attempt)
            else:
                raise RuntimeError(f"Failed to get valid JSON for {context}")
    return {}


# ---------------------------------------------------------------------------
# File-level sync (markdown docs)
# ---------------------------------------------------------------------------

def _is_stale(source_file: Path, target_file: Path) -> bool:
    """A target is stale if its source was modified more recently."""
    return source_file.stat().st_mtime > target_file.stat().st_mtime


def sync_doc_instance(client, repo: Path, source_dir_name: str, plugin_dir: str,
                      target_lang: str, dry_run: bool, force: bool,
                      skip_existing: bool, clean_orphans: bool,
                      only_file: Path | None) -> dict:
    """Translate/sync one docs instance for one locale. Returns stats."""
    source_dir = repo / source_dir_name
    target_root = repo / I18N_DIR / target_lang / plugin_dir
    stats = {"translated": 0, "skipped": 0, "stale": 0, "orphaned": 0, "failed": 0}

    if not source_dir.exists():
        return stats

    source_files = sorted(source_dir.rglob("*.md"))
    if only_file is not None:
        try:
            only_rel = only_file.resolve().relative_to(source_dir.resolve())
        except ValueError:
            only_rel = None
        if only_rel is None:
            return stats
        source_files = [source_dir / only_rel]

    for source_file in source_files:
        relative = source_file.relative_to(source_dir)
        target_file = target_root / relative
        exists = target_file.exists()

        if exists and skip_existing:
            stats["skipped"] += 1
            continue
        if exists and not force and not _is_stale(source_file, target_file):
            stats["skipped"] += 1
            continue

        if exists:
            stats["stale"] += 1
            reason = "stale"
        else:
            reason = "missing"

        log.info(f"  📄 {source_dir_name}/{relative}  ({reason})")
        if dry_run:
            stats["translated"] += 1
            continue

        try:
            source_text = source_file.read_text(encoding="utf-8")
            translated = translate_md_file(client, source_text, target_lang, str(relative))
            target_file.parent.mkdir(parents=True, exist_ok=True)
            target_file.write_text(translated, encoding="utf-8")
            if not translated.endswith("\n"):
                with open(target_file, "a", encoding="utf-8") as f:
                    f.write("\n")
            log.info(f"     ✅ {target_file}")
            stats["translated"] += 1
        except Exception as e:
            log.error(f"     ❌ FAILED {relative}: {e}")
            stats["failed"] += 1

    # Orphan handling — only when sweeping the whole instance (not --file).
    if only_file is None and target_root.exists():
        source_rel = {f.relative_to(source_dir) for f in source_dir.rglob("*.md")}
        for tf in sorted(target_root.rglob("*.md")):
            rel = tf.relative_to(target_root)
            if rel not in source_rel:
                stats["orphaned"] += 1
                if clean_orphans and not dry_run:
                    tf.unlink()
                    log.info(f"     🧹 removed orphan {plugin_dir}/{rel}")
                else:
                    log.info(f"     ⚠️  orphan (use --clean-orphans to remove): {plugin_dir}/{rel}")

    return stats


# ---------------------------------------------------------------------------
# File-level sync (JSON UI strings)
# ---------------------------------------------------------------------------

def sync_json_ui(client, repo: Path, target_lang: str, dry_run: bool,
                 force: bool, only_file: Path | None) -> dict:
    """Translate missing/stale "message" values in the Docusaurus JSON files."""
    source_root = repo / I18N_DIR / SOURCE_LOCALE
    stats = {"files": 0, "keys": 0, "skipped": 0, "failed": 0}

    if not source_root.exists():
        return stats

    json_files = sorted(source_root.rglob("*.json"))
    if only_file is not None:
        if only_file.suffix != ".json":
            return stats
        try:
            only_rel = only_file.resolve().relative_to(source_root.resolve())
        except ValueError:
            return stats
        json_files = [source_root / only_rel]

    for source_file in json_files:
        relative = source_file.relative_to(source_root)
        target_file = repo / I18N_DIR / target_lang / relative
        stats["files"] += 1

        source_entries = json.loads(source_file.read_text(encoding="utf-8"))
        target_entries = {}
        if target_file.exists():
            target_entries = json.loads(target_file.read_text(encoding="utf-8"))

        # Which keys need translating? Missing in target, or (force) all.
        to_translate = {}
        for key, entry in source_entries.items():
            if not isinstance(entry, dict) or "message" not in entry:
                continue
            tgt = target_entries.get(key)
            already = (
                isinstance(tgt, dict)
                and tgt.get("message", "").strip()
                and tgt.get("message") != entry.get("message")  # differs => looks translated
            )
            if force or not already:
                to_translate[key] = entry

        if not to_translate:
            stats["skipped"] += 1
            continue

        log.info(f"  🔤 {relative}: {len(to_translate)} message(s)")
        if dry_run:
            stats["keys"] += len(to_translate)
            continue

        try:
            translated = translate_json_messages(client, to_translate, target_lang, str(relative))
            # Build merged output preserving source key order + descriptions.
            merged = {}
            for key, entry in source_entries.items():
                if not isinstance(entry, dict):
                    merged[key] = entry
                    continue
                new_entry = dict(entry)
                if key in translated:
                    new_entry["message"] = translated[key]
                elif key in target_entries and isinstance(target_entries[key], dict):
                    new_entry["message"] = target_entries[key].get("message", entry.get("message"))
                merged[key] = new_entry

            target_file.parent.mkdir(parents=True, exist_ok=True)
            with open(target_file, "w", encoding="utf-8") as f:
                json.dump(merged, f, ensure_ascii=False, indent=2)
                f.write("\n")
            log.info(f"     ✅ {target_file}")
            stats["keys"] += len(to_translate)
        except Exception as e:
            log.error(f"     ❌ FAILED {relative}: {e}")
            stats["failed"] += 1

    return stats


# ---------------------------------------------------------------------------
# Orchestration
# ---------------------------------------------------------------------------

def run_for_locale(client, repo: Path, target_lang: str, args) -> dict:
    lang_name = LANGUAGE_NAMES.get(target_lang, target_lang)
    log.info("")
    log.info(f"── {lang_name} ({target_lang}) ──")

    only_file = Path(args.file) if args.file else None
    totals = {"translated": 0, "stale": 0, "orphaned": 0, "json_keys": 0, "failed": 0}

    # Markdown docs — both instances.
    for source_dir_name, plugin_dir in DOC_INSTANCES:
        stats = sync_doc_instance(
            client, repo, source_dir_name, plugin_dir, target_lang,
            args.dry_run, args.force, args.skip_existing, args.clean_orphans, only_file,
        )
        totals["translated"] += stats["translated"]
        totals["stale"] += stats["stale"]
        totals["orphaned"] += stats["orphaned"]
        totals["failed"] += stats["failed"]

    # JSON UI strings (skipped automatically when --file points at a .md).
    if not args.skip_json:
        jstats = sync_json_ui(client, repo, target_lang, args.dry_run, args.force, only_file)
        totals["json_keys"] += jstats["keys"]
        totals["failed"] += jstats["failed"]

    log.info(f"  Summary: {totals['translated']} md file(s) "
             f"({totals['stale']} stale), {totals['json_keys']} json message(s), "
             f"{totals['orphaned']} orphan(s), {totals['failed']} failed")
    return totals


def main():
    parser = argparse.ArgumentParser(
        description="Translate / sync the Fiskl Docusaurus help guide via AWS Bedrock.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Dry run for German
  python translate_docs.py --target-lang de --dry-run

  # Single file sanity check
  python translate_docs.py --target-lang de --file docs/intro.md --profile stage-admin

  # Translate everything for German
  python translate_docs.py --target-lang de --profile stage-admin

  # Sync all locales (de/fr/es) and remove orphaned files
  python translate_docs.py --target-lang all --clean-orphans --profile stage-admin

  # Higher quality with Sonnet
  BEDROCK_MODEL_ID=us.anthropic.claude-sonnet-4-20250514-v1:0 \\
    python translate_docs.py --target-lang de --profile stage-admin
        """,
    )
    parser.add_argument("--target-lang", required=True,
                        help="Target language: de, fr, es, or 'all' for every non-English locale")
    parser.add_argument("--repo-root", default=".",
                        help="Repo root containing docs/ and i18n/ (default: current dir)")
    parser.add_argument("--file", default=None,
                        help="Translate a single source file only, e.g. docs/intro.md")
    parser.add_argument("--dry-run", action="store_true",
                        help="Report what would be translated without calling Bedrock")
    parser.add_argument("--force", action="store_true",
                        help="Re-translate even existing/non-stale targets (overwrites)")
    parser.add_argument("--skip-existing", action="store_true",
                        help="Skip any .md target that already exists (no staleness check)")
    parser.add_argument("--clean-orphans", action="store_true",
                        help="Delete target files with no matching English source")
    parser.add_argument("--skip-json", action="store_true",
                        help="Skip the Docusaurus JSON UI strings; translate docs only")
    parser.add_argument("--profile", default=None,
                        help="AWS CLI profile name, e.g. stage-admin")

    args = parser.parse_args()

    repo = Path(args.repo_root).resolve()
    if not (repo / "docs").exists() or not (repo / I18N_DIR).exists():
        log.error(f"Run from the repo root — expected docs/ and {I18N_DIR}/ under {repo}")
        sys.exit(1)

    if args.target_lang == "all":
        targets = ALL_TARGET_LANGS
    else:
        targets = [args.target_lang]

    log.info("=" * 60)
    log.info("  Fiskl Help i18n Translation")
    log.info(f"  Repo:         {repo}")
    log.info(f"  Targets:      {', '.join(targets)}")
    log.info(f"  Instances:    {', '.join(d[0] for d in DOC_INSTANCES)}")
    log.info(f"  Model:        {MODEL_ID}")
    log.info(f"  Region:       {BEDROCK_REGION}")
    log.info(f"  Profile:      {args.profile or '(default)'}")
    log.info(f"  Dry run:      {args.dry_run}")
    log.info(f"  Clean orphans:{args.clean_orphans}")
    log.info("=" * 60)

    client = None if args.dry_run else get_bedrock_client(BEDROCK_REGION, args.profile)

    grand = {"translated": 0, "json_keys": 0, "orphaned": 0, "failed": 0}
    for lang in targets:
        t = run_for_locale(client, repo, lang, args)
        grand["translated"] += t["translated"]
        grand["json_keys"] += t["json_keys"]
        grand["orphaned"] += t["orphaned"]
        grand["failed"] += t["failed"]

    log.info("")
    log.info("=" * 60)
    if args.dry_run:
        log.info("  DRY RUN complete")
        log.info(f"  Would translate: {grand['translated']} md file(s), "
                 f"{grand['json_keys']} json message(s)")
        log.info(f"  Orphans found:   {grand['orphaned']}")
    else:
        log.info("  Done!")
        log.info(f"  Translated: {grand['translated']} md file(s), "
                 f"{grand['json_keys']} json message(s)")
        if grand["orphaned"]:
            log.info(f"  Orphans:    {grand['orphaned']} "
                     f"({'removed' if args.clean_orphans else 'left in place'})")
        if grand["failed"]:
            log.info(f"  Failed:     {grand['failed']}")
    log.info("=" * 60)

    sys.exit(1 if grand["failed"] else 0)


if __name__ == "__main__":
    main()
