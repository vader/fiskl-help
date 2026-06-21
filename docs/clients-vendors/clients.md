---
title: "Clients"
description: "Add and manage clients in Fiskl — set default currencies, billing rates, Tax/VAT IDs, and keep invoicing records accurate."
keywords: ["clients", "client management", "invoicing", "multi-currency", "time billing", "Tax ID", "VAT ID", "GoCardless"]
sidebar_position: 2
tags:
  - Clients
  - Invoicing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide covers how to add and manage clients in Fiskl. Clients are the individuals and businesses that pay you — keeping their records accurate ensures your invoices, quotes, and financial reports reflect the right information.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## What You Can Do

- Add clients and store their contact and address details
- Set a default currency for each client's invoices
- Configure hourly billing rates for time-based invoicing
- Store a Tax or VAT ID for use on invoices
- Add notes about the client relationship
- View GoCardless mandate status on the client record
- Archive inactive clients without losing their history

## Adding a Client

1. Go to **Sales** > **Clients**.
2. Select **+ New Client**.
3. Enter the client's name, email address, and country.
4. Enter the billing address (optional).
5. Select **Add Tax/VAT ID** if required (optional).
6. Select **Add Notes** to record any details about the client relationship (optional).
7. Set the **Default currency** for this client's invoices.
8. Set a **Default time rate** if you bill this client by the hour.
9. Select **Save**.

You can also add a client directly when creating an invoice or quote — select **Create new client** from the client dropdown and complete the details.

:::tip
Set the default currency before creating your first invoice for a client. Changing it later does not update existing invoices.
:::

## Client Settings

### Default Currency

The default currency controls which currency appears on new invoices for that client. Fiskl handles exchange rate conversion automatically. You can override the currency on any individual invoice.

### Default Time Rate

Set an hourly rate for clients you bill by time. This rate pre-fills when you add time entries to an invoice and can be overridden on individual entries. See [Time Tracking](/time-and-mileage/time-tracking) for more.

### Tax/VAT ID

Enter the client's Tax or VAT ID to have it appear on invoices. This is useful for B2B invoicing where clients require their registration number on documents.

### Notes

Select **Add Notes** on the client record to store information about the client relationship. Notes are visible only to your team and do not appear on invoices or quotes.

### GoCardless Mandate

If you use GoCardless, the mandate status for each client appears on their record under **GoCardless Mandate**. The panel shows the mandate ID, creation date, and payment scheme alongside the current status:

- **Success** — Active and ready for automatic collection
- **Pending** — The client has not yet completed authorisation
- **Revoked** — The client cancelled or authorisation failed

See [GoCardless Integration](../integrations/payments/gocardless-integration.md) to get started.

## Managing Your Client List

Go to **Sales** > **Clients** to view your client list. Search by name or filter by status (**Active** or **Archived**). Select any client to edit their details — changes apply to future invoices only.

To archive a client, open their record and select **Archive**. Archived clients remain in your records and reports. Set the status filter to **Archived** to view them.

:::warning
Only clients with no invoices or quotes can be deleted. Archive inactive clients instead to preserve your financial history.
:::

## Common Issues

<details>
<summary>The wrong currency appears on a new invoice</summary>

Check the client's **Default currency** setting. Go to **Sales** > **Clients**, select the client, and confirm the currency is correct. Update it if needed — the correct currency will apply to new invoices going forward.

</details>

<details>
<summary>A mandate shows as Pending and the client isn't being charged</summary>

The client has not completed GoCardless authorisation. Ask them to check their email for the mandate setup link. If the link has expired, resend the invoice with the mandate option enabled to trigger a new request.

</details>

<details>
<summary>I can't find an archived client</summary>

Go to **Sales** > **Clients** and set the status filter to **Archived**. Archived clients are hidden from the default **Active** view but remain fully accessible.

</details>

## Related Topics

- [Vendors](/clients-vendors/vendors) — Add and manage the businesses you pay
- [Creating Invoices](/invoicing/creating-invoices) — Create and send invoices to your clients
- [GoCardless Integration](../integrations/payments/gocardless-integration.md) — Set up direct debit collection
- [Time Tracking](/time-and-mileage/time-tracking) — Track and bill time against clients
- [Client Aging Report](/reporting/client-aging) — View outstanding balances by client
- [Statement of Accounts](../reporting/statement-of-accounts.md) — Generate client account statements
