---
title: "Document Security and Scanning"
description: "Every file uploaded to Fiskl is scanned for malware before it can be downloaded. Learn what each document status means, and how permissions and auditing work."
keywords: ["malware scanning", "virus scan", "quarantined file", "document status", "document permissions", "encrypted storage", "document audit log"]
sidebar_position: 6
tags:
  - Documents
  - Permissions
  - Security
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Every file uploaded to your document library is scanned for malware before anyone can download it. This guide explains what each status means, who can do what, and what the Audit Log records.

## Before You Begin

Scanning is automatic and always on. There is nothing to enable, no setting to configure, and no per-plan difference.

## How Scanning Works

Fiskl scans each file as soon as the upload completes. The scan runs against the file in storage, so nothing is checked on your computer and no software is installed.

Until the scan returns a clean verdict, the file cannot be downloaded or previewed. Fiskl checks the verdict again at the moment you select **Download**, rather than trusting the result it recorded earlier. A file flagged moments ago is blocked immediately.

The **Status** column shows where each file has reached. While a scan is running, the list refreshes on its own.

## What Each Status Means

| Status | What it means | Can you download it |
|---|---|---|
| **Uploading** | The file is still transferring | No |
| **Upload failed** | The transfer did not complete. Upload the file again | No |
| **Scanning** | The malware scan is running | No |
| **Ready** | Scanned and clean | Yes |
| **Quarantined** | Malware was found. The file is isolated | No |
| **Can't be scanned** | The file could not be checked | No |
| **Scan failed** | The scan did not complete | No |

Hover over any status to see the detail, including the name of the threat on a quarantined file.

### Quarantined Files

When Fiskl finds malware, it moves the file to isolated storage and removes it from your library's storage location. The file stays listed so you can see what happened, but nobody can download it, and no amount of permission changes that.

Delete the entry once you have noted what it was. The record of the detection stays in the Audit Log.

### Files That Cannot Be Scanned

**Can't be scanned** and **Scan failed** both block downloads, because Fiskl will not hand over a file it could not verify.

Very large files, encrypted files, and archives such as `.zip` are the usual causes. Uploading the file uncompressed, or as a smaller file, normally resolves it. For **Scan failed**, uploading again is the first thing to try.

## How Files Are Stored

- Files are held in private storage with all public access blocked
- Everything is encrypted at rest
- Previous versions are retained, so an overwrite cannot silently destroy a file
- Files never pass through a Fiskl server. Your browser uploads and downloads directly
- Download links are generated on demand and expire after five minutes

Because links expire, a document URL you copy and send to someone else stops working shortly afterwards. Share the file itself, or give the person access to Fiskl.

## Permissions

Three permissions control document access.

| Permission | What it grants |
|---|---|
| `document.read` | Open Documents, browse folders, search, preview, and download |
| `document.write` | Upload files, and create, rename or move folders and files |
| `document.delete` | Delete documents and folders, and restore a deleted document |

Restoring sits with `document.delete` rather than `document.write`, so the role that can take a file away is the role that can bring it back.

There is no separate download permission. Anyone who can see a document can download it, provided the file is **Ready**.

### Access by Role

| Preset | Documents access |
|---|---|
| **Owner**, **Admin** | Full, including delete and restore |
| **Accountant** | Full, including delete and restore |
| **Bookkeeper** | View and upload, but not delete |
| **Invoice Only** | View and upload, but not delete |
| **Expense Submitter** | View and upload, but not delete |
| **Read-only** | View and download only |

Where an action is unavailable, Fiskl disables the button and explains why rather than hiding it. Without `document.read`, the **Documents** menu item does not appear at all.

:::info
Document permissions apply inside the Fiskl app only. There is no OAuth scope for documents, so API integrations and connected apps cannot read or write your document library. See [How Permissions Work](/team/how-permissions-work).
:::

## What the Audit Log Records

Documents and folders are tracked records. The Audit Log captures every upload, rename, move, deletion and restore, along with the scan result.

For each document it records the file name, type, size, folder, upload status, scan status, any threat name, and whether the file is archived. Folders record their name, parent folder and position.

Scans and text extraction are recorded as system actions, so a quarantine is never attributed to the person who uploaded the file. See [Audit Log](/settings/audit-log).

:::warning
Fiskl sends no email or notification about documents. A quarantined file, a failed scan and a full storage allowance are all shown in the app only, so check the **Status** column after uploading anything you need to rely on.
:::

## Common Issues

<details>
<summary>Download is disabled on a file I need</summary>

Hover over the button to see which stage is blocking it. **Scanning** resolves on its own within a few minutes. **Quarantined**, **Can't be scanned** and **Scan failed** all mean Fiskl could not verify the file as safe, and none of them can be overridden.

For **Can't be scanned**, upload the file uncompressed or in a smaller form. For **Scan failed**, upload it again.

</details>

<details>
<summary>A file I know is safe was quarantined</summary>

Fiskl cannot release a quarantined file, and no permission grants an override. If you are confident the detection is wrong, upload the file in a different format — exporting a document to PDF is usually enough — and check the new upload reaches **Ready**. Contact support if the same file is flagged repeatedly.

</details>

<details>
<summary>A teammate cannot see Documents in their menu</summary>

The menu item requires `document.read`. Every role preset except a fully custom set includes it, so check whether the person is on a custom permission set. An Owner or Admin can add the permission. See [Roles and Permissions](/team/roles-permissions).

</details>

<details>
<summary>A link to a document stopped working</summary>

Download links expire after five minutes by design, so a copied URL is not a durable way to share a file. Download the file and send it, or give the person access to your Fiskl account with `document.read`.

</details>

## Related Topics

- [Managing Documents](/documents/managing-documents) — upload, organise, delete and restore files.
- [Audit Log](/settings/audit-log) — review document history and restore a deleted document.
- [Permissions Reference](/team/permissions-reference) — the full permission catalog, including documents.
- [Roles and Permissions](/team/roles-permissions) — what each role preset can do.
- [How Permissions Work](/team/how-permissions-work) — how permissions apply across the app and the API.
