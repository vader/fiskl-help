---
slug: 2026-06-24-permissions
title: New roles and permissions — what changes for your team
authors: [shawn]
tags: [new-release, platform-update]
date: 2026-06-24T09:00
description: A new permission system replaces isolated invoicing with team-wide visibility, plus fine-grained control across every area of Fiskl.
---

Fiskl now has a new roles and permissions system. For most teams it is a clear step up in control, but there is one change to how invoicing visibility works that current users should know about before it lands.

<!-- truncate -->

## Why we did this

The old model tied what you could see to a single role. That was simple, but it could not express the finer detail teams kept asking for — read access here, full access there, nothing at all somewhere else.

It was also holding back what comes next. API keys and webhooks are going live soon and will be quickly followed by a MCP server. All three rest on one rule: a key or app can never do more than the person who created it. That only works on a clean, fine-grained permission model, so we rebuilt the foundation first. You can read the detail in [How Permissions Work](/team/how-permissions-work).

## What this means for you

There is one behavioural change worth flagging. Until now, someone on isolated invoicing saw only their own invoices and quotes. That isolation is going away. Invoicing is now a single right: a team member either has invoicing access and sees every invoice and quote, or they have none.

Expenses are the deliberate exception. The Expense Submitter preset still shows each person only their own submissions, so field staff raising expenses keep their privacy.

Everything else is an improvement. There are seven presets to start from — Owner, Admin, Accountant, Bookkeeper, Invoice Only, Expense Submitter, and Read-only — and a permission grid that lets you grant view and edit access area by area. See [User Roles and Permissions](/team/roles-permissions) for the full picture.

## What to do next

Before the change takes effect, review anyone currently on isolated invoicing and decide whether they should have full invoicing access or none. Nothing else needs your attention — for every other area, you now have more precise control than before, not less.

— Shawn Vader, CTO
