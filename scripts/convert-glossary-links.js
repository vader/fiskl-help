// scripts/convert-glossary-links.js
// Converts old glossary links to new consolidated format

const fs = require('fs');
const path = require('path');

// Term to file mapping
const TERM_MAPPING = {
    // accounting-fundamentals.md
    'accountant': 'accounting-fundamentals.md',
    'accounting-cycle': 'accounting-fundamentals.md',
    'accounting-period': 'accounting-fundamentals.md',
    'accounting': 'accounting-fundamentals.md',
    'accrual-accounting': 'accounting-fundamentals.md',
    'accrual-method-accounting': 'accounting-fundamentals.md',
    'accruals': 'accounting-fundamentals.md',
    'accrued-expenses': 'accounting-fundamentals.md',
    'audit': 'accounting-fundamentals.md',
    'bookkeeping': 'accounting-fundamentals.md',
    'cash-accounting': 'accounting-fundamentals.md',
    'cash-method-accounting': 'accounting-fundamentals.md',
    'cash-vs-accrual': 'accounting-fundamentals.md',
    'chart-of-accounts': 'accounting-fundamentals.md',
    'credit-entries': 'accounting-fundamentals.md',
    'credit': 'accounting-fundamentals.md',
    'debit-entries': 'accounting-fundamentals.md',
    'debit': 'accounting-fundamentals.md',
    'double-entry-bookkeeping': 'accounting-fundamentals.md',
    'eofy': 'accounting-fundamentals.md',
    'financial-year': 'accounting-fundamentals.md',
    'fiscal-year': 'accounting-fundamentals.md',
    'general-ledger': 'accounting-fundamentals.md',
    'journal': 'accounting-fundamentals.md',
    'multi-journal': 'accounting-fundamentals.md',
    'opening-balance': 'accounting-fundamentals.md',
    'reconciling': 'accounting-fundamentals.md',
    'trial-balance': 'accounting-fundamentals.md',

    // financial-statements.md
    'balance-sheet': 'financial-statements.md',
    'cash-flow-statement': 'financial-statements.md',
    'cash-flow': 'financial-statements.md',
    'cost-of-goods-sold': 'financial-statements.md',
    'dividends': 'financial-statements.md',
    'expenses': 'financial-statements.md',
    'financial-statements': 'financial-statements.md',
    'forecasting': 'financial-statements.md',
    'gross-profit-margin': 'financial-statements.md',
    'gross-profit': 'financial-statements.md',
    'income-statement': 'financial-statements.md',
    'income': 'financial-statements.md',
    'margin': 'financial-statements.md',
    'net-income': 'financial-statements.md',
    'net-profit': 'financial-statements.md',
    'net': 'financial-statements.md',
    'operational-expense': 'financial-statements.md',
    'overheads': 'financial-statements.md',
    'profit-and-loss-statement': 'financial-statements.md',
    'profit': 'financial-statements.md',
    'retained-earnings': 'financial-statements.md',
    'revenue': 'financial-statements.md',
    'roi': 'financial-statements.md',
    'statement-of-accounts': 'financial-statements.md',
    'transaction-by-account-report': 'financial-statements.md',

    // assets-and-liabilities.md
    'accounts-payable': 'assets-and-liabilities.md',
    'accounts-receivable': 'assets-and-liabilities.md',
    'amortization': 'assets-and-liabilities.md',
    'assets': 'assets-and-liabilities.md',
    'bad-debt-expense': 'assets-and-liabilities.md',
    'bad-debts': 'assets-and-liabilities.md',
    'capital-cost': 'assets-and-liabilities.md',
    'capital': 'assets-and-liabilities.md',
    'cash-equivalents': 'assets-and-liabilities.md',
    'cash-on-hand': 'assets-and-liabilities.md',
    'cash': 'assets-and-liabilities.md',
    'current-assets': 'assets-and-liabilities.md',
    'current-liabilities': 'assets-and-liabilities.md',
    'debt': 'assets-and-liabilities.md',
    'depreciation': 'assets-and-liabilities.md',
    'equity': 'assets-and-liabilities.md',
    'fixed-assets': 'assets-and-liabilities.md',
    'goodwill': 'assets-and-liabilities.md',
    'insolvency': 'assets-and-liabilities.md',
    'intangible-assets': 'assets-and-liabilities.md',
    'inventory': 'assets-and-liabilities.md',
    'liabilities': 'assets-and-liabilities.md',
    'liability-account': 'assets-and-liabilities.md',
    'liquidate': 'assets-and-liabilities.md',
    'long-term-liabilities': 'assets-and-liabilities.md',
    'non-current-assets': 'assets-and-liabilities.md',
    'non-current-liabilities': 'assets-and-liabilities.md',
    'non-operating-assets': 'assets-and-liabilities.md',
    'operating-assets': 'assets-and-liabilities.md',
    'owners-equity': 'assets-and-liabilities.md',
    'petty-cash': 'assets-and-liabilities.md',
    'prepaid-expenses': 'assets-and-liabilities.md',
    'tangible-assets': 'assets-and-liabilities.md',
    'working-capital': 'assets-and-liabilities.md',
    'write-off': 'assets-and-liabilities.md',

    // accounts-and-transactions.md
    'base-currency': 'accounts-and-transactions.md',
    'client': 'accounts-and-transactions.md',
    'data-validation': 'accounts-and-transactions.md',
    'income-tax-business': 'accounts-and-transactions.md',
    'invoice': 'accounts-and-transactions.md',
    'line-item': 'accounts-and-transactions.md',
    'multi-currency': 'accounts-and-transactions.md',
    'receipt': 'accounts-and-transactions.md',
    'vendor': 'accounts-and-transactions.md',

    // cash-and-banking.md
    'bank-connection': 'cash-and-banking.md',
    'bank-transfer': 'cash-and-banking.md',
    'bankfeed': 'cash-and-banking.md',
    'csv-file': 'cash-and-banking.md',
    'data-export': 'cash-and-banking.md',
    'data-import': 'cash-and-banking.md',
    'data-privacy': 'cash-and-banking.md',
    'data-restore': 'cash-and-banking.md',
    'data-security': 'cash-and-banking.md',
    'google-sheets': 'cash-and-banking.md',
    'header-row': 'cash-and-banking.md',
    'ofx': 'cash-and-banking.md',
    'third-party-provider': 'cash-and-banking.md',
    'xls-xlsx-file': 'cash-and-banking.md'
};

// Regex patterns for different old link formats
const OLD_LINK_PATTERNS = [
    /\[([^\]]+)\]\(\.\.\/\.\.\/\.\.\/Glossary\/terms\/([a-z-]+)\)/g,
    /\[([^\]]+)\]\(\.\.\/\.\.\/Glossary\/terms\/([a-z-]+)\)/g,
    /\[([^\]]+)\]\(\.\.\/Glossary\/terms\/([a-z-]+)\)/g
];

function convertGlossaryLinks(content, filePath) {
    let modified = content;
    let conversions = [];

    // Try each pattern
    OLD_LINK_PATTERNS.forEach(pattern => {
        modified = modified.replace(pattern, (match, linkText, termSlug) => {
            const fileName = TERM_MAPPING[termSlug];

            if (!fileName) {
                console.warn(`⚠️  Unknown term "${termSlug}" in ${filePath}`);
                conversions.push({
                    old: match,
                    new: match,
                    status: 'unknown',
                    termSlug
                });
                return match; // Keep original if unknown
            }

            // Default to single parent (..) as 90% of files are one level deep
            const newLink = `[${linkText}](../glossary/${fileName}#${termSlug})`;

            conversions.push({
                old: match,
                new: newLink,
                status: 'converted',
                termSlug,
                fileName
            });

            return newLink;
        });
    });

    return { modified, conversions };
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const { modified, conversions } = convertGlossaryLinks(content, filePath);

        if (conversions.length > 0) {
            fs.writeFileSync(filePath, modified, 'utf-8');

            console.log(`\n✅ ${path.relative(process.cwd(), filePath)}`);
            conversions.forEach(conv => {
                if (conv.status === 'converted') {
                    console.log(`   ✓ ${conv.termSlug} → ${conv.fileName}`);
                } else {
                    console.log(`   ⚠ ${conv.termSlug} (unknown term)`);
                }
            });

            return conversions;
        }

        return [];
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return [];
    }
}

function walkDirectory(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Skip node_modules, .git, build directories
            if (!['node_modules', '.git', 'build', '.docusaurus'].includes(file)) {
                walkDirectory(filePath, fileList);
            }
        } else if (file.endsWith('.md')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

function main() {
    const args = process.argv.slice(2);

    if (args.includes('--help') || args.includes('-h')) {
        console.log(`
🔄 Glossary Link Converter
===========================

Converts old glossary links to new consolidated format.

Usage:
  node scripts/convert-glossary-links.js [directory]

Examples:
  # Convert all files in docs/
  node scripts/convert-glossary-links.js docs

  # Convert specific file
  node scripts/convert-glossary-links.js docs/invoicing/create.md

  # Convert English and all translations
  node scripts/convert-glossary-links.js docs
  node scripts/convert-glossary-links.js i18n/fr/docusaurus-plugin-content-docs/current
  node scripts/convert-glossary-links.js i18n/es/docusaurus-plugin-content-docs/current

Conversion:
  [term](../../../Glossary/terms/term-slug)
  → [term](../glossary/FILENAME.md#term-slug)

Note: Uses ../ (single parent) by default as 90% of files are one level deep.
You may need to manually adjust some paths for deeply nested files.
`);
        return;
    }

    const target = args[0] || 'docs';

    if (!fs.existsSync(target)) {
        console.error(`❌ Path not found: ${target}`);
        process.exit(1);
    }

    const stat = fs.statSync(target);
    let files = [];

    if (stat.isDirectory()) {
        console.log(`🔍 Scanning directory: ${target}`);
        files = walkDirectory(target);
    } else {
        files = [target];
    }

    console.log(`📄 Found ${files.length} markdown files\n`);

    let totalConversions = 0;
    let unknownTerms = new Set();

    files.forEach(file => {
        const conversions = processFile(file);
        totalConversions += conversions.filter(c => c.status === 'converted').length;
        conversions.filter(c => c.status === 'unknown').forEach(c => unknownTerms.add(c.termSlug));
    });

    console.log(`\n${'='.repeat(50)}`);
    console.log(`✅ Conversion complete!`);
    console.log(`   Total conversions: ${totalConversions}`);

    if (unknownTerms.size > 0) {
        console.log(`\n⚠️  Unknown terms found (${unknownTerms.size}):`);
        unknownTerms.forEach(term => console.log(`   - ${term}`));
        console.log(`\n💡 Add these terms to TERM_MAPPING in the script or handle manually.`);
    }

    console.log(`\n💡 Next steps:`);
    console.log(`   1. Test your site: npm run dev`);
    console.log(`   2. Check for broken links`);
    console.log(`   3. Manually review files with deeply nested paths`);
    console.log(`   4. Run for translations if needed`);
}

main();