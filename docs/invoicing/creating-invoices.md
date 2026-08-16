---
title: Creating Invoices
description: Learn how to create professional invoices in Fiskl. Configure tax,
  branding, and email settings, then build and send invoices to your clients.
sidebar_position: 2
---
This guide explains how to create invoices in Fiskl and bill clients professionally, from first-time setup through to advanced configuration.



---

## Before You Begin

Completing the setup steps below before creating your first invoice ensures accuracy and consistent branding. These settings take ten to fifteen minutes to configure and streamline all future invoicing.

**Setup checklist:**

- Configure tax settings (if you charge tax)
- Set up company information and branding
- Customise invoice templates
- Configure language settings (if invoicing in multiple languages)
- Set up email templates
- Connect payment gateways and manual payment methods

Step 1: Configure Tax Settings

If you charge tax on products or services, configure your tax settings before creating invoices.

### Set Up a Tax Agency

1. Go to **Settings** > **Tax Management** > **Tax Agencies**
2. Select **Add Tax ID**
3. Enter your tax authority details:
  - Tax authority name (for example, "VAT UK" or "Sales Tax CA")
  - Tax identification number
  - Tax type (Sales Tax, VAT, GST, and so on)
4. Select **Save**

Fiskl automatically creates a corresponding ledger account in your Chart of Accounts for this tax agency.

### Add Tax Rates

1. In **Tax Management**, go to the **Tax Rates** section
2. Select **Add Tax**
3. Configure the tax rate:
  - Tax name (for example, "Standard VAT 20%")
  - Tax rate percentage
  - Assign to your tax agency
  - Mark as Sales Tax or Non-Sales Tax
4. Select **Save**

**Example tax rates:**

- Standard rate: 20%
- Reduced rate: 5%
- Zero rate: 0%

### Set a Default Tax Rate

1. In **Tax Rates**, find your primary tax rate
2. Mark it as the default for sales
3. Select **Save**

This rate applies automatically to all line items unless you specify otherwise on the invoice.

**Learn more:** [Tax Management](/settings/tax-management)



Step 2: Set Up Company Information and Branding

Your company information appears on every invoice. Configure it once for consistent branding across all documents.

### Add Company Details

1. Go to **Settings** > **Company Profile**
2. Complete your company information:
  - Legal business name
  - Business address
  - Phone number
  - Email address
  - Website
  - Business registration number
3. Upload your company logo
4. Select your timezone
5. Select **Save**

### Configure Invoice Templates and Brands

Templates control the appearance and content of your invoices.

1. Go to **Settings** > **Invoice & Quote Settings** > **Templates and Brands**
2. Select **Add New Template** or edit the default template
3. Customise the template using the tabs below

**General Settings tab**

In the **Name & Header** section, you can:

- Set a template name (internal use only)
- Upload your logo and adjust its size
- Upload an email logo (square format, 100 KB max, displays at 70×70 px)

If you operate multiple brands under one entity, use **Brand Overrides** to set a separate company name, address, contact details, and logo. This lets you create distinct branded invoices without managing multiple accounts.

**Design tab**

- Select brand colours and font styles
- Preview changes in real time
- Select a layout style: Classic, Modern, or Minimal
- Choose which fields to display and adjust spacing

**Learn more:** [Invoice Templates and Brands](/settings/invoice-template-brands-settings)



Step 3: Configure Email Templates

Fiskl sends email notifications when you issue invoices, payment reminders, and overdue notices.

### Choose an Email Strategy

Fiskl offers two approaches:

**Option 1: Fiskl HTML email templates (recommended)**

Pre-designed HTML emails that automatically match your invoice language. These include dynamic placeholders and apply to all notification types: invoices, reminders, overdue notices, and recurring invoices.

**Option 2: Custom email text**

Write your own email content with full control over wording, tone, and messaging per scenario. Dynamic placeholders are still available.

### Set Up Your Email Template

1. Go to **Settings** > **Templates and Brands**
2. Select your template
3. Select the **Email** tab
4. Select your email strategy:
  - **Fiskl templates** — leave the toggle off
  - **Custom text** — toggle on

**If using custom email text**, configure each scenario separately:

- New invoice email
- Payment reminder email
- Overdue notice email
- Recurring invoice email

### Email Placeholders

Placeholders insert invoice data into your email automatically.


| Placeholder | Description |
| ------------------ | --------------------------------------- |
| `{invoice_number}` | Invoice number |
| `{invoice_date}` | Invoice date |
| `{due_date}` | Payment due date |
| `{client_name}` | Client name |
| `{company_name}` | Your company name |
| `{invoice_total}` | Total amount |
| `{invoice_link}` | Link to view and pay the invoice online |


**Example custom email:**

```
Subject: Invoice {invoice_number} from {company_name}

Dear {client_name},

Please find invoice {invoice_number} for {invoice_total} attached.

Payment is due by {due_date}.

View and pay online: {invoice_link}

Best regards,
{company_name}
```



Step 4: Configure Language Settings

If you invoice clients in multiple languages, configure your language settings before creating invoices.

### Set a Default Language

1. Go to **Settings** > **Invoice and Quote Settings**
2. Under **Language Settings**, select your primary language
3. Select **Save**

All new invoices use this language by default. You can change the language for individual invoices when needed.

Fiskl supports over 60 languages across invoice and quote translations, email templates, client-facing payment screens, and payment schedule interfaces.

### Customise Language Translations (Optional)

To create a version for a regional dialect or specific terminology:

1. In **Language Settings**, select **Clone Language**
2. Select the base language to customise
3. Edit the translations: terminology, regional phrasing, or field labels
4. Select **Save**

Your custom language appears in the language selector when creating invoices.

**Learn more:** [Invoice and Quote Settings](/settings/invoice-quotes-settings)



Step 5: Connect Payment Gateways and Manual Payment Methods

Connecting a payment gateway lets clients pay invoices online directly from the invoice page.

1. Go to **Integrations**
2. Select the **Connect** button for your preferred payment gateway
3. Follow the on-screen instructions to complete the connection

Supported gateways include Stripe, GoCardless, PayPal, Google Pay, Apple Pay, iDEAL, and Bancontact.

You can also add manual payment methods (for example, bank transfer or cheque details) from **Settings** > **Invoice & Quote Settings** > **Manual Payment Methods**.

To automatically apply all active payment gateways to every new invoice, toggle **Auto-select Payment Gateways** on in **Settings** > **Invoice & Quote Settings** > **Manual Payment Methods**.

**Learn more:** [Payment Gateways](/integrations/payments/overview) | [Invoice & Quote Settings](/settings/invoice-quotes-settings)



---

## Create an Invoice

### Start a New Invoice

1. In the left navigation, select **Invoices**
2. Select **New Invoice**

### Add Client Details

The invoice pulls the following fields from the client profile automatically:

- Client name and address
- Client email (including CC and BCC addresses)
- Tax/VAT registration number (if set on the client)
- Default currency and time rate

**If the client already exists:**

1. Select the client from the **Client** dropdown
2. Their details populate automatically

**If this is a new client:**

1. Select **Add New Client**
2. Enter the client details: name, email address, billing address, and phone number (optional)
3. Select **Save**

:::info
Fiskl saves the client automatically under **Clients** in the left navigation.
:::

### Select a Currency

The invoice currency defaults to your company's base currency, or to the client's default currency if one is set on their profile. To change the currency for this invoice, select it from the currency dropdown in the **Basic Details** section.

### Select a Language

Your default language is selected automatically. To use a different language for this invoice, select it from the language dropdown.

The language you select affects the invoice itself, standard email templates, and all client-facing screens.

### Select a Template

The default template applies automatically. If you use multiple templates or brands, select the appropriate one from the dropdown.

### Set Invoice Details

**Invoice number**

Invoice numbers start at `INV-0001` and increment automatically. To use a different format, edit the number on any new invoice — Fiskl uses that format for all subsequent invoices.

Two limitations apply:

- Auto-increment only works if the number ends with a digit
- Date-based formats (for example, `2025-01-0001`) require manual updates at each period change

**Invoice dates**


| Field | Purpose | Default |
| ------------ | ----------------------------------------- | ----------------------------- |
| Invoice date | The date the invoice was issued | Today |
| Due date | The payment deadline | Seven days after invoice date |
| Sales date | Optional — records when the sale occurred | Empty |


To change the default due date period, go to **Settings** > **Invoice & Quote Settings**.

### Add Custom Fields

To add a purchase order or reference number, select **Custom Fields** > **Plus** > **Add Field**. Enter the label (for example, "Purchase Order") and value.

---

## Add Line Items

Line items are the billable rows on your invoice. Fiskl supports five types:


| Type | Description |
| ----------- | ------------------------------------------------------------ |
| **Product** | A physical or digital item. Products are reusable templates. |
| **Service** | A service you provide. Services are reusable templates. |
| **Expense** | A business expense you are billing to the client. |
| **Mileage** | Travel distance billed at a per-kilometre or per-mile rate. |
| **Time** | Billable hours tracked against the invoice. |


You can create line items directly on the invoice, or set them up in advance under **Products & Services** in the left navigation.

### Add a Product or Service

1. Select **Plus** in the line item section
2. Select **Add New** > **Product or Service**
3. Enter the line item details:
  - Item name and description
  - Quantity and unit price
  - Tax rate (defaults to your primary tax rate)
4. The amount calculates automatically

To add more detail, select **More details**:

- Change the default **Income Account** from the dropdown
- Select a different currency to create a multi-currency item
- Adjust the exchange rate and preview the converted total

### Add an Expense

1. Select **Plus** in the line item section
2. Select **Add New** > **Expense**
3. Enter the expense details:
  - Select a vendor from the dropdown or create one by entering the vendor name and selecting **+ Create**
  - Description and price
  - Tax rate (defaults to your primary tax rate)
4. The amount calculates automatically

To add more detail, select **More details**:

- Change the **Expense Account** or **Expense Category** from the dropdowns
- Select a different currency
- Add a receipt number if required

### Add Time

1. Select **Plus** in the line item section
2. Select **Add New** > **Time**
3. Enter the time details:
  - Name and description
  - Quantity (total time)
  - Rate (defaults to your saved preference, or the client default rate if set)
  - Tax rate (defaults to your primary tax rate)
4. The amount calculates automatically

To add more detail, select **More details**:

- Change the **Income Account** from the dropdown
- Select a different currency
- Toggle **Start – End time** on to enter specific start and end times — the duration calculates automatically

### Add Mileage

1. Select **Plus** in the line item section
2. Select **Add New** > **Mileage**
3. Enter the mileage details:
  - Name and description
  - Quantity (total distance in miles or kilometres)
  - Rate (defaults to your saved preference)
  - Tax rate (defaults to your primary tax rate)
4. The total calculates automatically

To add more detail, select **More details** and choose a distance entry method:

- **Direct** — total distance already entered (default)
- **Odometer** — enter start and end readings; toggle on for a round trip
- **Maps** — enter start and end addresses or use **Current Location**; drag the route line to adjust the path

Toggle **Reimbursement** on to mark the mileage as eligible for expense reimbursement.

### Select from Your Products & Services Catalogue

To add existing items instead of creating new ones:

1. Select **Plus** in the line item section
2. Select **Select Existing**
3. Select items from your Products & Services catalogue or saved client items

You can filter the list by type and currency.

---

## Apply Tax

Apply tax at the line item level. Fiskl supports single taxes, multiple taxes, and compound taxes per item.

Toggle the **excl** option on a line item to switch between tax-exclusive and tax-inclusive pricing.

If your tax number is not showing on the invoice, check both settings:

1. Go to **Settings** > **Tax Management** > **Tax Rates** and confirm the **Display tax number on invoices** checkbox is selected
2. Go to **Settings** > **Templates & Brands** and confirm the **Hide tax number** option is not selected

Your tax number appears automatically when at least one line item has tax applied.

---

## Apply Discounts and Deposits (Optional)

Apply discounts or request deposits at the invoice level, not per line item.

1. Select **Edit** next to **Payment Terms**
2. Toggle the **Discount** and/or **Deposit** options on
3. Enter a fixed amount (for example, `100` for a £100 discount) or a percentage (for example, `15%`)
4. The total updates automatically

Deposits appear as a separate line in the invoice total.

---

## Set Up Payment Schedules (Optional)

Split a single invoice into two to twelve instalments using payment schedules. Each instalment can be a fixed amount or a percentage of the total, and Fiskl tracks each instalment's payment status separately.

:::tip
Use payment schedules for short-term instalment billing. For long-term or indefinitely recurring billing, use [Recurring Invoices](/invoicing/recurring-invoice-management) instead.
:::

---

## Select Payment Methods

If you have connected a payment gateway, it appears under **Payment Methods**. Toggle each gateway on to make it available to your client on the invoice and payment page. Fiskl updates the invoice status automatically when your client pays.

Supported gateways: Stripe, Bancontact, iDEAL, GoCardless, Apple Pay, Google Pay, and PayPal.

:::tip
To automatically select available payment gateways on new invoices, go to **Settings** > **Invoice & Quote Settings** > **Manual Payment Methods** and toggle **Auto-select Payment Gateways** on.
:::

Manual payment methods are saved under **Settings** > **Invoice & Quote Settings** > **Manual Payment Methods**.

---

## Save and Send

Select **Save** to save your invoice as a draft.

To send the invoice, see [Sending Invoices](/invoicing/sending-invoices).

---

## Common Issues

My tax number is not showing on the invoice

Two settings control tax number visibility — both must be configured correctly.

1. Go to **Settings** > **Tax Management** > **Tax Rates** and confirm the **Display tax number on invoices** checkbox is selected
2. Go to **Settings** > **Templates & Brands** and confirm the **Hide tax number** option is not selected

Your tax number only appears when at least one line item on the invoice has tax applied.



The invoice currency is wrong

The currency defaults to your company's base currency, or the client's default currency if one is set. To change it for an individual invoice, select the currency from the dropdown in the **Basic Details** section.

To update the client's default currency, go to **Clients**, select the client, and update their currency setting.



My client cannot pay online

Online payment requires an active payment gateway. Go to **Integrations** and confirm that Stripe or another gateway is connected and active. Check that the payment gateway toggle is also turned on within the invoice itself.

If no payment method is set up, your client will see the invoice but will not have a payment button.



The invoice number is out of sequence

If you edited an invoice number manually, Fiskl uses that number as the new base for auto-increment. Create a new invoice and manually enter the correct number. All subsequent invoices will increment from that point.



Template changes affected invoices I already sent

Template changes apply to all invoices using that template. If you need to change styling without affecting existing invoices, create a new template in **Settings** > **Templates & Brands** and apply it only to new invoices going forward.



---

## Related Topics

- [Invoice Management](/invoicing/invoice-management) — Edit, duplicate, void, and archive invoices
- [Sending Invoices](/invoicing/sending-invoices) — Email options, reminders, and client view
- [Recurring Invoices](/invoicing/recurring-invoice-management) — Automate regular billing
- [Invoice Payment Schedules](/invoicing/invoice-payment-schedules) — Split invoices into instalments
- [Tax Management](/settings/tax-management) — Configure tax rates and display options
- [Managing Clients](/clients-vendors/clients) — Set up client profiles and defaults
- [Payment Gateways](/integrations/payments/overview) — Connect Stripe and other payment methods
- [Products & Services](/products-services/overview) — Build a reusable catalogue of items

