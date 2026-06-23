---
title: "Connect Apps with OAuth"
description: "Register an OAuth app so other Fiskl users can authorise it to access their data, including confidential and public app types, redirect URIs, and scopes."
keywords: ["OAuth", "connected apps", "Fiskl API", "client app", "PKCE", "redirect URI", "scopes", "consent"]
sidebar_position: 5
tags:
  - Integrations
  - Public API
  - OAuth
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Connected apps use OAuth so that other Fiskl users can authorise your app to access their data, without ever sharing a key. This is the right approach when you build an app or connector for other people, rather than a script for your own account. This guide explains how to register an app and how the authorisation flow works.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

- You need the `oauth_app.manage` permission to register apps. This is an administrator task.
- Decide whether your app is confidential or public before you start — see [Choose an App Type](#choose-an-app-type).
- Have your redirect URIs ready. Each must use `https://` (or `http://localhost` for local development).

## API Keys or a Connected App?

Choose based on who uses the integration:

- Use an **API key** when the integration runs against your own account, such as an internal script.
- Use a **connected app** when other Fiskl users need to authorise access from their own accounts.

For the API key path, see [Create and Manage API Keys](/integrations/public-api/api-keys).

## Choose an App Type

The app type depends on whether your app can keep a secret.

- **Confidential** — server-side apps that can store a secret safely. Fiskl issues a client secret at registration, shown once.
- **Public** — apps that cannot keep a secret, such as mobile, desktop, or command-line tools. These use PKCE instead of a secret.

## Register an App

To register an app, go to **Settings** > **API & Connections** > **Connected apps** and select **Register app**.

1. **Name the app**

   Enter the name users will see on the consent screen.

2. **Add redirect URIs**

   Enter each URL Fiskl may return users to after they authorise your app. Use exact `https://` addresses.

3. **Select scopes**

   Choose the scopes your app needs, such as `invoicing:read` or `contacts:write`. Scopes are broad resource groups, unlike the fine-grained permissions used by API keys. Request only what the app needs — users see these on the consent screen.

4. **Choose the app type and register**

   Select confidential or public, then select **Register**. For a confidential app, copy the client secret now.

   :::warning
   Fiskl shows the client secret once and cannot show it again. Store it securely. If you lose it, register a new app.
   :::

## How the Authorisation Flow Works

After you register an app, users connect it through the standard OAuth authorisation code flow:

1. Your app sends the user to Fiskl's authorisation page with your client ID and the scopes you request.
2. The user signs in and reviews the scopes on a consent screen, then approves.
3. Fiskl returns the user to your redirect URI with a short-lived authorisation code.
4. Your app exchanges that code for an access token, then sends the token as `Authorization: Bearer …` on API requests.

The access token can never do more than the user can, intersected with the scopes they approved. Revoking the connection stops the app's access immediately.

:::info
A connected app's access reflects the user's current permissions in real time. If an administrator reduces a user's permissions, the app's access narrows at once.
:::

## Manage Apps

The **Connected apps** list shows each registered app with its scopes, redirect URIs, and creation date. You can register and review apps today. Deactivating a registered app is a planned addition — until then, contact support if you need an app removed.

## Common Issues

<details>
<summary>Users see a redirect error after approving the app</summary>

The redirect URI your app sent does not exactly match one you registered. Confirm the registered URIs include the exact address, including scheme and path, and update the registration if needed.

</details>

## Related Topics

- [Create and Manage API Keys](/integrations/public-api/api-keys) — The simpler path for your own integrations
- [Make Your First API Request](/integrations/public-api/making-api-requests) — Use an access token to call the API
- [Public API Overview](/integrations/public-api/overview) — How connected apps fit with keys and webhooks
- [Roles and Permissions](/team/roles-permissions) — How permissions and scopes limit access
