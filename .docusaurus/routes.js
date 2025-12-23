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
    component: ComponentCreator('/es/docs', 'efb'),
    routes: [
      {
        path: '/es/docs',
        component: ComponentCreator('/es/docs', '6e3'),
        routes: [
          {
            path: '/es/docs/tags',
            component: ComponentCreator('/es/docs/tags', '1f8'),
            exact: true
          },
          {
            path: '/es/docs/tags/balance-de-comprobacion',
            component: ComponentCreator('/es/docs/tags/balance-de-comprobacion', '639'),
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
            path: '/es/docs',
            component: ComponentCreator('/es/docs', '97e'),
            routes: [
              {
                path: '/es/docs/accounting/accounting-overview',
                component: ComponentCreator('/es/docs/accounting/accounting-overview', '5a0'),
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
                path: '/es/docs/accounting/reconciliation/guides/accounting-faqs',
                component: ComponentCreator('/es/docs/accounting/reconciliation/guides/accounting-faqs', '1e4'),
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
                path: '/es/docs/accounting/reconciliation/overview',
                component: ComponentCreator('/es/docs/accounting/reconciliation/overview', '352'),
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
                path: '/es/docs/category/financial-reports',
                component: ComponentCreator('/es/docs/category/financial-reports', '459'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/category/getting-started',
                component: ComponentCreator('/es/docs/category/getting-started', '2c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/category/invoicing--quotes',
                component: ComponentCreator('/es/docs/category/invoicing--quotes', 'a0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/category/journal-entry-guides',
                component: ComponentCreator('/es/docs/category/journal-entry-guides', '5ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/category/products--expenses',
                component: ComponentCreator('/es/docs/category/products--expenses', 'b83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/category/reconciliation-guides',
                component: ComponentCreator('/es/docs/category/reconciliation-guides', '7ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/category/tutorial---basics',
                component: ComponentCreator('/es/docs/category/tutorial---basics', 'add'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/category/tutorial---extras',
                component: ComponentCreator('/es/docs/category/tutorial---extras', '308'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/clients-vendors/managing-clients',
                component: ComponentCreator('/es/docs/clients-vendors/managing-clients', '39f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/clients-vendors/managing-vendors',
                component: ComponentCreator('/es/docs/clients-vendors/managing-vendors', 'd94'),
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
                path: '/es/docs/faqs/accounting-faqs',
                component: ComponentCreator('/es/docs/faqs/accounting-faqs', '3a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/faqs/general-faqs',
                component: ComponentCreator('/es/docs/faqs/general-faqs', '501'),
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
                path: '/es/docs/getting-started/overview',
                component: ComponentCreator('/es/docs/getting-started/overview', 'c33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/getting-started/with-banking',
                component: ComponentCreator('/es/docs/getting-started/with-banking', '7e6'),
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
                path: '/es/docs/glossary/technical-terms',
                component: ComponentCreator('/es/docs/glossary/technical-terms', '16a'),
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
                path: '/es/docs/invoicing/quote-management',
                component: ComponentCreator('/es/docs/invoicing/quote-management', '631'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/invoicing/recurring-invoices',
                component: ComponentCreator('/es/docs/invoicing/recurring-invoices', 'efb'),
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
                path: '/es/docs/line-items/expenses',
                component: ComponentCreator('/es/docs/line-items/expenses', 'b87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/line-items/mileage',
                component: ComponentCreator('/es/docs/line-items/mileage', 'a30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/line-items/products-and-services',
                component: ComponentCreator('/es/docs/line-items/products-and-services', '364'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/line-items/time-tracking',
                component: ComponentCreator('/es/docs/line-items/time-tracking', 'ec6'),
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
                path: '/es/docs/reporting/transactions-by-account',
                component: ComponentCreator('/es/docs/reporting/transactions-by-account', 'db0'),
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
                path: '/es/docs/settings/subscription-billing',
                component: ComponentCreator('/es/docs/settings/subscription-billing', '019'),
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
                path: '/es/docs/settings/user-management',
                component: ComponentCreator('/es/docs/settings/user-management', 'cf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/es/docs/tutorial-basics/congratulations', 'ec6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/es/docs/tutorial-basics/create-a-blog-post', '199'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/es/docs/tutorial-basics/create-a-document', 'a82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/es/docs/tutorial-basics/create-a-page', '77a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/es/docs/tutorial-basics/deploy-your-site', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/es/docs/tutorial-basics/markdown-features', 'a38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/es/docs/tutorial-extras/manage-docs-versions', '5ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/es/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/es/docs/tutorial-extras/translate-your-site', 'd51'),
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
