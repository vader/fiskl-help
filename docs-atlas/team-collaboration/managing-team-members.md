---
title: "Managing Team Members"
description: "Invite team members, manage branch assignments, customise permissions, and control parent roles and security settings in Atlas."
keywords: ["manage team", "invite accountant", "team members", "branch roles", "permissions", "MFA reset", "atlas"]
sidebar_position: 2
tags:
  - Atlas
  - Team
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This page explains how to invite team members, manage their branch access and permissions, assign parent roles, and handle security settings in Atlas.

## Team Members and Invitations

Team management is branch-based. Use the branch selector at the top of the left menu to choose which branch you are working with. Under **Team Management** in the sidebar, you find two sections:

- **Team Members** — Shows all current team members on the selected branch
- **Team Invitations** — Shows pending invitations and invitation history

## Inviting a Team Member

To invite a new team member:

1. Go to **Team Management** > **Team Members**
2. Select **Invite Team Member**
3. Complete the three-step invitation process:

**Step 1 — Who:** Enter the team member's email address and name.

**Step 2 — Access:** Choose whether to invite them to the current branch only or to all branches.

**Step 3 — Role:** Select a branch role — **Owner**, **Admin**, or **Member**.

4. Confirm and send the invitation

The invitation is valid for seven days. It appears in the **Team Invitations** section until the team member accepts, the invitation expires, or you cancel it.

## Managing Invitations

Go to **Team Management** > **Team Invitations** to view all invitation activity. The page has two sections:

**Pending invitations** appear at the top. Each pending invitation has row actions that allow you to resend the invitation by email, copy the invitation link to share through a different channel, or cancel the invitation entirely.

**Invitation history** appears below, showing invitations that have been accepted, have expired, or were rejected. This gives you a complete record of all invitation activity for the branch.

## The Team Member Panel

Select a team member row to open their management panel. This is where you configure everything about the team member's access and permissions.

### Summary

The summary section shows key information at a glance: the number of branches the team member is assigned to, the count of clients they have access to, and when they were last active.

### Client Access

This section shows a list of clients the team member is assigned to. Each client entry links to the client management section where you can adjust the assignment. For more detail on how client access works, see [Client Access Levels](/accountant-portal/client-management/client-access-levels).

### Branch Access

This section shows every branch the team member is assigned to, with their role on each. From here you can:

- **Add to branch** — Assign the team member to an additional branch
- **Change role** — Update their role on any branch (Owner, Admin, or Member)
- **Remove from branch** — Remove the team member from one or more branches using bulk selection
- **Update permissions** — Customise individual permissions for the team member on a specific branch

### Customising Permissions

When you select **Update Permissions** on a branch, the permission editor opens. If you have the required permissions, you see eight tabs matching the permission categories:

**Organisation** — View branch details, update branch settings, delete the branch.

**Billing** — View invoices and billing history, manage payment methods and subscriptions.

**Team** — View team members, invite and remove accountants, change roles, add accountants to other branches, view and manage team permissions.

**Parent Roles** — View, grant, update, and revoke parent roles. Includes the Parent Admin permission.

**Clients** — View all clients or assigned clients only, create, delete, update, and sync client accounts, view and update client notes.

**Access Control** — Grant, revoke, and update accountant access to clients. View access history.

**Audit & Reports** — View audit logs and reports.

**Security** — Reset MFA for other team members.

Roles like Owner, Admin, and Member are permission groups — each role comes with a predefined set of permissions. You can override any individual permission for a specific team member. For example, you can remove billing permissions from an Admin, or grant team invitation permissions to a Member.

:::info
Atlas always shows action buttons even when you do not have the required permission. A tooltip on the button explains which permission is needed. This makes the system self-documenting — you can see what is possible and what permissions you would need to do it.
:::

### Parent Roles

From the team member panel you can assign or change parent roles. Parent roles provide organisation-wide access across all branches:

- **Super Admin** — Complete access to all branches, users, and billing settings
- **Billing Admin** — View all invoices, charges, and upcoming fees across branches
- **Viewer** — Read-only access to all branches and client data

A team member can also have no parent role, meaning they only have access to the branches they are explicitly assigned to. You need the appropriate parent role permissions to grant or revoke these roles.

### Security and Authentication

The security section allows you to manage MFA for the team member and view their sign-in activity.

**MFA reset** — If a team member has lost access to their authenticator app, you can reset their MFA from this section. You need the **MFA Reset** permission to do this. You cannot reset your own MFA from this location — for that, go to your profile settings.

**Sign-in activity** — This section shows the team member's last login date and IP address.

## Common Issues

<details>
<summary>Team member cannot see action buttons</summary>

All buttons are always visible in Atlas, but buttons you do not have permission for show a tooltip explaining the required permission. If a team member reports they cannot perform an action, check the tooltip to identify which permission is missing, then update their permissions or role.

</details>

<details>
<summary>Invitation expired before the team member accepted</summary>

Invitations are valid for seven days. Go to **Team Invitations**, find the expired invitation, and select **Resend** to send a new invitation. Alternatively, cancel the expired invitation and create a new one.

</details>

<details>
<summary>Cannot reset a team member's MFA</summary>

You need the **MFA Reset** permission under the Security category. If you do not have this permission, contact your branch Owner or Super Admin. Note that you cannot reset your own MFA from the team management panel — use your profile settings instead.

</details>

## Related Topics

- [Roles and Permissions](roles-permissions.md) — Detailed breakdown of all roles and permission categories
- [Branch Management](branch-management.md) — Create and configure branches
- [Client Access Levels](../client-management/client-access-levels.md) — How team permissions relate to client access
- [Client Connections](../client-management/client-connections.md) — Manage accountant assignments on client accounts