---
title: "Public API Overview"
description: "Build on Fiskl with the public API. Learn how API keys, OAuth connected apps, webhooks, and the API endpoints fit together."
keywords: ["Fiskl API", "public API", "API key", "OAuth", "webhooks", "integration", "automation", "REST API"]
sidebar_position: 1
tags:
  - Integrations
  - Public API
  - Automation
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import TOCInline from '@theme/TOCInline';

The Fiskl public API lets you read and update your accounting data from your own software, connect third-party apps, and react to changes as they happen. This overview explains how the four building blocks fit together so you can choose the right one for your task.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## What the Public API Is

The public API is a stable set of web endpoints under `/v1` — for example `/v1/clients` and `/v1/invoices`. You send a request with a token, and Fiskl returns your company's data as JSON. Every request is authenticated and limited to what the token is allowed to do.

The full, interactive reference lives at **[api-docs.fiskl.com](https://api-docs.fiskl.com)**. There you can browse every endpoint, see example responses, and try calls in the browser. This help section explains the concepts around that reference: how to get a token, how access is scoped, and how to receive events.

## The Four Building Blocks

These four features work together. Most integrations use two or three of them.

| Building block | What it is | Use it when |
|---|---|---|
| **API keys** | A token (`fsk_…`) you create for your own scripts and tools | You are building your own integration or one-off automation |
| **Connected apps (OAuth)** | A registered app that other Fiskl users authorise to act on their behalf | You are building an app or connector for other people to use |
| **API endpoints** | The `/v1` requests that read and change your data | Any time you read or update Fiskl data programmatically |
| **Webhooks** | Notifications Fiskl sends to your system when something happens | You need to react to events such as an invoice being paid |

A simple way to remember the difference between the two token types: an **API key** is for *your own* access, while a **connected app** lets *someone else's* app access a user's data with that user's consent.

## How Access Is Controlled

Every request carries a token in the `Authorization` header, and Fiskl checks two things: that the token is valid, and that it is allowed to perform the action.

- **API keys** use fine-grained permissions, such as `invoice.read`. You select these on a grid when you create the key, and you can only grant permissions you hold yourself.
- **Connected apps** use coarser **scopes**, such as `invoicing:read`. The person authorising the app approves these scopes on a consent screen.

In both cases, a token can never do more than its owner can. If your permissions change, every token you created reflects that change immediately.

## Choosing Your Path

1. **To call the API from your own code**, create an [API key](/integrations/public-api/api-keys), then follow [Make Your First API Request](/integrations/public-api/making-api-requests).
2. **To build an app others will connect**, register a [connected app](/integrations/public-api/connected-apps) and use the OAuth flow.
3. **To react to changes in Fiskl**, set up [webhooks](/integrations/public-api/webhooks).

:::info
The interactive endpoint reference at [api-docs.fiskl.com](https://api-docs.fiskl.com) always reflects the current API. Use it alongside these guides to see exact fields and example responses.
:::

## Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />

## Related Topics

- [Make Your First API Request](/integrations/public-api/making-api-requests) — Authenticate and call the API in a few minutes
- [Create and Manage API Keys](/integrations/public-api/api-keys) — Generate scoped tokens for your own integrations
- [Connect Apps with OAuth](/integrations/public-api/connected-apps) — Register apps that other users authorise
- [Receive Events with Webhooks](/integrations/public-api/webhooks) — Get notified when data changes
- [Roles and Permissions](/team/roles-permissions) — How permissions control what a token can do
