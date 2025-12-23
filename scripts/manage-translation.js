// scripts/manage-translation.js
// Syncs English docs to translation folders (French and Spanish)
// Creates placeholder files if they don't exist

const fs = require('fs');
const path = require('path');

// Configuration
const DOCS_DIR = './docs';
const I18N_BASE = './i18n';
const LOCALES = ['fr', 'es'];
const PLUGIN_PATH = 'docusaurus-plugin-content-docs/current';

/**
 * Get the full path for a translated file
 */
function getTranslatedPath(locale, relativePath) {
    return path.join(I18N_BASE, locale, PLUGIN_PATH, relativePath);
}

/**
 * Ensure directory exists, creating it if necessary
 */
function ensureDirectoryExists(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
}

/**
 * Copy file from source to destination
 */
function copyFile(sourcePath, destPath) {
    ensureDirectoryExists(destPath);
    fs.copyFileSync(sourcePath, destPath);
}

/**
 * Create a default markdown template
 */
function createDefaultTemplate(filePath, relativePath) {
    const fileName = path.basename(relativePath, '.md');
    const titleCase = fileName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const template = `---
title: "${titleCase}"
description: "Description of ${titleCase}"
sidebar_position: 1
---

# ${titleCase}

Add your content here.

## Overview

This is a placeholder. Replace with actual content.
`;

    ensureDirectoryExists(filePath);
    fs.writeFileSync(filePath, template);
}

/**
 * Sync a single file to all translation folders
 */
function syncFile(relativePath) {
    const sourcePath = path.join(DOCS_DIR, relativePath);
    let sourceExists = fs.existsSync(sourcePath);

    // If source doesn't exist, create a template
    if (!sourceExists) {
        console.log(`\n📝 Source file not found. Creating template...`);
        createDefaultTemplate(sourcePath, relativePath);
        console.log(`   ✅ Created: ${sourcePath}`);
        sourceExists = true;
    }

    console.log(`\n📄 Syncing: ${relativePath}`);
    console.log(`   Source: ${sourcePath}`);

    // Copy to each locale
    LOCALES.forEach(locale => {
        const destPath = getTranslatedPath(locale, relativePath);

        try {
            copyFile(sourcePath, destPath);
            console.log(`   ✅ ${locale}: ${destPath}`);
        } catch (error) {
            console.error(`   ❌ ${locale}: Failed - ${error.message}`);
        }
    });

    console.log(`\n✨ Done! File synced to ${LOCALES.length} locales.`);
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Edit ${sourcePath} (add English content)`);
    console.log(`   2. Edit i18n/fr/.../current/${relativePath} (translate to French)`);
    console.log(`   3. Edit i18n/es/.../current/${relativePath} (translate to Spanish)`);
    console.log(`   4. Test: npm run dev`);
    console.log(`   5. Test: npm run dev -- --locale fr`);
    console.log(`   6. Test: npm run dev -- --locale es`);
}

/**
 * Show help message
 */
function showHelp() {
    console.log(`
📋 Translation Management Script
=================================

This script manages English markdown files and their translations.

USAGE:
  npm run create-page <relative-path>

BEHAVIOR:
  - If the English file exists → copies it to translation folders
  - If the English file doesn't exist → creates a template + copies to translations

EXAMPLES:
  npm run create-page intro.md
  npm run create-page getting-started/dashboard.md
  npm run create-page glossary/accounting-fundamentals.md
  npm run create-page invoicing/recurring-invoices.md

WHAT IT DOES:
  1. Checks if docs/<path> exists
     - If NO: Creates a template file
     - If YES: Uses existing file
  2. Creates folder structure in i18n/fr/ and i18n/es/
  3. Copies the English file to both translation folders
  4. Reminds you to add content and translations

WORKFLOW FOR NEW DOCS:
  1. Run: npm run create-page <path>
     → Creates template in docs/ + translation placeholders
  2. Edit docs/<path> (add English content)
  3. Edit i18n/fr/.../current/<path> (translate to French)
  4. Edit i18n/es/.../current/<path> (translate to Spanish)
  5. Test with: npm run dev
  6. Test with: npm run dev -- --locale fr
  7. Test with: npm run dev -- --locale es

WORKFLOW FOR EXISTING DOCS:
  1. Edit docs/<path> (update English content)
  2. Run: npm run create-page <path>
     → Copies updates to translation folders
  3. Update i18n/fr/.../current/<path> (update French)
  4. Update i18n/es/.../current/<path> (update Spanish)

FOLDER STRUCTURE:
  English:  docs/glossary/accounting-fundamentals.md
  French:   i18n/fr/docusaurus-plugin-content-docs/current/glossary/accounting-fundamentals.md
  Spanish:  i18n/es/docusaurus-plugin-content-docs/current/glossary/accounting-fundamentals.md

NOTES:
  - Template is just a starting point - customize frontmatter and content
  - Translate ALL content including frontmatter, alt text, UI elements
  - Use npm run dev -- --locale <lang> to test each locale
  - For AI-assisted docs, use: npm run generate-doc instead
`);
}

/**
 * Main function
 */
function main() {
    const args = process.argv.slice(2);

    // Show help if requested or no args
    if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
        showHelp();
        process.exit(0);
    }

    // Get the relative path
    const relativePath = args[0];

    // Remove docs/ prefix if user included it
    const cleanPath = relativePath.replace(/^docs\//, '');

    // Sync the file
    syncFile(cleanPath);
}

// Run the script
main();