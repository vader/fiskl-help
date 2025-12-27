import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/es/blog',
    component: ComponentCreator('/es/blog', '802'),
    exact: true
  },
  {
    path: '/es/blog/archive',
    component: ComponentCreator('/es/blog/archive', 'c1d'),
    exact: true
  },
  {
    path: '/es/blog/authors',
    component: ComponentCreator('/es/blog/authors', 'e39'),
    exact: true
  },
  {
    path: '/es/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/es/blog/authors/all-sebastien-lorber-articles', '6e5'),
    exact: true
  },
  {
    path: '/es/blog/authors/yangshun',
    component: ComponentCreator('/es/blog/authors/yangshun', 'ed1'),
    exact: true
  },
  {
    path: '/es/blog/first-blog-post',
    component: ComponentCreator('/es/blog/first-blog-post', '041'),
    exact: true
  },
  {
    path: '/es/blog/long-blog-post',
    component: ComponentCreator('/es/blog/long-blog-post', '13f'),
    exact: true
  },
  {
    path: '/es/blog/mdx-blog-post',
    component: ComponentCreator('/es/blog/mdx-blog-post', 'a97'),
    exact: true
  },
  {
    path: '/es/blog/tags',
    component: ComponentCreator('/es/blog/tags', 'b1d'),
    exact: true
  },
  {
    path: '/es/blog/tags/docusaurus',
    component: ComponentCreator('/es/blog/tags/docusaurus', 'f69'),
    exact: true
  },
  {
    path: '/es/blog/tags/facebook',
    component: ComponentCreator('/es/blog/tags/facebook', '0c3'),
    exact: true
  },
  {
    path: '/es/blog/tags/hello',
    component: ComponentCreator('/es/blog/tags/hello', '36c'),
    exact: true
  },
  {
    path: '/es/blog/tags/hola',
    component: ComponentCreator('/es/blog/tags/hola', '484'),
    exact: true
  },
  {
    path: '/es/blog/welcome',
    component: ComponentCreator('/es/blog/welcome', '8c8'),
    exact: true
  },
  {
    path: '/es/intro',
    component: ComponentCreator('/es/intro', 'f77'),
    exact: true
  },
  {
    path: '/es/markdown-page',
    component: ComponentCreator('/es/markdown-page', '724'),
    exact: true
  },
  {
    path: '/es/docs',
    component: ComponentCreator('/es/docs', '1c9'),
    routes: [
      {
        path: '/es/docs',
        component: ComponentCreator('/es/docs', '36f'),
        routes: [
          {
            path: '/es/docs/tags',
            component: ComponentCreator('/es/docs/tags', '1f8'),
            exact: true
          },
          {
            path: '/es/docs/tags/accounting',
            component: ComponentCreator('/es/docs/tags/accounting', '4cc'),
            exact: true
          },
          {
            path: '/es/docs/tags/balance-de-comprobacion',
            component: ComponentCreator('/es/docs/tags/balance-de-comprobacion', '639'),
            exact: true
          },
          {
            path: '/es/docs/tags/bank-statements',
            component: ComponentCreator('/es/docs/tags/bank-statements', 'd9c'),
            exact: true
          },
          {
            path: '/es/docs/tags/contabilidad',
            component: ComponentCreator('/es/docs/tags/contabilidad', 'f67'),
            exact: true
          },
          {
            path: '/es/docs/tags/informes',
            component: ComponentCreator('/es/docs/tags/informes', '79c'),
            exact: true
          },
          {
            path: '/es/docs/tags/invoice',
            component: ComponentCreator('/es/docs/tags/invoice', '382'),
            exact: true
          },
          {
            path: '/es/docs/tags/reconciliation',
            component: ComponentCreator('/es/docs/tags/reconciliation', 'f83'),
            exact: true
          },
          {
            path: '/es/docs/tags/recurring-invoices',
            component: ComponentCreator('/es/docs/tags/recurring-invoices', '595'),
            exact: true
          },
          {
            path: '/es/docs',
            component: ComponentCreator('/es/docs', 'f19'),
            routes: [
              {
                path: '/es/docs/accountant-portal/billing-models/bill-us-model',
                component: ComponentCreator('/es/docs/accountant-portal/billing-models/bill-us-model', 'e32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/billing-models/client-pays-model',
                component: ComponentCreator('/es/docs/accountant-portal/billing-models/client-pays-model', '98f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/billing-models/overview',
                component: ComponentCreator('/es/docs/accountant-portal/billing-models/overview', '872'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/billing-models/switching-billing-models',
                component: ComponentCreator('/es/docs/accountant-portal/billing-models/switching-billing-models', '87b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/client-management/accepting-client-invitations',
                component: ComponentCreator('/es/docs/accountant-portal/client-management/accepting-client-invitations', '3ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/client-management/client-access-levels',
                component: ComponentCreator('/es/docs/accountant-portal/client-management/client-access-levels', '6e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/client-management/client-connections',
                component: ComponentCreator('/es/docs/accountant-portal/client-management/client-connections', '7d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/client-management/inviting-clients',
                component: ComponentCreator('/es/docs/accountant-portal/client-management/inviting-clients', 'b6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/client-management/overview',
                component: ComponentCreator('/es/docs/accountant-portal/client-management/overview', '1a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/getting-started/configuring-branches',
                component: ComponentCreator('/es/docs/accountant-portal/getting-started/configuring-branches', 'ea9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/getting-started/overview',
                component: ComponentCreator('/es/docs/accountant-portal/getting-started/overview', '1f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/getting-started/setting-up-your-practice',
                component: ComponentCreator('/es/docs/accountant-portal/getting-started/setting-up-your-practice', 'f39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/getting-started/team-structure',
                component: ComponentCreator('/es/docs/accountant-portal/getting-started/team-structure', '5e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/overview',
                component: ComponentCreator('/es/docs/accountant-portal/overview', '6aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/partner-program/becoming-a-partner',
                component: ComponentCreator('/es/docs/accountant-portal/partner-program/becoming-a-partner', '8b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/partner-program/overview',
                component: ComponentCreator('/es/docs/accountant-portal/partner-program/overview', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/partner-program/partner-benefits',
                component: ComponentCreator('/es/docs/accountant-portal/partner-program/partner-benefits', '9f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/partner-program/partner-resources',
                component: ComponentCreator('/es/docs/accountant-portal/partner-program/partner-resources', 'b74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/partner-program/referral-tracking',
                component: ComponentCreator('/es/docs/accountant-portal/partner-program/referral-tracking', '018'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/reporting-analytics/billing-reports',
                component: ComponentCreator('/es/docs/accountant-portal/reporting-analytics/billing-reports', '470'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/reporting-analytics/client-portfolio-view',
                component: ComponentCreator('/es/docs/accountant-portal/reporting-analytics/client-portfolio-view', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/reporting-analytics/overview',
                component: ComponentCreator('/es/docs/accountant-portal/reporting-analytics/overview', '413'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/reporting-analytics/practice-dashboard',
                component: ComponentCreator('/es/docs/accountant-portal/reporting-analytics/practice-dashboard', 'da3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/reporting-analytics/team-performance',
                component: ComponentCreator('/es/docs/accountant-portal/reporting-analytics/team-performance', '746'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/team-collaboration/branch-management',
                component: ComponentCreator('/es/docs/accountant-portal/team-collaboration/branch-management', '35a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/team-collaboration/managing-team-members',
                component: ComponentCreator('/es/docs/accountant-portal/team-collaboration/managing-team-members', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/team-collaboration/overview',
                component: ComponentCreator('/es/docs/accountant-portal/team-collaboration/overview', '88d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/team-collaboration/roles-permissions',
                component: ComponentCreator('/es/docs/accountant-portal/team-collaboration/roles-permissions', '0d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accountant-portal/team-collaboration/workflow-assignments',
                component: ComponentCreator('/es/docs/accountant-portal/team-collaboration/workflow-assignments', 'cb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/accounting-faqs',
                component: ComponentCreator('/es/docs/accounting/accounting-faqs', 'd4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/chart-of-accounts',
                component: ComponentCreator('/es/docs/accounting/chart-of-accounts', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/guides/accounts-payable-transactions',
                component: ComponentCreator('/es/docs/accounting/journal-entries/guides/accounts-payable-transactions', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/guides/accounts-receivable-transactions',
                component: ComponentCreator('/es/docs/accounting/journal-entries/guides/accounts-receivable-transactions', 'cc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/guides/exporting-transactions',
                component: ComponentCreator('/es/docs/accounting/journal-entries/guides/exporting-transactions', '9e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/guides/internal-transfers',
                component: ComponentCreator('/es/docs/accounting/journal-entries/guides/internal-transfers', '0d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/guides/manual-transactions',
                component: ComponentCreator('/es/docs/accounting/journal-entries/guides/manual-transactions', 'f6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/guides/match-and-split-transactions',
                component: ComponentCreator('/es/docs/accounting/journal-entries/guides/match-and-split-transactions', 'e49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/guides/move-transactions',
                component: ComponentCreator('/es/docs/accounting/journal-entries/guides/move-transactions', 'f1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/guides/multi-currency-transactions',
                component: ComponentCreator('/es/docs/accounting/journal-entries/guides/multi-currency-transactions', '1ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/guides/opening-balances',
                component: ComponentCreator('/es/docs/accounting/journal-entries/guides/opening-balances', '8e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/guides/overview',
                component: ComponentCreator('/es/docs/accounting/journal-entries/guides/overview', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/multi-journal-entries',
                component: ComponentCreator('/es/docs/accounting/journal-entries/multi-journal-entries', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/journal-entries/overview',
                component: ComponentCreator('/es/docs/accounting/journal-entries/overview', '637'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/overview',
                component: ComponentCreator('/es/docs/accounting/overview', '732'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/reconciliation/guides/bank-account-reconciliation',
                component: ComponentCreator('/es/docs/accounting/reconciliation/guides/bank-account-reconciliation', '4af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/reconciliation/guides/handling-reconciliation-discrepancies',
                component: ComponentCreator('/es/docs/accounting/reconciliation/guides/handling-reconciliation-discrepancies', '3c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/reconciliation/guides/how-fiskl-handles-reconciliation',
                component: ComponentCreator('/es/docs/accounting/reconciliation/guides/how-fiskl-handles-reconciliation', '9a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/reconciliation/guides/overview',
                component: ComponentCreator('/es/docs/accounting/reconciliation/guides/overview', '83b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/reconciliation/guides/reconciliation-best-practices',
                component: ComponentCreator('/es/docs/accounting/reconciliation/guides/reconciliation-best-practices', '32b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/reconciliation/guides/reconciliation-reports',
                component: ComponentCreator('/es/docs/accounting/reconciliation/guides/reconciliation-reports', '95a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/accounting/reimbursement-guide',
                component: ComponentCreator('/es/docs/accounting/reimbursement-guide', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/ai/fi',
                component: ComponentCreator('/es/docs/ai/fi', 'a00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/ai/overview',
                component: ComponentCreator('/es/docs/ai/overview', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/clients-vendors/clients',
                component: ComponentCreator('/es/docs/clients-vendors/clients', '86f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/clients-vendors/overview',
                component: ComponentCreator('/es/docs/clients-vendors/overview', '7e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/clients-vendors/vendors',
                component: ComponentCreator('/es/docs/clients-vendors/vendors', '203'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/core-features/accounting/journal-entries/guides/account-reconciliation',
                component: ComponentCreator('/es/docs/core-features/accounting/journal-entries/guides/account-reconciliation', 'ce6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/core-features/accounting/reports/trial-balance',
                component: ComponentCreator('/es/docs/core-features/accounting/reports/trial-balance', 'f5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/core-features/invoicing/recurring/recurring-invoice-management',
                component: ComponentCreator('/es/docs/core-features/invoicing/recurring/recurring-invoice-management', '390'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/dashboard/customizing-dashboard',
                component: ComponentCreator('/es/docs/dashboard/customizing-dashboard', 'a10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/dashboard/navigation-basics',
                component: ComponentCreator('/es/docs/dashboard/navigation-basics', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/dashboard/overview',
                component: ComponentCreator('/es/docs/dashboard/overview', '116'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/dashboard/quick-actions',
                component: ComponentCreator('/es/docs/dashboard/quick-actions', 'f88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/expenses/ai-expenses/managing-ai-expenses',
                component: ComponentCreator('/es/docs/expenses/ai-expenses/managing-ai-expenses', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/expenses/ai-expenses/overview',
                component: ComponentCreator('/es/docs/expenses/ai-expenses/overview', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/expenses/ai-expenses/reconciliation',
                component: ComponentCreator('/es/docs/expenses/ai-expenses/reconciliation', 'fff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/expenses/ai-expenses/uploading',
                component: ComponentCreator('/es/docs/expenses/ai-expenses/uploading', '68e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/expenses/expense-categories',
                component: ComponentCreator('/es/docs/expenses/expense-categories', '64f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/expenses/overview',
                component: ComponentCreator('/es/docs/expenses/overview', 'f83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/expenses/traditional-expenses/overview',
                component: ComponentCreator('/es/docs/expenses/traditional-expenses/overview', '49b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/getting-started/as-a-business-owner',
                component: ComponentCreator('/es/docs/getting-started/as-a-business-owner', '694'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/getting-started/as-an-accountant',
                component: ComponentCreator('/es/docs/getting-started/as-an-accountant', '60a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/getting-started/connecting-your-bank',
                component: ComponentCreator('/es/docs/getting-started/connecting-your-bank', 'c39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/getting-started/importing-data',
                component: ComponentCreator('/es/docs/getting-started/importing-data', 'c36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/getting-started/overview',
                component: ComponentCreator('/es/docs/getting-started/overview', 'c33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/getting-started/with-invoicing',
                component: ComponentCreator('/es/docs/getting-started/with-invoicing', 'a1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/getting-started/your-first-invoice',
                component: ComponentCreator('/es/docs/getting-started/your-first-invoice', '17e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/glossary/accounting-fundamentals',
                component: ComponentCreator('/es/docs/glossary/accounting-fundamentals', '2ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/glossary/accounts-and-transactions',
                component: ComponentCreator('/es/docs/glossary/accounts-and-transactions', '0e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/glossary/assets-and-liabilities',
                component: ComponentCreator('/es/docs/glossary/assets-and-liabilities', '19d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/glossary/cash-and-banking',
                component: ComponentCreator('/es/docs/glossary/cash-and-banking', 'ec4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/glossary/financial-statements',
                component: ComponentCreator('/es/docs/glossary/financial-statements', '9a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/glossary/overview',
                component: ComponentCreator('/es/docs/glossary/overview', '363'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/integrations/banking/connect-saltedge',
                component: ComponentCreator('/es/docs/integrations/banking/connect-saltedge', 'a7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/integrations/banking/connect-stripe',
                component: ComponentCreator('/es/docs/integrations/banking/connect-stripe', 'dad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/integrations/banking/connect-wio',
                component: ComponentCreator('/es/docs/integrations/banking/connect-wio', 'a03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/integrations/banking/connect-yodlee',
                component: ComponentCreator('/es/docs/integrations/banking/connect-yodlee', '9d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/integrations/banking/overview',
                component: ComponentCreator('/es/docs/integrations/banking/overview', '376'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/integrations/overview',
                component: ComponentCreator('/es/docs/integrations/overview', '007'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/integrations/payments/gocardless-integration',
                component: ComponentCreator('/es/docs/integrations/payments/gocardless-integration', '6e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/integrations/payments/overview',
                component: ComponentCreator('/es/docs/integrations/payments/overview', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/integrations/payments/paypal-integration',
                component: ComponentCreator('/es/docs/integrations/payments/paypal-integration', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/integrations/payments/stripe-integration',
                component: ComponentCreator('/es/docs/integrations/payments/stripe-integration', '38b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/intro',
                component: ComponentCreator('/es/docs/intro', '081'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/invoicing/create-recurring-invoices',
                component: ComponentCreator('/es/docs/invoicing/create-recurring-invoices', '77e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/invoicing/creating-invoices',
                component: ComponentCreator('/es/docs/invoicing/creating-invoices', 'e8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/invoicing/creating-quotes',
                component: ComponentCreator('/es/docs/invoicing/creating-quotes', '680'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/invoicing/invoice-management',
                component: ComponentCreator('/es/docs/invoicing/invoice-management', '3b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/invoicing/overview',
                component: ComponentCreator('/es/docs/invoicing/overview', 'a2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/invoicing/quote-management',
                component: ComponentCreator('/es/docs/invoicing/quote-management', '631'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/invoicing/sending-invoices',
                component: ComponentCreator('/es/docs/invoicing/sending-invoices', '3f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/plans-billing/applying-offer-codes',
                component: ComponentCreator('/es/docs/plans-billing/applying-offer-codes', '7a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/plans-billing/canceling-subscription',
                component: ComponentCreator('/es/docs/plans-billing/canceling-subscription', 'd3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/plans-billing/deleting-account',
                component: ComponentCreator('/es/docs/plans-billing/deleting-account', '942'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/plans-billing/managing-subscription',
                component: ComponentCreator('/es/docs/plans-billing/managing-subscription', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/plans-billing/overview',
                component: ComponentCreator('/es/docs/plans-billing/overview', 'b3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/plans-billing/selecting-plans',
                component: ComponentCreator('/es/docs/plans-billing/selecting-plans', '92c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/plans-billing/updating-billing-info',
                component: ComponentCreator('/es/docs/plans-billing/updating-billing-info', 'c0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/products-services/creating-products',
                component: ComponentCreator('/es/docs/products-services/creating-products', 'cef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/products-services/managing-catalog',
                component: ComponentCreator('/es/docs/products-services/managing-catalog', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/products-services/managing-services',
                component: ComponentCreator('/es/docs/products-services/managing-services', 'd6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/products-services/overview',
                component: ComponentCreator('/es/docs/products-services/overview', '655'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/reporting/balance-sheet',
                component: ComponentCreator('/es/docs/reporting/balance-sheet', 'b74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/reporting/cash-flow',
                component: ComponentCreator('/es/docs/reporting/cash-flow', '23c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/reporting/client-aging',
                component: ComponentCreator('/es/docs/reporting/client-aging', 'b9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/reporting/general-ledger',
                component: ComponentCreator('/es/docs/reporting/general-ledger', '0be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/reporting/overview',
                component: ComponentCreator('/es/docs/reporting/overview', '40d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/reporting/profit-and-loss',
                component: ComponentCreator('/es/docs/reporting/profit-and-loss', '4ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/reporting/sales-tax',
                component: ComponentCreator('/es/docs/reporting/sales-tax', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/reporting/statement-of-accounts',
                component: ComponentCreator('/es/docs/reporting/statement-of-accounts', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/reporting/transactions-by-account',
                component: ComponentCreator('/es/docs/reporting/transactions-by-account', 'db0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/settings/accounting-settings',
                component: ComponentCreator('/es/docs/settings/accounting-settings', '334'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/settings/company-settings',
                component: ComponentCreator('/es/docs/settings/company-settings', 'f2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/settings/currency-management',
                component: ComponentCreator('/es/docs/settings/currency-management', 'b6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/settings/invoice-quotes-settings',
                component: ComponentCreator('/es/docs/settings/invoice-quotes-settings', '0e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/settings/invoice-template-brands-settings',
                component: ComponentCreator('/es/docs/settings/invoice-template-brands-settings', '322'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/settings/overview',
                component: ComponentCreator('/es/docs/settings/overview', 'af8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/settings/profile-settings',
                component: ComponentCreator('/es/docs/settings/profile-settings', '81f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/settings/tax-settings',
                component: ComponentCreator('/es/docs/settings/tax-settings', 'c4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/support/overview',
                component: ComponentCreator('/es/docs/support/overview', 'c96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/team/inviting-users',
                component: ComponentCreator('/es/docs/team/inviting-users', '267'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/team/overview',
                component: ComponentCreator('/es/docs/team/overview', 'ab8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/team/roles-permissions',
                component: ComponentCreator('/es/docs/team/roles-permissions', 'e5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/time-and-mileage/billing-time-and-mileage',
                component: ComponentCreator('/es/docs/time-and-mileage/billing-time-and-mileage', '1e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/time-and-mileage/mileage-tracking',
                component: ComponentCreator('/es/docs/time-and-mileage/mileage-tracking', '094'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/time-and-mileage/overview',
                component: ComponentCreator('/es/docs/time-and-mileage/overview', '9a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/time-and-mileage/time-tracking',
                component: ComponentCreator('/es/docs/time-and-mileage/time-tracking', 'b2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/es/',
    component: ComponentCreator('/es/', '8a4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
