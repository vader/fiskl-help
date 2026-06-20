---
title: "Uploading Expenses to AI Expenses"
description: "Upload receipts and invoices to Fiskl AI Expenses for automatic data extraction. Supports PDF, JPEG, PNG, and HEIC formats."
keywords: ["upload expenses", "AI expense upload", "receipt upload", "invoice scanning", "expense processing", "machine learning"]
sidebar_position: 1
tags:
   - Expenses
   - AI Expenses
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to upload receipts and invoices to AI Expenses, where Fiskl extracts the data automatically using AI and machine learning.

## Before You Begin

Before uploading, confirm you have:

- Receipt or invoice images in a supported format: PDF, JPEG, PNG, or HEIC
- Clear, legible document images — blurry or poorly lit photos reduce accuracy

## Uploading a Single Expense

1. Select **Purchases** > **AI Expenses** from the left sidebar.
2. Select **Upload** to open the file picker.
3. Select the receipt or invoice image from your device.
4. Wait for the system to extract the data. This takes a few seconds to a few minutes depending on document complexity.
5. Review the extracted information for accuracy.

## Uploading Multiple Expenses

1. Select **Purchases** > **AI Expenses** from the left sidebar.
2. Hold `Ctrl` (Windows) or `Cmd` (Mac) while selecting files to upload a batch.
3. All files upload and queue for processing automatically.
4. Monitor the processing status for each document. You can continue working while files process in the background.

## Creating an Expense Manually

Use this method when you do not have a document to upload — for example, a verbal agreement or a missing receipt.

1. Select **Purchases** > **AI Expenses** from the left sidebar.
2. Select **Create New** to open the transaction form.
3. Enter the expense **Name** and **Amount**.
4. Set the **Date** and **Due Date**.
5. Select a **Category**, **Tax** rate, and **Vendor** as needed.
6. Select **Save**.

:::info
Manually created expenses are saved to Accounts Payable but do not go through AI extraction or processing.
:::

## What Happens During Processing

When you upload a document, Fiskl automatically:

1. **Validates the file** — Checks format and file size.
2. **Converts if needed** — Converts HEIC to JPEG and resizes large images. Your original HEIC file is not preserved.
3. **Optimises the image** — Processes the image for accurate scanning. The stored image may differ from your original upload.
4. **Extracts data** — Uses AI and machine learning to read text and structure.
5. **Identifies fields** — Recognises vendor, date, amount, and tax.
6. **Categorises the expense** — Suggests an appropriate expense category.
7. **Saves to Accounts Payable** — Creates the expense record automatically.
8. **Queues for reconciliation** — Makes the expense available for automatic matching against bank transactions.
9. **Stores the document** — Preserves the processed image with the expense.

## Processing Time

Processing time depends on document complexity and system load. Processing is asynchronous, so documents go through multiple stages.

- **Simple receipts** — A few seconds
- **Complex invoices** — Up to one minute
- **High system load** — May take several minutes while queued

You can continue working while documents process in the background.

## File Requirements

**Supported formats:**

- PDF (single or multi-page)
- JPEG / JPG
- PNG
- HEIC (Apple photos)

**Automatic conversions:**

- HEIC files convert to JPEG before processing
- Large PNG files convert to JPEG for faster processing
- Oversized images resize automatically

:::tip
For best results, use well-lit images with all text clearly visible and the entire document in frame. Avoid shadows, glare, and wrinkled documents.
:::

## Upload Status Indicators

| Status | Meaning |
|---|---|
| **Uploading** | File is transferring to Fiskl |
| **Ingesting** | AI and machine learning are extracting data |
| **Complete** | Expense is saved and ready for review |
| **Error** | Processing failed — see the error message for details |

## Scan Usage

Each page in an uploaded document counts as one scan against your monthly plan allowance. A five-page PDF uses five scans. For plan limits, see [AI Expenses Overview](/expenses/ai-expenses/overview).

## Duplicate Detection

The system automatically rejects duplicate uploads. If you upload a document that matches an existing expense, Fiskl flags it and prevents a duplicate record from being created.

## Common Issues

<details>
<summary>Upload fails with an unsupported file type error</summary>

Verify your file is in PDF, JPEG, PNG, or HEIC format. Check that the file extension matches the actual file type. If the issue continues, convert the file to JPEG or PDF before uploading.

</details>

<details>
<summary>Processing takes longer than expected</summary>

Processing is asynchronous and goes through multiple stages. During periods of high demand, documents queue and may take several minutes. You can continue working while processing completes in the background. If a document takes over ten minutes, contact support.

</details>

<details>
<summary>Extracted data is inaccurate</summary>

Faded or damaged documents produce less accurate results. Re-upload using a clearer image. You can also edit extracted data manually after processing — see [Managing AI Expenses](/expenses/ai-expenses/managing-ai-expenses) for instructions.

</details>

## Related Topics

- [AI Expenses Overview](/expenses/ai-expenses/overview) — What AI Expenses does and how it works
- [Managing AI Expenses](/expenses/ai-expenses/managing-ai-expenses) — Edit and review processed expenses
- [AI Expense Reconciliation](/expenses/ai-expenses/reconciliation) — How automatic matching works
- [Traditional Expenses](/expenses/traditional-expenses/overview) — Manual expense entry
