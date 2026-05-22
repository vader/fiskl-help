---
title: Moving Transactions Between Accounts
description: Learn how to efficiently move transactions between accounts in
  Fiskl to maintain accurate financial records and correct misallocations.
sidebar_position: 9
---
import TOCInline from '@theme/TOCInline';


This guide explains how to move transactions between accounts in Fiskl to correct misclassification and keep your financial records accurate.


<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />


## Before You Begin


- New to moving transactions? See the [Understanding transaction transfers](#understanding-transaction-transfers) section below before proceeding
- The destination account must be the same type and currency as the source account
- If the transaction has been reconciled, you will need to unreconcile it first


## Understanding transaction transfers


<details className="blue-box">
<summary>Understanding transaction transfers</summary>


Occasionally, you may need to move a transaction from one bank or credit card account to another. For example, if a business expense was recorded against your personal bank account in Fiskl, you can move it to your business bank account instead.


This is different from changing the spending category on a transaction — for example, changing a transaction from **Business Meals** to **Travel & Accommodation**. To change a category, edit the transaction directly and update the category field.


:::tip
An internal transfer is also different. If money actually moved between two of your own accounts — for example, a transfer from your current account to a savings account — record it as an internal transfer instead. See [Internal Transfers](/accounting/journal-entries/guides/internal-transfers).
:::


### Why move transactions between accounts?


Moving a transaction to a different account may be necessary for several reasons:


- **Error correction** — Fix a transaction recorded against the wrong bank or credit card account
- **Account reorganization** — Restructure your Chart of Accounts
- **Financial reporting accuracy** — Ensure reports correctly represent your financial activity
- **Account consolidation** — Merge or close accounts


**Real-world example**


Imagine you recorded several business expenses to your personal bank account in Fiskl. Later, you realize these should have been in your business expense account. Instead of deleting and re-entering each transaction, you can move them to the correct account. All original transaction details are preserved and your audit trail remains intact.


</details>


## Moving transactions in Fiskl


:::info
The **Move transactions** option moves a transaction between two accounts of the same type and the same currency. It is not for changing the spending category on a transaction — for example, from **Business Meals** to **Travel & Accommodation**. To change a category, edit the transaction directly.
:::


### Important considerations when moving transactions


Keep these points in mind before moving transactions:


- **Account compatibility** — Transactions can only be moved between accounts of the same type and the same currency. For example, you can move a transaction from one GBP bank account to another GBP bank account, but not to a USD bank account or a different account type
- **Reporting periods** — Moving transactions may affect closed accounting periods
- **Reconciled transactions** — Moving reconciled transactions may affect your reconciliation status


Fiskl helps manage these considerations by warning you when a move may have significant implications, preventing moves that would create accounting inconsistencies, and maintaining a complete audit trail of all transaction movements.


:::tip
Before moving transactions, export a report of the affected accounts. This gives you a record of the pre-move state for your reference.
:::


1. Go to **Accounting** > **Chart of Accounts** and open the account containing the transaction
2. Select the specific transaction
3. Select the **Move transactions** button
4. In the dialog that appears, choose the destination account from the dropdown
5. Select **Move** to complete the action


The transaction appears in the destination account with all its original details preserved. To move multiple transactions at once, select the checkbox next to each transaction before selecting **Move transactions**.


If you're unsure which account a transaction should belong to, select **Fi** in the top right of the screen. Fi can help you identify the correct account based on your transaction details.


### Viewing transaction history


Fiskl displays when the transaction was created and last modified.


## Common Issues


<details>
<summary>The destination account is not appearing in the dropdown</summary>


The destination account must share the same currency and account type as the source account. If the account you expect is not listed, check that both accounts use the same currency in **Settings** > **Chart of Accounts**.


</details>


<details>
<summary>The Move transactions button is greyed out</summary>


This usually means the transaction is reconciled. Reconciled transactions are locked to protect your reconciliation status. If you still need to move it, unreconcile the transaction first, then repeat the move.


</details>


<details>
<summary>The transaction is missing after the move</summary>


Go to the destination account and check the date range filter — the transaction may be outside the currently selected period. Expand the date range to locate it.


</details>


## Related Topics


- [Internal Transfers](/accounting/journal-entries/guides/internal-transfers) — Record money moving between your own accounts
- [Journal Entries overview](/accounting/journal-entries/overview) — Understand how journal entries work in Fiskl
- [Transaction Guides overview](/accounting/journal-entries/guides/overview) — Browse all transaction workflow guides
- [Match and Split Transactions](/accounting/journal-entries/guides/match-and-split-transactions) — Match imported transactions or split them across accounts
