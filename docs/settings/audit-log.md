---
title: "Audit Log"
description: "See who changed what across your books and what happened to every email you sent. Review record history, filter changes, and check email delivery in Fiskl."
keywords: ["audit log", "audit trail", "change history", "who changed", "email delivery", "record history", "accountability"]
sidebar_position: 5
tags:
  - Settings
  - Accounting
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

The Audit Log shows who changed what across your books, and what happened to every email you sent. Use it to answer questions after the fact: who edited an amount, when a setting changed, or whether a client received their invoice.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

You need the `audit.read` permission to open the Audit Log. Owners and Admins have it, as do the Accountant, Bookkeeper, and Read-only roles.

The Audit Log is deliberately readable by read-only roles. An accountant reviewing your books can check history without being able to change anything.

## Opening the Audit Log

1. Select your avatar in the bottom-left corner
2. Select **Audit Log**

The screen opens on the **Changes** tab. A second tab, **Email delivery**, covers outgoing email.

## What Fiskl Records

Change tracking captures edits to the records that affect your accounts and your money:

- **Transactions** — accounting transactions and journal entries
- **Clients** and **Vendors**
- **Company settings** — including the locked period, base currency, fiscal year end, and tax defaults
- **Payment instructions** — the bank details shown to clients on invoices
- **Payments** — amounts, dates, and status recorded against invoices

Every entry records who made the change and when. It also records whether a person made the change, or an automated process such as a bank feed, a payment provider, or a scheduled journal.

:::info
Change tracking captures edits from the moment it went live. Records last saved before then have no history — this is stated on screen rather than shown as "never edited", which would be misleading.
:::

## Reviewing Changes

The **Changes** tab lists changes newest first. Each entry shows the person or process responsible, the record affected, and what happened — **Created**, **Edited**, or **Deleted**.

Select any row to expand its full history in place. The history shows each change to that record over time. Expand a single change to see the fields that changed, with their before and after values.

Changes saved together are grouped, labelled **Grouped because they were saved together**. This grouping is based on records sharing a save timestamp, so it reflects one save rather than a formally recorded batch.

:::info
Ledger account and tax names shown in history are their current names. Amounts, dates, and text are exactly as recorded at the time. Renaming a ledger account changes how older history reads.
:::

### Filtering Changes

Four filters narrow the list:

- **Date changed** — the period you want to review
- **Record type** — transactions, clients, vendors, company settings, payment instructions, or payments
- **What happened** — created, edited, or deleted
- **Changed by** — a specific teammate, or **System** for automated changes

Each filter shows how many changes match. If your filters return nothing, Fiskl states how many changes exist in total, so an over-narrow filter is never mistaken for an empty log.

## Checking Email Delivery

The **Email delivery** tab shows every email Fiskl sent on your behalf, including invoices and quotes.

Each row shows when it was sent, the type of email, the recipients, and the outcome. Statuses include **Delivered**, **Sent**, **Queued**, **Bounced**, **Marked as spam**, **Rejected**, and **Error**.

When an email bounces or is marked as spam, Fiskl explains the reason in plain language rather than showing the raw provider response. This tells you whether the address is wrong, the mailbox is full, or the recipient's mail server refused the message.

:::tip
If a client says they never received an invoice, check this tab before resending. A **Bounced** status usually means the email address needs correcting on the client record.
:::

## Reviewing a Single Record

You do not need the Audit Log to check one transaction. Open the transaction and select **View history** in the dialog to see its full change history in place.

The Audit Log is the better route for reviewing activity across your whole account. It also holds the history of records that have since been deleted.

## Common Issues

<details>
<summary>I cannot see the Audit Log in my menu</summary>

The Audit Log requires the `audit.read` permission. Owners, Admins, Accountants, Bookkeepers, and Read-only roles have it by default. If your role should include it, ask an Owner or Admin to check your permissions. See [Permissions Reference](/team/permissions-reference).

</details>

<details>
<summary>A record shows no history</summary>

Change tracking captures edits from the point it went live. A record last saved before then has nothing recorded, which Fiskl states directly rather than claiming the record was never edited. Any change from now on appears in the log.

</details>

<details>
<summary>A change is listed as made by "System"</summary>

Not every change comes from a person. Bank feeds, payment providers, scheduled journals, receipt scanning, and automated categorisation all write to your books. These are recorded as System changes, and the log names the process responsible where it can.

</details>

<details>
<summary>The history shows a ledger account name I no longer use</summary>

Names shown in history are resolved when you view the page, so they reflect current names. Amounts, dates, and text are stored exactly as recorded at the time. If a ledger account has been renamed, older history shows the new name.

</details>

## Related Topics

- [Locked Period](/settings/locked-period) — Close your accounts up to a set date to protect finalised figures
- [Accounting Settings](/settings/accounting-settings) — Configure the locked period and other accounting preferences
- [Permissions Reference](/team/permissions-reference) — What each permission grants, including audit access
- [Roles and Permissions](/team/roles-permissions) — Assign roles to your team
