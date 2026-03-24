---
title: "Setting Up Your Practice"
description: "Step-by-step guide to creating your accounting practice in Fiskl's Accountant Portal, including parent organization setup and initial configuration."
keywords: ["practice setup", "super admin", "parent organization", "accountant portal signup", "firm setup"]
sidebar_position: 2
---

This guide explains how to create your accounting practice in the Accountant Portal and helps you complete initial configuration as the Super Admin.

## Step 1: Sign Up for the Accountant Portal

Create your parent organization account at `portal.fiskl.com`.

**To sign up:**

1. Go to [portal.fiskl.com](https://portal.fiskl.com)
2. Select **Sign Up**
3. Enter your email address
4. Create a strong password
5. Verify your email address
6. Select **Complete Signup**

You automatically become the Super Admin of your new parent organization.

## Step 2: Configure Parent Organization Details

Add your firm's information for billing and identification.

**To add organization details:**

1. Go to **Settings** > **Organization**
2. Enter firm information:
   - Firm name (legal entity name)
   - Business address
   - Phone number
   - Website (optional)
3. Select **Save**

This information appears on invoices and communications.

## Step 3: Understand Your Super Admin Role

As the initial Super Admin, you have complete control over the entire organization.

**Super Admin capabilities:**
- Create and manage all branches
- Add and remove team members at any level
- View and manage all billing across branches
- Access all client accounts across all branches
- Assign and modify all roles and permissions
- Update organization settings

**Important notes:**
- The parent organization cannot directly invite clients
- Clients belong to specific branches, not the parent
- At least one branch is required before adding clients

## Step 4: Plan Your Branch Structure

Before creating branches, plan your organizational structure.

**Consider these factors:**

**Geographic locations:**
- Each office or location should be a separate branch
- Example: London branch, Paris branch, New York branch

**Currency requirements:**
- Each branch operates in a single currency
- Create separate branches for different currencies
- Example: GBP branch for UK clients, EUR branch for EU clients

**Payment methods:**
- Each branch requires its own payment method for Bill Us billing
- Payment method currency must match branch currency

**Team organization:**
- Group team members by location or specialty
- Assign accountants to relevant branches

## Step 5: Create Your First Branch

Branches are where you manage clients and team members.

**To create a branch:**

1. Go to **Branches** in the portal dashboard
2. Select **Create Branch**
3. Enter branch details:
   - Branch name (e.g., "London Office", "Paris Office")
   - Currency (e.g., GBP, EUR, USD)
   - Branch description (optional)
4. Select **Create Branch**

The branch is created but cannot accept Bill Us clients until you add a payment method.

:::tip
Create your primary branch first. You can add additional branches later as your practice grows.
:::

## Step 6: Add Payment Method for Bill Us Billing (Optional)

If you plan to pay for client subscriptions (Bill Us model), add a payment method.

**To add a payment method:**

1. Go to your branch dashboard
2. Select **Billing** > **Payment Methods**
3. Select **Add Payment Method**
4. Enter payment details via Stripe:
   - Credit or debit card information
   - Billing address
   - Cardholder name
5. Select **Save**

**Important:**
- Fiskl validates the payment method but charges nothing until you add Bill Us clients
- Payment method currency must match branch currency
- Each branch requires its own payment method
- You can skip this step if using only Client Pays billing

## Step 7: Invite Your First Team Member (Optional)

Add accountants to help manage your practice.

**To invite a team member:**

1. Go to **Team** in the portal dashboard
2. Select **Invite Team Member**
3. Enter team member details:
   - Email address
   - First and last name
4. Select role level:
   - **Organization-level role** (Super Admin, Billing Admin, Viewer)
   - **Branch-level accountant** (Owner, Admin, Member)
5. If selecting branch-level, select which branches they can access
6. Select **Send Invitation**

The team member receives an email invitation to join your practice.

**Learn more:** [Team Structure](/accountant-portal/getting-started/team-structure)

## What's Next?

After completing practice setup, you're ready to:

**Add more branches:**
- Create branches for additional locations or currencies
- Configure each branch with appropriate payment methods

**Build your team:**
- Invite additional accountants
- Assign roles and permissions per branch
- Set up granular access controls

**Add your first clients:**
- Select billing model (Bill Us or Client Pays)
- Create client accounts
- Invite business owners to access their accounts

:::tip
Start with a single branch and a few clients to familiarize yourself with the portal. Add complexity as you become comfortable with the workflow.
:::

## Troubleshooting Common Issues

### Cannot Create Branch

**Cause:** Incomplete organization setup or permissions issue

**Solution:**
1. Verify you're logged in as Super Admin
2. Complete organization details in Settings
3. Refresh the browser and try again

### Payment Method Rejected

**Cause:** Invalid card details or unsupported card type

**Solution:**
1. Verify card details are correct
2. Ensure card currency matches branch currency
3. Try a different payment method
4. Contact your bank if issues persist

### Invitation Email Not Received

**Cause:** Email delivery issues or incorrect email address

**Solution:**
1. Verify email address is correct
2. Ask team member to check spam folder
3. Resend the invitation
4. Use a different email address if needed

## Need More Help?

**Configure branches:** [Configuring Branches](/accountant-portal/getting-started/configuring-branches)

**Understand team structure:** [Team Structure](/accountant-portal/getting-started/team-structure)

**Add clients:** [Inviting Clients](/accountant-portal/client-management/inviting-clients)

**Manage permissions:** [Roles and Permissions](/accountant-portal/team-collaboration/roles-permissions)