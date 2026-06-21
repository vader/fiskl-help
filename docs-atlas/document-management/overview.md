---
title: "Document Storage"
description: "Store client receipts, contracts, and signed forms with the client they belong to in your Atlas branch — virus-scanned and access-controlled."
keywords: ["document storage", "client documents", "file management", "accountant portal", "permissions", "virus scanning"]
sidebar_position: 1
tags:
  - Accountant Portal
  - Document Management
  - Permissions
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Document storage gives each branch in Atlas a secure place to keep client documents — receipts, contracts, signed forms, statements — alongside the client they belong to. Every file is virus-scanned, access is controlled by permissions, and 1 GB of storage is included free per branch.

## Before You Begin

You need an admin to enable document storage on the branch. The feature is off by default — once enabled, it stays on for that branch and cannot be hidden from team members who have the right permissions.

## Enabling Document Storage

Document storage is enabled per branch. Each branch in Atlas manages its own files separately.

To enable document storage:

1. Go to any client's profile in the branch where you want to enable storage.
2. Find the **Document Management** card.
3. Select **Enable for free**.

The feature turns on instantly. You see the document browser the moment it is enabled.

:::info
Document storage cannot be turned on by team members who do not own the organization. If you are not an owner, ask your organization owner to enable it for the branch.
:::

## Working with Documents

Once storage is enabled, every client in the branch has their own document area. The document browser supports folders, multi-file upload, search, rename, move, and soft delete.

### Uploading Files

To upload one or more files:

1. Open the client's **Document Management** section.
2. Select **Upload**.
3. Pick one or more files from your computer.

Files upload directly to secure storage — they do not pass through your browser cache. Each file is virus-scanned automatically, and a scan icon appears next to the file while the scan is in progress.

### Organising with Folders

Folders let you group documents inside a client's storage. They are visual only — moving or renaming a folder is instant and never moves the actual file bytes.

To create a folder:

1. Open the client's **Document Management** section.
2. Select **New folder**.
3. Enter a folder name and select **Create**.

You can move documents and sub-folders between folders by selecting **Move** on any item.

### Previewing and Downloading

Two ways to view a document:

- **Preview** — opens the file inline in your browser. Available for PDFs and images only.
- **Download** — saves the file to your computer.

Both options re-check the virus scan immediately before serving the file. A document that fails the scan cannot be downloaded or previewed even if it appears in the list.

### Searching

Use the search box in the toolbar to find documents across all folders for the current client. Search matches the document name and is scoped to one client at a time.

### Deleting

Deleting a document is a soft delete — the file is hidden from listings but the bytes remain in storage for 90 days. After 90 days, the file is permanently removed and storage is released.

:::warning
Soft-deleted documents do not free up storage quota. If your branch is approaching its 1 GB limit, deleting files now does not immediately reduce usage. Storage is released only after the 90-day permanent deletion runs.
:::

## Permissions

Document storage uses three separate permissions, each controlling a different level of access. Permissions stack — having **DOCUMENTS_DELETE** does not grant view or upload access; you need each permission you require.

### View Documents (DOCUMENTS_VIEW)

Lets a team member:

- See the document list and folders for any client in the branch
- Read document metadata (size, upload date, scan status)
- Download files
- Preview PDFs and images

This is the lowest level of access. Without this permission, team members do not see the **Document Management** card on client profiles.

### Upload Documents (DOCUMENTS_UPLOAD)

Lets a team member:

- Upload new documents
- Create folders
- Rename documents and folders
- Move documents between folders

This permission also implies the View permission for documents the team member uploads or moves. For full read access to other team members' uploads, **DOCUMENTS_VIEW** is required as well.

### Delete Documents (DOCUMENTS_DELETE)

Lets a team member:

- Soft-delete documents
- Soft-delete folders (and the documents they contain)

Deleted items can not be restored via the UI you will need to contact support to restore them. 

### Recommended Permission Sets

Common patterns for your team:

- **Viewers** (e.g. analysts reviewing documents): DOCUMENTS_VIEW only
- **Bookkeepers** (regular document handlers): DOCUMENTS_VIEW + DOCUMENTS_UPLOAD
- **Senior staff** (full document control): DOCUMENTS_VIEW + DOCUMENTS_UPLOAD + DOCUMENTS_DELETE

Assign these on each team member's profile in **Team** > **Manage Team Members**.

## Storage Quota

Each branch starts with 1 GB of included storage, shared across every client in that branch. The current usage is shown on every client's **Document Management** card — for example, **8.0 MB of 1.0 GB used · branch-wide**.

When usage reaches 50%, an **Add storage** link appears next to the usage display. At 85% used, the display turns amber and the link reads **Approaching limit — add storage**. At 100%, uploads are blocked until you either delete files or enable paid storage.

For details on what happens when you reach the limit and how paid storage works, see [Storage Billing](document-billing.md).

## Common Issues

<details>
<summary>I can see a client's profile but the Document Management card is missing</summary>

Two possible reasons:

1. The branch owner has not enabled document storage on this branch yet. Ask an organization owner to turn it on.
2. You don't have the **DOCUMENTS_VIEW** permission. Ask your organization owner to grant it.

</details>

<details>
<summary>A document I uploaded shows a "Quarantined" status</summary>

The virus scanner found a threat in the file. The document cannot be downloaded or previewed and is automatically blocked from being served. Quarantined files do not count toward your storage quota.

If you believe this is a false positive, contact support with the document name and the threat identifier shown next to the status.

</details>

<details>
<summary>My upload fails with "Storage full"</summary>

The branch has used its full 1 GB allowance. You have three options:

1. Delete documents you no longer need (note: this does not free up space immediately — see the warning above).
2. Wait until soft-deleted files are permanently removed after 30 days.
3. Enable paid storage to upload past the 1 GB allowance. See [Storage Billing](document-billing.md).

</details>

<details>
<summary>I deleted a folder but the files inside are still listed somewhere</summary>

Folders are organisational only. When you delete a folder, the files inside are also soft-deleted but they remain visible in any cross-folder search until the 30-day retention period ends.

</details>

## Related Topics

- [Storage Billing](document-billing.md) — Enable paid storage to upload past the 1 GB free allowance
- [Roles and Permissions](../team-collaboration/roles-permissions.md) — Manage what team members can do across the Accountant Portal
- [Branch Management](../team-collaboration/branch-management.md) — Configure branches in your Accountant Portal