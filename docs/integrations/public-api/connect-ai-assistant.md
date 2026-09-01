---
title: "Connect Your AI Assistant"
description: "Connect Claude or another AI assistant to your Fiskl account with MCP, so you can ask questions about your business and create invoices in plain language."
keywords: ["Fiskl MCP", "connect Claude to Fiskl", "MCP server", "AI assistant accounting", "Model Context Protocol", "AI invoicing", "Claude accounting"]
sidebar_position: 3
tags:
  - Integrations
  - Public API
  - AI
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';
import VideoEmbed from '@site/src/components/VideoEmbed';

You can connect an AI assistant such as Claude directly to your Fiskl account. Once connected, you ask questions in plain language — "who owes me money?" or "invoice Acme for 10 hours of consulting" — and the assistant reads your live data or creates the record for you.

<VideoEmbed id="api-connect-claude" />

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## What This Is

Fiskl provides an MCP server. MCP (Model Context Protocol) is an open standard that lets AI assistants use external tools. When you connect it, your assistant gains a set of Fiskl tools it can use on your behalf.

You do not write any code. You authorise the connection once, in the same way you would connect any app to your account, and then work in conversation.

:::info
This is different from [Fi](/ai/fi), the AI CFO built into Fiskl. Fi lives inside the Fiskl app and needs no setup. The MCP connection brings your Fiskl data into an assistant you already use elsewhere, such as Claude.
:::

## Before You Begin

- Use an AI assistant that supports MCP connections, such as Claude.
- You need a Fiskl account you can sign in to, with the permissions you want to grant.
- You can only grant permissions you already hold in Fiskl.

## Connect Your Assistant

The exact menu names vary between assistants, but the flow is the same.

1. **Add the connection in your assistant**

   In your AI assistant, find the setting for adding a connector, integration, or MCP server. Enter the Fiskl server address:

   ```
   https://my.fiskl.com/mcp
   ```

2. **Sign in to Fiskl**

   Your browser opens a Fiskl sign-in page. Sign in with your normal Fiskl account.

3. **Review the permissions**

   Fiskl shows a consent screen listing what the assistant is asking for, such as **View and manage your invoicing** and **View your reports**. Each permission maps to a scope described in [How Access Is Controlled](#how-access-is-controlled).

4. **Approve the connection**

   Clear the checkbox for anything you do not want to grant, then select **Allow**. The assistant confirms the connection and its Fiskl tools become available.

:::tip
Start read-only. Approve only the **View** permissions on your first connection, try a few questions, then reconnect with write permissions when you are confident.
:::

### Connect Claude

Claude supports the Fiskl connection directly, in both the desktop and web apps.

1. Go to **Settings** > **Connectors** and select **Add custom connector**.
2. Enter `Fiskl` as the name and `https://my.fiskl.com/mcp` as the server address.
3. Select **Add**, then select **Connect** to start the Fiskl sign-in.
4. Sign in to Fiskl and approve the permissions you want to grant.

Your Fiskl tools then appear in Claude's tool menu.

To connect Claude Code, run the following in your terminal:

```bash
claude mcp add --transport http fiskl https://my.fiskl.com/mcp
```

Then run `/mcp`, select **Fiskl**, and complete the sign-in.

Claude also offers four ready-made prompts for common jobs. Open the prompt picker and look for **Financial health check**, **Who owes me money?**, **Month-end review**, and **Create and send an invoice**. Each one runs a full sequence of Fiskl tools, so you do not need to know which to ask for.

## What Your Assistant Can Do

Once connected, your assistant has tools covering most day-to-day accounting work.

| Area | What you can ask for |
|---|---|
| Clients and vendors | List, look up, create, and update clients and vendors |
| Invoices | List, view, create, preview totals, update, send by email, and mark as paid |
| Quotes | List and view quotes |
| Payments | List payments in a date range, and record a payment against an invoice |
| Products and services | List, view, create, and update catalogue items |
| Reports | Profit and loss, balance sheet, trial balance, cash flow, financial ratios, AR and AP aging, general ledger, transaction detail, statement of account, and tax reports |
| Business insights | Top clients, invoice totals, average days to payment, and average days overdue |
| Audit trail | The change history for a record, and a company-wide feed of recent changes |

Some example requests that work well:

- "What were my top five clients by revenue last quarter?"
- "Show me every overdue invoice and how late each one is."
- "Create an invoice for Acme Corp: 10 hours of consulting at 150 per hour, due in 30 days."
- "Record a 500 payment against invoice INV-0042, received today."
- "Run a profit and loss for last month and explain the biggest changes."

## Find Out Why, Not Just What

A connected assistant does not stop at the report. When a figure looks wrong, it follows the number down to the entry behind it.

Ask why your current ratio dropped this quarter, and the assistant reads the ratios, then the balance sheet, the general ledger, and the individual transactions until it finds the entry that explains the change. That might be a misclassified expense, a payment posted to the wrong ledger account, or a transaction entered the wrong way round.

Questions that work well:

- "My gross margin is lower than last month. What changed?"
- "Cash flow looks worse than my profit suggests. Why?"
- "This ledger account balance looks wrong — show me the transactions behind it."
- "Something changed on this invoice. Who edited it, and what did they change?"

Work like this normally means an hour of filtering and exporting. In conversation it takes a few minutes, and the assistant shows the figures it used so you can verify them in Fiskl.

## How Access Is Controlled

The connection uses the same permission system as the rest of Fiskl. Two rules always apply.

The assistant can never do more than you can. Your permissions are the ceiling, and every request is checked against them at the time it is made. If your permissions change, the connection reflects that immediately.

The assistant can only do what you approved on the consent screen. Where a scope has both a read and a write form, you can grant reading without granting changes. Reports, tax rates, and the change history are read-only, so a connected assistant can never alter them.

| Scope | What it allows |
|---|---|
| `contacts:read` / `contacts:write` | Clients and vendors |
| `invoicing:read` / `invoicing:write` | Invoices, quotes, and line items |
| `payments:read` / `payments:write` | Payments received |
| `products:read` / `products:write` | Products and services |
| `accounting:read` | Ledger data and accounting reports |
| `company:read` | Company profile |
| `reports:read` | Financial reports |
| `taxes:read` | Tax rates |
| `audit:read` | The change history |

Sensitive actions are never available to a connected assistant, whatever you approve. These include managing team members, changing your subscription, creating API keys, editing payment instructions on invoices, posting manual journals, and reaching your bank connections.

Nothing a connected assistant does can delete a record.

## Working Safely with Write Access

Write permissions let the assistant change real records. Three habits keep this comfortable.

Ask for a preview before creating an invoice. The assistant can calculate the totals and taxes without saving anything, so you can check the figures first.

Confirm before sending. Sending an invoice emails your client immediately and cannot be recalled.

Check the work afterwards. Records created this way appear in Fiskl like any other, and the change history shows exactly what the assistant did and when.

:::warning
An assistant with `invoicing:write` can email invoices to your clients. Only grant it to assistants you trust, and confirm the recipient and amount before you approve a send.
:::

## Use It in Automations

The Fiskl connection is not limited to conversation. MCP is an open standard, so the same tools work in automation platforms and scheduled workflows. The invoicing, reconciliation, and reporting you do by asking can also run unattended.

Common patterns include raising an invoice when a job is marked complete in another system, reconciling payments on a schedule, and posting a weekly summary of overdue invoices to your team chat.

See [Build an Automation with AI](/integrations/public-api/build-with-ai) to get started.

## Ask for a Missing Feature

When your assistant cannot do something because no tool exists for it, it can file a request with the Fiskl team. Ask it to "request this feature in Fiskl" and it records what you were trying to do.

The team reviews these requests and they shape what gets built next. This is one of the fastest ways to influence the roadmap.

## Common Issues

<details>
<summary>The assistant says it has no Fiskl tools</summary>

The connection did not complete, or the assistant has not refreshed its tool list. Disconnect the Fiskl connection in your assistant, then add it again and complete the sign-in.

</details>

<details>
<summary>New features are missing after a Fiskl release</summary>

Your connection holds the permissions and tools from when you first approved it. Disconnect and reconnect to pick up newly released tools and scopes.

</details>

<details>
<summary>The assistant reports a missing scope error</summary>

You did not approve that permission, or you do not hold it yourself. Ask the assistant to check its permissions, then reconnect and approve the scope you need. If it is unavailable on the consent screen, you do not hold that permission — ask an administrator to grant it.

</details>

<details>
<summary>Your assistant cannot see a client or invoice that exists in Fiskl</summary>

Two things narrow what a connection can see. You may not have approved the scope that covers it, and some records are only visible to the person who created them — invoices and quotes work this way for users without write access.

Ask the assistant to check its permissions, and confirm you can see the record yourself in Fiskl.

</details>

<details>
<summary>The connection is refused with a subscription error</summary>

The connection needs an active Fiskl subscription. If yours has lapsed, renew it in **Settings** > **Subscription** and connect again.

</details>

<details>
<summary>Amounts look 100 times too large</summary>

The API returns amounts in minor units, so 15000 means 150.00. Assistants normally convert this correctly. If one reports a figure that looks wrong by a factor of 100, ask it to divide by 100 and confirm against Fiskl.

</details>

## Related Topics

- [What You Can Do with the API](/integrations/public-api/capabilities) — The full list of available data and actions
- [Fi - Your AI CFO](/ai/fi) — The AI advisor built into Fiskl
- [Build an Automation with AI](/integrations/public-api/build-with-ai) — Use an AI tool to build a scheduled integration
- [Connect Apps with OAuth](/integrations/public-api/connected-apps) — The authorisation flow this connection uses
- [Roles and Permissions](/team/roles-permissions) — How permissions control what a connection can do
