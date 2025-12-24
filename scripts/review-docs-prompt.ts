// scripts/review-docs-prompt.ts
// Generates Claude prompt for reviewing existing documentation

import fs from 'fs';
import path from 'path';

const DOCS_DSL_PATH = './script-docs/dsl/documentation-standards-dsl.md';
const EDITORIAL_GUIDE_PATH = './script-docs/EDITORIAL_GUIDE.md';

interface ReviewConfig {
    filePath: string;
    reviewType: 'full' | 'quick' | 'style-only';
    outputFormat: 'detailed' | 'checklist' | 'rewrite';
}

function generateReviewPrompt(config: ReviewConfig): string {
    // Load the DSL
    if (!fs.existsSync(DOCS_DSL_PATH)) {
        throw new Error(`DSL not found at ${DOCS_DSL_PATH}`);
    }

    // Load the document to review
    if (!fs.existsSync(config.filePath)) {
        throw new Error(`Document not found at ${config.filePath}`);
    }

    const dsl = fs.readFileSync(DOCS_DSL_PATH, 'utf-8');
    const document = fs.readFileSync(config.filePath, 'utf-8');

    // Load editorial guide if it exists
    let editorialGuide = '';
    if (fs.existsSync(EDITORIAL_GUIDE_PATH)) {
        editorialGuide = fs.readFileSync(EDITORIAL_GUIDE_PATH, 'utf-8');
    }

    const filename = path.basename(config.filePath);

    let promptTemplate = '';

    if (config.reviewType === 'full') {
        promptTemplate = generateFullReviewPrompt(dsl, editorialGuide, document, filename, config.outputFormat);
    } else if (config.reviewType === 'quick') {
        promptTemplate = generateQuickReviewPrompt(dsl, document, filename);
    } else {
        promptTemplate = generateStyleOnlyPrompt(dsl, document, filename);
    }

    return promptTemplate;
}

function generateFullReviewPrompt(dsl: string, editorialGuide: string, document: string, filename: string, outputFormat: string): string {
    return `You are an expert documentation reviewer for Fiskl. Your task is to thoroughly review the following documentation page for quality, consistency, and adherence to Fiskl's documentation standards.

# FISKL DOCUMENTATION STANDARDS

${dsl}

${editorialGuide ? `\n# EDITORIAL GUIDE\n\n${editorialGuide}\n` : ''}

# DOCUMENT TO REVIEW

**Filename:** ${filename}

\`\`\`markdown
${document}
\`\`\`

# REVIEW INSTRUCTIONS

Perform a comprehensive review of this document. Analyze it against ALL standards in the DSL above.

## Analysis Areas

### 1. Style Consistency Score (1-10)

Evaluate and score each area:
- **Voice and tense consistency:** Present tense for features, active voice, no anthropomorphization
- **Navigation language:** Consistent use of "Select" (not click/press/choose)
- **Sentence structure:** Average 15-20 words, max 25, one idea per sentence
- **Paragraph structure:** 3-5 sentences, max 6, clear topic sentences
- **Terminology consistency:** Uses official Fiskl terms (see DSL terminology table)

**Overall Style Score: [X/10]**

### 2. Structural Issues

Identify problems with:
- **Frontmatter:** Missing or incomplete metadata (title, description, keywords)
- **Opening summary:** Missing, weak, or not following "This guide explains..." pattern
- **Heading hierarchy:** H1 in content, skipped levels, unclear structure
- **List usage:** Sequential vs. non-sequential, parallel structure
- **Callout overuse:** More than 2-3 per page

### 3. Content Quality Issues

Evaluate:
- **Clarity:** Are instructions clear and actionable?
- **Completeness:** Missing prerequisites, outcomes, or error handling?
- **Accuracy:** Do steps follow logical order?
- **Examples:** Are examples helpful and relevant?

### 4. Formatting Compliance

Check:
- **UI elements:** All buttons, menus, fields bolded?
- **Technical values:** Proper use of code formatting?
- **Links:** Descriptive anchor text, not "click here"?
- **Images:** Present and have descriptive alt text?

### 5. SEO and AI Optimization

Assess:
- **Keywords:** Naturally distributed in headings, first paragraph, alt text?
- **Description:** 150-160 characters in frontmatter?
- **Internal links:** Related topics linked?
- **Semantic structure:** Clear hierarchy for AI parsing?

## Output Format: ${outputFormat === 'detailed' ? 'DETAILED ANALYSIS' : outputFormat === 'checklist' ? 'CHECKLIST' : 'REWRITE RECOMMENDATIONS'}

${outputFormat === 'detailed' ? `
Provide a detailed analysis with:

1. **Executive Summary** (2-3 sentences)
   - Overall quality assessment
   - Key strengths
   - Primary concerns

2. **Style Consistency Breakdown**
   - Voice/tense score with examples
   - Navigation language score with examples
   - Sentence structure score with examples
   - Paragraph structure score with examples
   - Terminology score with examples

3. **Critical Issues** (Must Fix - Priority 1)
   List each issue with:
   - **Issue:** Description
   - **Location:** Line number or section
   - **Current:** Quote the problematic text
   - **Fix:** Provide corrected version
   - **Why:** Explain the problem

4. **Important Issues** (Should Fix - Priority 2)
   Same format as Critical Issues

5. **Suggestions** (Nice to Have - Priority 3)
   Same format as above

6. **Example Rewrites**
   For the 3 most problematic sections, provide:
   - **Original section**
   - **Rewritten section**
   - **Explanation of changes**

7. **Final Recommendations**
   - Estimated time to fix: [X hours]
   - Recommended approach: [Full rewrite / Targeted edits / Minor polish]
   - Key focus areas: [List 3-5 areas]
` : ''}

${outputFormat === 'checklist' ? `
Provide an actionable checklist format:

## Review Summary
- **Overall Score:** [X/10]
- **Status:** [Needs Major Work / Needs Revision / Minor Edits / Publish Ready]
- **Estimated Fix Time:** [X hours]

## Critical Fixes Required ✗

- [ ] **Issue 1:** [One-line description]
  - Location: [Section name or line number]
  - Fix: [Specific action needed]

- [ ] **Issue 2:** [One-line description]
  - Location: [Section name or line number]
  - Fix: [Specific action needed]

[Continue for all critical issues]

## Style Improvements ⚠

- [ ] **Issue 1:** [One-line description]
  - Location: [Section name or line number]
  - Fix: [Specific action needed]

[Continue for all style issues]

## Content Improvements 💡

- [ ] **Issue 1:** [One-line description]
  - Location: [Section name or line number]
  - Fix: [Specific action needed]

[Continue for all content suggestions]

## Quick Wins (Easy fixes)

- [ ] [Simple fix 1]
- [ ] [Simple fix 2]
- [ ] [Simple fix 3]

## Before/After Examples (Top 3 Issues)

### Example 1: [Issue Type]
**Before:**
\`\`\`
[Original text]
\`\`\`

**After:**
\`\`\`
[Fixed text]
\`\`\`

[Repeat for 2 more examples]
` : ''}

${outputFormat === 'rewrite' ? `
Provide rewrite recommendations:

## Rewrite Assessment
- **Sections needing complete rewrite:** [List]
- **Sections needing heavy editing:** [List]
- **Sections that are good:** [List]

## Rewrite Priority

### Priority 1: Complete Rewrite Needed
For each section:
**Section:** [Name]
**Why rewrite:** [Reason]
**Key issues:** [List 3-5 main problems]
**Approach:** [How to approach the rewrite]

### Priority 2: Heavy Editing Needed
[Same format]

### Priority 3: Minor Polish
[Same format]

## Rewritten Sections (Top 3)

Provide complete rewrites of the 3 worst sections:

### Section 1: [Name]

**Original:**
\`\`\`markdown
[Original text]
\`\`\`

**Rewritten:**
\`\`\`markdown
[New version following all DSL standards]
\`\`\`

**Changes made:**
- [Change 1]
- [Change 2]
- [Change 3]

[Repeat for sections 2 and 3]

## Overall Rewrite Strategy

Recommend either:
1. **Incremental approach:** Fix section by section
2. **Fresh start:** Rewrite entire document from scratch
3. **Hybrid:** Rewrite some sections, edit others

**Recommendation:** [Choice with reasoning]
` : ''}

Remember to:
- Quote specific text when identifying issues
- Provide concrete, actionable fixes
- Prioritize issues by severity
- Be constructive and helpful in tone
- Follow all standards from the DSL`;
}

function generateQuickReviewPrompt(dsl: string, document: string, filename: string): string {
    return `You are reviewing Fiskl documentation for quick quality check.

# DOCUMENT TO REVIEW

**Filename:** ${filename}

\`\`\`markdown
${document}
\`\`\`

# QUICK REVIEW STANDARDS (From DSL)

## Critical Style Rules
1. Use "Select" for UI interactions (not click/press/choose)
2. Sentences max 25 words
3. Paragraphs max 6 sentences
4. Present tense for current features
5. Active voice, no anthropomorphization
6. Bold all UI elements (**Button**)

## Critical Structure Rules
1. Opening summary present: "This guide explains..."
2. No H1 in content (only H2, H3)
3. Frontmatter complete (title, description, keywords)
4. Max 2-3 callouts per page
5. Images have descriptive alt text

## Critical Terminology
- Dashboard (not Home page)
- Client (not Customer)
- Ledger account (not Account alone)
- Multi-currency (hyphenated)
- Select (not click)

# OUTPUT FORMAT

Provide a fast assessment:

## Quick Score: [X/10]

## Top 3 Issues
1. **[Issue type]:** [One sentence description] → Fix: [Quick solution]
2. **[Issue type]:** [One sentence description] → Fix: [Quick solution]
3. **[Issue type]:** [One sentence description] → Fix: [Quick solution]

## Status: [Publish Ready / Minor Edits / Needs Revision / Major Work Needed]

## Quick Fixes (5 minutes or less)
- [ ] [Fix 1]
- [ ] [Fix 2]
- [ ] [Fix 3]

## Medium Fixes (15-30 minutes)
- [ ] [Fix 1]
- [ ] [Fix 2]

## Estimated Total Fix Time: [X minutes/hours]

Keep it brief and actionable!`;
}

function generateStyleOnlyPrompt(dsl: string, document: string, filename: string): string {
    return `You are reviewing Fiskl documentation ONLY for style consistency.

# DOCUMENT TO REVIEW

**Filename:** ${filename}

\`\`\`markdown
${document}
\`\`\`

# STYLE RULES TO CHECK

## 1. Navigation Language
✅ MUST use "Select" for all UI interactions
❌ NEVER use: click, press, choose, tap

## 2. Sentence Length
- Target: 15-20 words
- Maximum: 25 words
- Check EVERY sentence

## 3. Paragraph Length
- Target: 3-5 sentences
- Maximum: 6 sentences
- Check EVERY paragraph

## 4. Voice and Tense
✅ Present tense for features: "Fiskl calculates..."
✅ Active voice: "Select the button"
❌ No anthropomorphization: "Fiskl knows"

## 5. Terminology Consistency
- Dashboard (not Home page)
- Client (not Customer)
- Ledger account (not Account)
- Multi-currency (hyphenated)
- Base currency (not home/default)

# OUTPUT

## Style Consistency Score: [X/10]

### Navigation Language Issues
[List every instance of click/press/choose/tap with line numbers and corrections]

### Sentence Length Issues
[List every sentence over 25 words with word count and suggested split]

### Paragraph Length Issues
[List every paragraph over 6 sentences with sentence count and suggested split]

### Voice/Tense Issues
[List every passive voice or future tense issue with corrections]

### Terminology Issues
[List every inconsistent term with correct replacement]

## Summary
- Total issues found: [X]
- Estimated fix time: [X minutes]
- Priority: [High/Medium/Low]

Provide line-by-line corrections for ALL style issues found.`;
}

function parseArgs(): ReviewConfig {
    const args = process.argv.slice(2);
    const config: ReviewConfig = {
        filePath: '',
        reviewType: 'full',
        outputFormat: 'detailed'
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg.includes('=')) {
            const [key, value] = arg.split('=');
            const cleanKey = key.replace('--', '');

            switch (cleanKey) {
                case 'file':
                    config.filePath = value;
                    break;
                case 'type':
                    if (['full', 'quick', 'style-only'].includes(value)) {
                        config.reviewType = value as 'full' | 'quick' | 'style-only';
                    }
                    break;
                case 'format':
                    if (['detailed', 'checklist', 'rewrite'].includes(value)) {
                        config.outputFormat = value as 'detailed' | 'checklist' | 'rewrite';
                    }
                    break;
            }
        } else if (arg.startsWith('--')) {
            const key = arg.replace('--', '');
            const value = args[i + 1];

            switch (key) {
                case 'file':
                    config.filePath = value;
                    i++;
                    break;
                case 'type':
                    if (['full', 'quick', 'style-only'].includes(value)) {
                        config.reviewType = value as 'full' | 'quick' | 'style-only';
                    }
                    i++;
                    break;
                case 'format':
                    if (['detailed', 'checklist', 'rewrite'].includes(value)) {
                        config.outputFormat = value as 'detailed' | 'checklist' | 'rewrite';
                    }
                    i++;
                    break;
            }
        }
    }

    return config;
}

function showHelp() {
    console.log(`
📋 FISKL Documentation Review Tool
===================================

Usage: npm run review-doc -- [options]

OPTIONS:
  --file          Path to documentation file (REQUIRED)
  --type          Review type (default: "full")
                  Options: full, quick, style-only
  --format        Output format (default: "detailed")
                  Options: detailed, checklist, rewrite

REVIEW TYPES:

  full          Complete review of style, structure, content
                Best for: Major revisions, quality audits
                Time: ~5 min to review prompt results

  quick         Fast check of critical issues
                Best for: Quick validation, pre-publish checks
                Time: ~2 min to review prompt results

  style-only    Focus only on style consistency
                Best for: Fine-tuning already good content
                Time: ~3 min to review prompt results

OUTPUT FORMATS:

  detailed      Comprehensive analysis with examples
                Best for: Understanding all issues deeply

  checklist     Actionable checklist of fixes
                Best for: Working through issues systematically

  rewrite       Section-by-section rewrite recommendations
                Best for: Major content overhauls

EXAMPLES:

  # Full review with detailed output (most common)
  npm run review-doc -- --file=docs/invoicing/create-invoice.md

  # Quick check before publishing
  npm run review-doc -- \\
    --file=docs/banking/connect-stripe.md \\
    --type=quick

  # Style-only check with checklist output
  npm run review-doc -- \\
    --file=docs/accounting/multi-journal.md \\
    --type=style-only \\
    --format=checklist

  # Full review for major rewrite
  npm run review-doc -- \\
    --file=docs/expenses/create-expense.md \\
    --type=full \\
    --format=rewrite

  # Pipe to clipboard (Mac)
  npm run review-doc -- --file=docs/invoicing/overview.md | pbcopy

  # Pipe to clipboard (Windows)
  npm run review-doc -- --file=docs/invoicing/overview.md | clip

WORKFLOW TIPS:

  1. Start with quick review to identify if doc needs work
  2. If major issues found, run full review with rewrite format
  3. After fixes, run style-only to catch remaining issues
  4. Before publishing, run quick review one final time

💡 The generated prompt should be pasted into Claude for analysis.
   Claude will return a comprehensive review based on Fiskl standards.
`);
}

function main() {
    if (process.argv.includes('--help') || process.argv.includes('-h')) {
        showHelp();
        return;
    }

    const config = parseArgs();

    if (!config.filePath) {
        console.error("\n❌ Error: Missing required argument --file\n");
        console.error("Usage: npm run review-doc -- --file=path/to/doc.md\n");
        console.error("Run with --help for more examples\n");
        process.exit(1);
    }

    try {
        const prompt = generateReviewPrompt(config);
        console.log(prompt);
        console.log('\n\n📋 Review prompt generated! Copy the above and paste into Claude.');
        console.log('💡 Tip: Pipe to pbcopy (Mac) or clip (Windows) to copy automatically');
    } catch (error: any) {
        console.error(`\n❌ Error: ${error.message}\n`);
        process.exit(1);
    }
}

main();