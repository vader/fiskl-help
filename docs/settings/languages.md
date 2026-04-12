---
title: "Invoice Languages"
description: "Set your default invoice language and create custom translations for regional dialects or business-specific terminology in Fiskl invoices, quotes, and emails."
keywords: ["invoice language", "translation", "multilingual", "custom language", "regional dialect"]
sidebar_position: 5
tags:
   - Settings
   - Invoicing
   - Localisation
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

This guide explains how to configure invoice languages in Fiskl, including setting your default language and creating custom translations for regional dialects or business-specific terminology.

## Before You Begin

- Configure your language settings before creating invoices. Changing the default language later does not update existing invoices.
- Custom languages are built on top of any of the 60+ supported languages. You select the base language as part of the setup process.
- Some translation fields contain placeholders such as `{{1}}` or `{{2}}`. Keep these exactly as they are and only change the surrounding text.

## Set Your Default Language

Your default language applies to all new invoices. You can override it on individual invoices when needed.

1. Go to **Settings** > **Invoice and Quote Settings**
2. Select **Language**
3. Select your preferred language from the list
4. Select **Save**

All new invoices use this language.

:::tip
Fiskl supports over 60 languages, covering invoice text, email templates, client-facing payment screens, and payment schedule interfaces.
:::

## Create a Custom Language

Custom languages let you adapt an existing language for a specific region or replace default terminology with your own. For example, you might adapt Spanish for a particular Latin American market, or replace "Client" with "Customer" on all your documents.

1. Go to **Settings** > **Invoice and Quote Settings** > **Language**
2. Select **Add Custom Language**
3. Select the base language to customise
4. Enter a name for your custom language
5. Edit the translation fields as needed:
   - Replace terminology to match your business or region
   - Update field labels to suit your audience
6. Select **Save**

Your custom language appears in the language selector when you create or edit invoices.

:::warning
For any translation fields that contain placeholders such as `{{1}}` or `{{2}}`, keep the placeholders exactly as they appear. Only edit the text around them. For example, in `Payment ({{1}} of {{2}})` you can change the word "Payment" but must leave `{{1}}` and `{{2}}` unchanged.
:::

## Change the Language on an Individual Invoice

You can override the default language for any single invoice without changing your account-wide setting.

1. Open the invoice you want to edit
2. Select the **Language** field in the document settings
3. Select the language or custom language to apply
4. Select **Save** or send the invoice as normal

## Common Issues

<details>
<summary>My existing invoices did not change after I updated the default language</summary>

The default language setting only applies to new invoices created after the change. Existing invoices keep the language they were created with.

To update the language on an existing invoice, open it, select the **Language** field, select the correct language, and select **Save**.

</details>

<details>
<summary>I cannot find my custom language in the invoice language selector</summary>

Custom languages only appear after they have been saved successfully. Go to **Settings** > **Invoice and Quote Settings** > **Language** and confirm your custom language is listed. If it is missing, select **Add Custom Language** and recreate it.

</details>

<details>
<summary>My translations are not showing on the client-facing payment screen</summary>

Payment screen translations are applied from your default language setting, not from the individual invoice language. Go to **Settings** > **Invoice and Quote Settings** > **Language**, confirm the correct language is set as default, and select **Save**.

</details>

<details>
<summary>I accidentally removed a placeholder like `{{1}}` d from a translation field</summary>

If a placeholder is missing, the field will not display correctly on your documents. Go to **Settings** > **Invoice and Quote Settings** > **Language**, select your custom language, and restore the placeholder in the affected field. Refer to the default language version of the field to see the correct placeholder format.

</details>

## Related Topics

- [Invoice and Quote Settings](invoice-quotes-settings.md) — Configure defaults for invoices, quotes, and payment terms
- [Invoice Template and Brand Settings](invoice-template-brands-settings.md) — Customise the appearance of your invoice documents
- [Creating Invoices](../invoicing/creating-invoices.md) — Create and send professional invoices to clients