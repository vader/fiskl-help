---
title: "Inviting and Managing Users"
description: "Learn how to invite team members, manage their roles and access, and maintain your team roster in Fiskl."
keywords: ["invite users", "manage team", "add team members", "change roles", "deactivate users", "user management"]
sidebar_position: 5
---

This guide explains how to invite and manage team members in Fiskl and helps you control who has access to your company's financial data.

## Before You Begin

Before you begin, ensure you have:
- Owner or Admin role (required to manage users)
- Team member's email address
- Decided which role to assign the new member

Learn more about [user roles and their permissions](./roles-permissions).

Only Owners and Admins can invite and manage team members. If you don't see **Team Members** in the left sidebar, you don't have sufficient permissions.

## Inviting a New Team Member

Add team members by sending email invitations.

**Steps:**

1. Go to **Team Members** in the left sidebar
2. Select **Invite new member** or the **+ icon**
3. Complete the invitation form:

   **Name**  
   Enter the team member's full name.  
   Example: John Smith

   **Email address**  
   Enter their work email address. They'll receive the invitation here.  
   Example: john.smith@company.com

   **Preset**  
   Select the preset that best matches their job, such as Admin, Bookkeeper, Invoice Only, or Read-only. You can fine-tune their exact permissions afterwards. See [User Roles and Permissions](./roles-permissions).

4. Review the information
5. Select **Send invite**

Fiskl sends the invitation immediately via email.

### What Happens Next

After you send the invitation, the team member receives an email with an invitation link. They appear in your Team Members list with a "Pending" status.

When they select the invitation link, they create their Fiskl account and set a password. Once they complete registration and log in, their status changes to "Active." They can now access Fiskl with the permissions of their assigned role.

:::tip
Invitation links expire after 7 days. Resend if the team member hasn't accepted by then.
:::

## Monitoring Invitation Status

Track which invitations have been accepted.

**To view invitation status:**

1. Go to **Team Members**
2. Check the status column for each team member:
   - **Active**: User has accepted and can log in
   - **Pending**: Invitation sent but not yet accepted
   - **Inactive**: User has been deactivated

### Resending Invitations

If a team member didn't receive the invitation or it expired, you can resend it.

**Steps:**

1. Go to **Team Members**
2. Locate the pending invitation
3. Select **Resend invitation** or the resend icon

Fiskl sends a new invitation email. The team member receives a fresh invitation link valid for another 7 days.

## Changing a Member's Access

Update a member's access as their responsibilities change. Changes take effect immediately.

**Steps:**

1. Go to **Team Members**
2. Locate the team member in the list
3. Select the member to open their access settings
4. Choose a different preset, or fine-tune individual permissions in the grid, then select **Save**

The change applies instantly. If the user is currently logged in, they may need to refresh their browser to see the changes.

**Common transitions:**
- **Expense Submitter → Invoice Only**: When they start handling client invoicing
- **Invoice Only → Bookkeeper**: When they take on day-to-day bookkeeping
- **Any preset → Read-only**: When reducing someone to view-only access

:::info
You cannot assign the Owner preset. Only the Owner can transfer ownership to another user.
:::

## Activating and Deactivating Users

Control whether team members can log in without permanently removing them.

### Deactivating a User

Temporarily remove access while keeping the user in your system.

**Steps:**

1. Go to **Team Members**
2. Locate the team member
3. Toggle the switch next to their name to **Off**

The user status changes to "Inactive."

**What happens when deactivated:**
- User cannot log in to Fiskl
- All their historical data remains intact
- Invoices, expenses, and time they created remain visible
- User appears in your Team Members list as "Inactive"
- No charges apply for inactive users

**When to deactivate:**
- Team member is on extended leave
- Contractor's project is complete but may return
- Temporary access removal for investigation
- User will return in the future

### Reactivating a User

Restore access for previously deactivated users.

**Steps:**

1. Go to **Team Members**
2. Locate the inactive user
3. Toggle the switch next to their name to **On**

The user status changes to "Active." The user can log in immediately with their existing credentials.

## Deleting Team Members

Permanently remove users who will never return.

**Steps:**

1. Go to **Team Members**
2. Deactivate the user first by toggling to **Off**
3. After deactivation, a **delete button** appears next to their name
4. Select the **delete button**
5. Confirm the deletion in the dialog

**What happens when deleted:**
- User is permanently removed from your Team Members list
- User cannot log in (even if they had credentials)
- All their historical data remains intact
- Invoices, expenses, and time they created remain visible
- The user cannot be reactivated (must be re-invited as new)

:::warning
Deleting a team member is permanent. They will need a new invitation to regain access. If you might need them again in the future, deactivate instead of deleting.
:::

## Transferring Ownership

If you're the Owner and need to transfer ownership to another user, follow these steps.

**Steps:**

1. Go to **Team Members**
2. Ensure the target user is already an Admin
3. Select your own user profile or settings
4. Select **Transfer ownership**
5. Select the Admin to become the new Owner
6. Confirm the transfer

**Important notes:**
- Only Owners can transfer ownership
- The target user must already be an Admin
- After transfer, you become an Admin
- The new Owner gains subscription and billing access
- Transfers cannot be reversed automatically (new Owner must transfer back)

**When to transfer ownership:**
- Business ownership changes
- Primary contact person changes
- Retiring or leaving the company

## Managing Your Team Members

### Viewing Team Members

The Team Members page shows key information about each person on your team. You can see their name, email address, assigned role, and current status. For active users, you can also see when they last logged in.

### Sorting and Filtering

Organize your team view by status or role.

**Filter by status:**
- Select **Active** to see only active members
- Select **Pending** to see only pending invitations
- Select **Inactive** to see only deactivated members
- Select **All** to see everyone

**Filter by role:**  
Some views allow filtering by role to see all Billing Users, all Users, etc.

### Understanding Team Information

**Last Login**  
Shows when the team member last accessed Fiskl. This is useful for confirming active users, identifying unused accounts, and security auditing.

**Pending Duration**  
For pending invitations, this shows how long ago you sent the invitation. Follow up if it's been more than 2-3 days.

## Team Management Best Practices

### Onboarding New Members

Add one or two team members at a time. Ensure they understand their access before adding more. If someone hasn't accepted within 2-3 days, reach out directly. Invitation emails sometimes land in spam, so remind them to check there.

Enter full names (not nicknames) so everyone knows who has access.

### Maintaining Your Team

Review your Team Members list quarterly. Deactivate users who no longer need access. Update roles for people with changed responsibilities. Delete users who have left permanently.

When you change someone's role, let them know. They may be confused if features disappear or appear unexpectedly.

Keep a separate document showing who should have what role. This makes auditing easier.

### Security Best Practices

When someone leaves, deactivate their account on or before their last day. Always use the Accountant role for external accounting professionals, not Admin.

## Troubleshooting

### Team Member Didn't Receive Invitation

**Possible causes and solutions:**

**Email in spam folder**  
Ask them to check spam/junk folders. Add noreply@fiskl.com to their contacts.

**Email address typo**  
Verify the email address in your invitation. Resend with the corrected email.

**Corporate email filter**  
Check with their IT department. Ask them to whitelist fiskl.com emails.

**Invitation expired**  
Resend the invitation. Invitations expire after 7 days.

### Can't Change a User's Role

**Possible causes:**
- You're trying to modify the Owner (only Owner can transfer ownership)
- You're an Admin trying to modify another Admin's role to Owner
- You don't have Owner or Admin permissions yourself

**Solution:**  
Ensure you have appropriate permissions. Admins cannot modify the Owner or create new Owners.

### User Can't Access Features They Should Have

**Possible causes:**

**Wrong role assigned**  
Verify their role matches their needs. See [Roles and Permissions](./roles-permissions) for details.

**Need to log out and back in**  
Ask them to log out completely. Log back in to refresh permissions.

**Browser cache issue**  
Clear browser cache. Try a different browser.

### User Sees "Access Denied"

**Cause:** They're trying to access a feature their role doesn't permit.

**Solution:**  
Review their role and permissions. Upgrade their role if appropriate. Explain which features are available to their role.

---

## Related Topics

- [User Roles and Permissions](./roles-permissions) - Understand what each role can access
- [Team Members Overview](./overview) - Learn about team management concepts
- [User Settings](/settings/profile-settings) - How team members manage their own preferences