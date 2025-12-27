---
title: "Inviting and Managing Users"
description: "Learn how to invite team members, manage their roles and access, and maintain your team roster in Fiskl."
keywords: ["invite users", "manage team", "add team members", "change roles", "deactivate users", "user management"]
sidebar_position: 3
---

# Inviting and Managing Users

This guide explains how to invite team members to your Fiskl account, change their roles, and manage their access over time.

## Before You Begin

Ensure you have:
- Owner or Admin role (required to manage users)
- Team member's email address
- Determined the appropriate role for the new member

Only Owners and Admins can invite and manage team members. If you don't see the Team Members menu option, you don't have sufficient permissions.

## Inviting a New Team Member

Add team members by sending email invitations:

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

   **Role**
   Select the appropriate role from the dropdown:
    - Owner (only if transferring ownership)
    - Admin
    - Billing User
    - User
    - Accountant

4. Review the information
5. Select **Send invite**

The invitation is sent immediately via email.

### What Happens Next

After sending the invitation:

1. **The team member receives an email** with an invitation link
2. **They appear in your team list** with a "Pending" status
3. **They click the invitation link** and create their Fiskl account
4. **They set their own password** and complete registration
5. **Their status changes to "Active"** once they log in
6. **They can access Fiskl** with the permissions of their assigned role

:::tip
Invitation links expire after 7 days. If the team member doesn't accept within that time, you'll need to resend the invitation.
:::

## Monitoring Invitation Status

Track which invitations have been accepted:

**To view invitation status:**

1. Go to **Team Members**
2. Check the status column for each team member:
    - **Active**: User has accepted and can log in
    - **Pending**: Invitation sent but not yet accepted
    - **Inactive**: User has been deactivated

### Resending Invitations

If a team member didn't receive the invitation or it expired:

**Steps:**

1. Go to **Team Members**
2. Locate the pending invitation
3. Select **Resend invitation** or the resend icon
4. A new invitation email is sent

The team member receives a fresh invitation link valid for another 7 days.

## Changing User Roles

Update team member roles as responsibilities evolve:

**Steps:**

1. Go to **Team Members**
2. Locate the team member in the list
3. Select their current role (displayed as a dropdown)
4. Choose the new role from the dropdown menu
5. The change takes effect immediately

**Important considerations:**

- Role changes apply instantly—the user's access updates immediately
- If the user is currently logged in, they may need to refresh their browser to see changes
- Role changes are logged and visible to all Admins and the Owner
- You cannot change the Owner's role (ownership must be transferred)

**Common role transitions:**

- **User → Billing User**: When they start handling client invoicing
- **Billing User → Admin**: When they take on financial management
- **Admin → Billing User**: When reducing access after role changes
- **Any role → Accountant**: When converting internal staff to read-only access

:::info
Admins cannot modify the Owner's role. Only the Owner can transfer ownership to another user.
:::

## Activating and Deactivating Users

Control whether team members can log in without permanently removing them:

### Deactivating a User

Temporarily remove access while keeping the user in your system:

**Steps:**

1. Go to **Team Members**
2. Locate the team member
3. Toggle the switch next to their name to **Off**
4. The user status changes to "Inactive"

**What happens when deactivated:**
- User cannot log in to Fiskl
- All their historical data remains intact
- Invoices, expenses, and time they created remain visible
- User appears in your team list as "Inactive"
- No charges apply for inactive users

**When to deactivate:**
- Team member is on extended leave
- Contractor's project is complete but may return
- Temporary access removal for investigation
- User will return in the future

### Reactivating a User

Restore access for previously deactivated users:

**Steps:**

1. Go to **Team Members**
2. Locate the inactive user
3. Toggle the switch next to their name to **On**
4. The user status changes to "Active"
5. The user can log in immediately with their existing credentials

## Deleting Team Members

Permanently remove users who will never return:

**Steps:**

1. Go to **Team Members**
2. **Deactivate the user first** (toggle to Off)
3. After deactivation, a **delete button** appears next to their name
4. Select the **delete button**
5. Confirm the deletion in the dialog

**What happens when deleted:**
- User is permanently removed from your team list
- User cannot log in (even if they had credentials)
- All their historical data remains intact
- Invoices, expenses, and time they created remain visible
- The user cannot be reactivated (must be re-invited as new)

:::warning
Deleting a team member is permanent. They will need a new invitation to regain access. If you might need them again in the future, deactivate instead of deleting.
:::

## Transferring Ownership

If you're the Owner and need to transfer ownership to another user:

**Steps:**

1. Go to **Team Members**
2. Ensure the target user is already an Admin
3. Select your own user profile or settings
4. Select **Transfer ownership**
5. Choose the Admin to become the new Owner
6. Confirm the transfer

**Important notes:**
- Only Owners can transfer ownership
- The target user must already be an Admin
- After transfer, you become an Admin
- The new Owner gains subscription and billing access
- Transfers cannot be reversed automatically (new Owner must transfer back)

This is typically done when:
- Business ownership changes
- Primary contact person changes
- Retiring or leaving the company

## Managing Your Team List

### Viewing Team Members

The Team Members page displays:
- Name
- Email address
- Role
- Status (Active, Pending, Inactive)
- Last login date (for active users)

### Sorting and Filtering

Organize your team view:

**By status:**
- Select **Active** to see only active members
- Select **Pending** to see only pending invitations
- Select **Inactive** to see only deactivated members
- Select **All** to see everyone

**By role:**
Some views allow filtering by role to see all Billing Users, all Users, etc.

### Understanding Team List Information

**Last Login:**
Shows when the team member last accessed Fiskl. Useful for:
- Confirming active users
- Identifying unused accounts
- Security auditing

**Pending Duration:**
For pending invitations, shows how long ago you sent the invitation. Follow up if it's been more than 2-3 days.

## Team Management Best Practices

**Onboard gradually:**
Add one or two team members at a time. Ensure they understand their access before adding more.

**Follow up on pending invitations:**
If someone hasn't accepted within 2-3 days, reach out directly. They may have missed the email.

**Check spam folders:**
Invitation emails sometimes land in spam. Remind team members to check there.

**Use descriptive names:**
Enter full names (not nicknames) so everyone knows who has access.

**Regular access reviews:**
Review your team list quarterly:
- Deactivate users who no longer need access
- Update roles for people with changed responsibilities
- Delete users who have left the organization

**Document your team structure:**
Keep a separate document showing who should have what role. Makes it easier to audit.

**Communicate role changes:**
When you change someone's role, let them know. They may be confused if features disappear or appear.

**Deactivate before termination:**
When someone leaves, deactivate their account on or before their last day.

**Use accountant role correctly:**
Always use the Accountant role for external accounting professionals, not Admin.

## Troubleshooting

### Team Member Didn't Receive Invitation

**Possible causes and solutions:**

1. **Email in spam folder**
    - Ask them to check spam/junk folders
    - Add noreply@fiskl.com to their contacts

2. **Email address typo**
    - Verify the email address in your invitation
    - Resend with corrected email

3. **Corporate email filter**
    - Check with their IT department
    - Ask them to whitelist fiskl.com emails

4. **Invitation expired**
    - Resend the invitation
    - Invitations expire after 7 days

### Can't Change a User's Role

**Possible causes:**

- You're trying to modify the Owner (only Owner can transfer ownership)
- You're an Admin trying to modify another Admin's role to Owner
- You don't have Owner or Admin permissions yourself

**Solution:**
Ensure you have appropriate permissions. Admins cannot modify the Owner or create new Owners.

### User Can't Access Features They Should Have

**Possible causes:**

1. **Wrong role assigned**
    - Verify their role matches their needs
    - See [Roles and Permissions](./roles-permissions) for details

2. **Need to log out and back in**
    - Ask them to log out completely
    - Log back in to refresh permissions

3. **Browser cache issue**
    - Clear browser cache
    - Try a different browser

### User Sees "Access Denied"

**Cause:** They're trying to access a feature their role doesn't permit.

**Solution:**
- Review their role and permissions
- Upgrade their role if appropriate
- Explain which features are available to their role

---

## Related Topics

- [User Roles and Permissions](./roles-permissions) - Understand what each role can access
- [Team Members Overview](./overview) - Learn about team management concepts
- [User Settings](/docs/settings/profile-settings) - How team members manage their own preferences