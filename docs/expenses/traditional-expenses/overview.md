---
title: "Traditional Expenses (Legacy)"
description: "The legacy expense list is locked for new entries. Learn how to bulk-migrate your traditional expenses to Accounts Payable in Fiskl."
keywords: ["traditional expenses", "legacy expenses", "migrate expenses", "convert to accounts payable", "bulk migration", "old expense system"]
sidebar_position: 1
tags:
  - Expenses
  - Legacy
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains the Traditional Expenses list — Fiskl's legacy expense system — and shows you how to migrate your existing records to Accounts Payable. The list is locked: you cannot create new expenses here.

:::info
Traditional Expenses is only visible to accounts that created expenses in the legacy system. New Fiskl accounts do not see this list. For all new expenses, see [How to Add Expenses](/expenses/adding-expenses).
:::

## What Changed

Traditional expenses lived outside your accounting. A legacy expense did not count towards your reports until you matched it with an accounting transaction or added it to an invoice.

Expenses now work the accounting way. Every expense you record — through [AI Expenses](/expenses/ai-expenses/overview) or by categorising a bank transaction — posts to your accounting immediately. Because of this, the legacy list is locked for new entries. You can still view your existing records, and you can migrate them to Accounts Payable in bulk.

## Migrating Expenses to Accounts Payable

You can convert your traditional expenses into Accounts Payable transactions so they count towards your accounting like all new expenses.

### Steps

1. Go to **Purchasing** > **Expenses** in the left sidebar.
2. Select the checkbox on each expense you want to migrate, or select the checkbox in the header row to select all.
3. Select the bulk actions option.
4. Select **Convert to Accounts Payable**.
5. Confirm the conversion.

### What Happens Next

Each converted expense becomes an Accounts Payable transaction with its details carried over. Converted expenses leave the traditional list and appear in your accounting, your [Expenses report](/reporting/expenses-report), and your financial reports.

### Which Expenses Cannot Be Migrated

Some expenses are skipped during migration and remain in the traditional list:

- **Expenses already matched with an accounting transaction** — These already count towards your accounting through the matched transaction. Converting them would record the expense twice.
- **Expenses added to an invoice as billable items** — These are linked to the invoice and stay where they are.

If you select a mix, Fiskl converts the eligible expenses and leaves the rest in the list. Nothing is lost — the skipped records are already accounted for or attached to an invoice.

## What You Can Still Do

In the Traditional Expenses list you can:

- View your legacy expense records and their attachments
- Select expenses in bulk and convert them to Accounts Payable
- Keep unmigrated records for reference — matched and billable expenses remain visible

You cannot create new expenses here. To record a new expense, see [How to Add Expenses](/expenses/adding-expenses).

## Common Issues

<details>
<summary>Some of my expenses were not converted</summary>

This is expected. Expenses that are already matched with an accounting transaction, or that were added to an invoice as billable items, are not migrated. They remain in the traditional list because they are already reflected in your accounting or linked to an invoice. No action is needed.

</details>

<details>
<summary>I can't find the Traditional Expenses list</summary>

The list only appears for accounts with legacy expense records. If your account is new, or all your records have been migrated, the list is hidden. All expense work now happens in [AI Expenses](/expenses/ai-expenses/overview) and Banking.

</details>

<details>
<summary>I can't add a new expense here anymore</summary>

The legacy list is locked for new entries. Record new expenses in **Purchasing** > **AI Expenses**, or categorise the bank transaction directly in **Banking**. See [How to Add Expenses](/expenses/adding-expenses) for both methods.

</details>

## Related Topics

- [How to Add Expenses](/expenses/adding-expenses) — The two ways to record a new expense
- [AI Expenses Overview](/expenses/ai-expenses/overview) — Automated expense capture and Accounts Payable
- [Expenses Report](/reporting/expenses-report) — All your expenses by category with payment status
- [Expense Categories](/expenses/expense-categories) — Manage the categories used across your expenses
