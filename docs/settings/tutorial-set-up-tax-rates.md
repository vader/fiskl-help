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

related_tutorials:
  - create-invoice
  - send-invoice
  - record-expenses
---

# Tutorial: Setting Up Tax Rates

This tutorial walks you through setting up tax agencies (also known as tax numbers), creating tax rates, and optionally grouping taxes. By the end, you will have tax rates ready to apply to your invoices and expenses.

## QUICK_PATH

app_url: https://app.fiskl.com/dashboard/settings/taxes/agencies

For experienced users who need a refresher:

1. Go to **Settings** > **Tax Management** > **Tax Agencies** tab
2. Select **New Tax Agency** and enter agency name, country, and currency
3. Select **Create** to create the agency
4. Switch to the **Tax Rates** tab
5. Select **New Tax Rate** and enter the tax name, percentage, and assign it to your agency
6. Select **Create** to create the rate
7. Optionally, go to the **Tax Groups** tab to combine multiple rates

## STEP_DETAIL

### Step 1: Open Tax settings

app_url: https://app.fiskl.com/dashboard/settings/taxes/agencies

You need to navigate to the Tax settings page to begin.

- Select the **gear icon** in the bottom left, then select **Tax Management**
- The Tax settings page opens with three tabs: **Tax Agencies**, **Tax Rates**, and **Tax Groups**

### Step 2: Create a tax agency

app_url: https://app.fiskl.com/dashboard/settings/taxes/agencies

A tax agency represents the authority you pay taxes to, such as HMRC or the IRS.

- Select the **Tax Agencies** tab
- Select **New Tax Agency**
- Enter the agency name (for example, "HMRC" or "IRS")
- Select the country and currency for this agency
- Select the filing period to get notified of when your taxes are due
- Select **Create**

:::tip
If you operate in multiple countries, create a separate tax agency for each jurisdiction. For example, one for UK VAT in GBP and another for French VAT in EUR.
:::

### Step 3: Confirm the ledger account

app_url: https://app.fiskl.com/dashboard/accounting/chart-of-accounts

After saving, Fiskl automatically creates a Liability ledger account for this agency.

- Go to **Accounting** > **Chart of Accounts** and select **Liabilities** > **Sales Taxes Payable**
- The ledger account has the same name as your tax agency
- All tax transactions linked to this agency are recorded in that account

### Step 4: Add a tax rate

app_url: https://app.fiskl.com/dashboard/settings/taxes/rates

Now that you have an agency, you can create tax rates.

- Select the **Tax Rates** tab
- Select **New Tax Rate**
- Enter the tax name (for example, "Standard VAT" or "Sales Tax")
- Enter the tax percentage
- Select the **Tax Agency** to assign this rate to
- Choose whether this is a **Sales** or **Non-Sales** tax
- Select **Create**

:::tip
You can assign multiple tax rates to a single agency. For example, a standard rate of 20% and a reduced rate of 5% can both belong to the same agency. You cannot change a tax rate after it has been created. If the rate changes, archive the existing rate and create a new one.
:::

### Step 5: Create a tax group (optional)

app_url: https://app.fiskl.com/dashboard/settings/taxes/groups

If your jurisdiction requires multiple taxes on the same transaction, you can group them.

- Select the **Tax Groups** tab
- Select **New Tax Group**
- Enter a name for the group (for example, "BC Sales Tax" or "Quebec GST+QST")
- Select two or more tax rates to include in the group
- If one tax should be calculated on top of another, toggle the **Compound** option
- Select **Create**

### Step 6: Apply your tax rates

Your tax rates and groups are now available throughout Fiskl.

- When creating an invoice or expense, select the tax rate or group from the tax dropdown on each line item
- The correct tax amount is calculated automatically based on your settings

## COMMON_FAILURES

### Cannot find the tax agency when adding a new rate

**Symptom:** The **Tax Agency** selector is empty when you create a new tax rate.

**Cause:** You have not created a tax agency yet. Tax rates require an agency to be assigned to.

**Fix:**
1. Select the **Tax Agencies** tab
2. Select **New Tax Agency** and create your agency first
3. Return to the **Tax Rates** tab and try again

### Tax rate not appearing on invoices

**Symptom:** When creating an invoice, the tax rate you created does not appear in the tax dropdown.

**Cause:** The tax rate may not be marked as a sales tax, or it may be assigned to an agency with a different currency than the invoice.

**Fix:**
1. Go to **Settings** > **Tax Management** > **Tax Rates**
2. Select the tax rate to edit
3. Confirm it is set to **Sales** tax (not Non-Sales)
4. Confirm the assigned agency currency matches the invoice currency
5. Select **Save**

### Unable to change a tax rate

**Symptom:** The tax percentage field is disabled when you edit an existing tax rate.

**Cause:** Tax rates cannot be changed after they have been created. You need to archive the rate and create a new one.

**Fix:**
1. Go to **Settings** > **Tax Management** > **Tax Rates**
2. Archive the tax rate
3. Create a new tax rate with the updated percentage

### Compound tax calculating incorrectly

**Symptom:** The total tax amount on a transaction does not match your expected compound calculation.

**Cause:** The **Compound** option may not be enabled on the tax group, or the taxes are in the wrong order.

**Fix:**
1. Go to **Settings** > **Tax Management** > **Tax Groups**
2. Select the group to edit
3. Confirm the **Compound** option is toggled on
4. Check that the taxes are in the correct order (the base tax should appear first)
5. Select **Save**

### Missing ledger account after creating an agency

**Symptom:** You cannot find the Liability ledger account for your tax agency in the Chart of Accounts.

**Cause:** The ledger account is created automatically but may not appear if the page has not refreshed.

**Fix:**
1. Go to **Accounting** > **Chart of Accounts**
2. Search for the name of your tax agency
3. The account should appear under **Liabilities**
4. If still missing, try refreshing the page or contact support

## NEXT_STEPS

Now that you have set up your tax rates, you can:

- **Create an invoice** — Apply your new tax rates when billing clients. See [Creating Invoices](/invoicing/creating-invoices)
- **Record expenses** — Assign tax rates to your business expenses. See [Expenses Overview](/expenses/overview)
- **Run a sales tax report** — Review your tax liabilities across a date range. See [Sales Tax Report](/reporting/sales-tax)
- **Manage your Chart of Accounts** — Review the auto-created tax liability accounts. See [Chart of Accounts](/accounting/chart-of-accounts)