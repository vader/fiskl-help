---
title: "Templates and Brands"
description: "Create and manage invoice and quote templates in Fiskl. Customise layouts, colours, logos, display options, and custom emails."
keywords: ["invoice templates", "brands", "custom emails", "invoice layout", "logo", "template settings", "display options"]
sidebar_position: 6
tags:
  - Settings
  - Templates
  - Brands
toc_min_heading_level: 2
toc_max_heading_level: 3
---

The Templates and brands page lets you control the visual appearance of your invoices, quotes, and emails. You can create multiple templates with different layouts, colours, and logos, and set up brands to represent different business identities under one account.

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

Access Templates and brands by selecting the **gear icon** in the top left menu, then selecting **Templates & Brands**. You can also go directly to the [Template settings page](https://sandbox.fiskl.ca/templates) on the web Dashboard.

:::warning
Modifying an existing template affects all invoices and quotes that use it, including previously sent documents. Create a new template if you want to preserve the original appearance of sent documents.
:::

## Templates

A template defines the style and content of your invoices, quotes, and emails. You can create multiple templates and assign different ones to different invoices.

### Create or edit a template

1. Select **Add New Template**, or select an existing template to edit
2. Configure each section as described below
3. Use the live preview on the right side of the screen to see your changes in real time
4. Select **Save** when finished

## Name and Header

- Enter a descriptive template name (visible only to you, not to clients)
- Upload and resize your logo for invoices and quotes
- Upload a separate email logo for standard emails (square image, maximum 100 KB, rendered at 70×70 px)

## Brand Overrides

A brand is a template with overridden company details. This is useful if you operate multiple businesses or brands under one Fiskl account. You can override:

- Company name
- Email address
- Phone number
- Address
- Invoice name
- Quote name

:::tip
As you change brand values, the preview on the right updates in real time. Use this to check the layout, especially for the address block.
:::

## Theme and Colours

- Select a pre-set invoice layout
- Customise colours for individual elements: header, text, labels, and dividers

## Fonts

Select from available fonts for your documents.

Not all fonts support non-Latin scripts such as Chinese, Cyrillic, or Arabic when generating PDFs. After changing fonts, download a test PDF to confirm your text renders correctly.

## Display Options

Toggle visibility for the following elements on your invoices and quotes:

- Company ID
- Tax ID (must also be enabled in [Tax Settings](/docs/settings/tax-settings))
- FX rates for multi-currency line items
- Units
- Quantity
- Proforma label

## Attachments

Attach files to all invoices or quotes that use this template. This is useful for including standard documents such as terms of service or payment policies.

## Custom Emails

Create custom email content for different scenarios:

- Invoice emails
- Deposit request emails
- Partial payment emails
- Overdue reminder emails
- Quote emails

Use the provided placeholders for dynamic content such as `[Company name]`, `[Total]`, and `[Client name]`. These are replaced with actual values when the email is sent.

:::info
Custom emails are plain text without HTML formatting. The email logo (uploaded in the Name and Header section) is only available for standard emails, not custom emails.
:::

## Common Issues

<details>
<summary>Tax ID not appearing on invoices</summary>

Two settings control tax ID visibility. First, go to **Settings** > **Tax Settings** and confirm the **Display tax number on invoices** option is enabled. Then, in **Templates & Brands**, open the template and confirm the **Tax ID** display option is toggled on (not hidden). Both must be enabled for the tax ID to appear.

</details>

<details>
<summary>Font not rendering correctly in PDF</summary>

Not all fonts support non-Latin characters in PDF generation. Switch to a font that supports your language, then download a test PDF to confirm. Common safe choices support Latin, Cyrillic, and CJK characters.

</details>

<details>
<summary>Template changes affected previously sent invoices</summary>

Template changes apply globally to all documents using that template. To preserve the original appearance of sent invoices, create a new template for future use. Assign the new template to new invoices and leave the old template for historical documents.

</details>

## Related Topics

- [Invoice and Quote Settings](/docs/settings/invoice-quotes-settings) — Configure payment terms, manual payment methods, languages, and email delivery
- [Tax Settings](/docs/settings/tax-settings) — Set up tax agencies and rates that appear on your invoices
- [Creating Invoices](/docs/invoicing/creating-invoices) — Apply templates when creating invoices
- [Company Settings](/docs/settings/company-settings) — Set your default company details that appear on templates