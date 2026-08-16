---
title: "Create and Manage API Keys"
description: "Create scoped API keys to access the Fiskl API from your own scripts and tools, copy the one-time secret, and revoke keys you no longer need."
keywords: ["API key", "Fiskl API", "access token", "scopes", "permissions", "revoke key", "fsk_"]
sidebar_position: 2
tags:
  - Integrations
  - Public API
  - Security
toc_min_heading_level: 2
toc_max_heading_level: 3
---

An API key is a token you create to access the Fiskl API from your own scripts, tools, and integrations. This guide explains how to create a key, scope it to exactly what it needs, and revoke it when you are done.

## Before You Begin

- You need the `api_key.create` permission to create keys for yourself.
- API keys are available on paid plans. On the free plan, key creation prompts you to upgrade.
- A key can only use permissions you hold. If you cannot grant a permission, you do not have it yourself.

## Create an API Key

To create a key, go to **Settings** > **API & Connections** > **My API keys** and select **Create key**.

1. **Name the key**

   Enter a clear name that describes where the key is used, such as "Nightly export script". A good name makes the key easy to recognise later.

2. **Set an expiry (optional)**

   Choose an expiry such as 90 days or one year, or leave it open-ended. A key with no expiry lives until you revoke it.

3. **Select scopes**

   Use the permission grid to select what the key can do. Select only the permissions the integration needs — for example, `invoice.read` for a key that only exports invoices. Permissions you do not hold are disabled.

   :::tip
   Select the read-only option to grant every `read` permission you hold in one step. This covers the common case of a reporting or export integration.
   :::

4. **Copy the secret**

   After you select **Create**, Fiskl shows the full key once, starting with `fsk_`. Copy it now and store it somewhere secure, such as your secret manager.

   :::warning
   Fiskl does not store the full key and cannot show it again. If you lose it, revoke the key and create a new one.
   :::

## Use the Key

Send the key in the `Authorization` header of every request:

```bash
curl https://api.fiskl.com/v1/clients \
  -H "Authorization: Bearer fsk_your_key_here"
```

For a full walkthrough of base URLs, responses, and errors, see [Make Your First API Request](/integrations/public-api/making-api-requests).

## Manage and Revoke Keys

The **My API keys** list shows each key's name, prefix, scopes, creation date, last use, and status. The prefix (for example `fsk_8fK2mQ9xL3aB`) helps you identify a key without exposing the secret.

To revoke a key, select it in the list and select **Revoke**. Revocation is immediate — any request using that key stops working at once. Keys are never fully deleted, so you keep an audit trail of what existed.

:::info
Company administrators with the `api_key.manage` permission can view and revoke every key in the company, not just their own. This is the view to use during a security review.
:::

## Common Issues

<details>
<summary>The API returns 401 with a key that looks correct</summary>

The key is revoked, expired, or was copied incompletely. Check the key's status in **My API keys**, and confirm you copied the entire secret including the `fsk_` prefix. If in doubt, revoke it and create a new one.

</details>

<details>
<summary>The API returns 403 for a request the key should allow</summary>

The key's scopes do not include the required permission, or your own permissions changed after you created the key. Check what the key can do by calling `/v1/me/permissions`, then create a new key with the right scopes if needed.

</details>

## Related Topics

- [Make Your First API Request](/integrations/public-api/making-api-requests) — Use your key to call the API
- [Connect Apps with OAuth](/integrations/public-api/connected-apps) — Let other users' apps access Fiskl instead of a personal key
- [Public API Overview](/integrations/public-api/overview) — How keys, OAuth, and webhooks fit together
- [Roles and Permissions](/team/roles-permissions) — How permissions control what a key can do
