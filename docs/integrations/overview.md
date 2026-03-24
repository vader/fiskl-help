---
title: "Integrations Overview"
description: "Connect Fiskl with banks, payment gateways, and financial services to automate bookkeeping, accept payments, and streamline your financial workflows."
keywords: ["integrations", "banking connections", "payment gateways", "Stripe", "PayPal", "Salt Edge", "Yodlee", "Wio Bank", "GoCardless", "financial automation"]
sidebar_position: 1
---

This section explains how Fiskl integrates with banks and payment providers to automate your financial workflows and eliminate manual data entry.

## Why Use Integrations?

Integrations connect Fiskl to your real-world financial accounts and payment systems. By automating data flow, you eliminate manual entry, reduce errors, and keep your financial records current without extra work.

**Key benefits:**
- Automate transaction imports from bank accounts
- Accept online payments directly on invoices
- Sync payment data automatically
- Multi-currency support across all integrations
- Real-time financial visibility
- Secure connections using industry standards

## Two Types of Integrations

Fiskl offers two categories of integrations that work together to create a complete financial management system.

### Banking Connections

Banking connections link your bank accounts, credit cards, and business accounts to Fiskl for automated transaction imports.

**What banking connections do:**
- Import transactions automatically from your accounts
- Sync daily for up-to-date financial data
- Support multiple accounts from different banks
- Handle multi-currency transactions automatically
- Enable zero-touch reconciliation

**Available banking providers:**
- **Salt Edge** - Europe, Asia, Middle East banks
- **Yodlee** - USA, Canada, South Africa banks
- **Wio Bank** - Direct UAE digital banking
- **Stripe** - Payment processor transactions

**Best for:**
- Automating bookkeeping workflows
- Eliminating manual transaction entry
- Real-time cash flow visibility
- Multi-account management
- International businesses with multiple currencies

**Learn more:** [Banking Connections](/integrations/banking/overview)

### Payment Gateways

Payment gateways let you accept online payments directly on your Fiskl invoices from clients worldwide.

**What payment gateways do:**
- Add payment buttons to invoices automatically
- Accept credit cards, debit cards, and digital wallets
- Process payments securely
- Sync payment data to Fiskl automatically
- Support recurring payments and direct debits

**Available payment providers:**
- **Stripe** - Credit cards, digital wallets (Apple Pay, Google Pay), global coverage
- **PayPal** - Popular online payment system, international transactions
- **GoCardless** - Direct debit and recurring payments, 30+ countries

**Best for:**
- Getting paid faster on invoices
- Offering clients convenient payment options
- Automating recurring billing
- International client payments
- Improving cash flow with automated collection

**Learn more:** [Payment Gateways](/integrations/payments/overview)

## How Integrations Work

All Fiskl integrations follow a similar workflow for secure, automated data exchange.

### Banking Connection Workflow

1. **Connect** - Authorize secure connection between your bank and Fiskl via provider
2. **Authenticate** - Complete your bank's security verification
3. **Sync** - Fiskl imports transaction history from date you select
4. **Categorize** - Transactions appear in Banking tab with suggested categories
5. **Reconcile** - Confirm matches to update Chart of Accounts and reports

### Payment Gateway Workflow

1. **Connect** - Link your payment gateway account to Fiskl
2. **Configure** - Set default payment methods and options
3. **Invoice** - Payment buttons appear automatically on invoices
4. **Collect** - Client pays using their preferred method
5. **Sync** - Payment data imports to Fiskl automatically
6. **Reconcile** - Match payment to invoice and bank transaction

## Security and Data Protection

All integrations use industry-standard security protocols to protect your financial data.

**Banking connection security:**
- Open Banking standards where available
- OAuth authentication (no password storage)
- Bank-grade encryption for data transmission
- Read-only access (cannot initiate transfers)
- Revocable access tokens

**Payment gateway security:**
- PCI-DSS compliant processing
- Encrypted payment data
- Secure redirect to payment processor
- No storage of card details in Fiskl
- Fraud protection tools included

**Your credentials:**
- Fiskl never stores your bank login credentials
- Payment gateway passwords remain with the provider
- You can revoke access anytime
- All connections are encrypted end-to-end

## Regional Coverage

Fiskl's integrations provide global coverage through strategic partnerships.

### Banking Coverage by Region

**Europe:**
- Salt Edge - Comprehensive Open Banking coverage
- Supports most European banks and fintech providers

**North America:**
- Yodlee - Major US and Canadian banks
- Stripe - US-based businesses using Stripe

**Middle East:**
- Salt Edge - Traditional banks across region
- Wio Bank - Direct UAE digital banking integration

**Asia:**
- Salt Edge - Growing coverage across major Asian markets
- Support for international banks with Asian branches

**Global:**
- Stripe - Works worldwide for payment processing data

### Payment Gateway Coverage

All payment gateways support international transactions:

- **Stripe** - Available in 45+ countries
- **PayPal** - Over 200 countries and regions
- **GoCardless** - 30+ countries with local payment schemes

## Selecting the Right Integrations

Select integrations based on your business location, client base, and payment needs.

### For Banking Connections

**Select Salt Edge when:**
- Your bank is in Europe, Asia, or Middle East
- You need Open Banking compliance
- You want broad international coverage
- Your bank supports PSD2 standards

**Select Yodlee when:**
- Your bank is in USA, Canada, or South Africa
- You need North American coverage
- You want comprehensive US bank support
- Your bank works with Yodlee

**Select Wio Bank when:**
- You bank with Wio in the UAE
- You want direct integration
- You need real-time UAE banking
- You prefer native Middle East solution

**Select Stripe when:**
- You process payments through Stripe
- You want payment and payout data
- You need transaction details for reconciliation
- You use Stripe for invoice payments

### For Payment Gateways

**Select Stripe when:**
- You want comprehensive payment options
- You need global coverage
- You want Apple Pay, Google Pay support
- You serve international clients
- You need flexible payment methods

**Select PayPal when:**
- Your clients prefer PayPal
- You want instant recognition and trust
- You serve global customers
- You need quick setup

**Select GoCardless when:**
- You have recurring billing
- You want automated direct debits
- You serve UK, EU, or international clients
- You want to improve cash flow automation
- You need reliable payment schedules

## Multiple Integration Support

Connect multiple integrations simultaneously for comprehensive financial automation.

**Common combinations:**

**Full Automation Setup:**
- Salt Edge or Yodlee for banking
- Stripe for online payments
- PayPal for client preference
- GoCardless for recurring billing

**Regional Setup (UAE):**
- Wio Bank for business banking
- Stripe for international clients
- Salt Edge for other bank accounts

**North American Setup:**
- Yodlee for bank connections
- Stripe for credit card payments
- GoCardless for recurring services

## Getting Started

Begin with the integration that provides the most immediate benefit:

**Priority 1: Banking Connection**
- Automates transaction imports
- Eliminates manual entry
- Provides immediate time savings
- Foundation for accurate bookkeeping

**Priority 2: Primary Payment Gateway**
- Accept payments on invoices
- Improve cash flow
- Provide client convenience
- Automate payment reconciliation

**Priority 3: Additional Payment Options**
- Expand payment methods
- Serve diverse client preferences
- Specialize for recurring billing
- Maximize collection efficiency

## Need More Help?

**Connect your bank:** [Banking Connections Overview](/integrations/banking/overview)

**Accept payments:** [Payment Gateways Overview](/integrations/payments/overview)

**Getting started guide:** [Connecting Your Bank](/getting-started/connecting-your-bank)

**Import statements manually:** [Importing Data](/getting-started/importing-data)

---

## Available Integration Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />