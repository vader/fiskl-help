---
title: "Managing AI Expenses"
description: "Review, edit, filter, and delete expenses processed through AI Expenses. Verify extracted data and manage attached documents."
keywords: ["manage AI expenses", "edit expenses", "review expenses", "expense details", "expense documents", "AI expense reconciliation"]
sidebar_position: 2
tags:
   - Expenses
   - AI Expenses
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide covers how to review, edit, filter, and delete expenses after AI processing. Use it to verify extracted data and correct any inaccuracies before reconciliation.

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
| **Processed** | AI extraction completed and a transaction has been created |
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

- [Uploading Expenses to AI Expenses](/expenses/ai-expenses/uploading) — How to upload receipt and invoice images
- [AI Expense Reconciliation](/expenses/ai-expenses/reconciliation) — Matching expenses with bank transactions
- [Expense Categories](/expenses/expense-categories) — Managing and customising expense categories
- [AI-Powered Expenses Overview](/expenses/ai-expenses/overview) — How the AI Expenses feature works
