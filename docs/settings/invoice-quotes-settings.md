---
title: Invoice and Quote Settings
sidebar_position: 10
description: Create consistent, professional business communications with Fiskl's customizable invoice and quote templates. Reflect your brand effectively.
keywords: ["Invoice settings Fiskl", "customize quotes", "branding invoices", "professional invoicing Fiskl", "quote templates"]
slug: /settings/invoice-quote-settings
tags:
 - Settings
 - Invoice and quote settings
---

The Invoice and quote settings page lets you customize how your invoices and quotes behave, including language options, payment methods, and payment terms. These settings ensure your documents align with your business needs and provide clear information to your customers.

Access Invoice and quote settings using the `gear icon` on the top left menu or visit the [Invoice and quote settings page](https://my.fiskl.com/invoice-settings) on the web dashboard.

## Language Settings

Fiskl supports over 60 languages for invoices, quotes, emails, and customer-facing screens, including payment schedules and payment interfaces.

- **Primary language**: Choose the language for all new invoices and quotes. You can change this for individual invoices as needed

### Custom Language Cloning

Customize existing language translations to suit your specific needs:

1. Select a base language to clone
2. Edit the translations as needed
3. Save your custom language version

This feature is useful for:
- Adapting languages like Spanish to specific regional dialects
- Customizing terminology (e.g., changing "Client" to "Customer")

## Payment Methods

Configure manual payment methods to provide clear instructions for your customers. These are separate from integrated payment gateways.

To create a new payment method:

1. Select the plus icon to "Add a new payment method"
2. Give it a descriptive name that will appear on the invoice for your customer to choose (e.g., Chase ACH)
3. Add clear customer instructions to "Customer notes"
4. Include necessary fields in name-value format (account number, routing number, bank name, etc.)

:::info[tip]
Use basic HTML to style your instructions for better readability. For example:
```html
<b>Bank name:</b> Example bank<br>
<i>Please include your invoice number in the transfer description.</i>
```
:::

These payment methods will appear on invoices and payment pages, with convenient copy-to-clipboard functionality to assist your customers.

## Invoice Settings

Configure your invoice preferences:

- **Payment terms**: Set the number of days between the invoice date and due date (default: 7 days)
- **Auto-select payment gateways**: Toggle to automatically select all available payment methods compatible with the invoice's country, currency, and amount
- **Invoice notes**: Add notes to appear on all invoices. Basic HTML styling is supported

## Quote Settings

Customize your quote preferences:

- **Terms and conditions**: Add standard terms and conditions for your quotes. Basic HTML styling is supported
- **Quote notes**: Include additional notes for your quotes. HTML styling can be used
- **Quote validity period**: Set the number of days a quote remains valid (default: 7 days)

## Email Settings

### Custom Domain

Set up a whitelisted email domain for sending invoices in your [Dashboard Invoice & Quote Settings](https://my.fiskl.com/invoice-settings):

1. Provide your email
2. Set up required CNAME records (instructions provided via email to this email)
3. Wait for your domain to be verified

:::info[caution]
Ensure your domain has proper DMARC and SPF records set up for the best email deliverability. Failure to have these may result in email providers like Gmail or Yahoo Mail rejecting your emails.

You can verify your settings are correct using tools like these:

[DMARC Checker](https://dnschecker.org/dmarc-record-validation.php)


[SPF Checker](https://dnschecker.org/spf-record-validation.php)

:::

:::info[WARNING]
Removing the CNAME records in your DNS after verification will prevent your emails from being delivered.
:::

### BCC for All Emails
Set a BCC email address for all system-sent emails. This is useful for:
- Keeping a centralized record of all sent invoices and quotes
- Team collaboration and oversight

:::info[note]
While useful, the BCC feature should not be relied upon as a complete audit trail, as invoices and quotes can also be shared via link.
:::

Remember: These settings help streamline your invoicing and quoting processes. Regularly review and update them to ensure they meet your evolving business needs. You can override most of these settings when creating individual invoices and quotes.
