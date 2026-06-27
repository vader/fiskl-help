---
title: Accounting FAQs
description: "Find quick answers to common accounting questions in Fiskl covering chart of accounts, transactions, reconciliation, and reporting."
keywords: ["accounting FAQ", "chart of accounts", "transaction reconciliation", "financial reporting", "double-entry accounting", "multi-currency", "Fiskl support"]
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - FAQ
  - Accounting
---

This guide answers frequently asked questions about Fiskl's accounting features and helps you resolve common issues with transactions, reconciliation, and financial reporting. Find quick solutions to chart of accounts management, multi-currency handling, and report generation.

**Jump to:**
- [General Accounting Questions](#general-accounting-questions)
- [Transactions and Payments](#transactions-and-payments)
- [Reporting](#reporting)

---

## General Accounting Questions

### Is Fiskl a double-entry accounting system?

Yes, Fiskl is a double-entry, multi-currency accounting platform. This ensures accurate and balanced financial records for your business, with automatic currency conversion and real-time exchange rate handling.

For more information, see our [Accounting Core Features](/accounting/overview).

### Can I customize my Chart of Accounts in Fiskl?

Yes, you can customize your Chart of Accounts to fit your business needs. Here's how:

1. **Open your Chart of Accounts**

   Go to **Accounting** > **Chart of Accounts**.

2. **Add a new category**

   Select the plus (+) button next to the parent account where you want to add a category.

3. **Enter the category details**

   Complete the account name, type, and other required fields.

4. **Save your changes**

   Select **Save** to add the category to your Chart of Accounts.

For more details, see [Managing your Chart of Accounts](/accounting/chart-of-accounts).

### How do I delete an account from my Chart of Accounts?

To remove an account:

1. **Open your Chart of Accounts**

   Go to **Accounting** > **Chart of Accounts**.

2. **Archive the account**

   Select **Archive** next to the account you want to remove.

:::note
**What happens when you archive:**
- If the account has no transactions, it is deleted permanently
- Accounts with transactions are moved to the Archived folder
- Archived accounts remain active in accounting and their transactions count toward your company accounts
- Archived accounts don't appear in the account selector when creating new transactions
- You cannot delete default system accounts (like those under Operating Income), but you can rename them
  :::

---

## Transactions and Payments

### What's the best way to handle an invoice overpayment in Fiskl?

When a client pays more than the invoice amount, you need to track the overpayment for future use. Here's how:

**Before you begin:**
Create a liability account called "Client Overpayments" in your Chart of Accounts under **Liabilities** > **Current Liabilities**.

**Steps to record the overpayment:**

1. **Process the bank transaction**

   Go to your bank account in **Banking** and locate the overpayment transaction.

2. **Match the invoice amount**

   On the first line, match the correct amount to the original invoice.

3. **Record the excess amount**

   Select **Add Line** and create a second line for the excess amount. Categorize it to your **Client Overpayments** liability account.

**Steps to apply the overpayment to a future invoice:**

1. **Create the new invoice**

   Generate the next invoice for this client as usual.

2. **Process the payment transaction**

   When the client pays, locate the transaction in your bank account.

3. **Match the payment amount**

   On the first line, match the payment to the invoice amount.

4. **Apply the overpayment credit**

   Select **Add Line** and create a second line with a negative amount (the previous overpayment). Categorize it to your **Client Overpayments** liability account.

**What happens next:**
The Client Overpayments account maintains a running balance until the overpayment is fully applied. When completed, the account balance returns to zero.

### How do I record bad debts in Fiskl?

When an invoice becomes uncollectible, you need to write it off as a bad debt expense. Here's the process:

1. **Mark the invoice as paid**

   Open the invoice and select **Mark as Paid**. Choose **Cash on Hand** as the payment account.

2. **Record the bad debt expense**

   Go to **Assets** > **Cash & Cash Equivalence** > **Cash on Hand**.

3. **Create an OUT transaction**

   Select **Add Transaction** and choose **OUT** as the transaction type.

4. **Categorize as bad debt**

    - **Amount**: Enter the invoice amount
    - **Category**: Select your **Bad Debts** expense account
    - **Description**: Note the invoice number and reason

5. **Save the transaction**

   Select **Save** to complete the entry.

**What happens next:**

- Your Cash on Hand account balance returns to zero
- Bad Debts appear as an expense in your Profit and Loss statement
- The invoice status changes from open to paid, closing the Accounts Receivable
- Your Accounts Receivable balance decreases by the invoice amount

### Can I predefine categories for vendors or clients?

Currently, Fiskl doesn't support assigning default categories directly to Clients or Vendors. However, you can:

- Customize your Chart of Accounts with specific categories
- Assign custom categories to Products, Services, Time entries, and Mileage
- Use Fiskl's AI suggestions, which learn from your categorization patterns

We're continually improving Fiskl, so stay tuned for future updates!

### Where can I set bank rules for transaction feeds?

Bank transaction rules are currently automatic and cannot be manually configured. Fiskl's AI learns from your categorization patterns and automatically suggests matches for similar transactions.

This feature is on our roadmap for future enhancement.

### Can bank transactions be auto-reconciled without approval?

Fiskl's AI streamlines bank reconciliation by automatically suggesting relevant categories based on your history. You can quickly review and confirm transactions in batches, making the process faster and more efficient.

For security and accuracy, all transactions require your review before final reconciliation.

### Why aren't all my expenses reflected in my accounting reports?

Expenses in Fiskl can exist in two states:

**Standalone Expenses**: These are expenses you've recorded in the **Expenses** section but haven't yet reconciled with your accounting. They don't appear in your dashboard or reports until reconciled.

**Reconciled Expenses**: These are expenses that have been matched with transactions in your accounting system. They appear in your dashboard and reports automatically.

**To ensure your expenses are included in your accounting:**

- If you recorded a standalone expense, reconcile it with a transaction in your bank, credit card, or cash account
- If you add expenses directly to your ledger accounts (via Money Accounts), they automatically appear in your accounting

For a detailed explanation, see our [How to Record Expenses tutorial](/accounting/journal-entries/overview).

### Why don't I see my expenses in my P&L report or dashboard?

Expenses added via the **Expenses** section don't automatically appear in your [Profit & Loss](/reporting/profit-and-loss) report or dashboard until they are reconciled with an accounting transaction.

The **Expenses** section is designed to:
- Capture expense details for later reconciliation
- Track expenses that will be billed to clients
- Prepare expenses for reimbursement

**To make expenses appear in reports:**

1. **Reconcile the expense**

   Go to **Banking** and match the expense to the corresponding bank or credit card transaction.

2. **Verify it appears**

   Check your **Dashboard** or **Profit & Loss** report to confirm the expense now shows.

### Why can't I add an expense directly to an Expense Ledger Account?

In Fiskl, you can only record expense transactions through [Money Accounts](/accounting/journal-entries/guides/manual-transactions). This ensures accurate tracking of both the expense and the account it was paid from.

**How it works:**

1. **Record the transaction in the appropriate Money Account**

    - For bank payments: Go to **Assets** > **Cash & Cash Equivalence** > **[Your Bank Name]**
    - For credit card payments: Go to **Liabilities** > **Credit Card** > **[Your Credit Card Name]**

2. **Categorize the transaction**

   Assign the correct expense category (e.g., "Travel Expense") to the transaction within the Money Account.

**Example:**

If you paid $500 for an airline ticket using your Chase bank account:

1. Go to **Assets** > **Cash & Cash Equivalence** > **Chase Bank**
2. Find the $500 transaction
3. Select **Categorize** and choose **Travel Expense**
4. Select **Save**

This method ensures your accounting always shows where the money came from and where it went.

### Can I bulk categorize my accounting transactions?

Currently, bulk categorization is temporarily disabled while we enhance the system to ensure more accurate categorization for complex accounting rules.

**Alternative method while we improve this feature:**

1. **Categorize a single transaction**

   Select a transaction and assign it to the appropriate category.

2. **Set vendors and clients**

   Add the vendor or client information to establish the pattern.

3. **Review AI suggestions**

   As you scroll through your current transactions, Fiskl suggests similar matches based on the pattern you created.

4. **Accept suggestions in bulk**

   Review the suggested matches and accept them in batches.

We're prioritizing accuracy and plan to reintroduce bulk categorization gradually, starting with simpler matches. We appreciate your patience as we work to provide a more reliable and efficient categorization process.

### How do I make my expenses recurring?

Recurring expenses aren't available yet, but they're on our roadmap. For now, you need to enter expenses as they occur.

For more information about managing regular expenses, see [Accounts Payable Transactions](/accounting/journal-entries/guides/accounts-payable-transactions).

### How do I un-reconcile a transaction?

To un-reconcile a transaction:

1. **Open the account**

   Go to the Money Account (e.g., your bank account) where the transaction is reconciled.

2. **Open the transaction**

   Select the transaction to view its details.

3. **Clear the matched line**

   Select **Clear line** on the reconciled line near the bottom of the transaction.

4. **Save the changes**

   Select **Save** to un-reconcile the transaction.

**What happens next:**
The transaction remains in the account but returns to an unreconciled state, allowing you to re-categorize or match it differently.

### How do I record a purchase as a fixed asset in Fiskl?

When you purchase equipment or other long-term assets, you have two options:

**Option 1: Use Property, Plant & Equipment (Recommended)**

Record the transaction under **Assets** > **Property, Plant & Equipment** > **Computer Equipment** (or the appropriate equipment category).

This option is best for assets subject to depreciation.

**Option 2: Create a custom Fixed Asset account**

1. Create a new account under **Assets** > **Other Current Assets**
2. Name it "Fixed Assets" or similar
3. Record your purchase transaction there

:::tip
Option 1 is recommended for most fixed assets because it keeps depreciation tracking organized and follows standard accounting practices for assets with useful lives beyond one year.
:::

### How do I record a supplier credit note for an expense refund?

When a supplier issues you a credit note for a returned item or billing correction, you need to reverse the original expense entry. Here's how to record this in Fiskl.

**Example scenario:** You originally paid $500 for office supplies. The supplier issued a $100 credit note for damaged items.

**Steps:**

1. **Open the appropriate Money Account**

   Go to **Assets** > **Cash & Cash Equivalence** > **[Your Bank Name]** (or the account where the refund will appear).

2. **Create an IN transaction**

   Select **Add Transaction** and choose **IN** as the transaction type.

3. **Enter the refund details**

    - **Amount**: Enter the credit note amount (e.g., $100)
    - **Vendor**: Select the supplier who issued the credit note
    - **Category**: Select the same expense account as the original transaction (e.g., **Office Supplies**)
    - **Description**: Note this is a credit note (e.g., "Credit note #CN-001 for damaged supplies")

4. **Save the transaction**

   Select **Save** to record the entry.

**What happens next:**

- The refund reduces your expense in the Profit and Loss statement
- If the supplier owes you money, it reduces your Accounts Payable balance
- The transaction appears in your bank reconciliation when the refund is deposited

:::tip
If you haven't received the refund yet but want to track the credit note, you can create the entry and note it as "pending" in the description. Update it when the refund is received.
:::

---

## Reporting

### Can I send statements to my clients showing outstanding invoices and payments?

Yes, you can generate a [Statement of Accounts](/reporting/statement-of-accounts) report. This report provides a comprehensive view of your client's account, including:

- Outstanding invoices
- Payments received
- Current account balance
- Transaction history

**To generate this report:**

1. **Open Reports**

   Go to **Reports** > **Statement of Accounts**.

2. **Select the client**

   Choose the client from the dropdown list.

3. **Choose the date range**

   Select the start and end dates for the statement period.

4. **Generate the report**

   Select **Generate** to create the statement.

5. **Send to your client**

   Select **Send** to email the statement directly, or **Download** to save it as a PDF.

### How can I create an expense report that compares two fiscal years?

You can view and compare expenses across two fiscal years using the Profit & Loss report.

**Steps:**

1. **Open the Profit & Loss report**

   Go to **Reports** > **Profit & Loss**.

2. **Select comparison mode**

   Choose the comparison option and select your two fiscal years.

3. **Generate the report**

   Select **Generate** to view the year-over-year comparison.

The report displays both your income and expenses with a side-by-side comparison of the two fiscal years, making it easy to identify trends and changes.

### How can I export my Chart of Accounts?

Exporting the complete Chart of Accounts is on our roadmap. Currently, you can export individual accounts.

**To export an individual account:**

1. **Open the account**

   Go to **Accounting** > **Chart of Accounts** and select the account.

2. **Export transactions**

   Select **Export** to download the account's transaction history.

### Why does my USD bank account show a negative EUR balance?

This is normal behavior in multi-currency accounting. You don't need to fix anything. Here's what's happening and how to verify it's correct.

**Why this occurs:**

When you have a bank account in a foreign currency (like USD), Fiskl converts the balance to your base currency (EUR) using the current exchange rate. As exchange rates fluctuate daily, the converted EUR amount changes even though your actual USD balance stays the same.

**Example:** You have $10,000 USD in your bank account.
- On Jan 1: Exchange rate 1.10 = €9,091 EUR
- On Jan 15: Exchange rate 1.05 = €9,524 EUR (€433 gain)

The €433 difference appears as an "Unrealized Exchange Gain" on your financial statements.

**How to verify this is correct:**

1. **Check your Profit and Loss**

   Go to **Reports** > **Profit and Loss** and look for the **Unrealized Exchange Gain or Loss** line item near the bottom.

2. **Verify the offsetting amount**

   The negative balance in your USD account's EUR column should match (or nearly match) the Unrealized Exchange Gain/Loss amount.

3. **Review your Balance Sheet**

   Go to **Reports** > **Balance Sheet**. Your total assets should balance correctly when the Unrealized Exchange account is included.

**What this means:**

- **No action needed**: Fiskl handles this automatically using standard accounting practices
- **Not actual money**: These are "paper" gains or losses until you actually convert the currency
- **Automatic balancing**: When you eventually convert USD to EUR, the unrealized gain/loss becomes realized and the balance corrects itself

:::info
Unrealized exchange gains and losses are a standard part of multi-currency accounting. They represent the theoretical gain or loss if you were to convert all foreign currency to your base currency today. This follows International Financial Reporting Standards (IFRS) and Generally Accepted Accounting Principles (GAAP).
:::

---

## Still Have Questions?

If you couldn't find the answer you're looking for, please don't hesitate to [contact our support team](mailto:support@fiskl.com). We're here to help!

---

[//]: # (## Related Resources)

[//]: # ()
[//]: # (- [Invoicing FAQs]&#40;#placeholder-link&#41;)

[//]: # (- [Banking FAQs]&#40;#placeholder-link&#41;)

[//]: # (- [Multi-currency FAQs]&#40;#placeholder-link&#41;)

[//]: # (- [Getting Started Guide]&#40;#placeholder-link&#41;)