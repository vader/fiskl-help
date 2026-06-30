---
title: "Managing AI Expenses"
description: "Review, edit, and bill AI expenses in Fiskl. Verify extracted data, link expenses to accounts payable, and add billable expenses to invoices."
keywords: ["manage AI expenses", "edit expenses", "billable expenses", "accounts payable", "add expense to invoice", "expense documents", "AI expense reconciliation"]
sidebar_position: 2
tags:
   - Expenses
   - AI Expenses
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide covers how to review, edit, filter, and delete expenses after AI processing. Use it to verify extracted data, bill expenses to clients, and correct any inaccuracies before reconciliation.

## How AI Expenses Work as Accounting Records

AI expenses are full accounting expenses, not standalone records. When you scan a receipt or invoice, Fiskl extracts the details, stores the record in AI Expenses, and links it to an accounts payable (AP) transaction.

Once the record reaches accounts payable, Fiskl treats it like an accounting journal entry. The expense posts to your ledger, appears in your financial reports, and reconciles against your bank transactions. You do not maintain a separate, disconnected expense record.

If the AI cannot extract the details from a document, you can create the expense manually instead. Fiskl attaches the file you uploaded to the new record automatically, so the original receipt or invoice stays with the expense. See [Uploading Expenses to AI Expenses](/expenses/ai-expenses/uploading) for the manual creation steps.

:::info
Older expenses created in the legacy system are standalone records that are not linked to accounts payable. A migration tool to convert them into fully integrated AP expenses is coming soon. See [Migrating Legacy Expenses](#migrating-legacy-expenses) below.
:::

## Viewing AI Expenses

To view your processed expenses:

1. Select **Purchasing** in the left sidebar.
2. Select **AI Expenses**.
3. Select any expense to open the full details view.

All processed expenses appear in chronological order with key details visible in the list.

## Understanding Expense Details

Each AI expense includes extracted information from the original document.

**Extracted information:**

- **Vendor** — Business that issued the receipt or invoice
- **Date** — Transaction date from the document
- **Amount** — Total expense amount
- **Tax** — Tax amount, if shown on the document
- **Category** — Suggested expense category

**Document storage:**

- **Original file** — The uploaded receipt or invoice
- **Upload date** — When the document was uploaded

## Reviewing Extracted Data

After processing completes, open the AI expense to verify the extracted information:

1. **Check the vendor name** — Confirm the business name is correct and properly spelled.
2. **Verify the amount** — Confirm the total matches the receipt. This is the most important field.
3. **Validate the date** — Ensure the transaction date is accurate.
4. **Review the category** — Check whether the suggested category is appropriate.

## Editing AI Expenses

To correct extracted data:

1. Select **Purchasing** in the left sidebar, then select **AI Expenses**.
2. Select the expense you want to edit to open it.
3. Update any fields that need correction:
   - Name
   - Date or due date
   - Category
   - Tax
   - Vendor
   - Description
4. Select **Save**.

:::tip
Review and correct expenses promptly while the original transaction is still fresh. Accurate vendor names and categories make filtering and reporting more reliable.
:::

## Viewing Attached Documents

To view the original receipt or invoice:

1. Select **Purchasing** in the left sidebar, then select **AI Expenses**.
2. Select the expense to open its details.
3. Select the attachment to open the full-size view.

:::tip
You can also download the original document directly from the AI Expenses list without opening the expense. Select the **...** menu in the **Actions** column and select **Download**.
:::

## Billing Expenses to a Client

Because AI expenses are accounts payable transactions, you can bill them to a client and add them to an invoice. This replaces the billable expense workflow from the legacy expense system.

To mark an AP transaction as billable:

1. Select **Purchasing** in the left sidebar, then select **AI Expenses**.
2. Select the expense to open it.
3. Assign the **Client** you want to bill.
4. Mark the transaction as **Billable**.
5. Select **Save**.

Assigning a client and marking an expense billable are separate actions. You can assign a client to an AP transaction without billing it — useful when you need the expense linked to a client for reporting but do not intend to invoice it.

To add billable expenses to an invoice:

1. Open or create the invoice for that client.
2. Add the billable AP transactions you marked for the client as line items.
3. Select **Save**.

Once an AP transaction is added to an invoice, it is marked as billed and cannot be added to another invoice. For the full invoice workflow, see [Invoicing Overview](/invoicing/overview).

## Migrating Legacy Expenses

Expenses created in the legacy system are standalone records that are not linked to accounts payable. They cannot be billed to invoices in the same way as AI expenses.

A migration tool is coming soon. It will convert your legacy expenses into fully integrated AP expenses, moving them from standalone records into the accounting workflow used by AI Expenses. Using the tool will be optional.

Until the tool is available, manage legacy records in [Traditional Expenses](/expenses/traditional-expenses/overview).

## Filtering and Sorting

Use the filter and sort controls above the expense list to find specific expenses.

**By date range:**

1. Select the date filter at the top of the list.
2. Select your start and end dates.

**Sort the list:**

Select any column header — **Upload Date**, **File**, or **Status** — to sort by that column. Select again to reverse the sort order.

## Understanding Expense Status

Each expense displays its current processing status in the **Status** column.

| Status | Meaning |
|---|---|
| **Processed** | AI extraction completed and an accounts payable transaction has been created |
| **Failed** | Processing was unsuccessful and no transaction was created |

Processed expenses also display an accuracy percentage on the transaction. A **Linked** label on a transaction indicates it has been matched to a bank transaction.

For guidance on the reconciliation process, see [AI Expense Reconciliation](/expenses/ai-expenses/reconciliation).

## Deleting AI Expenses

To delete an expense, select the **...** menu in the **Actions** column and select **Delete**.

:::info
You cannot delete an AI expense that has already been matched to a bank transaction. To delete it, first go to the linked bank transaction and either delete the transaction or remove the match. Then return to AI Expenses to delete the expense.
:::

## Common Issues

<details>
<summary>Vendor name was extracted incorrectly</summary>

The AI extraction may misread handwritten or low-contrast text on receipts.

To correct this:

1. Select the expense to open it.
2. Update the **Name** field with the correct vendor name.
3. Select **Save**.

Using consistent vendor names across expenses makes filtering and reporting more accurate.

</details>

<details>
<summary>Expense has not been assigned a category</summary>

If the AI could not determine an appropriate category, the expense is marked as **Uncategorised Expenses**.

To assign a category:

1. Select the expense to open it.
2. Select the correct category from the **Category** dropdown.
3. Select **Save**.

</details>

<details>
<summary>Poor image quality caused extraction errors</summary>

Low resolution or poorly lit images can cause extraction errors on amounts, dates, or vendor names.

To correct the extracted data:

1. Select the expense to open it.
2. Update the incorrect fields manually.
3. Select **Save**.

If the same receipt consistently extracts incorrectly, try re-uploading a clearer image.

</details>

<details>
<summary>Expense shows a Failed status</summary>

A **Failed** status means the AI could not process the document and no transaction was created.

To resolve this:

1. Select the **...** menu on the failed expense.
2. Select **Delete** to remove it.
3. Re-upload a clearer or correctly formatted version of the document.

See [Uploading Expenses to AI Expenses](/expenses/ai-expenses/uploading) for supported file formats and image guidance.

</details>

<details>
<summary>Reconciliation status not updating</summary>

Matching requires a connected bank account with imported transactions. If an expense remains unlinked:

1. Confirm your bank account is connected and transactions are importing.
2. Check that the transaction date and amount in your bank data match the expense.
3. Use manual linking if an automatic match is not identified.

See [AI Expense Reconciliation](/expenses/ai-expenses/reconciliation) for full guidance.

</details>

## Related Topics

- [Uploading Expenses to AI Expenses](/expenses/ai-expenses/uploading) — How to upload receipt and invoice images, and create expenses manually
- [AI Expense Reconciliation](/expenses/ai-expenses/reconciliation) — Matching expenses with bank transactions
- [Invoicing Overview](/invoicing/overview) — Add billable expenses to client invoices
- [Expense Categories](/expenses/expense-categories) — Managing and customising expense categories
- [AI-Powered Expenses Overview](/expenses/ai-expenses/overview) — How the AI Expenses feature works
- [Traditional Expenses](/expenses/traditional-expenses/overview) — View and manage legacy expense records
