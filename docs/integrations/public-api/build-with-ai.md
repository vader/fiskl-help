---
title: "Build an Automation with AI"
description: "Use an AI coding tool to build a Fiskl integration or n8n workflow without writing code yourself, from scoped API key to tested automation."
keywords: ["n8n Fiskl", "AI build integration", "no code API", "Fiskl automation", "AI coding tool", "Claude Code API", "workflow automation"]
sidebar_position: 4
tags:
  - Integrations
  - Public API
  - Automation
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Most people building on the Fiskl API today are not writing the code themselves. They describe what they want to an AI tool, which writes the integration or automation for them. This guide shows how to do that reliably.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## When to Use This Approach

Use an AI tool to build an automation when you want something to run on its own — on a schedule, or whenever an event happens. Common examples include sending a weekly summary of overdue invoices to your team, creating a Fiskl invoice whenever a deal closes in your CRM, or exporting monthly figures to a spreadsheet.

If instead you want to ask questions and work interactively, connect the assistant directly to Fiskl. See [Connect Your AI Assistant](/integrations/public-api/connect-ai-assistant).

## Before You Begin

- Decide what should happen, and what should trigger it.
- Have an AI tool that can write and run code, such as Claude Code, or an automation platform with an AI builder such as n8n.
- Be ready to create an API key. Do not create it until the AI tool asks for it.

## The Four Steps

### 1. Describe the Outcome, Not the Endpoints

Tell the AI tool what you want in business terms and point it at the reference. It reads the reference and works out which endpoints to call.

A prompt that works well:

> Build an n8n workflow that runs every Monday at 8am. It should fetch all overdue invoices from the Fiskl API and post a summary to Slack, listing each client, the invoice number, the amount, and how many days overdue it is. The Fiskl API reference is at https://api-docs.fiskl.com — read it first to get the correct endpoints and fields. Amounts come back in minor units, so divide by 100 before displaying them. I will provide the API key as an environment variable.

Three things make this prompt effective. It states the schedule and the trigger. It points at the reference rather than guessing endpoints. It flags the minor units convention, which is the most common source of wrong figures.

### 2. Create a Scoped Key

When the tool is ready to test, create a key with only the permissions the automation needs.

1. Go to **Settings** > **API & Connections** > **My API keys** and select **Create key**.
2. Name it after the automation, such as "n8n overdue invoice digest".
3. Select only the permissions it needs. A reporting automation usually needs read permissions only.
4. Copy the key and paste it into your automation tool's credential or secret store.

:::warning
Never paste an API key directly into a prompt, a chat message, or a code file. Use your tool's environment variable or credential store, and tell the AI tool to read it from there.
:::

### 3. Test Against Real Data

Run the automation manually before you schedule it. Check that the figures match what Fiskl shows on screen — this catches the minor units mistake immediately.

For an automation that creates records, test with one record first and confirm it in Fiskl before running the whole batch.

### 4. Make It Safe to Retry

Automations fail and retry. A network timeout can mean a request succeeded but the response never arrived.

For anything that creates invoices, tell the AI tool to send your own unique reference with each request. Fiskl uses it to recognise a repeat and returns the invoice it already created, rather than creating a second one. Add this to your prompt:

> When creating invoices, always send a unique external reference based on the source record's id, so a retry cannot create a duplicate invoice.

## What to Tell Your AI Tool

Include these facts in your prompt. They prevent the most common mistakes.

| Fact | Why it matters |
|---|---|
| The reference is at `api-docs.fiskl.com` | The tool reads the current endpoints instead of guessing |
| The base URL is `https://api.fiskl.com` and all paths sit under `/v1` | Calling the main app domain returns the web app, not data |
| Authentication is `Authorization: Bearer <key>` | The same header works for keys and OAuth tokens |
| Amounts are in minor units | Prevents figures that are 100 times too large |
| Never calculate dates — fetch the date periods first | Fiscal years vary; the API returns exact ranges for named periods |
| Lists are paginated | Prevents an automation that silently processes only the first page |
| Send a unique reference when creating invoices | Makes retries safe |

## A Worked Example

A common first automation: post a weekly overdue summary to Slack.

1. **Describe it** — Use the prompt in step one above.
2. **Let the tool read the reference** — It finds the invoice list endpoint and the filter for overdue status.
3. **Create a key** — Read permissions for invoices and clients only.
4. **Test it** — Run once by hand and compare the total against your Fiskl dashboard.
5. **Schedule it** — Enable the weekly trigger.

The same shape works for most reporting automations. Change the report and the destination, and the structure stays the same.

## Common Issues

<details>
<summary>Every amount is 100 times too large</summary>

The automation is showing minor units directly. Amounts come back as whole numbers of cents, so 15000 means 150.00. Tell your AI tool to divide every monetary value by 100 before displaying or exporting it.

</details>

<details>
<summary>The automation only processes some records</summary>

It is reading the first page and stopping. Lists are paginated, and a full page usually means more records exist. Ask the tool to page through until it receives a partial page.

</details>

<details>
<summary>Duplicate invoices appear after a failure</summary>

The automation retried a request that had already succeeded. Add a unique external reference to each invoice creation, based on the source record's id, so Fiskl recognises the repeat and returns the existing invoice.

</details>

<details>
<summary>The automation returns 403 on some requests</summary>

The key lacks a permission. Confirm what the key can do by calling the permissions endpoint, then create a new key with the scopes the automation needs. Keys cannot be edited after creation.

</details>

## Related Topics

- [What You Can Do with the API](/integrations/public-api/capabilities) — Check a capability exists before you build
- [Use the Interactive API Docs](/integrations/public-api/using-the-api-docs) — Test a request before automating it
- [Create and Manage API Keys](/integrations/public-api/api-keys) — Create the scoped key this guide uses
- [Connect Your AI Assistant](/integrations/public-api/connect-ai-assistant) — Work interactively instead of on a schedule
- [Receive Events with Webhooks](/integrations/public-api/webhooks) — Trigger on events instead of a schedule
