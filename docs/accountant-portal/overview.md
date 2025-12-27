---
title: "Accountant Portal Overview"
description: "Learn how Fiskl's Accountant Portal helps accounting firms manage multiple clients, branches, and team members with flexible billing and access controls."
keywords: ["accountant portal", "accounting portal", "client management", "branch management", "team hierarchy", "accountant access", "multi-branch accounting"]
sidebar_position: 1
---

This section explains how the Accountant Portal works and helps you organize your accounting practice efficiently with multi-branch client management.

## Why Use the Accountant Portal

The Accountant Portal supports accounting firms of any size with tools designed for growth and flexibility. You can manage clients across multiple branches, control team access with granular permissions, and select billing methods that work for your practice.

**Key benefits:**
- Manage multiple branches with different currencies
- Control team access with customizable roles and permissions
- Select between firm-paid or client-paid billing models
- Track client accounts and team activity in one dashboard
- Earn referral revenue through the partner program

## Key Concepts

Understanding these concepts is essential for working with the Accountant Portal:

- **Parent Organization**: The top-level entity representing your accounting firm. The parent manages all branches and billing but cannot directly invite clients.
- **Branch**: A location-specific division of your firm. Each branch operates in a single currency and requires its own payment method for Bill Us clients.
- **Super Admin**: The highest permission level with complete access to all branches, users, and billing across the entire organization.
- **Branch Roles**: Permissions assigned to accountants at the branch level (Owner, Admin, Member) that control available actions and access.
- **Billing Model**: Determines who pays subscription costs. Bill Us means your firm pays. Client Pays means the client pays their own subscription.

## How the Portal Works

The Accountant Portal organizes your practice using a two-tier hierarchy: parent organization and branches.

### Organization Structure

When you create your account, you become the Super Admin of your parent organization. The parent organization oversees all branches but doesn't directly manage client accounts. This structure maintains central control while giving each branch operational independence.

Create branches for different office locations or business units. For example, a firm might have branches in London, Paris, and Amsterdam. Each branch operates in its own currency and maintains its own client list.

**Branch currency requirements:**
- Each branch operates in a single currency
- Client accounts can use any currency regardless of branch currency
- A Euro-based branch can manage clients using US dollars, British pounds, or any currency
- Payment methods for Bill Us billing must match the branch currency

### Team Management

The portal supports organization-level roles and branch-level accountants.

**Organization-level roles apply across all branches:**
- **Super Admin**: Complete access to all branches, users, and billing settings
- **Billing Admin**: View all invoices, charges, and upcoming fees across branches
- **Viewer**: Read-only access to all branches and client data

**Branch-level accountants work within specific branches:**

You assign accountants to branches with specific permission levels. An accountant can have different permissions for each branch. For example, Sarah might have Owner permissions for the Amsterdam branch but only Member access for the Paris branch.

**Branch roles:**
- **Owner**: Full control over the branch including billing and team management
- **Admin**: Manage clients and team members but limited billing access
- **Member**: Work with clients but cannot manage team or billing

You can customize permissions for individual users. Remove specific permissions like billing access from an Admin role when needed.

### Client Management

Add clients using two billing models: Bill Us or Client Pays. Select the model that fits your practice and client relationship.

**Bill Us Model:**

Your firm pays all subscription costs for client accounts.

**Setup process:**
1. Add a valid payment method through Stripe (branch currency required)
2. Fiskl validates the payment method but charges nothing until you add clients
3. Create client accounts directly from your portal
4. Invite business owners to access their accounts

**Key features:**
- Your firm owns and controls the accounts
- Clients cannot disconnect the accountant relationship
- You control all billing and subscription changes
- Ideal for managed service arrangements

**Client Pays Model:**

The client pays their own subscription directly to Fiskl.

**Setup process:**
1. Generate a unique invitation link from your portal
2. Send the link to your prospective client
3. Client creates their account and adds payment method
4. You receive an invitation to access their account
5. Accept the invitation to begin working

**Key features:**
- Client owns and controls their account
- Either party can disconnect the relationship
- Client manages their own subscription and billing
- Ideal for advisory relationships or bookkeeping services

**Client and branch relationship:**

Clients belong to a specific branch regardless of billing model. The client's operating currency does not need to match the branch currency. A Euro-based branch can manage clients using Romanian Leu, US dollars, or any other currency without issues.

### Partner Referral Program

The partner referral program lets you earn revenue by referring new Fiskl users. The program applies only to Client Pays accounts.

**How it works:**

1. Enroll in the partner program through your portal
2. Access your referral dashboard showing statistics and active referrals
3. Generate custom referral links for tracking
4. Send referral links to prospects through your own email
5. Earn commission when referred clients subscribe

**Using referral links:**

When inviting a client through the Client Pays flow, select which referral link to use for proper tracking. Fiskl provides email templates containing your referral link, but you send all communications from your own email system to maintain your brand.

**Revenue tracking:**

The referral dashboard displays payment details, commission amounts, and referral status. Track which referrals convert to paying clients and monitor your earnings.

### Billing and Payments

The portal supports mixed billing models. Run some clients on Bill Us and others on Client Pays within the same organization and even within the same branch.

**Monthly billing:**

Fiskl generates one invoice per branch each month for Bill Us clients. Adding or upgrading users prorates automatically based on the billing cycle. Fiskl uses Stripe for payment processing and invoice management.

**Payment method management:**

To update your payment method or billing address:
1. Go to your portal dashboard
2. Select the billing section
3. Fiskl redirects you to Stripe's secure hosted page
4. Update payment details or billing address
5. Changes apply to future invoices automatically

**Client Pays billing:**

Clients on the Client Pays model manage their own billing directly with Fiskl. You have no payment responsibility for these accounts.

## Getting Started

To begin using the portal:

1. Sign up as the initial Super Admin for your organization
2. Create your first branch and add a payment method (for Bill Us model)
3. Invite accountants to the branch with appropriate permissions
4. Add your first clients using your preferred billing model

---

## Available Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />