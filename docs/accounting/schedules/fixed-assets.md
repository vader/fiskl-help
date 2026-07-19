---
title: "Fixed Assets and Depreciation"
description: "Register fixed assets, automate depreciation, and dispose of assets in Fiskl. Learn why disposal proceeds use the Undeposited Funds account and how to match the bank payment."
keywords: ["fixed assets", "depreciation", "asset disposal", "undeposited funds", "straight line depreciation", "gain on disposal", "loss on disposal", "accumulated depreciation", "Fiskl accounting"]
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 3
tags:
  - Accounting
  - Fixed Assets
  - Depreciation
---

import TOCInline from '@theme/TOCInline';

This guide explains how the Fixed Assets register works in Fiskl, how depreciation is scheduled and posted automatically, and how to dispose of an asset. It gives special attention to recording disposal proceeds through the **Undeposited Funds** account, which is the correct way to handle the money you receive from a sale.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Before You Begin

You need accounting write access and the journal entries feature on your plan to register, edit, or dispose of assets. Anyone with accounting read access can view the register.

Record the purchase of the asset first. The Fixed Assets register schedules and posts depreciation — it does not record the original purchase. Enter the purchase as an ordinary transaction against the correct fixed-asset account (for example, **Vehicles** or **Office Equipment**) so the asset appears on your balance sheet.

## What the Fixed Assets Register Does

The Fixed Assets register is where you track each asset, its book value, and its depreciation. To open it, go to **Accounting** > **Fixed assets**.

When you register an asset, Fiskl generates the complete depreciation plan up front. You see every future entry — its date, amount, running total, and remaining book value — before anything posts. A background process then posts each entry as a journal on its due date.

The register shows key figures for your assets:

- **Total assets** — the number of active assets you hold.
- **Net book value** — the current value of your assets after depreciation.
- **Fully depreciated** — assets that have reached the end of their depreciation and may be ready for disposal.

Each asset row shows its category, original cost, net book value, depreciation method, and progress.

:::info
Depreciation entries post within about a minute of becoming due, not instantly. New or backdated entries show as *Pending* until Fiskl posts them, at which point they show as *Posted*.
:::

## Registering an Asset

To register a fixed asset:

1. **Open the register**

   Go to **Accounting** > **Fixed assets** and select **New asset**.

2. **Choose the depreciation method**

   Select the method first, because it determines which fields you complete below.

3. **Enter the asset details**

   Enter the asset name, the GL fixed-asset account, the acquisition cost, the residual value, and the useful life in years.

4. **Set the dates**

   Enter the acquisition date and the first entry date.

5. **Review the plan**

   Check the live depreciation plan on the right. Fiskl calculates every figure — you never compute amounts yourself.

6. **Register the asset**

   Select **Register asset** to save. Fiskl schedules the depreciation entries.

When you select the GL fixed-asset account, Fiskl pre-fills the matching accumulated depreciation account. You can override it with any ledger account.

### Depreciation Methods

Fiskl supports four depreciation methods:

- **Straight line (SL)** — an equal charge every period. Best for assets that wear evenly, such as furniture, buildings, and fit-outs.
- **Double declining balance (DDB)** — an accelerated method with a heavy early charge that tapers off, switching to straight line near the end so the asset lands exactly on its residual value. Best for vehicles and IT equipment.
- **Sum of years' digits (SYD)** — an accelerated method that is gentler than double declining balance, weighted toward the early years.
- **Custom** — an approved custom rule, such as a jurisdiction table. The rule determines the number of entries. See [Custom depreciation rules](#custom-depreciation-rules).

### Posting Frequency

Posting frequency controls how often a depreciation entry posts to your ledger. It is separate from the depreciation amounts, which come from the method or rule.

For example, an annual rule can post yearly as one entry per year, or monthly with each year's charge spread across 12 entries. The total depreciation for each year is the same — only the ledger detail changes. Most businesses that produce monthly management accounts choose monthly posting.

## Managing an Asset

Open any asset from the register to view its full details, depreciation schedule, and available actions. The actions depend on the asset's status:

- **Pause** stops depreciation from posting. The existing entries stay in place.
- **Resume** restarts a paused asset. Any entries that became due while paused post immediately.
- **Cancel** stops all future entries. Posted journals are kept and the asset stays on your balance sheet.
- **Edit** changes the asset's details. You can still edit an asset after entries have posted — see [Editing an Asset After Entries Post](#editing-an-asset-after-entries-post).
- **Dispose** removes the asset from your books and records the gain or loss. See [Disposing of an Asset](#disposing-of-an-asset).

### Editing an Asset After Entries Post

You can edit an asset at any time while it is active or paused, including after some depreciation entries have posted. Fiskl keeps the posted entries as they are and recalculates the remaining ones.

Once the first entry posts, the cadence is fixed — you cannot change the first entry date or the posting frequency. Everything else stays editable:

- Change the residual value, the total cost, or the number of entries, and Fiskl re-spreads the remaining depreciable amount across the entries that have not yet posted. The recalculation starts from the next entry due to post.
- Change the name or the accounts, and future entries use the new values. Account changes never touch entries that have already posted.

This means you can adjust an asset partway through its life without starting over, and without disturbing your posted figures.

:::info
Custom-rule assets are the exception. Once an entry posts, you cannot edit a custom-rule asset, because changing it would diverge from the approved rule. To change how it depreciates, create a new version of the rule and register a new asset.
:::

### Editing or Deleting a Posted Entry

Each depreciation entry posts as an ordinary journal. Posted entries are not locked — you can open any of them and edit or delete it the same way you handle any manual journal.

If you delete a posted entry's journal, Fiskl flags it on the asset. The affected line shows a missing-entry warning so you can see that its journal was removed. Fiskl does not re-post a deleted entry.

## Disposing of an Asset

Disposal removes an asset from your books when you sell it, scrap it, or write it off. Fiskl posts one disposal journal that clears the accumulated depreciation, removes the asset at its original cost, records any sale proceeds, and books the resulting gain or loss.

To dispose of an asset:

1. **Open the asset**

   Open the asset from the register and select **Dispose**.

2. **Enter the disposal date**

   The date must not fall in a locked accounting period.

3. **Enter the sale proceeds**

   Enter the amount you received. Leave it empty to write the asset off.

4. **Select where the proceeds go**

   Select the account that receives the money. See [Recording the Sale Proceeds](#recording-the-sale-proceeds).

5. **Review the summary**

   Check the original cost, accumulated depreciation, net book value, and the resulting gain or loss.

6. **Confirm**

   Select **Dispose asset** to post the disposal journal.

After disposal, the asset shows a **Disposed** status. Disposal is final — you cannot pause, resume, edit, or cancel a disposed asset. You can still open the disposal journal from the asset's detail page.

:::info
Fiskl does not post a final partial period of depreciation on disposal. The disposal clears the depreciation that has posted to date.
:::

### Recording the Sale Proceeds

This is the most important part of a disposal to get right.

Record the sale proceeds against the **Undeposited Funds** account, not the bank account directly and not accounts receivable. **Undeposited Funds** is a holding, or clearing, account that sits under **Cash & Cash Equivalents**. Its only job is to hold money that is on its way to the bank.

The workflow is:

1. **Dispose the asset into Undeposited Funds**

   In the disposal dialog, select **Undeposited Funds** as the account that receives the proceeds. The disposal journal debits **Undeposited Funds** for the sale amount.

2. **Wait for the bank payment to arrive**

   Your bank feed brings in the actual deposit when the money lands in your bank account.

3. **Match the bank payment to Undeposited Funds**

   When the deposit appears in your bank feed, match it against the amount sitting in **Undeposited Funds**. This clears the holding account, which nets to zero once both sides are recorded.

This keeps a single source of truth for the cash in your bank account — the bank feed — and avoids recording the same money twice.

:::warning
Do not record the proceeds straight into your bank account if your bank feed also brings in the deposit. Both entries would then record the same money, overstating your bank balance. Always route the proceeds through **Undeposited Funds** and match the feed against it.
:::

### Why You Cannot Use the Bank or Accounts Receivable

The disposal posts through a journal, and a journal cannot post directly to a bank account or to accounts receivable as a free-standing line. This is why Fiskl offers money accounts such as **Undeposited Funds** and **Cash on Hand** for the proceeds, rather than the bank account or accounts receivable.

- **Undeposited Funds** is the correct choice when you have been paid, or expect the payment to arrive in your bank feed. You match the bank deposit against it.
- **Cash on Hand** works for physical cash, but a dedicated clearing account keeps electronic proceeds separate and easier to review.

A non-zero balance in **Undeposited Funds** flags money that has not yet been matched to the bank, so it doubles as a reminder of unreconciled items.

### Gain and Loss Accounts

Fiskl calculates the gain or loss automatically as the sale proceeds minus the net book value. A positive result is a gain; a negative result is a loss.

By default, Fiskl posts both gains and losses to a single **Gain/Loss on Asset Disposal** account. Some jurisdictions, such as Germany, require separate accounts. To use separate accounts, toggle **Post gain and loss to separate accounts** in the disposal dialog. Because Fiskl knows whether the disposal is a gain or a loss, it shows only the account that applies and pre-fills it. You can override it with any income or expense account.

## Custom Depreciation Rules

A custom rule is a declarative depreciation table, such as a jurisdiction-specific rate schedule (for example, 40/20/20/20 percent of cost over four years). Custom rules live on their own screen and are approved before any asset can use them.

To manage custom rules, go to **Accounting** > **Fixed assets** and select **Depreciation rules**.

The lifecycle of a custom rule is:

1. **Author the rule**

   Create a rule with a name and a rate schedule. The rates must sum to exactly 100 percent. A live preview shows the exact plan the rule produces on a sample asset.

2. **Approve the rule**

   Approve the rule to make it usable. Approval is a deliberate step, taken with the preview in front of you, because every asset that uses the rule depreciates exactly as approved.

3. **Use the rule on an asset**

   When you register an asset, select the **Custom** method and choose an approved rule.

Approved rules are locked. To change a rule, create a new version, which starts as a new draft.

:::info
An asset that uses a custom rule cannot be edited once entries have posted. To change how it depreciates, create a new version of the rule and register a new asset.
:::

## Common Issues

<details>
<summary>I disposed of an asset but the money hasn't reached my bank yet</summary>

This is expected. Record the proceeds against **Undeposited Funds** at disposal. When the deposit arrives in your bank feed, match it against the amount in **Undeposited Funds**. The holding account nets to zero once both sides are recorded.

</details>

<details>
<summary>I can't select my bank account or accounts receivable for the sale proceeds</summary>

The disposal posts through a journal, which cannot post directly to a bank account or to accounts receivable. Select **Undeposited Funds** instead, then match the bank deposit against it when it arrives. This is the standard way to record disposal proceeds.

</details>

<details>
<summary>My Undeposited Funds account has a leftover balance</summary>

A balance in **Undeposited Funds** means a deposit has not yet been matched. Open your bank feed, find the deposit for the sale, and match it against the amount in **Undeposited Funds**. The account should return to zero once matched.

</details>

<details>
<summary>I need separate gain and loss accounts for my country</summary>

In the disposal dialog, toggle **Post gain and loss to separate accounts**. Fiskl shows the account that matches whether the disposal is a gain or a loss, and pre-fills it. You can override it with any income or expense account.

</details>

<details>
<summary>I disposed of the wrong asset or entered the wrong amount</summary>

Disposal posts an ordinary journal. Open the disposal journal from the asset's detail page and edit the affected lines, the same way you edit any manual journal.

</details>

<details>
<summary>Can I change the residual value or cost after depreciation has started?</summary>

Yes. Edit the asset and change the residual value, cost, or number of entries. Fiskl keeps the posted entries as they are and re-spreads the remaining depreciable amount across the entries that have not yet posted, starting from the next one due. Only the first entry date and posting frequency lock once an entry posts. Custom-rule assets are the exception — they cannot be edited after an entry posts.

</details>

<details>
<summary>A depreciation entry is showing a missing-entry warning</summary>

The posted journal for that entry was deleted. Posted depreciation entries are ordinary journals, so they can be edited or deleted. When one is deleted, Fiskl marks the line with a warning and does not re-post it. If the deletion was a mistake, recreate the journal manually, or edit the asset to re-spread the remaining amount.

</details>

## Related Topics

- [Matching and Splitting Transactions](/accounting/journal-entries/guides/match-and-split-transactions) — Match the bank deposit against Undeposited Funds after a disposal.
- [Internal Transfers](/accounting/journal-entries/guides/internal-transfers) — Move money between your business accounts.
- [Account Reconciliation](/accounting/reconciliation/overview) — Keep your bank records and transactions in agreement.
- [Managing your Chart of Accounts](/accounting/chart-of-accounts) — Set up the asset and depreciation accounts you need.
