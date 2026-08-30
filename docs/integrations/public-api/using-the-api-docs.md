---
title: "Use the Interactive API Docs"
description: "Find the Fiskl API reference at api-docs.fiskl.com, authorise it with your API key, and run live requests from your browser without writing any code."
keywords: ["Fiskl API docs", "api-docs.fiskl.com", "Scalar", "interactive API reference", "try API request", "test API key", "API explorer"]
sidebar_position: 5
tags:
  - Integrations
  - Public API
  - Quickstart
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

The Fiskl API reference at [api-docs.fiskl.com](https://api-docs.fiskl.com) lists every endpoint and lets you run real requests directly in your browser. This guide explains how to authorise the reference with your API key and test a call before you write any code.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

- Create an API key first — see [Create and Manage API Keys](/integrations/public-api/api-keys).
- Requests you send from the reference run against your live company data. Start with read-only calls.

## What the Reference Gives You

The reference is the complete, always-current description of the API. It updates automatically whenever Fiskl releases a change, so it never falls behind the live system.

You can use it to:

- Browse every endpoint, grouped by area such as **Invoices**, **Clients**, and **Reports**
- See exactly which fields a request accepts and which a response returns
- Read the scope each endpoint needs before you build against it
- Run live requests with your own key and see your own data
- Copy a working code sample in `curl`, JavaScript, Python, and other languages

:::tip
Keep the reference open in a browser tab while you build. Checking a field name there takes seconds and avoids a failed request later.
:::

## Find Your Way Around

Open [api-docs.fiskl.com](https://api-docs.fiskl.com). The layout has three parts:

- **Left sidebar** — the endpoint list, grouped by area. Select any endpoint to jump to it.
- **Middle column** — the detail for the selected endpoint: what it does, the scope it needs, and every parameter.
- **Right column** — example requests in your chosen language, and example responses.

The introduction at the top covers the conventions that apply to every endpoint, including how amounts are formatted and how retries are handled. Read it once before your first integration.

## Authorise with Your API Key

The reference sends requests as you, using a key you provide. Nothing is sent until you authorise.

1. **Create a key with the right scopes**

   In Fiskl, go to **Settings** > **API & Connections** > **My API keys** and select **Create key**. For testing, grant read permissions only, such as `invoice.read` and `client.read`.

2. **Copy the key**

   Fiskl shows the full key once, starting with `fsk_`. Copy it before you close the dialog.

3. **Open the authorise panel**

   In the reference, select the **Authorize** button near the top of the page.

4. **Paste the key**

   Select the **Bearer** option and paste your key into the token field, including the `fsk_` prefix. Select **Save**.

The reference now sends your key with every test request. It stores the key in your own browser only.

:::warning
Treat a pasted key like a password. Avoid authorising the reference on a shared or public computer, and revoke any key you paste into a machine you do not control.
:::

## Run Your First Request

Start with an endpoint that needs no special scope, so you can confirm the key works.

1. **Select an endpoint**

   In the sidebar, select **Date periods** > **List date periods**.

2. **Send the request**

   Select **Test Request**, then **Send**.

3. **Read the response**

   A `200` status means the key works. The body lists your company's named date ranges, such as **This Month** and **This Financial Year-to-date**, with exact start and end dates.

Now try a real resource. Select **Clients** > **List clients**, set the `size` parameter to `5`, and send the request. Your own client records return as JSON.

### Check What Your Key Can Do

Select **Me** > **Get permissions** and send the request. The response lists every permission this key holds. When an endpoint returns `403`, compare its required scope against this list — the permission is almost always missing from the key.

## Move from the Reference to Your Code

Once a request works in the browser, take it into your own tool.

Each endpoint shows a **code sample** in the right column. Select your language, then copy the sample. It includes the correct URL, headers, and body, so it runs as-is after you swap in your own key.

For AI-assisted builds, give your AI tool the reference URL rather than pasting samples. See [Build an Automation with AI](/integrations/public-api/build-with-ai) for that approach.

## Common Issues

<details>
<summary>Requests return 401 after authorising</summary>

The key is incomplete, revoked, or expired. Re-copy the key including the `fsk_` prefix, then authorise again. If the key no longer appears as active in **Settings** > **API & Connections** > **My API keys**, create a new one.

</details>

<details>
<summary>Requests return 403 on an endpoint you can see</summary>

The reference lists every endpoint regardless of your key's scopes. Your key lacks the permission this endpoint needs. Check the scope named in the endpoint description, then create a key that includes it.

</details>

<details>
<summary>The Authorize button does not keep your key</summary>

The reference stores the key in your browser's local storage. Private browsing windows and browsers set to block site data clear it. Use a normal window, or re-authorise each session.

</details>

## Related Topics

- [Create and Manage API Keys](/integrations/public-api/api-keys) — Generate the key this guide uses
- [Make Your First API Request](/integrations/public-api/making-api-requests) — Call the API from the command line
- [What You Can Do with the API](/integrations/public-api/capabilities) — The full list of available data and actions
- [Build an Automation with AI](/integrations/public-api/build-with-ai) — Have your AI tool write the integration
