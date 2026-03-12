---
title: "Tutorial: Setting Up Tax Rates"
description: "Step-by-step guide to setting up tax agencies, tax rates, and tax groups in Fiskl."
keywords: ["tax rates", "tax agency", "tax groups", "VAT", "sales tax", "tutorial", "tax settings"]
sidebar_position: 99
sidebar_class_name: hidden

# AI Tutorial Metadata
document_type: tutorial
task: set-up-tax-rates
difficulty: beginner
estimated_time: "5 minutes"
prerequisites:
  - task: company-settings
    label: "Company details configured"
    check: "Have you set up your company details including your business country and base currency?"
    resolve_url: /docs/settings/company-settings
related_tutorials:
  - create-invoice
  - send-invoice
  - record-expenses
---

# Tutorial: Setting Up Tax Rates

This tutorial walks you through setting up tax agencies, creating tax rates, and optionally grouping taxes. By the end, you will have tax rates ready to apply to your invoices and expenses.

## PREREQUISITE_CHECK

Before you start, confirm the following:

1. **Company details configured** — Your business country and base currency determine your default tax jurisdiction. If not set up, go to **Settings** > **Company Settings**. See [Company Settings](/docs/settings/company-settings).

:::warning
You must create a tax agency before you can add any tax rates. The agency defines the country and currency for all rates assigned to it.
:::

## QUICK_PATH

For experienced users who need a refresher:

1. Go to **Settings** > **Tax Settings** > **Tax Agencies** tab
2. Select **Add** and enter agency name, country, and currency
3. Select **Save** to create the agency
4. Switch to the **Tax Rates** tab
5. Select **Add** and enter the tax name, percentage, and assign it to your agency
6. Select **Save** to create the rate
7. Optionally, go to the **Tax Groups** tab to combine multiple rates

## STEP_DETAIL

### Step 1: Open Tax settings

You need to navigate to the Tax settings page to begin.

- Select the **gear icon** in the top left menu, then select **Tax Settings**
- The Tax settings page opens with three tabs: **Tax Agencies**, **Tax Rates**, and **Tax Groups**

### Step 2: Create a tax agency

A tax agency represents the authority you pay taxes to, such as HMRC or the IRS.

- Select the **Tax Agencies** tab
- Select **Add**
- Enter the agency name (for example, "HMRC" or "IRS")
- Select the country and currency for this agency
- Select **Save**

:::tip
If you operate in multiple countries, create a separate tax agency for each jurisdiction. For example, one for UK VAT in GBP and another for French VAT in EUR.
:::

### Step 3: Confirm the ledger account

After saving, Fiskl automatically creates a Liability ledger account for this agency.

- You can verify this in **Settings** > **Chart of Accounts**
- The ledger account has the same name as your tax agency
- All tax transactions linked to this agency are recorded in that account

### Step 4: Add a tax rate

Now that you have an agency, you can create tax rates.

- Select the **Tax Rates** tab
- Select **Add**
- Enter the tax name (for example, "Standard VAT" or "Sales Tax")
- Enter the tax percentage
- Select the **Tax Agency** to assign this rate to
- Choose whether this is a **Sales** or **Non-Sales** tax
- Select **Save**

:::tip
You can assign multiple tax rates to a single agency. For example, a standard rate of 20% and a reduced rate of 5% can both belong to the same agency.
:::

### Step 5: Create a tax group (optional)

If your jurisdiction requires multiple taxes on the same transaction, you can group them.

- Select the **Tax Groups** tab
- Select **Add**
- Enter a name for the group (for example, "BC Sales Tax" or "Quebec GST+QST")
- Select two or more tax rates to include in the group
- If one tax should be calculated on top of another, toggle the **Compound** option
- Select **Save**

### Step 6: Apply your tax rates

Your tax rates and groups are now available throughout Fiskl.

- When creating an invoice or expense, select the tax rate or group from the tax dropdown on each line item
- The correct tax amount is calculated automatically based on your settings

## COMMON_FAILURES

### Cannot find the option to add a tax rate

**Symptom:** The **Add** button on the Tax Rates tab does not appear, or no tax agency is available to select.

**Cause:** You have not created a tax agency yet. Tax rates require an agency to be assigned to.

**Fix:**
1. Select the **Tax Agencies** tab
2. Select **Add** and create at least one tax agency
3. Return to the **Tax Rates** tab and try again

### Tax rate shows the wrong currency

**Symptom:** A tax rate displays a currency that does not match your expectation.

**Cause:** The tax rate inherits its currency from the assigned tax agency. If the agency uses EUR, all rates assigned to it use EUR.

**Fix:**
1. Create a new tax agency with the correct country and currency
2. Create a new tax rate and assign it to the new agency
3. Delete or ignore the incorrect rate

### Missing ledger account after creating an agency

**Symptom:** You cannot find the Liability ledger account for your tax agency in the Chart of Accounts.

**Cause:** The ledger account is created automatically but may not appear if the page has not refreshed.

**Fix:**
1. Go to **Settings** > **Chart of Accounts**
2. Search for the name of your tax agency
3. The account should appear under **Liabilities**
4. If still missing, try refreshing the page or contact support

### Compound tax calculating incorrectly

**Symptom:** The total tax amount on a transaction does not match your expected compound calculation.

**Cause:** The **Compound** option may not be enabled on the tax group, or the taxes are in the wrong order.

**Fix:**
1. Go to **Settings** > **Tax Settings** > **Tax Groups**
2. Select the group to edit
3. Confirm the **Compound** option is toggled on
4. Check that the taxes are in the correct order (the base tax should appear first)
5. Select **Save**

### Tax rate not appearing on invoices

**Symptom:** When creating an invoice, the tax rate you created does not appear in the tax dropdown.

**Cause:** The tax rate may not be marked as a sales tax, or it may be assigned to an agency with a different currency than the invoice.

**Fix:**
1. Go to **Settings** > **Tax Settings** > **Tax Rates**
2. Select the tax rate to edit
3. Confirm it is set to **Sales** tax (not Non-Sales)
4. Confirm the assigned agency currency matches the invoice currency
5. Select **Save**

## NEXT_STEPS

Now that you have set up your tax rates, you can:

- **Create an invoice** — Apply your new tax rates when billing clients. See [Creating Invoices](/docs/invoicing/creating-invoices)
- **Record expenses** — Assign tax rates to your business expenses. See [Expenses Overview](/docs/expenses/overview)
- **Run a sales tax report** — Review your tax liabilities across a date range. See [Sales Tax Report](/docs/reporting/sales-tax)
- **Manage your Chart of Accounts** — Review the auto-created tax liability accounts. See [Chart of Accounts](/docs/accounting/chart-of-accounts)