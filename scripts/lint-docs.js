// scripts/lint-docs.js
// Automated linting for Fiskl documentation

const fs = require('fs');
const path = require('path');

class DocLinter {
    constructor(filePath) {
        this.filePath = filePath;
        this.content = '';
        this.lines = [];
        this.issues = {
            critical: [],
            warnings: [],
            suggestions: []
        };
    }

    run() {
        try {
            this.content = fs.readFileSync(this.filePath, 'utf-8');
            this.lines = this.content.split('\n');

            console.log(`\n📝 Linting: ${this.filePath}\n`);

            this.checkFrontmatter();
            this.checkHeadings();
            this.checkNavigationLanguage();
            this.checkSentenceLength();
            this.checkParagraphLength();
            this.checkUIElements();
            this.checkLinks();
            this.checkImages();
            this.checkCallouts();
            this.checkTerminology();

            this.printResults();
            return this.issues.critical.length === 0;
        } catch (error) {
            console.error(`❌ Error reading file: ${error.message}`);
            process.exit(1);
        }
    }

    checkFrontmatter() {
        const frontmatterMatch = this.content.match(/^---\n([\s\S]*?)\n---/);

        if (!frontmatterMatch) {
            this.issues.critical.push({
                line: 1,
                issue: 'Missing frontmatter',
                fix: 'Add frontmatter with title, description, keywords, sidebar_position'
            });
            return;
        }

        const frontmatter = frontmatterMatch[1];

        if (!frontmatter.includes('title:')) {
            this.issues.critical.push({
                line: 1,
                issue: 'Missing title in frontmatter',
                fix: 'Add: title: "Page Title"'
            });
        }

        if (!frontmatter.includes('description:')) {
            this.issues.critical.push({
                line: 1,
                issue: 'Missing description in frontmatter',
                fix: 'Add: description: "150-160 character description"'
            });
        }

        if (!frontmatter.includes('keywords:')) {
            this.issues.warnings.push({
                line: 1,
                issue: 'Missing keywords in frontmatter',
                fix: 'Add: keywords: ["keyword1", "keyword2"]'
            });
        }

        const descMatch = frontmatter.match(/description:\s*"(.+?)"/);
        if (descMatch) {
            const descLength = descMatch[1].length;
            if (descLength < 100 || descLength > 160) {
                this.issues.warnings.push({
                    line: 1,
                    issue: `Description length ${descLength} chars (should be 150-160)`,
                    fix: 'Adjust description to 150-160 characters'
                });
            }
        }
    }

    checkHeadings() {
        let h1Count = 0;
        let lastHeadingLevel = 0;

        this.lines.forEach((line, index) => {
            const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
            if (headingMatch) {
                const level = headingMatch[1].length;
                const text = headingMatch[2];

                if (level === 1) {
                    h1Count++;
                    this.issues.critical.push({
                        line: index + 1,
                        issue: 'H1 found in content (only allowed in frontmatter title)',
                        text: line,
                        fix: 'Change to ## (H2) or remove'
                    });
                }

                if (level > lastHeadingLevel + 1 && lastHeadingLevel > 0) {
                    this.issues.warnings.push({
                        line: index + 1,
                        issue: `Skipped heading level (${lastHeadingLevel} to ${level})`,
                        text: line,
                        fix: 'Use sequential heading levels'
                    });
                }

                lastHeadingLevel = level;
            }
        });
    }

    checkNavigationLanguage() {
        const badVerbs = /\b(click|clicks|clicking|pressed|press|pressing|choose|chooses|choosing|tap|taps|tapping|hit|hits|hitting)\b/i;

        this.lines.forEach((line, index) => {
            // Skip code blocks and frontmatter
            if (line.trim().startsWith('```') || line.trim().startsWith('---')) {
                return;
            }

            const match = line.match(badVerbs);
            if (match) {
                this.issues.critical.push({
                    line: index + 1,
                    issue: `Use "Select" instead of "${match[0]}"`,
                    text: line.trim(),
                    fix: line.replace(badVerbs, 'Select')
                });
            }
        });
    }

    checkSentenceLength() {
        const contentWithoutFrontmatter = this.content.replace(/^---[\s\S]*?---/, '');
        const contentWithoutCodeBlocks = contentWithoutFrontmatter.replace(/```[\s\S]*?```/g, '');

        // Split by sentence-ending punctuation
        const sentences = contentWithoutCodeBlocks.split(/[.!?]\s+/);

        sentences.forEach(sentence => {
            const cleanSentence = sentence.replace(/\[.*?\]\(.*?\)/g, '').replace(/\*\*.*?\*\*/g, '').trim();
            const words = cleanSentence.split(/\s+/).filter(w => w.length > 0);

            if (words.length > 25) {
                const lineNum = this.findLineNumber(sentence.substring(0, 30));
                this.issues.warnings.push({
                    line: lineNum,
                    issue: `Sentence too long (${words.length} words, max 25)`,
                    text: cleanSentence.substring(0, 80) + '...',
                    fix: 'Break into 2 shorter sentences'
                });
            }
        });
    }

    checkParagraphLength() {
        const contentWithoutFrontmatter = this.content.replace(/^---[\s\S]*?---/, '');
        const paragraphs = contentWithoutFrontmatter.split(/\n\n+/);

        paragraphs.forEach(para => {
            // Skip code blocks, lists, and headings
            if (para.trim().startsWith('```') ||
                para.trim().startsWith('#') ||
                para.trim().match(/^\d+\./) ||
                para.trim().startsWith('-') ||
                para.trim().startsWith('*')) {
                return;
            }

            const sentences = para.split(/[.!?]\s+/).filter(s => s.trim().length > 0);

            if (sentences.length > 6) {
                const lineNum = this.findLineNumber(para.substring(0, 30));
                this.issues.warnings.push({
                    line: lineNum,
                    issue: `Paragraph too long (${sentences.length} sentences, max 6)`,
                    text: para.substring(0, 80) + '...',
                    fix: 'Split into 2-3 shorter paragraphs'
                });
            }
        });
    }

    checkUIElements() {
        // Check for unbolded UI elements
        const uiPatterns = [
            /button(?!\*\*)/i,
            /menu(?!\*\*)/i,
            /tab(?!\*\*)/i,
            /field(?!\*\*)/i,
            /\bsave(?!\*\*)/i,
            /\bcancel(?!\*\*)/i,
            /\bsubmit(?!\*\*)/i,
            /\bdelete(?!\*\*)/i
        ];

        this.lines.forEach((line, index) => {
            // Skip code blocks and headings
            if (line.trim().startsWith('```') || line.trim().startsWith('#')) {
                return;
            }

            uiPatterns.forEach(pattern => {
                if (pattern.test(line)) {
                    this.issues.suggestions.push({
                        line: index + 1,
                        issue: 'Possible UI element not bolded',
                        text: line.trim(),
                        fix: 'Check if UI elements should be **bolded**'
                    });
                }
            });
        });
    }

    checkLinks() {
        const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

        this.lines.forEach((line, index) => {
            let match;
            while ((match = linkPattern.exec(line)) !== null) {
                const linkText = match[1];
                const linkUrl = match[2];

                // Check for "click here" anti-pattern
                if (/^(here|this|click|link)$/i.test(linkText.trim())) {
                    this.issues.warnings.push({
                        line: index + 1,
                        issue: 'Non-descriptive link text',
                        text: match[0],
                        fix: 'Use descriptive text like "Learn about [feature]"'
                    });
                }

                // Check internal links use relative paths
                if (linkUrl.startsWith('http') && linkUrl.includes('fiskl.com')) {
                    this.issues.suggestions.push({
                        line: index + 1,
                        issue: 'Internal link uses absolute URL',
                        text: match[0],
                        fix: 'Use relative path: /...'
                    });
                }
            }
        });
    }

    checkImages() {
        const imagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;

        this.lines.forEach((line, index) => {
            let match;
            while ((match = imagePattern.exec(line)) !== null) {
                const altText = match[1];
                const imagePath = match[2];

                // Check for missing or poor alt text
                if (!altText || altText.length < 10) {
                    this.issues.critical.push({
                        line: index + 1,
                        issue: 'Missing or insufficient image alt text',
                        text: match[0],
                        fix: 'Add descriptive alt text (10+ chars) explaining what the image shows'
                    });
                }

                // Check for generic alt text
                if (altText && /^(image|screenshot|picture|photo|diagram)$/i.test(altText.trim())) {
                    this.issues.warnings.push({
                        line: index + 1,
                        issue: 'Generic alt text (not descriptive)',
                        text: match[0],
                        fix: 'Describe what the image shows: "Dashboard with revenue chart and invoice list"'
                    });
                }

                // Check image path
                if (!imagePath.startsWith('/img/')) {
                    this.issues.suggestions.push({
                        line: index + 1,
                        issue: 'Image path should start with /img/',
                        text: match[0],
                        fix: 'Use /img/ prefix for images'
                    });
                }
            }
        });
    }

    checkCallouts() {
        const calloutPattern = /^:::(info|tip|warning|caution)/gm;
        const matches = [...this.content.matchAll(calloutPattern)];

        if (matches.length > 3) {
            this.issues.warnings.push({
                line: 0,
                issue: `Too many callouts (${matches.length}, max 2-3 per page)`,
                fix: 'Reduce callouts or convert some to regular text'
            });
        }

        matches.forEach(match => {
            const lineNum = this.findLineNumber(match[0]);
            const type = match[1];

            // Check for empty callouts
            const calloutIndex = this.content.indexOf(match[0]);
            const calloutEnd = this.content.indexOf(':::', calloutIndex + 3);
            const calloutContent = this.content.substring(calloutIndex, calloutEnd);

            if (calloutContent.trim().length < 20) {
                this.issues.suggestions.push({
                    line: lineNum,
                    issue: 'Callout content is very short',
                    fix: 'Ensure callout provides useful information or remove it'
                });
            }
        });
    }

    checkTerminology() {
        const terminologyIssues = [
            { wrong: /\bhome\s+page\b/gi, correct: 'Dashboard' },
            { wrong: /\bmain\s+screen\b/gi, correct: 'Dashboard' },
            { wrong: /\bcustomer\b/gi, correct: 'Client', context: 'unless B2C' },
            { wrong: /\bsupplier\b/gi, correct: 'Vendor' },
            { wrong: /\bhome\s+currency\b/gi, correct: 'Base currency' },
            { wrong: /\bdefault\s+currency\b/gi, correct: 'Base currency' },
            { wrong: /\bmulti\s+currency\b/gi, correct: 'Multi-currency (hyphenated)' },
            { wrong: /\bmulticurrency\b/gi, correct: 'Multi-currency (hyphenated)' },
            { wrong: /\be-mail\b/gi, correct: 'Email (no hyphen)' },
            { wrong: /\bset-up\b/gi, correct: 'Setup (noun) or Set up (verb)' },
        ];

        this.lines.forEach((line, index) => {
            // Skip code blocks and frontmatter
            if (line.trim().startsWith('```') || line.trim().startsWith('---')) {
                return;
            }

            terminologyIssues.forEach(({ wrong, correct, context }) => {
                if (wrong.test(line)) {
                    this.issues.warnings.push({
                        line: index + 1,
                        issue: `Inconsistent terminology: use "${correct}"${context ? ' (' + context + ')' : ''}`,
                        text: line.trim(),
                        fix: line.replace(wrong, correct)
                    });
                }
            });
        });
    }

    findLineNumber(text) {
        for (let i = 0; i < this.lines.length; i++) {
            if (this.lines[i].includes(text)) {
                return i + 1;
            }
        }
        return 0;
    }

    printResults() {
        const totalIssues =
            this.issues.critical.length +
            this.issues.warnings.length +
            this.issues.suggestions.length;

        if (totalIssues === 0) {
            console.log('✅ No issues found! Document looks good.\n');
            return;
        }

        console.log(`Found ${totalIssues} issues:\n`);

        if (this.issues.critical.length > 0) {
            console.log(`🔴 CRITICAL (${this.issues.critical.length}) - Must fix before publishing:\n`);
            this.issues.critical.forEach((issue, idx) => {
                console.log(`${idx + 1}. Line ${issue.line}: ${issue.issue}`);
                if (issue.text) console.log(`   Text: "${issue.text.substring(0, 80)}${issue.text.length > 80 ? '...' : ''}"`);
                console.log(`   Fix: ${issue.fix}\n`);
            });
        }

        if (this.issues.warnings.length > 0) {
            console.log(`🟡 WARNINGS (${this.issues.warnings.length}) - Should fix for quality:\n`);
            this.issues.warnings.forEach((issue, idx) => {
                console.log(`${idx + 1}. Line ${issue.line}: ${issue.issue}`);
                if (issue.text) console.log(`   Text: "${issue.text.substring(0, 80)}${issue.text.length > 80 ? '...' : ''}"`);
                console.log(`   Fix: ${issue.fix}\n`);
            });
        }

        if (this.issues.suggestions.length > 0) {
            console.log(`💡 SUGGESTIONS (${this.issues.suggestions.length}) - Nice to have:\n`);
            this.issues.suggestions.forEach((issue, idx) => {
                console.log(`${idx + 1}. Line ${issue.line}: ${issue.issue}`);
                if (issue.text) console.log(`   Text: "${issue.text.substring(0, 80)}${issue.text.length > 80 ? '...' : ''}"`);
                console.log(`   Fix: ${issue.fix}\n`);
            });
        }

        // Summary
        console.log('\n📊 SUMMARY');
        console.log('─────────');
        console.log(`Critical Issues: ${this.issues.critical.length}`);
        console.log(`Warnings: ${this.issues.warnings.length}`);
        console.log(`Suggestions: ${this.issues.suggestions.length}`);
        console.log(`Total: ${totalIssues}`);

        if (this.issues.critical.length > 0) {
            console.log('\n❌ Status: BLOCKED - Fix critical issues before publishing');
        } else if (this.issues.warnings.length > 3) {
            console.log('\n⚠️  Status: NEEDS WORK - Address warnings for quality');
        } else {
            console.log('\n✅ Status: GOOD - Minor improvements suggested');
        }
        console.log('');
    }
}

function showHelp() {
    console.log(`
📋 FISKL Documentation Linter
==============================

Usage: npm run lint-docs <file-path>

EXAMPLES:
  npm run lint-docs docs/invoicing/create-invoice.md
  npm run lint-docs docs/banking/connect-stripe.md

WHAT IT CHECKS:

  CRITICAL (Must Fix):
  - Missing frontmatter
  - H1 headings in content
  - "Click/Press/Choose" instead of "Select"
  - Missing image alt text

  WARNINGS (Should Fix):
  - Sentence length over 25 words
  - Paragraph length over 6 sentences
  - Poor link text ("click here")
  - Too many callouts (3+)
  - Inconsistent terminology

  SUGGESTIONS (Nice to Have):
  - Possible unbolded UI elements
  - Generic alt text
  - Image path format
  - Internal links with absolute URLs

TIP: Run this before committing documentation changes!
`);
}

function main() {
    const args = process.argv.slice(2);

    if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
        showHelp();
        return;
    }

    const filePath = args[0];

    if (!fs.existsSync(filePath)) {
        console.error(`\n❌ Error: File not found: ${filePath}\n`);
        process.exit(1);
    }

    const linter = new DocLinter(filePath);
    const passed = linter.run();

    process.exit(passed ? 0 : 1);
}

main();