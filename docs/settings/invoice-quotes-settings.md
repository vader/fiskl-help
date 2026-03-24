---
title: "Invoice and Quote Settings"
description: "Configure invoice payment terms, manual payment methods, email settings, and quote preferences to match your business needs in Fiskl."
keywords: ["invoice settings", "quote settings", "payment terms", "manual payment methods", "email domain", "BCC"]
sidebar_position: 10
tags:
  - Settings
  - Invoice and quote settings
toc_min_heading_level: 2
toc_max_heading_level: 3
---

The Invoice and quote settings page lets you configure payment terms, manual payment methods, language preferences, and email delivery for your invoices and quotes.

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

Access these settings by selecting the **gear icon** in the top left menu, then selecting **Invoice & Quote Settings**. You can also go directly to the [Invoice and quote settings page](https://my.fiskl.com/invoice-settings) on the web Dashboard.

## General Settings

### Payment terms

Set the default number of days between the invoice date and the due date. The default is seven days. You can override this on individual invoices.

### Auto-select payment gateways

Toggle this option to automatically select all available payment methods that match the invoice's country, currency, and amount. When enabled, your client sees every compatible payment option.

### Invoice notes

Add default notes that appear on all invoices. Basic HTML styling is supported. You can override these notes on individual invoices.

## Manual Payment Methods

Manual payment methods provide your clients with instructions for paying outside of integrated gateways (such as bank transfer or cheque). These appear on invoices and payment pages alongside any connected gateways.

### Add a manual payment method

1. Select the **+** icon to add a new payment method
2. Enter a descriptive name that your client sees on the invoice (for example, "Bank Transfer — Chase ACH")
3. Add clear instructions in the **Client notes** field
4. Include relevant details in name-value format: account number, sort code, bank name, and similar fields
5. Select **Save**

:::tip
Use basic HTML to style your payment instructions for readability. For example: `<b>Bank name:</b> Example Bank<br>` followed by an italicised reminder to include the invoice number.
:::

Your client sees a copy-to-clipboard button next to each payment detail for convenience.

## Language Settings

Fiskl supports over 60 languages for invoices, quotes, emails, and client-facing screens including payment pages and payment schedules.

### Set your primary language

Select the default language for all new invoices and quotes. You can change the language on individual invoices when needed.

### Clone and customise a language

If you need to adapt translations for a specific region or change terminology:

1. Select a base language to clone
2. Edit any translations you want to change
3. Select **Save** to create your custom language version

This is useful for adapting languages to regional dialects (for example, adapting Spanish for a specific Latin American market) or changing default terms such as replacing "Client" with "Customer" on your documents.

## Quote Settings

### Terms and conditions

Add standard terms and conditions that appear on all quotes. Basic HTML styling is supported.

### Quote notes

Add default notes for your quotes. You can override these on individual quotes.

### Quote validity period

Set the number of days a quote remains valid. The default is seven days.

## Email Settings

### Custom domain

Send invoices and quotes from your own email domain instead of Fiskl's default domain. This improves deliverability and brand recognition.

1. Go to [Dashboard Invoice & Quote Settings](https://my.fiskl.com/invoice-settings)
2. Enter your email address
3. Set up the required CNAME records (Fiskl sends instructions to the email you provide)
4. Wait for domain verification to complete

:::warning
Your domain must have proper DMARC and SPF records for reliable email delivery. Without these, providers like Gmail or Yahoo Mail may reject your emails. You can verify your settings using a [DMARC Checker](https://dnschecker.org/dmarc-record-validation.php) or [SPF Checker](https://dnschecker.org/spf-record-validation.php). Removing the CNAME records from your DNS after verification prevents emails from being delivered.
:::

### BCC for all emails

Set a BCC email address to receive a copy of every system-sent email. This is useful for keeping a centralised record of all sent invoices and quotes, and for team oversight.

:::info
BCC captures emails sent through Fiskl, but invoices and quotes shared via direct link are not included. Do not rely on BCC as a complete audit trail.
:::

## Common Issues

<details>
<summary>Client cannot see payment instructions</summary>

Confirm you have created a manual payment method and that the payment method is assigned to the invoice. Go to **Invoice & Quote Settings** and check that the method appears in the **Manual Payment Methods** section.

</details>

<details>
<summary>Emails going to spam or being rejected</summary>

If you use a custom email domain, verify your DMARC and SPF records are correctly configured. Use the checker tools linked in the Email Settings section above. If records were recently changed, allow up to 48 hours for DNS propagation.

</details>

<details>
<summary>Due date not calculating correctly on new invoices</summary>

The due date is calculated from the invoice date using the payment terms value. Confirm the correct number of days is set in **General Settings** > **Payment terms**. Individual invoices can override this default.

</details>

## Related Topics

- [Templates and Brands](/settings/invoice-template-brands-settings) — Configure the visual appearance of your invoices, quotes, and emails
- [Tax Settings](/settings/tax-settings) — Set up tax agencies and rates for your invoices
- [Creating Invoices](/invoicing/creating-invoices) — Create and send invoices using your configured settings
- [Payment Gateways](/integrations/payments/overview) — Connect Stripe, PayPal, or GoCardless for online payments