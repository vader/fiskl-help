---
title: "Cash and Banking"
description: "Managing bank accounts, transactions, and cash flow in Fiskl"
sidebar_position: 5
---

# Cash and Banking

Tools and features for connecting bank accounts, managing transactions, and tracking cash movement.

## Bank Connection {#bank-connection}

A secure link between Fiskl and your financial institution that automatically imports bank transactions into your accounting system. Bank connections eliminate manual data entry and ensure your records stay current.

**Benefits**:
- Automatic transaction imports
- Real-time balance updates
- Reduced data entry errors
- Faster reconciliation

:::note
Fiskl uses bank-level security and encryption to protect your financial data when establishing bank connections.
:::

## Bankfeed {#bankfeed}

The automatic flow of transaction data from your bank to Fiskl through a bank connection. Bankfeeds provide daily updates of deposits, withdrawals, and balance changes.

## Third-Party Provider {#third-party-provider}

An external service that facilitates connections between Fiskl and your bank or provides additional functionality. Examples include payment processors, bank feed aggregators, and financial data services.

## Bank Transfer {#bank-transfer}

The movement of money from one bank account to another. In Fiskl, bank transfers can be between your own accounts (internal transfers) or to/from external parties (vendor payments or customer receipts).

**Internal Transfer Example**: Moving $5,000 from your checking account to your savings account.

**External Transfer Example**: Paying a vendor $1,200 via bank transfer.

## OFX {#ofx}

Open Financial Exchange—a standard file format for exchanging financial data between software applications and financial institutions. OFX files contain transaction details and can be imported into Fiskl when direct bank connections aren't available.

**When to Use OFX**:
- Your bank doesn't support direct connections
- You need to import historical transactions
- You want to import data from financial software

## CSV File {#csv-file}

Comma-Separated Values—a simple file format for storing tabular data. CSV files can be used to import or export transaction data, client lists, or other financial information to and from Fiskl.

**Example CSV Structure**:
```
Date,Description,Amount,Category
2024-01-15,Office Supplies,45.99,Expenses
2024-01-16,Client Payment,1500.00,Income
```

## XLS/XLSX File {#xls-xlsx-file}

Excel file formats (.xls for older Excel versions, .xlsx for modern Excel). These spreadsheet files can be used to import or export financial data, offering more formatting options than CSV files.

## Google Sheets {#google-sheets}

Google's cloud-based spreadsheet application. Fiskl can integrate with Google Sheets for importing data, creating custom reports, or collaborating on financial information.

## Header Row {#header-row}

The first row in a CSV, Excel, or Google Sheets file that contains column names. Header rows help Fiskl identify which columns contain dates, amounts, descriptions, and other transaction details during import.

**Example Header Row**:
```
Transaction Date | Description | Debit | Credit | Balance
```

## Data Import {#data-import}

The process of bringing financial data into Fiskl from external sources like bank files, accounting software, or spreadsheets. Data import streamlines setup and eliminates manual entry of historical transactions.

**Common Import Sources**:
- Bank statements (OFX, CSV)
- Prior accounting software
- Expense reports
- Client and vendor lists

## Data Export {#data-export}

The process of extracting financial data from Fiskl for use in other applications, backup purposes, or providing information to accountants and auditors.

**Export Options**:
- Transaction reports (CSV, Excel)
- Financial statements (PDF)
- Tax reports
- Client/vendor lists

## Data Restore {#data-restore}

Recovering financial data from a backup after data loss, corruption, or accidental deletion. Regular backups ensure you can restore your accounting information if needed.

## Data Security {#data-security}

Measures taken to protect your financial information from unauthorized access, theft, or loss. Fiskl employs multiple security layers including encryption, secure authentication, and regular backups.

**Security Features**:
- Bank-level encryption
- Secure data centers
- Two-factor authentication
- Regular security audits
- Automatic backups

## Data Privacy {#data-privacy}

The protection and proper handling of your personal and financial information. Fiskl is committed to keeping your data private and complying with data protection regulations.

**Your Rights**:
- Control who accesses your data
- Export your data at any time
- Request data deletion
- Know how your data is used