---
title: Handling Internal Transfers
sidebar_position: 14
description: "Simplify internal fund transfers with Fiskl: Track movement between accounts and maintain organized financial records seamlessly."
keywords: ["Internal transfer transactions Fiskl", "fund transfers", "account management", "financial tracking"]
slug: /core-features/accounting/journal-entries/guides/internal-transfers
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Accounting
  - Journal entry
  - Internal transfers
---

# Internal transfers

## What are Internal Transfers?

Internal transfers involve moving money between your business accounts. There are two key aspects to understand:

1. **Business action**: The actual movement of funds between accounts, typically done through your bank or financial institution.
1. **Accounting process**: Recording these fund movements in your accounting system to maintain accurate financial records.

In Fiskl, we focus on helping you record internal transfers correctly to ensure your books reflect these important fund movements.

## Why Record Internal Transfers?

Properly recording internal transfers in your accounting system is crucial for:

- Distinguishing fund movements from income or expenses
- Maintaining a clear audit trail
- Keeping account balances up-to-date across all accounts
- Accurately tracking cross-currency transfers

:::info[note]
It's essential for you as a business owner to record your internal transfers in accounting accurately and timely. This is especially true if you do regular transfers and if they are in different currencies where it's not obvious that the transactions are transfers.
:::

<details>
<summary>Common reasons for internal transfers</summary>

Businesses often use internal transfers for:

- Covering operational expenses
- Purchasing inventory
- Paying salaries
- Reallocating funds between accounts
- Managing multiple currencies
- Maintaining specific account balance levels
- Bridging gaps between cash reserves and bank balances

</details>

## How Fiskl Helps with Internal Transfers

[//]: # (Fiskl provides tools to easily record your internal transfers, ensuring your accounting records accurately reflect the movement of funds between your accounts. In the case of [WIO Bank]&#40;/integrations/banking/connecting-wio&#41;, we do these automatically.)

## Types of Internal Transfers in Fiskl

Fiskl categorizes internal transfers based on currency types:

1. Transfers between accounts of the same currency
1. Transfers between accounts with different currencies

### Rules for Internal Transfer

The following rules apply when Fiskl searches for transactions to match in an internal transfer:

1. Only transactions with a category of `Uncategorised Income` and `Uncategorised Expense` can be matched.
1. Match suggestion priorities:
    1. Transactions on the same day with same amounts
    1. Transactions on the same day with different currencies converted to a close match
    1. Transactions within several days where amounts match or are close

:::info
If no match can be found for a transfer between accounts A to B, try changing accounts to B and matching it from B to A.
This can occur if a movement of funds takes time to process. We may not think a transfer made on 1st December matches with another transaction on 15th November. But we will think that 15th November might match with 1st December.
:::

## Creating an Internal Transfer

### Same Currency Transfer

To transfer money between accounts with the same currency:

<details>
  <summary>Take an interactive video walkthrough of creating an internal transfer</summary>

    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
    <iframe
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
    src="https://demo.fiskl.com/e/cm0texfqy001rjy0c7qocb35i/tour"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowtransparency="true"
    ></iframe>
    </div>

</details>  

1. From the left menu, go to ``Accounting` > `Chart of Accounts``
1. Select the account you want to transfer money to or from
1. Select the `Match` link on the transaction
1. Select `Internal transfer`
1. You will be presented with potential matches:
    1. Choose the matching transaction
    1. Select "Update" to save the internal transfer match

Your internal transfer will appear in both the sending and receiving accounts.

### Multi-Currency Transfer

Transfers between accounts with different currencies follow the same process as [same currency transfers](#same-currency-transfer). The only difference is that the exchange rate the bank used for the transfer is shown on the matched transaction.

<details>
  <summary>Take an interactive video walkthrough of creating an internal transfer between different currency accounts</summary>

    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
    <iframe
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
    src="https://demo.fiskl.com/e/cm0tfoyiw00eilf0c1wkkhhe0/tour"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowtransparency="true"
    ></iframe>
    </div>

</details>

The transfer will appear in both accounts, showing both the foreign and base currency amounts.

By using internal transfers correctly, you ensure accurate tracking of funds across all your accounts, maintain proper financial records, and simplify your accounting processes.
