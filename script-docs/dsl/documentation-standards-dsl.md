# FISKL Documentation Standards DSL v2.0

## Overview
This DSL defines documentation patterns for Fiskl's Docusaurus-based help center, optimized for human readers and AI ingestion.

---

###############DOCUMENTATION_STRUCTURE##################>

Every documentation page must have:
1. Frontmatter with metadata
2. Opening summary (1-2 sentences explaining what and why)
3. Clear H2/H3 hierarchy (never use H1 in content)
4. Proper formatting for UI elements
5. SEO optimization
6. Consistent voice, tense, and terminology

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

###############VOICE_AND_TENSE_RULES##################>

## The Fiskl Voice

Fiskl documentation is:
- **Professional but approachable** - Experts helping colleagues, not robots instructing users
- **Clear and direct** - No unnecessary words or corporate jargon
- **Action-oriented** - Focus on what users can accomplish
- **Confident but humble** - We know our product, but acknowledge complexity

## Tense Rules

**Present Tense** - For current features and capabilities:
✅ "Fiskl calculates exchange rates automatically"
✅ "The dashboard displays your key metrics"
❌ "Fiskl will calculate exchange rates"
❌ "The dashboard will display metrics"

**Future Tense** - Only for post-action outcomes:
✅ "After you save, the invoice will appear in your list"
✅ "The system will send a confirmation email"

**Imperative** - For instructions (most common):
✅ "Select **New Invoice**"
✅ "Enter your client details"

## Voice Rules

**Active Voice** - Always preferred:
✅ "Fiskl imports your transactions"
❌ "Your transactions are imported by Fiskl"

✅ "Select the **Save** button"
❌ "The Save button should be selected"

**No Anthropomorphization** - Avoid attributing human thinking to the system:
✅ "The system calculates totals"
✅ "Fiskl processes your data"
❌ "Fiskl knows your preferences"
❌ "The system thinks about your input"
❌ "Fiskl understands your needs"

## Perspective Rules

**Second Person** - Always address the user as "you":
✅ "You can create multiple invoices"
✅ "Your dashboard shows key metrics"
❌ "Users can create invoices"
❌ "The user's dashboard shows metrics"

<###############VOICE_AND_TENSE_RULES##################

###############NAVIGATION_LANGUAGE_STANDARDS########>

## UI Interaction Verbs

**ALWAYS use "Select" for UI interactions:**

✅ Select **New Invoice**
✅ Select the **Save** button
✅ Select **File** > **Export**
✅ Select the checkbox to enable notifications

**NEVER use:**
❌ Click (too informal, platform-specific)
❌ Press (reserved for keyboard only)
❌ Choose (ambiguous)
❌ Tap (mobile-specific, we're cross-platform)
❌ Hit (informal)
❌ Push (informal)

## Exceptions to "Select"

**Enter** - For typing text:
✅ "Enter your client name"
✅ "Enter the invoice amount"

**Upload** - For files:
✅ "Upload your company logo"
✅ "Upload the receipt image"

**Drag** - For drag-and-drop:
✅ "Drag the file to the upload area"

**Toggle** - For switches:
✅ "Toggle the **Multi-currency** option on"

**Press** - For keyboard keys only:
✅ "Press `Ctrl+S` to save"
✅ "Press `Enter` to confirm"

## Menu Navigation Format

**Single Menu:**
✅ "Go to **Settings**"
✅ "Open the **Dashboard**"

**Nested Menus:**
✅ "Go to **Settings** > **Preferences**"
✅ "Select **File** > **Export** > **PDF**"

**Sidebar Navigation:**
✅ "In the left sidebar, select **Invoices**"

<###############NAVIGATION_LANGUAGE_STANDARDS########>

###############SENTENCE_STRUCTURE_RULES############>

## Sentence Length Standards

**Target:** 15-20 words per sentence (average)
**Maximum:** 25 words (break longer sentences into two)
**Minimum:** 5 words (avoid fragments)

**One idea per sentence** - Don't combine multiple concepts

❌ "When you create an invoice, the system automatically calculates taxes based on your settings, which you can modify in the preferences section if needed."
✅ "When you create an invoice, the system automatically calculates taxes. You can modify tax settings in the **Preferences** section."

## Sentence Structure Patterns

**Lead with the action** - Put the most important information first:
✅ "Select **New Invoice** to begin"
❌ "To begin creating a new invoice, select the New Invoice button"

**Use parallel structure** - Keep consistent patterns in lists:
✅ "Create invoices, track expenses, and manage clients"
❌ "Create invoices, expense tracking, and client management"

**Avoid nested clauses** - Keep it simple:
✅ "Save your changes. Then test the integration."
❌ "After saving your changes, which you should do before proceeding, test the integration."

## Common Sentence Simplifications

| Instead of | Use |
|------------|-----|
| "In order to..." | "To..." |
| "It is important to note that..." | "Note:" or just state it |
| "You may find it beneficial to..." | "We recommend..." |
| "At this point in time..." | "Now..." |
| "Due to the fact that..." | "Because..." |
| "In the event that..." | "If..." |
| "For the purpose of..." | "To..." |

<###############SENTENCE_STRUCTURE_RULES############>

###############PARAGRAPH_STRUCTURE_RULES##########>

## Paragraph Length Standards

**Target:** 3-5 sentences per paragraph
**Maximum:** 6 sentences
**Minimum:** 2 sentences (avoid single-sentence paragraphs in body text)

## Paragraph Structure Pattern

1. **Topic sentence** - State the main idea
2. **Supporting sentences** - Explain or provide details (1-3 sentences)
3. **Transition or summary** - Connect to next paragraph (optional)

**Example:**
```markdown
Fiskl's multi-currency support handles complex transactions automatically. The system converts amounts to your base currency using current exchange rates. You can also adjust rates manually when needed.

After you save a multi-currency transaction, Fiskl creates the appropriate ledger entries. These entries reflect both the original currency and the converted amount.
```

## Paragraph Flow

**Use transition words sparingly:**
- After, Before, Next (for sequences)
- However, Although (for contrasts)
- Additionally, Also (for additions)

**Avoid overuse of transitions:**
❌ "Additionally, moreover, furthermore..."
✅ Just state the next point clearly

**Break up long paragraphs:**
❌ 8+ sentence wall of text
✅ Split into 2-3 shorter paragraphs with clear topics

<###############PARAGRAPH_STRUCTURE_RULES##########>

###############TERMINOLOGY_CONSISTENCY############>

## Official Fiskl Terminology

Use these terms consistently throughout all documentation:

| Correct Term | Avoid | Context |
|--------------|-------|---------|
| Dashboard | Home page, Main screen, Landing page | The page users see after login |
| Client | Customer | Unless specifically B2C context |
| Vendor | Supplier | For businesses you pay |
| Ledger account | Account (alone) | "Account" is ambiguous (could mean user account) |
| Chart of Accounts | COA, Account chart, GL | Write out first use, can use COA after |
| Multi-currency | Multi currency, Multicurrency | Always hyphenated |
| Line item | Item, Line, Row | In invoice/expense context |
| Base currency | Home currency, Default currency, Primary currency | The main currency for the business |
| Banking | Bank accounts, Banks | Our feature name |
| Multi-journal entry | Multi journal, Complex entry | Always "Multi-journal" with hyphen |
| Payout | Pay-out, Pay out | One word, no hyphen |
| Email | E-mail | No hyphen |
| Setup (noun) | Set-up, Set up | "Complete the setup" |
| Set up (verb) | Setup | "Set up your account" |
| Dropdown | Drop-down, Drop down | One word |
| Checkbox | Check box, Check-box | One word |

## Feature Name Capitalization

**Capitalize Fiskl feature names:**
- Fiskl Banking
- Multi-journal entries (lowercase unless starting sentence)
- Chart of Accounts
- Dashboard

**Don't capitalize generic terms:**
- invoices
- expenses
- clients
- reports

## Number Formatting

**Numbers 1-9:** Spell out in prose
✅ "You can create three types of reports"
❌ "You can create 3 types of reports"

**Numbers 10+:** Use numerals
✅ "The system supports 150 currencies"

**Exception:** Always use numerals in:
- Steps: "Step 1", "Step 2"
- UI references: "Page 5", "Column 3"
- Technical values: "5 MB", "3 seconds"

## Currency References

**Format:**
✅ "$100" or "100 USD"
✅ "€50" or "50 EUR"

**In examples, use:**
- USD for dollar amounts
- EUR for euro amounts
- GBP for pound amounts

**In prose:**
✅ "Enter the amount in your base currency"
❌ "Enter the amount in dollars"

<###############TERMINOLOGY_CONSISTENCY############>

###############TONE_AND_LANGUAGE_PATTERNS########>

## Approved Phrases

| Situation | Use This | Not This |
|-----------|----------|----------|
| Starting instructions | To [action]: | In order to [action]: |
| Prerequisites | Before you begin: | Prerequisites:, Required: |
| Navigation | Go to **Menu** > **Item** | Navigate to, Find the |
| Results | After saving, the invoice appears | Once you save, you will see the invoice |
| Warnings | Don't delete without backup | Please be careful not to delete |
| Tips | We recommend... | It's best to..., You may want to... |
| Completion | You're done! | The process is complete |
| Alternative methods | Alternatively, you can... | Another option is..., You can also... |
| Permissions | You need [permission] to... | You must have [permission] |

## Language to Avoid

**Corporate jargon:**
❌ "Leverage the functionality"
✅ "Use the feature"

❌ "Utilize the interface"
✅ "Use the interface"

❌ "At this point in time"
✅ "Now"

**Unnecessary modifiers:**
❌ "Simply click..."
❌ "Just enter..."
❌ "Easily configure..."
✅ State the action directly

**Apologies in instructions:**
❌ "Unfortunately, you need to..."
✅ State what's needed

**Assumptions about difficulty:**
❌ "This is easy to do"
❌ "This can be tricky"
✅ Provide clear instructions

<###############TONE_AND_LANGUAGE_PATTERNS########>

###############CALLOUT_USAGE_RULES##############>

## Admonition Types and Usage

**Maximum callouts per page: 2-3**

### :::info - For helpful context

**Use for:**
- Non-critical helpful information
- Additional context or background
- Feature limitations (non-critical)
- Related feature mentions

**Example:**
```markdown
:::info
The initial sync may take several minutes depending on your transaction history.
:::
```

### :::tip - For best practices

**Use for:**
- Time-saving tricks
- Recommended workflows
- Pro tips
- Keyboard shortcuts
- Performance optimizations

**Maximum: 1 per section**

**Example:**
```markdown
:::tip
Use templates to save time when creating similar invoices.
:::
```

### :::warning - For important cautions

**Use for:**
- Irreversible actions
- Data loss risks
- Security considerations
- Actions requiring backups

**Example:**
```markdown
:::warning
Deleting a client removes all associated invoices. This action cannot be undone.
:::
```

### :::caution - Use sparingly

**Use for:**
- Potential issues that aren't warnings
- Known bugs or limitations
- Beta features
- Version-specific notes

**Example:**
```markdown
:::caution
This feature is in beta. Some functionality may change.
:::
```

## Callout Anti-Patterns

❌ **Too many callouts:**
```markdown
:::info
Some info
:::

:::tip
A tip
:::

:::warning
A warning
:::

:::info
More info
:::
```

✅ **Appropriate callout use:**
```markdown
[Regular content explaining the feature]

:::tip
Save time by using keyboard shortcuts: `Ctrl+S` to save.
:::

[More regular content]

:::warning
Don't delete your account without exporting data first.
:::
```

<###############CALLOUT_USAGE_RULES##############>

###############MARKDOWN_PATTERNS##################>

## Heading Hierarchy

**H1 (#):** NEVER use in content - Reserved for page title (from frontmatter)

**H2 (##):** Main sections
- Feature overviews
- Major process steps
- Primary categories

**H3 (###):** Subsections
- Specific procedures
- Feature details
- Sub-concepts

**H4 (####):** Rare - only for deeply nested content
- Use sparingly
- Consider if content needs reorganization instead

**Example:**
```markdown
## Creating Invoices

### Setting Up Invoice Templates

#### Template Fields (only if absolutely necessary)
```

## UI Element Formatting

**Bold** for interactive elements:
- Buttons: **Save**, **Cancel**, **Submit**
- Menu items: **File** > **Export**
- Field labels: **Client Name**, **Invoice Amount**
- Tabs: **General**, **Advanced**
- Toggles: **Enable notifications**

**Code** for technical values:
- IDs: `invoice_001`
- API endpoints: `/api/v1/invoices`
- Status codes: `200 OK`
- File names: `config.json`
- Commands: `npm install`

**Quotes** for exact text to enter:
- User input: Enter "monthly subscription" in the description
- Search terms: Search for "tax rates"

## List Formatting

**Numbered lists** - For sequential steps or ranked items:
```markdown
1. Select **New Invoice**
2. Enter client details
3. Add line items
4. Select **Save**
```

**Bullet lists** - For non-sequential items or features:
```markdown
- Create invoices
- Track expenses
- Manage clients
- Generate reports
```

**Keep list items parallel:**
✅ All start with verbs: "Create, Track, Manage"
✅ All start with nouns: "Invoices, Expenses, Clients"
❌ Mixed: "Create invoices, Expense tracking, Clients"

## Code Blocks

Always specify language for syntax highlighting:

```markdown
```json
{
  "example": "value"
}
```
```

For terminal commands:
```markdown
```bash
npm run dev
```
```

## Links

**Internal links** - Use relative paths:
```markdown
Learn more about [invoices](/docs/invoicing/overview)
```

**External links** - Use full URLs:
```markdown
Visit [our website](https://fiskl.com)
```

**Descriptive anchor text:**
✅ "Learn about [tax calculations](/docs/tax)"
✅ "See the [API documentation](/docs/api)"
❌ "Click [here](/docs/tax) for tax info"
❌ "[This page](/docs/api) has more details"

<###############MARKDOWN_PATTERNS##################>

###############IMAGE_GUIDELINES##################>

## Image File Structure

```
static/
└── img/
    ├── accounting/
    ├── invoicing/
    ├── expenses/
    ├── banking/
    └── reports/
```

## Image Usage

**Always include descriptive alt text:**

✅ Good alt text (describes what user will see):
```markdown
![Balance Sheet showing Assets, Liabilities, and Equity sections with current year figures](/img/accounting/balance-sheet-sample.png)
```

❌ Poor alt text (just labels):
```markdown
![Balance Sheet](/img/accounting/balance-sheet-sample.png)
```

## Alt Text Rules

**Be specific and descriptive:**
- Describe what the user will see
- Include key UI elements visible
- Mention important data or states shown
- Note any highlighting or annotations

**Examples:**

For screenshots:
```markdown
![Invoice creation form with client selector, line items table, and Save button highlighted](/img/invoicing/create-invoice.png)
```

For diagrams:
```markdown
![Data flow diagram showing transaction import from bank to Fiskl ledger accounts](/img/banking/sync-flow.png)
```

For UI states:
```markdown
![Dashboard showing warning icon next to disconnected bank account](/img/banking/connection-error.png)
```

## Image Best Practices

**File naming:**
- Use descriptive names: `balance-sheet-sample.png`
- Use kebab-case: `invoice-form-fields.png`
- Not: `Screen Shot 2025-01-15.png`

**Image optimization:**
- PNG for UI screenshots (clearer text)
- JPG for photos
- Max width: 1200px
- Compress before uploading

**Annotations:**
- Use red boxes or arrows to highlight
- Keep annotations minimal
- Ensure text is readable

**Placement:**
- Place images after the text that references them
- Don't break up sequential steps with large images
- Group related images together

<###############IMAGE_GUIDELINES##################>

###############CONTENT_STRUCTURE_PATTERNS##########>

## Standard Page Structure

```markdown
---
[frontmatter]
---

[Opening summary: 1-2 sentences explaining what and why]

## Main Feature or Concept

[Brief introduction: 2-3 sentences]

### How to [Do Something]

Before you begin:
- Prerequisite one
- Prerequisite two

**Steps:**

1. **First action**
   
   Brief explanation if needed.

2. **Second action**
   
   Brief explanation if needed.
   
   :::tip
   Helpful tip related to this step
   :::

3. **Third action**

### What Happens Next

[Explain the outcome in 2-3 sentences]

### Common Issues

<details>
  <summary>Issue description</summary>
  
  Solution explanation with steps if needed.
</details>

## Related Features

- [Feature one](/docs/path)
- [Feature two](/docs/path)
```

## Opening Summary Pattern

Every page must start with a clear 1-2 sentence summary:

**Formula:**
"This guide explains [what] and helps you [accomplish what goal]."

**Examples:**

✅ "This guide explains how to create invoices in Fiskl and helps you bill your clients professionally."

✅ "Multi-journal entries let you record complex transactions across multiple accounts and currencies in a single entry."

✅ "This guide shows you how to connect your bank account to Fiskl for automatic transaction imports."

❌ "In this document, we will cover the topic of invoicing."

❌ "Welcome to the invoicing guide."

## Process Documentation Pattern

For step-by-step guides:

```markdown
## How to [Action]

[1-2 sentence introduction explaining what user will accomplish]

### Before You Begin

Ensure you have:
- Prerequisite one
- Prerequisite two

### Steps

1. **Open the feature**
   
   Go to **Menu** > **Submenu** and select **Feature**.

2. **Configure settings**
   
   Complete these fields:
   - **Field One**: Description
   - **Field Two**: Description

3. **Save your changes**
   
   Select **Save** to apply the settings.

### What Happens Next

[Describe the outcome in 2-3 sentences]

- The system does X
- You receive Y
- Z is updated automatically

### Troubleshooting

<details>
  <summary>Error: [Error message]</summary>
  
  **Solution:**
  1. Check [thing one]
  2. Verify [thing two]
  3. Try [action]
  
  If the issue persists, [contact support/check logs/etc].
</details>
```

# NAVIGATION STRUCTURE ADDITION TO DSL

Add this new section to `documentation-standards-dsl.md` after the `###############CONTENT_STRUCTURE_PATTERNS##########>` section:

---

###############NAVIGATION_ARCHITECTURE############>

## Category Architecture Rule

**Every primary sidebar category MUST have both:**
1. A `_category_.json` file
2. A corresponding `overview.md` file

This ensures users receive a high-level conceptual summary (the "Why") before diving into specific guides (the "How"). This structure is critical for RAG AI to maintain context across nested pages.

## The Why Before the How

### Problem Without Overview
When users click a top-level category and land directly on a specific guide:
- They lack context about the broader feature area
- They don't understand how different guides relate
- AI systems can't establish proper context hierarchy
- Navigation feels disjointed and confusing

### Solution With Overview
The overview provides:
- **Conceptual foundation** - What this category is about
- **Key concepts** - Essential terminology users need to know
- **Feature relationships** - How different guides connect
- **Navigation aid** - DocCardList showing all available guides

## Category Structure Pattern

```
docs/[category]/
├── _category_.json          # Category metadata and linking
├── overview.md              # Category landing page (the "Why")
├── guide-one.md            # Specific guide (the "How")
├── guide-two.md            # Specific guide (the "How")
└── guide-three.md          # Specific guide (the "How")
```

## _category_.json Template

Place this file inside your category folder (e.g., `docs/accounting/_category_.json`).

```json
{
  "label": "Category Name",
  "position": 2,
  "link": {
    "type": "doc",
    "id": "category/overview"
  },
  "description": "Brief description of what this category covers (150 chars max)"
}
```

**Field Definitions:**

| Field | Purpose | Rules |
|-------|---------|-------|
| `label` | Category name in sidebar | Use proper capitalization, match category folder |
| `position` | Sidebar sort order | Numerical, 1-based, determines display order |
| `link.type` | Link type | Always "doc" for overview linking |
| `link.id` | Overview page path | Format: "category/overview" (no .md extension) |
| `description` | Category tooltip/meta | Max 150 characters, appears in certain contexts |

## Overview.md Template

```markdown
---
title: "[Category Name] Overview"
description: "High-level guide to [main purpose] in Fiskl covering [key areas]."
sidebar_position: 1
---

# [Category Name]

This section explains [what this category is about] and helps you [primary user goal].

## Why Use [Category Name]

[2-3 sentences explaining the value and purpose of this feature area]

**Key benefits:**
- Benefit one
- Benefit two
- Benefit three

## Key Concepts

Understanding these concepts is essential for working with [category name]:

- **Term One**: Definition in plain language
- **Term Two**: Definition in plain language
- **Term Three**: Definition in plain language

## How It Works

[2-3 paragraphs explaining the general workflow or process]

1. **Step/Concept One**: Brief explanation
2. **Step/Concept Two**: Brief explanation
3. **Step/Concept Three**: Brief explanation

---

## Available Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />
```

## Real Example: Banking Category

**File: `docs/integrations/banking/_category_.json`**

```json
{
  "label": "Banking Connections",
  "position": 1,
  "link": {
    "type": "doc",
    "id": "integrations/banking/overview"
  },
  "description": "Connect your bank accounts to Fiskl for automated transaction imports and reconciliation"
}
```

**File: `docs/integrations/banking/overview.md`**

```markdown
---
title: "Banking Connections Overview"
description: "Learn how to connect and manage your bank accounts, credit cards, and payment providers in Fiskl for automated bookkeeping."
sidebar_position: 1
---

# Banking Connections

Banking connections allow you to link your real-world financial accounts directly to Fiskl. By automating the flow of data, you eliminate manual data entry, reduce human error, and ensure your financial records are always up to date.

## Why Connect Your Bank to Fiskl?

Connecting your accounts is the first step toward **Zero-touch reconciliation**. Instead of uploading CSV files or manually entering transactions, Fiskl automatically fetches your data and prepares it for your review.

* **Real-Time Visibility**: See your actual cash flow across all accounts in one dashboard.
* **Automated Categorization**: Fiskl learns from your habits to suggest categories for incoming transactions.
* **Multi-Currency Accuracy**: Automatically handles exchange rates for international transfers and accounts.
* **Security**: We use industry-standard **Open Banking** protocols. Fiskl never stores your bank login credentials.

---

## Supported Connection Providers

Fiskl partners with world-leading financial aggregators to provide global coverage. The provider you choose depends on your bank's location and the type of account you are connecting:

| Provider | Primary Regions | Best For |
| :--- | :--- | :--- |
| **Stripe** | Global | Payment processing, payouts, and multi-currency sales. |
| **Wio Bank** | UAE / Middle East | Digital business banking and automated transfers. |
| **Salt Edge** | Europe, Asia, Middle East | Open Banking connections for traditional retail banks. |
| **Yodlee** | USA, Canada, South Africa | Comprehensive coverage for North American financial institutions. |

---

## How it Works

1. **Connect**: You authorize a secure connection between your bank and Fiskl via one of our providers.
2. **Sync**: Fiskl imports your transaction history (usually starting from a date you choose).
3. **Categorize**: Transactions appear in your **Banking** tab, where Fiskl suggests matching ledger entries.
4. **Reconcile**: Confirm the matches to update your **Chart of Accounts** and financial reports instantly.

## Getting Started

To begin, navigate to **Banking** in the left menu. From there, you can select **Connect bank** to see the list of available providers and search for your specific institution.

:::tip
If you operate in multiple regions, you can use a combination of providers (e.g., Yodlee for a US account and Salt Edge for a UK account) within the same Fiskl company.
:::

---

## Explore Connection Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />
```

**Supporting Guides:**
- `connect-saltedge.md` - How to connect via Salt Edge
- `connect-stripe.md` - How to connect via Stripe
- `connect-wio.md` - How to connect via Wio Bank
- `connect-yodlee.md` - How to connect via Yodlee

## Overview vs Guide Distinction

### Overview Pages (The "Why")
- **Purpose**: Provide context, concepts, and navigation
- **Audience**: Users exploring what a feature area offers
- **Content Focus**:
  - What this category is about
  - Why users should care
  - Key concepts and terminology
  - How different guides relate
  - Navigation to specific guides

**Characteristics:**
- Broader, more conceptual
- No step-by-step instructions
- Multiple sections explaining different aspects
- Ends with DocCardList for navigation

### Guide Pages (The "How")
- **Purpose**: Provide specific, actionable instructions
- **Audience**: Users ready to accomplish a specific task
- **Content Focus**:
  - Step-by-step procedures
  - Specific configurations
  - Troubleshooting
  - Examples and screenshots

**Characteristics:**
- Narrow, task-focused
- Sequential numbered steps
- Specific UI interactions
- Clear prerequisites and outcomes

## Navigation Hierarchy Best Practices

### Shallow is Better Than Deep

**❌ Too Deep (Avoid):**
```
docs/
└── category/
    └── subcategory/
        └── sub-subcategory/
            └── guide.md  # Too many levels!
```

**✅ Good Depth:**
```
docs/
└── category/
    ├── overview.md
    ├── guide-one.md
    └── subcategory/
        ├── overview.md
        └── guide-two.md
```

**Maximum recommended depth: 3 levels**

### Logical Grouping

Group guides by:
1. **User workflow** - Follow natural task progression
2. **Feature similarity** - Related features together
3. **Skill level** - Basic before advanced (use sidebar_position)

### Sidebar Position Strategy

Use `sidebar_position` to control order:

```markdown
# In overview.md
sidebar_position: 1  # Always first in category

# In basic guides
sidebar_position: 2, 3, 4

# In advanced guides
sidebar_position: 10, 11, 12

# Leave gaps (2, 4, 6) for future insertions
```

## Category Naming Conventions

**✅ Good Category Names:**
- Banking Connections
- Invoice Management
- Expense Tracking
- Accounting Fundamentals

**❌ Poor Category Names:**
- Misc
- Other
- Advanced (too vague)
- Features (too generic)

**Rules:**
- Use plural forms when category contains multiple items
- Be specific and descriptive
- Reflect user mental models, not internal architecture
- 1-3 words maximum

## Required Overview Sections

Every overview must include:

1. **Opening Summary** (Required)
  - "This section explains [what] and helps you [accomplish goal]"

2. **Why Section** (Required)
  - Explains value and benefits
  - 2-3 sentences minimum

3. **Key Concepts** (Recommended)
  - Define important terminology
  - Use definition list format

4. **How It Works** (Recommended)
  - High-level process explanation
  - 2-3 paragraphs

5. **DocCardList** (Required)
  - Always at the end
  - Shows all guides in category

## Common Mistakes to Avoid

### ❌ Missing _category_.json
**Problem:** Category appears in sidebar but clicking it shows first alphabetical guide instead of overview.

**Solution:** Always create `_category_.json` with proper link to overview.

### ❌ Overview is Too Detailed
**Problem:** Overview contains step-by-step instructions, making it too long.

**Solution:** Keep overview conceptual. Move procedures to specific guides.

### ❌ No DocCardList
**Problem:** Users can't see available guides from overview page.

**Solution:** Always end overview with `<DocCardList />`.

### ❌ Inconsistent Naming
**Problem:** Category folder is "banking" but label is "Bank Connections".

**Solution:** Keep folder names lowercase-hyphenated, but use proper capitalization in label.

### ❌ Overview Not Position 1
**Problem:** Overview appears in middle or end of sidebar list.

**Solution:** Always set `sidebar_position: 1` in overview frontmatter.

## Checklist for New Categories

When creating a new documentation category:

- [ ] Create category folder with clear, descriptive name
- [ ] Add `_category_.json` with proper fields
- [ ] Create `overview.md` as landing page
- [ ] Set `sidebar_position: 1` in overview
- [ ] Include opening summary in overview
- [ ] Add "Why Use [Category]" section
- [ ] Define key concepts if applicable
- [ ] Explain high-level workflow
- [ ] End with `<DocCardList />`
- [ ] Create at least one guide to accompany overview
- [ ] Test navigation - clicking category shows overview
- [ ] Verify DocCardList displays all guides correctly

<###############NAVIGATION_ARCHITECTURE############>

<###############CONTENT_STRUCTURE_PATTERNS##########>

###############RAG_OPTIMIZATION_RULES###########>

## For AI and Search Optimization

### 1. Context Injection

**Start every page with "This guide explains..."**

This provides immediate context for AI systems:
- What the page is about
- Who it's for
- What problem it solves

### 2. Semantic Hierarchy

**Use clear H2/H3 structure:**
- Main topics at H2 level
- Subtopics at H3 level
- Never skip heading levels

This helps AI understand relationships between topics.

### 3. Descriptive Link Text

**Use meaningful anchor text:**

✅ "Learn about [tax calculations](/docs/tax)"
✅ "See [how to create invoices](/docs/invoicing/create)"

❌ "Click [here](/docs/tax)"
❌ "[This](/docs/invoicing/create) shows you how"

### 4. Keyword Distribution

**Place keywords naturally in:**
- First paragraph (opening summary)
- H2 headings
- First sentence of each section
- Image alt text
- Link anchor text

**Don't keyword stuff:**
❌ "Invoicing invoices invoice creation invoice system invoicing tool"
✅ "Create professional invoices quickly"

### 5. Structured Data Patterns

**Use consistent patterns for similar content:**

All "How to" guides follow same structure:
1. Opening summary
2. Prerequisites
3. Numbered steps
4. Outcomes
5. Troubleshooting

This helps AI learn patterns and provide better answers.

### 6. Cross-Referencing

**Link to related concepts:**

At the end of pages, include:
```markdown
## Related Topics

- [Topic One](/docs/path) - Brief description
- [Topic Two](/docs/path) - Brief description
```

<###############RAG_OPTIMIZATION_RULES###########>

###############QUALITY_CHECKLIST###############>

## Pre-Publish Checklist

### Content Quality
- [ ] Opening summary present (1-2 sentences, explains what and why)
- [ ] Frontmatter complete (title, description, keywords, sidebar_position)
- [ ] H2/H3 hierarchy logical (no H1 in content, no skipped levels)
- [ ] Sentences average 15-20 words (none over 25 words)
- [ ] Paragraphs are 3-5 sentences (none over 6 sentences)
- [ ] One idea per sentence
- [ ] Active voice throughout
- [ ] Present tense for current features
- [ ] No anthropomorphization

### Formatting
- [ ] All UI elements bolded (**Save**, **Settings**)
- [ ] "Select" used for UI interactions (not click, press, choose)
- [ ] Technical values in code format (`invoice_001`)
- [ ] Sequential steps use numbered lists
- [ ] Non-sequential items use bullet lists
- [ ] Parallel structure in lists
- [ ] Maximum 2-3 callouts per page

### Terminology
- [ ] Official Fiskl terms used consistently
- [ ] No mixing of synonyms (client vs customer)
- [ ] Correct feature name capitalization
- [ ] Numbers 1-9 spelled out (except in steps/UI)
- [ ] Setup (noun) vs Set up (verb) correct

### Images and Links
- [ ] All images have descriptive alt text
- [ ] Alt text describes what user will see, not just labels
- [ ] Images use `/img/` prefix
- [ ] Images organized by category
- [ ] No broken internal links
- [ ] Link text is descriptive (not "click here")
- [ ] Internal links use relative paths

### SEO and AI
- [ ] Description is 150-160 characters
- [ ] Keywords included naturally in:
    - First paragraph
    - H2 headings
    - Alt text
- [ ] Related topics linked at end
- [ ] Clear semantic structure

### User Experience
- [ ] Prerequisites listed upfront
- [ ] Steps are in logical order
- [ ] Outcomes clearly stated
- [ ] Common issues addressed
- [ ] Troubleshooting provided for errors

### Testing
- [ ] Instructions tested and verified working
- [ ] Screenshots match current UI
- [ ] All links work
- [ ] Code examples run correctly

<###############QUALITY_CHECKLIST###############>

###############ANTI_PATTERNS######################>

## What NOT to Do

### ❌ Incorrect Voice and Tense

**Wrong:**
```markdown
The system will provide you with an interface where you can input your data.
```

**Correct:**
```markdown
Fiskl provides an interface where you can enter your data.
```

---

**Wrong:**
```markdown
Users should click on the Save button to save their changes.
```

**Correct:**
```markdown
Select **Save** to save your changes.
```

### ❌ Inconsistent Navigation Language

**Wrong:**
```markdown
1. Click on New Invoice
2. Press the Submit button
3. Choose your client
4. Tap Save
```

**Correct:**
```markdown
1. Select **New Invoice**
2. Select **Submit**
3. Select your client
4. Select **Save**
```

### ❌ Sentences Too Long

**Wrong:**
```markdown
When you create a new invoice, the system will automatically calculate the tax based on your default settings, which you can change at any time by going to the Settings menu and selecting Tax Configuration, and then the invoice will be saved to your dashboard where you can view, edit, or send it to your client.
```

**Correct:**
```markdown
When you create an invoice, Fiskl automatically calculates tax based on your settings. You can change tax settings in **Settings** > **Tax Configuration**. After saving, the invoice appears on your dashboard. From there, you can view, edit, or send it to your client.
```

### ❌ Paragraphs Too Long

**Wrong:**
```markdown
Fiskl's banking integration connects to your bank accounts. It imports transactions automatically. The system matches transactions to invoices and expenses. You can reconcile your accounts quickly. The integration supports multiple banks. You can connect checking accounts, savings accounts, and credit cards. Transaction data updates daily. You can also trigger manual syncs. The system handles multi-currency accounts. Exchange rates update automatically. You can view all transactions in one place. (12 sentences - way too long!)
```

**Correct:**
```markdown
Fiskl's banking integration connects to your bank accounts and imports transactions automatically. The system matches transactions to invoices and expenses so you can reconcile quickly.

The integration supports multiple banks and account types including checking, savings, and credit cards. Transaction data updates daily, but you can trigger manual syncs when needed.

For multi-currency accounts, Fiskl handles exchange rate conversions automatically. You can view all transactions in one centralized location.
```

### ❌ Weak Opening Summary

**Wrong:**
```markdown
# Creating Invoices

In this guide, we will explore the various aspects of invoice creation in Fiskl.
```

**Correct:**
```markdown
# Creating Invoices

This guide explains how to create invoices in Fiskl and helps you bill clients professionally with customized, branded invoices.
```

### ❌ Poor Link Text

**Wrong:**
```markdown
For more information about taxes, click [here](/docs/tax).
```

**Correct:**
```markdown
Learn more about [tax calculations and rates](/docs/tax).
```

### ❌ Vague Alt Text

**Wrong:**
```markdown
![Screenshot](/img/invoice-form.png)
![Dashboard](/img/main-dashboard.png)
```

**Correct:**
```markdown
![Invoice creation form with client selector, line items table, and total amount calculation](/img/invoice-form.png)
![Dashboard displaying revenue chart, recent invoices list, and overdue invoice warnings](/img/main-dashboard.png)
```

### ❌ Too Many Callouts

**Wrong:**
```markdown
:::info
Some information
:::

Start the process...

:::tip
A helpful tip
:::

Continue with step 2...

:::info
More information
:::

:::warning
Be careful
:::

:::tip
Another tip
:::
```

**Correct:**
```markdown
Start the process by selecting **New Invoice**.

[Regular content with clear instructions]

:::tip
Save time by using invoice templates for recurring clients.
:::

[More content]

:::warning
Deleting an invoice removes it permanently. This action cannot be undone.
:::
```

### ❌ Inconsistent Terminology

**Wrong:**
```markdown
First, add a customer to your account. Next, create a client record. Then select the customer from the list. Finally, assign the client to the invoice.
```

**Correct:**
```markdown
First, add a client to your account. Next, create a client record. Then select the client from the list. Finally, assign the client to the invoice.
```

### ❌ Corporate Jargon

**Wrong:**
```markdown
To leverage the functionality of the invoicing module and utilize the interface to facilitate transaction processing, users should endeavor to optimize their workflow.
```

**Correct:**
```markdown
To use the invoicing feature effectively, follow these steps to streamline your workflow.
```

<###############ANTI_PATTERNS######################>

---

## Summary

This DSL ensures all Fiskl documentation is:
- **Consistent** in voice, tense, and terminology
- **Clear** with appropriate sentence and paragraph length
- **Professional** with proper formatting and structure
- **User-friendly** with action-oriented instructions
- **AI-optimized** for RAG systems and search

When in doubt:
1. Be clear and direct
2. Use "Select" for UI interactions
3. Keep sentences under 25 words
4. Keep paragraphs under 6 sentences
5. Use present tense for current features
6. Consult the terminology table
7. Check the quality checklist

*This DSL should be used as input for documentation generation and review to ensure consistent, high-quality content across all pages.*