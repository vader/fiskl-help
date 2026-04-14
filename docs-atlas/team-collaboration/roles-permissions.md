---
title: "Roles and Permissions"
description: "Understand branch roles, parent roles, and the eight permission categories that control what team members can do in Atlas."
keywords: ["roles", "permissions", "branch roles", "parent roles", "Owner", "Admin", "Member", "Super Admin", "atlas", "permission categories"]
sidebar_position: 3
tags:
  - Atlas
  - Team
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This page explains how roles and permissions work in Atlas, including the three branch roles, three parent roles, and eight permission categories you can customise for each team member.


## How Roles and Permissions Work

Every team member in Atlas is assigned a role on each branch they belong to. Roles are permission groups — each role comes with a predefined set of permissions. You can then override individual permissions for any team member to add or remove specific capabilities.

This means roles give you a sensible starting point, while permission overrides give you fine-grained control when needed.

## Branch Roles

Branch roles control what a team member can do within a specific branch. Each team member can have a different role on each branch they are assigned to.

### Owner

Full control over the branch. Owners can manage billing, team members, clients, and all branch settings. This is the highest branch-level role.

### Admin

Manage clients and team members with limited billing access. Admins handle day-to-day operations but may not have access to payment methods and subscription management depending on permission configuration.

### Member

Work with assigned clients but cannot manage team members or billing. Members have the most restricted default permissions and typically focus on client work.

## Parent Roles

Parent roles provide organisation-wide access across all branches. A team member can have one parent role in addition to their branch roles, or no parent role at all.

### Super Admin

Complete access to everything in Atlas — all branches, all users, all billing, and all settings. Super Admin overrides all branch-level permissions.

### Billing Admin

View all invoices, charges, and upcoming fees across every branch. Billing Admins have read access to billing information organisation-wide but do not have management capabilities outside their assigned branches.

### Viewer

Read-only access to all branches and client data across the organisation. Viewers can see everything but cannot make changes.

### No Parent Role

A team member with no parent role only has access to the branches they are explicitly assigned to, with the permissions defined by their branch role and any overrides.

## Permission Categories

Atlas organises permissions into eight categories. These categories appear as tabs when you customise a team member's permissions on a branch.

### Organisation

Controls access to branch-level settings.

- **View Organisation** — View branch details and settings
- **Update Branch** — Modify branch name and settings
- **Delete Branch** — Permanently delete the branch

### Billing

Controls access to financial information and payment management.

- **View Billing** — View invoices and billing history
- **Manage Billing** — Update payment methods and subscriptions

### Team

Controls the ability to manage other team members.

- **View Team Members** — View the list of accountants
- **Invite Team Members** — Send invitations to new accountants
- **Remove Team Members** — Remove accountants from the branch
- **Change Roles** — Modify accountant roles on the branch
- **Add to Branches** — Add accountants to other branches
- **View Team Permissions** — View permission overrides for team members
- **Manage Team Permissions** — Grant or revoke individual permissions for team members

### Parent Roles

Controls the ability to manage organisation-wide roles.

- **View Parent Roles** — View which parent roles are assigned
- **Grant Parent Roles** — Assign parent roles to team members
- **Update Parent Roles** — Change existing parent role assignments
- **Revoke Parent Roles** — Remove parent roles from team members
- **Parent Admin** — Full administrative control over parent role assignments

### Clients

Controls access to client accounts and records.

- **View All Clients** — Access all client accounts on the branch
- **View Assigned Clients** — Access only clients the team member is assigned to
- **Create Clients** — Add new client accounts
- **Delete Clients** — Remove client accounts
- **Update Clients** — Edit client details
- **Sync Clients** — Trigger account synchronisation
- **View Client Notes** — Read notes on client records
- **Update Client Notes** — Add or edit client notes

### Access Control

Controls the ability to manage accountant-to-client assignments.

- **Grant Client Access** — Assign accountants to a client
- **Revoke Client Access** — Remove accountants from a client
- **Update Client Access** — Change an accountant's assignment on a client
- **View Access History** — View the revocation history for a client

### Audit & Reports

Controls access to audit and reporting features.

- **View Audit Logs** — Access audit trail information
- **View Reports** — Access practice reports

### Security

Controls security management capabilities.

- **Reset MFA** — Reset multi-factor authentication for other team members (you cannot reset your own MFA from this location)

## Customising Permissions

Roles are a starting point, not a limit. You can override any individual permission for a team member on a specific branch.

For example, you might remove **Manage Billing** from an Admin who should not have access to payment methods, or grant **Invite Team Members** to a Member who helps with onboarding.

To customise permissions:

1. Go to **Team Management** > **Team Members**
2. Select the team member
3. In the **Branch Access** section, select **Update Permissions** on the relevant branch
4. Toggle individual permissions on or off across the eight category tabs
5. Select **Save Changes** and provide a reason for the change

Permission changes are recorded in the audit log with the reason you provide.

:::tip
If you are unsure which permission a team member needs, try the action yourself. Atlas shows a tooltip on every button explaining which permission is required if you do not have access. This makes it easy to identify the exact permission to grant.
:::

## Related Topics

- [Managing Team Members](managing-team-members.md) — Invite, view, and manage your team
- [Branch Management](branch-management.md) — Create and configure branches
- [Client Access Levels](../client-management/client-access-levels.md) — How Atlas permissions relate to client Fiskl access