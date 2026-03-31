---
title: "Uploading Expenses to AI Expenses"
description: "Upload receipt and invoice images to AI Expenses for automatic data extraction using AI and machine learning."
keywords: ["upload expenses", "AI expense upload", "receipt upload", "invoice scanning", "expense processing", "machine learning"]
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to upload expense documents to AI Expenses and helps you process multiple receipts quickly using AI and machine learning.

## Before You Begin

Ensure you have:
- Receipt or invoice images in supported formats (PDF, JPEG, PNG, HEIC)
- Access to the Fiskl web interface at [app.fiskl.com](https://app.fiskl.com/dashboard/expense-ingestion)
- Clear, legible document images

## Uploading Single Expenses

To upload a single expense document:

1. **Open AI Expenses**

   Select **AI Expenses** from the left sidebar.

2. **Start upload**

   Select **Upload** or drag a file to the upload area.

3. **Select your file**

   Select the receipt or invoice image from your computer.

4. **Wait for processing**

   The system extracts data automatically. This takes a few seconds to a few minutes depending on document complexity.

5. **Review extracted data**

   After processing completes, review the extracted information for accuracy.

## Uploading Multiple Expenses

To process multiple receipts at once:

1. **Open AI Expenses**

   Select **AI Expenses** from the left sidebar.

2. **Select multiple files**

   Hold `Ctrl` (Windows) or `Cmd` (Mac) while selecting multiple files, or drag multiple files to the upload area.

3. **Upload batch**

   All files upload and queue for processing automatically.

4. **Monitor progress**

   The system shows processing status for each document. You can continue working while files process in the background.

## What Happens During Processing

When you upload a document, Fiskl automatically:

1. **Validates the file** — Checks format and file size
2. **Converts if needed** — Converts HEIC to JPEG and resizes large images
3. **Optimises the image** — Processes the image to ensure accurate scanning. The stored image may differ from your original upload.
4. **Extracts data** — Uses AI and machine learning to read all text and structure
5. **Identifies fields** — Recognises vendor, date, amount, tax, and line items
6. **Categorises expense** — Suggests an appropriate expense category
7. **Saves to Accounts Payable** — Creates the expense record automatically
8. **Stores the document** — Preserves the processed image with the expense

:::info
Processing is asynchronous. Each document goes through multiple stages, and if the system is busy, documents queue and may take several minutes to complete.
:::

## File Requirements

**Supported formats:**
- PDF (single or multi-page)
- JPEG / JPG
- PNG
- HEIC (Apple photos)

**Automatic conversions:**
- HEIC files convert to JPEG before processing. Your original HEIC file is not preserved.
- Large PNG files convert to JPEG for faster processing
- Oversized images are resized automatically

**Image quality tips:**
- Ensure text is clear and readable
- Avoid blurry or poorly lit images
- Capture the entire document in frame
- Keep images flat — avoid wrinkles or folds

## Upload Status Indicators

| Status | Meaning |
|--------|---------|
| **Uploading** | File is transferring to Fiskl |
| **Ingesting** | AI and machine learning are extracting data from the document |
| **Complete** | Expense is saved and ready for review |
| **Error** | Processing failed — see error message for details |

## Scan Usage

Each page in an uploaded document counts as one scan against your monthly plan allowance. A five-page PDF uses five scans. For plan limits, see [AI Expenses Overview](/docs/expenses/ai-expenses/overview).

## Duplicate Detection

The system automatically rejects duplicate uploads. If you upload a document that matches an existing expense, Fiskl flags it and prevents a duplicate record from being created.

## Common Issues

<details>
<summary>Upload fails with unsupported file type</summary>

Verify your file is in PDF, JPEG, PNG, or HEIC format. Check that the file extension matches the actual file type. If the issue persists, try converting the file to JPEG or PDF before uploading.

</details>

<details>
<summary>Processing takes longer than expected</summary>

Processing is asynchronous and goes through multiple stages. During periods of high demand, documents queue and may take several minutes. You can continue working while processing completes in the background. If processing takes over ten minutes, contact support.

</details>

<details>
<summary>Extracted data is inaccurate</summary>

Ensure the original image is clear and readable. Faded or damaged documents may produce less accurate results. Try re-uploading with a better quality image. You can also edit extracted data manually after processing. See [Managing AI Expenses](/docs/expenses/ai-expenses/managing-ai-expenses) for editing instructions.

</details>

## Tips for Best Results

**Take clear photos:**
- Use good lighting
- Hold your camera steady
- Capture the entire receipt
- Avoid shadows and glare

**Organise before uploading:**
- Sort receipts by date or vendor
- Remove duplicates before uploading
- Batch similar expenses together

**Upload regularly:**
- Upload receipts as you receive them
- Don't wait until the end of the month
- Fresher receipts are easier to read

## What Happens Next

After upload and processing complete:
- The expense appears in your AI Expenses list
- The processed image is attached to the expense record
- The expense saves to Accounts Payable
- The system suggests an expense category automatically
- The expense is ready for automatic reconciliation when a matching bank transaction appears

## Related Topics

- [Managing AI Expenses](/docs/expenses/ai-expenses/managing-ai-expenses) — Edit and review processed expenses
- [AI Expense Reconciliation](/docs/expenses/ai-expenses/reconciliation) — How automatic matching works
- [Traditional Expenses](/docs/expenses/traditional-expenses/overview) — Legacy expense system (view only)