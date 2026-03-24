---
title: "Bill Us Model"
description: "Complete guide to the Bill Us billing model where your accounting firm pays for client subscriptions and owns the accounts."
keywords: ["bill us", "firm pays", "managed billing", "accountant pays subscription", "account ownership"]
sidebar_position: 2
---

This guide explains how the Bill Us billing model works and helps you set up client accounts where your firm pays subscription costs.

## How Bill Us Works

In the Bill Us model, your accounting firm pays all subscription costs for client accounts. You own and control these accounts completely.

**Key characteristics:**
- Your firm owns the client account
- You pay monthly subscription fees
- Client cannot disconnect the relationship
- You control all billing and plan changes
- Prorated billing for mid-month changes
- One invoice per branch per month

## Before You Begin

Complete these setup steps before adding Bill Us clients:

**Requirements:**
- [ ] Branch created in portal
- [ ] Branch currency selected
- [ ] Valid payment method added via Stripe
- [ ] Payment method currency matches branch currency
- [ ] Payment method verified successfully

## Step-by-Step: Add Payment Method

Your branch needs a valid payment method before adding Bill Us clients.

**To add a payment method:**

1. Go to your **Branch Dashboard**
2. Select **Billing** > **Payment Methods**
3. Select **Add Payment Method**
4. Enter payment details via Stripe:
   - Card number
   - Expiration date
   - CVV security code
   - Billing address (must match bank records)
   - Cardholder name
5. Select **Save**

**Important notes:**
- Fiskl validates the payment method immediately
- No charges occur until you add Bill Us clients
- Payment method currency must match branch currency exactly
- Example: GBP branch requires GBP payment method

## Step-by-Step: Add Bill Us Client

Once your payment method is set up, add client accounts.

**To add a Bill Us client:**

1. Go to **Clients** in your branch dashboard
2. Select **Add Client**
3. Select billing model: **Bill Us**
4. Select subscription plan:
   - Essential
   - Growth
   - Professional
   (Plans and pricing appear based on your region)
5. Enter client details:
   - Company name
   - Contact email
   - Business address
   - Phone number (optional)
6. Enter business owner details:
   - Owner name
   - Owner email address
7. Review subscription cost
8. Select **Create Client Account**

**What happens next:**
- Fiskl creates the client account immediately
- Your firm owns and controls this account
- Business owner receives invitation email to access their account
- Client cannot close account or disconnect relationship
- Prorated charges apply to your next monthly invoice

## Inviting Business Owners

After creating the account, the business owner receives an invitation to access their Fiskl account.

**The invitation includes:**
- Link to create their password
- Account access instructions
- Your firm's contact information
- Getting started resources

**Business owner capabilities:**
- Full access to their Fiskl account
- Create invoices, track expenses, manage banking
- Cannot change subscription or disconnect accountant
- Cannot close the account

## Managing Bill Us Clients

Control client accounts from your branch dashboard.

**You can:**
- Upgrade or downgrade subscription plans
- Add or remove accountant access
- View all client data and reports
- Manage client settings
- Close client accounts when needed

**To change a client's plan:**

1. Go to **Clients** in branch dashboard
2. Select the client
3. Select **Subscription** > **Change Plan**
4. Select new plan
5. Select **Confirm Change**

Changes prorate automatically on your next invoice.

## Understanding Bill Us Billing

Fiskl generates one invoice per branch each month covering all Bill Us clients.

**Your monthly invoice includes:**
- Subscription fees for all Bill Us clients in that branch
- Prorated charges for clients added mid-month
- Prorated credits for clients removed or downgraded
- Total due for the branch

**Billing timeline:**
- Invoices generated on the 1st of each month
- Payment automatically charged to your payment method
- Invoice available in portal dashboard
- Payment receipts sent via email

**Example invoice (London Branch - GBP):**

```
Client A - Professional Plan: £49.00
Client B - Growth Plan: £29.00
Client C - Professional Plan (added mid-month): £24.50
Client D - Downgrade credit: -£10.00
─────────────
Total: £92.50
```

## Prorated Billing

All mid-month changes prorate automatically.

**Adding clients mid-month:**
- Prorated based on days remaining in billing period
- Example: Add client on 15th of 30-day month = 50% of monthly fee

**Removing clients mid-month:**
- Prorated credit applied to next invoice
- Example: Remove client on 20th of 30-day month = 33% credit

**Changing plans mid-month:**
- Difference between plans prorated
- Upgrades charge difference, downgrades credit difference

## Payment Method Management

Update your payment method anytime to avoid service interruptions.

**To update payment method:**

1. Go to **Branch Dashboard** > **Billing**
2. Select **Payment Methods**
3. Select **Update Payment Method**
4. Fiskl redirects to Stripe's secure page
5. Update card details or add new payment method
6. Select **Save**

Changes apply immediately to future invoices.

**Payment failures:**

If payment fails:
1. You receive email notification immediately
2. Grace period of 7 days to update payment method
3. Service interruption possible if not resolved
4. Update payment method to restore full service

## Best Practices

**Financial management:**
- Review monthly invoices before payment date
- Keep payment method current and valid
- Monitor client adds/removes for budget planning
- Set internal approval process for new clients

**Client relationships:**
- Explain Bill Us model clearly to clients upfront
- Include Fiskl costs in your service pricing
- Document that your firm owns the account
- Set expectations about account control

**Account management:**
- Review client plans quarterly for optimization
- Downgrade inactive clients to lower tiers
- Remove clients when relationships end
- Keep client contact information current

## Troubleshooting

### Payment Method Rejected

**Cause:** Invalid card details or currency mismatch

**Solution:**
1. Verify card details are correct
2. Confirm card currency matches branch currency
3. Check with bank for restrictions
4. Try different payment method
5. Contact support if issues persist

### Cannot Add Client

**Cause:** Payment method not verified or missing

**Solution:**
1. Go to **Billing** > **Payment Methods**
2. Verify payment method shows as "Verified"
3. Add payment method if missing
4. Try adding client again

### Unexpected Invoice Amount

**Cause:** Mid-month changes not accounted for

**Solution:**
1. Review invoice line items in portal
2. Check dates of client additions/removals
3. Verify proration calculations
4. Contact support if discrepancies remain

## Need More Help?

**Compare billing models:** [Billing Models Overview](/accountant-portal/billing-models/overview)

**Learn Client Pays:** [Client Pays Model](/accountant-portal/billing-models/client-pays-model)

**Switch models:** [Switching Billing Models](/accountant-portal/billing-models/switching-billing-models)

**Invite clients:** [Inviting Clients](/accountant-portal/client-management/inviting-clients)