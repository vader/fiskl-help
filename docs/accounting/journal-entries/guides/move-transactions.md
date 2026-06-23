---
title: "Moving Transactions Between Accounts"
description: "Learn how to move transactions between ledger accounts in Fiskl to correct mis-categorizations and keep your financial records accurate."
keywords: ["move transactions", "ledger accounts", "mis-categorization", "reclassify", "accounting correction"]
sidebar_position: 1
tags:
  - Accounting
  - Transactions
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to move transactions between ledger accounts in Fiskl. Use this feature to correct transactions that were recorded in the wrong account, without having to delete and re-enter them.

## Understanding Transaction Transfers

In Fiskl, every transaction is recorded against a specific ledger account — for example, an expense might be recorded under Office Supplies when it should be under Travel. Moving a transaction lets you reassign it to the correct ledger account while keeping all the original details and your audit trail intact.

:::info
Moving a transaction only reassigns it to a different ledger account within Fiskl. If money has actually moved between two of your real bank accounts — for example, a transfer from your savings account to your current account — you should record that as an internal transfer instead. See [Internal Transfers](/accounting/journal-entries/guides/internal-transfers).
:::

<details>
<summary>Why would I need to move a transaction?</summary>

You may need to move a transaction for several reasons:

- **Error correction** — the transaction was recorded in the wrong ledger account
- **Account reorganisation** — you have restructured your Chart of Accounts
- **Improved categorisation** — you want to better reflect the nature of a transaction
- **Financial reporting accuracy** — your reports need to correctly represent your financial activity
- **Account consolidation** — you are merging or closing accounts

</details>

<details className="blue-box">
<summary>Real-world example</summary>

You recorded several business travel expenses under Office Supplies by mistake. Rather than deleting and re-entering each transaction, you can select them all and move them to the Travel ledger account in one step. All original transaction details are preserved and your audit trail remains intact.

</details>

## Moving a Transaction

:::caution
Fiskl only shows destination accounts of the same account type as the source. For example, moving from an Operating Expenses account will only show other Operating Expenses accounts in the dropdown.
:::

To move one or more transactions to a different ledger account:

1. Go to **Accounting** > **Transactions**
2. Select the ledger account that contains the transaction you want to move
3. Select the transaction to open it, then select **Move transaction** — or to move multiple transactions, select the checkbox next to each one and then select **Move transactions**
4. In the panel that appears, choose the destination ledger account from the dropdown
5. Select **Move** to complete the action

The transaction now appears in the destination ledger account with all its original details preserved.

:::tip
To move multiple transactions at once, select the checkbox next to each transaction before selecting **Move transactions**.
:::

## Managing Transaction Transfers

### Viewing transaction history

Fiskl maintains a complete audit trail showing when each transaction was created, modified, or moved. You can view this history by opening any transaction and checking the activity log.

### Important considerations

Keep these points in mind before moving transactions:

- **Account compatibility** — transactions can only be moved between ledger accounts that share the same currency and account type. For example, you can move between two expense accounts, but not from an expense account to a bank account.
- **Currency matching** — in multi-currency setups, the destination account must use the same currency as the transaction.
- **Locked accounting periods** — if a reporting period has been locked in **Settings** > **Accounting**, transactions within that period cannot be moved. This prevents changes to reports that have already been submitted to tax authorities. Contact your accountant if you need to move a transaction in a locked period.
- **Reconciled transactions** — moving a reconciled transaction may affect your reconciliation status. Fiskl will warn you before allowing the move.

Fiskl warns you automatically if a move would create accounting inconsistencies, and maintains a complete audit trail of all transaction movements.

:::tip
Before moving transactions, export a report of the affected ledger accounts. This gives you a record of the state before the move for your reference.
:::

## Common Issues

<details>
<summary>I can't see the Move transactions option</summary>

The **Move transactions** option is only available on manual ledger accounts. It does not appear on imported bank account transactions. If you need to correct a transaction in one of these accounts, edit the transaction directly or use the [match and split feature](/accounting/journal-entries/guides/match-and-split-transactions) instead.

</details>

<details>
<summary>I moved a transaction to the wrong account</summary>

Move it again. Open the destination ledger account, find the transaction, and repeat the move process to send it to the correct account. Each move is recorded in the audit trail.

</details>

<details>
<summary>Fiskl is warning me before completing the move</summary>

Fiskl checks for potential issues before allowing a move — such as currency mismatches, locked periods, or reconciliation conflicts. Read the warning message carefully. If you are unsure whether to proceed, check with your accountant before confirming.

</details>

## Related Topics

- [Internal Transfers](/accounting/journal-entries/guides/internal-transfers) — Record money moving between your real bank accounts
- [Match and Split Transactions](/accounting/journal-entries/guides/match-and-split-transactions) — Match bank transactions to ledger entries or split them across accounts
- [Chart of Accounts](/accounting/chart-of-accounts) — View and manage your ledger account structure
- [Multi-journal Entries](/accounting/journal-entries/multi-journal-entries) — Record complex transactions across multiple accounts
