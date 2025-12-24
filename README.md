# Fiskl Help Center

This site is built with Docusaurus 3 and is architected specifically to support both human readers and RAG (Retrieval-Augmented Generation) AI indexing.

---

## 📑 Table of Contents

- [Getting Started](#-getting-started)
- [Architecture](#-architecture-strategy)
- [Content Structure](#-content-structure)
- [Creating Documentation](#-creating-documentation)
- [Documentation Standards](#-documentation-standards)
- [Review & Quality Control](#-review--quality-control)
- [Translation Management](#-translation-management)
- [Available Scripts](#-available-scripts)
- [RAG AI Optimization](#-rag-ai-optimization)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Local Development

In development, Docusaurus runs one language at a time:

```bash
# English (Default)
npm run dev

# French
npm run dev -- --locale fr

# Spanish
npm run dev -- --locale es
```

Access the site at: **http://localhost:3005**

### Production Preview

The language switcher only works with a full build:

```bash
npm run build
npm run serve
```

---

## 🎯 Architecture Strategy

### Why the Docusaurus "Docs" Plugin?

Unlike standard web pages, this site primarily utilizes the Docusaurus Docs Plugin because:

- **Semantic Hierarchy**: Generates sidebar and breadcrumbs that provide RAG AI with "parent-child" context
- **Enhanced Navigation**: Automatic "Next/Previous" buttons and Table of Contents
- **Scalable i18n**: Separates documentation logic from static pages for managing thousands of help articles

### Project Structure

```
fiskl-help/
├── docs/                           # English documentation (source of truth)
│   ├── intro.md
│   ├── getting-started/
│   ├── invoicing/
│   ├── expenses/
│   └── accounting/
│
├── i18n/                          # Translations
│   ├── fr/
│   │   └── docusaurus-plugin-content-docs/
│   │       └── current/           # French docs (mirrors docs/)
│   └── es/
│       └── docusaurus-plugin-content-docs/
│           └── current/           # Spanish docs (mirrors docs/)
│
├── scripts/
│   ├── manage-translation.js      # Translation sync script
│   ├── generate-docs-prompt.ts    # Documentation generator
│   ├── review-docs-prompt.ts      # Documentation review generator
│   └── lint-docs.js               # Automated style linter
│
├── script-docs/
│   ├── dsl/
│   │   └── documentation-standards-dsl.md  # Standards DSL
│   └── EDITORIAL_GUIDE.md         # Editorial guide & quick reference
│
├── examples/
│   └── REVIEW_EXAMPLES.md         # Real review examples
│
├── drafts/                        # Raw content for generator (optional)
│   ├── invoicing/
│   └── expenses/
│
├── static/
│   └── img/                       # Images organized by category
│       ├── accounting/
│       ├── invoicing/
│       ├── expenses/
│       └── banking/
│
└── src/                           # Docusaurus theme and components
    ├── components/
    ├── css/
    └── pages/
```

---

## 📂 Content Structure

| Language | Folder Path | Purpose |
|----------|-------------|---------|
| **English** | `docs/` | Source of truth for all content |
| **French** | `i18n/fr/docusaurus-plugin-content-docs/current/` | Full French markdown files |
| **Spanish** | `i18n/es/docusaurus-plugin-content-docs/current/` | Full Spanish markdown files |

**Important**: We create full markdown files for every language (not string substitution) to ensure high-quality translations.

---

## ✍️ Creating Documentation

### Quick Start: The AI-Powered Generator

**Best for**: Creating new documentation that follows all standards automatically.

#### Step 1: Create a Draft File

Create a file with your raw content (can be rough notes):

```txt
# drafts/my-feature.txt

How to use the feature

Users can do X, Y, and Z.

Steps:
- Open the dashboard
- Click the button
- Fill in the form
- Save

Tips:
- Use shortcuts for faster work
- Check validation before saving
```

#### Step 2: Generate Claude Prompt

```bash
npm run generate-doc -- \
  --file="drafts/my-feature.txt" \
  --title="Using the Feature" \
  --category="Features"
```

#### Step 3: Get Formatted Documentation

1. Copy the output from the command
2. Paste into Claude
3. Claude returns formatted Docusaurus markdown with:
   - Complete frontmatter (title, description, keywords)
   - Proper H2/H3 hierarchy
   - Bolded UI elements
   - Professional tone
   - SEO optimization

#### Step 4: Save and Sync

```bash
# Save to docs folder
# docs/features/my-feature.md

# Sync to translation folders
npm run create-page features/my-feature.md
```

### Manual Creation (Not Recommended)

You can create markdown files directly in `docs/`, but you'll need to:
- Manually ensure all standards are followed
- Run linter and review tools to verify quality
- Handle translations manually

---

## 📏 Documentation Standards

We follow a comprehensive DSL (Domain Specific Language) for documentation quality.

### Critical Standards (Never Break These)

| Rule | Standard | Never Use |
|------|----------|-----------|
| **UI Interactions** | Select | click, press, choose, tap |
| **Sentence Length** | Max 25 words | Longer sentences |
| **Paragraph Length** | Max 6 sentences | Long blocks of text |
| **Tense** | Present for features | Future (except outcomes) |
| **Voice** | Active voice | Passive voice |
| **H1 in Content** | Never (only in frontmatter) | Using # in markdown |
| **Frontmatter** | Always required | Missing metadata |

### Required Frontmatter

Every page must have:

```markdown
---
title: "The Display Name"
description: "SEO description 150-160 characters that summarizes the page"
keywords: ["keyword1", "keyword2", "keyword3"]
sidebar_position: 1
---
```

### Opening Summary Pattern

Every page must start with:

```markdown
This guide explains [what] and helps you [accomplish what goal].
```

### Formatting Standards

- **Bold** for UI elements: **Save**, **Settings**, **Dashboard**
- `Code` for technical values: `invoice_001`, `/api/invoices`
- "Quotes" for exact text to enter: Enter "monthly subscription"
- Numbered lists for sequential steps
- Bullet points for non-sequential items

### Terminology Standards

| ✅ Use This | ❌ Never Use |
|------------|-------------|
| Dashboard | Home page, Main screen |
| Client | Customer (unless B2C) |
| Ledger account | Account (alone) |
| Multi-currency | Multicurrency, Multi currency |
| Base currency | Home currency, Default currency |
| Select | Click, Press, Choose, Tap |
| Email | E-mail |

### Complete Standards

For complete standards reference:
- **[Documentation Standards DSL](./script-docs/dsl/documentation-standards-dsl.md)** - Full technical standards
- **[Editorial Guide](./script-docs/EDITORIAL_GUIDE.md)** - Quick reference for writers

---

## 📝 Review & Quality Control

We use a **three-tier review system** to ensure documentation quality and consistency.

```
┌─────────────────────────────────────────────────────────────┐
│                    TIER 1: Automated Linter                  │
│          Fast, catches obvious issues immediately            │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  TIER 2: AI-Powered Review                   │
│         Comprehensive analysis using Claude + DSL            │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  TIER 3: Human Editorial Review              │
│           Final check by documentation team member           │
└─────────────────────────────────────────────────────────────┘
```

### Tier 1: Automated Linter

**Command:**
```bash
npm run lint-docs docs/path/to/file.md
```

**What It Checks:**
- Missing or incomplete frontmatter
- H1 headings in content
- "Click/press/choose" instead of "Select"
- Sentences over 25 words
- Paragraphs over 6 sentences
- Missing image alt text
- Poor link text ("click here")
- Inconsistent terminology
- Too many callouts (3+)

**Output Levels:**
- 🔴 **Critical** - Must fix before publishing
- 🟡 **Warnings** - Should fix for quality
- 💡 **Suggestions** - Nice to have

**Example Output:**
```bash
📝 Linting: docs/invoicing/create-invoice.md

🔴 CRITICAL (2) - Must fix before publishing:

1. Line 28: Use "Select" instead of "click"
   Text: "1. Click the New Invoice button..."
   Fix: 1. Select the **New Invoice** button...

2. Line 45: Missing image alt text
   Text: ![](/img/invoice-form.png)
   Fix: Add descriptive alt text explaining what the image shows

📊 SUMMARY
─────────
Critical Issues: 2
Warnings: 1
Suggestions: 1
Total: 4

❌ Status: BLOCKED - Fix critical issues before publishing
```

### Tier 2: AI-Powered Review

Generate comprehensive review prompts for Claude.

**Commands:**

```bash
# Full review (most common)
npm run review-doc -- --file=docs/invoicing/create-invoice.md

# Quick review (fast check)
npm run review-doc -- --file=docs/banking/connect.md --type=quick

# Style-only review (fine-tuning)
npm run review-doc -- --file=docs/expenses/create.md --type=style-only

# Rewrite recommendations
npm run review-doc -- --file=docs/old-doc.md --format=rewrite
```

**Review Types:**

| Type | Use Case | Time | Output |
|------|----------|------|--------|
| `full` | Complete quality audit | ~5 min | Detailed analysis with scores |
| `quick` | Fast pre-publish check | ~2 min | Top 3 issues + status |
| `style-only` | Fine-tune good content | ~3 min | Line-by-line style fixes |

**Output Formats:**

| Format | Best For |
|--------|----------|
| `detailed` | Understanding all issues deeply |
| `checklist` | Working through fixes systematically |
| `rewrite` | Major content overhauls |

**Workflow:**
1. Run the command
2. Copy output and paste into Claude
3. Claude returns comprehensive review
4. Fix issues based on review
5. Run linter to verify fixes

### Tier 3: Human Editorial Review

Use the checklist in **[EDITORIAL_GUIDE.md](./script-docs/EDITORIAL_GUIDE.md)** for final review.

**Review Checklist:**
- [ ] Content is accurate and complete
- [ ] Instructions tested and verified
- [ ] Screenshots match current UI
- [ ] Related topics linked
- [ ] Tone matches Fiskl voice
- [ ] No unexplained industry jargon

### Standard Review Workflow

**For New Documentation:**

```bash
# 1. Create the document
# 2. Run linter
npm run lint-docs docs/new-doc.md

# 3. Fix critical issues

# 4. Run full review
npm run review-doc -- --file=docs/new-doc.md

# 5. Paste prompt into Claude and get review
# 6. Make recommended changes

# 7. Run linter again to verify
npm run lint-docs docs/new-doc.md

# 8. Get peer review using editorial checklist
# 9. Final polish and publish
```

**For Updating Existing Documentation:**

```bash
# 1. Make your changes

# 2. Run quick review
npm run review-doc -- --file=docs/existing-doc.md --type=quick

# 3. If major issues found, run full review
npm run review-doc -- --file=docs/existing-doc.md --type=full

# 4. Fix issues

# 5. Run linter
npm run lint-docs docs/existing-doc.md

# 6. Commit if no critical issues
```

### Quality Gates (Pre-Commit Checklist)

Before committing any documentation:

**Automated Checks:**
- [ ] Linter passes with no critical issues
- [ ] AI review score is 8+ out of 10
- [ ] All links work
- [ ] Images load correctly

**Manual Checks:**
- [ ] Tested instructions (verified working)
- [ ] Screenshots match current UI
- [ ] Peer reviewed (if major changes)
- [ ] Translations synced (if applicable)

### Documentation Quality Resources

- **[Review Examples](./examples/REVIEW_EXAMPLES.md)** - Real reviews of actual docs
- **[Editorial Guide](./script-docs/EDITORIAL_GUIDE.md)** - Complete style guide
- **[DSL Standards](./script-docs/dsl/documentation-standards-dsl.md)** - Technical standards

---

## 🌐 Translation Management

We create **full markdown files** for every language to ensure high-quality translations.

### Translation Workflow

#### For New Content

```bash
# 1. Write English version in docs/
# docs/invoicing/recurring-invoices.md

# 2. Sync to translation folders
npm run create-page invoicing/recurring-invoices.md

# 3. Translate the files
# Edit: i18n/fr/docusaurus-plugin-content-docs/current/invoicing/recurring-invoices.md
# Edit: i18n/es/docusaurus-plugin-content-docs/current/invoicing/recurring-invoices.md

# 4. Test each locale
npm run dev -- --locale fr
npm run dev -- --locale es
```

#### For Updating Existing Content

```bash
# 1. Update the English source in docs/

# 2. Re-sync to translation folders
npm run create-page invoicing/recurring-invoices.md

# 3. Update translations with new content

# 4. Test and verify all languages
```

#### For Moving/Renaming Files

```bash
# Move file in all languages at once
npm run move-page old-path/file.md new-path/file.md
```

#### For Deleting Files

```bash
# Delete file from all languages at once
npm run delete-page path/to/file.md
```

### Translation Rules

1. **Always Create English First**: English in `docs/` is the source of truth
2. **Use create-page Script**: Never manually create translation folder structures
3. **Translate Everything**: Including frontmatter titles, button labels, alt text
4. **Keep Structure Identical**: Same headings, same formatting
5. **Test Each Locale**: Verify translations work correctly

### No Manual Folder Creation

❌ **Wrong:**
```bash
mkdir i18n/fr/docusaurus-plugin-content-docs/current/features
touch i18n/fr/docusaurus-plugin-content-docs/current/features/new-feature.md
```

✅ **Correct:**
```bash
# 1. Create English version first
# docs/features/new-feature.md

# 2. Use the script
npm run create-page features/new-feature.md
```

---

## 🔧 Available Scripts

### Development

| Script | Command | Description |
|--------|---------|-------------|
| **Dev Server** | `npm run dev` | Start dev server (English) |
| | `npm run dev -- --locale fr` | Start dev server (French) |
| | `npm run dev -- --locale es` | Start dev server (Spanish) |
| **Production** | `npm run build` | Build all languages |
| | `npm run serve` | Serve built site locally |
| **Cache** | `npm run clear` | Clear Docusaurus cache |

### Content Creation

| Script | Command | Description |
|--------|---------|-------------|
| **Generate** | `npm run generate-doc` | Generate doc from draft (uses `tsx`) |
| **Sync** | `npm run create-page <file.md>` | Sync file to translations (uses `node`) |
| **Move** | `npm run move-page <old> <new>` | Move/rename in all languages (uses `node`) |
| **Delete** | `npm run delete-page <file.md>` | Delete from all languages (uses `node`) |

**Examples:**

```bash
# Generate documentation from draft
npm run generate-doc -- \
  --file="drafts/my-feature.txt" \
  --title="My Feature" \
  --category="Features"

# Create/sync new page
npm run create-page invoicing/recurring-invoices.md

# Move page
npm run move-page old-path/file.md new-path/file.md

# Delete page
npm run delete-page path/to/file.md
```

### Review & Quality

| Script | Command | Description |
|--------|---------|-------------|
| **Lint** | `npm run lint-docs <file>` | Automated style check (uses `node`) |
| **Review** | `npm run review-doc` | Generate review prompt (uses `tsx`) |

**Examples:**

```bash
# Run linter
npm run lint-docs docs/invoicing/create-invoice.md

# Full review
npm run review-doc -- --file=docs/invoicing/create-invoice.md

# Quick review
npm run review-doc -- --file=docs/banking/connect.md --type=quick

# Style-only review
npm run review-doc -- \
  --file=docs/expenses/create.md \
  --type=style-only

# Rewrite recommendations
npm run review-doc -- \
  --file=docs/old-doc.md \
  --type=full \
  --format=rewrite
```

### Translation Management

| Script | Command | Description |
|--------|---------|-------------|
| **Strings** | `npm run write-translations` | Extract translatable strings |
| **Headings** | `npm run write-heading-ids` | Generate heading IDs |

### Technical

| Script | Command | Description |
|--------|---------|-------------|
| **Typecheck** | `npm run typecheck` | Run TypeScript type checking |
| **Docusaurus** | `npm run docusaurus` | Direct Docusaurus commands |

---

## 🤖 RAG AI Optimization

This site is optimized for RAG (Retrieval-Augmented Generation) AI systems.

### Key Optimizations

#### 1. Semantic Structure
- Clear H1 → H2 → H3 hierarchy
- Breadcrumb navigation
- Sidebar relationships (parent/child)

#### 2. Context Injection
- Every page starts with a summary
- Descriptive frontmatter
- Clear section titles

#### 3. Metadata
- `description` in frontmatter (150-160 chars)
- `keywords` for topic identification
- Proper heading structure for context

#### 4. Link Strategy
- Use descriptive anchor text
- Link to related concepts
- Avoid "click here" or vague links

### Why This Matters

When an AI system indexes this content, it can:
- Understand the hierarchy and relationships
- Extract meaningful context from metadata
- Provide accurate answers with proper citations
- Navigate related concepts effectively

### Header Hierarchy Rules

Use exactly one `# H1` per page (automatically from frontmatter title). Use `## H2` and `### H3` for sub-sections. Never skip levels.

**Example:**
```markdown
---
title: "Main Title"
---

This guide explains... (opening summary)

## First Section

### Subsection

### Another Subsection

## Second Section
```

### Images and Alt Text

Images enhance documentation and provide visual context for RAG AI systems.

**File Structure:**
```
static/
└── img/
    ├── accounting/
    ├── invoicing/
    ├── expenses/
    └── banking/
```

**Usage:**
```markdown
![Descriptive alt text explaining what the image shows](/img/category/filename.png)
```

**Alt Text Rules:**
- Be specific and descriptive (not just "Screenshot" or "Dashboard")
- Describe what users will see and key elements
- Translate alt text in all language versions
- Include context about highlighted or important areas

**Examples:**

✅ **Good:**
```markdown
![Balance Sheet showing Assets, Liabilities, and Equity sections with current year figures](/img/accounting/balance-sheet-sample.png)
```

❌ **Poor:**
```markdown
![Balance Sheet](/img/accounting/balance-sheet-sample.png)
```

**Image Guidelines:**
- Use `/img/` prefix (absolute path from static folder)
- Organize by category matching docs structure
- Use descriptive filenames: `balance-sheet-sample.png`
- Optimize images for web (PNG for UI, JPG for photos)
- Max 1200px wide for screenshots
- Annotate important areas with red boxes/arrows

---

## 🛠 Troubleshooting

### Build Errors

**Problem**: Build fails with "File not found in translation"

**Solution**: Ensure all files exist in all language folders:
```bash
npm run create-page path/to/file.md
```

### Language Switcher Not Working

**Problem**: Language switcher doesn't appear or doesn't work

**Solution**: The switcher only works with a full build:
```bash
npm run build
npm run serve
```

### Content Not Updating

**Problem**: Changes to docs don't appear in the browser

**Solution**: Clear the cache:
```bash
npm run clear
npm run dev
```

### Translation Out of Sync

**Problem**: Translation folders missing files from `docs/`

**Solution**: Re-sync the file:
```bash
npm run create-page path/to/file.md
```

### Linter Fails to Run

**Problem**: `npm run lint-docs` doesn't work

**Solution**: Ensure the file path is correct and the file exists:
```bash
# Check file exists
ls -la docs/path/to/file.md

# Run with correct path
npm run lint-docs docs/path/to/file.md
```

### Review Script Fails

**Problem**: `npm run review-doc` produces an error

**Solution**: Check that DSL and file exist:
```bash
# Verify DSL exists
ls -la script-docs/dsl/documentation-standards-dsl.md

# Verify document exists
ls -la docs/path/to/file.md

# Run with correct path
npm run review-doc -- --file=docs/path/to/file.md
```

---

## 🤝 Contributing

### Documentation Guidelines

1. **Use the generator** for new documentation (see [Creating Documentation](#-creating-documentation))
2. **Follow the DSL** standards (see [Documentation Standards](#-documentation-standards))
3. **Run quality checks** before committing (see [Review & Quality Control](#-review--quality-control))
4. **Test all languages** if translations are updated
5. **Verify RAG compatibility** - proper hierarchy and metadata

### Recommended Workflow

```bash
# 1. Create feature branch
git checkout -b docs/new-feature-guide

# 2. Create English version using generator
npm run generate-doc -- \
  --file="drafts/feature.txt" \
  --title="Feature Guide" \
  --category="Features"

# 3. Save generated content to docs/
# docs/features/new-feature.md

# 4. Run linter
npm run lint-docs docs/features/new-feature.md

# 5. Fix any critical issues

# 6. Run review
npm run review-doc -- --file=docs/features/new-feature.md --type=quick

# 7. If score < 8, run full review and fix issues

# 8. Sync to translations
npm run create-page features/new-feature.md

# 9. Translate files
# Edit i18n/fr/.../features/new-feature.md
# Edit i18n/es/.../features/new-feature.md

# 10. Test all languages
npm run build
npm run serve

# 11. Final lint check
npm run lint-docs docs/features/new-feature.md

# 12. Commit and push
git add .
git commit -m "docs: Add new feature guide with translations"
git push origin docs/new-feature-guide
```

### Before Committing

Run through this checklist:

**Quality Checks:**
- [ ] Linter passes with no critical issues
- [ ] Review score is 8+ (if applicable)
- [ ] All links work
- [ ] Images have descriptive alt text
- [ ] Instructions tested and verified

**Translation Checks:**
- [ ] Files synced to all languages
- [ ] Translations complete (no English in FR/ES)
- [ ] Alt text translated
- [ ] Frontmatter translated

**Testing:**
- [ ] Dev server works for all languages
- [ ] Build succeeds
- [ ] No broken links in production build

---

## 📚 Additional Resources

### Documentation

- **[Generator Guide](./GENERATOR_README.md)** - Complete guide to documentation generator
- **[Documentation Standards DSL](./script-docs/dsl/documentation-standards-dsl.md)** - Full technical standards
- **[Editorial Guide](./script-docs/EDITORIAL_GUIDE.md)** - Quick reference for writers
- **[Review Examples](./examples/REVIEW_EXAMPLES.md)** - Real-world review examples

### External Resources

- **[Docusaurus Documentation](https://docusaurus.io/)** - Official Docusaurus docs
- **[Markdown Guide](https://www.markdownguide.org/)** - Markdown syntax reference

### Getting Help

For questions or issues:

1. **Check this README** first
2. **Review the standards** in DSL and Editorial Guide
3. **Look at examples** in Review Examples
4. **Contact the development team**
5. **Open an issue** in the repository

---

## 📊 Quick Reference

### The 10 Commandments of Fiskl Docs

1. **Always use "Select"** for UI interactions (never click/press/choose)
2. **Max 25 words per sentence** (target 15-20)
3. **Max 6 sentences per paragraph** (target 3-5)
4. **Present tense for features** (future only for outcomes)
5. **Active voice always** (never passive)
6. **Bold all UI elements** (**Button**, **Menu**)
7. **No H1 in content** (H2 and H3 only)
8. **Descriptive alt text on images** (not just labels)
9. **Max 2-3 callouts per page**
10. **Check the terminology dictionary** (be consistent)

### Quick Terminology Reference

| Right | Wrong |
|-------|-------|
| Dashboard | Home page, Main screen |
| Client | Customer |
| Ledger account | Account (alone) |
| Multi-currency | Multicurrency, Multi currency |
| Base currency | Home currency, Default currency |
| Select | Click, Press, Choose, Tap |
| Email | E-mail |

### Quick Command Reference

```bash
# Create new doc
npm run generate-doc -- --file=drafts/doc.txt --title="Title"

# Lint check
npm run lint-docs docs/path/to/file.md

# Quick review
npm run review-doc -- --file=docs/path/to/file.md --type=quick

# Sync translations
npm run create-page path/to/file.md

# Dev server
npm run dev
```

---

*Built with ❤️ using Docusaurus 3*

**Documentation Version:** 2.0  
**Last Updated:** January 2025