---
title: "Create Recurring Invoices"
description: "Set up recurring invoices in Fiskl to automate billing schedules, send invoices automatically, and include unbilled time, mileage, and expenses."
keywords: ["recurring invoices", "automated billing", "invoice schedule", "auto-send invoice", "recurring billing", "Fiskl invoicing"]
sidebar_position: 5
tags:
  - Invoicing
  - Recurring
  - Automation
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Recurring invoices let you automate billing for clients you invoice on a regular basis. You set up a schedule once, and Fiskl creates and sends the invoices for you — reducing manual work and keeping your cash flow consistent.

## Before You Begin

- Make sure the client you want to bill exists in Fiskl. See [Clients](../clients-vendors/clients.md) for setup instructions.
- If you plan to include unbilled time, mileage, or expenses, record those entries before creating the recurring invoice.
- To use a reusable product or service template with placeholders, set it up in [Products and Services](../products-services/creating-products.md) first.

## Create a Recurring Invoice

A recurring invoice has two parts: a **schedule** that controls when invoices are created and sent, and an **invoice template** that defines what each invoice contains.

### Set Up the Schedule

1. In the left sidebar, select **Sales**
2. Select **New Recurring Invoice**
3. Set the **Start Date** for your first invoice
4. Select the billing frequency — weekly, monthly, or another interval
5. For a custom frequency (for example, every two weeks), select **Custom** and enter your preferences
6. Select when the schedule ends:
   - Select **Runs indefinitely** to continue until you stop it manually
   - Set an **End Date** to stop on a specific date
   - Set a number of occurrences to stop after a fixed number of invoices
7. Set the **Auto-send** toggle:
   - Toggle **Auto-send** on to have Fiskl create and send each invoice automatically
   - Toggle **Auto-send** off to have Fiskl create the invoice as a draft and notify you when it is ready to review
8. To include unbilled items, select the **Unbilled Items** checkbox and select the item types to include — **Time**, **Mileage**, or **Expenses**

:::tip
Fiskl saves your recurring schedule settings and applies them as defaults the next time you create a recurring invoice.
:::

### Create the Invoice Template

Complete the invoice template the same way you would a standard invoice. See [Creating Invoices](creating-invoices.md) for full details on line items, tax settings, and payment terms.

:::info
For products or services that repeat across invoices, you can create a template in **Products and Services** with dynamic placeholders. For example: "1-year gardening contract for [client_name], expires [day+1Y]/[month+1Y]/[year+1Y]". When added to a recurring invoice, Fiskl fills in the placeholders automatically.
:::

## Start the Schedule

Once your template is complete, select **Start Schedule** to activate the recurring invoice.

**What happens next depends on your Auto-send setting:**

| Setting | Fiskl action | You receive |
|---|---|---|
| Auto-send on | Creates and sends the invoice, marks it as **Sent** | An email notification the day before each invoice is sent |
| Auto-send off | Creates the invoice, marks it as **Draft** | An email notification when each invoice is ready to send |

## Manage a Recurring Invoice

After saving a recurring invoice, select the **More** button to access these actions:

- **Edit** — Update the template or schedule settings
- **Print** — Download or print the current template
- **End Schedule** — Stop future invoices from being created

For a full list of management options, see [Recurring Invoice Management](recurring-invoice-management.md).

## Common Issues

<details>
<summary>Unbilled items are not appearing in the recurring invoice</summary>

Unbilled items only appear if they have been recorded against the same client and are not already included on another invoice.

1. Verify the time, mileage, or expense entries are assigned to the correct client
2. Check that the entries have not already been billed on a previous invoice
3. IVerify the **Unbilled Items** checkbox is selected and the correct item types are enabled

</details>

<details>
<summary>The recurring invoice is not sending automatically</summary>

If invoices are being created as drafts instead of sending automatically, the **Auto-send** toggle may be off.

1. Select **More** next to the recurring invoice
2. Select **Edit**
3. Toggle **Auto-send** on
4. Select **Save**

</details>

## Related Topics

- [Creating Invoices](create-recurring-invoices.md) — How to build a standard invoice template
- [Recurring Invoice Management](recurring-invoice-management.md) — Edit, pause, and review recurring invoices
- [Sending Invoices](sending-invoices.md) — Manual sending options and delivery settings
- [Products and Services](../products-services/creating-products.md) — Set up reusable product and service templates
- [Time Tracking](../time-and-mileage/time-tracking.md) — Record billable time to include in recurring invoices
- [Mileage Tracking](../time-and-mileage/mileage-tracking.md) — Record billable mileage to include in recurring invoices
