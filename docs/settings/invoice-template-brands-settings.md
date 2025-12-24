---
title: Invoice Templates
sidebar_position: 6
description: Maintain brand consistency with Fiskl's template management. Create and edit templates for documents and branding elements effortlessly.
keywords: ["Templates Fiskl", "brand management", "document templates", "customize branding", "professional templates"]
slug: /settings/template-brand-settings
tags:
  - Settings
  - Templates
  - Brands
---

The Templates and brands Settings page allows you to create and manage various styled invoices, quotes, and emails. You can also set up multiple brands within one account, giving you flexibility in how you present your business to clients.

Access Templates and brands Settings using the `gear icon` on the top left menu or visit the [Template settings page](https://sandbox.fiskl.ca/templates) on the web dashboard.

## Templates

A template defines the style and content of your invoices, quotes, and emails. With templates, you can:

- Choose different invoice layouts
- Customize colors and fonts
- Add and resize logos
- Include attachments
- Create custom emails for various scenarios

:::info[caution]
Modifying a template affects previously sent invoices using that template. Consider creating a new template to avoid unintended changes to historical documents.
:::

## Brands

A brand is a template with overridden company details. This feature is particularly useful if you operate multiple brands under one accounting entity.

## Configuring Templates and Brands

Follow these steps to set up your templates and brands:

1. Navigate to the Templates and brands settings page via the gear icon at the top of the left menu
2. Click "Add New Template" or select an existing template to edit
3. Customize the following sections:

### Name & Header
- Give your template a descriptive name (visible only to you)
- Add and adjust the size of your logo
- Upload an email logo for standard emails (square image, max 100KB, rendered at 70x70 px)

### Brand Over-rides
Override these company details if creating a brand:
- Company name
- Email address
- Phone number
- Address
- Invoice name
- Quote name

:::info[tip]
As you change these values, you'll see them update in the preview on the right. Use this to adjust the layout, especially for the address
:::

### Theme and Colors
- Select a pre-set invoice layout
- Customize colors for various elements (header, text, labels, dividers)

### Fonts
Choose from available fonts for your documents

:::info[caution]
Not all fonts support languages like Chinese, Cyrillic, or Arabic when generating PDFs. Always test your invoice by downloading the PDF after changing fonts
:::

### Display Options
Toggle visibility for:
- Company ID
- `Tax ID` (must be enabled in tax settings)
- FX rates for multi-currency line items
- Units
- Quantity
- Proforma label

### Attachments
Add files to be included with all invoices or quotes using this template (e.g., terms of service)

### Custom Emails
Create custom emails for:
- Invoices
- Deposit requests
- Partial payments
- Overdue reminders
- Quotes

Use provided templates and placeholders for dynamic content (e.g., `[Company name]`, `[Total]`, `[Client name]`)

:::info[note]
Custom emails are plain text without HTML formatting. The email logo is only available for standard emails.
:::

## Interactive Guides

Use these interactive demos to learn how to set up templates and brands:

### Configure Your Template
<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
  <iframe
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
    src="https://demo.fiskl.com/e/clz9jx3mf0030l30d73gjxbhl/tour"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowtransparency="true"
  ></iframe>
</div>

### Create a Branded Template

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
  <iframe
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
    src="https://demo.fiskl.com/e/clzazu9qj0007ie0c8f76kk8r/tour"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowtransparency="true"
  ></iframe>
</div>

Remember: Regularly review and update your templates and brands to ensure they reflect your current business needs and branding guidelines. Test all changes by generating sample documents before using them with clients.
