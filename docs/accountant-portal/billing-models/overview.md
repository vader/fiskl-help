---
title: "Billing Models Overview"
description: "Understand Bill Us and Client Pays billing models in the Accountant Portal and select the right model for your client relationships."
keywords: ["billing models", "bill us", "client pays", "subscription billing", "accountant billing", "client billing"]
sidebar_position: 1
---

This guide explains the two billing models available in the Accountant Portal and helps you select the right model for each client relationship.

## Two Billing Models

The Accountant Portal supports two distinct billing models. You can use both models within your practice, mixing them across clients and branches based on your needs.

### Bill Us Model

Your accounting firm pays for client subscriptions.

**How it works:**
- Your firm owns and controls the client account
- You pay all subscription fees through your branch payment method
- Client cannot disconnect the accountant relationship
- You control all billing and plan changes

**Best for:**
- Managed service arrangements
- Full-service bookkeeping clients
- White-label services
- Clients who want all-inclusive pricing

### Client Pays Model

The client pays their own subscription directly to Fiskl.

**How it works:**
- Client owns and controls their account
- Client pays Fiskl directly for their subscription
- Either party can disconnect the relationship
- Client manages their own billing and plan

**Best for:**
- Advisory relationships
- Consulting engagements
- Clients who prefer to pay directly
- Referral program participants (earns commission)

## Key Differences

| Feature | Bill Us Model | Client Pays Model |
|---------|---------------|-------------------|
| **Account ownership** | Your firm | Client |
| **Subscription payment** | Your firm pays | Client pays |
| **Relationship control** | Firm controls, client cannot disconnect | Either party can disconnect |
| **Setup process** | Add payment method, create account | Send invite link, client creates account |
| **Billing** | Monthly invoice per branch | Client billed directly |
| **Referral commission** | Not eligible | Eligible for commission |
| **Best use case** | Managed services | Advisory services |

## Mixed Billing Within Your Practice

You can use both billing models within the same organization and even within the same branch.

**Example practice:**
- London Branch (GBP):
  - 15 clients on Bill Us (full-service bookkeeping)
  - 8 clients on Client Pays (advisory only)
- Paris Branch (EUR):
  - 10 clients on Bill Us
  - 12 clients on Client Pays

This flexibility lets you match billing to the service level each client needs.

## Financial Considerations

### Bill Us Model Costs

**Your monthly invoice includes:**
- All client subscription fees on Bill Us model
- Prorated charges for mid-month additions
- Prorated credits for mid-month removals or downgrades
- One invoice per branch per month

**Payment requirements:**
- Valid payment method required before adding clients
- Payment method currency must match branch currency
- Automatic monthly billing via Stripe
- Past due accounts may have service interruptions

### Client Pays Model Costs

**Your costs:**
- None - client pays Fiskl directly
- No payment method required from your firm
- No monthly invoices for these clients

**Your revenue:**
- Eligible for referral commission (if enrolled in partner program)
- Commission based on client subscription value
- Monthly referral payments

## Selecting the Right Model

Consider these factors when selecting a billing model:

**Select Bill Us when:**
- You offer full-service bookkeeping
- Clients want all-inclusive pricing
- You want complete control over the account
- You provide white-label services
- Client relationship is long-term and stable

**Select Client Pays when:**
- You offer advisory or consulting services
- Client prefers to manage their own subscription
- You want to earn referral commission
- Relationship is project-based or short-term
- Client needs flexibility to disconnect

**You can also:**
- Start with Client Pays and switch to Bill Us later
- Offer different models to different clients
- Let client preference guide the decision

## Setup Requirements

### Bill Us Setup Requirements

Before adding Bill Us clients:
- [ ] Branch created with appropriate currency
- [ ] Valid payment method added to branch
- [ ] Payment method currency matches branch currency
- [ ] Payment method verified by Stripe

### Client Pays Setup Requirements

No advance setup required:
- Generate invitation link from portal
- Send link to prospective client
- Client completes their own setup
- Accept invitation when client sends it

**Optional:**
- Enroll in partner program for referral commission
- Create custom referral links for tracking

## What's Next

Learn more about each billing model:

**Implement Bill Us:** [Bill Us Model](/docs/accountant-portal/billing-models/bill-us-model)

**Implement Client Pays:** [Client Pays Model](/docs/accountant-portal/billing-models/client-pays-model)

**Switch models:** [Switching Billing Models](/docs/accountant-portal/billing-models/switching-billing-models)

**Earn commissions:** [Partner Program](/docs/accountant-portal/partner-program/overview)

---

## Available Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />