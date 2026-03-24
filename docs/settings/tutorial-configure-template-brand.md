---
title: "Tutorial: Set Up Invoice Templates and Brands"
description: "Step-by-step guide to creating and customising invoice templates and brands in Fiskl."
keywords: ["invoice template", "brands", "custom emails", "logo", "template settings", "tutorial"]
sidebar_position: 99
sidebar_class_name: hidden

# AI Tutorial Metadata
document_type: tutorial
task: configure-template-brand
difficulty: intermediate
estimated_time: "10 minutes"
prerequisites:
  - task: company-settings
    label: "Company details configured"
    check: "Have you set up your company name, address, and logo in Settings > Company Settings?"
    resolve_url: /settings/company-settings
  - task: set-up-tax-rates
    label: "Tax rates configured (if applicable)"
    check: "Do you have tax rates set up? You need these if you want to display a tax ID on your invoices."
    resolve_url: /settings/tax-settings
related_tutorials:
  - configure-invoice-settings
  - create-invoice
  - send-invoice
---

# Tutorial: Set Up Invoice Templates and Brands

This tutorial walks you through creating an invoice template with your branding — logo, colours, fonts, and display preferences. You will also learn how to set up custom emails and optionally create a brand with overridden company details. By the end, you will have a professional template ready to apply to your invoices and quotes.

## PREREQUISITE_CHECK

Before you start, confirm the following:

1. **Company details configured** — Your company name, address, and logo are used as defaults on every template. If not set up, go to **Settings** > **Company Settings**. See [Company Settings](/settings/company-settings)
   app_url: https://app.fiskl.com/dashboard/settings
2. **Tax rates configured (if applicable)** — If you want to display a tax ID on your invoices, you need a tax agency and rate set up first. See [Tax Settings](/settings/tax-settings)
   app_url: https://app.fiskl.com/dashboard/settings/taxes/agencies

:::warning
Editing an existing template changes the appearance of all invoices and quotes using that template, including previously sent documents. If you want to preserve the look of sent documents, create a new template instead.
:::

## QUICK_PATH

app_url: https://app.fiskl.com/dashboard/settings/invoices/templates

For experienced users who need a refresher:

1. Go to **Settings** > **Templates & Brands**
2. Select **Add New Template** or select an existing template
3. Enter a template name and upload your logo
4. Select a layout, customise colours, and choose a font
5. Toggle display options (Tax ID, FX rates, units, quantity)
6. Optionally add attachments and customise email content
7. Optionally override company details to create a brand
8. Select **Save**

## STEP_DETAIL

### Step 1: Open Templates and Brands

app_url: https://app.fiskl.com/dashboard/settings/invoices/templates

Navigate to the template configuration page.

- Select the **gear icon** in the bottom left menu
- Select **Templates & Brands**
- Your existing templates appear here, or an empty state if this is your first

### Step 2: Create a new template

Start a new template so you can configure it from scratch.

- Select **Add New Template**
- A template editor opens with a live preview on the right side
- Enter a descriptive template name (only you see this, not your clients)

### Step 3: Customise your template appearance

Upload your logo, choose a layout, set your colours, and select a font. The live preview on the right updates as you make changes.

- In the **Name & Header** section, upload your company logo and resize it using the available controls
- Optionally upload a separate email logo (square image, maximum 100 KB, rendered at 70×70 px)
- In the **Theme and Colours** section, select a pre-set invoice layout and customise individual colour elements: header, text, labels, and dividers
- In the **Fonts** section, select from the available fonts

:::tip
After changing fonts, download a test PDF to confirm your text renders correctly. Not all fonts support non-Latin scripts such as Chinese, Cyrillic, or Arabic in PDF format.
:::

### Step 4: Configure display options

Control which details appear on your invoices and quotes.

- In the **Display Options** section, toggle each option on or off:
  - **Company ID** — your business registration number
  - **Tax ID** — your tax or VAT number (must also be enabled in [Tax Settings](/settings/tax-settings))
  - **FX rates** — exchange rates for multi-currency line items
  - **Units** — unit labels on line items
  - **Quantity** — quantity column on line items
  - **Proforma label** — marks the invoice as proforma

:::tip
If your tax ID is not appearing on invoices, check both this setting and the matching setting in **Tax Settings**. Both must be enabled.
:::

### Step 5: Add attachments and custom emails (optional)

Attach files and customise the email messages sent with your invoices and quotes.

- In the **Attachments** section, upload any standard documents (for example, terms of service or payment policies)
- In the **Custom Emails** section, select the email type to customise: invoice, deposit request, partial payment, overdue reminder, or quote
- Edit the email text and use placeholders like `[Company name]`, `[Total]`, and `[Client name]` for dynamic content
- Custom emails are plain text without HTML formatting

### Step 6: Create a brand (optional)

If you operate multiple businesses or brands under one Fiskl account, override the company details on this template.

- In the **Brand Overrides** section, enter different values for company name, email, phone, address, invoice name, or quote name
- The preview updates in real time as you make changes
- When you assign this template to an invoice, the overridden details appear instead of your default company settings

### Step 7: Save your template

Review the live preview to confirm everything looks correct.

- Select **Save**
- Your template is now available to select when creating invoices and quotes

## COMMON_FAILURES

### Tax ID not appearing on invoices

**Symptom:** The invoice renders without your tax or VAT number, even though you have a tax rate applied to line items.

**Cause:** Two separate settings control tax ID visibility. Both must be enabled: one in Tax Settings and one in the template display options.

**Fix:**
1. Go to **Settings** > **Tax Settings** and confirm **Display tax number on invoices** is enabled
2. Go to **Settings** > **Templates & Brands**, open the template, and confirm the **Tax ID** display option is toggled on
3. Confirm at least one line item on the invoice has a tax rate applied

### Logo looks blurry or too small on the PDF

**Symptom:** The logo appears low-quality or tiny when you download the invoice as a PDF.

**Cause:** The uploaded logo is too small in pixel dimensions, or the resize setting is too low.

**Fix:**
1. Upload a higher-resolution version of your logo (at least 300 px wide recommended)
2. Use the resize controls to increase the logo size in the template editor
3. Download a test PDF to confirm the result

### Font not rendering in PDF

**Symptom:** Characters appear as squares or question marks in the downloaded PDF.

**Cause:** The selected font does not support the character set used in your invoice (for example, Chinese, Cyrillic, or Arabic characters).

**Fix:**
1. Open the template and switch to a font that supports your language
2. Download a test PDF to verify

### Custom email placeholders not working

**Symptom:** The email your client receives shows `[Company name]` or `[Total]` as literal text instead of actual values.

**Cause:** The placeholder syntax is incorrect — it must match exactly, including the square brackets and spacing.

**Fix:**
1. Go to **Templates & Brands**, open the template, and select **Custom Emails**
2. Check the placeholder text against the available options shown in the editor
3. Correct any misspelled or incorrectly formatted placeholders
4. Select **Save** and send a test invoice to verify

### Template changes affected previously sent invoices

**Symptom:** A client reports that an invoice you sent earlier looks different now.

**Cause:** Template changes apply to all documents using that template, including sent invoices.

**Fix:**
1. Create a new template for future invoices
2. Assign the new template to new invoices going forward

## NEXT_STEPS

Now that you have set up your template, you can:

- **Configure invoice settings** — Set payment terms, manual payment methods, and language preferences. See [Invoice and Quote Settings](/settings/invoice-quotes-settings)
- **Create your first invoice** — Apply your new template when billing a client. See [Creating Invoices](/invoicing/creating-invoices)
- **Send invoices** — Email invoices to clients with your branded template. See [Sending Invoices](/invoicing/sending-invoices)
- **Set up recurring invoices** — Automate regular billing with your template. See [Recurring Invoices](/invoicing/create-recurring-invoices)