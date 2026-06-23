---
title: "User Roles and Permissions"
description: "Understand Fiskl's seven permission presets and how to fine-tune access with custom permissions so each team member gets exactly the access they need."
keywords: ["user roles", "permissions", "presets", "access control", "RBAC", "Owner", "Admin", "Accountant", "Bookkeeper"]
sidebar_position: 2
tags:
  - Team
  - Permissions
  - Access control
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how access works in Fiskl: you assign each team member a **preset** as a starting point, then optionally fine-tune their exact permissions. It covers the seven presets, how to assign them, and how to build a custom permission set.

## How Access Is Assigned

Each team member has a set of permissions that control what they can see and do. You assign access in two steps:

1. **Pick a preset** — a ready-made bundle of permissions for a common job, such as Bookkeeper or Read-only.
2. **Fine-tune if needed** — adjust individual permissions in the permission grid. A member whose permissions no longer match a preset exactly is shown as **Custom**.

Permissions are fine-grained: most areas separate viewing (read) from changing (write), and some add further actions such as sending, deleting, or reconciling. For the full list, see the [Permissions Reference](/team/permissions-reference).

:::info
Permissions also govern API access. An API key or connected app can never do more than its owner — see [How Permissions Work](/team/how-permissions-work).
:::

## The Seven Presets

Use a preset as the starting point that best matches a person's job.

| Preset | Who it's for | Access in brief |
|---|---|---|
| **Owner** | The person who owns the account | Everything, including subscription and billing. Only the Owner can end the account. |
| **Admin** | Power user running day-to-day operations | Everything except subscription and billing control. |
| **Accountant** | External professional doing your books | Full bookkeeping through period-end and tax, with reports and export. No team management, branding, integrations, or API access. |
| **Bookkeeper** | In-house daily bookkeeping | Day-to-day invoicing, bills, payments, and reconciliation. Can view tax setup but not change it, and cannot close periods. |
| **Invoice Only** | Sales reps and office admins | Clients, invoices, quotes, and recording payments received. No accounting or banking. |
| **Expense Submitter** | Field employees | Submit expenses and manage line items only. |
| **Read-only** | Auditors, board members, due diligence | View everything and export reports. No changes anywhere. |

### Owner is special

Every account has exactly one Owner, tied to the subscription. You cannot assign the Owner preset to someone else from the permission screen — instead, transfer ownership. See [Inviting and Managing Users](/team/inviting-users).

## Build a Custom Permission Set

When no preset fits, start from the closest one and adjust individual permissions in the grid.

To edit a member's permissions, go to **Settings** > **Team** and select the member, then open the permission grid. Select or clear individual permissions, then select **Save**.

- Permissions are grouped by area, such as Invoicing, Payments, and Accounting.
- Most areas have separate view and edit permissions, so you can grant read-only access to one area and full access to another.
- A member with `user.assign_role` can grant permissions they do not hold themselves. This lets an office manager set up an external Accountant with period-end access without holding it personally.

:::warning
Some permissions are sensitive — for example editing bank details on invoices, changing tax rates, or managing API keys. They appear under an **Advanced** section and ask you to confirm before granting. Grant them only when the person genuinely needs them. See the [Permissions Reference](/team/permissions-reference) for the full list.
:::

## Choose the Right Preset

- Needs to manage billing and the subscription → **Owner** (one per account).
- Runs operations but should not control billing → **Admin**.
- An outside accountant closing the books and filing tax → **Accountant**.
- In-house staff doing daily books, but not period-end → **Bookkeeper**.
- Raises invoices and quotes, takes payments → **Invoice Only**.
- Only submits expenses from the field → **Expense Submitter**.
- Should see everything but change nothing → **Read-only**.

## Best Practices

- **Least privilege.** Start from the narrowest preset that covers the job, then add permissions only as needed.
- **Review regularly.** Re-check assignments as responsibilities change.
- **Limit Owner and Admin.** Keep these to a small number of trusted people.
- **Use Read-only or Accountant for outsiders.** Never give external professionals Admin access.
- **Deactivate promptly.** When someone leaves, remove their access the same day.

## Related Topics

- [Permissions Reference](/team/permissions-reference) — Every permission, what it controls, and how it behaves in the app and the API
- [How Permissions Work](/team/how-permissions-work) — How the app, API keys, and OAuth scopes enforce access
- [Inviting and Managing Users](/team/inviting-users) — Add team members and assign their access
- [Public API Overview](/integrations/public-api/overview) — Using permissions and scopes with API keys and connected apps
