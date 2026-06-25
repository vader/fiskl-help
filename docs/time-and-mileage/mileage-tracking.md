---
title: Mileage Tracking
description: Learn how to track business mileage in Fiskl using manual entry,
  odometer readings, or Google Maps to capture travel expenses for billing and
  tax.
sidebar_position: 3
---


This guide explains how to track mileage in Fiskl and helps you capture business travel expenses for client billing and tax deductions.



## Before You Begin

To get the most out of mileage tracking, set these up in advance:

- Set your preferred distance unit in **Settings** > **User Preferences** — this becomes the default for all new entries
- Set your default mileage rate in **Settings** > **User Preferences** — Fiskl uses this rate for all new entries so you don't need to enter it each time
- Add your clients in **Clients** if you plan to bill mileage — you can also create a client directly from the mileage entry form

## Creating a Mileage Entry

All mileage entries share the same basic information fields. The method you select for calculating distance determines the fields in the **Distance & Rate** section below.

### Basic Information

1. In the left sidebar, select **Time & Mileage**
2. Select **New Mileage Entry**
3. Enter a name for the entry in the **Name** field — use a description that identifies the trip purpose
4. Set the **Date** of travel
5. Select a **Client** if the mileage is billable
6. Select the **Currency** for the entry
7. Select an **Account** — defaults to **Sales - Other**
8. Select a **Tax** or tax group if applicable
9. Enter an optional **Description** with any additional trip details

### Distance & Rate

Select your preferred method from the three tabs in the **Distance & Rate** section.

#### Manual Entry

Enter the distance directly when you know the exact mileage.

1. Select the **Manual Entry** tab
2. Enter the distance and select **Miles** or **Kilometres**
3. Enter the **Rate per mi** (or km)
4. Toggle **Return Trip** on if the mileage covers both directions — Fiskl doubles the distance automatically
5. Toggle **Reimbursement** on if this entry is eligible for expense reimbursement

#### Odometer

Record start and end odometer readings for precise distance tracking.

1. Select the **Odometer** tab
2. Enter the starting odometer reading
3. Enter the ending odometer reading
4. Select **Miles** or **Kilometres**
5. Enter the rate per mile or kilometre
6. Toggle **Return Trip** or **Reimbursement** as needed

Fiskl calculates the distance by subtracting the start reading from the end reading.

#### Google Maps

Let Fiskl calculate distance automatically using start and end locations.

1. Select the **Google Maps** tab
2. Enter the starting address or location
3. Enter the ending address or location
4. Review the calculated distance on the map
5. Confirm or adjust the rate per mile or kilometre
6. Toggle **Return Trip** or **Reimbursement** as needed

Google Maps uses the most efficient route to calculate distance. Review the route on the map before saving.

### Save the Entry

Select **Save** to record the mileage entry. Fiskl calculates the total cost by multiplying distance by rate.

## Setting Mileage Rates

You can set rates at three levels to match your billing or tax requirements.

**Default rate** — Set your standard rate in **Settings** > **User Preferences**. Fiskl uses this rate for all new entries.

**Client-specific rate** — Override the default for a specific client. Go to **Clients**, select the client, and set a custom mileage rate.

**Entry-specific rate** — Change the rate when creating or editing an individual entry for special circumstances.

:::info
Many tax authorities publish standard mileage rates for business travel deductions. Update your default rate annually to stay compliant with current guidelines.
:::

## Billable vs. Non-Billable Mileage

Selecting a client on a mileage entry marks it as billable. Leave the **Client** field empty to mark the entry as non-billable.

Track both types to maximise tax deductions and analyse travel costs across your business.

## Attaching Images

Add photos to mileage entries for verification and record-keeping.

1. Create or open a mileage entry
2. Select **Attach Image**
3. Select a photo from your device or take a new one
4. Add an optional caption
5. Select **Save**

Useful images to attach include odometer readings at the start and end of a trip, parking receipts, toll receipts, and photos documenting the business purpose of the trip.

## Editing and Deleting Entries

**To edit an unbilled entry:** Go to **Time & Mileage**, select the entry, make your changes, and select **Save**.

**To edit a billed entry:** Edit the entry directly on the invoice rather than in the mileage tracking section.

**To delete an entry:**

1. In the left sidebar, select **Time & Mileage**
2. Select the menu on the mileage entry and select **Delete**
3. Confirm the deletion

:::caution
Deleting a mileage entry that is already on an invoice removes it from that invoice. Consider editing the invoice line item instead.
:::

## Distance Units

Fiskl supports both miles and kilometres. To change your preferred unit, go to **Settings** > **User Preferences**, find **Distance Unit**, select **Miles** or **Kilometres**, and select **Save**.

All future entries use your selected unit. Existing entries remain in their original unit.

## Common Issues

Google Maps shows the wrong distance

The route may use highways when you took local roads.

1. Review the route shown on the map
2. If the route is incorrect, switch to the **Manual Entry** tab
3. Enter the actual distance from your odometer
4. Add a note in the **Description** field explaining the discrepancy



Mileage rate is incorrect on an entry

The entry may be using your default rate instead of a client-specific rate.

1. Check the client's custom rate in **Clients**
2. Open the mileage entry and update the rate manually
3. To prevent this in future, set the correct rate at the client level



Need to switch from miles to kilometres

1. Go to **Settings** > **User Preferences**
2. Update the **Distance Unit** to **Kilometres**
3. Select **Save**

Existing entries remain in their original unit. Add a note to older entries if you need to clarify units.



## Related Topics

- [Time Tracking](/time-and-mileage/time-tracking) — Track billable hours alongside mileage
- [Billing Time and Mileage](/time-and-mileage/billing-time-and-mileage) — Add mileage entries to client invoices
- [Creating Invoices](/invoicing/creating-invoices) — Generate invoices for clients
- [Company Settings](/settings/company-settings) — Configure default mileage rates and distance units

