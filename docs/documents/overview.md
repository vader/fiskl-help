---
title: "Documents Overview"
description: "Keep the files behind your books in one searchable library. Learn how uploads, folders, malware scanning, content search and storage allowances work in Fiskl."
keywords: ["documents", "document storage", "file library", "upload files", "folders", "content search", "malware scanning", "document permissions"]
sidebar_position: 1
tags:
  - Documents
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import DocCardList from '@theme/DocCardList';

The document library is one place to keep the files behind your books: contracts, bank statements, signed forms, and anything else you need to find again. Fiskl scans every upload for malware, indexes the text inside it, and records what happened in the Audit Log.

## What the Document Library Does

Select **Documents** in the left menu to open your library. Files and folders appear in a single list, newest first.

From there you can:

- Upload files, one at a time or many at once
- Organise them into folders, up to five levels deep
- Search by file name, or by the text inside your files
- Preview PDFs and images without downloading them
- Move, rename, and delete files and folders

You need the `document.read` permission to open Documents. Without it, the menu item does not appear.

## Key Concepts

- **Library** — every document your company has uploaded, whatever folder it sits in. Search always covers the whole library.
- **Folder** — a container for documents. Folders nest up to five levels below the top level.
- **Status** — where a file has reached in the upload and scanning process. Only files marked **Ready** can be downloaded.
- **Content search** — matching on the text inside a file rather than its name.
- **Archived** — a deleted document. Fiskl keeps it for 90 days so you can restore it, then deletes it permanently.

## How It Works

Four things happen when you upload a file:

1. **Upload** — the file goes from your browser straight to Fiskl's encrypted storage. It never passes through a Fiskl server.
2. **Scan** — Fiskl checks the file for malware. Downloads stay blocked until it clears.
3. **Extract** — once the scan clears, Fiskl reads the text inside the file.
4. **Index** — that text becomes searchable, so you can find the file by its contents.

Steps 2 and 3 run in the background. The file appears in your list straight away, and you can search for it by name immediately. Searching by content works once extraction finishes, which takes a few minutes at most for typical files.

## How Documents Differs from Receipts and Attachments

Fiskl holds files in three separate places. Only one of them counts towards your document storage allowance.

| Where | What it holds | Counts towards storage |
|---|---|---|
| **Documents** | Files you upload to the document library | Yes |
| Receipts in AI Expenses | Receipts and bills you send for scanning | No |
| Attachments on a transaction | Files added with the paperclip icon on a transaction or journal entry | No |

Sending a receipt for scanning does not put a copy in Documents. Deleting a document does not affect a transaction attachment.

:::info
Content search works on every plan. Plans differ in how much storage they include, not in which document features you get.
:::

## In This Section

<DocCardList />

## Related Topics

- [Managing Documents](/documents/managing-documents) — upload files, build folders, and delete or restore documents.
- [Searching Documents](/documents/searching-documents) — search by file name or by the text inside your files.
- [Document Security and Scanning](/documents/document-security) — how malware scanning, permissions and the audit trail work.
- [Document Storage and Billing](/documents/storage-and-billing) — what each plan includes and how storage above your plan is charged.
- [Audit Log](/settings/audit-log) — review who changed what, and restore a deleted document.
