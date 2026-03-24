# Fiskl Documentation Editorial Guide

**Version:** 2.0  
**Last Updated:** January 2025  
**For:** Technical writers, documentation contributors, and reviewers

---

## Table of Contents

1. [The Fiskl Voice](#the-fiskl-voice)
2. [Style Standards Quick Reference](#style-standards-quick-reference)
3. [Terminology Dictionary](#terminology-dictionary)
4. [Common Phrases - Approved List](#common-phrases---approved-list)
5. [Writing Process Checklist](#writing-process-checklist)
6. [Review Guidelines](#review-guidelines)
7. [Anti-Patterns (What to Avoid)](#anti-patterns-what-to-avoid)

---

## The Fiskl Voice

Fiskl documentation is **professional but approachable**. We're experts helping colleagues, not robots instructing users.

### Core Principles

**Clear and Direct**
- No unnecessary words or corporate jargon
- Get to the point quickly
- One idea per sentence

**Action-Oriented**
- Focus on what users can accomplish
- Lead with the action
- Use imperative mood for instructions

**Confident but Humble**
- We know our product well
- We acknowledge when things are complex
- We admit limitations honestly

**Helpful and Supportive**
- Anticipate user questions
- Provide context when needed
- Guide, don't just instruct

### Voice Examples

| ❌ Don't Say | ✅ Say Instead |
|-------------|---------------|
| "The system provides functionality that enables users to..." | "You can..." |
| "It is important to note that..." | "Remember:" or just state it |
| "Users may find it beneficial to..." | "We recommend..." |
| "In order to complete the process..." | "To complete the process..." |
| "Please be advised that..." | Just state the information |

---

## Style Standards Quick Reference

### Critical Rules (Never Break These)

| Rule | Standard | Never Use |
|------|----------|-----------|
| **UI Interactions** | Select | click, press, choose, tap, hit |
| **Sentence Length** | Max 25 words | Longer run-on sentences |
| **Paragraph Length** | Max 6 sentences | Long blocks of text |
| **Tense** | Present for features | Future tense except for outcomes |
| **Voice** | Active voice | Passive voice |
| **H1 in Content** | Never | Using # in markdown body |
| **Frontmatter** | Always required | Missing metadata |

### Navigation Language

**Always use "Select" for UI interactions:**

✅ **Correct:**
- Select **New Invoice**
- Select the **Save** button
- Select **File** > **Export** > **PDF**
- Select the checkbox to enable notifications

❌ **Incorrect:**
- Click New Invoice
- Press the Save button
- Choose File
- Tap the checkbox

**Exceptions (Only These):**
- **Enter** - For typing text: "Enter your client name"
- **Upload** - For files: "Upload your receipt"
- **Drag** - For drag-and-drop: "Drag the file to the upload area"
- **Toggle** - For switches: "Toggle **Multi-currency** on"
- **Press** - For keyboard only: "Press `Ctrl+S`"

### Sentence Structure

**Target:** 15-20 words per sentence  
**Maximum:** 25 words (break longer sentences)  
**Minimum:** 5 words (avoid fragments)

**Lead with the Action:**
✅ "Select **New Invoice** to begin"  
❌ "To begin creating a new invoice, select the New Invoice button"

**One Idea Per Sentence:**
✅ "Save your changes. Then test the integration."  
❌ "After saving your changes, which you should do before proceeding, test the integration."

### Paragraph Structure

**Target:** 3-5 sentences  
**Maximum:** 6 sentences  
**Pattern:**
1. Topic sentence (main idea)
2. Supporting sentences (1-3 sentences)
3. Transition or summary (optional)

---

## Terminology Dictionary

Use these terms consistently throughout ALL documentation.

### Primary Terms

| ✅ Use This | ❌ Never Use | Context |
|------------|-------------|---------|
| **Dashboard** | Home page, Main screen, Landing page | Page after login |
| **Client** | Customer | Unless specifically B2C |
| **Vendor** | Supplier | Businesses you pay |
| **Ledger account** | Account (alone) | "Account" is ambiguous |
| **Chart of Accounts** | COA, Account chart, GL | Write out first use |
| **Multi-currency** | Multi currency, Multicurrency | Always hyphenated |
| **Line item** | Item, Line, Row | In invoice/expense context |
| **Base currency** | Home currency, Default currency | Main business currency |
| **Banking** | Bank accounts, Banks | Our feature name |
| **Multi-journal entry** | Multi journal, Complex entry | Always with hyphen |
| **Payout** | Pay-out, Pay out | One word |
| **Email** | E-mail | No hyphen |
| **Setup** (noun) | Set-up, Set up | "Complete the setup" |
| **Set up** (verb) | Setup | "Set up your account" |
| **Dropdown** | Drop-down, Drop down | One word |
| **Checkbox** | Check box | One word |

### Feature Names (Capitalization)

**Capitalize these:**
- Fiskl Banking
- Multi-journal entries (lowercase unless starting sentence)
- Chart of Accounts
- Dashboard

**Don't capitalize these:**
- invoices
- expenses
- clients
- reports
- ledger accounts

### Numbers and Currency

**Numbers 1-9:** Spell out in prose  
✅ "You can create three types of reports"  
❌ "You can create 3 types of reports"

**Numbers 10+:** Use numerals  
✅ "The system supports 150 currencies"

**Exception - Always use numerals:**
- Steps: "Step 1", "Step 2"
- UI references: "Page 5", "Column 3"
- Technical values: "5 MB", "3 seconds"

**Currency Format:**
- $100 or 100 USD
- €50 or 50 EUR
- £75 or 75 GBP

**In examples, prefer:** USD, EUR, GBP

---

## Common Phrases - Approved List

### Starting Instructions

| Situation | ✅ Say This | ❌ Not This |
|-----------|-----------|------------|
| Begin a task | To [action]: | In order to [action]: |
| Prerequisites | Before you begin: | Prerequisites:, Required: |
| Navigation | Go to **Menu** > **Item** | Navigate to..., Find the... |
| Results | After saving, the invoice appears | Once you save, you will see |
| Next step | Next, select... | Subsequently, proceed to... |

### Providing Context

| Situation | ✅ Say This | ❌ Not This |
|-----------|-----------|------------|
| Important info | Remember: | It is important to note that |
| Tips | We recommend... | It's best to..., You may want to |
| Warnings | Don't [action] without [precaution] | Please be careful not to |
| Outcomes | The system [does X] | The system will attempt to |
| Alternatives | Alternatively, you can... | Another option is to |

### Explaining Features

| Situation | ✅ Say This | ❌ Not This |
|-----------|-----------|------------|
| Purpose | This feature [does X] | This feature allows you to |
| Benefits | You can [accomplish Y] | This enables users to |
| Limitations | This feature doesn't [do Z] | Unfortunately, this cannot |
| Requirements | You need [permission/item] | You must have, It's required |

### Completion and Status

| Situation | ✅ Say This | ❌ Not This |
|-----------|-----------|------------|
| Task done | You're done! | The process is complete |
| Success | The [item] is created | Successfully created |
| In progress | The system processes... | The system is processing |
| Next steps | Now you can... | You are now able to |

---

## Writing Process Checklist

### Before Writing

Research Phase:
- [ ] Understand the user's goal
- [ ] Identify prerequisites
- [ ] Test the feature yourself
- [ ] Screenshot key steps
- [ ] Note gotchas or edge cases
- [ ] Check related documentation

Planning Phase:
- [ ] Outline main sections
- [ ] Identify target word count
- [ ] Decide on examples needed
- [ ] Plan screenshot locations

### During Writing

Structure:
- [ ] Start with clear outcome statement
- [ ] Add frontmatter (title, description, keywords)
- [ ] Use H2 for main sections
- [ ] Use H3 for subsections
- [ ] Never use H1 in content

Content:
- [ ] Write in present tense
- [ ] Use active voice
- [ ] One idea per sentence
- [ ] Keep sentences under 25 words
- [ ] Keep paragraphs under 6 sentences
- [ ] Use "Select" for all UI interactions

Formatting:
- [ ] Bold all UI elements (**Button**)
- [ ] Use `code` for technical values
- [ ] Number sequential steps
- [ ] Bullet non-sequential items
- [ ] Add only necessary callouts (2-3 max)

Images:
- [ ] Include relevant screenshots
- [ ] Add descriptive alt text (not just labels)
- [ ] Place images after referencing text
- [ ] Use /img/ path prefix

Links:
- [ ] Use descriptive anchor text
- [ ] Link to related topics
- [ ] Use relative paths for internal links
- [ ] Verify all links work

### After Writing

Content Review:
- [ ] Read aloud (catches awkward phrasing)
- [ ] Check against terminology dictionary
- [ ] Verify all steps are in order
- [ ] Confirm prerequisites are listed
- [ ] Ensure outcomes are stated

Technical Review:
- [ ] Run automated linter: `npm run lint-docs`
- [ ] Fix all critical issues
- [ ] Address warnings
- [ ] Consider suggestions

Testing:
- [ ] Follow instructions exactly as written
- [ ] Test with fresh account (if possible)
- [ ] Verify screenshots match current UI
- [ ] Check all links work
- [ ] Test code examples

Final Checks:
- [ ] Run style review: `npm run review-doc`
- [ ] Get peer review
- [ ] Make final edits
- [ ] Check in all languages if translated

---

## Review Guidelines

### When Reviewing Documentation

1. **Read as a New User**
    - Forget what you know about the product
    - Would a new user understand?
    - Are prerequisites clear?

2. **Test the Instructions**
    - Actually follow the steps
    - Note anything confusing
    - Verify outcomes match description

3. **Check Consistency**
    - Compare with similar docs
    - Verify terminology matches
    - Ensure style is consistent

4. **Question Assumptions**
    - Are prerequisites actually listed?
    - Are terms defined?
    - Is context provided?

5. **Verify Completeness**
    - What happens after?
    - What if something goes wrong?
    - Are alternatives mentioned?

### Review Checklist Template

Use this for peer reviews:

```markdown
# Documentation Review

**Doc:** [filename]
**Reviewer:** [name]
**Date:** [date]

## Content Quality
- [ ] Opening summary clearly states purpose
- [ ] Prerequisites listed upfront
- [ ] Steps in logical order
- [ ] Outcomes clearly stated
- [ ] Common issues addressed
- [ ] Tested and verified accurate

## Style Compliance
- [ ] "Select" used for UI interactions
- [ ] Sentences average 15-20 words (none over 25)
- [ ] Paragraphs 3-5 sentences (none over 6)
- [ ] Present tense for features
- [ ] Active voice throughout
- [ ] No anthropomorphization

## Formatting
- [ ] All UI elements bolded
- [ ] Technical values in code format
- [ ] Sequential steps numbered
- [ ] Non-sequential items bulleted
- [ ] Callouts used sparingly (2-3 max)
- [ ] Images have descriptive alt text

## Structure
- [ ] Frontmatter complete
- [ ] No H1 in content
- [ ] Clear H2/H3 hierarchy
- [ ] No skipped heading levels

## Terminology
- [ ] Uses official Fiskl terms
- [ ] Consistent (no synonym mixing)
- [ ] Feature names capitalized correctly

## Links and Images
- [ ] Descriptive link text (not "click here")
- [ ] Internal links use relative paths
- [ ] Images use /img/ prefix
- [ ] Alt text is descriptive
- [ ] No broken links

## Issues Found

**Critical (Must Fix):**
- [Issue 1]
- [Issue 2]

**Important (Should Fix):**
- [Issue 1]
- [Issue 2]

**Suggestions (Nice to Have):**
- [Suggestion 1]
- [Suggestion 2]

## Overall Assessment
- **Status:** [ ] Publish Ready [ ] Minor Edits [ ] Needs Revision [ ] Major Work
- **Estimated Fix Time:** [X minutes/hours]

## Notes
[Additional comments or context]
```

### Review Severity Levels

**Critical (Must Fix Before Publishing):**
- Missing frontmatter
- Inaccurate instructions
- Broken or incorrect steps
- Missing prerequisites
- H1 in content
- "Click/press/choose" instead of "Select"
- Missing alt text on images

**Important (Should Fix):**
- Sentences over 25 words
- Paragraphs over 6 sentences
- Passive voice
- Inconsistent terminology
- Poor link text
- Too many callouts

**Suggestions (Nice to Have):**
- Could be clearer
- Additional examples helpful
- Related links to add
- Better screenshot

---

## Anti-Patterns (What to Avoid)

### Voice and Tense Issues

❌ **Future tense for current features:**
```markdown
The system will calculate your taxes automatically.
```
✅ **Present tense:**
```markdown
The system calculates your taxes automatically.
```

---

❌ **Passive voice:**
```markdown
The invoice is created by the system.
```
✅ **Active voice:**
```markdown
The system creates the invoice.
```

---

❌ **Anthropomorphization:**
```markdown
Fiskl knows your preferences and thinks about the best options.
```
✅ **Direct description:**
```markdown
Fiskl uses your preferences to suggest options.
```

### Navigation Language Issues

❌ **Mixing verbs:**
```markdown
1. Click **New Invoice**
2. Press **Submit**
3. Choose your client
4. Tap **Save**
```
✅ **Consistent "Select":**
```markdown
1. Select **New Invoice**
2. Select **Submit**
3. Select your client
4. Select **Save**
```

### Sentence and Paragraph Issues

❌ **Sentence too long (35 words):**
```markdown
When you create a new invoice in Fiskl, the system will automatically calculate the tax amount based on your default tax settings, which you can modify at any time in the Settings menu.
```
✅ **Broken into shorter sentences:**
```markdown
When you create an invoice, Fiskl automatically calculates the tax amount. The calculation uses your default tax settings. You can modify tax settings in the **Settings** menu.
```

---

❌ **Paragraph too long (8 sentences):**
```markdown
Fiskl's banking integration is powerful. It connects to your bank. It imports transactions automatically. The system matches transactions. You can reconcile quickly. It supports multiple banks. You can connect many accounts. Transaction data updates daily.
```
✅ **Split into logical paragraphs:**
```markdown
Fiskl's banking integration connects to your bank and imports transactions automatically. The system matches transactions so you can reconcile quickly.

The integration supports multiple banks and account types. Transaction data updates daily.
```

### Terminology Issues

❌ **Inconsistent terms:**
```markdown
First, add a customer. Next, create a client record. Then select the customer.
```
✅ **Consistent terminology:**
```markdown
First, add a client. Next, create a client record. Then select the client.
```

---

❌ **Wrong term:**
```markdown
Go to the home page to see your main screen.
```
✅ **Correct term:**
```markdown
Go to the Dashboard.
```

### Link and Image Issues

❌ **Poor link text:**
```markdown
For more information, click [here](/invoicing).
```
✅ **Descriptive link text:**
```markdown
Learn more about [creating and managing invoices](/invoicing).
```

---

❌ **Vague alt text:**
```markdown
![Screenshot](/img/invoice-form.png)
```
✅ **Descriptive alt text:**
```markdown
![Invoice creation form with client selector, line items table, and total calculation](/img/invoice-form.png)
```

### Callout Overuse

❌ **Too many callouts:**
```markdown
:::info
Information about feature A
:::

[2 sentences of content]

:::tip
Tip about feature A
:::

[2 more sentences]

:::info
More information
:::

:::warning
Be careful
:::
```
✅ **Appropriate callout use:**
```markdown
[Full explanation of the feature with clear instructions - 2-3 paragraphs]

:::tip
Save time by using templates for recurring invoices.
:::

[More content]

:::warning
Deleting an invoice removes it permanently. This action cannot be undone.
:::
```

### Corporate Jargon

❌ **Verbose and jargon-heavy:**
```markdown
To leverage the functionality of the invoicing module and utilize the interface to facilitate transaction processing, users should endeavor to optimize their workflow.
```
✅ **Clear and direct:**
```markdown
To use the invoicing feature effectively, follow these steps to streamline your workflow.
```

---

## Quick Reference Card

Print or bookmark this section for quick reference while writing:

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
| Dashboard | Home page |
| Client | Customer |
| Ledger account | Account |
| Multi-currency | Multicurrency |
| Base currency | Home currency |
| Select | Click, Press, Choose |
| Email | E-mail |
| Setup (noun) | Set-up |
| Set up (verb) | Setup |

---

## Getting Help

### Questions?

- **Style questions:** Check this guide first, then ask team lead
- **Technical accuracy:** Test yourself or ask product team
- **Terminology unclear:** Check the dictionary or ask team lead

### Resources

- **Full DSL:** `script-docs/dsl/documentation-standards-dsl.md`
- **Linter:** `npm run lint-docs <file>`
- **Review tool:** `npm run review-doc -- --file=<file>`
- **README:** Main project README for technical setup

### Feedback

Found something unclear in this guide? Submit an issue or suggest an edit!

---

*Last Updated: January 2025 | Version 2.0*