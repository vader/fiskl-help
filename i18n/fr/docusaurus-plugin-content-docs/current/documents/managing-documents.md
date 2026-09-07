---
title: "Managing Documents"
description: "Upload files to Fiskl, organise them into folders, rename and move them, and delete or restore documents. Covers file size limits and folder nesting rules."
keywords: ["upload documents", "create folder", "move documents", "rename document", "delete document", "restore document", "file size limit", "document library"]
sidebar_position: 2
tags:
  - Documents
toc_min_heading_level: 2
toc_max_heading_level: 3
---

This guide explains how to get files into your document library and keep them organised. It covers uploading, folders, previewing, downloading, and what happens when you delete something.

## Before You Begin

Three permissions control what you can do in Documents:

- `document.read` — open the library, search, preview, and download
- `document.write` — upload files, and create, rename or move folders
- `document.delete` — delete documents and folders, and restore a deleted document

If you have `document.read` alone, the **Upload** and **New folder** buttons appear but stay disabled, with a note explaining why. See [Permissions Reference](/team/permissions-reference).

## Uploading Files

You have two ways to upload, and both accept several files at once.

1. Select **Documents** in the left menu
2. Open the folder you want the files to land in
3. Select **Upload**, then select your files

Alternatively, drag your files onto any part of the Documents screen. An overlay confirms which folder the files will land in.

Fiskl uploads three files at a time and shows progress for each one. You can cancel a file while it is still uploading.

### Upload Limits

- **Maximum file size**: 100 MB per file
- **File types**: any type uploads. Type affects only whether Fiskl can preview the file and whether it can read the text inside it
- **Number of files**: no limit beyond your storage allowance

:::info
Fiskl replaces unusual characters in file names with underscores. Spaces, accents and non-Latin characters become `_`, so `Q1 rapport café.pdf` is stored as `Q1_rapport_caf_.pdf`. This applies when you upload and when you rename.
:::

## Organising with Folders

Folders keep the library navigable once it grows. Select a folder row to open it, and use the breadcrumb trail at the top to move back up.

To create a folder:

1. Open the folder you want the new folder to sit inside
2. Select **New folder**
3. Enter a name and select **Create**

Folder rules:

- Folders nest up to five levels below the top level. At the fifth level, **New folder** is unavailable.
- Two folders in the same location cannot share a name. Fiskl compares names without regard to capitalisation, so `Contracts` and `contracts` collide.

## Renaming and Moving

To rename a file or folder, select **More actions** on its row, then select **Rename**. When you rename a file, Fiskl selects the name but not the extension, so typing replaces the name and keeps the `.pdf`.

To move a file or folder:

1. Select **More actions** on its row, then select **Move**
2. Navigate to the destination folder in the dialog
3. Select **Move here**

The dialog opens at your current folder. You cannot move a folder into itself or into one of its own subfolders, and those destinations are unavailable.

Dragging files onto the screen always uploads them. There is no drag-and-drop between folders.

## Previewing and Downloading

Two buttons appear on each file row:

- **Preview** opens the file in a new browser tab. It appears for PDFs and images only.
- **Download** saves the file to your computer. It works for every file type.

Both are available only once a file is marked **Ready**. Until the malware scan clears, **Download** stays disabled and explains what it is waiting for. See [Document Security and Scanning](/documents/document-security).

## Working with Several Files

Select the checkbox on each row you want, or the checkbox in the header to select everything on the page. An action bar appears showing how many files you selected, with **Move** and **Delete**.

Bulk selection covers documents only. Folders are moved and deleted one at a time.

## Deleting and Restoring

To delete a document, select **More actions** on its row, then select **Delete**. To delete several, select them and use **Delete** in the action bar.

Deleting a document does not destroy it. Fiskl archives it for 90 days, during which you can bring it back from the Audit Log. After 90 days, Fiskl deletes the file permanently and it cannot be recovered.

To restore a document:

1. Open the **Audit Log** from your avatar menu
2. Find the entry for the deleted document
3. Select **Restore**

You need `document.delete` to restore, on the principle that whoever can remove a file can bring it back. If the folder the document came from has since been deleted, the document returns to the top level of your library.

:::warning
Deleted documents keep counting towards your storage allowance for the full 90 days, because Fiskl is still holding the file for you. Deleting a large document does not free up space today. See [Document Storage and Billing](/documents/storage-and-billing).
:::

Folders behave differently. A folder must be empty before you can delete it, so move or delete its contents first. Deleted folders cannot be restored.

## Common Issues

<details>
<summary>The Upload button is disabled</summary>

Uploading needs the `document.write` permission. Hover over the button to see the explanation. Ask an Owner or Admin to review your permissions. See [Roles and Permissions](/team/roles-permissions).

If you have the permission and the button is still unavailable, your company may have used all the storage included in its plan. Check **Subscriptions & Billing** > **Usage** > **Storage**.

</details>

<details>
<summary>My file name changed after uploading</summary>

Fiskl replaces any character outside letters, numbers, and `_ . - ( )` with an underscore. This keeps file names safe to store and to download on any operating system. Rename the file if the result is hard to read, but the same substitution applies to the new name.

</details>

<details>
<summary>Fiskl will not delete my folder</summary>

A folder has to be empty first. Open it, move or delete everything inside, including any subfolders, then delete the folder. Fiskl does this deliberately, so a single action cannot remove files you had forgotten were in there.

</details>

<details>
<summary>I cannot create a folder inside this one</summary>

Folders nest five levels deep at most. If you are already five levels down, **New folder** is unavailable and explains the limit. Move the files up a level, or group them differently.

</details>

<details>
<summary>I deleted a document more than 90 days ago</summary>

It is gone. Fiskl keeps archived documents for 90 days and then deletes them permanently, so there is nothing left to restore. The record of the deletion stays in the Audit Log, including the file name and who deleted it.

</details>

## Related Topics

- [Searching Documents](/documents/searching-documents) — find a file by its name or its contents.
- [Document Security and Scanning](/documents/document-security) — what each file status means and why downloads are blocked.
- [Document Storage and Billing](/documents/storage-and-billing) — what counts towards your allowance.
- [Audit Log](/settings/audit-log) — review document history and restore a deleted file.
- [Permissions Reference](/team/permissions-reference) — what each document permission grants.
