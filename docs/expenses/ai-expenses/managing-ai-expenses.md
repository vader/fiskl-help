---
title: "Managing AI Expenses"
description: "Review, edit, and manage expenses processed through AI Expenses including viewing extracted data and attached documents."
keywords: ["manage AI expenses", "edit expenses", "review expenses", "expense details", "expense documents"]
sidebar_position: 3
---

This guide explains how to review and manage expenses after AI processing and helps you verify extracted data accuracy.

## Viewing AI Expenses

To view your processed expenses:

1. **Open AI Expenses**

   Select **AI Expenses** from the left sidebar.

2. **Browse expense list**

   All processed expenses appear in chronological order with key details visible.

3. **View expense details**

   Select any expense to see complete extracted data and attached documents.

## Understanding Expense Details

Each AI Expense includes:

**Extracted Information:**
- **Vendor name** - Business that issued the receipt
- **Date** - Transaction date from document
- **Amount** - Total expense amount
- **Tax/VAT** - Tax amount if shown on receipt
- **Category** - Suggested expense category
- **Line items** - Individual items if applicable (detailed invoices)
- **Payment method** - How expense was paid (if indicated)

**Document Storage:**
- **Original image** - Preserved receipt or invoice image
- **Processing metadata** - Extraction confidence scores
- **Upload timestamp** - When document was uploaded

## Reviewing Extracted Data

After processing completes, review the extracted information:

1. **Check vendor name**

   Verify the business name is correct and properly spelled.

2. **Verify amount**

   Confirm total matches the receipt (most important field).

3. **Validate date**

   Ensure transaction date is accurate.

4. **Review category**

   Check if suggested category is appropriate for this expense.

5. **Examine line items**

   For detailed invoices, verify individual line items were extracted correctly.

## Editing AI Expenses

If extracted data needs correction:

1. **Select the expense**

   Choose the expense you need to edit.

2. **Select Edit**

   Select the **Edit** button to modify expense details.

3. **Make corrections**

   Update any fields that were extracted incorrectly:
    - Vendor name
    - Amount
    - Date
    - Category
    - Line items
    - Notes

4. **Save changes**

   Select **Save** to update the expense record.

:::tip
The system learns from your corrections to improve future extractions for similar vendors and document types.
:::

## Viewing Attached Documents

To view the original receipt or invoice image:

1. **Open expense details**

   Select the expense to view its full information.

2. **View attachment**

   Select the document thumbnail to open the full-size image.

3. **Download if needed**

   Select **Download** to save the original image to your computer.

## Filtering and Searching

To find specific expenses:

**By date range:**
1. Select the date filter
2. Choose start and end dates
3. Select **Apply**

**By vendor:**
1. Use the search box
2. Enter vendor name
3. Results filter automatically

**By category:**
1. Select category filter
2. Choose one or more categories
3. View filtered results

**By amount:**
1. Select amount filter
2. Enter minimum and/or maximum amount
3. Select **Apply**

## Understanding Reconciliation Status

Each expense shows its reconciliation status:

| Status | Meaning |
|--------|---------|
| **Unreconciled** | No matching bank transaction found yet |
| **Matched** | System identified potential bank transaction match |
| **Reconciled** | Confirmed match with bank transaction |
| **Manual** | User manually linked to transaction |

## Deleting AI Expenses

To remove an expense:

1. **Select the expense**

   Choose the expense you want to delete.

2. **Select Delete**

   Select the **Delete** button.

3. **Confirm deletion**

   Select **Confirm** in the dialog box.

:::warning
Deleting an expense removes both the expense record and its attached documents permanently. This action cannot be undone.
:::

## Exporting AI Expenses

To export expense data:

1. **Apply filters** (optional)

   Filter expenses by date, vendor, or category.

2. **Select Export**

   Choose your export format:
    - CSV for spreadsheet analysis
    - PDF for printing or sharing

3. **Download file**

   Save the exported file to your computer.

## Common Management Tasks

<details>
  <summary>Correcting misread vendor names</summary>

**Steps:**
1. Select the expense
2. Select **Edit**
3. Update the **Vendor** field with correct name
4. Select **Save**

The system learns from this correction for future uploads.
</details>

<details>
  <summary>Changing expense category</summary>

**Steps:**
1. Select the expense
2. Select **Edit**
3. Choose different category from dropdown
4. Select **Save**

This updates both the expense and its accounting categorization.
</details>

<details>
  <summary>Adding notes to expense</summary>

**Steps:**
1. Select the expense
2. Select **Edit**
3. Enter notes in **Description** or **Notes** field
4. Select **Save**

Use notes to add context like meeting purpose, project code, or approval status.
</details>

## Tips for Efficient Management

**Review regularly:**
- Check processed expenses daily or weekly
- Verify accuracy while memory is fresh
- Correct errors immediately

**Use categories consistently:**
- Maintain consistent category usage
- Create subcategories for detailed tracking
- Review category suggestions and adjust as needed

**Add context:**
- Include notes for unusual expenses
- Reference related invoices or projects
- Document business purpose for tax records

**Keep documents organized:**
- Original images are preserved automatically
- Download important receipts for backup
- Use consistent vendor names for easier searching

## What Happens Next

After reviewing and managing your AI Expenses:
- Corrected data improves future AI extractions
- Expenses remain in Accounts Payable until reconciled
- System continues monitoring for matching bank transactions
- Reconciliation happens automatically when matches appear

## Related Topics

- [AI Expense Reconciliation](./reconciliation) - Automatic matching with bank transactions
- [Uploading AI Expenses](./uploading) - How to upload receipt images
- [Expense Categories](../expense-categories) - Managing expense categories
- [Traditional Expenses](../traditional-expenses/overview) - Legacy expense system (view only)