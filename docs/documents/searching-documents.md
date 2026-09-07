---
title: "Searching Documents"
description: "Search your Fiskl document library by file name or by the text inside your files. Learn which file types Fiskl can read and what content search cannot find."
keywords: ["search documents", "content search", "full text search", "search inside files", "OCR", "text extraction", "searchable PDF", "document search"]
sidebar_position: 4
tags:
  - Documents
  - Search
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Fiskl searches your document library two ways: by file name, and by the text inside your files. This guide explains the difference, which file types Fiskl can read, and why a file you expected to find sometimes does not appear.

## Before You Begin

You need the `document.read` permission to search. Content search works on every plan, with no separate allowance to buy or enable.

## The Two Search Modes

The search box sits at the top of the Documents screen, with a **Name** and **Contents** toggle beside it.

- **Name** matches against file names. A search for "lease" finds `office-lease-2026.pdf`.
- **Contents** matches against the text inside your files. A search for "lease" finds a scanned contract whose file name is `scan_0043.pdf`, as long as the word appears in the document.

The two are deliberately separate rather than combined. Content search only reaches files Fiskl was able to read, so mixing the modes would make an empty result ambiguous — you would not know whether nothing matched or nothing was readable.

Results appear as you type. Select the **X** in the search box, or use the `Escape` key, to clear the search.

## How Results Are Presented

Searching changes the list in three ways:

- Results cover **every folder** in your library, not only the folder you are in
- Folders disappear from the list, since results span the whole library
- A **Folder** column appears, showing where each result lives

A count above the list shows how many results matched. Name results are ordered newest first. Content results are ordered by relevance, so the strongest match appears at the top rather than the most recent file.

Deleted documents never appear in either mode.

## What Fiskl Can Read

Extraction runs after the malware scan clears, so a file is searchable by name immediately and by content shortly afterwards.

| File type | How Fiskl reads it |
|---|---|
| PDF with a text layer | Reads the text directly |
| Scanned or photographed PDF | Reads it with optical character recognition |
| JPEG, PNG, TIFF up to 10 MB | Reads it with optical character recognition |
| Word, Excel, PowerPoint | Reads the text in the file |
| Plain text, CSV, Markdown, JSON | Reads the file directly |

Fiskl reads the **first 50,000 characters** of a file. That covers a long contract comfortably, but text beyond that point in a very large document is not searchable.

### What Content Search Cannot Find

These files upload, store and download normally. Fiskl cannot read them, so only name search finds them:

- Images in WebP, HEIC, GIF, BMP or SVG format
- JPEG, PNG or TIFF images larger than 10 MB
- Audio, video, archives such as `.zip`, and password-protected files
- Any other format not listed in the table above

:::info
A photo taken on an iPhone is usually a HEIC file, which Fiskl cannot read. If you want a photographed document to be searchable, save or export it as a JPEG or PDF before uploading.
:::

## Common Issues

<details>
<summary>Content search finds nothing, but I can see the words in the file</summary>

Three things cause this. First, check the file type against the table above — HEIC images and large photos cannot be read. Second, a file uploaded moments ago may still be extracting; try again shortly. Third, if the text sits beyond the first 50,000 characters, it is outside the searchable range.

Search by name as a fallback, then preview the file to confirm.

</details>

<details>
<summary>Searching by name misses a file I know is there</summary>

Name search matches the stored file name, and Fiskl replaces unusual characters with underscores when you upload. A file you uploaded as `Rapport café.pdf` is stored as `Rapport_caf_.pdf`, so searching for "café" finds nothing. Search for "rapport" instead.

</details>

<details>
<summary>I cannot narrow results by date or file type</summary>

Search has no filters. Results always cover the whole library, ordered newest first by name and by relevance for contents. Use the **Folder** column to see where each result sits, and open that folder to browse it in context.

</details>

<details>
<summary>A scanned document returns odd words</summary>

Optical character recognition reads what it can see. Faint scans, handwriting, unusual fonts and skewed pages all reduce accuracy, and the extracted text can contain mistakes. Re-scanning at a higher quality usually improves results. The file itself is never altered.

</details>

## Related Topics

- [Managing Documents](/documents/managing-documents) — upload files and organise them into folders.
- [Document Security and Scanning](/documents/document-security) — why extraction waits for the malware scan.
- [Documents Overview](/documents/overview) — how the document library fits together.
