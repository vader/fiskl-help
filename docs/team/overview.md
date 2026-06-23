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

- **Permissions**: Fine-grained capabilities such as viewing invoices or editing the chart of accounts. Most areas separate viewing (read) from changing (write).
- **Presets**: Ready-made bundles of permissions for common jobs. You assign a preset as a starting point.
- **Custom permissions**: Any preset can be fine-tuned by adjusting individual permissions in a grid. A member whose set no longer matches a preset is shown as **Custom**.
- **Owner**: The account holder, tied to the subscription. There is exactly one Owner per account.
- **Active/Inactive status**: Controls whether a team member can currently log in.

## How It Works

Team management follows a simple workflow:

1. **Invite team members** by email and assign a preset
2. **They receive an invitation** to create their Fiskl account
3. **They accept and log in** with access based on their permissions
4. **You manage their access** by changing the preset, fine-tuning permissions, or deactivating them
5. **Permissions also govern API access** through API keys and connected apps

## Available Presets

Fiskl provides seven presets to match common business needs. Assign the closest one, then fine-tune if needed.

- **Owner** — the account holder; full access including subscription and billing
- **Admin** — everything except subscription and billing control
- **Accountant** — external books through period-end and tax, with reports; no team, branding, or API access
- **Bookkeeper** — in-house daily bookkeeping; no period-end
- **Invoice Only** — clients, invoices, quotes, and recording payments
- **Expense Submitter** — submit expenses from the field
- **Read-only** — view everything and export reports; no changes

For exactly what each preset grants and how to build a custom set, see [User Roles and Permissions](/team/roles-permissions).

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
- Assign a preset based on job function, then fine-tune
- Restrict sensitive data to the people who need it
- Grant outside professionals read-only or Accountant access
- Separate viewing from editing for each area

**Monitor your team:**
- See who has access to your account
- Track which team members are active
- Review role assignments

## Security Considerations

**Sensitive information visibility** depends on the permissions a member holds:
- Dashboard financial metrics and accounting: members with accounting access
- Banking connections: members with banking permissions
- Subscription and billing: the Owner (and any member granted subscription permissions)
- Reports: members with report access
- Sensitive actions, such as editing invoice bank details or managing API keys, sit behind an **Advanced** section and ask for confirmation

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