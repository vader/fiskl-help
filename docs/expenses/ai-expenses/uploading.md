---
title: "Uploading Expenses to AI Expenses"
description: "Learn how to upload receipt and invoice images to AI Expenses for automatic data extraction and processing."
keywords: ["upload expenses", "AI expense upload", "receipt upload", "invoice scanning", "expense processing"]
sidebar_position: 2
---

This guide explains how to upload expense documents to AI Expenses and helps you process multiple receipts quickly using automated OCR.

## Before You Begin

Ensure you have:
- Receipt or invoice images in supported formats (PDF, JPEG, PNG, HEIC)
- Access to Fiskl's web interface
- Clear, legible document images

## Uploading Single Expenses

To upload a single expense document:

1. **Open AI Expenses**

   Select **AI Expenses** from the left sidebar.

2. **Start upload**

   Select **Upload** or drag files to the upload area.

3. **Choose your file**

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

1. **Validates the file** - Checks format and file size
2. **Converts if needed** - Converts HEIC to JPEG and resizes large files
3. **Extracts data** - Uses OCR to read all text and structure
4. **Identifies fields** - Recognizes vendor, date, amount, tax, line items
5. **Categorizes expense** - Suggests appropriate expense category
6. **Saves to Accounts Payable** - Creates expense record automatically
7. **Stores original** - Preserves original image with the expense

## File Requirements and Limits

**Supported formats:**
- PDF (single or multi-page)
- JPEG/JPG
- PNG
- HEIC (Apple photos)

**Image quality tips:**
- Ensure text is clear and readable
- Avoid blurry or poorly lit images
- Capture entire document in frame
- Keep images flat (avoid wrinkles or folds)

**File size:**
- Large files are automatically resized for optimal processing
- No manual size adjustment needed

## Upload Status Indicators

| Status | Meaning |
|--------|---------|
| **Uploading** | File is transferring to Fiskl |
| **Processing** | OCR is extracting data from document |
| **Complete** | Expense is saved and ready for review |
| **Error** | Processing failed - see error message for details |

## Common Upload Issues

<details>
  <summary>Upload fails with "Unsupported file type"</summary>

**Solution:**
- Verify your file is PDF, JPEG, PNG, or HEIC format
- Check file extension matches actual file type
- Try converting the file to JPEG or PDF
</details>

<details>
  <summary>Processing takes longer than expected</summary>

**Solution:**
- Wait a few more minutes - complex documents take longer
- Check if system is experiencing high load
- You can continue working - processing happens in the background
- If processing takes over 10 minutes, contact support
</details>

<details>
  <summary>Extracted data is inaccurate</summary>

**Solution:**
- Ensure original image is clear and readable
- Check if document is too faded or damaged
- Re-upload with a better quality image
- You can manually edit extracted data after processing
</details>

## Tips for Best Results

**Take clear photos:**
- Use good lighting
- Hold camera steady
- Capture entire receipt
- Avoid shadows and glare

**Organize before uploading:**
- Sort receipts by date or vendor
- Remove duplicates
- Batch similar expenses together

**Upload regularly:**
- Upload receipts as you receive them
- Don't wait until end of month
- Fresher receipts are easier to read

## What Happens Next

After upload and processing complete:
- Expense appears in AI Expenses list
- Original image is attached to expense record
- Expense is saved to Accounts Payable
- System suggests expense category automatically
- Expense is ready for automatic reconciliation when matching bank transaction appears

## Related Topics

- [Managing AI Expenses](./managing-ai-expenses) - Edit and review processed expenses
- [AI Expense Reconciliation](./reconciliation) - How automatic matching works
- [Traditional Expenses](../traditional-expenses/overview) - Legacy expense system (view only)