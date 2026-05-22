---
title: "Time Tracking"
description: "Track billable hours in Fiskl using timers, manual entry, or start/end times. Learn best practices for accurate time tracking and client billing."
keywords: ["time tracking", "billable hours", "timer", "hourly rate", "time entry", "productivity tracking"]
sidebar_position: 2
---

# Time Tracking

This guide explains how to track time in Fiskl and helps you capture every billable hour for accurate client invoicing.

## Understanding Time Entries

Time entries in Fiskl are standalone records that represent work you've completed. Each entry captures the duration, rate, and details about the work performed.

Time entries remain separate from invoices until you're ready to bill. This lets you track work continuously and invoice clients on your preferred schedule.

## Time Entry Methods

Fiskl offers three methods for tracking time to match your workflow.

### Using the Timer

The timer tracks time automatically as you work.

**To use the timer:**

1. Go to **Time & Mileage** in the left sidebar
2. Select **New Time Entry**
3. Select **Timer**
4. Enter a description of the task
5. Select the client (for billable work)
6. Select **Start Timer**

The timer runs in the background while you work. Select **Stop Timer** when finished. Fiskl calculates the duration automatically.

:::tip
The timer continues running even if you close your browser or navigate to other pages in Fiskl. It stops only when you select **Stop Timer**.
:::

### Manual Time Entry

Enter completed work by typing hours and minutes directly.

**To enter time manually:**

1. Go to **Time & Mileage** in the left sidebar
2. Select **New Time Entry**
3. Select **Manual Entry**
4. Enter the duration (e.g., 2h 30m or 2.5h)
5. Enter the date the work was performed
6. Enter a description
7. Select the client (for billable work)
8. Enter or confirm the hourly rate
9. Select **Save**

Fiskl accepts time in hours and minutes (2h 30m) or decimal format (2.5h).

### Start and End Times

Record when you started and finished work. Fiskl calculates the duration.

**To use start and end times:**

1. Go to **Time & Mileage** in the left sidebar
2. Select **New Time Entry**
3. Select **Start/End Times**
4. Enter the start time
5. Enter the end time
6. Enter the date
7. Enter a description
8. Select the client (for billable work)
9. Enter or confirm the hourly rate
10. Select **Save**

Fiskl automatically calculates the duration based on your start and end times.

## Time Entry Components

Each time entry includes these details:

- **Duration**: Hours and minutes worked
- **Rate**: Amount charged per hour
- **Date**: When the work was performed
- **Description**: What you worked on
- **Client**: Who the work was for (optional for non-billable time)
- **Project**: Project or task category (optional)

## Setting Time Rates

You can set rates at different levels to match your billing structure.

**Default rate:**
Set your standard hourly rate in **Settings** > **Company Settings**. Fiskl uses this rate for all new time entries.

**Client-specific rate:**
Override the default rate for specific clients. Go to **Clients**, select a client, and set their custom hourly rate.

**Entry-specific rate:**
Change the rate when creating or editing individual time entries for special projects or circumstances.

## Rounding Time

Professional services often bill in standard increments. Fiskl can round your time entries automatically.

**Available rounding options:**
- 3 minutes (0.05 hours)
- 5 minutes (0.08 hours)
- 10 minutes (0.17 hours)
- 15 minutes (0.25 hours)
- 30 minutes (0.50 hours)

**To enable rounding:**

1. Go to **Settings** > **Company Settings**
2. Find the **Time Rounding** section
3. Select your preferred increment
4. Select **Save**

Fiskl rounds up to the next increment. For example, with 6-minute rounding, 1 hour and 4 minutes becomes 1 hour and 6 minutes.

## Billable vs. Non-Billable Time

Time entries can be billable or non-billable.

**Billable time:**
Work that will be charged to clients. Mark time as billable when creating the entry by selecting a client.

**Non-billable time:**
Internal work, administrative tasks, or professional development. Leave the client field empty to mark time as non-billable.

You can track both types to analyze total time spent versus billable hours.

## Tracking Time on Mobile

The Fiskl mobile app includes all time tracking features.

**Mobile features:**
- Start and stop timers
- Enter time manually
- Record start and end times
- Set rates and descriptions
- Mark entries as billable or non-billable

Track time immediately when you complete work to ensure accuracy.

## Editing Time Entries

Modify time entries before or after adding them to invoices.

**To edit an unbilled time entry:**

1. Go to **Time & Mileage**
2. Find the entry you want to edit
3. Select the entry
4. Make your changes
5. Select **Save**

**To edit a billed time entry:**
Once added to an invoice, edit the entry directly on the invoice rather than in the time tracking section.

## Deleting Time Entries

Remove time entries that were logged by mistake.

**To delete a time entry:**

1. Go to **Time & Mileage**
2. Find the entry to delete
3. Select the entry
4. Select **Delete**
5. Confirm the deletion

:::warning
Deleting a time entry that's already on an invoice removes it from that invoice. Consider editing the invoice line item instead.
:::

## Custom Name Templates

Customize how time entries appear on invoices.

**To set a time name template:**

1. Go to **Settings** > **Company Settings**
2. Find **Time Name Template**
3. Enter your template using available variables:
    - `{date}` - Date of work
    - `{duration}` - Hours worked
    - `{description}` - Entry description
4. Select **Save**

Example template: `{date} - {duration} hours: {description}`

## Best Practices

**Start tracking immediately:**
Begin the timer or log time right when you start work. Accuracy decreases when you try to remember hours later.

**Use detailed descriptions:**
Write clear descriptions that explain what you worked on. Clients appreciate transparency, and you'll understand entries months later.

**Review regularly:**
Check your unbilled time entries weekly. This ensures you don't forget to invoice clients and helps identify productivity patterns.

**Set accurate rates:**
Keep your hourly rates current and reflective of your expertise. Review rates quarterly and update as your skills grow.

**Track everything:**
Record both billable and non-billable time. This reveals how you spend your day and helps identify opportunities to increase billable hours.

**Round consistently:**
If your industry has standard billing increments, enable rounding to match. Consistency builds client trust.

## Common Issues

<details>
  <summary>Timer didn't stop and shows excessive hours</summary>

If the timer ran longer than intended, edit the time entry manually:
1. Go to **Time & Mileage**
2. Select the entry
3. Change the duration to the correct amount
4. Select **Save**
</details>

<details>
  <summary>Time entry shows wrong rate</summary>

The rate might be using your default instead of a client-specific rate:
1. Check the client's custom rate in **Clients**
2. Edit the time entry and update the rate
3. Consider setting the correct rate at the client level
</details>

<details>
  <summary>Can't find a time entry</summary>

Check the date range and filters:
1. Expand the date range in **Time & Mileage**
2. Clear any active filters
3. Search by client name or description
4. Check if it was already added to an invoice
</details>

## Related Topics

- [Mileage Tracking](mileage-tracking.md) - Track business travel
- [Billing Time and Mileage](billing-time-and-mileage.md) - Add entries to invoices
- [Creating Invoices](../invoicing/creating-invoices.md) - Generate client invoices
- [Company Settings](../settings/company-settings.md) - Configure default rates