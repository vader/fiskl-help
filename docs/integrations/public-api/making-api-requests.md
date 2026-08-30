---
title: "Make Your First API Request"
description: "A developer quickstart for the Fiskl API: base URLs, authentication, your first calls, pagination, scopes, and error handling with curl examples."
keywords: ["Fiskl API", "quickstart", "curl", "REST API", "authentication", "pagination", "API errors", "bearer token"]
sidebar_position: 7
tags:
  - Integrations
  - Public API
  - Quickstart
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This quickstart shows you how to authenticate and call the Fiskl API. By the end you will have made live requests and know how to handle pagination, scopes, and errors. It also works as an end-to-end check that your API access is set up correctly.

## Before You Begin

- Create an API key first — see [Create and Manage API Keys](/integrations/public-api/api-keys).
- Have a command line with `curl`, or any HTTP client you prefer.

## Base URLs

Use the production URL for live data, and the staging URL for testing.

| Environment | Base URL |
|---|---|
| Production | `https://api.fiskl.com` |


Every endpoint sits under `/v1`. For example, the clients endpoint is `https://api.fiskl.com/v1/clients`.

## Authenticate

Send your token in the `Authorization` header on every request. The same header works for an API key (`fsk_…`) and for an OAuth access token.

```bash
Authorization: Bearer fsk_your_key_here
```

## Make Your First Call

Start with `/v1/date-periods`. It needs no special scope, so it is the quickest way to confirm your token works:

```bash
curl https://api.fiskl.com/v1/date-periods \
  -H "Authorization: Bearer fsk_your_key_here"
```

A successful response returns the named date ranges for your company, each calculated from your accounting settings:

```json
[
  { "name": "This Month", "start": "2026-06-01", "end": "2026-06-30" },
  { "name": "This Financial Year-to-date", "start": "2026-01-01", "end": "2026-06-23", "isDefault": true }
]
```

These ranges are the same presets the reports use. You select a period, then pass its `start` and `end` to a report or a filtered list. To read data, call a resource such as clients:

```bash
curl "https://api.fiskl.com/v1/clients?size=25" \
  -H "Authorization: Bearer fsk_your_key_here"
```

## Work with Pages

List endpoints return one page at a time. Control paging with query parameters:

- **`page`** — the page number, starting at `0`
- **`size`** — how many records per page
- **`sort`** — the field and direction, such as `created,desc`

```bash
curl "https://api.fiskl.com/v1/invoices?page=0&size=50&sort=created,desc" \
  -H "Authorization: Bearer fsk_your_key_here"
```

## Understand Scopes

A token can only reach data its scopes allow. API keys use fine-grained permissions; OAuth tokens use the coarser scopes below.

| Scope | Grants access to |
|---|---|
| `contacts:read` / `contacts:write` | Clients and vendors |
| `invoicing:read` / `invoicing:write` | Invoices, quotes, and line items |
| `payments:read` / `payments:write` | Payments |
| `products:read` / `products:write` | Products and services |
| `bills:read` / `bills:write` | Bills you owe |
| `accounting:read` / `accounting:write` | Ledger data and reconciliation |
| `banking:read` / `banking:write` | Bank connections |
| `company:read` / `company:write` | Company profile |
| `reports:read` | Financial reports |
| `taxes:read` | Tax rates |
| `audit:read` | Record change history |
| `webhooks:read` / `webhooks:write` | Webhook endpoints |

To see exactly what your token can do, call `/v1/me/permissions`.

Each endpoint names the scope it needs in its description at [api-docs.fiskl.com](https://api-docs.fiskl.com).

## Create a Record

Writes follow the same pattern, with a JSON body. This example creates an invoice in one request:

```bash
curl -X POST https://api.fiskl.com/v1/invoices \
  -H "Authorization: Bearer fsk_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "externalId": "order-2026-000123",
    "clientId": 1024,
    "invoiceDate": "2026-03-01",
    "dueDate": "2026-03-31",
    "items": [
      { "name": "Consulting hours", "quantity": 10, "price": 15000, "unit": "hour" }
    ]
  }'
```

Two conventions matter here.

**Amounts are integer minor units.** A `price` of `15000` means 150.00. Fiskl calculates the line totals, taxes, and the invoice number, so you never send them.

**`externalId` makes the request safe to retry.** Send your own unique reference, and a repeated call returns the invoice already created rather than creating a duplicate. Always set it from an automation, where a timeout can trigger a retry.

:::tip
Call `POST /v1/invoices/preview` with the same body to see the calculated totals without saving anything. It is the quickest way to confirm your figures before you commit.
:::

## Handle Errors

The API uses standard HTTP status codes. Check the status before reading the body.

| Status | Meaning | What to do |
|---|---|---|
| `400` | The request was invalid | Fix the parameters or body and retry |
| `401` | The token is missing, expired, or revoked | Check the token, or create a new key |
| `403` | The token's scopes do not allow this action | Use a token with the right scope |
| `429` | Too many requests | Wait, then retry with backoff |

## Run the End-to-End Check

Use this sequence to confirm a complete setup:

1. Create an API key with the scopes you need.
2. Call `/v1/date-periods` and confirm a `200` response.
3. Call a resource such as `/v1/clients` and confirm your data returns.
4. Set up a [webhook](/integrations/public-api/webhooks) and trigger an event to confirm delivery.

:::tip
The interactive reference at [api-docs.fiskl.com](https://api-docs.fiskl.com) lists every endpoint with example responses, and lets you authorise with a key and try calls in the browser.
:::

## Common Issues

<details>
<summary>Requests return the wrong content or a redirect</summary>

Confirm you are calling the API host (`api.fiskl.com`) and a path under `/v1`. Calling the main app domain instead of the API host returns the web app, not API data.

</details>

## Related Topics

- [Create and Manage API Keys](/integrations/public-api/api-keys) — Generate the token this guide uses
- [Receive Events with Webhooks](/integrations/public-api/webhooks) — React to changes instead of polling
- [Public API Overview](/integrations/public-api/overview) — How the API building blocks fit together
- [Financial Reports](/reporting/overview) — The reports that use the same date ranges
