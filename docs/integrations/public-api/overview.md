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


The Fiskl public API lets you read and update your accounting data from outside Fiskl — through an AI assistant, an automation tool, or your own software. This overview explains the pieces and helps you pick the right starting point.

:::info
Beta Notice: The API, Webhooks, and MCP server are currently in Beta.
This means these tools are actively in development; stability is not fully guaranteed and endpoints may change without notice. We encourage you to use this period to familiarise yourself with the system, and we will notify all users once they reach general availability.
:::

## Start Here

You do not need to be a developer to use the API. Choose the path that matches what you want to do.

| I want to... | Start with |
|---|---|
| Ask an AI assistant about my business, or have it create invoices | [Connect Your AI Assistant](/integrations/public-api/connect-ai-assistant) |
| Have an AI tool build an automation or n8n workflow for me | [Build an Automation with AI](/integrations/public-api/build-with-ai) |
| See what data and actions are available before deciding | [What You Can Do with the API](/integrations/public-api/capabilities) |
| Try a request in my browser without writing code | [Use the Interactive API Docs](/integrations/public-api/using-the-api-docs) |
| Write my own integration in code | [Make Your First API Request](/integrations/public-api/making-api-requests) |

## What the Public API Is

The public API is a stable set of web endpoints under `/v1` — for example `/v1/clients` and `/v1/invoices`. You send a request with a token, and Fiskl returns your company's data as JSON. Every request is authenticated and limited to what the token is allowed to do.

The full, interactive reference lives at **[api-docs.fiskl.com](https://api-docs.fiskl.com)**. There you can browse every endpoint, see example responses, and run real calls in the browser after pasting in an API key. This help section explains the concepts around that reference: how to get a token, how access is scoped, and how to receive events.

## The Building Blocks

These features work together. Most integrations use two or three of them.

| Building block | What it is | Use it when |
|---|---|---|
| **API keys** | A token (`fsk_…`) you create for your own scripts and tools | You are building your own integration or automation |
| **Connected apps (OAuth)** | A registered app that other Fiskl users authorise to act on their behalf | You are building an app or connector for other people to use |
| **AI assistant connection (MCP)** | A direct link between an AI assistant such as Claude and your Fiskl data | You want to work with your accounts in conversation |
| **API endpoints** | The `/v1` requests that read and change your data | Any time you read or update Fiskl data programmatically |
| **Webhooks** | Notifications Fiskl sends to your system when something happens | You need to react to events such as an invoice being paid |

A simple way to remember the difference between the token types: an **API key** is for *your own* access, a **connected app** lets *someone else's* app access a user's data with that user's consent, and an **AI assistant connection** is a connected app you authorise for yourself.

## How Access Is Controlled

Every request carries a token in the `Authorization` header, and Fiskl checks two things: that the token is valid, and that it is allowed to perform the action.

- **API keys** use fine-grained permissions, such as `invoice.read`. You select these on a grid when you create the key, and you can only grant permissions you hold yourself.
- **Connected apps and AI assistants** use coarser **scopes**, such as `invoicing:read`. The person authorising approves these scopes on a consent screen.

In both cases, a token can never do more than its owner can. If your permissions change, every token you created reflects that change immediately.

Sensitive actions are never available to any token, whatever you grant. These include managing team members, changing your subscription, creating API keys, and posting manual journals.

:::info
The interactive endpoint reference at [api-docs.fiskl.com](https://api-docs.fiskl.com) always reflects the current API. Use it alongside these guides to see exact fields and example responses.
:::

## Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />

## Related Topics

- [What You Can Do with the API](/integrations/public-api/capabilities) — The full list of available data and actions
- [Connect Your AI Assistant](/integrations/public-api/connect-ai-assistant) — Use Fiskl from Claude and other AI tools
- [Build an Automation with AI](/integrations/public-api/build-with-ai) — Have an AI tool write your integration
- [Use the Interactive API Docs](/integrations/public-api/using-the-api-docs) — Run live requests from your browser
- [Make Your First API Request](/integrations/public-api/making-api-requests) — Authenticate and call the API in a few minutes
- [Create and Manage API Keys](/integrations/public-api/api-keys) — Generate scoped tokens for your own integrations
- [Connect Apps with OAuth](/integrations/public-api/connected-apps) — Register apps that other users authorise
- [Receive Events with Webhooks](/integrations/public-api/webhooks) — Get notified when data changes
- [Roles and Permissions](/team/roles-permissions) — How permissions control what a token can do
