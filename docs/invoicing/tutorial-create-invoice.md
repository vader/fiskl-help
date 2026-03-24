---
title: "Tutorial: Create Your First Invoice"
description: "Step-by-step guide to creating and sending your first invoice in Fiskl."
keywords: ["invoice", "tutorial", "create invoice", "billing", "send invoice"]
sidebar_position: 99
sidebar_class_name: hidden

# AI Tutorial Metadata
document_type: tutorial
task: create-invoice
difficulty: beginner
estimated_time: "5 minutes"
app_url: https://app.fiskl.com/dashboard/invoices
prerequisites:
  - task: configure-invoice-settings
    label: "Invoice settings configured"
    check: "Have you set up your payment terms and payment methods in Settings > Invoice & Quote Settings?"
    resolve_url: /settings/invoice-quotes-settings
    resolve_tutorial: configure-invoice-settings
  - task: configure-template-brand
    label: "Invoice template configured"
    check: "Have you set up an invoice template with your logo and branding in Settings > Templates & Brands?"
    resolve_url: /settings/invoice-template-brands-settings
    resolve_tutorial: configure-template-brand
  - task: create-client
    label: "At least one client exists"
    check: "Do you have a client set up already, or do you need to create one?"
    resolve_url: /clients-vendors/clients
    resolve_tutorial: manage-clients
  - task: set-up-tax-rates
    label: "Tax rates configured (if applicable)"
    check: "Do you need to charge tax on your invoices? If so, have you set up your tax agencies and rates?"
    resolve_url: /settings/tax-settings
    resolve_tutorial: set-up-tax-rates
related_tutorials:
  - send-invoice
  - recurring-invoices
  - payment-schedules
  - configure-invoice-settings
  - configure-template-brand
---

# Tutorial: Create Your First Invoice

This tutorial walks you through creating and sending your first invoice in Fiskl. By the end, you will have a professional invoice saved or sent to your client.

## PREREQUISITE_CHECK

Before you start, confirm the following:

1. **Invoice settings configured** — Payment terms, manual payment methods, and language preferences affect every invoice you create. If not set up, go to **Settings** > **Invoice & Quote Settings**. See [Invoice and Quote Settings](/settings/invoice-quotes-settings).
   app_url: https://app.fiskl.com/dashboard/settings/invoices/invoice-quote-settings
2. **Invoice template configured** — Your template controls the logo, colours, layout, and display options on invoices. If not set up, go to **Settings** > **Templates & Brands**. See [Templates and Brands](/settings/invoice-template-brands-settings).
   app_url: https://app.fiskl.com/dashboard/settings/invoices/templates
3. **At least one client exists** — Every invoice requires a client. You can create one during invoice creation, but having one ready saves time. See [Managing Clients](/clients-vendors/clients).
4. **Tax rates configured (if applicable)** — If your business charges tax, set up your tax agencies and rates before creating invoices. See [Tax Settings](/settings/tax-settings).

:::warning
If your invoice settings and template are not configured first, your invoices may display incorrect payment terms, missing logos, or no tax ID. Complete those settings before creating your first invoice.
:::

## QUICK_PATH

app_url: https://app.fiskl.com/dashboard/invoices

For experienced users who need a refresher:

1. In the left sidebar, select **Invoices**
2. Select **+ New Invoice**
3. Select or add a client
4. Set invoice date and due date
5. Select **Add Line Item** and enter description, quantity, and rate
6. Apply tax if required
7. Select **Save** (draft) or **Send** (email to client)

## STEP_DETAIL

### Step 1: Open the invoice screen

app_url: https://app.fiskl.com/dashboard/invoices

In the left sidebar, select **Invoices**. You see your invoice list.

- Select the **+ New Invoice** button in the top right corner
- A blank invoice form opens with your company details pre-filled

### Step 2: Select your client

app_url: https://app.fiskl.com/dashboard/invoices/new

Every invoice needs a client.

- Select the **Client** dropdown at the top of the form
- Choose an existing client, or select **Add Client** to create one now
- The client's name, address, and default currency populate automatically

:::tip
If the client has a default currency different from your base currency, the invoice switches to that currency automatically. Select the currency name next to the total to change it.
:::

### Step 3: Set the dates

Two date fields appear below the client.

- **Invoice date** defaults to today. Change it if needed.
- **Due date** defaults based on your payment terms setting. Adjust for this client if needed.

### Step 4: Add line items

Line items are the billable rows on your invoice.

- Select **Add Line Item**
- Choose the item type (most common: **Product** or **Service**)
- Enter the description, quantity, and rate
- The line total calculates automatically
- Add more line items by selecting **Add Line Item** again

### Step 5: Apply tax

If your business charges tax, apply it to each line item.

- Select the tax field on a line item
- Choose the correct tax rate from the dropdown
- Fiskl calculates the tax amount and updates the invoice total automatically
- To switch between tax-inclusive and tax-exclusive pricing, select the **+/-** button next to the tax field

### Step 6: Review and save or send

Check the bottom of the invoice for the subtotal, tax, and total amount.

- Select **Save** to keep the invoice as a draft — you can edit and send it later
- Select **Send** to email the invoice to your client immediately
- Your client receives an email with a link to view and pay the invoice online (if a payment method is connected)

## COMMON_FAILURES

### Tax number not showing on the invoice

**Symptom:** The invoice renders without your tax or VAT registration number, even though tax is applied to line items.

**Cause:** Two separate settings control tax number visibility. Both must be enabled.

**Fix:**
1. Go to **Settings** > **Tax Settings** and confirm **Display tax number on invoices** is selected
2. Go to **Settings** > **Templates & Brands** and confirm the **Tax ID** display option is toggled on
3. Confirm at least one line item on the invoice has a tax rate applied

### Invoice currency is wrong

**Symptom:** The invoice shows a different currency than expected.

**Cause:** The currency defaults to the client's default currency. If the client profile has a different currency, it overrides your base currency.

**Fix:** Select the currency name next to the invoice total and choose the correct currency. To change the client's default currency permanently, go to **Clients**, select the client, and update their currency setting.

### Client cannot pay online

**Symptom:** Your client sees the invoice but there is no payment button.

**Cause:** No payment gateway is connected, or the gateway is not active for this invoice.

**Fix:**
1. Go to **Settings** > **Invoice & Quote Settings** and check whether **Auto-select payment gateways** is enabled
2. Go to **Settings** > **Payment Methods** and confirm a gateway (such as Stripe) is connected and active
3. If using manual payment methods only, confirm the method is assigned to the invoice

### Invoice number is out of sequence

**Symptom:** The invoice number does not follow the expected sequence.

**Cause:** A previous invoice number was edited manually. Fiskl uses the last number as the base for auto-increment.

**Fix:** Create a new invoice and manually set the number to the correct value. All subsequent invoices increment from that point.

### Template or logo not appearing correctly

**Symptom:** The invoice does not show your logo, uses the wrong colours, or displays the default layout.

**Cause:** The invoice may be using a different template, or the template has not been configured yet.

**Fix:**
1. Open the invoice in edit mode and check which template is selected
2. If the wrong template is assigned, change it to the correct one
3. If no template is configured, go to **Settings** > **Templates & Brands** and set one up first

## NEXT_STEPS

Now that you have created your first invoice, you can:

- **Send the invoice** — If you saved it as a draft, open it and select **Send** to email it to your client. See [Sending Invoices](/invoicing/sending-invoices)
- **Set up recurring invoices** — If you bill the same client regularly, automate it. See [Recurring Invoices](/invoicing/create-recurring-invoices)
- **Add payment schedules** — Split a single invoice into instalments. See [Payment Schedules](/invoicing/invoice-payment-schedules)
- **Customise your template** — Adjust logo, colours, and layout. See [Templates and Brands](/settings/invoice-template-brands-settings)