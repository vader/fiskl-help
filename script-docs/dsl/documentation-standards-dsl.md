# FISKL Documentation Standards DSL v1.0

## Overview
This DSL defines documentation patterns for Fiskl's Docusaurus-based help center.

---

###############DOCUMENTATION_STRUCTURE##################>

Every documentation page must have:
1. Frontmatter with metadata
2. Opening summary (1-2 sentences)
3. Clear H2/H3 hierarchy
4. Proper formatting for UI elements
5. SEO optimization

<###############DOCUMENTATION_STRUCTURE##################

###############FRONTMATTER_PATTERN##################>

Required frontmatter structure:

```markdown
---
title: "Page Title"
description: "SEO description 150-160 characters that summarizes the page content"
keywords: ["keyword1", "keyword2", "keyword3"]
sidebar_position: 1
---
```

RULES:
- title: Clear, action-oriented (e.g., "Create an Invoice")
- description: 150-160 characters, includes main keywords
- keywords: 3-8 relevant terms for search
- sidebar_position: Numerical order in sidebar

<###############FRONTMATTER_PATTERN##################

###############TONE_AND_VOICE##################>

Writing style:
- Tone: Professional, helpful, and concise
- Perspective: Second person ("You can," "Your account")
- Voice: Active voice ("Click Save" not "Save should be clicked")
- Clarity: Avoid jargon unless defined in glossary
- Length: Prefer shorter sentences and paragraphs

Examples:
✅ "To create an invoice, click the **New Invoice** button."
❌ "An invoice can be created by clicking on the new invoice button."

✅ "Your dashboard shows key metrics."
❌ "The dashboard displays various metrics for the user."

<###############TONE_AND_VOICE##################

###############MARKDOWN_PATTERNS##################>

Heading hierarchy:
- H1 (#): Reserved for page title (from frontmatter) - DO NOT use in content
- H2 (##): Main feature sections or major steps
- H3 (###): Specific steps, sub-concepts, or details
- H4 (####): Rare - only for deep nested content

UI element formatting:
- **Bold** for buttons, menu items, field names, tabs
  Examples: **Save**, **Settings** menu, **Email** field
- `Code` for technical values, IDs, API endpoints
  Examples: `invoice_001`, `/api/invoices`
- "Quotes" for exact text user should enter
  Examples: Enter "monthly" in the description

Lists:
- Numbered lists for sequential steps
- Bullet points for non-sequential items or features
- Keep list items parallel in structure

Code blocks:
```json
{
  "example": "Use triple backticks with language"
}
```

<###############MARKDOWN_PATTERNS##################

###############CONTENT_STRUCTURE_PATTERNS##########>

Standard page structure:

```markdown
---
[frontmatter]
---

[1-2 sentence summary of what and why]

## Main Concept or Feature

[Brief introduction paragraph]

### How to [Do Something]

1. First step with **UI elements** bolded
2. Second step
3. Third step

### Related Features

- Feature one
- Feature two

:::info[Quick Tip]
Use info blocks for helpful tips or context
:::

:::warning[Important]
Use warning blocks for irreversible actions
:::

## Frequently Asked Questions

<details>
  <summary>Question goes here?</summary>
  Answer goes here with proper formatting.
</details>
```

<###############CONTENT_STRUCTURE_PATTERNS##########>

###############RAG_OPTIMIZATION_RULES###########>

For AI/search optimization:

1. **Context Injection**: Start every page with "This guide explains [what] and helps you [why]"

2. **Semantic Linking**: Link to related concepts using relative paths
   ```markdown
   Learn more about [invoices](/docs/invoicing/overview)
   ```

3. **Descriptive Anchors**: Use meaningful link text
   ✅ "Learn about [tax calculations](/docs/tax)"
   ❌ "Click [here](/docs/tax) for tax info"

4. **Keyword Distribution**: Use main keywords naturally in:
    - First paragraph
    - H2 headings
    - First sentence of sections
    - Alt text for images

5. **Structured Data**: Use consistent patterns for similar content types

<###############RAG_OPTIMIZATION_RULES###########

###############COMPONENT_USAGE##################>

Docusaurus components to use:

**Info Admonitions:**
```markdown
:::info[Note Title]
Use for helpful tips, context, or additional information
:::
```

**Warning Admonitions:**
```markdown
:::warning[Caution]
Use for irreversible actions like deleting data
:::
```

**Tip Admonitions:**
```markdown
:::tip[Pro Tip]
Use for best practices or time-saving tricks
:::
```

**Collapsible Details:**
```markdown
<details>
  <summary>Click to expand</summary>
  
  Hidden content goes here. Good for:
  - Long examples
  - Advanced options
  - Troubleshooting steps
</details>
```

**Video Embeds:**
```markdown
<iframe 
  width="100%" 
  height="400" 
  src="https://demo.fiskl.com/video.mp4"
  title="Demo Video"
  frameborder="0"
  allowfullscreen
></iframe>
```

**Images:**
```markdown
![Alt text describing image](/img/screenshot.png)
```

RULES:
- Use admonitions sparingly (max 2-3 per page)
- Collapse long content to keep pages scannable
- Always provide alt text for images
- Videos should supplement, not replace, written instructions

<###############COMPONENT_USAGE##################

###############PROCESS_DOCUMENTATION_PATTERN####>

For step-by-step guides:

```markdown
## How to [Action]

Before you begin:
- Prerequisite one
- Prerequisite two

### Steps

1. **Open the dashboard**
   
   Navigate to your main dashboard by clicking **Dashboard** in the sidebar.

2. **Click the action button**
   
   In the top-right corner, click **New [Item]**.
   
   :::tip
   You can also use the keyboard shortcut `Ctrl+N`
   :::

3. **Fill in the details**
   
   Complete the following fields:
   - **Name**: Enter a descriptive name
   - **Date**: Select the date from the calendar
   - **Amount**: Enter the amount in your currency

4. **Save your work**
   
   Click **Save** to create the item.

### What happens next

After saving:
- The item appears in your list
- You receive a confirmation email
- The system updates related records

### Troubleshooting

<details>
  <summary>Error: Item not saving</summary>
  
  If you see this error:
  1. Check all required fields are filled
  2. Verify your internet connection
  3. Try refreshing the page
</details>
```

<###############PROCESS_DOCUMENTATION_PATTERN####>

###############TRANSLATION_GUIDELINES##########>

When translating content:

1. **Maintain structure**: Keep all headings, formatting, components
2. **Translate naturally**: Don't do word-for-word translation
3. **Keep UI elements**: Button names should match the UI locale
4. **Preserve code**: Don't translate code blocks or technical terms
5. **Adapt examples**: Use culturally appropriate examples when needed

Example frontmatter for Spanish:
```markdown
---
title: "Crear una factura"
description: "Aprenda cómo crear y enviar facturas profesionales en Fiskl"
keywords: ["factura", "crear factura", "facturación"]
sidebar_position: 1
---
```

<###############TRANSLATION_GUIDELINES##########>

###############QUALITY_CHECKLIST###############>

Before finalizing any documentation:

✅ Frontmatter complete with title, description, keywords
✅ Opening summary present (1-2 sentences)
✅ H2/H3 hierarchy logical and consistent  
✅ UI elements (buttons, menus, fields) bolded
✅ Technical values in `code` formatting
✅ Sequential steps use numbered lists
✅ Non-sequential items use bullet points
✅ Admonitions used appropriately (not excessive)
✅ Links use descriptive anchor text
✅ Images have descriptive alt text (not just labels)
✅ Image paths use `/img/` prefix
✅ Images organized by category in `static/img/`
✅ Alt text is translated in all language versions
✅ No broken internal links or missing images
✅ Active voice throughout
✅ Second person perspective ("you")
✅ Clear, concise language
✅ SEO keywords distributed naturally

<###############QUALITY_CHECKLIST###############>

---

## Examples

### Example 1: Feature Documentation

```markdown
---
title: "Invoice Templates"
description: "Create and manage reusable invoice templates to speed up your billing process"
keywords: ["invoice template", "billing template", "recurring invoice"]
sidebar_position: 3
---

This guide explains how to create invoice templates and use them to generate invoices faster.

## What are Invoice Templates?

Invoice templates are pre-configured invoice formats that you can reuse. They save time by storing common details like:
- Your business information
- Tax rates and rules
- Payment terms
- Line item descriptions

## Creating a Template

1. **Navigate to templates**
   
   Click **Invoices** in the sidebar, then select the **Templates** tab.

2. **Click New Template**
   
   In the top-right corner, click **+ New Template**.

3. **Configure the template**
   
   Fill in the fields you want to reuse:
   - **Template Name**: Internal name (not visible to clients)
   - **Payment Terms**: Select from dropdown or enter custom terms
   - **Tax Rate**: Choose your default tax rate
   - **Line Items**: Add common products or services

4. **Save the template**
   
   Click **Save Template** to make it available for use.

:::tip[Pro Tip]
Create separate templates for different client types or service categories
:::

## Using a Template

When creating a new invoice:
1. Click **Use Template** 
2. Select your template from the list
3. Customize any fields as needed
4. Send the invoice

<details>
  <summary>Can I edit a template after creating it?</summary>
  
  Yes! Templates can be edited at any time:
  1. Go to **Invoices** > **Templates**
  2. Click the template you want to modify
  3. Make your changes
  4. Click **Save**
  
  Note: Changes won't affect invoices already created from the template.
</details>
```

### Example 2: Quick Reference

```markdown
---
title: "Keyboard Shortcuts"
description: "Speed up your workflow with Fiskl's keyboard shortcuts for common actions"
keywords: ["shortcuts", "keyboard", "hotkeys", "productivity"]
sidebar_position: 99
---

Use these keyboard shortcuts to work faster in Fiskl.

## Global Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| New invoice | `Ctrl+I` | `⌘+I` |
| New expense | `Ctrl+E` | `⌘+E` |
| Search | `Ctrl+K` | `⌘+K` |
| Settings | `Ctrl+,` | `⌘+,` |

## Invoice Screen

| Action | Shortcut |
|--------|----------|
| Save draft | `Ctrl+S` |
| Send invoice | `Ctrl+Enter` |
| Add line item | `Ctrl+L` |
| Duplicate | `Ctrl+D` |

:::info[Custom Shortcuts]
You can customize shortcuts in **Settings** > **Preferences** > **Keyboard**
:::
```

---

## Anti-Patterns

❌ **Wrong:**
```markdown
# How to create invoice

Go to dashboard. Click new invoice button. Fill form. Click save button.
```

✅ **Correct:**
```markdown
---
title: "Create an Invoice"
description: "Learn how to create and send professional invoices to your clients"
keywords: ["create invoice", "new invoice", "billing"]
---

This guide shows you how to create an invoice in Fiskl.

## Creating Your First Invoice

1. **Open the invoice creator**

   From your dashboard, click **+ New Invoice** in the top-right corner.

2. **Select a client**

   Choose an existing client or click **+ New Client** to add one.
```

---

*This DSL should be used as input for the prompt generator script to ensure consistent, high-quality documentation across all pages.*