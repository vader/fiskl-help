---
title: Bank Account Reconciliation
sidebar_position: 14
description: "Step-by-step guide to performing bank account reconciliation in Fiskl, from setup to completion with perfect transaction matching."
keywords: ["bank account reconciliation", "Fiskl reconciliation setup", "transaction matching", "bank statement reconciliation"]
slug: /core-features/accounting/journal-entries/guides/bank-account-reconciliation
toc_min_heading_level: 2 
toc_max_heading_level: 4
tags: 
 - Accounting 
 - Bank Reconciliation 
 - Transaction Matching
---

## Performing a Perfect Reconciliation (100% Match)

Once all Fiskl transactions have been automatically matched with your bank statement, the reconciliation difference will show as zero, indicating that you can proceed by clicking the 'Reconcile' button to finalize the reconciliation.

##Setting Up Your Reconciliation##

1. **Navigate to Reconciliation:** Go to Accounting > Reconciliation from the left menu
2. **Select your account:** Choose the specific bank or cash account you want to reconcile from the dropdown menu and click “Reconcile”

The very first reconciliation will cover the period from the very first transaction in the bank account until the end period selected. Please note that for the ending balance for the end of the selected period, the General Ledger Balance should match the Statement Balance.

<details>

<summary>Is This Your First Reconciliation in Fiskl?</summary>

If this is the first reconciliation in Fiskl and you have previous years account transactions, please follow these steps

1. Determine the last month when the GL Balance matched the Statement balance
2. In Fiskl, select your bank account and click on “Reconcile”
3. Start a reconciliation using the default start date and set the end date to match the date from step 1
4. Enter the statement ending balance from the bank statement
5. There should be No Difference and that reconciliation will include all the historical transactions for the prior periods
6. By saving this first reconciliation it will allow you to move to a more frequent reconciliation cadence that fits your accounting requirements.

</details>

##Checking Statement Information##

1. **Choose end date:** Enter the closing date from your bank statement
2. **Statement end balance:** Input the final balance shown on your bank statement

:::info[tip]
**Reconcile in:** Displays the sum and number of positive transactions (money coming in)
**Reconcile Out** Displays the sum and number of negative transactions (money going out)
:::

###Transaction Matching Process###

**Auto-Matching:**Once the above information has been entered, within seconds Fiskl will automatically identify if there is a discrepancy to the bank statement. Moving forward we can do edits to the transactions to get to 0 difference or we can proceed forward by clicking on the difference and get to upload the bank statement in the CSV format.

##Handling Different Transaction States##

##Transactions that Match Perfectly##

When transactions appear on both your bank statement and in Fiskl:
**Automatic Detection:** Fiskl highlights these matches automatically, helping in saving hours of manual work and cross checking so you can get faster to the reconciled state.

##Bank Statement Transactions Not in Fiskl##

For transactions that appear on your statement but have been accidentally added or removed in Fiskl:

1. **Identify Missing Items:** Look for unchecked items on the bank statement side
2. **Add New Transactions:** Click the "+" button next to the bank statement transaction
3. **Complete Transaction Details:** Select appropriate category (e.g., Bank Fees, Interest Income)
4. **Create and Match: Click "Create" to add the transaction, then tick both items to complete the match**

##Fiskl Transactions Not on Bank Statement##

For transactions recorded in Fiskl but not appearing on your bank statement:

1. **Identify Timing Differences:** These are typically outstanding checks or deposits in transit
2. **Leave Unmarked:** Do not tick these transactions during reconciliation - FOR LATER
3. **Review for Errors:** Verify these are legitimate timing differences, not data entry errors
4. **Future Statements:** These items should appear in your next reconciliation period - FOR LATER

###Final Reconciliation Steps###

**Completing a Successful Reconciliation:** Once your reconciliation shows as zero difference, click on Reconcile.

###Post-Reconciliation Actions###

**Generate Reports:** View online within Fiskl or export to PDF if required
**Update Existing or Adding New Records:** In case you need to add/remove new transactions or modify existing ones within the reconciled period your reconciliation status will change to ‘Attention’ which means you will have to go back to that reconciliation and fix it.

:::note When performing a perfect reconciliation - zero differences, all transactions should be accounted for, and your reconciled balance should show zero difference from your statement balance.  :::  
