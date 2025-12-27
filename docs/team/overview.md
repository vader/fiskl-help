---
title: "Team Members Overview"
description: "Learn how to manage your team in Fiskl with role-based access control, secure collaboration, and permission management."
keywords: ["team management", "user roles", "permissions", "access control", "collaboration", "team members"]
sidebar_position: 1
---

# Team Members

Fiskl's team management features let you add team members with specific roles and permissions, enabling secure collaboration while maintaining control over sensitive financial information.

## Why Use Team Management

As your business grows, you need multiple people accessing Fiskl for different purposes. Team management ensures each person sees only the information they need and can perform only the actions appropriate for their role.

**Key benefits:**
- Control who accesses sensitive financial data
- Delegate invoicing without exposing accounting details
- Allow expense submission while restricting financial reports
- Add accountants with read-only access to financial records
- Track which team member performed specific actions
- Scale your team without compromising security

## Key Concepts

Understanding these concepts helps you manage your team effectively:

- **User Roles**: Predefined permission sets that determine what a team member can access and do
- **Owner**: The account creator with full access including billing and subscription management
- **Admin**: Full account access except billing and subscription information
- **Billing User**: Can create invoices and expenses but cannot access accounting features
- **User**: Can only create expenses, time, and mileage for themselves
- **Accountant**: Read-only access to financial records and reports
- **Permissions**: Specific capabilities granted to each role (e.g., create invoices, view reports)
- **Active/Inactive Status**: Controls whether a team member can currently log in

## How It Works

Team management follows a simple workflow:

1. **Invite team members** by email with an assigned role
2. **They receive an invitation** to create their Fiskl account
3. **They accept and log in** with access based on their role
4. **You manage their status** by activating, deactivating, or changing roles
5. **Their actions are tracked** and visible to owners and admins

## Available Roles

Fiskl provides five predefined roles to match common business needs:

### Owner
- Full access to all features and data
- Only role that can manage subscriptions and billing
- Can invite, modify, and remove all other users
- Full accounting and reporting access
- Typically the business owner or founder

**Common use case:** Business owner managing subscriptions and overall operations

### Admin
- Full access to all features and data
- Cannot access subscription or billing information
- Can invite and manage all users except the owner
- Full accounting and reporting access
- Can modify company settings

**Common use case:** Office manager or financial controller

### Billing User
- Create, edit, and send invoices and quotes
- Create expenses, time entries, and mileage
- Add and manage clients
- View only their own expenses, time, and mileage
- Cannot access accounting, reports, or banking

**Common use case:** Sales team members or project managers handling client billing

### User
- Create expenses, time entries, and mileage
- View only their own submitted items
- Cannot create invoices or access financial data
- Cannot view other team members' submissions

**Common use case:** Field workers or contractors submitting expenses and time

### Accountant
- Read-only access to all financial data
- View Chart of Accounts, transactions, and reports
- Generate and export reports
- Cannot create or modify any records
- Cannot access subscription or billing information

**Common use case:** External accountant or bookkeeper reviewing records

:::info
Adding accountants to your Fiskl account is included in all plans at no additional cost. This makes it easy to collaborate with your accounting professional.
:::

## What You Can Do

**Invite team members:**
- Send email invitations with assigned roles
- Track invitation status (pending, accepted)
- Resend invitations if needed

**Manage existing members:**
- Change user roles as responsibilities evolve
- Activate or deactivate accounts
- Remove team members permanently
- View team member activity

**Control access:**
- Assign appropriate roles based on job function
- Restrict sensitive data to owners and admins
- Grant accountants read-only access
- Ensure billing users can't access accounting

**Monitor your team:**
- See who has access to your account
- Track which team members are active
- Review role assignments

## Security Considerations

**Sensitive information visibility:**
- Dashboard financial metrics: Owners and Admins only
- Banking connections: Owners and Admins only
- Subscription and billing: Owners only
- Chart of Accounts: Owners, Admins, and Accountants
- Accounting reports: Owners, Admins, and Accountants

**Each team member:**
- Creates their own Fiskl login credentials
- Maintains their own password
- Can enable two-factor authentication (recommended)
- Logs in independently

:::tip
Follow the principle of least privilege: assign the minimum role necessary for each team member to perform their job. You can always upgrade their role later if needed.
:::

## Getting Started

To begin managing your team:

1. **Review the available roles** and determine which fits each team member
2. **Invite your first team member** from the Team Members page
3. **Monitor invitation acceptance** and follow up if needed
4. **Adjust roles** as your team's needs change

---

## Available Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />