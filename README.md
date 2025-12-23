# Fiskl Help Center

This site is built with Docusaurus 3 and is architected specifically to support both human readers and RAG (Retrieval-Augmented Generation) AI indexing.

## 🎯 Architecture Strategy: Why the "Docs" Plugin?

Unlike standard web pages, this site primary utilizes the Docusaurus Docs Plugin. We use this approach because:

- **Semantic Hierarchy**: The Docs plugin generates a sidebar and breadcrumbs that provide RAG AI with "parent-child" context.
- **Navigation**: It provides automatic "Next/Previous" buttons and a Table of Contents for better user experience.
- **Scalable i18n**: It separates documentation logic from static pages, making it easier to manage translations for thousands of help articles.

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Local Development

In development, Docusaurus runs one language at a time.

- **English (Default)**: `npm run dev`
- **French**: `npm run dev -- --locale fr`
- **Spanish**: `npm run dev -- --locale es`

Access the site at: http://localhost:3005

### Production Preview (Language Switcher)

The language switcher in the navbar only works if all languages are built. To test the full site experience:

```bash
npm run build
npm run serve
```

---

## 📂 Content Structure Reference

| Language | Folder Path | Purpose |
|----------|-------------|---------|
| English | `docs/` | The "Source of Truth" for all help content. |
| French | `i18n/fr/docusaurus-plugin-content-docs/current/` | Full French markdown files. |
| Spanish | `i18n/es/docusaurus-plugin-content-docs/current/` | Full Spanish markdown files. |

---

## ✍️ Creating New Documentation

### Option 1: Manual Creation (Not Recommended)

You can create markdown files directly in `docs/`, but you'll need to manually handle translations.

### Option 2: Using the Documentation Generator (Recommended)

For consistent, high-quality documentation that follows our standards, use the AI-powered generator:

#### Quick Start

1. **Create a draft file** with your raw content (can be rough notes):

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

2. **Generate a Claude prompt**:

```bash
npm run generate-doc -- \
  --file="drafts/my-feature.txt" \
  --title="Using the Feature" \
  --category="Features"
```

3. **Copy the output and paste into Claude**

4. **Claude returns formatted Docusaurus markdown** with:
   - Complete frontmatter (title, description, keywords)
   - Proper H2/H3 hierarchy
   - Bolded UI elements
   - Professional tone
   - SEO optimization

5. **Save to your docs folder**: `docs/features/my-feature.md`

#### Documentation Generator Details

For complete documentation generator usage, see: **[GENERATOR_README.md](./GENERATOR_README.md)**

The generator uses a DSL (Domain Specific Language) to ensure all documentation follows our standards for:
- Formatting and structure
- Tone and voice
- SEO optimization
- RAG AI compatibility
- Component usage

---

## 🛠 The Translation Management Script

We do not use simple "string substitution" for help articles. To ensure high-quality localizations, we create full markdown files for every language.

The script `npm run create-page <filename.md>` automates this:

- **Source Check**: It checks if the file exists in `docs/`. If not, it creates a template.
- **Directory Scaffolding**: It creates the complex i18n folder paths automatically (e.g., `i18n/fr/docusaurus-plugin-content-docs/current/`).
- **Synchronization**: It copies the English source to the French and Spanish folders so translators have a base to work from.

### Usage

```bash
# To create or sync a new help article
npm run create-page invoicing-guide.md
```

**Note**: Create the English version first (in `docs/`), then run this command to sync to translation folders.

---

## 📝 Rules for Adding/Updating Content

Follow these rules to maintain RAG AI compatibility and site integrity:

### 1. Header Hierarchy
Use exactly one `# H1` per page. Use `## H2` and `### H3` for sub-sections. Never skip levels (e.g., don't go from H1 to H3).

**Example:**
```markdown
# Main Title (only one per page)

## First Section

### Subsection

### Another Subsection

## Second Section
```

### 2. Frontmatter
Every new page must contain:

```markdown
---
title: "The Display Name"
description: "A 1-2 sentence summary (crucial for AI indexing)"
sidebar_position: 1
---
```

- **title**: The display name in navigation
- **description**: 150-160 characters, used for SEO and AI indexing
- **sidebar_position**: Number to determine menu order

### 3. No Manual Folder Creation
Always use the `npm run create-page` script to ensure paths are correct.

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

### 4. Full Page Translation
Do not leave English text in translated files. The RAG AI will get confused if the `/fr/` path contains English content.

**Translation Workflow:**
1. Write English version in `docs/`
2. Run `npm run create-page` to sync to translation folders
3. Translator edits `i18n/fr/.../file.md` and `i18n/es/.../file.md`
4. Ensure ALL text is translated (including frontmatter titles, button labels, etc.)

### 5. Standard Components
Avoid complex custom React components in docs unless absolutely necessary, as they can be harder for simple markdown parsers to read.

✅ **Use:** Standard markdown, Docusaurus admonitions, basic HTML
❌ **Avoid:** Complex custom React components, heavy JavaScript interactions

### 6. Images and Alt Text
Images enhance documentation and provide visual context for RAG AI systems.

**File Structure:**
```
static/
└── img/
    ├── accounting/
    ├── invoicing/
    └── expenses/
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
![Balance Sheet showing Assets, Liabilities, and Equity sections](/img/accounting/balance-sheet-sample.png)
```

❌ **Poor:**
```markdown
![Balance Sheet](/img/accounting/balance-sheet-sample.png)
```

**Translation:**

English:
```markdown
![Invoice form with client details and line items](/img/invoicing/create-invoice.png)
```

French:
```markdown
![Formulaire de facture avec détails du client et postes](/img/invoicing/create-invoice.png)
```

Spanish:
```markdown
![Formulario de factura con detalles del cliente y líneas](/img/invoicing/create-invoice.png)
```

**Image Guidelines:**
- Use `/img/` prefix (absolute path from static folder)
- Organize by category matching docs structure
- Use descriptive filenames: `balance-sheet-sample.png`
- Optimize images for web (PNG for UI, JPG for photos)
- Max 1200px wide for screenshots
- Annotate important areas with red boxes/arrows

For detailed image guidelines, see: **[Documentation Standards DSL](./script-docs/dsl/documentation-standards-dsl.md#image-guidelines)**

---

## 🎨 Documentation Standards

We follow a comprehensive DSL (Domain Specific Language) for documentation quality. Key standards include:

### Tone and Voice
- **Tone**: Professional, helpful, and concise
- **Perspective**: Second person ("You can," "Your account")
- **Voice**: Active voice preferred
- **Clarity**: Avoid jargon unless defined

### Formatting Patterns
- **Bold** for UI elements (buttons, menus, fields)
- `Code` for technical values, IDs, API endpoints
- "Quotes" for exact text user should enter
- Numbered lists for sequential steps
- Bullet points for non-sequential items

### SEO Optimization
- Start pages with 1-2 sentence summary
- Use descriptive link text (not "click here")
- Include keywords naturally in headings and first paragraph
- Add alt text to all images

For complete standards, see: **[script-docs/dsl/documentation-standards-dsl.md](./script-docs/dsl/documentation-standards-dsl.md)**

---

## 📊 Project Structure

```
fiskl-help/
├── docs/                           # English documentation (source of truth)
│   ├── intro.md
│   ├── getting-started/
│   ├── invoicing/
│   └── expenses/
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
│   └── generate-docs-prompt.ts    # Documentation generator
│
├── script-docs/
│   └── dsl/
│       └── documentation-standards-dsl.md  # Standards DSL
│
├── drafts/                        # Raw content for generator (optional)
│   ├── invoicing/
│   └── expenses/
│
└── src/                           # Docusaurus theme and components
    ├── components/
    ├── css/
    └── pages/
```

---

## 🔧 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `npm run dev` | Start dev server (English) |
| | `npm run dev -- --locale fr` | Start dev server (French) |
| | `npm run dev -- --locale es` | Start dev server (Spanish) |
| **Production** | `npm run build` | Build all languages |
| | `npm run serve` | Serve built site locally |
| **Content** | `npm run create-page <file.md>` | Sync file to translation folders |
| | `npm run generate-doc` | Generate documentation prompt |
| **Docusaurus** | `npm run clear` | Clear Docusaurus cache |
| | `npm run write-translations` | Extract translatable strings |

---

## 🌍 Translation Workflow

### For New Content

1. **Write English version** in `docs/`
   ```bash
   # Create the file
   docs/invoicing/recurring-invoices.md
   ```

2. **Sync to translation folders**
   ```bash
   npm run create-page invoicing/recurring-invoices.md
   ```

3. **Translate the files**
   - Edit: `i18n/fr/docusaurus-plugin-content-docs/current/invoicing/recurring-invoices.md`
   - Edit: `i18n/es/docusaurus-plugin-content-docs/current/invoicing/recurring-invoices.md`

4. **Test each locale**
   ```bash
   npm run dev -- --locale fr
   npm run dev -- --locale es
   ```

### For Updates to Existing Content

1. **Update the English source** in `docs/`

2. **Re-sync to translation folders**
   ```bash
   npm run create-page invoicing/recurring-invoices.md
   ```

3. **Update translations** with the new content

4. **Test and verify** all languages

---

## 🤖 RAG AI Optimization

This site is optimized for RAG (Retrieval-Augmented Generation) AI systems. Key optimizations:

### 1. Semantic Structure
- Clear H1 → H2 → H3 hierarchy
- Breadcrumb navigation
- Sidebar relationships (parent/child)

### 2. Context Injection
- Every page starts with a summary
- Descriptive frontmatter
- Clear section titles

### 3. Metadata
- `description` in frontmatter (150-160 chars)
- `keywords` for topic identification
- Proper heading structure for context

### 4. Link Strategy
- Use descriptive anchor text
- Link to related concepts
- Avoid "click here" or vague links

### Why This Matters
When an AI system indexes this content, it can:
- Understand the hierarchy and relationships
- Extract meaningful context from metadata
- Provide accurate answers with proper citations
- Navigate related concepts effectively

---

## 🐛 Troubleshooting

### Build Errors

**Problem**: Build fails with "File not found in translation"

**Solution**: Ensure all files exist in all language folders. Use `npm run create-page` to sync.

### Language Switcher Not Working

**Problem**: Language switcher doesn't appear or doesn't work

**Solution**: Run `npm run build` and `npm run serve`. The switcher only works with a full build.

### Content Not Updating

**Problem**: Changes to docs don't appear in the browser

**Solution**:
```bash
npm run clear
npm run dev
```

### Translation Out of Sync

**Problem**: Translation folders missing files from `docs/`

**Solution**:
```bash
# Sync specific file
npm run create-page path/to/file.md

# Or manually copy structure and translate
```

---

## 🤝 Contributing

### Documentation Guidelines

1. **Use the generator** for new documentation (see [GENERATOR_README.md](./GENERATOR_README.md))
2. **Follow the DSL** standards (see [script-docs/dsl/](./script-docs/dsl/))
3. **Test all languages** before committing
4. **Ensure translations are complete** - no mixed languages
5. **Verify RAG compatibility** - proper hierarchy and metadata

### Git Workflow

```bash
# 1. Create feature branch
git checkout -b docs/new-feature-guide

# 2. Create English version
# docs/features/new-feature.md

# 3. Sync to translations
npm run create-page features/new-feature.md

# 4. Translate
# Edit i18n/fr/.../features/new-feature.md
# Edit i18n/es/.../features/new-feature.md

# 5. Test
npm run build
npm run serve

# 6. Commit and push
git add .
git commit -m "docs: Add new feature guide with translations"
git push origin docs/new-feature-guide
```

---

## 📚 Additional Resources

- **[Generator Guide](./GENERATOR_README.md)** - Complete guide to the documentation generator
- **[Documentation Standards DSL](./script-docs/dsl/documentation-standards-dsl.md)** - Full standards reference
- **[Docusaurus Docs](https://docusaurus.io/)** - Official Docusaurus documentation
- **[Markdown Guide](https://www.markdownguide.org/)** - Markdown syntax reference

---

## 📧 Support

For questions or issues:
1. Check this README and the Generator Guide
2. Review the DSL standards
3. Contact the development team
4. Open an issue in the repository

---

*Built with ❤️ using Docusaurus 3*