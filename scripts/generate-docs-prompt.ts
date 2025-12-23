// scripts/generate-docs-prompt.ts
import fs from 'fs';
import path from 'path';

const DOCS_DSL_PATH = './script-docs/dsl/documentation-standards-dsl.md';

interface DocPromptConfig {
    title: string;
    category: string;
    rawContentPath: string;
    targetLocale: string;
}

function generateDocPrompt(config: DocPromptConfig): string {
    if (!fs.existsSync(DOCS_DSL_PATH)) {
        throw new Error(`DSL not found at ${DOCS_DSL_PATH}`);
    }
    if (!fs.existsSync(config.rawContentPath)) {
        throw new Error(`Input file not found at ${config.rawContentPath}`);
    }

    const dsl = fs.readFileSync(DOCS_DSL_PATH, 'utf-8');
    const rawContent = fs.readFileSync(config.rawContentPath, 'utf-8');

    return `You are an expert technical writer for Fiskl. Your goal is to transform the provided raw text into a high-quality Docusaurus .md file.

${dsl}

###############RAW_INPUT_DATA##################>
TITLE: ${config.title}
CATEGORY: ${config.category}
LOCALE: ${config.targetLocale}

CONTENT:
${rawContent}
<###############RAW_INPUT_DATA##################

###############REQUEST#########################>
1. Create a complete Docusaurus Markdown file with frontmatter.
2. Generate an SEO description and keywords based on the content.
3. Use a clear H2/H3 hierarchy as per DSL patterns.
4. Bold all UI elements (buttons, menus).
5. If the content describes a process, use a numbered list.
6. If images are mentioned, ensure they have descriptive alt text that explains what the image shows (not just a label).
7. Translate the final output into ${config.targetLocale === 'en' ? 'English' : config.targetLocale}.
8. Return ONLY the markdown code block.
<###############REQUEST#########################>
`;
}

function parseArgs(): DocPromptConfig {
    const args = process.argv.slice(2);
    const config: DocPromptConfig = {
        title: 'New Document',
        category: 'General',
        rawContentPath: '',
        targetLocale: 'en'
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg.includes('=')) {
            const [key, value] = arg.split('=');
            const cleanKey = key.replace('--', '');

            switch (cleanKey) {
                case 'title':
                    config.title = value;
                    break;
                case 'category':
                    config.category = value;
                    break;
                case 'file':
                    config.rawContentPath = value;
                    break;
                case 'locale':
                    config.targetLocale = value;
                    break;
            }
        } else if (arg.startsWith('--')) {
            const key = arg.replace('--', '');
            const value = args[i + 1];

            switch (key) {
                case 'title':
                    config.title = value;
                    i++;
                    break;
                case 'category':
                    config.category = value;
                    i++;
                    break;
                case 'file':
                    config.rawContentPath = value;
                    i++;
                    break;
                case 'locale':
                    config.targetLocale = value;
                    i++;
                    break;
            }
        }
    }

    return config;
}

function showHelp() {
    console.log(`
📋 FISKL Documentation Prompt Generator
========================================

Usage: npm run generate-doc -- [options]

OPTIONS:
  --title          Title of the documentation page (default: "New Document")
  --category       Category/section (default: "General")
  --file           Path to raw content file (REQUIRED)
  --locale         Target locale (default: "en")

EXAMPLES:

  # Basic usage
  npm run generate-doc -- \\
    --file="draft.txt" \\
    --title="How to Create Invoices" \\
    --category="Invoicing"

  # With locale
  npm run generate-doc -- \\
    --file="content/draft-invoice.txt" \\
    --title="Creating Invoices" \\
    --category="Invoicing" \\
    --locale="es"

  # Using = syntax
  npm run generate-doc -- \\
    --file=draft.txt \\
    --title="Invoice Guide" \\
    --category=Invoicing \\
    --locale=en

  # Pipe to clipboard (Mac)
  npm run generate-doc -- --file=draft.txt | pbcopy

  # Pipe to clipboard (Windows)
  npm run generate-doc -- --file=draft.txt | clip

💡 Tip: Create a draft file with your raw content, then run this script
        to generate a prompt for Claude to create the final documentation.
`);
}

function main() {
    if (process.argv.includes('--help') || process.argv.includes('-h')) {
        showHelp();
        return;
    }

    const config = parseArgs();

    if (!config.rawContentPath) {
        console.error("\n❌ Error: Missing required argument --file\n");
        console.error("Usage: npm run generate-doc -- --file=path/to/draft.txt\n");
        console.error("Run with --help for more examples\n");
        process.exit(1);
    }

    try {
        const prompt = generateDocPrompt(config);
        console.log(prompt);
        console.log('\n\n📋 Prompt generated! Copy the above and paste into Claude.');
        console.log('💡 Tip: Pipe to pbcopy (Mac) or clip (Windows) to copy automatically');
    } catch (error: any) {
        console.error(`\n❌ Error: ${error.message}\n`);
        process.exit(1);
    }
}

main();