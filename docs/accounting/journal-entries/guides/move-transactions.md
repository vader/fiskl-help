---
title: Moving Transactions Between Accounts
sidebar_position: 9
description: Learn how to efficiently move transactions between accounts in Fiskl to maintain accurate financial records and correct misallocations.
keywords: ["Move transactions Fiskl", "account transfer", "transaction management", "financial record correction", "Fiskl features"]
slug: /core-features/accounting/journal-entries/guides/move-transactions
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
 - Accounting
 - Journal entry
 - Transaction management
 - Account transfers
---

## Understanding transaction transfers

Occasionally, you may need to move transactions from one account to another. This could be due to initial misclassification, changes in your accounting structure, or simply to better organize your financial data. Fiskl provides a straightforward process for moving transactions between accounts while maintaining the integrity of your financial records.

:::tip
If the transaction reflects actual money moving between your accounts, be sure to record it as an internal transfer instead. See Internal Transfers section in this guide.
:::

### Why move transactions between accounts?

Moving transactions between accounts may be necessary for several reasons:

1. **Error correction**: To fix transactions that were recorded in the wrong account
2. **Account reorganization**: When restructuring your Chart of Accounts
3. **Improved categorization**: To better reflect the nature of specific transactions
4. **Financial reporting accuracy**: To ensure your reports correctly represent your financial activities
5. **Account consolidation**: When merging or closing accounts

<details>
<summary>Real-world example</summary>

Imagine you've recorded several business expenses to your personal bank account in Fiskl. Later, you realize these should have been allocated to your business expense account. Instead of deleting and re-entering each transaction, you can simply move them to the correct account, preserving all the original transaction details and maintaining your audit trail.
</details>

## Moving transactions in Fiskl

1. Navigate to the account containing the transaction you wish to move
2. Locate and select the specific transaction
3. Click on the "Move transactions" button
4. In the dialog box that appears, choose the destination account from the dropdown menu
6. Click "Move" to complete the action

The transaction will now appear in the destination account with all its original details preserved.

<details>
<summary>Take an interactive walkthrough on how to move transactions</summary>

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/share/cm7ue0tr3002rlb0ct098n66f/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

## Managing transaction transfers

### Viewing transaction history

Fiskl maintains a complete audit trail of when each transaction was created and modified.

### Important considerations when moving transactions

When moving transactions between accounts, keep these points in mind:

1. **Account compatibility**: Transactions can only be moved between accounts that share the same currency and account type, such as from a UK bank account to another UK bank account, or from a US Credit card to another US Credit card.
2. **Currency matching**: For multi-currency setups, be aware of the currency implications when moving transactions
3. **Reporting periods**: Moving transactions may affect closed accounting periods
4. **Reconciled transactions**: Exercise caution when moving reconciled transactions, as this may affect your reconciliation status

Fiskl helps manage these considerations by:
- Warning you when a move might have significant implications
- Preventing moves that would create accounting inconsistencies
- Maintaining a complete audit trail of all transaction movements

:::tip
Before moving transactions, consider exporting a report of the affected accounts to maintain a record of the pre-move state for your reference.
:::

By following these guidelines and utilizing Fiskl's transaction movement features, you can effectively manage your financial records and ensure that all transactions are properly categorized in your accounting system.
