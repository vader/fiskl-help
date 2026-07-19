---
title: "Deferred Revenue and Revenue Recognition"
description: "Recognise revenue you have been paid for in advance over the periods you earn it, with automated schedules in Fiskl. Also known as revenue recognition or unearned income."
keywords: ["deferred revenue", "revenue recognition", "unearned revenue", "unearned income", "deferred income", "recognise revenue", "advance payment", "subscriptions", "Fiskl accounting"]
sidebar_position: 7
toc_min_heading_level: 2
toc_max_heading_level: 3
tags:
  - Accounting
  - Schedules
  - Deferred Revenue
---

import TOCInline from '@theme/TOCInline';

This guide explains how to recognise revenue you have been paid for in advance across the periods you earn it, using an automated schedule in Fiskl. Deferred revenue is also known as **revenue recognition**, **unearned revenue**, or **deferred income** — the practice of recording income as you deliver the service, not when the money arrives.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

You need accounting write access and the journal entries feature on your plan to create or manage recognition schedules. Anyone with accounting read access can view them.

Record the advance payment first. The schedule recognises revenue you have already received and parked in a deferred revenue liability account. Enter the payment as an ordinary transaction against that liability account so it is ready to be recognised.

## What Deferred Revenue Does

A deferred revenue schedule takes an amount held in a liability account and moves it to a revenue account in equal instalments over the periods you earn it. This matches income to the periods in which you deliver the work, which is the core of accrual accounting.

Common examples include annual support contracts, prepaid retainers, and yearly subscriptions. The client pays up front, but you earn the money gradually as you deliver the service.

To open the register, go to **Accounting** > **Deferred Revenue**. When you create a schedule, Fiskl generates the complete recognition plan up front. You see every future entry — its date, amount, running total, and remaining balance — before anything posts. A background process then posts each entry as a journal on its due date.

The register shows key figures for your schedules:

- **Total schedules** — the number of active schedules you hold.
- **Unrecognised balance** — the value still sitting in your deferred revenue liability accounts.
- **Fully recognised** — schedules that have reached the end of their term.

:::info
Recognition entries post within about a minute of becoming due, not instantly. New or backdated entries show as *Pending* until Fiskl posts them, at which point they show as *Posted*.
:::

## The Accounting Behind Revenue Recognition

Each entry in the schedule posts the same journal:

- **Debit** the deferred revenue liability account — this reduces the balance you still owe as unearned income.
- **Credit** the revenue account — this recognises the income you have now earned.

Over the full term, the liability account winds down to zero and the total lands in your revenue, spread evenly across each period.

## Creating a Recognition Schedule

To create a schedule:

1. **Open the register**

   Go to **Accounting** > **Deferred Revenue** and select **New schedule**.

2. **Name the schedule**

   Enter a clear name, such as `Annual support contract`. Add a description if you want to reference a contract number.

3. **Select the accounts**

   Select the **Deferred revenue account** that holds the balance, and the **Revenue account** that receives the income each period. The two accounts must be different.

4. **Enter the amount**

   Enter the total amount to recognise. This is the full advance payment you want to spread.

5. **Set the first entry date**

   Enter the date of the first entry. This anchors the posting cadence.

6. **Set the frequency**

   Open **Advanced — frequency** to choose how often an entry posts and how many entries to create. The default is monthly for 12 entries.

7. **Review the plan**

   Check the live plan on the right. Fiskl calculates every figure — you never compute amounts yourself.

8. **Create the schedule**

   Select **Create schedule** to save. Fiskl schedules the recognition entries.

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
<summary>Is deferred revenue the same as revenue recognition?</summary>

They describe two sides of the same idea. Deferred revenue is the liability you hold for money received but not yet earned. Revenue recognition is the process of moving that balance into income as you deliver the service. This schedule handles both — it runs down the deferred revenue liability and recognises the revenue period by period.

</details>

<details>
<summary>How is this different from a prepayment?</summary>

A prepayment spreads a cost you have paid across future expense periods. Deferred revenue spreads income you have received across future revenue periods. They are mirror images — one runs down an asset into expenses, the other runs down a liability into income.

</details>

<details>
<summary>An entry shows a skipped status</summary>

The entry fell into a locked accounting period, so Fiskl could not post it. Editing the schedule's amount re-spreads the skipped value over the future entries, so no value is lost.

</details>

<details>
<summary>Can I change the amount after recognition has started?</summary>

Yes. Edit the schedule and change the amount or the number of entries. Fiskl keeps the posted entries as they are and re-spreads the remaining balance across the entries that have not yet posted. Only the first entry date and frequency lock once an entry posts.

</details>

## Related Topics

- [Prepayments and Amortisation](/accounting/prepayments) — Spread a cost you have paid in advance, the mirror image of deferred revenue.
- [Recurring Entries](/accounting/recurring-entries) — Post the same journal every period on a set frequency.
- [Fixed Assets and Depreciation](/accounting/fixed-assets) — Spread the cost of an asset over its useful life.
- [Managing your Chart of Accounts](/accounting/chart-of-accounts) — Set up the deferred revenue liability and revenue accounts you need.
