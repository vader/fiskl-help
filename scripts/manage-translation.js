// scripts/manage-translation.js
// Manages English docs and their translations (French and Spanish)
// Supports: sync/create, move/rename, and delete

const fs = require('fs');
const path = require('path');

// Configuration
const DOCS_DIR = './docs';
const I18N_BASE = './i18n';
const LOCALES = ['fr', 'es', 'de'];
const PLUGIN_PATH = 'docusaurus-plugin-content-docs/current';

/**
 * Get the full path for a translated file
 */
function getTranslatedPath(locale, relativePath) {
    return path.join(I18N_BASE, locale, PLUGIN_PATH, relativePath);
}

/**
 * Ensure directory exists
 */
function ensureDirectoryExists(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
}

/**
 * Sync logic (Original logic)
 */
function syncFile(relativePath) {
    const sourcePath = path.join(DOCS_DIR, relativePath);
    if (!fs.existsSync(sourcePath)) {
        console.log(`\n📝 Source file not found. Creating template...`);
        const fileName = path.basename(relativePath, '.md');
        const titleCase = fileName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const template = `---\ntitle: "${titleCase}"\nsidebar_position: 1\n---\n\n# ${titleCase}\n`;
        ensureDirectoryExists(sourcePath);
        fs.writeFileSync(sourcePath, template);
    }

    LOCALES.forEach(locale => {
        const destPath = getTranslatedPath(locale, relativePath);
        ensureDirectoryExists(destPath);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`   ✅ Synced ${locale}: ${destPath}`);
    });
}

/**
 * Move/Rename logic
 */
function moveFile(oldRelPath, newRelPath) {
    console.log(`\n🚚 Moving file from ${oldRelPath} to ${newRelPath}...`);

    // 1. Move the source (English) file
    const oldSource = path.join(DOCS_DIR, oldRelPath);
    const newSource = path.join(DOCS_DIR, newRelPath);

    if (fs.existsSync(oldSource)) {
        ensureDirectoryExists(newSource);
        fs.renameSync(oldSource, newSource);
        console.log(`   ✅ English: Moved to ${newSource}`);
    } else {
        console.warn(`   ⚠️ Warning: Source ${oldSource} not found. Skipping English.`);
    }

    // 2. Move translation files
    LOCALES.forEach(locale => {
        const oldDest = getTranslatedPath(locale, oldRelPath);
        const newDest = getTranslatedPath(locale, newRelPath);

        if (fs.existsSync(oldDest)) {
            ensureDirectoryExists(newDest);
            fs.renameSync(oldDest, newDest);
            console.log(`   ✅ ${locale}: Moved to ${newDest}`);
        }
    });
}

/**
 * Delete logic
 */
function deleteFile(relativePath) {
    console.log(`\n🗑️ Deleting file: ${relativePath}`);

    // 1. Delete source
    const sourcePath = path.join(DOCS_DIR, relativePath);
    if (fs.existsSync(sourcePath)) {
        fs.unlinkSync(sourcePath);
        console.log(`   ✅ English: Deleted`);
    }

    // 2. Delete translations
    LOCALES.forEach(locale => {
        const destPath = getTranslatedPath(locale, relativePath);
        if (fs.existsSync(destPath)) {
            fs.unlinkSync(destPath);
            console.log(`   ✅ ${locale}: Deleted`);
        }
    });
}

function showHelp() {
    console.log(`
📋 Translation Management CLI
=============================
Usage:
  npm run create-page <path>             (Sync/Create)
  npm run move-page <old-path> <new-path> (Move/Rename)
  npm run delete-page <path>             (Delete)
    `);
}

function main() {
    const args = process.argv.slice(2);
    const command = args[0]; // The first arg is now the command (from package.json)
    const param1 = args[1] ? args[1].replace(/^docs\//, '') : null;
    const param2 = args[2] ? args[2].replace(/^docs\//, '') : null;

    switch (command) {
        case 'sync':
            if (!param1) return showHelp();
            syncFile(param1);
            break;
        case 'move':
            if (!param1 || !param2) return showHelp();
            moveFile(param1, param2);
            break;
        case 'delete':
            if (!param1) return showHelp();
            deleteFile(param1);
            break;
        default:
            showHelp();
    }
}

main();