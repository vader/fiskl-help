---
title: Statement of Accounts
description: Generate and share a Statement of Accounts in Fiskl to summarise
  all transactions with a client, including invoices, payments, and outstanding
  balances.
sidebar_position: 9
---


This guide explains how to generate, customise, and share a Statement of Accounts in Fiskl — a report that summarises all financial transactions with a specific client, including invoices and any outstanding balances.

Why is the Statement of Accounts report important?

The Statement of Accounts report is useful because it:

- Summarises all financial transactions with a specific client in one place
- Helps track outstanding balances and payment history
- Supports effective accounts receivable management
- Helps you communicate clearly with clients about their financial standing
- Some businesses request a statement of accounts periodically or before settling any invoices



&nbsp;

## Before You Begin

- The Statement of Accounts report is client-specific. You need at least one client with recorded transactions to generate a meaningful report.
- To include accounts receivable (AR) transactions, ensure AR entries exist for the client. AR entries are generated when an invoice is sent, not when it is created as a draft.

## Accessing the Report

You can open the Statement of Accounts from two locations:

- **Invoice list** — Filter by client, then select **Statement of Accounts**
- **Accounting** > **Reports** — Select **Statement of Accounts** from the left menu

## Generating a Statement of Accounts

1. Open the report from one of the locations above.
2. Select **Filters & Settings** to expand the report options.
3. Select the client you want to generate the statement for.
4. Set the date range using the date selector or a preset period.
5. Select the currencies to include, or leave unchecked to show all currencies.
6. Toggle **Include AR Transactions** on or off to include or exclude AR transactions.
7. Enter your company name as you want it displayed on the report.
8. Enter a custom report name if needed.
9. Select **Run Report**.

:::info
When a client has transactions in multiple currencies, the report groups each section by currency. For example, you will see separate sections for Invoices in EUR and Invoices in USD, with the opening and closing balances also broken out per currency.
:::

## Understanding the Report

### Report Sections

The report header shows your company details, the client's details, and the opening and closing balances. If the client has transactions in multiple currencies, each balance is shown per currency, with any overdue amounts highlighted.

The body of the report contains up to two sections, each grouped by currency:


| Section | Description |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Invoices** | All invoices within the selected period, showing date, invoice number, status, due amount, paid amount, and total |
| **Accounts Receivable transactions** | Manual AR journal entries for the client, showing date, name, and amount. Only appears when **Include AR Transactions** is toggled on |


### Report Views

The report has two versions:

**Fiskl view** — The version you see when working inside Fiskl. Selecting an invoice navigates you directly to that invoice. Selecting an AR transaction navigates you to that transaction.

**Client view** — The version your client receives as a PDF. Selecting an invoice takes your client to the payment page, where they can view the invoice, see payments made or outstanding, and download the invoice and receipts.

## Adding Notes

Notes are added after you have run the report.

1. Select the notes icon at the bottom of the report.
2. Enter your comments or any context for the client.
3. Notes are included when you print the report.

## Sharing the Report

To share the Statement of Accounts as a PDF:

1. Select **Print** at the top right of the report. The PDF includes direct links to the client's invoices.

:::tip
Sending a Statement of Accounts periodically helps maintain transparency with clients and can improve payment timeliness.
:::

## Analysing the Report

The closing balance shows what your client currently owes. Any overdue amounts are highlighted in red, broken out per currency, making it straightforward to see where action is needed.

If the closing balance looks higher than expected, review the invoice rows for overdue items and check whether any AR transactions are affecting the total. Extending the date range can also help identify transactions that may have originated before the current period.

Once you have identified overdue invoices, you can select them directly in the Fiskl view to follow up or record a payment.

:::tip
Use the **Ask Fi** icon at the top right of the screen to get help interpreting an unexpected balance or to ask questions about a client's transaction history.
:::

## Common Issues

The report shows no transactions for the selected period

Check that the date range covers the period you expect. If you are filtering by a specific currency, confirm that the client has transactions in that currency. Also verify that invoices have been sent (not left as drafts), as AR entries are generated on send.



AR transactions are not appearing in the report

Toggle **Include AR Transactions** on in **Filters & Settings**. If AR transactions still do not appear, check that the invoices for this client have been sent — drafts do not generate AR entries.



The opening or closing balance looks incorrect

The opening balance reflects transactions before your selected start date. If the balance appears unexpected, try extending the date range to include earlier periods. Also check whether you have the correct currencies selected — balances are displayed per currency for multi-currency clients.



The PDF links are not working for the client

Ensure the client is accessing the PDF version of the statement, not a screenshot or printed copy. The links in the client view connect to the Fiskl payment page for each invoice.



## Related Topics

- [Client Aging Report](/reporting/client-aging) — View overdue balances across all clients
- [Managing Clients](/clients-vendors/clients) — Add and manage your client records
- [Accounts Receivable Transactions](/accounting/journal-entries/guides/accounts-receivable-transactions) — Understand how AR entries are created
- [General Ledger](/reporting/general-ledger) — View all transactions across ledger accounts

