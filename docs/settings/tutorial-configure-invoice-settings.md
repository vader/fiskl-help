---
title: "Tutorial: Configure Invoice Settings"
description: "Step-by-step guide to setting up invoice payment terms, manual payment methods, and language preferences in Fiskl."
keywords: ["invoice settings", "payment terms", "manual payment methods", "language settings", "tutorial"]
sidebar_position: 99
sidebar_class_name: hidden

# AI Tutorial Metadata
document_type: tutorial
task: configure-invoice-settings
difficulty: beginner
estimated_time: "5 minutes"
prerequisites:
  - task: company-settings
    label: "Company details configured"
    check: "Have you set up your company name, address, and base currency in Settings > Company Settings?"
    resolve_url: /docs/settings/company-settings
related_tutorials:
  - configure-template-brand
  - create-invoice
  - set-up-tax-rates
---

# Tutorial: Configure Invoice Settings

This tutorial walks you through setting up your invoice defaults — payment terms, manual payment methods, and language preferences. By the end, your invoices will use the correct terms, offer your preferred payment options, and display in the right language.

## PREREQUISITE_CHECK

Before you start, confirm the following:

1. **Company details configured** — Your company name and address appear on every invoice. If not set up, go to **Settings** > **Company Settings** and enter your details. See [Company Settings](/docs/settings/company-settings)
   app_url: https://app.fiskl.com/dashboard/settings

:::warning
If your company address is incomplete, it appears incorrectly on all invoices. Complete your company settings before configuring invoice settings.
:::

## QUICK_PATH

app_url: https://app.fiskl.com/dashboard/settings/invoices/invoice-quote-settings

For experienced users who need a refresher:

1. Go to **Settings** > **Invoice & Quote Settings**
2. Set the default payment terms (days until due)
3. Toggle **Auto-select payment gateways** on or off
4. Add default invoice notes and terms and conditions if needed
5. Go to **Manual Payment Methods** and select **+** to add a method with instructions
6. Go to **Languages** and select a primary language for invoices and quotes
7. Optionally clone and customise a language for regional needs

## STEP_DETAIL

### Step 1: Open invoice and quote settings

app_url: https://app.fiskl.com/dashboard/settings/invoices/invoice-quote-settings

You need to access the settings page where invoice defaults are configured.

- Select the **gear icon** in the bottom left menu
- Select **Invoice & Quote Settings**
- The settings page opens showing general invoice options

### Step 2: Set payment terms

Payment terms control the default due date on every new invoice.

- Find the **Payment terms** field
- Enter the number of days between the invoice date and due date (the default is seven days)
- This applies to all new invoices — you can override it on individual invoices

### Step 3: Configure payment gateway auto-selection

This setting controls whether payment methods are automatically enabled on invoices.

- Find the **Auto-select payment gateways** toggle
- When enabled, Fiskl automatically selects all payment methods compatible with the invoice's country, currency, and amount
- When disabled, you manually choose which payment methods to show on each invoice

:::tip
If you have multiple payment gateways connected (for example, Stripe and PayPal), enabling auto-selection ensures your clients always see every available option.
:::

### Step 4: Add default invoice notes and terms (optional)

Notes and terms appear at the bottom of every invoice. Use them for standard reminders, payment instructions, or legal terms.

- Find the **Invoice notes** and **Terms and conditions** fields
- These fields are shown in view mode by default — select **Edit** to switch to edit mode
- Enter your default text (limited HTML is supported for basic styling such as bold, italic, and links)
- Select **Save** to return to view mode
- These defaults appear on all new invoices but you can override them individually

### Step 5: Add a manual payment method

app_url: https://app.fiskl.com/dashboard/settings/invoices/invoice-manual-payment-methods

Manual payment methods give your clients instructions for paying outside of online gateways, such as bank transfer or cheque.

- Select **Manual Payment Methods** from the settings menu
- Select the **+** icon to add a new payment method
- Enter a descriptive name that your client sees on the invoice (for example, "Bank Transfer — Chase ACH")
- Add clear instructions in the **Client notes** field
- Include relevant details: account number, sort code, bank name, and similar information
- Select **Save**

Your client sees a copy-to-clipboard button next to each payment detail.

### Step 6: Set the primary language

app_url: https://app.fiskl.com/dashboard/settings/invoices/languages

Fiskl supports over 60 languages for invoices, quotes, emails, and client-facing screens.

- Select **Languages** from the settings menu
- Select the default language for all new invoices and quotes
- You can change the language on individual invoices when needed

:::tip
If you need to adapt a language for a specific region, select **Clone** next to a base language. Edit the translations and save your custom version. This is useful for regional dialects or changing terms like "Client" to "Customer" on your documents.
:::

## COMMON_FAILURES

### Client cannot see payment instructions on the invoice

**Symptom:** The client opens the invoice but does not see any manual payment options.

**Cause:** The manual payment method was created but not assigned to the invoice, or auto-select is disabled and the method was not manually selected.

**Fix:**
1. Open the invoice in edit mode
2. Check the payment methods section and confirm the manual method is selected
3. Alternatively, go to **Invoice & Quote Settings** and enable **Auto-select payment gateways**

### Due date is wrong on new invoices

**Symptom:** New invoices show a due date that does not match your expected terms.

**Cause:** The payment terms value may have been changed, or the invoice date is different from today.

**Fix:**
1. Go to **Settings** > **Invoice & Quote Settings**
2. Check the **Payment terms** value and adjust if needed
3. On the invoice, confirm the invoice date is correct — the due date is calculated from this date

### Language not changing on invoices

**Symptom:** You changed the primary language but existing invoices still show the old language.

**Cause:** The language setting applies to new invoices only. Existing invoices keep the language they were created with.

**Fix:**
1. Open the existing invoice in edit mode
2. Change the language on that specific invoice
3. Select **Save** to apply the new language

### Custom language clone not appearing

**Symptom:** After cloning a language, the custom version does not appear in the language dropdown.

**Cause:** The cloned language may not have been saved, or the page needs to be refreshed.

**Fix:**
1. Go to **Invoice & Quote Settings** > **Languages**
2. Look for the cloned language in the list
3. If missing, clone the base language again and confirm you select **Save** after editing

### Payment method name too vague for clients

**Symptom:** Clients contact you asking how to pay because the payment method name is unclear.

**Cause:** The payment method name shown on the invoice is not descriptive enough.

**Fix:**
1. Go to **Invoice & Quote Settings** > **Manual Payment Methods**
2. Select the payment method to edit
3. Change the name to something specific (for example, "Bank Transfer — Barclays GBP" instead of "Bank Transfer")
4. Select **Save**

## NEXT_STEPS

Now that you have configured your invoice settings, you can:

- **Set up your invoice template** — Configure the visual appearance of your invoices including logo, colours, and layout. See [Templates and Brands](/docs/settings/invoice-template-brands-settings)
- **Create your first invoice** — Use your new settings to bill a client. See [Creating Invoices](/docs/invoicing/creating-invoices)
- **Set up tax rates** — Configure tax agencies and rates to apply on invoices. See [Tax Settings](/docs/settings/tax-settings)
- **Connect a payment gateway** — Enable online payments through Stripe, PayPal, or GoCardless. See [Payment Gateways](/docs/integrations/payments/overview)