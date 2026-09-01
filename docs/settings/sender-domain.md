---
title: Sender Domain
description: Send invoices and quotes from your own domain in Fiskl. Add your
  domain, set DNS records, verify delivery, and monitor sending health and
  statistics.
keywords:
  - sender domain
  - email delivery
  - DNS records
  - SPF
  - DKIM
  - DMARC
  - email deliverability
  - domain verification
sidebar_position: 10
tags:
  - Settings
  - Email
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import VideoEmbed from '@site/src/components/VideoEmbed';

  <VideoEmbed id="custom-email-domain" />

This guide explains how to send invoices and quotes from your own domain in Fiskl and helps you improve delivery so your emails reach your clients' inboxes.

## Why Use a Sender Domain

By default, Fiskl sends your invoice and quote emails from a Fiskl address. When you add your own sender domain, emails come from your business address instead. This builds trust with clients and reduces the chance that your messages land in spam.



The **Sender Domain** page also surfaces the health of your domain for sending email. Many delivery problems come from missing or misconfigured DNS records, such as SPF or DMARC. Fiskl highlights these issues so you can fix them and improve delivery.

**Key benefits:**

- Emails sent from your own business domain
- Clear view of the DNS records you need to add
- Ongoing checks on your domain's sending health
- Sending statistics for delivered, bounced, and complaint emails

## Before You Begin

You can only add a domain that you own, because you need to add DNS records to it. Ensure you have:

- Access to your domain's DNS settings, usually through your domain registrar or hosting provider
- The domain you want to send from (for example, `yourbusiness.com`)

## Accessing the Sender Domain Page

Go to **Settings** in the left menu, then select **Sender Domain**. You can also open the [Sender Domain page](https://app.fiskl.com/dashboard/settings/sender-domain) directly from the web Dashboard.

## Add Your Domain

Adding your domain starts the verification process. Once added, Fiskl generates the DNS records you need to prove ownership and enable sending.

1. On the **Sender Domain** page, enter the domain you want to send from.

2. Select **Add** to save the domain.

3. Fiskl generates the DNS records for your domain and displays them on the page.

After you add your domain, Fiskl shows the exact DNS records you need to add and the validation status of each one.

## Add Your DNS Records

Fiskl displays the DNS records your domain needs. You add these in your domain registrar or hosting provider's DNS settings, then Fiskl checks whether each record is in place.

### Verification records

These records prove that you own the domain and enable Fiskl to send on your behalf. They include **TXT** and **CNAME** records.

1. Copy each record shown on the **Sender Domain** page.

2. Add the records in your domain's DNS settings.

3. Return to Fiskl to see the validation status of each record.

The page shows whether each record is validated yet. Validation can take some time after you add the records, because DNS changes need to propagate.

### Health records

Fiskl also shows records that improve your domain's sending health, such as **SPF** and **DMARC**. These records tell receiving mail servers that Fiskl is allowed to send on your behalf, which reduces bounces and spam placement.

You can add the health records before validation completes, so it helps to add them at the same time as your verification records. After your domain is validated, Fiskl may show additional records to further improve your sending health.

:::tip
Add every record Fiskl shows, including SPF and DMARC. Domains with complete records see fewer bounces and better inbox placement.
:::

## Monitor Your Sending Health and Statistics

Once your domain is set up, the **Sender Domain** page gives you an overview of how your emails are performing. This helps you spot delivery problems early.

The statistics include:

- **Sent**: The number of emails sent from your domain
- **Bounced**: The number of emails that could not be delivered
- **Complaints**: The number of recipients who marked your email as spam

Use these figures alongside your DNS records to understand your domain's health. A high bounce or complaint rate often points to a record that needs attention.

## What Happens If Records Are Removed

If the required DNS records are removed from your domain, Fiskl highlights this on the **Sender Domain** page. Your domain is then removed from being able to send emails, and invoices and quotes revert to sending from the default Fiskl address.

To resume sending from your domain, add the records back and let Fiskl validate them again.

:::warning
Removing your DNS records stops Fiskl from sending emails from your domain. Keep the records in place for as long as you want to send from your own address.
:::

## Common Issues

<details>
<summary>My DNS records are not validating</summary>

DNS changes need time to propagate, so validation is not always instant. Wait a short while, then check the **Sender Domain** page again.

If a record still shows as not validated after several hours:

1. Check that you copied the record exactly as shown in Fiskl.
2. Verify the record type matches (TXT or CNAME).
3. Confirm the record was saved in the correct domain's DNS settings.
4. Remove any duplicate or conflicting records.

</details>

<details>
<summary>My emails are still going to spam</summary>

Missing SPF or DMARC records are the most common cause of spam placement.

1. Open the **Sender Domain** page and review the health records.
2. Add every record shown, including SPF and DMARC.
3. Check your sending statistics for a high complaint rate.

After validation, Fiskl may show additional records. Add these to further improve inbox placement.

</details>

<details>
<summary>My domain stopped sending emails</summary>

This usually means one or more required DNS records were removed or changed.

1. Open the **Sender Domain** page and look for highlighted records.
2. Add back any missing records in your domain's DNS settings.
3. Wait for Fiskl to validate the records again.

While your domain is not sending, invoices and quotes send from the default Fiskl address.

</details>

## Related Topics

- [Invoice & Quote Settings](/settings/invoice-quotes-settings) — Configure templates, payment terms, and email delivery defaults
- [Company Settings](/settings/company-settings) — Update your business details, logo, and base currency
- [Creating Invoices](/invoicing/creating-invoices) — Build and send invoices to your clients
