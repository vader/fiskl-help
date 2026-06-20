#!/bin/bash

# Fiskl Documentation Structure Migration
# Run these commands in order to migrate to the new structure
# Each phase can be done separately to avoid breaking changes

echo "=================================================="
echo "FISKL DOCUMENTATION MIGRATION"
echo "=================================================="
echo ""

# ==================================================
# PHASE 1: CREATE NEW SECTIONS (Non-Breaking)
# ==================================================
echo "PHASE 1: Creating new sections..."
echo "--------------------------------------------------"

# Dashboard Section
echo "Creating Dashboard section..."
npm run create-page dashboard/overview.md
npm run create-page dashboard/navigation-basics.md
npm run create-page dashboard/customizing-dashboard.md

# Support Section
echo "Creating Support section..."
npm run create-page support/overview.md
npm run create-page support/contact-support.md
npm run create-page support/troubleshooting.md
npm run create-page support/system-status.md
npm run create-page support/feedback.md

# Security Section
echo "Creating Security section..."
npm run create-page security/overview.md
npm run create-page security/data-privacy.md
npm run create-page security/backups-recovery.md
npm run create-page security/compliance.md
npm run create-page security/two-factor-auth.md

# Accountant Portal Section
echo "Creating Accountant Portal section..."
npm run create-page accountant-portal/overview.md

# Accountant Portal - Getting Started
npm run create-page accountant-portal/getting-started/overview.md
npm run create-page accountant-portal/getting-started/setting-up-your-practice.md
npm run create-page accountant-portal/getting-started/configuring-branches.md
npm run create-page accountant-portal/getting-started/team-structure.md

# Accountant Portal - Client Management
npm run create-page accountant-portal/client-management/overview.md
npm run create-page accountant-portal/client-management/inviting-clients.md
npm run create-page accountant-portal/client-management/accepting-client-invitations.md
npm run create-page accountant-portal/client-management/client-connections.md
npm run create-page accountant-portal/client-management/client-access-levels.md

# Accountant Portal - Billing Models
npm run create-page accountant-portal/billing-models/overview.md
npm run create-page accountant-portal/billing-models/bill-us-model.md
npm run create-page accountant-portal/billing-models/client-pays-model.md
npm run create-page accountant-portal/billing-models/switching-billing-models.md

# Accountant Portal - Team Collaboration
npm run create-page accountant-portal/team-collaboration/overview.md
npm run create-page accountant-portal/team-collaboration/roles-permissions.md
npm run create-page accountant-portal/team-collaboration/managing-team-members.md
npm run create-page accountant-portal/team-collaboration/branch-management.md
npm run create-page accountant-portal/team-collaboration/workflow-assignments.md

# Accountant Portal - Partner Program
npm run create-page accountant-portal/partner-program/overview.md
npm run create-page accountant-portal/partner-program/becoming-a-partner.md
npm run create-page accountant-portal/partner-program/partner-benefits.md
npm run create-page accountant-portal/partner-program/referral-tracking.md
npm run create-page accountant-portal/partner-program/partner-resources.md

# Accountant Portal - Reporting Analytics
npm run create-page accountant-portal/reporting-analytics/overview.md
npm run create-page accountant-portal/reporting-analytics/practice-dashboard.md
npm run create-page accountant-portal/reporting-analytics/client-portfolio-view.md
npm run create-page accountant-portal/reporting-analytics/team-performance.md
npm run create-page accountant-portal/reporting-analytics/billing-reports.md

echo "✅ Phase 1 Complete: New sections created"
echo ""

# ==================================================
# PHASE 2: ENHANCE EXISTING SECTIONS (Non-Breaking)
# ==================================================
echo "PHASE 2: Enhancing existing sections..."
echo "--------------------------------------------------"

# Enhanced Getting Started
echo "Enhancing Getting Started section..."
npm run create-page getting-started/quick-start-guide.md
npm run create-page getting-started/complete-setup-checklist.md
npm run create-page getting-started/importing-data.md
npm run create-page getting-started/your-first-invoice.md
npm run create-page getting-started/connecting-your-bank.md
npm run create-page getting-started/by-role/freelancers.md
npm run create-page getting-started/by-role/small-business-owners.md
npm run create-page getting-started/by-role/accountants.md
npm run create-page getting-started/by-role/bookkeepers.md

echo "✅ Phase 2 Complete: Enhanced sections created"
echo ""

# ==================================================
# PHASE 3: SPLIT CLIENTS-VENDORS (Breaking Change)
# ==================================================
echo "PHASE 3: Splitting clients-vendors section..."
echo "--------------------------------------------------"
echo "⚠️  WARNING: This will break existing links!"
echo "Press Ctrl+C to cancel, or Enter to continue..."
read

# Create new Clients section
echo "Creating Clients section..."
npm run create-page clients/overview.md
npm run create-page clients/client-statements.md
npm run create-page clients/client-portal.md

# Create new Vendors section
echo "Creating Vendors section..."
npm run create-page vendors/overview.md
npm run create-page vendors/vendor-payments.md

# Move existing files
echo "Moving existing files..."
npm run move-page clients-vendors/managing-clients.md clients/managing-clients.md
npm run move-page clients-vendors/managing-vendors.md vendors/managing-vendors.md

echo "✅ Phase 3 Complete: Clients and Vendors split"
echo ""

# ==================================================
# PHASE 4: SPLIT LINE-ITEMS (Breaking Change)
# ==================================================
echo "PHASE 4: Splitting line-items section..."
echo "--------------------------------------------------"
echo "⚠️  WARNING: This will break existing links!"
echo "Press Ctrl+C to cancel, or Enter to continue..."
read

# Create new Expenses section
echo "Creating Expenses section..."
npm run create-page expenses/overview.md
npm run create-page expenses/expense-categories.md
npm run create-page expenses/reimbursements.md

# Create new Products & Services section
echo "Creating Products & Services section..."
npm run create-page products-services/overview.md
npm run create-page products-services/creating-products.md
npm run create-page products-services/managing-services.md
npm run create-page products-services/pricing-tiers.md

# Create new Time Tracking section
echo "Creating Time Tracking section..."
npm run create-page time-tracking/overview.md
npm run create-page time-tracking/tracking-time.md
npm run create-page time-tracking/billing-for-time.md

# Move existing files
echo "Moving existing files..."
npm run move-page line-items/expenses.md expenses/recording-expenses.md
npm run move-page line-items/mileage.md expenses/mileage-tracking.md
npm run move-page line-items/products-and-services.md products-services/managing-catalog.md
npm run move-page line-items/time-tracking.md time-tracking/recording-time.md

echo "✅ Phase 4 Complete: Line-items split into logical sections"
echo ""

# ==================================================
# PHASE 5: CREATE TEAM SECTION (Non-Breaking)
# ==================================================
echo "PHASE 5: Creating Team section..."
echo "--------------------------------------------------"

echo "Creating Team section (basic multi-user)..."
npm run create-page team/overview.md
npm run create-page team/roles-permissions.md
npm run create-page team/inviting-users.md
npm run create-page team/approval-workflows.md
npm run create-page team/activity-logs.md

echo "✅ Phase 5 Complete: Team section created"
echo ""

# ==================================================
# PHASE 6: MOVE ACCOUNTING FAQs (Breaking Change)
# ==================================================
echo "PHASE 6: Moving accounting FAQs..."
echo "--------------------------------------------------"
echo "⚠️  This will move accounting-faqs.md to the accounting folder"
echo "Press Ctrl+C to cancel, or Enter to continue..."
read

# Check if file exists in faqs folder
if [ -f "docs/faqs/accounting-faqs.md" ]; then
    echo "Moving accounting-faqs.md to accounting folder..."
    npm run move-page faqs/accounting-faqs.md accounting/accounting-faqs.md
    echo "✅ Accounting FAQs moved"
else
    echo "ℹ️  accounting-faqs.md not found in faqs folder (may already be moved)"
fi

echo ""

# ==================================================
# PHASE 7: DELETE OLD FAQ FILES (Breaking Change)
# ==================================================
echo "PHASE 7: Deleting general FAQs..."
echo "--------------------------------------------------"
echo "⚠️  WARNING: This will delete the general FAQs file!"
echo "Make sure content has been integrated into relevant sections first."
echo "Press Ctrl+C to cancel, or Enter to continue..."
read

# Delete general FAQs (after content is integrated)
if [ -f "docs/faqs/general-faqs.md" ]; then
    echo "Deleting general-faqs.md..."
    npm run delete-page faqs/general-faqs.md
    echo "✅ General FAQs deleted"
else
    echo "ℹ️  general-faqs.md not found"
fi

echo ""

# ==================================================
# SUMMARY
# ==================================================
echo "=================================================="
echo "MIGRATION COMPLETE!"
echo "=================================================="
echo ""
echo "Summary of changes:"
echo "✅ Added: dashboard/ (4 pages)"
echo "✅ Added: support/ (5 pages)"
echo "✅ Added: security/ (5 pages)"
echo "✅ Added: accountant-portal/ (25 pages)"
echo "✅ Enhanced: getting-started/ (9 new pages)"
echo "✅ Split: clients-vendors/ → clients/ + vendors/"
echo "✅ Split: line-items/ → expenses/ + products-services/ + time-tracking/"
echo "✅ Added: team/ (5 pages)"
echo "✅ Moved: accounting-faqs.md to accounting/"
echo "✅ Deleted: faqs/general-faqs.md"
echo ""
echo "Next steps:"
echo "1. Update navigation order in docusaurus.config.js"
echo "2. Update all internal links that pointed to old paths"
echo "3. Add content to placeholder pages"
echo "4. Test all three languages (en, fr, es)"
echo "5. Run: npm run build"
echo "6. Run: npm run serve"
echo ""
echo "=================================================="