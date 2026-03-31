---
title: "AI Expenses Overview"
description: "Automate expense processing with AI and machine learning that extracts data from receipts and invoices automatically."
keywords: ["AI expenses", "automated expense processing", "receipt scanning", "expense automation", "machine learning"]
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

AI Expenses automates your expense processing by extracting data from receipt and invoice images using AI and machine learning. Upload your documents and Fiskl handles the data entry automatically.

## Why Use AI Expenses

Manual expense entry is time-consuming and error-prone. AI Expenses eliminates data entry by automatically extracting vendor details, amounts, dates, and line items from your uploaded documents.

**Key benefits:**
- Eliminate manual data entry completely
- Process expenses in seconds, not minutes
- Reduce human error in expense recording
- Automatic categorisation of expenses
- Automatic reconciliation with bank transactions

## How It Works

The AI Expenses workflow follows four steps:

1. **Upload** — Upload receipt or invoice images through the [web interface](https://app.fiskl.com/dashboard/expense-ingestion)
2. **Extract** — AI and machine learning extract all relevant data from the document
3. **Save** — The expense saves to Accounts Payable with proper categorisation automatically
4. **Reconcile** — The system matches with bank transactions automatically when they appear

## Key Features

- **Intelligent extraction** — AI and machine learning extract vendor name, date, amount, tax, line items, and more
- **Automatic categorisation** — Suggests the correct expense category based on document content
- **Multi-document support** — Upload multiple receipts at once for batch processing
- **Original document storage** — All original images are preserved with the expense record
- **Automatic reconciliation** — Matches expenses with bank transactions without manual intervention
- **Duplicate detection** — Automatically rejects duplicate uploads

## Usage and Limits

Each plan includes a monthly allowance of scans. Usage is counted per page, not per document. For example, if you upload a five-page invoice, that counts as five scans against your allowance.

**Standard plans:**

| Plan | Monthly Scans Included |
|------|----------------------|
| **Solo** | 25 |
| **Pro** | 100 |
| **Prime** | 300 |

**Gift and lifetime plans:**

| Plan Tier | Monthly Scans Included |
|-----------|----------------------|
| **Tier 1** | 5 |
| **Tier 2** | 10 |
| **Tier 3** | 15 |

:::info
The ability to purchase additional scans beyond your plan allowance is coming soon. For details on plan features, see [Plans and Billing](/docs/plans-billing/overview).
:::

## Supported File Formats

AI Expenses accepts these image and document formats:

| Format | Extension | Notes |
|--------|-----------|-------|
| **PDF** | `.pdf` | Multi-page documents supported |
| **JPEG** | `.jpg`, `.jpeg` | Most common format for photos |
| **PNG** | `.png` | High-quality screenshots |
| **HEIC** | `.heic` | Apple photos (auto-converted to JPEG) |

**Automatic conversions:**
- HEIC files convert to JPEG automatically. The original HEIC file is not preserved.
- Large PNG files convert to JPEG for faster processing
- Oversized images are resized to optimise processing speed

## Processing Time

Processing time depends on document complexity and system load. Processing is asynchronous, so documents go through multiple stages.

- **Simple receipts** — A few seconds
- **Complex invoices** — Up to one minute
- **High system load** — May take several minutes while queued

You can continue working while documents process in the background.

## Accessing AI Expenses

AI Expenses is available from the left sidebar menu:

1. Select **AI Expenses** from the main navigation
2. Upload your documents to begin processing

You can also access AI Expenses directly at [app.fiskl.com/dashboard/expense-ingestion](https://app.fiskl.com/dashboard/expense-ingestion).

---

## Available Guides

import DocCardList from '@theme/DocCardList';

<DocCardList />