---
title: "Billing Time and Mileage"
description: "Learn how to add time and mileage entries to Fiskl invoices to bill clients accurately for work completed and travel expenses."
keywords: ["billing time", "billing mileage", "unbilled entries", "invoice line items", "time tracking invoice", "mileage invoice"]
sidebar_position: 3
tags:
  - Time & Mileage
  - Invoicing
---

This guide explains how to add time and mileage entries to invoices and bill clients accurately for work completed and travel expenses.

## Before You Begin

- Time and mileage entries must have a client assigned to appear in that client's unbilled entries list
- You can only add entries to invoices with a **Draft** status — revert sent or paid invoices to draft before making changes
- Entries without a client assigned appear as "Unassigned" and can be added to any invoice

## Understanding Billable Entries

When you add time or mileage entries to an invoice, each entry becomes a line item showing the description, rate, quantity, and total amount.

Entries remain available for billing until you add them to an invoice. After billing, each entry is linked to that specific invoice and moves from **Unbilled** to **Billed** status.

## Adding Entries to a New Invoice

### Add existing unbilled entries

1. Go to **Invoices** in the left sidebar
2. Select **+ New Invoice**
3. Select the client
4. In the line items section, select **Add items** > **Select existing**
5. Select **Client items**
6. Review the list of unbilled time and mileage entries for that client
7. Select the entries you want to include
8. Select **Add Selected**
9. Complete the remaining invoice details
10. Select **Save** or **Save & Send**

Each selected entry populates as a line item with the description, quantity, rate, and total.

### Add a new time or mileage entry

1. Go to **Invoices** in the left sidebar
2. Select **+ New Invoice**
3. Select the client
4. In the line items section, select **Add items**
5. Select **+ Add New**, then select **Time** or **Mileage**
6. Enter the entry details
7. Complete the remaining invoice details
8. Select **Save** or **Save & Send**

### More details options

Select **More details** on a line item to access additional fields.

**For time entries:**
- **Income ledger account** — assign the revenue ledger account this entry posts to
- **Currency** — set the billing currency; select the exchange rate field to adjust the rate if needed
- Toggle **Start – End Time** on to record specific start and end times

**For mileage entries:**
- **Income ledger account** — assign the revenue ledger account this entry posts to
- **Currency** — set the billing currency; select the exchange rate field to adjust the rate if needed
- **Distance entry method** — choose Direct (enter a distance), Odometer (enter start and end readings), or Maps (calculate from route)
- Toggle **Round Trip** on to double the distance automatically
- Toggle **Reimbursement** on if this is an employee reimbursement

## Adding Entries to an Existing Invoice

You can add time and mileage entries to any draft invoice.

1. Go to **Invoices**
2. Find and open the draft invoice
3. In the line items section, select **Edit**
4. Select **Add new** or **Select existing**
5. Review the list of unbilled entries for that client
6. Select the entries you want to include
7. Select **Add Selected**
8. Review the updated invoice totals
9. Select **Save** or **Send**

:::info
You can only add entries to draft invoices. To modify a sent or paid invoice, select the **Status** button and revert it to **Draft** first.
:::

## Selecting Multiple Entries

When viewing the unbilled entries list, select the checkbox next to each entry you want to include. To select all entries at once, select the checkbox next to **Type** at the top of the list. Then select **Add Selected**.

## Filtering Unbilled Entries

Use filters to find specific entries when you have many unbilled items.

1. When viewing unbilled entries, select **Filter**
2. Choose your filter criteria:
    - **Entry type** — time only or mileage only
    - **Client** — entries for a specific client
    - **Currency** — entries in a specific currency
3. Review the filtered results
4. Select the entries to add
5. Select **Add Selected**

## Editing Entries on Invoices

1. Open the draft invoice
2. Find the line item you want to edit
3. Select the line item
4. Modify the description, quantity, rate, or amount
5. Select **Save**

Changes are reflected in the entry in the time and mileage list, where the entry is marked as billed.

## Removing Entries from Invoices

1. Open the draft invoice
2. In the line items section, select **Edit**
3. Find the line item to remove
4. Select the delete icon

Removed entries return to your unbilled list and become available to add to other invoices.

## Viewing Billed Entries

1. Go to **Time** or **Mileage**
2. Select the filter button, then select **Billed** under type
3. Review the list of invoiced entries

## Handling Unbillable Work

If you have tracked time or mileage you don't intend to bill, you have several options:

- Leave the entry without a client assigned (it will not appear in any client's unbilled list)
- Do not add the entry to an invoice

## Reassigning Entries to a Different Client

Entries are organised by client. If an entry is assigned to the wrong client, reassign it before invoicing.

1. Go to **Time & Mileage**
2. Find the entry to reassign
3. Select the entry
4. Change the client
5. Select **Save**

:::tip
Entries without a client assigned appear as "Unassigned" and can be added to any invoice — useful for general work not tied to a specific client.
:::

## Customising How Entries Appear on Invoices

Time and mileage entries appear as invoice line items with the following columns:

| Column | Time entry | Mileage entry |
|---|---|---|
| Name and description | Entry name and any notes | Entry name and any notes |
| Unit | h | mi or km |
| Qty | Duration (e.g. 5h00) | Distance (e.g. 45) |
| Price/Rate | Your hourly rate | Your rate per mile or km |
| Line total | Calculated automatically | Calculated automatically |

**To hide units and quantity from the invoice:**

1. Go to **Settings** > **Invoice & Quote Settings** > **Templates and Brands**
2. Select the template
3. Select the **Display** tab
4. Toggle off **Units** and **Quantity**
5. Select **Save**

## Common Issues

<details>
<summary>An entry is missing from the unbilled list</summary>

The most common cause is that the entry has already been invoiced. Go to **Time** or **Mileage**, select the filter button, and filter by **Billed** to check.

If it isn't billed, check that the entry has a client assigned — unassigned entries don't appear in a client's unbilled list. Also confirm you're working on the correct client's invoice.

</details>

<details>
<summary>The wrong rate is showing on the invoice</summary>

You can update the rate directly on the invoice without removing the entry:

1. Open the draft invoice
2. Select the line item
3. Update the rate to the correct amount
4. Select **Save** to recalculate the totals

</details>

<details>
<summary>The exchange rate on a line item is incorrect</summary>

If a time or mileage entry is in a different currency to your invoice, the exchange rate is set at the time the entry was created. To correct it:

1. Open the draft invoice
2. Select the line item
3. Select **More details**
4. Select the exchange rate field and enter the correct rate
5. Select **Save**

</details>

<details>
<summary>Can't add entries to a sent or paid invoice</summary>

You can only add entries to draft invoices. To add entries to an invoice that has already been sent or paid:

1. Open the invoice
2. Select the **Status** button and revert it to **Draft**
3. Add the entries
4. Re-send the invoice

</details>

<details>
<summary>Need to move an entry to a different invoice</summary>

Remove the entry from the current invoice first — it returns to your unbilled list and becomes available to add elsewhere:

1. Open the draft invoice containing the entry
2. In the line items section, select **Edit**
3. Find the line item and select the delete icon
4. Open the correct invoice and add the entry

If the incorrect invoice has already been sent, revert it to **Draft**, remove the entry, then re-send. Open the correct invoice and add the entry there.

</details>

:::tip
**Ask Fi for help** — Fi is Fiskl's AI assistant, available in the top right of the screen. If an entry isn't appearing where you expect it, a rate looks wrong, or you're not sure how to handle a billing situation, Fi can walk you through it quickly.
:::

## Related Topics

- [Time Tracking](/time-and-mileage/time-tracking) — Track billable hours for clients
- [Mileage Tracking](/time-and-mileage/mileage-tracking) — Track business travel and distances
- [Creating Invoices](/invoicing/creating-invoices) — Generate client invoices from scratch
- [Invoice Management](/invoicing/invoice-management) — Edit, send, and manage invoices
- [Invoice & Quote Settings](/settings/invoice-quotes-settings) — Configure invoice defaults and templates
