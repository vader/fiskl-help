---
title: "Prepayments and Amortisation"
description: "Spread a prepaid expense over the periods it covers with automated amortisation schedules in Fiskl. Also known as prepaid expenses or deferred charges."
keywords: ["prepayments", "prepaid expenses", "amortisation", "deferred charges", "prepaid amortisation", "spread expense", "accruals", "straight line", "Fiskl accounting"]
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
tags:
  - Accounting
  - Schedules
  - Prepayments
---

import TOCInline from '@theme/TOCInline';

This guide explains how to spread a prepaid expense across the periods it covers using an automated amortisation schedule in Fiskl. Prepayments are also known as **prepaid expenses**, **deferred charges**, or **prepaid amortisation** — the practice of recognising a cost gradually over time rather than all at once.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

You need accounting write access and the journal entries feature on your plan to create or manage amortisation schedules. Anyone with accounting read access can view them.

Record the original payment first. The prepayment schedule spreads a cost you have already recorded — it does not record the purchase itself. Enter the payment as an ordinary transaction against a prepaid asset account so the balance sits on your balance sheet, ready to be amortised.

## What Prepayments Do

A prepayment schedule takes an amount held in a prepaid asset account and moves it to an expense account in equal instalments over the periods it covers. This matches the cost to the periods that benefit from it, rather than charging the full amount in the month you paid.

Common examples include annual insurance premiums, rent paid in advance, and yearly software subscriptions. You pay once, but the benefit is spread across the whole term.

To open the register, go to **Accounting** > **Prepayments**. When you create a schedule, Fiskl generates the complete amortisation plan up front. You see every future entry — its date, amount, running total, and remaining balance — before anything posts. A background process then posts each entry as a journal on its due date.

The register shows key figures for your schedules:

- **Total schedules** — the number of active schedules you hold.
- **Unamortised balance** — the value still sitting in your prepaid asset accounts.
- **Fully amortised** — schedules that have reached the end of their term.

:::info
Amortisation entries post within about a minute of becoming due, not instantly. New or backdated entries show as *Pending* until Fiskl posts them, at which point they show as *Posted*.
:::

## The Accounting Behind a Prepayment

Each entry in the schedule posts the same journal:

- **Debit** the expense account — this recognises the cost for the period.
- **Credit** the prepaid asset account — this reduces the balance held on your balance sheet.

Over the full term, the prepaid asset account winds down to zero and the total cost lands in your expenses, spread evenly across each period.

## Creating a Prepayment Schedule

To create a schedule:

1. **Open the register**

   Go to **Accounting** > **Prepayments** and select **New schedule**.

2. **Name the schedule**

   Enter a clear name, such as `Annual insurance premium`. Add a description if you want to reference a policy or contract number.

3. **Select the accounts**

   Select the **Prepaid asset account** that holds the balance, and the **Expense account** that receives the cost each period. The two accounts must be different.

4. **Enter the amount**

   Enter the total amount to amortise. This is the full balance you want to spread.

5. **Set the first entry date**

   Enter the date of the first entry. This anchors the posting cadence.

6. **Set the frequency**

   Open **Advanced — frequency** to choose how often an entry posts and how many entries to create. The default is monthly for 12 entries.

7. **Review the plan**

   Check the live plan on the right. Fiskl calculates every figure — you never compute amounts yourself.

8. **Create the schedule**

   Select **Create schedule** to save. Fiskl schedules the amortisation entries.

## Managing a Schedule

Open any schedule from the register to view its full details, plan, and available actions. The actions depend on the schedule's status:

- **Pause** stops entries from posting. The existing entries stay in place.
- **Resume** restarts a paused schedule. Any entries that became due while paused post immediately.
- **Cancel** stops all future entries. Posted journals are kept.
- **Edit** changes the schedule's details. You can still edit a schedule after entries have posted.
- **Delete** removes a cancelled schedule that has no posted journals.

### Editing After Entries Post

You can edit a schedule while it is active or paused, including after some entries have posted. Fiskl keeps the posted entries as they are and re-spreads the remaining amount across the entries that have not yet posted.

Once the first entry posts, the cadence is fixed — you cannot change the first entry date or the frequency. Everything else stays editable. Change the amount or the number of entries, and Fiskl re-spreads the remaining balance across the pending entries, starting from the next one due.

:::info
Posted and skipped entries never change when you edit. Only the pending entries are re-spread.
:::

## Common Issues

<details>
<summary>What is the difference between a prepayment and an accrual?</summary>

A prepayment spreads a cost you have already paid across future periods. An accrual records a cost you have incurred but not yet paid. Prepayment schedules in Fiskl handle the first case — an amount already sitting in a prepaid asset account.

</details>

<details>
<summary>An entry shows a skipped status</summary>

The entry fell into a locked accounting period, so Fiskl could not post it. Editing the schedule's amount re-spreads the skipped value over the future entries, so no value is lost.

</details>

<details>
<summary>Can I change the amount after amortisation has started?</summary>

Yes. Edit the schedule and change the amount or the number of entries. Fiskl keeps the posted entries as they are and re-spreads the remaining balance across the entries that have not yet posted. Only the first entry date and frequency lock once an entry posts.

</details>

<details>
<summary>An entry is showing a missing-entry warning</summary>

The posted journal for that entry was deleted. Posted entries are ordinary journals, so they can be edited or deleted. When one is deleted, Fiskl marks the line with a warning and does not re-post it.

</details>

## Related Topics

- [Deferred Revenue and Revenue Recognition](/accounting/schedules/deferred-revenue) — Spread income you have been paid for in advance, the mirror image of a prepayment.
- [Recurring Entries](/accounting/schedules/recurring-entries) — Post the same journal every period on a set frequency.
- [Fixed Assets and Depreciation](/accounting/schedules/fixed-assets) — Spread the cost of an asset over its useful life.
- [Managing your Chart of Accounts](/accounting/chart-of-accounts) — Set up the prepaid asset and expense accounts you need.
