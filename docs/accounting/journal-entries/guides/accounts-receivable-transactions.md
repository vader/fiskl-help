---
title: "Working with Accounts Receivable"
description: "Learn how Fiskl tracks Accounts Receivable for invoices and manual transactions, including partial payments and multi-currency splits."
keywords: ["accounts receivable", "AR", "invoicing", "partial payments", "multi-currency", "accrual accounting"]
sidebar_position: 3
tags:
  - Accounting
  - Journal Entry
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how Accounts Receivable (AR) works in Fiskl — how it's created automatically for invoices, how to record manual AR transactions, and how to manage partial payments.

:::tip
You can ask **Fi**, Fiskl's AI advisor, questions about your AR balance, overdue invoices, or outstanding payments at any time. Select **Fi** in the top right of the screen to get started.
:::

## Before You Begin

- Familiarise yourself with [accrual accounting basics](/glossary/accounting-fundamentals)
- Ensure your base currency is set in [Company Settings](/settings/company-settings)

## What Is Accounts Receivable

Accounts Receivable is a record of money owed to your business for goods or services you've provided but haven't been paid for yet. In Fiskl, the AR ledger account automatically tracks these amounts in multiple currencies and displays the total in your base currency.

If your Accounts Receivable balance is zero, all your invoices have been paid and you have no outstanding client payments to collect.

<details>
<summary>Why is managing Accounts Receivable important?</summary>

Proper AR management helps you:

- Track money owed to your business
- Manage cash flow effectively
- Accurately report your financial position

</details>

## How Fiskl Handles AR for Invoices

Fiskl automates AR management for invoices and their payments:

1. **Invoice sent** — Each time you send an invoice, Fiskl automatically creates an AR record. This entry is an asset representing the income you expect to receive from your client.
2. **Payment matching** — When a bank transaction is matched to an invoice — either automatically via Fiskl's AI-powered automatch or manually in Banking — Fiskl updates the AR record to reflect the payment and reduces the outstanding balance.

This automation keeps your AR up to date and accurately reflects outstanding client payments as bank transactions are matched.

## Recording Manual AR Transactions

You can also record manual AR transactions to capture payments expected in the future. You can enter a manual AR transaction in any currency and split it across multiple ledger accounts.

<details>
<summary>Real world example of an Accounts Receivable with splits in non-base currency</summary>

You are invited to speak at a conference abroad and are being paid in a currency different from your base currency.

Suppose the contract stipulates a total payment of €3000 EUR. Of this amount, €2500 is allocated for your speaking engagement, classified as Sales of Services, and the remaining €500 is for merchandise you are selling at the event, categorised under Sales of Products.

Splitting these transactions in your Accounts Receivable lets you accurately track revenue streams and manage the complexities of foreign currency transactions. This separation helps analyse the profitability of different business activities and is important for accurate financial reporting, strategic financial planning, and tax preparation in your base currency.

</details>

## Viewing AR Transactions

You can view your Accounts Receivable transactions in several ways:

- In the left sidebar, select **Accounting** > **Transactions**, then select **Accounts Receivable**
- In the left sidebar, select **Accounting** > **Chart of Accounts**, then select **Accounts Receivable**
- In the left sidebar, select **Accounting** > **Reports**, then select [Balance Sheet](/reporting/balance-sheet) and enable the detailed option
- In the left sidebar, select **Accounting** > **Reports**, then select [Transactions by Account](/reporting/transactions-by-account)
- In the left sidebar, select **Accounting** > **Reports**, then select [Trial Balance](/core-features/accounting/reports/trial-balance)

## Understanding AR Transaction Types

In your Accounts Receivable list, you'll see two main types of transactions:

- **Debit entries** — Invoices you've sent to clients, which increase your AR balance
- **Credit entries** — Payments received from clients, which decrease your AR balance

## Matching AR Transactions

As with Accounts Payable, you can match your Accounts Receivable transactions.

:::info
It's not possible to manually match invoice AR transactions. Fiskl handles this automatically.
:::

## AI-Powered Bank Categorisation

When bank transactions arrive via your connected bank feed, Fiskl's AI does two things to help reconcile your AR automatically:

- **Automatch** — attempts to match the incoming payment directly to the corresponding AR entry, linking the bank transaction to the correct invoice without any manual intervention
- **Category suggestions** — where an exact match isn't found, Fiskl's AI suggests the most likely ledger account category based on the transaction description, amount, and your previous categorisation patterns

You can accept a suggestion with one select, or override it manually if needed. The more you use Fiskl, the more accurate these suggestions become as the AI learns your patterns.

:::info
Automatch and category suggestions work best when your bank transactions include clear payment references. Including your invoice number in payment instructions you send to clients improves match accuracy.
:::

## Partial Payments in Accounts Receivable

When recording partial payments against an invoice, you need to match these transactions accurately to maintain correct accounting records.

### Recording a Partial Payment

You can partially match an AR transaction with a partial payment from your bank or cash accounts. Payments can be in your base currency, a foreign currency, or multiple currencies:

1. Find the relevant transaction in your Cash & Cash Equivalents ledger account (your bank account)
2. Select **Show matches**
3. Select the corresponding AR transaction from the list for the full amount
4. Fiskl automatically adjusts the matched amount to the partial payment and applies relevant exchange rates
5. Select **Save** to confirm the match

Repeat this process for all related partial payments until the AR transaction is fully settled.

### How Partial Payments Appear in Reports

Partial payments affect your financial reports in specific ways:

- **Balance Sheet** — Shows the remaining outstanding amount for partially paid AR transactions
- **Transactions by Account** — Displays each partial payment as a separate entry linked to the original invoice
- **Client Aging report** — Includes the unpaid portion of partially paid invoices
- **Trial Balance** — Reflects the current outstanding balance for all AR transactions

## Common Issues

<details>
<summary>My AR balance doesn't match my invoice totals</summary>

This usually means one or more invoices have been partially matched, matched to the wrong transaction, or a manual AR entry has been created in addition to the automatic invoice entry.

1. In the left sidebar, select **Accounting** > **Transactions**, then select **Accounts Receivable**
2. Review each debit entry and check whether a corresponding credit entry exists
3. If a manual AR entry duplicates an invoice, delete the manual entry
4. If a payment has been matched incorrectly, unmatch it and re-match it to the correct invoice

</details>

<details>
<summary>Automatch didn't link my bank payment to the invoice</summary>

Automatch may not trigger if the payment amount differs from the invoice total, the payment arrived in a different currency, or the bank transaction description doesn't closely match the invoice reference.

1. In the left sidebar, select **Accounting** > **Transactions**, then select **Cash & Cash Equivalents**
2. Find the bank payment and select **Show matches**
3. Select the correct AR transaction from the list
4. Select **Save** to confirm the match

For partial payments, Fiskl adjusts the matched amount automatically — see [Recording a Partial Payment](#recording-a-partial-payment) above.

</details>

<details>
<summary>My foreign currency AR transaction shows an unexpected base currency amount</summary>

The base currency value of a foreign currency AR transaction is calculated using the exchange rate at the time the transaction was recorded. If the rate has changed since then, the displayed amount may differ from what you expected.

To adjust the exchange rate on a manual AR transaction, open the transaction and update the rate field before saving. For invoice-generated AR entries, the rate is set at invoice creation and updated automatically when a payment is matched.

</details>

<details>
<summary>I can't find the AR transaction for a specific invoice</summary>

AR transactions for invoices are created automatically but may not appear immediately if the invoice is still in draft status. Only sent or approved invoices generate an AR entry.

1. Confirm the invoice has been sent — select **Invoicing** in the left sidebar and check the invoice status
2. If the invoice is in draft, select **Send** to generate the AR entry
3. If the invoice has been sent but no AR entry appears, select **Accounting** > **Transactions** > **Accounts Receivable** and filter by date range to locate it

</details>

## Related Topics

- [Working with Accounts Payable](/accounting/journal-entries/guides/accounts-payable-transactions) — Manage money your business owes to vendors
- [Matching and Splitting Transactions](/accounting/journal-entries/guides/match-and-split-transactions) — Match bank transactions to invoices and expenses
- [Multi-Currency Transactions](/accounting/journal-entries/guides/multi-currency-transactions) — Record and reconcile transactions in foreign currencies
- [Balance Sheet](/reporting/balance-sheet) — View your assets, liabilities, and equity at a point in time
- [Transactions by Account](/reporting/transactions-by-account) — Review all transactions for a specific ledger account
- [Fi — Fiskl's AI Advisor](/ai/fi) — Ask Fi questions about your AR balance, overdue invoices, and cash flow
