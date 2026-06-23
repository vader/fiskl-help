---
title: "Accounts Payable Transactions"
description: "Learn how to create, pay, and manage Accounts Payable transactions in Fiskl, including partial payments, foreign currencies, and splits."
keywords: ["accounts payable", "AP", "bills", "vendor payments", "accrual accounting", "journal entry", "partial payment", "foreign currency"]
sidebar_position: 10
tags:
  - Accounting
  - Journal Entry
  - Accounts Payable
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains how to create and manage Accounts Payable (AP) transactions in Fiskl. It covers recording bills, matching payments, handling partial payments, and working with foreign currencies.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Understanding Accounts Payable

Accounts Payable is used in accrual accounting to record money your business owes to vendors for goods or services received but not yet paid for. Recording AP entries in Fiskl gives you an accurate picture of your liabilities and future payment obligations.

When you create an AP transaction, Fiskl records the liability in the Accounts Payable ledger account. When you later pay the bill, you match the payment to the original AP entry. This zeroes out the outstanding balance and keeps your Balance Sheet, Trial Balance, and Transactions by Account reports accurate.

:::info
For payments that have already occurred, use Operating Expenses or other relevant expense ledger accounts instead of Accounts Payable.
:::

<details>
<summary>Why is managing Accounts Payable important?</summary>

Proper AP management helps you:

- Track your short-term obligations.
- Accurately report your financial position.
- Maintain healthy cash flow by knowing what payments are due and when.
- Build stronger vendor relationships through timely and accurate payments.

</details>

## Creating an AP Transaction

To record a bill or future payment you owe to a vendor:

1. Go to **Accounting** in the left menu and select **Transactions**
2. Select **Accounts Payable** from the account list
3. Select **+ Credit** to create a new AP entry
4. Complete the transaction details:
   - **Name** — a clear description such as "Broadband bill" or "Office Supplies Invoice #1234"
   - **Currency** — select the currency if different from your base currency
   - **Amount** — enter the amount owed
   - **Description** — add any internal notes (optional)
   - **Date** — the invoice or bill date
   - **Category** — select the relevant expense ledger account from the dropdown, or create a new one
   - **Tax** — select the applicable tax rate. If you are VAT or sales tax registered, this is required for accurate tax reporting.
   - **Vendor** — select an existing vendor or create a new one
   - **Client** — link to a client if the expense relates to a specific job (optional)
   - **Reference** — enter the vendor's invoice or bill number (optional)
5. Select the attachment icon to upload a copy of the bill or invoice
6. Select **Save** to save the transaction

Your new AP transaction now appears in the Accounts Payable ledger account and the corresponding expense ledger account.

:::tip
If the balance in your Accounts Payable account is zero, it means you currently have no future payments or liabilities recorded.
:::

## Matching an AP Transaction with a Payment

When you pay a bill, Fiskl can match the bank payment to the original AP transaction automatically, or you can manually assign or change a match. Matching clears the outstanding liability and updates your financial reports.

### How automatic matching works

Fiskl monitors your connected bank accounts for transactions that correspond to recorded AP entries. When a match is found, the AP transaction reconciles automatically without any manual steps.

**The matching process:**

1. **AP transaction saved** — the liability is recorded in your Accounts Payable ledger account
2. **Monitoring begins** — Fiskl watches for incoming bank transactions that correspond to the AP entry
3. **Match identified** — the system finds a bank transaction matching the vendor, amount, and date
4. **Automatic reconciliation** — the AP transaction links to the bank transaction and your accounting records update

**What Fiskl matches on:**

- **Amount** — exact match or within a small tolerance
- **Date** — bank transaction date is within a reasonable range of the AP entry date
- **Vendor** — bank transaction description corresponds to the vendor name

After automatic matching, Fiskl records two entries in the Accounts Payable account: the original liability entry and the payment entry. The outstanding balance returns to zero.

### Manually matching or changing a match

If you need to manually assign a match, or if an automatic match is incorrect and you want to change it:

1. Go to **Accounting** > **Transactions** and open the relevant bank or credit card ledger account
2. Find the payment transaction
3. Select **Show matches** on the transaction
4. Review the list of available AP transactions and select the correct one
5. If an incorrect match has already been applied, select it to deselect it — it moves back to the available list
6. Select the correct AP transaction from the list
7. Select **Update** to apply the match
8. Select **Finish** once all matches for the transaction are complete

You only need to select **Finish** once — after all matches are done, not after each individual one.

## Matching an AP Transaction with Partial Payments

If you pay a bill in instalments, you can match each partial payment to the same AP transaction:

1. Go to **Accounting** > **Transactions** and open the relevant bank or cash ledger account
2. Find the first partial payment transaction
3. Select **Show matches**
4. Select the corresponding AP transaction from the list — Fiskl automatically adjusts the matched amount to the partial payment
5. Select **Update** to confirm
6. Repeat for each subsequent partial payment until the AP transaction is fully paid
7. Select **Finish** after the final payment is matched to close out the AP transaction

If currencies differ between the payment and the AP entry, Fiskl applies the relevant exchange rate automatically.

### How partial payments appear in reports

Partial payments update your financial reports as each instalment is matched:

- **Balance Sheet** — shows the remaining unpaid liability after each payment
- **Transactions by Account** — each partial payment appears as a separate entry linked to the original AP transaction
- **Trial Balance** — reflects the current outstanding balance across all AP transactions

## Working with Foreign Currency AP Transactions

Fiskl supports AP transactions in any currency. When a vendor invoices you in a currency different from your base currency:

1. When creating the AP transaction, select the appropriate currency from the **Currency** dropdown
2. Fiskl displays both the foreign currency amount and the equivalent in your base currency
3. When you come to match the payment, select **Show matches** — Fiskl presents matches across all currencies
4. Use the currency selector to filter matches to a specific currency if needed
5. Select the correct match and adjust the exchange rate if required
6. Select **Update** to confirm

### Paying multiple foreign currency bills in one payment

If a single bank payment covers several AP transactions in a foreign currency:

1. Select **Show matches** on the payment transaction
2. Select all relevant AP transactions from the matches list
3. Select **Auto-adjust FX rate** to proportionally distribute the exchange rate across all matched transactions
4. Select **Update** to finalise

## Splitting an AP Transaction

If a single bill covers multiple expense categories, vendors, or currencies, you can split the AP transaction:

1. Open an existing AP transaction or create a new one
2. Select **Split**
3. For each split line, enter:
   - **Amount**
   - **Category** — the expense ledger account for that portion
   - **Currency** — if different from the base currency
   - **Tax** — if applicable
   - **Vendor** — if different from the primary vendor
   - **Client** — if applicable
4. The **Difference** field shows any remaining amount not yet allocated — ensure this reaches zero before saving
5. Select **Save** to save the split transaction

Each split portion appears in its respective ledger account, giving you detailed tracking across categories and vendors.

## Common Issues

<details>
<summary>My AP balance is not zeroing out after I matched a payment</summary>

This usually means the payment and the AP transaction were matched at different amounts. Open the Accounts Payable ledger account and check whether the two entries are equal — the original credit and the payment debit should match. If they differ due to a currency exchange rate change, you may need to record a foreign exchange gain or loss entry. See the [multi-currency transactions guide](/accounting/journal-entries/guides/multi-currency-transactions) for details.

</details>

<details>
<summary>I recorded an AP transaction by mistake</summary>

If the AP transaction has not been matched to any payment, open the transaction and select **Delete**. If it has already been matched, unmatch the payment first. Open the matched bank transaction, remove the match, then delete the AP transaction.

</details>

<details>
<summary>Not sure how to categorise a bill or set up your AP workflow?</summary>

Fi, Fiskl's built-in AI advisor, can help you think through your accounting setup, suggest the right expense categories, and guide you through more complex AP scenarios. Select the **Ask Fi** icon within the platform to get started.

</details>

## Related Topics

- [Multi-journal Entries](/accounting/journal-entries/multi-journal-entries) — Record complex transactions with multiple debit and credit lines
- [Multi-currency Transactions](/accounting/journal-entries/guides/multi-currency-transactions) — Handle exchange rates and currency differences in your ledger
- [Accounts Receivable Transactions](/accounting/journal-entries/guides/accounts-receivable-transactions) — Record income owed to your business
- [Chart of Accounts](/accounting/chart-of-accounts) — View and manage your ledger account structure
- [Managing Vendors](/clients-vendors/vendors) — Create and manage your vendor records
