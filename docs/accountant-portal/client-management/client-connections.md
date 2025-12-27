---
title: "Client Connections"
description: "Manage client connections, view connection details, transfer clients between branches, and disconnect client relationships in the Accountant Portal."
keywords: ["client connections", "manage clients", "disconnect client", "transfer branch", "client status", "connection management"]
sidebar_position: 4
---

This guide explains how to manage existing client connections, view connection details, and disconnect client relationships when needed.

## Understanding Client Connections

Once a client connects to your practice (either through Bill Us or Client Pays model), you manage that relationship through the client connections interface.

**Client connection includes:**
- Client account access for your team
- Billing relationship (Bill Us or Client Pays)
- Branch assignment
- Access level configuration
- Team member assignments
- Integration status

## Viewing Client Connections

Access your complete client list to see all connected clients.

**To view client connections:**

1. Go to **Clients** in portal navigation
2. View all connected clients in the list
3. See key information for each client:
   - Client company name
   - Billing model (Bill Us or Client Pays)
   - Assigned branch
   - Connection date
   - Account status
   - Last activity

**List features:**
- Search by client name or company
- Filter by branch
- Filter by billing model
- Filter by status (Active, Paused, Disconnected)
- Sort by name, connection date, or last activity
- Quick actions menu for each client

## Client Connection Details

View comprehensive information about each client connection.

**To view client details:**

1. Go to **Clients** in portal
2. Select client name from list
3. View full connection details

**Connection information displayed:**

**Account Details:**
- Company name and information
- Primary contact name and email
- Connection date
- Billing model used
- Assigned branch
- Account status

**Subscription Information:**
- Current plan level
- Billing status (if Bill Us model)
- Subscription renewal date
- Feature access
- Usage metrics

**Access Configuration:**
- Client access level setting
- Team members assigned
- Permission summary
- Last login date
- Activity summary

**Integration Status:**
- Connected bank accounts
- Payment gateways enabled
- Other integrations active
- Connection health status

**Activity Summary:**
- Recent transactions count
- Latest invoice date
- Last reconciliation
- Report generation activity
- Overall engagement metrics

## Managing Client Settings

Modify client connection settings to adjust the relationship.

### Edit Client Information

Update client details as needed.

**To edit client information:**

1. Go to **Clients** in portal
2. Select client from list
3. Select **Edit Client**
4. Update available fields:
   - Contact name
   - Contact email
   - Internal notes
   - Tags for organization
5. Select **Save Changes**

**Note:** Core account information (company name, tax ID) must be edited in the client's account directly.

### Change Branch Assignment

Transfer clients between branches for better organization.

**To transfer client to different branch:**

1. Go to **Clients** in portal
2. Select client from list
3. Select **Change Branch**
4. Select target branch from dropdown
5. Confirm transfer
6. Select **Transfer Client**

**What happens after transfer:**
- Client moves to new branch immediately
- New branch team gains access
- Previous branch team loses access (unless cross-branch permissions)
- Billing continues uninterrupted
- All client data remains intact
- Client receives no notification (internal change)

**Best for:**
- Reorganizing client portfolio
- Balancing team workload
- Specializing branches by service type
- Team member changes
- Branch restructuring

### Modify Access Levels

Adjust how much access the client has to their own account.

**To change client access level:**

1. Go to **Clients** in portal
2. Select client from list
3. Select **Access Settings**
4. Select new access level:
   - **Full Access** - Client manages with you
   - **View Only** - Client can view but not edit
   - **No Access** - You manage everything
   - **Custom Access** - Select specific features
5. Select **Save Changes**
6. Client access updates immediately

**Learn more:** [Client Access Levels](/docs/accountant-portal/client-management/client-access-levels)

### Update Team Assignments

Control which team members work with each client.

**To assign team members:**

1. Go to **Clients** in portal
2. Select client from list
3. Select **Team Assignments**
4. Select **Add Team Member**
5. Select team members from branch
6. Assign role for each member:
   - **Full Access** - Complete management
   - **Limited Access** - View and basic edits
   - **View Only** - Read-only access
7. Select **Save Assignments**

**To remove team member:**

1. Go to client's **Team Assignments**
2. Find team member to remove
3. Select **Remove**
4. Confirm removal
5. Team member loses access immediately

## Pausing Client Relationships

Temporarily suspend work with a client without disconnecting.

**To pause client relationship:**

1. Go to **Clients** in portal
2. Select client from list
3. Select **More Actions** > **Pause Relationship**
4. Add reason (internal note)
5. Confirm pause

**What happens when paused:**

**Bill Us model:**
- Billing pauses automatically
- Your team retains view-only access
- Client retains their account access
- All data preserved
- Can resume anytime

**Client Pays model:**
- Client continues paying their subscription
- Your team retains view-only access
- Work stops per agreement
- Can resume anytime
- Connection remains active

**Best for:**
- Seasonal clients (tax season only)
- Clients on temporary hold
- Awaiting client information
- Service level changes
- Project-based relationships

**To resume client relationship:**

1. Go to **Clients** in portal
2. Filter by **Paused** status
3. Select client to resume
4. Select **Resume Relationship**
5. Billing resumes automatically (Bill Us)
6. Full access restored

## Disconnecting Clients

Permanently end the client relationship when needed.

### When to Disconnect

**Common disconnection scenarios:**
- Client switches to another accountant
- Client business closes
- Service agreement terminates
- Client requests disconnection
- Non-payment or terms violation
- Practice restructuring

### Disconnection Process

**To disconnect client:**

1. **Prepare for disconnection**
   - Complete all outstanding work
   - Generate final reports
   - Export data if requested
   - Document handover information
   - Notify client of timeline

2. **Execute disconnection in portal**
   - Go to **Clients** in portal
   - Select client from list
   - Select **More Actions** > **Disconnect Client**
   - Select reason from dropdown:
     - Client request
     - Business closed
     - Switched accountants
     - Non-payment
     - Service termination
     - Other (add note)
   - Add internal notes for records
   - Confirm disconnection
   - Select **Disconnect**

3. **What happens immediately:**
   - Your team loses access to client account
   - Client appears in "Disconnected" filter
   - Billing stops (Bill Us model)
   - Client retains own account (Client Pays model)
   - Historical records preserved in your portal
   - Cannot undo disconnection

### Post-Disconnection

**For Bill Us model:**
- Final billing prorates automatically
- Client keeps their Fiskl account
- Client becomes standalone subscriber if they choose
- Client can connect with different accountant
- Your historical data remains accessible for compliance

**For Client Pays model:**
- Client account unaffected
- Client continues subscription independently
- Client can invite different accountant
- Your historical data remains accessible for compliance

**Your historical access:**
- View past reports and data
- Access for compliance requirements
- Export historical data
- No new data or edits possible
- Audit trail preserved

## Reconnecting Clients

If needed, reconnect with previously disconnected clients.

**To reconnect client:**

1. Go to **Clients** in portal
2. Filter by **Disconnected** status
3. Select client to reconnect
4. Select **Reconnect Client**
5. Confirm reconnection
6. Client must accept invitation (sends automatically)
7. Once accepted, connection restores

**Requirements:**
- Client must still have active Fiskl account
- Client must accept reconnection invitation
- Original billing model applies
- Original branch assignment applies (can change after)

**Alternative reconnection:**
- Generate new invitation link
- Share with client
- Client uses link (may need new account)
- Starts fresh connection

## Client List Management

Organize and maintain your client list effectively.

### Filtering and Searching

**Available filters:**
- **By Status:** Active, Paused, Disconnected
- **By Branch:** All branches or specific branch
- **By Billing Model:** Bill Us, Client Pays, or both
- **By Connection Date:** Custom date ranges
- **By Activity:** Active, Inactive (30 days), Dormant (90 days)

**Search capabilities:**
- Search by company name
- Search by contact name
- Search by contact email
- Search by internal tags
- Search by client ID

### Bulk Actions

Perform actions on multiple clients simultaneously.

**Available bulk actions:**
- Transfer to different branch
- Update team assignments
- Change access levels
- Export client list
- Add tags
- Generate reports

**To perform bulk action:**

1. Go to **Clients** in portal
2. Select checkboxes for multiple clients
3. Select **Bulk Actions** button
4. Select action from dropdown
5. Configure action settings
6. Confirm bulk operation
7. Review results summary

### Client Tags

Organize clients with custom tags for easy filtering.

**Common tag uses:**
- Service type (Bookkeeping, Tax, Advisory)
- Industry (Retail, Professional Services, Manufacturing)
- Engagement level (High-touch, Low-touch, Seasonal)
- Status (New, Established, VIP)
- Custom categories per your practice

**To add tags:**

1. Select client from list
2. Select **Edit Tags**
3. Type new tag or select existing
4. Select **Add**
5. Save changes

**To filter by tags:**

1. Select **Filter** in client list
2. Select **Tags**
3. Select one or more tags
4. View filtered client list

## Client Activity Monitoring

Track client engagement and account usage.

**Activity metrics:**
- Last login date and time
- Recent transaction count
- Invoice activity
- Banking connection status
- Report generation frequency
- Overall engagement score

**Activity alerts:**
- Client hasn't logged in (30+ days)
- No new transactions (60+ days)
- Banking connection expired
- Subscription issue (Bill Us clients)
- Low engagement warning

**To view activity:**

1. Go to **Clients** in portal
2. Select client from list
3. Select **Activity** tab
4. View timeline of key events
5. Review engagement metrics

## Client Communication

Track communication history with clients.

**Communication features:**
- Internal notes (not visible to client)
- Email history (if sent through portal)
- Meeting notes
- Task assignments
- Important dates and reminders

**To add internal note:**

1. Select client from list
2. Select **Notes** tab
3. Select **Add Note**
4. Type note content
5. Select **Save Note**
6. Note visible to all team members assigned

## Troubleshooting

### Cannot Find Client in List

**Cause:** Incorrect filter applied or disconnected client

**Solution:**
1. Remove all filters
2. Check "Disconnected" status filter
3. Search by exact company name
4. Verify branch access (if branch member)
5. Contact Super Admin if still missing

### Client Shows Wrong Billing Model

**Cause:** Cannot change billing model after connection

**Solution:**
1. Billing model cannot be changed
2. If incorrect, must disconnect and reconnect
3. Client creates new account with correct link
4. Historical data preserved in old connection
5. Contact support for exceptional cases

### Team Member Cannot See Client

**Cause:** Not assigned to client or insufficient permissions

**Solution:**
1. Verify team member assigned to client
2. Check branch access permissions
3. Add team member via client settings
4. Verify branch role includes client access
5. Contact Branch Admin or Super Admin

### Client Cannot Access Their Account

**Cause:** Access level set to "No Access"

**Solution:**
1. Review client's access level setting
2. Change to "View Only" or "Full Access" if appropriate
3. Verify change saved
4. Have client refresh browser
5. Client may need to reset password

### Disconnection Cannot Be Undone

**Cause:** Disconnection is permanent action

**Solution:**
1. Use "Pause" instead of "Disconnect" when temporary
2. If already disconnected, use reconnection process
3. Client must accept reconnection invitation
4. Alternative: Generate new invitation link
5. Historical data preserved regardless

## Best Practices

**Regular maintenance:**
- Review client list monthly
- Update inactive clients
- Clean up tags and filters
- Verify team assignments
- Check billing status

**Organization:**
- Use consistent tagging system
- Document disconnection reasons
- Keep internal notes updated
- Transfer clients proactively
- Monitor activity metrics

**Communication:**
- Note important client information
- Track deadlines and commitments
- Document access level rationale
- Record disconnection details
- Maintain audit trail

**Security:**
- Review team assignments quarterly
- Remove unnecessary access
- Monitor activity for anomalies
- Update access levels as needed
- Maintain least-privilege principle

## Need More Help?

**Invite clients:** [Inviting Clients](/docs/accountant-portal/client-management/inviting-clients)

**Accept invitations:** [Accepting Client Invitations](/docs/accountant-portal/client-management/accepting-client-invitations)

**Configure access:** [Client Access Levels](/docs/accountant-portal/client-management/client-access-levels)

**Understand billing:** [Billing Models Overview](/docs/accountant-portal/billing-models/overview)

**Manage team:** [Managing Team Members](/docs/accountant-portal/team-collaboration/managing-team-members)
