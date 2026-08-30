---
title: "What You Can Do with the API"
description: "A plain-language list of the Fiskl data and actions available through the API and AI assistants, so you can judge what to automate before you start building."
keywords: ["Fiskl API capabilities", "API endpoints list", "what can the API do", "automate invoicing", "API reports", "API limitations"]
sidebar_position: 2
tags:
  - Integrations
  - Public API
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This page lists what the Fiskl API can read and change, in plain language. Use it to judge whether an automation is possible before you build it or ask an AI assistant to build it for you.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

Everything here works the same way whether you call the API from your own code, from an automation tool such as n8n, or through a [connected AI assistant](/integrations/public-api/connect-ai-assistant).

## Invoicing

The most complete area of the API. You can run a full billing cycle without opening Fiskl.

| Action | Notes |
|---|---|
| List and search invoices | Filter by date range, status, and client |
| View one invoice | Includes every line item and its tax |
| Create an invoice | One request — Fiskl calculates line totals, taxes, and the invoice number |
| Preview an invoice | Returns the calculated totals without saving anything |
| Update an invoice | Draft invoices only; sent and paid invoices are locked |
| Send an invoice | Emails it to the client and marks it as sent |
| Mark an invoice as paid | Records payment of the full outstanding balance |

Invoice lines cover products and services. Time entries, mileage, and billable expenses are added in the Fiskl app rather than through the API.

:::info
Fiskl always calculates the financial result. You send quantities and prices; totals, taxes, and the invoice number come back from the server. Any totals you send are ignored, so your figures can never disagree with your books.
:::

## Clients and Vendors

| Action | Notes |
|---|---|
| List and search clients | Filter by name, and include or exclude archived clients |
| View, create, and update a client | Country and currency default to your company settings |
| List and search vendors | The businesses you pay |
| View, create, and update a vendor | Same fields as clients, plus a company registration number |

## Payments

| Action | Notes |
|---|---|
| List payments | Requires a date range |
| View one payment | Includes the linked invoice |
| Record a payment | Applied against an invoice; Fiskl updates the invoice status |

Recording a payment updates the invoice's paid and outstanding amounts and moves it to **Partial** or **Paid** automatically. Overpayments are rejected.

## Products and Services

| Action | Notes |
|---|---|
| List and search catalogue items | Includes price, unit, and tax setup |
| View, create, and update an item | Applies to both products and services |

## Quotes

You can list and view quotes, including their line items and taxes. Creating and sending quotes through the API is not yet available — use the Fiskl app for that.

## Reports

Every core financial report is available, and each returns the same figures you see in Fiskl.

- Profit and loss
- Balance sheet
- Trial balance
- Cash flow statement
- Financial ratios
- Accounts receivable and accounts payable aging
- General ledger
- Transaction detail
- Statement of account
- Tax report

Reports take a date range. Call the date periods endpoint first to get exact start and end dates for named periods such as **This Month** or **Last Financial Year**, calculated from your own fiscal year settings.

## Business Insights

Pre-calculated summaries that answer common questions in one request.

- Top clients, ranked by paid, overdue, or outstanding amounts
- Invoice totals across outstanding, paid, and overdue
- Average days to payment
- Average days an invoice runs overdue

## Audit Trail

You can read the change history for any record — who created it, who last changed it, and what each change altered. A company-wide feed answers questions such as "what changed this week?"

## Webhooks

Register an endpoint and Fiskl notifies your system when something happens, so you do not have to poll for changes. See [Receive Events with Webhooks](/integrations/public-api/webhooks).

## What the API Does Not Cover

Knowing the boundaries saves time. These areas are deliberately unavailable:

- **Team and security management** — inviting users, changing roles, creating API keys, and managing connected apps
- **Subscription and billing** — changing your Fiskl plan or payment method
- **Manual journal entries and period close** — these post directly to your ledger
- **Tax configuration** — creating or editing tax rates
- **Bank connections and bills** — the scopes exist, but the endpoints are still in development
- **Recurring invoice schedules** — you can see the invoices they generate, but not manage the schedules themselves

:::tip
If something you need is missing, ask for it. A connected AI assistant can file the request for you, or you can send it through the API. The team reviews every request and they shape what gets built next.
:::

## Conventions That Apply Everywhere

Three rules hold across the whole API.

**Amounts are in minor units.** A value of `15000` means 150.00. Divide by 100 before showing a figure to anyone.

**Lists are paginated.** A full page usually means there are more records. Request the next page rather than assuming you have everything.

**Creating an invoice is safe to retry.** Send your own reference with the request and a repeated call returns the invoice already created, instead of creating a duplicate. This matters when an automation retries after a timeout.

## Related Topics

- [Use the Interactive API Docs](/integrations/public-api/using-the-api-docs) — See the exact fields for every endpoint
- [Connect Your AI Assistant](/integrations/public-api/connect-ai-assistant) — Use these capabilities in conversation
- [Build an Automation with AI](/integrations/public-api/build-with-ai) — Turn a capability into a scheduled workflow
- [Make Your First API Request](/integrations/public-api/making-api-requests) — Call the API from the command line
