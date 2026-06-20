---
title: "Currency Management"
description: "Manage exchange rates in Fiskl. Set custom rates for specific dates or periods to control how currency conversions appear in transactions and reports."
keywords: ["currency management", "exchange rates", "multi-currency", "custom rates", "currency override", "Fiskl settings"]
sidebar_position: 4
slug: /settings/currency-management
tags:
  - Settings
  - Currency Management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains how to view and manage exchange rates in Fiskl. Use Currency Management to override system rates for specific dates or periods, giving you consistent currency conversion across transactions and reports. All exchange rates are calculated relative to your account's base currency.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Access Currency Management

Go to **Settings** > **Currency Management**.

## What you can see

The Currency Management screen shows all currencies active in your account. Use the **Date** selector to view rates for a specific date, and **Filter Currencies** to narrow the list.

The rate table shows the following columns for each currency (the examples below use USD as the base currency):

- **Currency** — currency code and name
- **1 Base to Currency** — how many units of that currency equal one unit of your base currency (e.g. 1 USD = 0.921 EUR)
- **1 Currency to Base** — how many base currency units equal one unit of that currency (e.g. 1 EUR = 1.086 USD)
- **System Rate** — the rate Fiskl applies automatically
- **Status** — shows **System** when the system rate is active, or **Custom** when you have set a manual override
- **Actions** — select the edit icon to add or update a custom rate

## Add a custom rate

Custom rates override the system rate for a specific date or date range. Use them when a contract, hedge agreement, or group policy requires a fixed rate.

1. Go to **Settings** > **Currency Management**
2. Select **+ Add Custom Rate**
3. Select the currency from the **Currency** dropdown
4. Set the **Effective Period** — defaults to today's date. To apply the rate across multiple days, select the date field and set a start and end date
5. Enter the exchange rate in the **Exchange Rate** field as the number of foreign currency units equal to one unit of your base currency (e.g. 1 USD = 0.921 EUR)
6. Select **Save**

The **Status** column for that currency updates to **Custom**.

## Edit a custom rate

1. Go to **Settings** > **Currency Management**
2. Select the edit icon in the **Actions** column for the currency you want to update
3. Update the **Effective Period** or **Exchange Rate** as needed
4. Select **Save**

## Remove a custom rate

1. Go to **Settings** > **Currency Management**
2. Select the edit icon in the **Actions** column for the currency
3. Select the **×** next to the date in the **Effective Period** field
4. Select **Clear selection** from the calendar pop-up
5. Select **Save**

The **Status** column reverts to **System**.

:::tip
Review your custom rates at the start of each reporting period to confirm they still reflect your business requirements.
:::

## When to use custom rates

<details>
<summary>Long-term projects with fixed budgets</summary>

Currency fluctuations can distort budget-to-actual comparisons on long-term international projects. Setting a consistent rate for the project period keeps reporting focused on operational performance rather than market movements.

</details>

<details>
<summary>Hedge rate application</summary>

If your business uses forward contracts or other hedging instruments, you can apply the secured rate to future transactions. This aligns your accounting records with your financial risk management position.

</details>

<details>
<summary>Fixed-rate contracts</summary>

Some contracts specify a fixed exchange rate for the duration of the agreement. Entering that rate in Currency Management ensures your invoices and reports reflect the agreed terms.

</details>

<details>
<summary>Group accounting policies</summary>

Corporate groups often require a standard monthly or quarterly rate for all intercompany transactions. Setting that rate here applies it consistently across your account.

</details>

## Related Topics

- [Accounting Settings](/settings/accounting-settings) — Configure your base currency and accounting preferences
- [Multi-currency Transactions](/core-features/accounting/journal-entries/guides/multi-currency-transactions) — Record transactions in foreign currencies
- [Chart of Accounts](/accounting/chart-of-accounts) — Manage your ledger accounts
