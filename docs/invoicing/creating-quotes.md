---
title: "Creating Quotes"
description: "Learn how to create professional quotes in Fiskl. Configure tax, branding, and email settings, then build and send quotes to your clients."
keywords: ["create quote", "quote", "quoting", "estimate", "proposal", "line items", "quote template", "convert quote to invoice"]
sidebar_position: 3
tags:
  - Invoicing
  - Quotes
toc_min_heading_level: 2
toc_max_heading_level: 3
---

## Before You Begin

:::note
Quote and invoice settings share the same configuration area. If you have already set up invoicing, your quotes will use the same templates, tax rates, and email settings automatically.
:::

Completing the setup steps below before creating your first quote ensures accuracy and consistent branding. These settings take ten to fifteen minutes to configure and streamline all future quoting.

**Setup checklist:**

- Configure tax settings (if your quotes include tax)
- Set up company information and branding
- Customise quote templates
- Configure language settings (if quoting clients in multiple languages)
- Set up email templates

---

## Step 1: Configure Tax Settings

<details>
<summary>Step 1: Configure Tax Settings</summary>

If you charge tax on products or services, configure your tax settings before creating quotes.

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

This rate applies automatically to all line items unless you specify otherwise on the quote.

**Learn more:** [Tax Settings](/settings/tax-settings)

</details>

---

## Step 2: Set Up Company Information and Branding

<details>
<summary>Step 2: Set Up Company Information and Branding</summary>

Your company information appears on every quote. Configure it once for consistent branding across all documents.

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
4. Select your time zone
5. Select **Save**

### Configure Quote Templates and Brands

Templates control the appearance and content of your quotes.

1. Go to **Settings** > **Invoice & Quote Settings** > **Templates and Brands**
2. Select **Add New Template** or edit the default template
3. Toggle the Quote on
4. Customise the template using the tabs below

**General Settings tab**

In the **Name & Header** section, you can:

- Set a template name (internal use only)
- Upload your logo and adjust its size
- Upload an email logo (square format, 100 KB max, displays at 70×70 px)

If you operate multiple brands under one entity, use **Brand Overrides** to set a separate company name, address, contact details, and logo. This lets you create distinct branded quotes without managing multiple accounts.

**Design tab**

- Select brand colours and font styles
- Preview changes in real time
- Select a layout style: Classic, Modern, or Minimal
- Choose which fields to display and adjust spacing

**Learn more:** [Invoice Templates and Brands](/settings/invoice-template-brands-settings)

</details>

---

## Step 3: Configure Email Templates

<details>
<summary>Step 3: Configure Email Templates</summary>

Fiskl sends email notifications when you issue and follow up on quotes.

### Choose an Email Strategy

Fiskl offers two approaches:

**Option 1: Fiskl HTML email templates (recommended)**

Pre-designed HTML emails that automatically match your quote language. These include dynamic placeholders and apply to all quote notification types.

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

- New quote email

### Email Placeholders

Placeholders insert quote data into your email automatically.

| Placeholder | Description |
| --- | --- |
| `{quote_number}` | Quote number |
| `{quote_date}` | Quote date |
| `{expiry_date}` | Quote expiry date |
| `{client_name}` | Client name |
| `{company_name}` | Your company name |
| `{quote_total}` | Total amount |
| `{quote_link}` | Link to view the quote online |

**Example custom email:**

```
Subject: Quote {quote_number} from {company_name}

Dear {client_name},

Please find quote {quote_number} for {quote_total} attached.

This quote is valid until {expiry_date}.

View your quote online: {quote_link}

Best regards,
{company_name}
```

</details>

---

## Step 4: Configure Language Settings

<details>
<summary>Step 4: Configure Language Settings</summary>

If you quote clients in multiple languages, configure your language settings before creating quotes.

### Set a Default Language

1. Go to **Settings** > **Invoice and Quote Settings**
2. Under **Language**, select your primary language
3. Select **Save**

All new quotes use this language by default. You can change the language for individual quotes when needed.

Fiskl supports over 60 languages across quote and invoice translations, email templates, and client-facing screens.

### Customise Language Translations (Optional)

To create a version for a regional dialect or specific terminology:

1. In **Language**, select **Add Custom Language**
2. Select the base language to customise
3. Edit the translations: terminology, regional phrasing, or field labels
4. Select **Save**

Your custom language appears in the language selector when creating quotes.

**Learn more:** [Invoice and Quote Settings](/settings/invoice-quotes-settings)

</details>

---

## Create a Quote

### Start a New Quote

1. In the left navigation, select **Quotes**
2. Select **New Quote**

### Add Client Details

The quote pulls the following fields from the client profile automatically:

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

The quote currency defaults to your company's base currency, or to the client's default currency if one is set on their profile. To change the currency for this quote, select it from the currency dropdown in the **Basic Details** section.

:::tip
You can adjust exchange rates for line items in different currencies.
:::

### Select a Language

Your default language is selected automatically. To use a different language for this quote, select it from the language dropdown.

The language you select affects the quote itself, standard email templates, and all client-facing screens.

### Select a Template

The default template applies automatically. If you use multiple templates or brands, select the appropriate one from the dropdown.

### Set Quote Details

**Quote number**

Quote numbers start at `QUOTE-0001` and increment automatically. To use a different format, edit the number on any new quote — Fiskl uses that format for all subsequent quotes.

Two limitations apply:

- Auto-increment only works if the number ends with a digit
- Date-based formats (for example, `2025-01-0001`) require manual updates at each period change

**Quote dates**

| Field | Purpose | Default |
| --- | --- | --- |
| Quote date | The date the quote was issued | Today |
| Expiry date | The date the quote offer expires | Thirty days after quote date |

To change the default expiry period, go to **Settings** > **Invoice & Quote Settings**.

### Add Notes & Terms

Add an overview/intro and Terms & Conditions for the quote. HTML tags like `<b>`, `<i>`, `<u>`, `<p>`, `<br>` are supported.

Default notes and terms can be configured in **Settings** > **Invoice & Quote Settings**.

---

## Add Line Items

Line items are the rows on your quote. Fiskl supports five types:

| Type | Description |
| --- | --- |
| **Product** | A physical or digital item. Products are reusable templates. |
| **Service** | A service you provide. Services are reusable templates. |
| **Expense** | A business expense you are billing to the client. |
| **Mileage** | Travel distance billed at a per-kilometre or per-mile rate. |
| **Time** | Billable hours tracked against the quote. |

You can create line items directly on the quote, or set them up in advance under **Products & Services** in the left navigation.

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

If your tax number is not showing on the quote, check both settings:

1. Go to **Settings** > **Tax Management** > **Tax Rates** and confirm the **Display tax number on invoices** checkbox is selected
2. Go to **Settings** > **Templates & Brands** and confirm the **Hide tax number** option is not selected

Your tax number appears automatically when at least one line item has tax applied.

---

## Apply Discounts (Optional)

Apply a discount at the quote level, not per line item.

1. Select **Edit** next to **Quote Terms**
2. Toggle the **Discount** option on
3. Enter a fixed amount (for example, `100` for a £100 discount) or a percentage (for example, `15%`)
4. The total updates automatically

---

## Convert a Quote to an Invoice

When a client accepts your quote, convert it to an invoice directly. This carries over all line items, client details, and amounts without re-entering them.

1. Open the accepted quote
2. Select **More** then **Convert to Invoice**
3. Review and adjust the invoice details as needed
4. Select **Save**

The original quote remains in your quotes list with a status of **Converted**. The new invoice is saved as a draft under **Invoices**.

:::tip
Convert a quote to an invoice as soon as your client confirms acceptance to keep your records consistent and begin the billing process without delay.
:::

---

## Save and Send

Select **Save** to save your quote as a draft.

To send the quote to your client, select **Save & Send**.

---

## Common Issues

<details>
<summary>My tax number is not showing on the quote</summary>

Two settings control tax number visibility — both must be configured correctly.

1. Go to **Settings** > **Tax Management** > **Tax Rates** and confirm the **Display tax number on invoices** checkbox is selected
2. Go to **Settings** > **Templates & Brands** and confirm the **Hide tax number** option is not selected

Your tax number only appears when at least one line item on the quote has tax applied.

</details>

<details>
<summary>The quote currency is wrong</summary>

The currency defaults to your company's base currency, or the client's default currency if one is set. To change it for an individual quote, select the currency from the dropdown in the **Basic Details** section.

To update the client's default currency, go to **Clients**, select the client, and update their currency setting.

</details>

<details>
<summary>The quote number is out of sequence</summary>

If you edited a quote number manually, Fiskl uses that number as the new base for auto-increment. Create a new quote and manually enter the correct number. All subsequent quotes will increment from that point.

</details>

<details>
<summary>Template changes affected quotes I already sent</summary>

Template changes apply to all quotes using that template. If you need to change styling without affecting existing quotes, create a new template in **Settings** > **Templates & Brands** and apply it only to new quotes going forward.

</details>

<details>
<summary>The Convert to Invoice option is not available</summary>

The **Convert to Invoice** option is available on quotes of any status. If you cannot see it, confirm that you have the correct role and permissions to create invoices. Contact your account owner if the option remains unavailable.

</details>

---

## Related Topics

- [Quote Management](quote-management.md) — Send, edit, duplicate, and manage quote statuses
- [Creating Invoices](creating-invoices.md) — Bill clients once a quote is accepted
- [Tax Settings](../settings/tax-settings) — Configure tax rates and display options
- [Invoice and Quote Settings](../settings/invoice-quotes-settings) — Set defaults for numbering, expiry, and language
- [Invoice Templates and Brands](../settings/invoice-template-brands-settings) — Customise the appearance of your quotes
- [Managing Clients](../clients-vendors/clients) — Set up client profiles and defaults
- [Products & Services](../products-services/overview) — Build a reusable catalogue of items
