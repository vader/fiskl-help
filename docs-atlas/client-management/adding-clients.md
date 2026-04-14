---
title: "Adding Clients"
description: "Add clients to your Atlas practice using Charge Us or Client Pays billing models, or accept invitations from existing Fiskl users."
keywords: ["add clients", "invite clients", "Charge Us", "Client Pays", "client onboarding", "atlas", "accountant portal", "billing verification"]
sidebar_position: 3
tags:
  - Atlas
  - Client Management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This page explains the three ways to add clients to your practice in Atlas and helps you choose the right method for each client relationship.


## Three Ways to Add Clients

Atlas supports three methods for connecting with clients. Each method determines who owns the account, who manages billing, and who can disconnect.

- **Charge Us** — You create and own the client account. Your firm pays the subscription.
- **Client Pays (you invite)** — You send an invitation link. The client creates their own account and pays their own subscription.
- **Client Pays (client invites you)** — An existing Fiskl user invites you from their account. The client owns the account and pays their own subscription.

All three methods connect the client to a specific branch in your practice.

### Required Permissions

To add a client, you need the **Manage Billing** and **Create Clients** permissions on the branch. Super Admin access overrides all permission requirements.

## Charge Us — Create a Client Account

Use this method when your firm pays the client's subscription and controls the account. You create the account directly from Atlas.

### Before You Begin

Your branch must have a verified payment method before you can add Charge Us clients. This is called billing verification.

### Billing Verification

Fiskl needs to approve any accountant that wants to pay subscriptions on behalf of their clients. To pass billing verification, you add an active payment method — a credit card, debit card, or bank transfer supported by Stripe in your region.

**Card payments** can receive instant approval depending on the risk score from Stripe. **Direct debit payments** take longer because the direct debit needs to flow through the banking system. This typically takes three to five days to set up. You cannot add any Charge Us clients until the payment method is confirmed.

If your payment method risk score is not sufficient, Fiskl will arrange a call to establish a relationship with your practice. Fiskl takes this step because Charge Us subscriptions are billed at the end of each billing period, unlike standard Fiskl subscriptions which are billed at the beginning. This means Fiskl carries the payment risk until the invoice is settled.

If your billing is already verified, you skip this step entirely when adding new clients.

### How to Add a Charge Us Client

1. Go to the **Dashboard** in Atlas
2. Select **Clients** > **Add Client**
3. Select **Charge Us**
4. Complete billing verification if this is your first Charge Us client (see above)
5. Select the subscription plan for the client — this can be upgraded or downgraded at any time
6. Enter the client's basic details including their email address
7. Enter the client's company details and select their account currency

Fiskl verifies the email address to ensure it is unique across the platform. The account is created instantly once you confirm.

:::warning
The currency you select at this step becomes the client's base currency in Fiskl. Because Fiskl is a multi-currency platform, all accounting data is set up relative to this base currency. It cannot be changed after the account is created.
:::

### What Happens After Creation

Once the account is created:

- The client appears in your branch's client list immediately
- You become the primary accountant for this client (this can be changed later)
- Billing begins on your branch subscription
- You can access the client's account straight away
- The client cannot disconnect the accountant relationship

### When to Use Charge Us

This model works well when you want full control over the client relationship. It suits fully managed service arrangements where the client relies on you for all accounting work. The client cannot remove you as their accountant, and you manage all subscription costs.

## Client Pays — You Invite the Client

Use this method when the client should own their account and pay their own Fiskl subscription. You generate an invitation link from Atlas and share it with the client yourself.

### How to Invite a Client Pays Client

1. Go to the **Dashboard** in Atlas
2. Select **Clients** > **Add Client**
3. Select **Client Pays**
4. Atlas generates a unique invitation link for the branch

Atlas provides a summary email that you can copy and a direct link you can copy. You send this to the client through your own email or messaging. Atlas does not send the invitation on your behalf.

### What Happens After You Share the Link

The client uses the link to create their Fiskl account and complete their own setup, including adding a payment method and paying for their subscription. Once the client finishes setup, an invitation is sent back to you automatically linking the two accounts. You still need to accept this invitation from your Atlas sidebar before you can access the client's account.

The client owns the account and manages their own subscription. Either party can disconnect the relationship at any time.

### Where to Share Client Pays Links

Client Pays links work well for broad distribution since the client controls their own account and billing:

- Your practice website or services page
- Email signatures
- Proposals and onboarding documents
- Marketing materials and social media

:::tip
Label your links internally by purpose — for example, "Bookkeeping — Website" or "Tax Services — Email Campaign" — so you can track which channels bring in clients.
:::

### When to Use Client Pays (You Invite)

This model suits advisory relationships and bookkeeping services where clients prefer to own their account. It also works well when you want to share a single link publicly and let clients come to you.

## Client Pays — Client Invites You

Use this method when a client already has a Fiskl account and wants to add you as their accountant. This flow starts in the client's Fiskl account, not in Atlas.

### How It Works

1. Give the client your branch email address
2. Ask the client to go to **External Access** in their Fiskl Dashboard
3. The client sends an accountant invitation using your branch email address
4. The invitation appears in your Atlas sidebar
5. Accept or reject the invitation from Atlas

The branch email address is the most reliable way for clients to reach the correct branch. You can also use an individual accountant's email, but the branch email ensures the invitation routes to the right place.

### When to Use This Method

This method applies when a client already uses Fiskl independently and wants to grant you access. It is also common when a client switches from another accountant to your practice.

For full details on reviewing and accepting incoming invitations, see [Accepting Client Invitations](accepting-client-invitations.md).

## Comparing the Three Methods

| | Charge Us | Client Pays (you invite) | Client Pays (client invites) |
|---|---|---|---|
| **Who creates the account** | You (from Atlas) | Client (via your link) | Client (independently) |
| **Who pays the subscription** | Your firm | The client | The client |
| **Who owns the account** | Your firm | The client | The client |
| **Who can disconnect** | Only you | Either party | Either party |
| **Initiated from** | Atlas | Atlas | Client's Fiskl account |
| **Best for** | Managed services | Advisory, bookkeeping | Existing Fiskl users |

## Managing Invitation Links

Each branch can have one Charge Us link and one Client Pays link. Links are reusable — you do not need to generate a new link for every client.

### Regenerating a Link

If you need to invalidate an existing link:

1. Go to **Clients** > **Add Client**
2. Select the branch and billing model
3. Select **Regenerate Link**
4. Confirm the action

The old link stops working immediately. Share the new link with any future clients.

### When to Regenerate

Consider regenerating a link when a team member with access to the link leaves your practice, when you restructure your branches, or if a link is shared somewhere unintended.

## After Adding a Client

Once a client connects to your branch, you can begin working in their account. Common first steps include reviewing company details and tax settings, connecting bank accounts, configuring invoicing templates, and assigning team members to the client.

For details on managing ongoing client relationships, see [Client Connections](client-connections.md).

## Common Issues

<details>
<summary>Billing verification is taking longer than expected</summary>

If you chose direct debit as your payment method, verification typically takes three to five days. Card payments are usually instant but can be delayed if the risk score requires manual review. If verification has not completed after five business days, contact Fiskl support.

</details>

<details>
<summary>Client's email address is rejected during Charge Us setup</summary>

Fiskl requires a unique email address for every account. If the email is already in use, the client may already have a Fiskl account. In that case, use the Client Pays (client invites you) method instead, and ask the client to invite you from **External Access** in their Fiskl Dashboard.

</details>

<details>
<summary>Accountant used a Charge Us link but wants Client Pays</summary>

You can transfer ownership to the client. This will set the account into archived mode and the client will need to subscribe to a plan to use it. 

</details>

<details>
<summary>Client connected to the wrong branch</summary>

As of writing this you can not do this in Atlas you will need to contact Fiskl support to move the account. This feature is currently under evaluation.

</details>


## Related Topics

- [Accepting Client Invitations](accepting-client-invitations.md) — Review and respond to incoming client invitations
- [Client Connections](client-connections.md) — Manage ongoing client relationships and access
- [Client Access Levels](client-access-levels.md) — Control what clients can see and do in their accounts
