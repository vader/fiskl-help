---
title: "Charge Us Subscriptions"
description: "Understand how Charge Us subscriptions work including prorating, mid-cycle billing, plan tiers, and managing your payment method."
keywords: ["Charge Us subscription", "prorating", "mid-cycle billing", "subscription plans", "estimated bill", "Stripe", "atlas billing"]
sidebar_position: 4
tags:
  - Atlas
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This page explains how Charge Us subscriptions are structured, how prorating works when you add or change clients mid-cycle, and how to manage your payment method.

## How Subscriptions Are Structured

Each branch has one subscription per billing currency. The subscription is managed through Stripe and covers all Charge Us clients on that branch in that currency.

Each subscription contains three price tiers representing the available plans: Solo, Pro, and Prime. Your clients can be on a mixture of these plans within the same subscription. You can upgrade or downgrade a client's plan at any time, and the change is reflected in your next charge.

## How Prorating Works

Prorating ensures you only pay for the portion of the billing cycle during which a client is active. The way prorating applies depends on whether you are adding your first client or a subsequent client on a branch.

### First Client on a Branch

When you add your first Charge Us client on a branch, Fiskl creates the subscription and takes a payment method at the same time. You are charged a prorated amount immediately for the remaining days in the billing cycle.

**Example:** You create a New York branch and add your first client on a $20 per month Solo plan halfway through the month. You are charged $10 immediately for the remaining half of the month. At the end of the month, your subscription renews and you are charged $20 for the following full month.

### Subsequent Clients

When you add more clients after the first, you are not charged immediately. The prorated cost for the current billing period is deferred and added to your next subscription charge.

**Example:** You already have one client on a $20 per month plan. Halfway through the month, you add a second client on the same plan. No immediate charge occurs. Your next bill includes three components:

- $20 for the first client's full month ahead
- $20 for the second client's full month ahead
- $10 for the second client's prorated half-month from the current cycle

Your estimated bill shows $50 for that upcoming charge.

## Upgrades and Downgrades

You can change a client's plan at any time between Solo, Pro, and Prime. The pricing difference is calculated as a prorated adjustment and applied to your next subscription charge. Upgrades and downgrades follow the same deferred billing pattern as adding subsequent clients.

## Understanding Your Estimated Bill

The estimated bill on your Dashboard reflects what your next subscription charge is expected to be. This figure includes:

- Full-month charges for all active clients going forward
- Any prorated amounts carried over from mid-cycle additions or plan changes during the current period

The estimated bill updates automatically as you add, remove, or change clients throughout the billing cycle.

## Managing Your Payment Method

To update your card or billing address:

1. Go to the **Billing** section in Atlas
2. Fiskl redirects you to the Stripe customer portal
3. Update your payment details or billing address
4. Changes apply to future charges automatically

Fiskl uses the Stripe customer portal for all payment method and billing address updates. This keeps your payment details secure and managed directly through Stripe.

:::info
Your payment method currency must match the branch billing currency. If you have branches in multiple currencies, each branch subscription uses the payment method associated with that currency.
:::

## Common Issues

<details>
<summary>My estimated bill seems higher than expected</summary>

The estimated bill includes prorated charges from mid-cycle additions or plan changes. These one-time adjustments appear on the next charge alongside the regular monthly amounts. After that charge, the bill returns to the standard monthly total for your active clients.

</details>

<details>
<summary>I added a client but was not charged immediately</summary>

Immediate charges only apply when you add your first Charge Us client on a branch. All subsequent client additions are deferred and included in your next subscription charge. This is expected behaviour.

</details>

<details>
<summary>I cannot update my payment method</summary>

Payment method updates are handled through the Stripe customer portal. If the redirect does not load, check your browser settings for pop-up blockers. If the issue persists, contact support.

</details>

## Related Topics

- [Charge Us Model](bill-us-model.md) — How the Charge Us billing model works including verification and ownership transfer
- [Client Pays Model](client-pays-model.md) — How client-paid billing works
- [Switching Billing Models](switching-billing-models.md) — How to change a client's billing model
- [Configuring Branches](../getting-started/configuring-branches.md) — Set up branches and billing currencies