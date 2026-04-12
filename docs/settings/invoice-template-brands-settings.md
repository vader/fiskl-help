---
title: "Templates and Brands"
description: "Create and manage invoice and quote templates in Fiskl. Customise layouts, colours, fonts, and set up brands for multiple business identities under one account."
keywords: ["invoice template", "quote template", "brand override", "logo", "custom email", "invoice design", "Fiskl settings"]
sidebar_position: 3
tags:
  - Settings
  - Templates
  - Brands
toc_min_heading_level: 2
toc_max_heading_level: 3
---


import TOCInline from '@theme/TOCInline';


This guide explains how to create and manage templates and brands in Fiskl. Templates control the visual appearance of your invoices, quotes, and emails, while brands let you represent different business identities under one account.


<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />


## Before You Begin


Go to **Settings** > **Invoice & Quote Settings** > **Templates & Brands** to open this page. You must be signed in to access the [Template settings page](https://app.fiskl.com/dashboard/settings/invoices/templates) directly on the web Dashboard.


Have the following ready before creating or editing a template:


- Your logo file in PNG or SVG format (minimum 400 px wide for invoice logos; square image under 100 KB for email logos)
- Your company registration number and tax ID, if you want these displayed on documents
- Your tax agencies in **Settings** > **Tax Management** > **Tax Agencies**, if you plan to show a Tax ID
- Brand details such as a separate company name, address, or email, if you operate multiple businesses under one account


:::warning
Modifying an existing template affects all invoices and quotes that use it, including previously sent documents. Create a new template if you want to preserve the appearance of documents you have already sent.
:::


## Templates


A template defines the style and content of your invoices, quotes, and emails. You can create multiple templates and assign different ones to different invoices. Toggle **Quote** on to create quote templates.


### Create or Edit a Template


1. Select **Add New Template**, or select an existing template to edit
2. Configure each section as described below
3. Use the live preview on the right to see your changes in real time
4. Select **Save** when finished


### Name and Header


Select the **General** tab to configure the template name, logo, and brand overrides.


1. Enter a descriptive template name — this is visible only to you, not to clients
2. Upload and resize your logo for invoices and quotes
3. Upload a separate email logo for standard emails (square image, maximum 100 KB, rendered at 70×70 px)


### Brand Overrides


A brand is a template with overridden company details. This is useful if you operate multiple businesses under one Fiskl account. You can override the following fields:


- Company name
- Email address
- Phone number
- Address
- Invoice name
- Quote name


:::tip
The preview on the right updates in real time as you change brand values. Use it to check the layout, especially for the address block.
:::


### Theme and Colours


Select the **Design** tab to configure how your invoices look. You can select a pre-set layout theme for your invoices and quotes, and customise colours for individual elements such as the header, text, labels, and dividers.


### Fonts


Select from available fonts for your documents. Not all fonts support non-Latin scripts such as Chinese, Cyrillic, or Arabic when generating PDFs. After changing fonts, download a test PDF to confirm your text renders correctly.


### Display Options


Select the **Display** tab to choose which company details and line item information appear on invoices and quotes sent to clients.


| Option | What it shows on your documents |
|---|---|
| **Company ID** | Your company registration number on invoices |
| **Tax ID** | Your tax ID number — must also be enabled in **Settings** > **Tax Management** > **Tax Agencies** |
| **FX Default Currency** | Converted totals in your base currency, shown alongside the invoice currency for foreign currency invoices |
| **Units** | Unit of measure for each line item |
| **Quantity** | Quantity for each line item |
| **Proforma** | A proforma label on invoices to indicate they are not final documents |


### Attachments


Attach files to all invoices or quotes that use this template. This is useful for standard documents such as terms of service or payment policies.


### Custom Emails


Create custom email content for different scenarios:


- Invoice emails
- Deposit request emails
- Partial payment confirmation emails
- Overdue reminder emails
- Quote emails


Use the provided placeholders for dynamic content such as `[Company name]`, `[Total]`, and `[Client name]`. These are replaced with the actual values when the email is sent.


:::info
Custom emails are plain text without HTML formatting. The email logo uploaded in the **Name and Header** section is only available for standard emails, not custom emails.
:::


## Common Issues


<details>
<summary>My Tax ID is not showing on invoices even though it is toggled on</summary>

The Tax ID display option in the template requires your Tax ID to also be enabled at the agency level. Go to **Settings** > **Tax Management** > **Tax Agencies** and open the relevant agency. Confirm the Tax ID field is filled in and set to visible. Once both settings are active, the Tax ID appears on new and existing invoices using this template.

</details>


<details>
<summary>Foreign currency invoices are not showing the converted total</summary>

Toggle on **FX Default Currency** in the **Display** tab of the template. This option shows the converted total in your base currency alongside the invoice currency. If the toggle is on but the converted total still does not appear, confirm the invoice uses a different currency from your base currency. The field only renders when a conversion is needed.

</details>


<details>
<summary>My custom email placeholders are showing as literal text instead of values</summary>

Check that you are using the exact placeholder format shown in the editor, including the square brackets — for example, `[Client name]` not `{Client name}` or `(Client name)`. Placeholders are case-sensitive. Copy them directly from the placeholder list in the editor to avoid typos.

</details>


## Related Topics


- [Invoice and Quote Settings](/settings/invoice-quotes-settings) — Configure payment terms, manual payment methods, languages, and email delivery
- [Tax Settings](/settings/tax-settings) — Set up tax agencies and rates that appear on your invoices
- [Creating Invoices](/invoicing/creating-invoices) — Apply templates when creating invoices
- [Company Settings](/settings/company-settings) — Set your default company details that appear on templates