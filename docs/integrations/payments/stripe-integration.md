---
title: Stripe
sidebar_position: 2
description: Optimize payment processing with Fiskl-Stripe integration. Automate invoicing and simplify financial transactions effortlessly.
keywords: ["Stripe integration Fiskl", "payment processing", "invoicing automation", "small business payments", "Fiskl features"]
slug: /integrations/payments/stripe
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
 - Integrations
 - Payment gateways
 - Stripe
---

# Connecting Stripe to Fiskl

Connecting Stripe to Fiskl transforms how you process online payments for your business. This integration allows you to accept credit, debit, and various other payment methods quickly and securely.

Learn more about [Stripe](https://stripe.com/).

<details>

  <summary>TL;DR - Watch a detailed video on the Stripe integration </summary>

  <div style={{ position: 'relative', paddingBottom: '40%', height: 0, width: '100%' }}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Pt4kY-msSAY?si=P9mh4ODD3c0aq1Rm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</details>

## Benefits

- **Quick setup**: Start accepting payments in minutes
- **Multiple payment methods**: Support for credit cards, debit cards, and more
- **Fast pay-outs**: Ensure you get paid quickly
- **Additional payment options**: Includes GooglePay, ApplePay, iDEAL, and Bancontact

## Connecting Stripe to Fiskl

You can either connect a new Stripe account or link an existing one.

### Creating a New Stripe Account

1. Select Integrations from the left menu
2. Choose "Connect to Stripe"
3. Enter your email address
4. Follow the instructions in Stripe

Once you've completed creating your new account, you may have to wait until all your KYC is verified and your account is approved. You can see the status of your account in your Stripe dashboard or in the Fiskl integration page.

### Connecting an Existing Stripe Account

1. Select Integrations from the left menu
2. Choose "Connect to Stripe"
3. Sign in
4. Select the account you want to give Fiskl access to
5. You will be redirected back to Fiskl

## Using Stripe Payments

Once connected, Stripe will appear as a payment method on your invoices.

:::info
Connected payment gateways are automatically selected for every invoice. You can change this in Invoice & quote settings.
:::

## Additional Payment Methods

Stripe enables access to several other payment methods:

### GooglePay and ApplePay

These are automatically available when you connect Stripe. Clients can choose these options when paying your invoice.

### iDEAL (Netherlands)

If you're based in the Netherlands:

1. Connect your Stripe account
2. Go to Integrations and select "Enable iDEAL"
3. Create invoices with iDEAL as a payment option

### Bancontact (Belgium)

If you're based in Belgium:

1. Connect your Stripe account
2. Go to Integrations and select "Enable Bancontact"
3. Create invoices with Bancontact as a payment option

## Managing Payment Gateways

- You can switch between payment gateways when creating a new invoice
- To remove a payment gateway, select the small "x" at the top of each gateway in the Integrations menu

## Disconnecting Stripe from Fiskl

There are two ways to disconnect Stripe from Fiskl:

1. In Stripe, see [Disconnect your Stripe from a third-party platform](https://support.stripe.com/questions/disconnect-your-stripe-account-from-a-connected-third-party-platform)
2. In Fiskl, go to the `Integrations` page and select the X on the connected Stripe card
