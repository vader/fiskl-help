---
title: "Charge Us Model"
description: "Learn how the Charge Us billing model works in Atlas — your firm pays client subscriptions, owns the accounts, and controls the relationship."
keywords: ["Charge Us", "Bill Us", "firm pays", "billing model", "atlas", "client subscription", "billing verification", "transfer ownership"]
sidebar_position: 3
tags:
  - Atlas
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This page explains how the Charge Us billing model works, including billing verification, monthly invoicing, and transferring account ownership to a client.

## How Charge Us Works

With the Charge Us model, your firm pays the Fiskl subscription for the client. You create the client account from Atlas, choose their plan, and the cost appears on your branch's monthly invoice. Your firm owns the account and the client cannot disconnect the relationship.

This model suits fully managed service arrangements where the client relies on you for all accounting work.

## Billing Verification

Before you can add your first Charge Us client, Fiskl must verify your payment method. This is called billing verification.

You add an active payment method — a credit card, debit card, or bank transfer supported by Stripe in your region. The payment method currency must match the branch billing currency.

**Card payments** can receive instant approval depending on the risk score from Stripe. **Direct debit payments** typically take three to five days because the direct debit needs to flow through the banking system. You cannot add any Charge Us clients until the payment method is confirmed.

If your payment method risk score is not sufficient, Fiskl arranges a call to establish a relationship with your practice. This step exists because Charge Us subscriptions are billed at the end of each billing period — unlike standard Fiskl subscriptions, which are billed at the beginning. Fiskl carries the payment risk until the invoice is settled.

Once your billing is verified, you skip this step for all future Charge Us clients on that branch.

## Adding a Charge Us Client

1. Go to the **Dashboard** in Atlas
2. Select **Clients** > **Add Client**
3. Select **Charge Us**
4. Complete billing verification if this is your first Charge Us client
5. Select the subscription plan for the client
6. Enter the client's basic details including their email address
7. Enter the client's company details and select their account currency

Fiskl verifies the email address to ensure it is unique across the platform. The account is created instantly once you confirm. You become the primary accountant for the client, though this can be changed later.

:::warning
The currency you select becomes the client's base currency in Fiskl. All accounting data is set up relative to this currency. It cannot be changed after the account is created.
:::

The subscription plan can be upgraded or downgraded at any time after creation.

## Monthly Billing

Fiskl generates one invoice per branch each month covering all Charge Us clients on that branch. Adding or upgrading clients during a billing cycle prorates automatically. For a detailed breakdown of how prorating, mid-cycle charges, and estimated bills work, see [Charge Us Subscriptions](charge-us-subscriptions.md).

To update your payment method or billing address:

1. Go to the **Billing** section in Atlas
2. Fiskl redirects you to the Stripe customer portal
3. Update your payment details or billing address
4. Changes apply to future invoices automatically

## Transferring Ownership to a Client

If you part company with a Charge Us client, you can transfer ownership of the account to the client. This allows them to keep all their data and continue using Fiskl independently.

### How Ownership Transfer Works

When you transfer ownership:

1. Billing stops for your firm on that account
2. The account enters archive mode
3. The client can sign in and access all of their existing data
4. The client sets up their own subscription to become the account owner
5. The relationship between your firm and the client is removed

After the transfer, the client has full ownership of their account and manages their own billing directly with Fiskl. There is no remaining connection between the two accounts.

If the client later wants to re-engage your practice, they would need to invite you through the standard Client Pays invitation process from **External Access** in their Fiskl Dashboard.

### When to Transfer Ownership

Ownership transfer is useful when a client relationship ends but the client wants to keep their Fiskl account and data. Rather than disconnecting and leaving the client without access, the transfer gives them a clean path to independence.

## Key Characteristics

- Your firm creates and owns the client account
- Your firm pays the subscription on a monthly branch invoice
- The client cannot disconnect the accountant relationship
- You choose and can change the client's plan at any time
- Billing verification is required before adding your first client
- You can transfer ownership to the client if the relationship ends

## Related Topics

- [Charge Us Subscriptions](charge-us-subscriptions.md) — Prorating, mid-cycle billing, plan tiers, and payment management
- [Client Pays Model](client-pays-model.md) — How client-paid billing works
- [Switching Billing Models](switching-billing-models.md) — How to change a client's billing model
- [Adding Clients](../client-management/adding-clients.md) — Step-by-step guide to adding clients
- [Configuring Branches](../getting-started/configuring-branches.md) — Set up branches and billing currencies