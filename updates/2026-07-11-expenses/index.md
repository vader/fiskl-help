---
slug: 2026-07-11-expenses
title: A clearer view of your expenses, plus search in every report
authors: [shawn]
tags: [new-release, platform-update]
date: 2026-07-11T09:00
description: A new Expenses report shows your spending by category with payment status, plus report search, bulk expense migration, and transaction list improvements.
---

Expenses have been the hardest part of the move to full double-entry accounting, and we have heard that clearly. This round of changes is mostly about making them easier to see, easier to add, and easier to migrate.

<!-- truncate -->

## The new Expenses report

Since expenses moved into accounts payable, many of you have told us the accounting views feel like they were written for accountants. They were. The general ledger answers "did this post correctly", not "what did I spend on fuel this quarter".

The new Expenses report answers the second question. It groups every expense by category with subtotals, shows each one as paid, due, or overdue, and lets you filter by vendor or unpaid only. The totals always reconcile with your Profit and Loss — it is the same accounting data, presented for humans. You will find it under **Accounting** > **Reports**, and the guide is at [Expenses Report](/reporting/expenses-report).

We have also rewritten the help on recording expenses, because the old and new ways were genuinely confusing. There are two ways to add an expense, both post to your accounting immediately, and your categories are never lost when you match a bank payment. [How to Add Expenses](/expenses/adding-expenses) walks through it.

## Migrate your old expenses

The migration tool we promised in June is live. In the legacy expenses list you can now select expenses — individually or all at once — and convert them to accounts payable in bulk. Expenses already matched to an accounting transaction or billed on an invoice stay where they are, since they are already accounted for. Details in [Traditional Expenses](/expenses/traditional-expenses/overview).

## Search inside any report

Press Ctrl+F (Cmd+F on Mac) in any report and you get Fiskl's own search instead of the browser's. Matching rows highlight in orange, you see a count of matches, and the arrow keys step between them. Large reports can be overwhelming; finding one amount in them no longer is.

## Smaller improvements

Bulk actions now sit in a floating bar, so the controls stay with you in long lists. In accounting transactions, attachments are now visible in the list view, and a sticky header keeps the account and your filters in sight while you scroll. And the API has grown more endpoints — still in beta and open for consultation at [api-docs.fiskl.com](https://api-docs.fiskl.com/).

Nothing here needs action from you — the Expenses report is simply worth a look the next time you wonder where the money went.

— Shawn Vader, CTO
