---
title: "Branch Management"
description: "Create and configure branches in Atlas using the branch selector, manage branch settings, and update billing through the Stripe portal."
keywords: ["branch management", "create branch", "branch currency", "branch settings", "atlas", "multi-branch", "branch selector"]
sidebar_position: 4
tags:
  - Atlas
  - Team
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This page explains how to create branches, access their settings, and manage billing details in Atlas.

## What Branches Are

Branches represent the operational units of your practice in Atlas. Each branch maintains its own team members, client list, billing, and permissions. You can create branches for different office locations, service lines, currencies, or any other division that suits your firm.

Client accounts on a branch can use any currency regardless of the branch billing currency. A USD branch can manage clients operating in EUR, GBP, or any other supported currency. If your firm needs to bill in multiple currencies, create a separate branch for each.

## The Branch Selector

The branch selector sits at the top left of the Atlas menu. It serves three purposes:

- **Switch branches** — Select a different branch to change the context for all team, client, and billing views
- **Access settings** — Select the gear icon next to a branch name to open that branch's settings
- **Add a branch** — Select **Add Branch** to create a new branch

## Creating a Branch

To create a new branch:

1. Open the branch selector at the top left of the menu
2. Select **Add Branch**
3. Enter the required details:

- **Name** — A display name for the branch. This can be changed at any time.
- **Branch email** — The email address for receiving client invitations and billing communications. This can be changed at any time.
- **Country** — The country the branch operates in. This can be changed at any time.
- **Billing currency** — The currency used for Charge Us subscription invoices on this branch. Your payment method must match this currency.

4. Confirm to create the branch

:::warning
The billing currency cannot be changed after the branch is created. All other branch details — name, email, and country — can be updated at any time from branch settings.
:::

After creating the branch, add a payment method if you plan to use the Charge Us billing model, then invite team members and begin adding clients.

## Branch Settings

You can access branch settings in two ways: select the gear icon in the branch selector, or go to **Administration** > **Settings** in the left sidebar.

The settings area has two subsections under **Branch**:

### Details

View and update your branch information:

- **Branch name** — Update the display name
- **Branch email** — Change the email address used for client invitations and communications
- **Country** — Update the branch country

### Billing

View and manage your payment method and billing address. Select the option to update your payment details, and Atlas redirects you to Stripe's secure hosted portal. From the Stripe portal you can update your payment method (card, direct debit, or other supported methods) and your billing address. The billing address is linked to your payment method.

Changes made in the Stripe portal apply to future invoices automatically.

## Administration Menu

The left sidebar includes an **Administration** section with three areas:

- **Settings** — Branch details and billing configuration as described above
- **Billing** — View invoices, charges, and billing history for the branch
- **Audit Trail** — View a log of actions and changes made within the branch

## Branch Access

Team members are assigned to specific branches with a role on each. A team member can belong to multiple branches with different roles. For example, Sarah might be an Owner on the Amsterdam branch and a Member on the Paris branch.

Team members with a parent role (Super Admin, Billing Admin, or Viewer) have access across all branches according to their parent role level. Team members without a parent role only see branches they are explicitly assigned to.

## Related Topics

- [Managing Team Members](managing-team-members.md) — Invite members and manage branch assignments
- [Roles and Permissions](roles-permissions.md) — Understand branch roles and permission categories
- [Configuring Branches](../getting-started/configuring-branches.md) — Initial branch setup during onboarding
- [Billing Models Overview](../billing-models/overview.md) — How billing works per branch