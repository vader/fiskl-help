---
id: configuring-branches
title: "Configuring Branches"
description: "Create and configure branches in Atlas to organise your practice by location, currency, or service line — each with its own team, clients, and billing."
keywords: ["atlas", "branches", "branch configuration", "create branch", "branch currency", "multi-branch", "accountant portal"]
sidebar_position: 4
---

This guide explains how branches work in Atlas and helps you create and configure branches for your practice.

## What a Branch Is

A branch is an operational unit within your practice. Each branch has its own team members, client list, billing, and permissions. You can create branches for different office locations, service lines, or billing currencies.

Every Charge Us subscription on a branch is billed in the branch billing currency. Client accounts on the branch can use any currency regardless of this — a USD branch can manage clients operating in EUR, GBP, or any other currency.

## Creating a Branch

1. Open the branch selector at the top left of the Atlas menu
2. Select **Add Branch**
3. Enter the following details:
   - **Name** — A display name for the branch
   - **Branch email** — Used for client invitations and billing communications
   - **Country** — The country the branch operates in
   - **Billing currency** — The currency for Charge Us subscription invoices on this branch

4. Confirm to create the branch

:::warning
The billing currency cannot be changed after the branch is created. All other details — name, email, and country — can be updated at any time from branch settings.
:::

## After Creating a Branch

Once the branch is created, complete these steps before adding clients:

- **Add a payment method** (Charge Us only) — Go to **Administration** > **Settings** > **Billing** and add a card or bank account through the Stripe portal. The payment method currency must match the branch billing currency.
- **Invite team members** — Go to **Team Management** > **Team Members** and invite the accountants who will work on this branch.

## Managing Branch Settings

To update branch details after creation, select the gear icon next to the branch name in the branch selector, or go to **Administration** > **Settings**.

From there you can update the branch name, email address, and country. The **Billing** section lets you update your payment method and billing address through the Stripe portal.

## Related Topics

- [Branch Management](../team-collaboration/branch-management.md) — Full guide to branch settings and administration
- [Billing Models](../billing-models/overview.md) — Understand Charge Us and Client Pays billing before adding clients
- [Managing Team Members](../team-collaboration/managing-team-members.md) — Invite and configure your branch team
