---
title: "Understanding Team Structure"
description: "Learn how the Accountant Portal organizes teams with organization-level roles and branch-level accountants for flexible practice management."
keywords: ["team structure", "organization roles", "branch roles", "super admin", "accountant permissions", "team hierarchy"]
sidebar_position: 4
---

This guide explains how the Accountant Portal organizes teams and helps you understand the difference between organization-level roles and branch-level accountants.

## Team Hierarchy Overview

The Accountant Portal uses a two-tier team structure that separates organization management from branch operations.

**Organization Level:**
- Manages the entire accounting firm
- Roles apply across all branches
- Controls billing and high-level settings
- Three roles: Super Admin, Billing Admin, Viewer

**Branch Level:**
- Manages specific branch operations
- Accountants work with clients
- Permissions can differ per branch
- Three roles: Owner, Admin, Member

## Organization-Level Roles

Organization-level roles provide access across all branches in your firm.

### Super Admin

The highest permission level with complete control over the entire organization.

**Capabilities:**
- Create and delete branches
- Add and remove all team members
- View and manage all billing across branches
- Access all client accounts in any branch
- Modify all roles and permissions
- Update organization settings
- Manage payment methods for all branches

**When to use:**
- Practice owners and partners
- Managing directors
- Anyone who needs complete organizational control

### Billing Admin

Focused on financial management across the organization.

**Capabilities:**
- View all invoices from all branches
- See all charges and upcoming fees
- Access billing history
- View payment methods
- Generate financial reports across branches

**Cannot:**
- Modify client accounts
- Change team permissions
- Update organization settings
- Add or remove branches

**When to use:**
- Finance managers monitoring costs
- Bookkeepers managing firm finances
- Partners who oversee billing without operational management

### Viewer

Read-only access across the entire organization.

**Capabilities:**
- View all branches and their settings
- See all client accounts
- View team members and roles
- Access reports and dashboards
- See billing information

**Cannot:**
- Modify any settings
- Add or remove clients
- Change permissions
- Update billing
- Create or delete branches

**When to use:**
- Auditors requiring visibility
- Consultants reviewing practice structure
- Stakeholders needing oversight without control

## Branch-Level Accountants

Branch-level accountants work within specific branches. Each accountant can have different permission levels for each branch.

**Example:** Sarah can be an Owner of the London branch and a Member of the Paris branch simultaneously.

### Owner

Full control over a specific branch.

**Capabilities:**
- Manage all clients in the branch
- Add and remove team members
- Modify billing settings
- Update payment methods
- Change branch settings
- Access all client accounts
- Generate reports

**When to use:**
- Branch managers
- Senior accountants managing a location
- Team leads responsible for a branch

### Admin

Manage clients and team functions with limited billing access.

**Capabilities:**
- Add and manage clients
- Invite accountants to the branch
- Access client accounts
- Generate reports
- Modify client settings

**Cannot by default:**
- Update branch billing settings
- Change payment methods
- Remove the branch
- Modify owner permissions

**Note:** Permissions are customizable per user.

**When to use:**
- Senior accountants without financial responsibility
- Client service managers
- Team leads focused on client work

### Member

Works with clients but cannot manage team or billing.

**Capabilities:**
- Access assigned client accounts
- Work on client books
- Generate client reports
- Communicate with clients

**Cannot:**
- Add or remove clients
- Invite team members
- Change billing settings
- Modify branch settings
- Access unassigned clients

**When to use:**
- Junior accountants
- Bookkeepers on specific clients
- Temporary or contract staff
- Accountants needing limited access

## Cross-Branch Permissions

Accountants can have different permissions across multiple branches.

**Example scenario:**

Sarah manages three branches with different responsibilities:

- **London Branch**: Owner - Manages the entire branch
- **Paris Branch**: Admin - Helps with clients, no billing
- **Amsterdam Branch**: Member - Works on assigned clients only

This flexibility matches permissions to responsibilities per location.

## Best Practices

**Start simple:**
- Begin with one Super Admin
- Add branch Owners for each location
- Expand gradually as needed

**Match roles to responsibilities:**
- Give minimum necessary permissions
- Upgrade permissions as roles expand
- Review permissions quarterly

**Security considerations:**
- Limit Super Admin to 2-3 key people
- Use strong passwords and two-factor authentication
- Remove access when roles change

## Need More Help?

**Manage roles and permissions:** [Roles and Permissions](/accountant-portal/team-collaboration/roles-permissions)

**Add team members:** [Managing Team Members](/accountant-portal/team-collaboration/managing-team-members)

**Set up your practice:** [Setting Up Your Practice](/accountant-portal/getting-started/setting-up-your-practice)