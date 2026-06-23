---
title: "Receive Events with Webhooks"
description: "Set up Fiskl webhooks to notify your system when invoices, clients, quotes, and payments change, with the event catalogue and payload format."
keywords: ["webhooks", "Fiskl API", "events", "invoice.paid", "webhook portal", "signing secret", "notifications"]
sidebar_position: 4
tags:
  - Integrations
  - Public API
  - Webhooks
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Webhooks let Fiskl notify your system the moment something happens, such as an invoice being paid. Instead of repeatedly asking the API for changes, you receive a message as each event occurs. This guide explains how to set up webhook endpoints, which events are available, and what each message contains.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

- You need the `integration.write` permission to manage webhooks.
- Have a public HTTPS URL ready to receive messages — the address in your system that Fiskl will send events to.

## Open the Webhook Portal

Fiskl manages webhooks through a secure portal where you add endpoints and view delivery activity.

1. Go to **Settings** > **API & Connections** > **Webhooks**.
2. Select **Manage webhooks** to open the portal.

The portal opens through a single-use, short-lived link. If you leave and return to the **Webhooks** screen, a fresh link opens automatically — this is expected.

:::info
The webhook portal is provided through Fiskl's delivery partner and carries their branding. The endpoints, events, and logs are all your company's own data.
:::

## Add an Endpoint

Inside the portal you can:

- **Add an endpoint** — enter your HTTPS URL and select the event types it should receive.
- **View delivery logs** — see every attempt, its status code, and the response.
- **Replay a delivery** — resend a failed or past event for testing.
- **Manage the signing secret** — view and rotate the secret your system uses to verify messages.

## Event Catalogue

Select only the events your endpoint needs. Fiskl sends the following events:

| Event type | Sent when |
|---|---|
| `invoice.created` | An invoice is created |
| `invoice.updated` | An invoice is updated |
| `invoice.deleted` | An invoice is deleted |
| `invoice.sent` | An invoice is sent to the client |
| `invoice.paid` | An invoice is fully paid |
| `invoice.partial` | An invoice is partially paid |
| `invoice.overdue` | An invoice becomes overdue |
| `invoice.rejected` | An invoice is rejected |
| `client.created` | A client is created |
| `client.updated` | A client is updated |
| `client.deleted` | A client is deleted |
| `quote.created` | A quote is created |
| `quote.updated` | A quote is updated |
| `quote.deleted` | A quote is deleted |
| `payment.created` | A payment is recorded |
| `payment.deleted` | A payment is deleted |

## Message Format

Each message is a JSON object. The `data` field matches the response you get from the matching `GET /v1/...` endpoint, so you can handle webhook data and API data the same way.

```json
{
  "id": "msg_12345",
  "type": "invoice.paid",
  "createdAt": "2026-06-13T10:00:00Z",
  "data": {
    "id": 4821,
    "status": "Paid"
  }
}
```

## Verify Each Message

Every message is signed with your endpoint's signing secret. Verify the signature in your code before you act on a message, so you can be sure it came from Fiskl. You can view and rotate the signing secret in the portal.

:::warning
Treat the signing secret like a password. If it is exposed, rotate it in the portal and update your system.
:::

## Common Issues

<details>
<summary>The Webhooks screen says webhooks aren't available</summary>

Webhook delivery is not enabled in every environment. If you see this message on a test environment, use production to set up live webhooks.

</details>

<details>
<summary>Messages aren't arriving at my endpoint</summary>

Open the portal and check the delivery logs for that endpoint. Confirm the URL is correct and publicly reachable over HTTPS, then replay a recent event to test. The logs show the status code your endpoint returned.

</details>

## Related Topics

- [Make Your First API Request](/integrations/public-api/making-api-requests) — The `/v1` responses that webhook data mirrors
- [Create and Manage API Keys](/integrations/public-api/api-keys) — Authenticate your API calls
- [Public API Overview](/integrations/public-api/overview) — How webhooks fit with the rest of the API
