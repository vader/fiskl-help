---
slug: 2026-06-30-roundup
title: What's new in Fiskl — roles, expenses, and API beta
authors: [shawn]
tags: [new-release, platform-update]
date: 2026-06-30T09:00
description: Three changes have landed in Fiskl — a new permission system, expenses rebuilt as accounting records, and API keys and webhooks in beta.
---

Three meaningful changes have landed in Fiskl. One of them — the permissions update — is worth a quick look from you before it fully settles.

<!-- truncate -->

## New roles and permissions

The old four roles have been replaced with a permission system that lets you grant view and edit access area by area. Seven presets — Owner, Admin, Accountant, Bookkeeper, Invoice Only, Expense Submitter, and Read-only — give you a sensible starting point, and you can adjust from there.

One change to flag. Anyone you previously had on an isolated invoicing role will now either see all invoices or none; the per-person isolation is going away. It is worth reviewing those team members soon and deciding whether each should have full invoicing access or none. Expenses are the deliberate exception — the Expense Submitter preset still shows each person only their own submissions.

The detail is in [User Roles and Permissions](/team/roles-permissions), and the reasoning behind the change is in [How Permissions Work](/team/how-permissions-work).

## Expenses are now full accounting records

Expenses have been rebuilt as proper accounting records. Scan a receipt or invoice and Fiskl extracts the details and links the record to an accounts payable transaction, treated like a journal entry. If a document cannot be read, you can enter the expense manually and Fiskl attaches the file for you.

Expenses can now also be marked billable to a client and pulled directly onto an invoice — the gap that existed before is closed. An optional tool to migrate your older standalone expenses into this workflow is coming shortly. See [Managing AI Expenses](/expenses/ai-expenses/managing-ai-expenses) for how billing and the accounts payable link work.

## API keys and webhooks in beta

API keys and webhooks are live in beta, with an MCP server to follow. Every key or connected app inherits the permissions of the person who created it — no more, no less. That is also why we rebuilt permissions first: all three rest on the same rule, and it only works on a clean, fine-grained model.

If you would like to explore the beta, you will find it in your account settings. See [API Keys](/integrations/public-api/api-keys) and [Webhooks](/integrations/public-api/webhooks) to get started.

## What to do next

Review anyone currently on isolated invoicing and decide whether they should have full invoicing access or none. Nothing else needs your attention right now.

— Shawn Vader, CTO
