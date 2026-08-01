---
title: "Recurring Entries"
description: "Post the same journal entry every period on a set frequency in Fiskl. Also known as recurring journals or standing journal entries — ideal for rent, retainers, and subscriptions."
keywords: ["recurring entries", "recurring journals", "standing journals", "repeating journal entries", "scheduled journals", "rent", "retainers", "fixed journal", "Fiskl accounting"]
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 3
tags:
  - Accounting
  - Schedules
  - Recurring Entries
---

This guide explains how to post the same journal entry automatically every period on a set frequency in Fiskl. Recurring entries are also known as **recurring journals** or **standing journal entries** — a fixed amount posted on a repeating schedule rather than spread from a single balance.

## Before You Begin

You need accounting write access and the journal entries feature on your plan to create or manage recurring entries. Anyone with accounting read access can view them.

Recurring entries suit any journal you would otherwise post by hand on a regular basis, such as office rent, a monthly retainer, or a fixed subscription charge.

## What Recurring Entries Do

A recurring entry posts the same debit and credit for the same amount every period. Unlike a prepayment or a deferred revenue schedule, nothing is spread from a starting balance — each entry is a flat, identical journal.

To open the register, go to **Accounting** > **Recurring Entries**. When you create an entry, Fiskl generates the full plan up front. You see every future posting — its date and amount — before anything posts. A background process then posts each one as a journal on its due date.

The register shows key figures for your entries:

- **Total entries** — the number of active recurring entries you hold.
- **Remaining to post** — the value of the entries still scheduled.
- **Completed** — entries that have posted their full run.

:::info
Entries post within about a minute of becoming due, not instantly. New or backdated entries show as *Pending* until Fiskl posts them, at which point they show as *Posted*.
:::

## How Recurring Entries Differ from Schedules

Fiskl offers several automated schedule tools. Recurring entries are the simplest:

- **Recurring entries** post the same fixed amount each period. Nothing is spread — every entry is identical.
- **Prepayments** and **deferred revenue** take one starting balance and spread it across periods, winding an account down to zero.

Choose a recurring entry when the amount is the same each time and there is no balance to run down.

## Creating a Recurring Entry

To create an entry:

1. **Open the register**

   Go to **Accounting** > **Recurring Entries** and select **New schedule**.

2. **Name the entry**

   Enter a clear name, such as `Office rent`. Add a description if you want to reference a lease or agreement number.

3. **Select the accounts**

   Select the **Debit account** and the **Credit account** for the journal. The two accounts must be different. Any two ledger accounts are allowed, so a recurring entry can post any journal you need — for example, debit rent expense and credit the bank account.

4. **Enter the amount per period**

   Enter the amount to post each period. Every entry uses this same amount.

5. **Set the first entry date**

   Enter the date of the first entry. This anchors the posting cadence.

6. **Set the frequency**

   Open **Advanced — frequency** to choose how often an entry posts and how many entries to create. The default is monthly for 12 entries.

7. **Review the plan**

   Check the live plan on the right. It lists each posting date and amount.

8. **Create the entry**

   Select **Create entry** to save. Fiskl schedules the postings.

## Managing a Recurring Entry

Open any entry from the register to view its full details, plan, and available actions. The actions depend on the entry's status:

- **Pause** stops postings. The existing entries stay in place.
- **Resume** restarts a paused entry. Any postings that became due while paused post immediately.
- **Cancel** stops all future postings. Posted journals are kept.
- **Edit** changes the entry's details. You can still edit after some postings have been made.
- **Delete** removes a cancelled entry that has no posted journals.

### Editing After Entries Post

You can edit a recurring entry while it is active or paused, including after some postings have been made. Fiskl keeps the posted entries as they are and applies your changes to the entries that have not yet posted.

Once the first entry posts, the cadence is fixed — you cannot change the first entry date or the frequency. Everything else stays editable, including the amount per period and the accounts.

:::info
A recurring entry never uses accounts receivable or accounts payable directly, because it posts as a journal. Use ledger accounts such as expense, income, and bank accounts.
:::

## Common Issues

<details>
<summary>Should I use a recurring entry or a recurring invoice?</summary>

A recurring entry posts a journal directly to your ledger accounts, with no invoice or client involved. A recurring invoice bills a client on a schedule. Use a recurring entry for internal bookkeeping such as rent, and a recurring invoice when you need to charge a client.

</details>

<details>
<summary>What is the difference between a recurring entry and a prepayment?</summary>

A recurring entry posts the same fixed amount each period, with no starting balance. A prepayment spreads one balance across periods until it reaches zero. If the amount repeats and nothing runs down, use a recurring entry.

</details>

<details>
<summary>An entry shows a skipped status</summary>

The entry fell into a locked accounting period, so Fiskl could not post it. The remaining entries are unaffected and continue on schedule.

</details>

<details>
<summary>An entry is showing a missing-entry warning</summary>

The posted journal for that entry was deleted. Posted entries are ordinary journals, so they can be edited or deleted. When one is deleted, Fiskl marks the line with a warning and does not re-post it.

</details>

## Related Topics

- [Prepayments and Amortisation](/accounting/schedules/prepayments) — Spread a prepaid cost across the periods it covers.
- [Deferred Revenue and Revenue Recognition](/accounting/schedules/deferred-revenue) — Recognise advance income over the periods you earn it.
- [Multi-journal Entries](/accounting/journal-entries/multi-journal-entries) — Record a one-off complex journal across multiple accounts.
- [Recurring Invoices](/invoicing/create-recurring-invoices) — Bill a client automatically on a schedule.
