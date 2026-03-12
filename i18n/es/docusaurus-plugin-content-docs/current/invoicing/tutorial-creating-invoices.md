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
prerequisites:
  - task: company-settings
    label: "Company settings are complete"
    check: "Is your company name and address set up in Settings > Company Settings?"
    resolve_url: /docs/settings/company-settings
  - task: create-client
    label: "At least one client exists"
    check: "Do you have a client set up already, or do you need to create one?"
    resolve_url: /docs/clients-vendors/clients
  - task: payment-method
    label: "A payment method is connected"
    check: "Is Stripe or another payment gateway connected in Settings > Payment Methods?"
    resolve_url: /docs/integrations/payments/overview
related_tutorials:
  - send-invoice
  - recurring-invoices
  - payment-schedules
---

# Tutorial: Create Your First Invoice

This tutorial walks you through creating and sending your first invoice in Fiskl. By the end, you will have a professional invoice saved or sent to your client.

## PREREQUISITE_CHECK

Before you start, confirm the following:

1. **Company settings are complete** — Your company name and address appear on every invoice. If not set up, go to **Settings** > **Company Settings** and enter your details. See [Company Settings](/docs/settings/company-settings).
2. **At least one client exists** — Every invoice requires a client. You can create one during invoice creation, but having one ready saves time. See [Managing Clients](/docs/clients-vendors/clients).
3. **A payment method is connected** — Without this, your client cannot pay online. Go to **Settings** > **Payment Methods** and connect Stripe or add a manual payment method. See [Payment Gateways](/docs/integrations/payments/overview).

:::warning
If your company address is incomplete, it appears incorrectly on all invoices. Fix this in **Company Settings** before creating your first invoice.
:::

## QUICK_PATH

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

In the left sidebar, select **Invoices**. You see your invoice list. If this is your first invoice, the list is empty.

- Select the **+ New Invoice** button in the top right corner
- A blank invoice form opens with your company details pre-filled at the top

### Step 2: Select your client

Every invoice needs a client. The **Client** field is at the top of the form.

- Select the **Client** dropdown
- Choose an existing client from the list, or select **Add Client** to create one now
- Once selected, the client's name, address, and default currency populate automatically

:::tip
If the client has a default currency different from your base currency, the invoice switches to that currency automatically. You can change it manually by selecting the currency name next to the total.
:::

### Step 3: Set the dates

Two date fields appear below the client:

- **Invoice date** defaults to today. Change it if the invoice is for a different date.
- **Due date** defaults to seven days after the invoice date. Change it to match your payment terms.

To change the default due date period for all future invoices, go to **Settings** > **Invoice & Quote Settings**.

### Step 4: Add line items

Line items are the billable rows on your invoice. Fiskl supports five types: Product, Service, Expense, Mileage, and Time.

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

:::tip
If your tax number is not showing on the invoice, check two settings: **Settings** > **Tax Settings** (enable "Display tax number on invoices") and **Settings** > **Templates & Brands** (confirm "Hide tax number" is not selected).
:::

### Step 6: Review and save or send

Check the bottom of the invoice for the subtotal, tax, and total amount.

- Select **Save** to keep the invoice as a draft — you can edit and send it later
- Select **Send** to email the invoice to your client immediately
- Your client receives an email with a link to view and pay the invoice online (if a payment method is connected)

## COMMON_FAILURES

### Tax number not showing on the invoice

**Symptom:** The invoice renders without your tax/VAT registration number, even though you have tax applied to line items.

**Cause:** Two separate settings control tax number visibility. Both must be enabled.

**Fix:**
1. Go to **Settings** > **Tax Settings** and confirm the **Display tax number on invoices** checkbox is selected
2. Go to **Settings** > **Templates & Brands** and confirm the **Hide tax number** option is not selected
3. Ensure at least one line item on the invoice has tax applied — the tax number only appears when tax is present

### Invoice currency is wrong

**Symptom:** The invoice shows a different currency than expected.

**Cause:** The currency defaults to the client's default currency (if set), or your company's base currency. If the client profile has a different currency, it overrides your base currency.

**Fix:** Select the currency name next to the invoice total and choose the correct currency. To change the client's default currency permanently, go to **Clients**, select the client, and update their currency setting.

### Client cannot pay online

**Symptom:** Your client sees the invoice but there is no payment button.

**Cause:** No payment gateway is connected, or the gateway is not active.

**Fix:** Go to **Settings** > **Payment Methods** and confirm that Stripe or another gateway is connected and shows as active. If no payment method exists, select **Add Payment Method** and follow the setup steps.

### Invoice number is out of sequence

**Symptom:** The invoice number does not follow the expected sequence (e.g. jumps from INV-0005 to INV-0020).

**Cause:** A previous invoice number was edited manually, and Fiskl uses the last number as the base for auto-increment.

**Fix:** Create a new invoice and manually set the number to the correct value (e.g. INV-0006). All subsequent invoices increment from that point.

### Template changes affected sent invoices

**Symptom:** An invoice you already sent to a client looks different because you changed the template.

**Cause:** Template changes apply globally to all invoices using that template, including ones already sent.

**Fix:** Create a new template in **Settings** > **Templates & Brands** and apply it only to new invoices going forward. The old template preserves the original styling for sent invoices.

## NEXT_STEPS

Now that you have created your first invoice, you can:

- **Send the invoice** — If you saved it as a draft, open it and select **Send** to email it to your client. See [Sending Invoices](/docs/invoicing/sending-invoices)
- **Set up recurring invoices** — If you bill the same client regularly, automate it. See [Recurring Invoices](create-recurring-invoices)
- **Add payment schedules** — Split a single invoice into two to twelve instalments. See [Payment Schedules](/docs/invoicing/invoice-payment-schedules)

[//]: # (- **Customise your template** — Change logo, colours, and layout in **Settings** > **Templates & Brands**. See [Templates & Brands]&#40;/docs/settings/invoice-template-brands-settings&#41;)