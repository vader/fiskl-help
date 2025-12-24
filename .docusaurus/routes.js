import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/intro',
    component: ComponentCreator('/intro', 'ad5'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fb3'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '57a'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/account-transaction',
            component: ComponentCreator('/docs/tags/account-transaction', '287'),
            exact: true
          },
          {
            path: '/docs/tags/account-transfers',
            component: ComponentCreator('/docs/tags/account-transfers', '2a5'),
            exact: true
          },
          {
            path: '/docs/tags/accounting',
            component: ComponentCreator('/docs/tags/accounting', 'fbf'),
            exact: true
          },
          {
            path: '/docs/tags/accounts-payable',
            component: ComponentCreator('/docs/tags/accounts-payable', 'b41'),
            exact: true
          },
          {
            path: '/docs/tags/automation',
            component: ComponentCreator('/docs/tags/automation', '81d'),
            exact: true
          },
          {
            path: '/docs/tags/bank-reconciliation',
            component: ComponentCreator('/docs/tags/bank-reconciliation', 'f9d'),
            exact: true
          },
          {
            path: '/docs/tags/bank-statements',
            component: ComponentCreator('/docs/tags/bank-statements', 'c30'),
            exact: true
          },
          {
            path: '/docs/tags/banking',
            component: ComponentCreator('/docs/tags/banking', '9b3'),
            exact: true
          },
          {
            path: '/docs/tags/chart-of-accounts',
            component: ComponentCreator('/docs/tags/chart-of-accounts', '21c'),
            exact: true
          },
          {
            path: '/docs/tags/client',
            component: ComponentCreator('/docs/tags/client', '073'),
            exact: true
          },
          {
            path: '/docs/tags/data-management',
            component: ComponentCreator('/docs/tags/data-management', '005'),
            exact: true
          },
          {
            path: '/docs/tags/documentation',
            component: ComponentCreator('/docs/tags/documentation', 'a92'),
            exact: true
          },
          {
            path: '/docs/tags/faq',
            component: ComponentCreator('/docs/tags/faq', '177'),
            exact: true
          },
          {
            path: '/docs/tags/financial-reports',
            component: ComponentCreator('/docs/tags/financial-reports', '83f'),
            exact: true
          },
          {
            path: '/docs/tags/foreign-exchange',
            component: ComponentCreator('/docs/tags/foreign-exchange', '5bd'),
            exact: true
          },
          {
            path: '/docs/tags/go-cardless',
            component: ComponentCreator('/docs/tags/go-cardless', '637'),
            exact: true
          },
          {
            path: '/docs/tags/integrations',
            component: ComponentCreator('/docs/tags/integrations', '9da'),
            exact: true
          },
          {
            path: '/docs/tags/internal-transfers',
            component: ComponentCreator('/docs/tags/internal-transfers', '3f9'),
            exact: true
          },
          {
            path: '/docs/tags/invoice',
            component: ComponentCreator('/docs/tags/invoice', 'aea'),
            exact: true
          },
          {
            path: '/docs/tags/invoice-payment',
            component: ComponentCreator('/docs/tags/invoice-payment', 'b75'),
            exact: true
          },
          {
            path: '/docs/tags/journal-entries',
            component: ComponentCreator('/docs/tags/journal-entries', '97a'),
            exact: true
          },
          {
            path: '/docs/tags/journal-entry',
            component: ComponentCreator('/docs/tags/journal-entry', 'be0'),
            exact: true
          },
          {
            path: '/docs/tags/multi-currency',
            component: ComponentCreator('/docs/tags/multi-currency', 'ab5'),
            exact: true
          },
          {
            path: '/docs/tags/pay-pal',
            component: ComponentCreator('/docs/tags/pay-pal', 'fbe'),
            exact: true
          },
          {
            path: '/docs/tags/payment-gateways',
            component: ComponentCreator('/docs/tags/payment-gateways', '01d'),
            exact: true
          },
          {
            path: '/docs/tags/quote',
            component: ComponentCreator('/docs/tags/quote', '16c'),
            exact: true
          },
          {
            path: '/docs/tags/reconciliation',
            component: ComponentCreator('/docs/tags/reconciliation', 'e32'),
            exact: true
          },
          {
            path: '/docs/tags/reporting',
            component: ComponentCreator('/docs/tags/reporting', '712'),
            exact: true
          },
          {
            path: '/docs/tags/reports',
            component: ComponentCreator('/docs/tags/reports', 'dfb'),
            exact: true
          },
          {
            path: '/docs/tags/sales',
            component: ComponentCreator('/docs/tags/sales', '746'),
            exact: true
          },
          {
            path: '/docs/tags/salt-edge',
            component: ComponentCreator('/docs/tags/salt-edge', 'eca'),
            exact: true
          },
          {
            path: '/docs/tags/stripe',
            component: ComponentCreator('/docs/tags/stripe', '16b'),
            exact: true
          },
          {
            path: '/docs/tags/transaction-management',
            component: ComponentCreator('/docs/tags/transaction-management', 'cf8'),
            exact: true
          },
          {
            path: '/docs/tags/transaction-matching',
            component: ComponentCreator('/docs/tags/transaction-matching', 'd39'),
            exact: true
          },
          {
            path: '/docs/tags/transactions',
            component: ComponentCreator('/docs/tags/transactions', 'e42'),
            exact: true
          },
          {
            path: '/docs/tags/trial-balance',
            component: ComponentCreator('/docs/tags/trial-balance', 'fdf'),
            exact: true
          },
          {
            path: '/docs/tags/troubleshooting',
            component: ComponentCreator('/docs/tags/troubleshooting', '52e'),
            exact: true
          },
          {
            path: '/docs/tags/wio',
            component: ComponentCreator('/docs/tags/wio', '6ad'),
            exact: true
          },
          {
            path: '/docs/tags/yodlee',
            component: ComponentCreator('/docs/tags/yodlee', '0a9'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3c0'),
            routes: [
              {
                path: '/docs/accounting/journal-entries/multi-journal-entries',
                component: ComponentCreator('/docs/accounting/journal-entries/multi-journal-entries', '381'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/accounting/journal-entries/overview',
                component: ComponentCreator('/docs/accounting/journal-entries/overview', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/accounting/reconciliation/guides/reconciliation-best-practices',
                component: ComponentCreator('/docs/accounting/reconciliation/guides/reconciliation-best-practices', 'c55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/accounting/reimbursement-guide',
                component: ComponentCreator('/docs/accounting/reimbursement-guide', 'f43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/financial-reports',
                component: ComponentCreator('/docs/category/financial-reports', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/invoicing--quotes',
                component: ComponentCreator('/docs/category/invoicing--quotes', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/journal-entry-guides',
                component: ComponentCreator('/docs/category/journal-entry-guides', '061'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/products--expenses',
                component: ComponentCreator('/docs/category/products--expenses', '2ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/reconciliation-guides',
                component: ComponentCreator('/docs/category/reconciliation-guides', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/clients-vendors/managing-clients',
                component: ComponentCreator('/docs/clients-vendors/managing-clients', 'ea9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/clients-vendors/managing-vendors',
                component: ComponentCreator('/docs/clients-vendors/managing-vendors', 'fe2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/account-reconciliation/accounting-faq',
                component: ComponentCreator('/docs/core-features/accounting/account-reconciliation/accounting-faq', 'edd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/accounting/overview',
                component: ComponentCreator('/docs/core-features/accounting/accounting/overview', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/chart-of-accounts',
                component: ComponentCreator('/docs/core-features/accounting/chart-of-accounts', '3cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/account-reconciliation',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/account-reconciliation', '069'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/accounts-payable-transactions',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/accounts-payable-transactions', '28b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/accounts-receivable-transactions',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/accounts-receivable-transactions', '403'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/bank-account-reconciliation',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/bank-account-reconciliation', '3c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/exporting-transactions',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/exporting-transactions', 'e8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/handling-reconciliation-discrepancies',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/handling-reconciliation-discrepancies', '2b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/how-fiskl-handles-reconciliation',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/how-fiskl-handles-reconciliation', '3ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/internal-transfers',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/internal-transfers', 'a38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/manual-transactions',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/manual-transactions', '72c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/match-and-split-transactions',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/match-and-split-transactions', 'ac4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/move-transactions',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/move-transactions', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/multi-currency-transactions',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/multi-currency-transactions', 'f27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/opening-balances',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/opening-balances', '983'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/journal-entries/guides/reconciliation-reports',
                component: ComponentCreator('/docs/core-features/accounting/journal-entries/guides/reconciliation-reports', '9a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/accounting/reports/trial-balance',
                component: ComponentCreator('/docs/core-features/accounting/reports/trial-balance', 'abe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/invoicing/invoice-management',
                component: ComponentCreator('/docs/core-features/invoicing/invoice-management', 'bae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/quotes/creating-quotes',
                component: ComponentCreator('/docs/core-features/quotes/creating-quotes', 'fcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-features/quotes/quote-management',
                component: ComponentCreator('/docs/core-features/quotes/quote-management', '1a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/faqs/accounting-faqs',
                component: ComponentCreator('/docs/faqs/accounting-faqs', '6c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/faqs/general-faqs',
                component: ComponentCreator('/docs/faqs/general-faqs', '14f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/as-an-accountant',
                component: ComponentCreator('/docs/getting-started/as-an-accountant', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/overview',
                component: ComponentCreator('/docs/getting-started/overview', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/with-banking',
                component: ComponentCreator('/docs/getting-started/with-banking', 'ca9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/with-invoicing',
                component: ComponentCreator('/docs/getting-started/with-invoicing', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/glossary/accounting-fundamentals',
                component: ComponentCreator('/docs/glossary/accounting-fundamentals', '188'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/glossary/accounts-and-transactions',
                component: ComponentCreator('/docs/glossary/accounts-and-transactions', 'ebd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/glossary/assets-and-liabilities',
                component: ComponentCreator('/docs/glossary/assets-and-liabilities', '828'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/glossary/cash-and-banking',
                component: ComponentCreator('/docs/glossary/cash-and-banking', '9e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/glossary/financial-statements',
                component: ComponentCreator('/docs/glossary/financial-statements', '0e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/glossary/technical-terms',
                component: ComponentCreator('/docs/glossary/technical-terms', 'd3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/integrations/banking/connecting-saltedge',
                component: ComponentCreator('/docs/integrations/banking/connecting-saltedge', '7d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/integrations/banking/connecting-stripe',
                component: ComponentCreator('/docs/integrations/banking/connecting-stripe', 'dfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/integrations/banking/connecting-wio',
                component: ComponentCreator('/docs/integrations/banking/connecting-wio', '240'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/integrations/banking/connecting-yodlee',
                component: ComponentCreator('/docs/integrations/banking/connecting-yodlee', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/integrations/banking/overview',
                component: ComponentCreator('/docs/integrations/banking/overview', 'e9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/integrations/overview',
                component: ComponentCreator('/docs/integrations/overview', '0c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/integrations/payments/gocardless',
                component: ComponentCreator('/docs/integrations/payments/gocardless', '7f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/integrations/payments/overview',
                component: ComponentCreator('/docs/integrations/payments/overview', 'aa7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/integrations/payments/paypal',
                component: ComponentCreator('/docs/integrations/payments/paypal', '56d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/integrations/payments/stripe',
                component: ComponentCreator('/docs/integrations/payments/stripe', 'b1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/invoicing/creating-invoices',
                component: ComponentCreator('/docs/invoicing/creating-invoices', 'cac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/invoicing/recurring-invoices',
                component: ComponentCreator('/docs/invoicing/recurring-invoices', 'ca1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/invoicing/sending-invoices',
                component: ComponentCreator('/docs/invoicing/sending-invoices', 'dce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/line-items/expenses',
                component: ComponentCreator('/docs/line-items/expenses', '7b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/line-items/mileage',
                component: ComponentCreator('/docs/line-items/mileage', '504'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/line-items/products-and-services',
                component: ComponentCreator('/docs/line-items/products-and-services', '885'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/line-items/time-tracking',
                component: ComponentCreator('/docs/line-items/time-tracking', '753'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reporting/balance-sheet',
                component: ComponentCreator('/docs/reporting/balance-sheet', '8f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reporting/cash-flow',
                component: ComponentCreator('/docs/reporting/cash-flow', 'afd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reporting/client-aging',
                component: ComponentCreator('/docs/reporting/client-aging', '380'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reporting/general-ledger',
                component: ComponentCreator('/docs/reporting/general-ledger', '7b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reporting/profit-and-loss',
                component: ComponentCreator('/docs/reporting/profit-and-loss', 'b0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reporting/sales-tax',
                component: ComponentCreator('/docs/reporting/sales-tax', '23b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reporting/transactions-by-account',
                component: ComponentCreator('/docs/reporting/transactions-by-account', '1ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/settings/company-settings',
                component: ComponentCreator('/docs/settings/company-settings', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/settings/subscription-billing',
                component: ComponentCreator('/docs/settings/subscription-billing', '719'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/settings/tax-settings',
                component: ComponentCreator('/docs/settings/tax-settings', '0e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/settings/user-management',
                component: ComponentCreator('/docs/settings/user-management', 'f68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
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
    path: '/',
    component: ComponentCreator('/', '2bc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
