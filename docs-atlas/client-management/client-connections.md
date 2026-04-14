---
title: "Client Connections"
description: "View your client list, access client Fiskl accounts, manage accountant assignments, and track access history in Atlas."
keywords: ["client connections", "manage clients", "access fiskl", "accountant assignment", "client notes", "revocation history", "atlas"]
sidebar_position: 4
tags:
  - Atlas
  - Client Management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This page explains how to view and manage your connected clients in Atlas, including accessing their Fiskl accounts, assigning accountants, and tracking access history.


## The Client List

The client list shows all connected clients for the currently selected branch. You find it under **Client Management** > **Clients** in the left sidebar.

To view clients for a different branch, use the branch selector at the top left of the menu. The client list updates automatically when you switch branches.

Each row in the client list displays the client's company name and key details. On the right side of each row, a primary action button appears — either **Access Fiskl** or **Set Up Access**, depending on your relationship with that client.

## Accessing a Client's Fiskl Account

If you are assigned as an accountant on the client's account, the primary button shows **Access Fiskl**. Select this button to sign directly into the client's Fiskl account and begin working.

If you are not yet assigned but have permission to add yourself, the button shows **Set Up Access**. Select this to assign yourself as an accountant on the client's account. Once assigned, the button changes to **Access Fiskl**.

## Managing a Client

Select a client row to open the client management page. From here you can manage accountant assignments, update permissions, add notes, and view access history.

### Accountant Assignments

You can add or remove accountants from the client's Fiskl account. Each assigned accountant gains access to the client's data and can work within their Fiskl account.

When you assign an accountant, you also set their permission level on the client's Fiskl account. Currently, assigned accountants receive Admin-level access. More granular permission options are planned for a future release.

To add an accountant to a client:

1. Select the client row to open client management
2. Select **Add Accountant**
3. Select the team member from your branch
4. Confirm the assignment

To remove an accountant from a client:

1. Select the client row to open client management
2. Find the accountant in the assignments list
3. Select **Remove**
4. Confirm the removal

The accountant loses access to the client's Fiskl account immediately.

### Client Notes

You can add notes to any client record. Notes are immutable — each edit creates a new note rather than overwriting the previous one. The full history of all notes is preserved, giving your team a complete audit trail of decisions and communications related to the client.

To add a note:

1. Select the client row to open client management
2. Go to the **Notes** section
3. Enter your note
4. Select **Save**

All team members with access to the client can view the note history.

### Revocation History

The revocation history shows every accountant who has been removed from the client's account. This provides a permanent record of anyone who has ever had access to the client, supporting compliance and audit requirements.

You find the revocation history in the client management page. Each entry shows the accountant's name, the date they were removed, and who performed the removal.

## Common Issues

<details>
<summary>You see Set Up Access but expected Access Fiskl</summary>

You are not currently assigned as an accountant on this client's account. Select **Set Up Access** to assign yourself. If the button does not appear, you may not have the required permissions — contact your branch Owner or Super Admin.

</details>

<details>
<summary>A team member cannot see a client in the list</summary>

The client list shows clients for the currently selected branch. Verify the team member is viewing the correct branch using the branch selector. Also confirm the team member has the appropriate branch role and client view permissions.

</details>

## Related Topics

- [Adding Clients](adding-clients.md) — Add clients using Charge Us or Client Pays models
- [Accepting Client Invitations](accepting-client-invitations.md) — Review and respond to incoming client invitations
- [Managing Team Members](../team-collaboration/managing-team-members.md) — Invite and manage accountants across branches