---
title: "Client Access Levels"
description: "Configure and manage client access levels to control what clients can see and do in their own Fiskl accounts through the Accountant Portal."
keywords: ["client access", "access levels", "client permissions", "full access", "view only", "no access", "custom access"]
sidebar_position: 5
---

This guide explains how to configure client access levels to control what clients can see and do in their own Fiskl accounts.

## Understanding Client Access Levels

Client access levels determine how much clients can interact with their own Fiskl accounts while you manage their books.

**Access level controls:**
- What features clients can use
- What data clients can view
- Whether clients can make changes
- What reports clients can generate
- Which settings clients can modify

**Why access levels matter:**
- Match service agreements
- Prevent accidental changes
- Enable collaboration
- Maintain data quality
- Support different engagement models

## Available Access Levels

Fiskl provides four primary access levels with increasing client control.

### No Access

You manage everything, client cannot log in or view their account.

**What clients can do:**
- Nothing - no login access
- Receive invoices and reports you send via email
- Cannot view data in Fiskl

**What you manage:**
- All data entry
- All transactions
- All reconciliation
- All reporting
- All settings and configuration

**Best for:**
- Full-service bookkeeping packages
- Clients who want zero involvement
- High-end service offerings
- Clients lacking accounting knowledge
- Time-intensive engagements

**Example service model:**
"We handle everything. You receive monthly reports and invoices, but never need to log in or enter data."

### View Only

Client can view their account data but cannot make any changes.

**What clients can do:**
- Log in to their Fiskl account
- View all financial data
- See transactions and reconciliations
- Generate and export reports
- View invoices and expenses
- See dashboard and charts

**What clients cannot do:**
- Create or edit transactions
- Add invoices or expenses
- Modify Chart of Accounts
- Change settings
- Reconcile accounts
- Connect integrations

**What you manage:**
- All data entry
- All editing and modifications
- All settings and configuration
- All reconciliations
- All integrations

**Best for:**
- Clients wanting visibility without responsibility
- Oversight and transparency needs
- Collaborative reporting discussions
- Education and training scenarios
- Audit and compliance reviews

**Example service model:**
"You can log in anytime to see your financials, run reports, and review transactions, but we handle all the data entry and reconciliation."

### Full Access

Client can manage their account with full permissions alongside you.

**What clients can do:**
- Everything in View Only, plus:
- Create and edit transactions
- Send invoices and record expenses
- Reconcile bank accounts
- Connect banking and payment integrations
- Configure some settings
- Manage products and services
- Add clients and vendors

**What clients cannot do:**
- Delete reconciliations (protected)
- Access accountant-only features
- Change core accounting settings
- Remove your accountant access
- Modify Chart of Accounts (typically)

**What you manage:**
- Review and adjust client entries
- Month-end reconciliation review
- Chart of Accounts maintenance
- Tax configuration
- Complex transactions
- Advisory and strategy

**Best for:**
- Collaborative bookkeeping models
- Clients with accounting experience
- DIY clients needing advisory support
- Retainer-based relationships
- Hybrid service models

**Example service model:**
"You handle day-to-day invoicing and expense entry. We review monthly, make adjustments, and handle all the complex accounting."

### Custom Access

Select specific features clients can access for tailored permission sets.

**Customizable permissions:**
- **Invoicing:** Create/edit invoices and quotes
- **Expenses:** Record and categorize expenses
- **Banking:** View and categorize bank transactions
- **Reconciliation:** Reconcile accounts
- **Reports:** Generate specific report types
- **Clients/Vendors:** Manage contacts
- **Products/Services:** Manage catalog
- **Settings:** Access specific settings areas

**Custom combinations examples:**

**Invoicing-Only Access:**
- Create and send invoices
- View client list
- See accounts receivable reports
- No expense or banking access

**Expense-Entry Access:**
- Record expenses
- Upload receipts
- Categorize transactions
- No invoicing or reporting access

**Banking-Only Access:**
- View bank transactions
- Categorize transactions
- No reconciliation or editing rights
- No reports access

**Best for:**
- Specialized workflows
- Team role division
- Training transitions
- Specific service packages
- Security-conscious configurations

## Setting Client Access Levels

Configure access levels when connecting clients or anytime after.

### Set Access During Client Onboarding

**After accepting Bill Us invitation:**

1. Client appears in your Clients list
2. Select client from list
3. Select **Set Access Level**
4. Select access level:
   - No Access
   - View Only
   - Full Access
   - Custom Access
5. If Custom, select specific permissions
6. Select **Save Access Level**
7. Client access updates immediately

**After accepting Client Pays invitation:**

1. Review invitation details
2. Select **Accept Invitation**
3. Select **Set Access Level**
4. Select appropriate access level
5. Select **Complete Connection**
6. Client access configured

### Change Access Level Later

**To modify existing client access:**

1. Go to **Clients** in portal
2. Select client from list
3. Select **Access Settings**
4. Select new access level
5. If Custom, adjust permissions
6. Select **Save Changes**
7. Client access updates immediately
8. Client may need to refresh browser

**Access level changes:**
- Take effect immediately
- Client sees updated interface next login
- Client may see permission notice
- No notification sent to client
- Change logged in activity history

## Custom Access Configuration

Build tailored permission sets for specific service models.

### Configuring Custom Permissions

**To set up custom access:**

1. Go to client's **Access Settings**
2. Select **Custom Access**
3. Review available permission categories:
   - **Dashboard** - View financial overview
   - **Banking** - Access banking features
   - **Invoicing** - Create and send invoices
   - **Expenses** - Record expenses
   - **Reports** - Generate reports
   - **Contacts** - Manage clients/vendors
   - **Products** - Manage catalog
   - **Settings** - Access specific settings
4. Toggle each permission on or off
5. Select sub-permissions where available
6. Preview access summary
7. Select **Save Custom Access**

### Custom Access Examples

**Example 1: Invoicing Specialist**
```
✓ Dashboard - View only
✓ Invoicing - Full access
  ✓ Create invoices
  ✓ Send invoices
  ✓ Receive payments
  ✓ Manage quotes
✓ Contacts - Clients only
  ✓ View clients
  ✓ Add clients
  ✓ Edit client details
✓ Products - View and edit
✓ Reports - AR reports only
✗ Banking - No access
✗ Expenses - No access
✗ Settings - No access
```

**Example 2: Expense Reporter**
```
✓ Dashboard - View only
✓ Expenses - Full access
  ✓ Record expenses
  ✓ Upload receipts
  ✓ Categorize expenses
  ✓ Submit for approval
✓ Contacts - Vendors only
  ✓ View vendors
  ✓ Add new vendors
✗ Invoicing - No access
✗ Banking - No access
✗ Reports - No access
✗ Settings - No access
```

**Example 3: Banking Categorizer**
```
✓ Dashboard - View only
✓ Banking - Limited access
  ✓ View transactions
  ✓ Categorize transactions
  ✓ Add notes
  ✗ Reconcile accounts
  ✗ Connect banks
✓ Contacts - View only
✓ Reports - Basic reports only
✗ Invoicing - No access
✗ Expenses - No access
✗ Settings - No access
```

## Access Level Best Practices

### Select the Right Access Level

**Consider these factors:**
- Client's accounting knowledge
- Service agreement scope
- Desired level of involvement
- Client's technical comfort
- Risk tolerance for errors
- Collaboration model
- Billing structure

**Decision framework:**

**No Access when:**
- Full-service package sold
- Client wants zero involvement
- High error risk from client entry
- Premium "done for you" service
- Client lacks accounting knowledge

**View Only when:**
- Client wants transparency
- Educational relationship
- Client checks work regularly
- Trust-building phase
- Compliance requires client review

**Full Access when:**
- Collaborative model agreed
- Client has accounting experience
- Advisory service sold
- Client handles routine tasks
- You review and adjust monthly

**Custom Access when:**
- Specific workflow needed
- Training someone gradually
- Team roles require division
- Security concerns exist
- Hybrid service model used

### Transitioning Access Levels

Many client relationships evolve over time. Plan transitions carefully.

**Common transition paths:**

**1. No Access → View Only**
- Client requests more visibility
- Relationship matures
- Client education increases
- Transparency improves trust

**2. View Only → Custom (Limited)**
- Client wants to try data entry
- Start with one feature (e.g., expenses)
- Training and oversight period
- Gradual responsibility increase

**3. Custom (Limited) → Full Access**
- Client demonstrates competency
- Service model changes to advisory
- Client comfortable with responsibilities
- Trust and quality established

**4. Full Access → View Only**
- Too many errors from client
- Service model upgrade sold
- Client no longer has time
- You take over more work

**Transition best practices:**
- Discuss changes with client first
- Document reason for change
- Provide training if adding access
- Monitor quality after change
- Schedule review after 30 days

### Monitoring Client Access Usage

Track how clients use their access to optimize service delivery.

**Usage metrics to monitor:**
- Last login date
- Feature usage frequency
- Transaction entry volume
- Error rate in client entries
- Time spent in account
- Report generation frequency

**Quality indicators:**
- Categorization accuracy
- Reconciliation errors
- Invoice quality
- Data completeness
- Question frequency
- Correction requirements

**To review client usage:**

1. Go to **Clients** in portal
2. Select client from list
3. Select **Activity** tab
4. Review login history
5. Check feature usage
6. Assess entry quality
7. Adjust access if needed

## Access Level and Service Models

Align access levels with your service offerings.

### Service Model Examples

**Premium Full-Service Bookkeeping**
- **Access Level:** No Access
- **You Do:** Everything
- **Client Does:** Nothing
- **Touchpoints:** Monthly report review
- **Pricing:** Highest tier

**Collaborative Bookkeeping**
- **Access Level:** Full Access
- **You Do:** Review, adjust, reconcile, advise
- **Client Does:** Daily transactions, invoicing, expenses
- **Touchpoints:** Monthly review meeting
- **Pricing:** Mid tier

**Advisory Services**
- **Access Level:** Full Access
- **You Do:** Strategic guidance, complex transactions
- **Client Does:** All routine bookkeeping
- **Touchpoints:** Quarterly strategic reviews
- **Pricing:** Lower monthly, higher advisory fees

**Hybrid DIY Support**
- **Access Level:** Full Access
- **You Do:** Month-end review, adjustments, tax prep
- **Client Does:** All data entry and categorization
- **Touchpoints:** Monthly review, quarterly check-ins
- **Pricing:** Low monthly, per-service fees

**Training and Transition**
- **Access Level:** Custom (gradually expanding)
- **You Do:** Initially everything, gradually reduce
- **Client Does:** Gradually take over with training
- **Touchpoints:** Weekly training sessions
- **Pricing:** Fixed training fee, then lower ongoing

## Security and Compliance

Access levels support data security and compliance requirements.

**Security benefits:**
- Limit access to sensitive data
- Reduce error risk
- Maintain audit trails
- Support least-privilege principle
- Prevent unauthorized changes

**Compliance considerations:**
- Some regulations require client review (View Only minimum)
- Document access level rationale
- Maintain change history
- Support audit requirements
- Enable client verification

**Access level auditing:**
- Changes logged automatically
- Track who changed access when
- Document reason for changes
- Review access quarterly
- Update as needed

## Troubleshooting

### Client Cannot See Expected Features

**Cause:** Access level too restrictive

**Solution:**
1. Review current access level setting
2. Check if Custom Access configured
3. Verify specific permissions enabled
4. Update access level if appropriate
5. Have client log out and back in

### Client Can Do Too Much

**Cause:** Access level too permissive

**Solution:**
1. Review current access level
2. Change to more restrictive level
3. Or switch to Custom Access
4. Disable specific permissions
5. Save changes (takes effect immediately)

### Client Cannot Login

**Cause:** Access level set to No Access

**Solution:**
1. Verify this is correct for service model
2. If client should have access, change to View Only minimum
3. Save changes
4. Have client try logging in again
5. Client may need password reset

### Client Sees Accountant Features

**Cause:** Technical issue, not access level problem

**Solution:**
1. Have client refresh browser
2. Clear cache and cookies
3. Try different browser
4. Verify not logged into wrong account
5. Contact support if persists

### Cannot Change Client Access Level

**Cause:** Insufficient permissions in portal

**Solution:**
1. Verify you have Branch Admin or Owner role
2. Super Admins can change any client access
3. Branch Members cannot change access levels
4. Contact your Branch Admin or Super Admin
5. Check if client disconnected

## Need More Help?

**Manage connections:** [Client Connections](/docs/accountant-portal/client-management/client-connections)

**Invite clients:** [Inviting Clients](/docs/accountant-portal/client-management/inviting-clients)

**Accept invitations:** [Accepting Client Invitations](/docs/accountant-portal/client-management/accepting-client-invitations)

**Understand roles:** [Roles and Permissions](/docs/accountant-portal/team-collaboration/roles-permissions)

**Set up services:** [Client Management Overview](/docs/accountant-portal/client-management/overview)
