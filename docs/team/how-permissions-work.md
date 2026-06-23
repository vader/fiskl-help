---
title: "How Permissions Work"
description: "How Fiskl enforces access across the app, API keys, and OAuth scopes, why the three don't always match, and the known differences to be aware of."
keywords: ["permissions", "access control", "API keys", "OAuth scopes", "RBAC", "read write", "credential"]
sidebar_position: 4
tags:
  - Team
  - Permissions
  - API
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import TOCInline from '@theme/TOCInline';

This guide explains how Fiskl decides what each person and integration can do. Permissions are enforced in three places — the app, API keys, and OAuth apps — and this guide covers how they relate and where they intentionally differ.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## The Three Places Permissions Apply

The same underlying permissions drive access everywhere, but each surface uses them slightly differently.

- **The app.** The interface shows or hides menus and buttons based on your permissions. Some actions you lack appear disabled with a tooltip; others are hidden entirely.
- **API keys.** A key carries a set of fine-grained permissions, such as `invoice.read`. You select these when you create the key, and you can only grant permissions you hold yourself. See [Create and Manage API Keys](/integrations/public-api/api-keys).
- **Connected apps (OAuth).** An app requests coarser **scopes**, such as `invoicing:read`, which expand to a set of permissions. The person authorising the app approves these scopes. See [Connect Apps with OAuth](/integrations/public-api/connected-apps).

## A Credential Never Exceeds Its Owner

Whatever a key or app is granted, the real access is always the overlap with what the owner can do:

**Effective access = the owner's permissions ∩ the key or app's scopes.**

Two consequences follow:

- A key scoped to `invoice.write` held by someone who loses invoice access can do nothing — the overlap is empty.
- Reducing a team member's permissions immediately narrows every key and app they created. There is nothing to re-sync.

## The Server Separates Read from Write

On the server, viewing and changing are distinct permissions for most areas — `invoice.read` versus `invoice.write`, `payment.read` versus `payment.write`, and so on. This separation is real for the API: a key or connected app granted only read access can view data but cannot change it.

This is why a read-only scope is genuinely read-only, and why you can safely give an integration `reports:read` without any risk of it altering your books.

## Known Differences Between the App and the API

The app sometimes groups permissions more coarsely than the server does, to keep the interface simple. These differences are deliberate. The table below lists the ones to be aware of.

| Area | On the server and API | In the app |
|---|---|---|
| **Accounting** | `accounting.read` and `accounting.write` are separate. A key or app with read access gets read-only ledger and report data. | The Accounting area is shown all-or-nothing. A member without accounting access does not see the accounting screens, and there is no separate read-only accounting view. |
| **Sensitive permissions** | Enforced individually on every request. | Grouped under an **Advanced** section in the permission grid, with a confirmation step before granting. Never offered to connected apps. |
| **Scopes vs permissions** | API keys use the full fine-grained permissions. | Connected apps use ~20 coarser scopes that each expand to several permissions, so app authorisation is broader than a single permission. |

:::info
This list reflects current behaviour and grows as the product evolves. The [Permissions Reference](/team/permissions-reference) shows, per permission, how it behaves in the app and which scope grants it to an integration.
:::

## Sensitive Permissions

Eleven permissions form the highest-risk set — editing invoice bank details, changing tax rates or FX rates, posting or closing the ledger, inviting users or changing their access, managing credentials, and cancelling the account. Fiskl treats them with extra care:

- They appear under an **Advanced** section in the permission grid and ask for confirmation before you grant them.
- They are **never** granted through OAuth scopes, so a connected app can never receive them.
- A team member can hold them directly, and an API key can include them if the person creating the key holds them.

## Common Questions

<details>
<summary>If I give someone read-only access, can they still change data through the API?</summary>

No. Read and write are separate permissions, and the API enforces them on every request. A read-only key or app can view data but cannot change it.

</details>

<details>
<summary>Why does a teammate with accounting read access not see accounting in the app?</summary>

The app shows the Accounting area all-or-nothing and does not offer a separate read-only accounting view. The read/write split is enforced for the API, not within the app's accounting screens. This is a known difference, listed above.

</details>

<details>
<summary>If I remove a permission from someone, what happens to the API keys they created?</summary>

Those keys lose that access immediately. A credential's real access is always the overlap of the owner's current permissions and the credential's scopes, recalculated on every request.

</details>

## Related Topics

- [Permissions Reference](/team/permissions-reference) — Every permission, its app behaviour, and its scope
- [User Roles and Permissions](/team/roles-permissions) — Presets and custom permission sets
- [Create and Manage API Keys](/integrations/public-api/api-keys) — Fine-grained permissions on a key
- [Connect Apps with OAuth](/integrations/public-api/connected-apps) — Scopes a connected app can request
