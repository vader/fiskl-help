---
title: "Importing Bank Statements"
description: "Learn how to import historical bank statements into Fiskl using CSV, QIF, and OFX formats to get complete transaction history and accurate opening balances."
keywords: ["bank import", "CSV import", "QIF import", "OFX import", "historical data", "opening balance", "transaction import", "bank statement"]
sidebar_position: 4
---

This guide explains how to import bank statements into Fiskl and helps you set up accurate historical transaction data with correct opening balances.

## Why Import Bank Statements?

Manual bank statement imports are essential for getting complete historical data into Fiskl. While automated banking connections provide daily transaction updates, most banking providers only sync the last 12 months of history.

**Use manual imports for:**
- Historical transactions beyond 12 months
- Banks not supported by automated connectors
- Initial account setup with complete transaction history
- Combining with automated feeds for full data coverage
- Credit card accounts and other liability accounts
- Migrating from another accounting system

Manual imports work seamlessly alongside automated banking connections. Import your history once, then let automated feeds handle ongoing transactions.

## Supported Import Formats

Fiskl accepts three standard banking file formats. Your bank typically offers at least one of these formats when exporting statements.

### CSV (Comma-Separated Values) - Most Versatile

CSV is the most flexible format and works with virtually any bank statement export.

**Benefits:**
- Supports various column layouts and formats
- Easy to edit in spreadsheet software before importing
- Handles different date formats automatically
- Works with custom bank export formats

**Best for:**
- Banks with unique statement formats
- Cleaning up data before import
- Combining data from multiple sources

### QIF (Quicken Interchange Format)

QIF is a standardized format used by many accounting applications.

**Benefits:**
- Structured format with consistent fields
- Automatically maps standard transaction fields
- No column mapping required

**Best for:**
- Exporting from Quicken or similar software
- Banks that offer QIF export directly
- Quick imports without customization

### OFX (Open Financial Exchange)

OFX is a banking industry standard format.

**Benefits:**
- Includes account metadata automatically
- Highly structured and reliable
- Preferred by most financial institutions

**Best for:**
- Direct bank exports
- Ensuring data accuracy
- Large transaction volumes

## Which Accounts Support Imports?

You can import bank statements into specific account types in Fiskl.

**Supported account types:**
- Cash and cash equivalent accounts (checking, savings)
- Credit card accounts
- Other liability accounts with transaction history

**Where to import:**

Go to **Banking** > Select the account > Select **Import Transactions**

:::tip
You must create the bank account in Fiskl before importing transactions. Go to **Banking** > **Add Account** to create a manual account if you haven't already.
:::

## Step-by-Step: Import Bank Statements

### Step 1: Download Your Bank Statement

Get your bank statement file from your financial institution:

1. Log in to your bank's website
2. Go to statements or transaction history
3. Select the date range you need
4. Select the export format (CSV, QIF, or OFX)
5. Download the file to your computer

**Recommended date range:**
- Start from your fiscal year beginning, or
- Import at least 12 months of history, or
- Import from when you started using the account

### Step 2: Prepare Your Opening Balance

Before importing, you need to know your opening balance. This is the account balance immediately before your first imported transaction.

**To find your opening balance:**

Look at your bank statement for the balance shown before the first transaction date you're importing.

**Example:**
- First transaction date: January 1, 2024
- Balance on December 31, 2023: $5,000
- Opening balance to record: $5,000

:::warning
Setting the correct opening balance is critical for accurate financial reports. Double-check this amount against your bank statement before proceeding.
:::

### Step 3: Record Your Opening Balance

The opening balance must be recorded as a journal entry before importing transactions.

**To record the opening balance:**

1. Go to **Accounting** > **Journal Entries**
2. Select **New Journal Entry**
3. Set the date to one day before your first transaction
4. Enter the description: "Opening Balance - [Account Name]"
5. Add two lines:
   - **Debit** your bank account for the opening balance amount
   - **Credit** your Equity account (Opening Balance Equity or similar)
6. Select **Save**

**Example journal entry:**

Date: December 31, 2023

| Account | Debit | Credit |
|---------|-------|--------|
| Business Checking Account | $5,000 | |
| Opening Balance Equity | | $5,000 |

This establishes your starting point for accurate reconciliation.

### Step 4: Import Your Transactions (CSV)

CSV imports require mapping your bank's columns to Fiskl's format.

1. Go to **Banking** > Select your account
2. Select **Import Transactions**
3. Select **CSV** as the format
4. Upload your CSV file
5. Review the column preview

**Map required columns:**

The import wizard shows your CSV columns. Match each to the corresponding Fiskl field:

**Essential columns (required):**
- **Date** - Transaction date
- **Description** - Transaction description or memo
- **Amount** - Transaction amount

**Amount column options:**

Select one of these approaches based on your CSV format:

- **Single Amount column** - Negative for outflows, positive for inflows
- **Separate columns** - One column for money in, one for money out
- **Debit/Credit columns** - Accounting-style format

**Advanced columns (optional):**
- **Reference/Check Number** - Unique transaction identifier
- **Category** - Pre-categorized transactions
- **Payee** - Transaction counterparty

**The Reference Number advantage:**

If your CSV includes a unique reference or transaction ID, map it to the Reference field. Fiskl uses this to prevent duplicate imports if you re-import the same file.

6. Select **Next** after mapping columns
7. Review the transaction preview
8. Select **Import**

Your transactions import and appear in the **Banking** tab.

### Step 5: Import Your Transactions (QIF or OFX)

QIF and OFX files have standardized formats that map automatically.

1. Go to **Banking** > Select your account
2. Select **Import Transactions**
3. Select **QIF** or **OFX** as the format
4. Upload your file
5. Review the transaction preview
6. Select **Import**

No column mapping is required. Transactions import directly.

### Step 6: Review Imported Transactions

After importing, verify your transactions loaded correctly:

1. Go to **Banking** > Select your account
2. Review the transaction list
3. Check the date range covers your import period
4. Verify the ending balance matches your bank statement

**Common issues to check:**
- Duplicate transactions (if you imported previously)
- Incorrect date formats (dates appear wrong)
- Amounts with wrong signs (debits showing as credits)
- Missing transactions from the original file

If you find issues, you can delete the imported batch and re-import after correcting the source file.

## Combining Imports with Automated Feeds

The most powerful approach combines manual imports with automated banking connections.

**Recommended workflow:**

1. **Import historical data** - Get 12+ months of transaction history via CSV import
2. **Connect automated feed** - Set up Salt Edge, Yodlee, or Wio Bank connection
3. **Let automation take over** - Future transactions sync automatically

This gives you complete history plus ongoing automation without manual work.

**Handling the overlap:**

Most automated connections sync the last 90 days when you first connect. This creates a small overlap with your historical import.

**To handle overlapping transactions:**

- Fiskl detects potential duplicates based on date, amount, and description
- Review flagged duplicates in the **Banking** tab
- Delete duplicate transactions to keep your records clean

Reference numbers from CSV imports help prevent duplicates automatically.

## Advanced CSV Mapping Tips

### Multiple Amount Columns

If your CSV has separate columns for deposits and withdrawals:

1. Map the deposit column to **Amount In**
2. Map the withdrawal column to **Amount Out**
3. Fiskl automatically handles the signs

### Date Format Issues

If dates don't parse correctly:

1. Open the CSV in a spreadsheet application
2. Reformat the date column to YYYY-MM-DD format
3. Save the file and re-import

### Cleaning Up Descriptions

If transaction descriptions are messy or unclear:

1. Open the CSV before importing
2. Edit the description column to be more readable
3. Save and import the cleaned version

This makes future categorization easier.

### Handling Different Currencies

If your statement includes transactions in multiple currencies:

1. Ensure your CSV includes a currency column
2. Map the currency column during import
3. Fiskl converts to your base currency automatically

## Troubleshooting Import Issues

### Import Fails with Format Error

**Cause:** CSV file has formatting issues or unexpected characters

**Solution:**
1. Open the file in a text editor
2. Check for special characters or extra commas
3. Ensure UTF-8 encoding
4. Remove any summary rows or totals at the bottom
5. Re-save and try importing again

### Transactions Have Wrong Dates

**Cause:** Date format not recognized correctly

**Solution:**
1. Check the date format in your CSV
2. Convert dates to YYYY-MM-DD format before importing
3. Some banks use DD/MM/YYYY vs MM/DD/YYYY - verify the format

### Amounts Are Incorrect or Negative

**Cause:** Column mapping doesn't match your bank's format

**Solution:**
1. Check how your bank represents outflows and inflows
2. Re-map the amount columns appropriately
3. Some banks use parentheses for negative amounts - ensure proper formatting

### Duplicate Transactions After Import

**Cause:** Previously imported transactions or automated feed overlap

**Solution:**
1. Go to **Banking** > Select your account
2. Filter to show duplicate dates
3. Compare amounts and descriptions
4. Delete duplicate entries manually

### Opening Balance Doesn't Match Bank Statement

**Cause:** Opening balance journal entry was incorrect or missing

**Solution:**
1. Go to **Accounting** > **Journal Entries**
2. Find the opening balance entry
3. Verify the date is before your first imported transaction
4. Verify the amount matches your bank statement
5. Edit the journal entry if needed

## Best Practices for Importing Data

### Before You Import

- [ ] Download statements covering your desired date range
- [ ] Verify file format is CSV, QIF, or OFX
- [ ] Note your opening balance from the bank statement
- [ ] Create the account in Fiskl if it doesn't exist
- [ ] Record the opening balance journal entry

### During Import

- [ ] Map all required columns carefully (CSV only)
- [ ] Map the reference number column if available
- [ ] Preview transactions before finalizing import
- [ ] Check that amounts have correct signs
- [ ] Verify date range covers expected period

### After Import

- [ ] Review transaction count matches bank statement
- [ ] Verify ending balance matches bank statement
- [ ] Check for and remove any duplicates
- [ ] Start categorizing transactions to ledger accounts
- [ ] Reconcile the account to confirm accuracy

### For Ongoing Success

- [ ] Set up automated banking connection for future transactions
- [ ] Import historical data only once per account
- [ ] Keep original bank files for reference
- [ ] Document your import date ranges for future reference
- [ ] Reconcile accounts monthly to catch any issues early

## What Happens After Importing?

Once transactions are imported, they appear in your **Banking** tab alongside any automated feed transactions.

**Next steps:**

1. **Categorize transactions** - Assign each transaction to the appropriate ledger account
2. **Match to invoices/expenses** - Link transactions to existing records when applicable
3. **Reconcile the account** - Confirm your Fiskl balance matches your bank balance
4. **Generate reports** - Your financial reports now include the imported history

:::tip
Import historical data during your initial Fiskl setup, before your busy season. This ensures your reports are accurate from day one without rushing through categorization.
:::

## Need More Help?

**Learn about automated connections:** [Connecting Your Bank](/docs/getting-started/connecting-your-bank.md)

**Understand reconciliation:** [Reconciliation Overview](/docs/accounting/reconciliation/overview.md)

**Set up your Chart of Accounts:** [Chart of Accounts](/docs/accounting/chart-of-accounts.md)

**Contact support:** [Get Support](/docs/support/overview.md)