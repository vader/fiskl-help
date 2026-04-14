---
title: "Client Access Levels"
description: "Understand the two levels of client access in Atlas — portal-level permissions for your team and Fiskl-level permissions for accountants working in client accounts."
keywords: ["client access levels", "permissions", "accountant access", "atlas", "portal permissions", "fiskl permissions"]
sidebar_position: 5
tags:
  - Atlas
  - Client Management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This page explains the two levels of access that control how your team interacts with client accounts in Atlas.

## Two Levels of Access

Client access in Atlas works on two tiers: what an accountant can do inside Atlas, and what they can do inside the client's Fiskl account.

### Atlas-Level Permissions

Atlas-level permissions control what your team members can see and do within Atlas itself. These are set through branch roles and permission overrides.

**Client permissions** determine whether an accountant can view clients, create or delete client accounts, update client details, sync accounts, and manage client notes:

- **View All Clients** — Access all client accounts on the branch
- **View Assigned Clients** — Access only clients they are assigned to
- **Create Clients** — Add new client accounts
- **Delete Clients** — Remove client accounts
- **Update Clients** — Edit client details
- **Sync Clients** — Trigger account synchronisation
- **View Client Notes** — Read notes on client records
- **Update Client Notes** — Add or edit client notes

**Access control permissions** determine whether an accountant can manage other team members' access to clients:

- **Grant Client Access** — Assign accountants to a client
- **Revoke Client Access** — Remove accountants from a client
- **Update Client Access** — Change an accountant's assignment on a client
- **View Access History** — View the revocation history for a client

These permissions do not grant access to the client's Fiskl account. To work inside a client's account, an accountant must also be assigned to that client.

### Fiskl-Level Permissions

When an accountant is assigned to a client, they gain access to the client's Fiskl account. This assignment comes in two forms: **primary accountant** or **accountant**. Currently, there is minimal difference between the two roles.

The permission level inside the client's Fiskl account determines what the accountant can do — view data, create invoices, manage banking, run reports, and so on. This is currently set to Admin level by default for all assigned accountants.

:::info
Fiskl is evolving from role-based to permission-based access controls. When this is available, you will be able to set granular Fiskl-level permissions for each accountant on each client account directly from Atlas. This is a planned feature and not yet available.
:::

## How the Two Levels Work Together

An accountant needs both levels of access to work with a client. Atlas-level permissions grant visibility and management capabilities within Atlas. Fiskl-level access — through assignment as an accountant — grants the ability to sign into the client's account and work with their data.

For example, an accountant with **View Assigned Clients** permission in Atlas can only see clients they are assigned to. Once they select **Access Fiskl** on an assigned client, their Fiskl-level permissions (currently Admin) determine what they can do inside that account.

## Related Topics

- [Client Connections](client-connections.md) — Manage accountant assignments and client access
- [Roles and Permissions](../team-collaboration/roles-permissions.md) — Understand Atlas branch roles and permission overrides
- [Adding Clients](adding-clients.md) — Add clients using Charge Us or Client Pays models