import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Fiskl Atlas sidebar (Accountant Portal)
 *
 * This is the sidebar for the second docs instance.
 * Content lives in docs-atlas/ and routes under /atlas/*.
 *
 * File structure inside docs-atlas/ mirrors the old
 * docs/accountant-portal/ structure but one level up:
 *
 *   docs-atlas/
 *   ├── overview.md                  (Atlas landing page)
 *   ├── getting-started/
 *   │   ├── overview.md
 *   │   ├── setting-up-your-practice.md
 *   │   ├── team-structure.md
 *   │   └── configuring-branches.md
 *   ├── client-management/
 *   │   ├── overview.md
 *   │   ├── inviting-clients.md
 *   │   ├── accepting-client-invitations.md
 *   │   ├── client-connections.md
 *   │   └── client-access-levels.md
 *   ├── billing-models/
 *   │   ├── overview.md
 *   │   ├── client-pays-model.md
 *   │   ├── bill-us-model.md
 *   │   └── switching-billing-models.md
 *   ├── team-collaboration/
 *   │   ├── overview.md
 *   │   ├── managing-team-members.md
 *   │   ├── roles-permissions.md
 *   │   ├── branch-management.md
 *   ├── reporting-analytics/
 *   │   ├── overview.md
 *   │   ├── practice-dashboard.md
 *   │   ├── client-portfolio-view.md
 *   │   ├── billing-reports.md
 *   │   └── team-performance.md
 *   └── partner-program/
 *       ├── overview.md
 *       ├── becoming-a-partner.md
 *       ├── partner-benefits.md
 *       ├── partner-resources.md
 *       └── referral-tracking.md
 */
const sidebars: SidebarsConfig = {
    atlasSidebar: [
        'overview',

        // ================================================================
        // GETTING STARTED
        // ================================================================
        {
            type: 'category',
            label: '🚀 Getting Started',
            link: {type: 'doc', id: 'getting-started/getting-started-overview'},
            collapsed: false,
            items: [
                'getting-started/setting-up-your-practice',
                'getting-started/team-structure',
                'getting-started/configuring-branches',
            ],
        },

        {
            type: 'html',
            value: '<div style="margin: 1.5rem 0 1rem 0; padding-top: 1rem; border-top: 2px solid var(--ifm-color-emphasis-300);"></div>',
        },

        // ================================================================
        // CLIENT MANAGEMENT
        // ================================================================
        {
            type: 'category',
            label: 'Client Management',
            link: {type: 'doc', id: 'client-management/client-management-overview'},
            items: [
                'client-management/adding-clients',
                'client-management/accepting-client-invitations',
                'client-management/client-connections',
                'client-management/client-access-levels',
            ],
        },

        // ================================================================
        // BILLING MODELS
        // ================================================================
        {
            type: 'category',
            label: 'Billing Models',
            link: {type: 'doc', id: 'billing-models/overview'},
            items: [
                'billing-models/client-pays-model',
                'billing-models/bill-us-model',
                'billing-models/switching-billing-models',
            ],
        },

        {
            type: 'html',
            value: '<div style="margin: 1.5rem 0 1rem 0; padding-top: 1rem; border-top: 2px solid var(--ifm-color-emphasis-300);"></div>',
        },

        // ================================================================
        // TEAM COLLABORATION
        // ================================================================
        {
            type: 'category',
            label: 'Team & Branches',
            link: {type: 'doc', id: 'team-collaboration/overview'},
            items: [
                'team-collaboration/managing-team-members',
                'team-collaboration/roles-permissions',
                'team-collaboration/branch-management',
            ],
        },

        // ================================================================
        // REPORTS & ANALYTICS
        // ================================================================
        {
            type: 'category',
            label: 'Reports & Analytics',
            link: {type: 'doc', id: 'reporting-analytics/reporting-analytics-overview'},
            items: [
                'reporting-analytics/practice-dashboard',
                'reporting-analytics/client-portfolio-view',
                'reporting-analytics/billing-reports',
                'reporting-analytics/team-performance',
            ],
        },

        {
            type: 'html',
            value: '<div style="margin: 1.5rem 0 1rem 0; padding-top: 1rem; border-top: 2px solid var(--ifm-color-emphasis-300);"></div>',
        },

        // ================================================================
        // PARTNER PROGRAM
        // ================================================================
        {
            type: 'category',
            label: 'Partner Program',
            link: {type: 'doc', id: 'partner-program/partner-program-overview'},
            items: [
                'partner-program/becoming-a-partner',
                'partner-program/partner-benefits',
                'partner-program/partner-resources',
                'partner-program/referral-tracking',
            ],
        },
    ],
};

export default sidebars;
