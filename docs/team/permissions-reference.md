---
title: "Permissions Reference"
description: "A complete reference of every Fiskl permission, what it controls, how it behaves in the app, and which OAuth scope grants it to API integrations."
keywords: ["permissions", "permission reference", "RBAC", "scopes", "API permissions", "access control", "read write"]
sidebar_position: 3
tags:
  - Team
  - Permissions
  - Reference
toc_min_heading_level: 2
toc_max_heading_level: 2
---

This guide lists every permission in Fiskl, grouped by area. For each permission it shows what the permission controls, how it behaves in the app, and which OAuth scope grants it to a connected app. Use it to assign access precisely and to understand how the same permission applies across the app and the API.

## How to Read This Reference

Each area below has a table with four columns:

- **Permission** — the stable key you see in the permission grid and in API responses, such as `invoice.read`. A ⚠ marks a sensitive permission.
- **What it controls** — the capability the permission grants.
- **In the app** — how the permission affects what you see and do in the Fiskl interface.
- **OAuth scope** — the scope a connected app requests to gain this permission. A dash (—) means the permission is **not available to OAuth apps**.

Two rules explain most of the table, and are covered in full in [How Permissions Work](/team/how-permissions-work):

- **The server separates read from write.** An API key or connected app with read access gets read-only access — it can view but not change. The **app** mostly mirrors this, but a few screens are coarser: the accounting transaction ledger requires write access even to view (see Accounting).
- **Sensitive permissions are never granted through OAuth.** A connected app can never receive the eleven sensitive permissions; they are available only to a team member directly, or to an API key whose creator holds them.

## Contacts

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `client.read` | View clients | See the Clients list and open client records | `contacts:read` |
| `client.write` | Create and update clients | Add and edit clients | `contacts:write` |
| `client.delete` | Delete and restore clients | Delete and restore clients | `contacts:write` |
| `vendor.read` | View vendors | See the Vendors list and open vendor records | `contacts:read` |
| `vendor.write` | Create and update vendors | Add and edit vendors | `contacts:write` |
| `vendor.delete` | Delete and restore vendors | Delete and restore vendors | `contacts:write` |

## Line Items

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `billing_item.read` | View line items attached to invoices and bills | See line items on documents | `invoicing:read` |
| `billing_item.write` | Create, update, and attach line items | Add and edit line items | `invoicing:write` |
| `billing_item.delete` | Remove line items | Remove line items | `invoicing:write` |

## Invoices and Bills

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `invoice.read` | View invoices | See the Invoices list and open invoices | `invoicing:read` |
| `invoice.write` | Create, update, and save draft invoices | Add and edit invoices | `invoicing:write` |
| `invoice.send` | Send invoices to customers | Email or share invoices | `invoicing:write` |
| `invoice.void` | Void or cancel issued invoices | Void issued invoices | `invoicing:write` |
| `invoice.delete` | Delete draft invoices | Delete draft invoices | `invoicing:write` |
| `bill.read` | View vendor bills | See the Bills list and open bills | `bills:read` |
| `bill.write` | Create and update bills | Add and edit bills | `bills:write` |
| `bill.delete` | Delete bills | Delete bills | `bills:write` |

## Quotes

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `quote.read` | View quotes | See the Quotes list and open quotes | `invoicing:read` |
| `quote.write` | Create, update, accept, reject, or convert quotes | Add and edit quotes, change their status | `invoicing:write` |
| `quote.send` | Send quotes to clients | Email or share quotes | `invoicing:write` |
| `quote.delete` | Delete draft quotes | Delete draft quotes | `invoicing:write` |

## Expenses

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `expense.submit` | Submit expenses through the field-employee workflow | Submit expenses; the list shows your own submissions | — |

## Payments

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `payment.read` | View payments recorded against invoices and bills | See payments on documents | `payments:read` |
| `payment.write` | Record payments and mark invoices paid | Record a payment, mark an invoice paid | `payments:write` |
| `payment.refund` | Refund payments | Refund a recorded payment | `payments:write` |
| `payment.delete` | Delete payment records | Delete a payment | `payments:write` |
| `payment_instruction.read` | View bank details and payment instructions on invoices | See payment instructions on invoices | `payments:read` |
| `payment_instruction.write` ⚠ | Edit bank details on a customer-facing invoice | Edit invoice payment instructions | — |

## Accounting

In the app, `accounting.read` opens a read-only view of the **Chart of Accounts** and all **Reports**. The **transaction ledger** — the Transactions and Multi Journal screens — requires `accounting.write` even to view, because the app does not offer a read-only ledger view. The financial widgets on the main dashboard also require `accounting.write`. On the server the split is cleaner: an API key or connected app with `accounting.read` gets genuine read-only access to all ledger and report data. See [How Permissions Work](/team/how-permissions-work).

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `accounting.read` | View the ledger, journals, chart of accounts, and accounting summaries | View the Chart of Accounts and all Reports (read-only) | `accounting:read` |
| `accounting.write` ⚠ | Post manual journal entries, edit the chart of accounts | View, create, and edit the transaction ledger (Transactions, Multi Journal) and accounts; also gates the dashboard financial widgets | — |
| `accounting.reconcile` | Reconcile bank transactions to ledger entries | Match and reconcile transactions | `accounting:write` |
| `accounting.close` ⚠ | Close and lock accounting periods | Lock a period | — |

## Banking Connections

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `bank_connection.read` | View connected bank accounts and their status | See bank connections | `banking:read` |
| `bank_connection.write` | Add, connect, and refresh bank connections | Connect and refresh banks | `banking:write` |
| `bank_connection.delete` | Disconnect bank connections | Disconnect a bank | `banking:write` |

## Reports

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `report.read` | View accounting reports | Open reports such as Profit and Loss | `reports:read` |
| `report.export` | Export reports | Export a report to PDF or CSV | `reports:read` |

## FX Rates

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `fx_rate.read` | View FX rates and any active overrides | See exchange rates | `accounting:read` |
| `fx_rate.write` ⚠ | Override FX rates for a date or period | Set an FX rate override | — |

## Tax

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `tax.read` | View tax registration numbers, rates, and tax groups | See tax setup | `taxes:read` |
| `tax.write` ⚠ | Configure tax numbers, rates, and groups | Edit tax setup | — |

## Products and Services

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `product.read` | View products, services, and expense categories | See the catalogue | `products:read` |
| `product.write` | Create and update catalogue items | Add and edit catalogue items | `products:write` |
| `product.delete` | Delete catalogue items | Delete catalogue items | `products:write` |

## Inventory

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `inventory.read` | View tracked items, stock levels, and stock movement history | See **Inventory** > **Items**, open an item, and see live stock in invoice and bill pickers | — |
| `inventory.write` | Turn on tracking for a product and maintain item settings | Add and edit items, set SKU, unit of measure, reorder point, and account overrides; archive items | — |
| `inventory.adjust` | Adjust stock and record client returns | Use **Adjust Stock** and **Record Count**, and post client returns | — |

Read access is the floor for this whole area. Every inventory screen requires `inventory.read` first, and the other two are checked on top of it. Someone with `inventory.write` but no `inventory.read` cannot reach the screens at all.

`inventory.adjust` is separate from `inventory.write` because adjusting stock posts to your ledger, while editing an item's SKU or reorder point does not. Give `inventory.write` to whoever maintains the catalogue, and reserve `inventory.adjust` for whoever is trusted to change stock values and the accounts behind them.

## Purchase Orders

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `purchase_order.read` | View purchase orders | See **Inventory** > **Purchase Orders** and open orders | — |
| `purchase_order.write` | Create, update, close, and cancel purchase orders | Add and edit orders, and close or cancel them | — |
| `purchase_order.send` | Send purchase orders to vendors | Mark an order as sent and email it to the vendor | — |
| `purchase_order.delete` | Delete purchase orders | Delete orders | — |

Downloading an order as a PDF needs only `purchase_order.read`. Emailing it to the vendor needs `purchase_order.send`, so you can let someone print or file an order without letting them contact vendors.

## Goods Receipts

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `goods_receipt.read` | View goods receipts | See receipts against a purchase order and open them | — |
| `goods_receipt.write` | Create, update, and delete draft receipts | Record what arrived and edit or delete a draft | — |
| `goods_receipt.post` | Post and void goods receipts | Post a receipt, which moves stock and posts to your ledger, and void a posted receipt | — |

This is the split that matters most for warehouse staff. `goods_receipt.write` lets someone record what physically arrived; `goods_receipt.post` is what actually moves stock and writes to the ledger. Voiding a posted receipt reverses those postings, which is why it needs `goods_receipt.post` rather than `goods_receipt.write`.

:::info
None of these ten permissions are available to OAuth apps. A connected app cannot read stock levels, raise purchase orders, or post goods receipts, whatever scopes it requests. They are available only to a team member directly, or to an API key whose creator holds them.
:::

## Brand

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `brand.read` | View brand profiles and document templates | See brand settings | — |
| `brand.write` ⚠ | Edit brand name, logo, sender address, default payment instructions, and templates | Edit brand settings | — |

## Integrations

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `integration.read` | View connected integrations | See connected services | — |
| `integration.write` | Connect, configure, and refresh integrations; manage webhooks | Connect services and open the webhook portal | — |
| `integration.delete` | Disconnect integrations | Disconnect a service | — |

## Team Management

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `user.read` | View team members and their access | See the team list | — |
| `user.invite` ⚠ | Invite new users | Send invitations | — |
| `user.write` | Edit existing users' details | Edit member details | — |
| `user.assign_role` ⚠ | Change a member's preset or permissions | Edit access in the permission grid | — |
| `user.delete` | Remove users from the company | Remove a member | — |

## Accountant Relationship

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `accountant.read` | View connected accountants | See connected accountants | — |
| `accountant.write` | Invite accountants and manage their access | Invite and manage accountants | — |
| `accountant.delete` | Disconnect accountants | Remove an accountant | — |

## Company

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `company.read` | View company settings | See company settings | `company:read` |
| `company.write` | Edit company settings such as address and fiscal year | Edit company settings | `company:write` |

## Audit

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `audit.read` | View the change history and email delivery records for the company | Open the **Audit Log** from the avatar menu, and view a record's history from its dialog | — |

Audit access is a read gate of its own, separate from `accounting.read`. Read-only roles and accountants can review history without being able to change anything. See [Audit Log](/settings/audit-log).

## Subscription

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `subscription.manage` | Upgrade, downgrade, and manage billing details | Change the plan and billing | — |
| `subscription.delete` ⚠ | Cancel the subscription and end the account | Cancel the account | — |

## API Access

| Permission | What it controls | In the app | OAuth scope |
|---|---|---|---|
| `api_key.create` | Create your own API keys | Create personal API keys | — |
| `api_key.manage` ⚠ | View and revoke any credential in the company | Manage all company keys | — |
| `oauth_app.install` | Authorise third-party apps | Connect an app | — |
| `oauth_app.manage` ⚠ | View and revoke any OAuth app in the company | Register and manage connected apps | — |

## Common Questions

<details>
<summary>Why can a read-only API key see the transaction ledger when a teammate with the same level cannot?</summary>

The server enforces `accounting.read` and `accounting.write` separately, so an API key or connected app with read access genuinely gets read-only access to all accounting data, including the ledger. In the **app**, a teammate with `accounting.read` sees the Chart of Accounts and Reports, but the transaction ledger (Transactions, Multi Journal) requires `accounting.write` even to view — the app does not offer a read-only ledger view, because separating read-only viewing across every ledger screen would be a large change. This is a known difference between the app and the API. See [How Permissions Work](/team/how-permissions-work).

</details>

<details>
<summary>Why can't I grant a connected app permissions like `accounting.write` or `tax.write`?</summary>

Those are sensitive permissions. They are never available through OAuth scopes, so a third-party app can never receive them. A team member can hold them directly, and an API key can include them if the person who created the key holds them.

</details>

<details>
<summary>What does a dash (—) in the OAuth scope column mean?</summary>

The permission is not granted by any OAuth scope, so a connected app cannot receive it. The permission still works for team members in the app, and for API keys whose creator holds it.

</details>

## Related Topics

- [How Permissions Work](/team/how-permissions-work) — How the app, API keys, and OAuth scopes enforce access
- [User Roles and Permissions](/team/roles-permissions) — The seven presets and how to build a custom set
- [Public API Overview](/integrations/public-api/overview) — Using scopes and keys with the API
- [Connect Apps with OAuth](/integrations/public-api/connected-apps) — Which scopes an app can request
