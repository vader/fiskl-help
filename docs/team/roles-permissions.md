---
title: "User Roles and Permissions"
description: "Understand the five user roles in Fiskl and what permissions each role grants for effective team collaboration."
keywords: ["user roles", "permissions", "access control", "owner", "admin", "billing user", "accountant"]
sidebar_position: 2
---

# User Roles and Permissions

This guide explains the five user roles in Fiskl and the specific permissions each role grants, helping you assign appropriate access levels to your team members.

## Understanding Role-Based Access

Fiskl uses role-based access control to manage what team members can see and do. Each role grants a specific set of permissions designed for common business functions.

**Why roles matter:**
- Protect sensitive financial information
- Prevent accidental changes to accounting records
- Enable delegation without compromising security
- Meet compliance requirements for access control
- Simplify permission management

## The Five Roles

### Owner

The Owner is the account creator and has complete control over the Fiskl account.

**Full permissions:**
- All features and data access
- Manage subscriptions and billing
- Invite, modify, and remove all users
- Access all financial records and reports
- Modify company settings
- Connect and disconnect banks
- Manage integrations
- Export all data

**Unique capabilities:**
- Only role that can delete the entire account
- Only role that can change subscription plans
- Only role that can update payment methods
- Can transfer ownership to another user

**Limitations:**
- Only one Owner per account
- Cannot be deactivated (only transferred)

**Common use case:**
The business founder or primary decision-maker who manages subscriptions and overall financial strategy.

### Admin

Admins have nearly the same access as Owners but cannot manage subscriptions or billing.

**Full permissions:**
- All features except subscription/billing
- Invite and manage all users (except Owner modifications)
- Access all financial records and reports
- Modify company settings
- Connect and disconnect banks
- Manage integrations
- Export all data
- Create and manage all transaction types

**Cannot access:**
- Subscription plans and changes
- Payment method management
- Billing history
- Account deletion

**Limitations:**
- Cannot modify the Owner's role or status
- Cannot transfer ownership

**Common use case:**
Office manager, financial controller, or operations manager who handles day-to-day financial operations.

### Billing User

Billing Users focus on client-facing activities like invoicing and expense submission.

**Can access:**
- Create, edit, and send invoices
- Create and manage quotes
- Add and edit clients
- Create expenses (own only)
- Log time entries (own only)
- Add mileage (own only)
- View invoices and quotes
- View own submitted expenses, time, and mileage

**Cannot access:**
- Accounting features (Chart of Accounts, journals)
- Financial reports
- Banking and transactions
- Other users' expenses, time, or mileage
- Company settings
- User management
- Subscription or billing information

**Limitations:**
- Cannot see the Dashboard financial metrics
- Cannot categorize transactions
- Cannot reconcile bank accounts
- Cannot view or modify other users' submissions

**Common use case:**
Sales team members, project managers, or client service representatives who create invoices and submit their own expenses.

### User

Users have the most restricted access, limited to submitting their own expenses, time, and mileage.

**Can access:**
- Create expenses (own only)
- Log time entries (own only)
- Add mileage (own only)
- View own submitted items
- Edit own items (if not yet approved)

**Cannot access:**
- Invoicing features
- Client management
- Financial reports
- Accounting features
- Banking and transactions
- Other users' submissions
- Company settings
- User management

**Limitations:**
- Cannot create invoices
- Cannot view Dashboard
- Cannot see financial metrics
- Cannot access any reports

**Common use case:**
Field workers, contractors, or remote employees who need to submit expenses and track time but don't need access to invoicing or financial data.

### Accountant

Accountants have read-only access to all financial records, perfect for external accounting professionals.

**Can access:**
- View Chart of Accounts
- View all transactions
- View and export all reports
- View invoices, expenses, and payments
- View banking connections and transactions
- View client and vendor lists

**Can generate and export:**
- Profit & Loss statements
- Balance Sheets
- Cash Flow reports
- Transaction reports
- Tax reports
- Custom reports

**Cannot do:**
- Create or edit any records
- Delete transactions
- Modify Chart of Accounts
- Change company settings
- Invite or manage users
- Access subscription or billing

**Limitations:**
- Strictly read-only access
- Cannot initiate any transactions
- Cannot modify existing records

**Common use case:**
External accountant or bookkeeper who reviews records, prepares tax returns, or provides financial advice.

:::info
Accountants are included in all Fiskl plans at no additional cost. You can invite your accounting professional without worrying about extra fees.
:::

## Permission Comparison Table

| Feature | Owner | Admin | Billing User |
|---------|-------|-------|--------------|
| **Invoicing** | | | |
| Create/edit invoices | ✓ | ✓ | ✓ |
| Send invoices | ✓ | ✓ | ✓ |
| View invoices | ✓ | ✓ | ✓ |
| **Expenses & Time** | | | |
| Create own expenses | ✓ | ✓ | ✓ |
| View own expenses | ✓ | ✓ | ✓ |
| View all expenses | ✓ | ✓ | ✗ |
| Log own time | ✓ | ✓ | ✓ |
| View all time | ✓ | ✓ | ✗ |
| **Clients & Vendors** | | | |
| Manage clients | ✓ | ✓ | ✓ |
| View clients | ✓ | ✓ | ✓ |
| Manage vendors | ✓ | ✓ | ✗ |
| View vendors | ✓ | ✓ | ✗ |
| **Accounting** | | | |
| Chart of Accounts | ✓ | ✓ | ✗ |
| Journal entries | ✓ | ✓ | ✗ |
| View transactions | ✓ | ✓ | ✗ |
| Categorize transactions | ✓ | ✓ | ✗ |
| **Banking** | | | |
| Connect banks | ✓ | ✓ | ✗ |
| View banking | ✓ | ✓ | ✗ |
| Reconcile accounts | ✓ | ✓ | ✗ |
| **Reports** | | | |
| View all reports | ✓ | ✓ | ✗ |
| Export reports | ✓ | ✓ | ✗ |
| Dashboard metrics | ✓ | ✓ | ✗ |
| **Settings** | | | |
| Company settings | ✓ | ✓ | ✗ |
| User management | ✓ | ✓ | ✗ |
| Subscription/billing | ✓ | ✗ | ✗ |
| Delete account | ✓ | ✗ | ✗ |

## Choosing the Right Role

Use this decision tree to select appropriate roles:

**Does this person need to manage subscriptions or billing?**
- Yes → **Owner** (only one allowed)
- No → Continue

**Does this person need full access to all financial data?**
- Yes, and they need to modify records → **Admin**
- Yes, but read-only access is sufficient → **Accountant**
- No → Continue

**Does this person need to create invoices?**
- Yes → **Billing User**
- No → Continue

**Does this person only need to submit expenses and time?**
- Yes → **User**

## Special Considerations

### Multiple Admins

You can have multiple Admins. This is useful for:
- Redundancy if the primary Admin is unavailable
- Large teams with multiple managers
- Separating duties while maintaining full access

**Best practice:** Limit Admins to those who genuinely need full access. More Admins means more people with access to sensitive data.

### External Accountants

Always use the **Accountant** role for external accounting professionals:
- They get all the data they need for reports and tax prep
- They cannot accidentally modify your records
- You don't pay extra fees for accountant users
- They can work independently without your supervision

### Transitioning Roles

As team members grow in responsibility, upgrade their roles:
- User → Billing User: When they start handling client invoicing
- Billing User → Admin: When they take on financial management duties

**To change roles:** See [Inviting and Managing Users](./inviting-users)

## Common Role Assignment Scenarios

### Small Business (1-5 people)
- **Owner**: Business owner
- **Admin**: Office manager or spouse who handles finances
- **Billing User**: Sales person or assistant who invoices clients
- **Accountant**: External CPA or bookkeeper

### Growing Business (6-20 people)
- **Owner**: Founder or CEO
- **Admin**: CFO or controller, office manager
- **Billing User**: Account managers, project managers
- **User**: Field technicians, contractors
- **Accountant**: External CPA

### Agency or Professional Services
- **Owner**: Managing partner
- **Admin**: Operations manager, finance manager
- **Billing User**: Project leads who invoice clients
- **User**: All other team members who log time
- **Accountant**: External accountant for tax prep

## Security Best Practices

**Follow least privilege:**
Assign the minimum role needed for each person's job function. You can always upgrade later.

**Review roles quarterly:**
As responsibilities change, roles should change too. Review every few months.

**Use Accountant role for external professionals:**
Never give external accountants Admin or Owner access. The Accountant role provides everything they need.

**Limit Owner and Admin roles:**
Keep these roles restricted to 1-3 trusted individuals maximum.

**Deactivate immediately:**
When someone leaves your organization, deactivate their account the same day.

**Don't share logins:**
Each person should have their own account. Shared logins make it impossible to track who did what.

---

## Related Topics

- [Inviting and Managing Users](./inviting-users) - Add team members and manage their access
- [Team Members Overview](./overview) - Understand team management basics
- [User Settings](/settings/profile-settings) - Manage personal account preferences