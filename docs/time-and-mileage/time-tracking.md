---
title: "Time tracking"
description: "Track time in Fiskl using manual entry or start and end times, and add it to client invoices."
keywords: ["time tracking", "billable hours", "hourly rate", "time entry", "time rounding"]
sidebar_position: 1
tags:
  - Time tracking
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to track time in Fiskl and add it to client invoices.

## Understanding time entries

Time entries in Fiskl are standalone records that represent work you have completed. Each entry captures the duration, rate, and details about the work performed.

Time entries remain separate from invoices until you are ready to bill. This lets you track work continuously and invoice clients on your preferred schedule.

## Creating a time entry

To create a new time entry:

1. Go to **Time** in the left sidebar
2. Select **+ New Time Entry**
3. Enter a name in the **Name** field (this appears on invoices)
4. Select the date the work was performed
5. Select the **Customer** (required for billable work)
6. Select the **Currency**
7. Select an **Income Account**
8. Select a **Tax** if applicable
9. Enter an optional **Description**
10. Enter the time and rate in the **Time & Rate** section
11. Select **Save**

### Manual time entry

By default, the **Time & Rate** section shows separate **Hours** and **Minutes** fields. Enter the total duration of work completed.

### Start and end times

Toggle **Start - End Time** on to switch to start and end time fields. Enter the **Start Date**, **Start Time**, **End Date**, and **End Time**. Fiskl calculates the **Calculated Duration** automatically.

## Time entry fields

Each time entry includes these details:

- **Name** — the entry label as it appears on invoices
- **Date** — when the work was performed
- **Customer** — who the work was for (leave empty for non-billable time)
- **Currency** — currency for the rate
- **Income Account** — ledger account to post income against
- **Tax** — applicable tax or tax group (optional)
- **Description** — additional notes about the work (optional)
- **Rate per Hour** — amount charged per hour

## Setting time rates

You can set rates at different levels to match your billing structure.

**Default rate:** Set your standard hourly rate in **Settings** > **User preferences** > **Tracking Settings**. Fiskl uses this rate for all new time entries.

**Client default rate:** Set a default rate for a specific client in **Sales** > **Customers**. This overrides the company default for all time entries linked to that client.

**Entry-specific rate:** Change the **Rate per Hour** when creating or editing individual time entries for special projects or circumstances.

## Billable vs non-billable time

Time entries can be billable or non-billable.

**Billable time:** Attach the time entry to an invoice to bill it to a client. Entries attached to an invoice can be filtered by **Billed**.

**Non-billable time:** Entries not attached to an invoice are filtered as **Unbilled**. Use this for internal work, administrative tasks, or professional development you do not charge to clients.

## Tracking time on mobile

The Fiskl mobile app includes all time tracking features, including timers and time rounding.

### Timer

The timer tracks time automatically as you work.

To use the timer:

1. Open the Fiskl mobile app
2. Go to **Time**
3. Select the play button to start the timer

The timer runs in the background while you work. Select **Pause** to pause it, or select **Log Time** to save and finish the entry.

:::tip
The timer continues running even if you navigate away in the app. Select **Pause** or **Log Time** to stop it.
:::

### Rounding time

To enable rounding, select the rounding options below the timer and select your preferred increment.

Available rounding options:

- 3 minutes (0.05 hours)
- 5 minutes (0.08 hours)
- 10 minutes (0.17 hours)
- 15 minutes (0.25 hours)
- 30 minutes (0.50 hours)

Fiskl rounds up to the next increment. For example, with 15-minute rounding, 1 hour and 8 minutes becomes 1 hour and 15 minutes.

## Editing time entries

Modify time entries before or after adding them to invoices.

To edit an unbilled time entry:

1. Go to **Time** in the left sidebar
2. Find the entry you want to edit
3. Select the entry
4. Make your changes
5. Select **Save**

Once added to an invoice, edit the entry directly on the invoice rather than in the time section.

## Deleting time entries

Remove time entries that were logged by mistake.

To delete a time entry:

1. Go to **Time** in the left sidebar
2. Find the entry to delete
3. Select the three-dot menu on the time entry
4. Select **Delete**
5. Confirm the deletion

:::warning
Deleting a time entry that is already on an invoice removes it from that invoice. Consider editing the invoice line item instead.
:::

## Common issues

<details className="blue-box">
<summary>Time entry shows wrong rate</summary>

The **Rate per Hour** field may have defaulted to your company default rather than a client-specific rate. Edit the time entry, update the **Rate per Hour** field, and select **Save**.

</details>

<details className="blue-box">
<summary>Can't find a time entry</summary>

Check the date range and filters:

1. Expand the date range in **Time**
2. Clear any active filters
3. Search by customer name or description
4. Check if the entry was already added to an invoice

</details>

## Related topics

- [Mileage tracking](/time-and-mileage/mileage-tracking) — Track business travel
- [Billing time and mileage](/time-and-mileage/billing-time-and-mileage) — Add entries to invoices
- [Creating invoices](/invoicing/creating-invoices) — Generate client invoices
- [Company settings](/settings/company-settings) — Configure default rates
