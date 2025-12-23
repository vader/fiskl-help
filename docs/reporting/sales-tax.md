---
title: "Sales Tax Report"
description: "Track and manage sales tax activities with Fiskl's comprehensive reporting tools. Calculate tax liabilities, ensure compliance, and prepare accurate tax filings."
keywords: [ "sales tax report", "tax compliance", "tax reporting", "VAT reporting", "tax management", "sales tax tracking" ]
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide explains how to use the Sales Tax report to track your tax activities, calculate liabilities, and ensure
compliance with tax authorities.

## What is the Sales Tax Report?

The Sales Tax report provides a comprehensive overview of your company's sales tax activities and liabilities. This
report helps you calculate the sales tax owed to tax authorities, maintain compliance with regulations, and make
informed financial decisions based on accurate tax data.

## Accessing the Report

1. **Open the Accounting section**

   Click **Accounting** in the left sidebar.

2. **Navigate to Reports**

   Select **Reports** from the menu.

3. **Find the Sales Tax report**

   Locate the Sales Tax report in your list of automated reports.

## How the Report Works

The report is generated per Tax Number, also known as your Tax Agency. Each report displays data in the currency of that
Tax Number, with an option to show base currency conversions alongside. You generate the report for specific tax
periods, and it includes opening and closing balances for that period.

:::info[Tax Calculation Method]
Fiskl calculates sales tax when you invoice a customer or receive a vendor bill. The tax amount is recorded in the month
when the invoice or bill is created, regardless of when payment is received.
:::

## Configuring Your Report

### Select Tax and Period

1. **Choose your Tax Number**

   Select the relevant tax agency from the **Tax** dropdown menu.

2. **Select a reporting period**

   Choose a period such as last quarter, current month, or a custom date range.

### Choose Your View Type

Toggle between summary and detailed views using the **Summary/Details** switch to see different levels of information.

:::tip[Saved Filters]
Your applied filters are cached, allowing you to return to the same filtered report on subsequent visits. You can change
these filters at any time.
:::

## Understanding Report Views

<Tabs>
  <TabItem value="summaryView" label="Summary View" default>

The summary view presents aggregated amounts for all report sections. Use the gear icon to customize columns and
display:

        - Tax Rate
        - Gross Amount
        - Net Amount
        - Tax Amount
        - Gross Amount (base currency)
        - Net Amount (base currency)
        - Tax Amount (base currency)

      </TabItem>

      <TabItem value="detailedView" label="Detailed View">

The detailed view shows transaction-level information. Default columns include:

      - Date
      - Number
      - Name
      - Client/Vendor
      - Category
      - Description
      - Tax Rate
      - Gross Amount
      - Net Amount
      - Tax Amount

    </TabItem>

    <TabItem value="customColumns" label="Custom Columns">

Customize your columns using the gear icon to add:

        - Gross Amount (base currency)
        - Net Amount (base currency)
        - Tax Amount (base currency)
        - FX rate

    </TabItem>

</Tabs>

## Customizing Your Report

You can personalize the report presentation by changing the title, subtitle, and adding notes. These customizations are
temporary and will be included in any exports or downloads, but they are not permanently saved to the report.

## Exporting Your Report

1. **Click the Export button**

   Find the **Export** button at the top right of the screen.

2. **Choose your export format**

   Select either Google Sheets or Excel as your export destination.

3. **Verify your export**

   The exported file will reflect your current view (Summary or Detailed) and include any filters you have applied.

## Report Components

<details>
  <summary>What the Sales Tax Report includes</summary>

The report contains the following sections:

- **Opening and Closing Balances**: Starting and ending tax liability for the selected period
- **Sales**: All sales transactions with an assigned client that include sales tax
- **Purchases**: All purchase transactions with an assigned vendor that include recoverable tax
- **Other**: Manual transactions associated with this sales tax account
- **Total Tax**: Sum of tax from Sales, Purchases, and Other transactions
- **Payments**: Tax payments you have categorized with this sales tax account

</details>

## Benefits of Using the Sales Tax Report

The Sales Tax report helps you:

- Ensure compliance with tax regulations and filing requirements
- Support financial planning and decision-making with accurate tax data
- Prepare your business for potential audits with organized documentation
- Enhance operational efficiency by streamlining tax reporting processes
- Gain strategic insights into sales trends and tax liabilities over time

By effectively utilizing the Sales Tax report, you can navigate sales tax requirements with confidence, maintain
financial stability, and make informed business decisions based on accurate tax information.