# Fiskl Documentation Generator

A tool to generate AI prompts for creating consistent, high-quality Docusaurus documentation using Claude.

## Overview

This system helps you transform raw content drafts into polished documentation that follows Fiskl's standards.

**Workflow:**
1. Write raw content in a text file (bullet points, rough notes, etc.)
2. Run the generator script to create a Claude prompt
3. Paste the prompt into Claude
4. Claude returns formatted Docusaurus markdown
5. Copy the result into your docs folder

---

## Setup

### Prerequisites

- Node.js 20+
- tsx package (already in dependencies)

### Files Required

```
fiskl-help/
├── scripts/
│   └── generate-docs-prompt.ts          ← Main generator script
├── script-docs/
│   └── dsl/
│       └── documentation-standards-dsl.md  ← Standards DSL
└── package.json                          ← Contains "generate-doc" script
```

---

## Quick Start

### 1. Create a Draft File

Create a file with your raw content:

```txt
# drafts/recurring-invoices.txt

How to set up recurring invoices for subscriptions.

Users can automate invoice creation for regular billing.

Steps:
- Open invoices
- Click new invoice button
- Enable recurring toggle
- Set frequency and dates
- Save

Frequencies: daily, weekly, monthly, quarterly, yearly
```

### 2. Generate the Prompt

```bash
npm run generate-doc -- \
  --file="drafts/recurring-invoices.txt" \
  --title="Set Up Recurring Invoices" \
  --category="Invoicing"
```

### 3. Copy Output to Claude

The script outputs a complete prompt. Copy everything and paste into Claude.

### 4. Get the Result

Claude will return properly formatted Docusaurus markdown with:
- Complete frontmatter (title, description, keywords)
- H2/H3 hierarchy
- Bolded UI elements
- Proper formatting
- SEO optimization

### 5. Save to Docs

Copy Claude's output into your docs folder:

```bash
docs/invoicing/recurring-invoices.md
```

---

## Command Reference

### Basic Usage

```bash
npm run generate-doc -- --file=<path>
```

### All Options

| Option | Required | Default | Description |
|--------|----------|---------|-------------|
| `--file` | Yes | - | Path to raw content file |
| `--title` | No | "New Document" | Page title |
| `--category` | No | "General" | Documentation category |
| `--locale` | No | "en" | Target language |

### Examples

**Minimal:**
```bash
npm run generate-doc -- --file=draft.txt
```

**With Title and Category:**
```bash
npm run generate-doc -- \
  --file="drafts/invoice-guide.txt" \
  --title="Create Your First Invoice" \
  --category="Getting Started"
```

**Different Locale:**
```bash
npm run generate-doc -- \
  --file="drafts/es/facturas.txt" \
  --title="Crear Facturas" \
  --category="Facturación" \
  --locale="es"
```

**Copy to Clipboard (Mac):**
```bash
npm run generate-doc -- --file=draft.txt | pbcopy
```

**Copy to Clipboard (Windows):**
```bash
npm run generate-doc -- --file=draft.txt | clip
```

---

## Content Guidelines

### What to Include in Your Draft

Your draft can be rough! Include:

✅ Main concepts or features
✅ Step-by-step processes (even as bullet points)
✅ Important warnings or tips
✅ Common questions or issues
✅ Related features or links
✅ Image references (even as notes like "screenshot of dashboard here")

### What the Generator Adds

Claude will enhance your content with:

✅ Proper frontmatter with SEO metadata
✅ Clear heading hierarchy (H2/H3)
✅ Formatted UI elements (**bold**)
✅ Proper list structures (numbered for steps)
✅ Admonitions (:::info, :::warning)
✅ Professional tone and voice
✅ SEO-optimized content structure
✅ Descriptive alt text for images (if referenced)

### Including Images in Your Draft

You can reference images in your draft, and Claude will format them properly:

**Draft:**
```txt
Creating Balance Sheets

Users can view their financial position.

The balance sheet shows three sections:
- Assets (what you own)
- Liabilities (what you owe)
- Equity (residual value)

[IMAGE: Screenshot of balance sheet showing all three sections]

Review your balance sheet regularly to understand your financial health.
```

**Claude Will Generate:**
```markdown
## Creating Balance Sheets

Your balance sheet displays your company's financial position at a specific point in time.

![Balance Sheet showing Assets, Liabilities, and Equity sections with current values](/img/accounting/balance-sheet-sample.png)

The balance sheet is divided into three main sections:
1. **Assets** - What your company owns
2. **Liabilities** - What your company owes
3. **Equity** - The residual value belonging to owners

Regularly reviewing your balance sheet helps you understand your financial position and make informed decisions.
```

**Notes:**
- Claude generates proper alt text (descriptive, not just labels)
- You need to save the actual image file to `static/img/category/`
- When translating, remember to translate the alt text

---

## Draft File Best Practices

### ✅ Good Draft Example

```txt
Creating expense reports

Users can generate expense reports for accounting and reimbursement.

How it works:
- Select date range
- Filter by category, project, or user
- Choose export format (PDF or Excel)
- Download report

The report includes:
- Expense details (date, amount, category)
- Receipt images
- Approval status
- Total amounts by category

Tips:
- Use filters to narrow down results
- PDF is better for submission
- Excel is better for further analysis

Common issues:
- Missing receipts - expense won't appear in report
- Date range too large - report takes long time
```

### ❌ Poor Draft Example

```txt
expenses

make reports

export stuff
```

The more context you provide, the better Claude can format it!

---

## Output Format

### Generated Prompt Structure

The script creates a prompt with:

1. **Role**: Tells Claude it's a Fiskl technical writer
2. **DSL**: Full documentation standards
3. **Input Data**: Your content + metadata
4. **Request**: Specific formatting instructions

### Claude's Output Format

Claude returns markdown like:

```markdown
---
title: "Set Up Recurring Invoices"
description: "Automate your billing by creating invoices that repeat automatically on a schedule"
keywords: ["recurring invoice", "automatic billing", "subscription invoicing"]
sidebar_position: 5
---

This guide explains how to set up recurring invoices for regular billing...

## What are Recurring Invoices?

Recurring invoices automatically generate...

## Creating a Recurring Invoice

1. **Open the invoice creator**
   
   From your dashboard...

...
```

---

## File Organization

### Recommended Structure

```
fiskl-help/
├── drafts/                    ← Your raw content
│   ├── invoicing/
│   │   ├── create-invoice.txt
│   │   └── recurring.txt
│   ├── expenses/
│   │   └── expense-reports.txt
│   └── getting-started/
│       └── dashboard.txt
│
├── docs/                      ← Final documentation
│   ├── invoicing/
│   │   ├── create-invoice.md
│   │   └── recurring.md
│   └── ...
│
├── scripts/
│   └── generate-docs-prompt.ts
│
└── script-docs/
    └── dsl/
        └── documentation-standards-dsl.md
```

### Workflow

1. Create draft in `drafts/[category]/`
2. Run generator on draft file
3. Paste prompt into Claude
4. Save Claude's output to `docs/[category]/`
5. Review and commit

---

## Integration with Docusaurus

### File Placement

Generated markdown files go in the `docs/` directory:

```
docs/
├── intro.md
├── getting-started/
│   ├── dashboard.md
│   └── setup.md
├── invoicing/
│   ├── overview.md
│   ├── create-invoice.md
│   └── recurring-invoices.md
└── expenses/
    ├── overview.md
    └── reports.md
```

### Sidebar Configuration

The `sidebar_position` in frontmatter determines order:

```markdown
---
sidebar_position: 1
---
```

Docusaurus automatically generates sidebar from file structure.

---

## Customizing the DSL

### When to Update the DSL

Update `script-docs/dsl/documentation-standards-dsl.md` when:

- Adding new documentation patterns
- Changing formatting standards
- Adding new Docusaurus components
- Updating brand voice/tone guidelines

### DSL Structure

The DSL uses section markers:

```markdown
###############SECTION_NAME##################>
Content here
<###############SECTION_NAME##################
```

This format ensures Claude recognizes and applies all rules.

---

## Troubleshooting

### Error: "DSL not found"

**Solution:** Verify the file exists at `./script-docs/dsl/documentation-standards-dsl.md`

### Error: "Input file not found"

**Solution:** Check the path to your draft file is correct

### Claude Output Not Following Standards

**Possible causes:**
1. DSL file is incomplete or malformed
2. Draft is too vague or minimal
3. Prompt wasn't fully copied

**Solutions:**
1. Verify DSL has all section markers
2. Add more detail to your draft
3. Copy the entire prompt output

### Generated Prompt Too Long

If your draft is very large, consider:
1. Splitting into multiple documents
2. Removing redundant information
3. Focusing on the core content

---

## Examples

### Example 1: Simple Feature Documentation

**Draft file** (`drafts/tax-rates.txt`):
```txt
Tax Rates

Users can set up tax rates for automatic calculation on invoices.

How to add tax rate:
- Go to settings
- Click tax rates
- Click add new
- Enter name (like "VAT" or "Sales Tax")
- Enter percentage
- Save

Can have multiple rates. Applied based on client location or manual selection.
```

**Command:**
```bash
npm run generate-doc -- \
  --file="drafts/tax-rates.txt" \
  --title="Configure Tax Rates" \
  --category="Settings"
```

**Result:** Claude generates a complete documentation page with proper formatting, examples, and SEO metadata.

---

### Example 2: Multi-Language Documentation

**Draft file** (`drafts/es/facturas.txt`):
```txt
Creación de facturas

Los usuarios pueden crear facturas profesionales.

Pasos:
- Abrir panel
- Hacer clic en nueva factura
- Completar detalles del cliente
- Agregar líneas de producto
- Guardar y enviar
```

**Command:**
```bash
npm run generate-doc -- \
  --file="drafts/es/facturas.txt" \
  --title="Crear Facturas" \
  --category="Facturación" \
  --locale="es"
```

**Result:** Claude generates Spanish documentation following the same quality standards.

---

### Example 3: Complex Process

**Draft file** (`drafts/batch-import.txt`):
```txt
Batch Import

Users can import many items at once using CSV files.

Supported data:
- Clients
- Products
- Invoices
- Expenses

Process:
1. Download CSV template from settings
2. Fill in data (follow template format)
3. Go to relevant section
4. Click import
5. Upload file
6. Review preview
7. Confirm import

Template columns must match exactly. Common errors:
- Missing required fields
- Invalid date formats
- Duplicate IDs

After import:
- Success/error summary shown
- Can download error report
- Successfully imported items appear in lists
```

**Command:**
```bash
npm run generate-doc -- \
  --file="drafts/batch-import.txt" \
  --title="Import Data in Bulk" \
  --category="Data Management"
```

---

## Tips for Best Results

### 1. Provide Context

Include the "why" not just the "what":

```txt
❌ Bad: "Click save button"
✅ Good: "Click Save to create the invoice and send it to the client"
```

### 2. Group Related Information

Organize your draft logically:

```txt
Feature Overview
↓
How to Use It
↓
Options/Settings
↓
Troubleshooting
```

### 3. Include Common Scenarios

Think about user questions:

```txt
"What if I need to edit it later?"
"Can I delete this?"
"What happens if...?"
```

### 4. Note Important Warnings

Flag critical information:

```txt
"IMPORTANT: This action cannot be undone"
"NOTE: Changes take 24 hours to apply"
```

### 5. Be Specific About UI

Instead of "click the button", say:
```txt
"Click the New Invoice button in the top-right corner"
```

---

## Advanced Usage

### Custom Templates

You can modify the prompt template in `generate-docs-prompt.ts`:

```typescript
return `You are an expert technical writer for Fiskl...

${dsl}

###############RAW_INPUT_DATA##################>
TITLE: ${config.title}
CATEGORY: ${config.category}
LOCALE: ${config.targetLocale}

CONTENT:
${rawContent}
<###############RAW_INPUT_DATA##################

###############REQUEST#########################>
1. Create a complete Docusaurus Markdown file...
// Add custom instructions here
<###############REQUEST#########################>
`;
```

### Batch Processing

Process multiple files:

```bash
#!/bin/bash
for file in drafts/invoicing/*.txt; do
  npm run generate-doc -- --file="$file" --category="Invoicing" | pbcopy
  echo "Processed: $file (prompt in clipboard)"
  read -p "Press enter after pasting to Claude..."
done
```

---

## Next Steps

1. **Create your first draft** - Start with a simple page
2. **Generate the prompt** - Run the script
3. **Use Claude** - Paste and get formatted output
4. **Review** - Check the result meets standards
5. **Iterate** - Improve your drafts based on results
6. **Scale** - Process more documentation

---

## Support

### Getting Help

- Check this README for common issues
- Review the DSL file for standards
- Look at generated examples
- Ask the development team

### Contributing

To improve the system:

1. Update the DSL for new patterns
2. Enhance the generator script
3. Add new examples to this README
4. Share best practices with the team

---

*Happy documenting! 📚*