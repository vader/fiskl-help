---
title: "Payment Gateways Overview"
description: "Connect payment gateways to Fiskl to accept online payments on invoices, automate payment collection, and improve cash flow with secure, convenient payment options."
keywords: ["payment gateways", "online payments", "Stripe", "PayPal", "GoCardless", "invoice payments", "payment processing", "direct debit", "recurring payments"]
sidebar_position: 1
---

# Payment Gateways

Payment gateways let you accept online payments directly on your Fiskl invoices. By connecting payment providers, you offer clients convenient payment options, get paid faster, and automate payment reconciliation.

## Why Connect Payment Gateways?

Payment gateways transform your invoices from static documents into payment-ready tools. Instead of waiting for bank transfers or checks, clients can pay immediately with their preferred method.

**Key benefits:**
- **Faster payments** - Reduce payment time from weeks to minutes
- **Higher collection rates** - Convenient payment options increase on-time payments
- **Automated reconciliation** - Payment data syncs to Fiskl automatically
- **Global reach** - Accept payments from clients worldwide
- **Professional appearance** - Payment buttons appear automatically on invoices
- **Improved cash flow** - Faster collection means better cash management

## Key Concepts

Understanding these concepts helps you select and configure the right payment gateways for your business:

- **Payment Gateway** - A service that processes online payments securely between your client and your bank account
- **Payment Method** - How clients pay (credit card, debit card, digital wallet, direct debit)
- **Transaction Fee** - Percentage or fixed amount charged by the gateway per transaction
- **Payout Schedule** - How quickly funds transfer from the gateway to your bank account
- **Direct Debit** - Automated bank transfers authorized by the client for recurring payments
- **Payment Mandate** - Client authorization for recurring direct debit payments

## How Payment Gateways Work

Payment gateways integrate seamlessly with your Fiskl invoicing workflow:

1. **Connect** - Link your payment gateway account to Fiskl through secure authentication
2. **Configure** - Set which payment gateways appear on invoices by default
3. **Invoice** - Create invoices as normal - payment buttons appear automatically
4. **Send** - Client receives invoice with payment options displayed prominently
5. **Pay** - Client selects payment method and completes secure payment
6. **Sync** - Payment data imports to Fiskl automatically
7. **Reconcile** - Match payment to invoice and bank transaction

The entire process happens automatically after initial setup. You create invoices, clients pay online, and Fiskl tracks everything.

## Available Payment Gateways

Fiskl integrates with three major payment providers, each serving different payment needs.

### Stripe

Stripe provides comprehensive payment processing with the widest range of payment methods.

**Best for:**
- Accepting credit and debit cards
- International client payments
- Digital wallet support (Apple Pay, Google Pay)
- Flexible payment options
- Fast setup and quick payouts

**Payment methods:**
- Major credit cards (Visa, Mastercard, Amex)
- Debit cards
- Apple Pay and Google Pay
- iDEAL (Netherlands)
- Bancontact (Belgium)

**Typical payout:** 2 business days

**Learn more:** [Stripe Integration Guide](/integrations/payments/stripe-integration.md)

### PayPal

PayPal offers globally recognized payment processing with instant trust from clients.

**Best for:**
- Clients who prefer PayPal
- Quick setup without merchant account
- Global payment acceptance
- Instant recognition and trust
- Alternative to credit cards

**Payment methods:**
- PayPal balance
- Linked bank accounts
- Credit and debit cards (through PayPal)
- PayPal Credit

**Typical payout:** 1-2 business days

**Learn more:** [PayPal Integration Guide](/integrations/payments/paypal-integration.md)

### GoCardless

GoCardless specializes in recurring payments and automated direct debit collection.

**Best for:**
- Recurring billing and subscriptions
- Service-based businesses
- Improving cash flow with automation
- Reducing late payments
- Payment schedules and installments

**Payment methods:**
- Direct Debit (30+ countries)
- Instant Bank Pay (UK only via Open Banking)

**Typical payout:** 2 business days after collection

**Special features:**
- Automated recurring payment collection
- Payment mandate system for authorized collections
- Lower fees than card payments
- Suitable for high-value recurring payments

**Learn more:** [GoCardless Integration Guide](/integrations/payments/gocardless-integration.md)

## Selecting the Right Payment Gateway

Select payment gateways based on your client preferences, payment types, and business model.

### For One-Time Payments

**Stripe or PayPal recommended:**
- Immediate payment collection
- Wide payment method support
- Client flexibility in payment choice
- Good for project-based work
- Suitable for variable invoice amounts

**Select Stripe when:**
- You want maximum payment options
- You serve international clients
- You need Apple Pay and Google Pay
- You prefer modern payment experience

**Select PayPal when:**
- Your clients already use PayPal
- You want instant recognition
- You need quick setup
- You serve global customers

### For Recurring Payments

**GoCardless recommended:**
- Automated payment collection
- Lower transaction fees than cards
- Reduces manual follow-up
- Improves cash flow predictability
- Client authorizes once, pays automatically

**Good for:**
- Monthly retainers
- Subscription services
- Consulting agreements
- Service contracts
- Payment plans

### For Both Payment Types

**Connect multiple gateways:**
- Stripe or PayPal for one-time payments
- GoCardless for recurring billing
- Offer clients payment choice
- Optimize fees by payment type

## Payment Gateway Comparison

| Feature | Stripe | PayPal | GoCardless |
|---------|--------|--------|------------|
| **Credit Cards** | Yes | Yes (via PayPal) | No |
| **Debit Cards** | Yes | Yes (via PayPal) | No |
| **Direct Debit** | No | No | Yes |
| **Digital Wallets** | Apple Pay, Google Pay | PayPal Wallet | No |
| **Recurring Payments** | Manual per invoice | Manual per invoice | Automated |
| **Setup Time** | 10 minutes | 5 minutes | 15 minutes |
| **Global Coverage** | 45+ countries | 200+ countries | 30+ countries |
| **Typical Fees** | 2.9% + 30¢ | 2.9% + fixed fee | 1% capped (UK) |
| **Payout Speed** | 2 days | 1-2 days | 2 days post-collection |
| **Best For** | Comprehensive options | Client preference | Recurring billing |

*Note: Fees vary by region and transaction type. Check provider websites for current rates.*

## Understanding Transaction Fees

All payment gateways charge fees for processing transactions. Understanding fee structures helps you select the most cost-effective option.

### Typical Fee Structures

**Stripe:**
- Credit/debit cards: 2.9% + 30¢ per transaction (US)
- Digital wallets: Same as cards
- International cards: Additional 1.5%
- Currency conversion: Additional 1%

**PayPal:**
- Standard rate: 2.9% + fixed fee (varies by currency)
- International transactions: Additional 1.5%
- Currency conversion: 3-4% above exchange rate

**GoCardless:**
- UK Direct Debit: 1% capped at £2
- European payments: 1% capped at €2
- International: Varies by scheme
- No setup or monthly fees

**Important:** Fiskl adds no additional fees to any payment gateway transactions.

### Optimizing Payment Costs

**For high-volume businesses:**
- Negotiate custom rates with providers
- Use GoCardless for recurring payments (lower fees)
- Reserve cards for one-time or urgent payments

**For international businesses:**
- Collect in client's currency when possible
- Use gateway's currency conversion rather than card issuer's
- Consider regional payment methods (iDEAL, Bancontact)

## Regional Considerations

Payment gateway availability and optimal choices vary by region.

### United Kingdom

**Recommended:**
- Stripe for card payments
- GoCardless for Direct Debit (Bacs)
- PayPal as alternative option

**Special features:**
- GoCardless Instant Bank Pay (Open Banking)
- Stripe supports Bacs Direct Debit
- Lower GoCardless fees for UK transactions

### European Union

**Recommended:**
- Stripe for pan-European coverage
- GoCardless for SEPA Direct Debit
- Regional methods (iDEAL, Bancontact)

**Special features:**
- SEPA Direct Debit through GoCardless
- PSD2 compliance built-in
- Local payment method support

### United States

**Recommended:**
- Stripe for comprehensive coverage
- PayPal for client preference
- GoCardless for ACH Direct Debit

**Special features:**
- ACH support through GoCardless
- Stripe ACH for bank transfers
- Wide card acceptance

### Middle East and Asia

**Recommended:**
- Stripe (available in most countries)
- PayPal for global transactions
- Regional gateways for local methods

**Considerations:**
- Check specific country availability
- Verify currency support
- Consider local payment preferences

## Multi-Currency Support

All payment gateways support multi-currency transactions, with different approaches.

### How Multi-Currency Works

**Stripe:**
- Present prices in customer's currency
- Convert to your settlement currency automatically
- Support 135+ currencies for charges
- Settle in 40+ currencies

**PayPal:**
- Accept payments in 25+ currencies
- Convert to your account currency
- Currency conversion fees apply
- Client sees amount in their currency

**GoCardless:**
- Collect in customer's local currency
- Automatic conversion to your currency
- Support for GBP, EUR, USD, SEK, DKK, AUD, NZD, CAD
- Local payment schemes by country

### Currency Best Practices

**For international clients:**
- Invoice in client's currency when possible
- Show converted amounts clearly
- Understand conversion fee structure
- Consider Fiskl's multi-currency features

**For your business:**
- Set base currency in Fiskl settings
- Gateway conversions reconcile automatically
- Track foreign exchange impact
- Use consistent currency strategy

## Security and Compliance

All payment gateways implement industry-standard security to protect transactions.

### Security Features

**All gateways provide:**
- PCI-DSS compliant processing
- Encrypted payment data transmission
- Secure payment pages (SSL/TLS)
- Fraud detection and prevention
- Two-factor authentication

**Your clients' protection:**
- No card details stored in Fiskl
- Payments processed on gateway's secure servers
- Bank-level encryption
- Chargeback protection available
- Dispute resolution support

### Compliance Standards

**Stripe:**
- PCI Level 1 Service Provider
- SOC 2 Type II certified
- GDPR compliant
- 3D Secure 2.0 support

**PayPal:**
- PCI-DSS compliant
- Buyer and seller protection
- GDPR compliant
- FCA regulated (UK)

**GoCardless:**
- FCA authorized in UK
- PSD2 compliant
- GDPR compliant
- Open Banking certified

## Configuring Default Payment Options

After connecting gateways, configure which ones appear on invoices automatically.

### Setting Defaults

1. Go to **Settings** > **Invoices & Quotes**
2. Locate **Payment Gateways** section
3. Select which gateways appear by default
4. Arrange display order
5. Save settings

### Per-Invoice Overrides

When creating invoices:
- Toggle specific payment gateways on/off
- Change for individual clients
- Adjust based on payment type
- Override defaults as needed

### Best Practices

**Enable multiple options:**
- Give clients payment choice
- Increase likelihood of quick payment
- Different clients prefer different methods

**Consider payment type:**
- Cards for one-time payments
- Direct debit for recurring services
- Multiple options for flexibility

## Common Questions

### How quickly do I receive payments?

**Stripe:** 2 business days after payment (customizable)
**PayPal:** 1-2 business days
**GoCardless:** 2 business days after collection from client's account

Payout schedules vary by country and account type. Check your gateway dashboard for specific timing.

### Can I use multiple payment gateways?

Yes. Connect all three gateways to offer maximum payment flexibility. Clients see all connected options on invoices and select their preference.

### What happens if a payment fails?

Fiskl updates the invoice status automatically. For credit card failures, clients can retry immediately. For direct debit failures, GoCardless attempts collection again based on retry settings.

### Do I need a business bank account?

Stripe and PayPal work with business or personal accounts, though business accounts are recommended for proper accounting. GoCardless requires business verification for most countries.

### How do refunds work?

Process refunds through the payment gateway dashboard:
- Stripe: Issue refunds in Stripe dashboard
- PayPal: Process refunds in PayPal account
- GoCardless: Cancel or refund in GoCardless dashboard

Fiskl syncs refund data automatically when connected.

### Are there transaction limits?

**Stripe:** Varies by account type and region
**PayPal:** Depends on account verification level
**GoCardless:** £5,000 (UK), $5,000 (US), varies by country

Contact the gateway provider to increase limits for your business.

## Getting Started

Begin with the payment gateway that best matches your business model:

**Priority 1: Primary Payment Method**
- Stripe for comprehensive options
- PayPal if clients prefer it
- GoCardless for recurring billing

**Priority 2: Additional Options**
- Add secondary gateway for client choice
- Offer both cards and direct debit
- Expand as payment needs grow

**Priority 3: Optimize Configuration**
- Set invoice defaults
- Configure payout schedules
- Monitor transaction fees
- Adjust based on usage patterns

## Need More Help?

**Connect Stripe:** [Stripe Integration Guide](/integrations/payments/stripe-integration.md)

**Connect PayPal:** [PayPal Integration Guide](/integrations/payments/paypal-integration.md)

**Connect GoCardless:** [GoCardless Integration Guide](/integrations/payments/gocardless-integration.md)

**Overall integrations:** [Integrations Overview](/integrations/overview.md)

**Recurring invoices:** [Creating Recurring Invoices](/invoicing/create-recurring-invoices)

---

## Available Payment Gateway Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />