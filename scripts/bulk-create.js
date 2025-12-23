const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const structurePath = path.join(__dirname, 'structure.json');
const structure = JSON.parse(fs.readFileSync(structurePath, 'utf8'));

// Define category metadata for RAG optimization
const categoryMetadata = {
    "getting-started": { label: "Getting Started", position: 1, description: "Essential guides to help you set up your Fiskl account and master the basics." },
    "invoicing": { label: "Invoicing & Quotes", position: 2, description: "Learn how to create professional invoices, manage recurring billing, and send quotes." },
    "accounting": { label: "Accounting", position: 3, description: "Comprehensive guides on double-entry bookkeeping, journal entries, and reconciliation." },
    "banking": { label: "Banking", position: 4, description: "Connect bank accounts and manage payment gateways like Stripe and PayPal." },
    "reporting": { label: "Financial Reports", position: 5, description: "Analyze business health with real-time reports including Profit & Loss and Tax summaries." },
    "line-items": { label: "Products & Expenses", position: 6, description: "Manage inventory, track business expenses, mileage, and billable time." },
    "settings": { label: "Settings & Billing", position: 7, description: "Configure your company profile, user permissions, and Fiskl subscription." },
    "glossary": { label: "Glossary", position: 8, description: "Clear definitions of accounting, banking, and technical terms used in Fiskl." },
    "faqs": { label: "FAQs", position: 9, description: "Frequently asked questions about accounting, invoicing, and integrations." }
};

console.log(`🚀 Starting bulk creation...`);

structure.forEach((file) => {
    // 1. Ensure the directory exists and has a _category_.json
    const dirName = path.dirname(file);
    const fullDirPah = path.join(__dirname, '../docs', dirName);
    const categoryFilePath = path.join(fullDirPah, '_category_.json');

    if (dirName !== '.' && !fs.existsSync(categoryFilePath)) {
        if (!fs.existsSync(fullDirPah)) {
            fs.mkdirSync(fullDirPah, { recursive: true });
        }

        const meta = categoryMetadata[dirName] || { label: dirName, position: 99, description: `Guides for ${dirName}` };

        const categoryContent = {
            label: meta.label,
            position: meta.position,
            link: {
                type: "generated-index",
                description: meta.description
            }
        };

        fs.writeFileSync(categoryFilePath, JSON.stringify(categoryContent, null, 2));
        console.log(`📂 Created category metadata: ${dirName}/_category_.json`);
    }

    // 2. Call the existing translation script for the markdown file
    try {
        execSync(`npm run create-page ${file}`, { stdio: 'inherit' });
    } catch (err) {
        console.error(`❌ Error creating ${file}:`, err.message);
    }
});

console.log('\n✅ Structure Ready. Markdown files and category metadata generated.');