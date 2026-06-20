---
title: "Clients Overview"
description: "Manage clients in Fiskl to streamline invoicing, quotes, and payment collection with multi-currency support and automated direct debit."
keywords: ["clients", "client management", "invoicing", "accounts receivable", "direct debit", "GoCardless", "multi-currency", "time billing"]
sidebar_position: 1
---

This section explains how Fiskl's client management system helps you store contact details, streamline invoicing, and automate payment collection.

## Why Manage Clients in Fiskl?

Maintaining accurate client records gives you a single source of truth for all your income-side transactions. When you create a client once, their details carry through automatically to every invoice, quote, and payment you process.

**Key benefits:**

- Automatic population of client details on invoices and quotes
- Default currency settings for international billing
- Hourly rate configuration for time-based billing
- Automated payment collection through GoCardless direct debit
- Accounts receivable tracking and invoice history per client
- Revenue reporting by client


## Client Workflow

The typical client workflow moves from setup through invoicing to payment collection and reporting.

### 1. Create the Client

Add a client from the **Clients** section or directly during invoice creation.

**Information you can store:**

- Client name and email address
- Billing and shipping addresses
- Tax/VAT ID
- Notes about the client or billing requirements
- Default billing currency
- Default hourly rate (for time-based billing)
- Cc and Bcc addresses for invoice delivery


**Creation methods:**

- Manual entry in the **Clients** section
- Inline creation during invoice or quote creation


### 2. Create Invoices and Quotes

Once a client exists, their details populate automatically on new invoices and quotes.

**What carries through automatically:**

- Client name and email
- Billing address (formatted as configured)
- Default currency
- Time rate (on time-based line items)


**Learn more:** [Creating Invoices](/invoicing/creating-invoices)

### 3. Automate Direct Debit Collection

Automate payment collection through GoCardless direct debit. Other payment methods are available at the invoice level — see [Payment Integrations](/integrations/payments/overview).

**How it works:**

1. Enable GoCardless on an invoice
2. The client receives a mandate authorisation link
3. The client completes the authorisation
4. Future invoices collect automatically on the due date

### 4. Review and Report

Use client records to monitor outstanding balances and analyse revenue.

**Available views and reports:**

- Invoice history per client
- Accounts receivable ageing report
- Client statement — download from the invoice list within a client record, or from **Reports** in the left menu

**Learn more:** [Financial Reports](/reporting/overview)


## Client Features in Detail

### Default Currency

Set a preferred billing currency on each client record. Fiskl applies this currency automatically when you create an invoice for that client and handles exchange rate conversion.

This is particularly useful for international clients or businesses that bill in multiple currencies.

### Time-Based Billing Rate

Set a client-specific default hourly rate that overrides the default rate saved in **Settings** > **Preferences**. When you log time against this client, Fiskl applies their rate automatically and pulls billable hours through to invoices. You can still override the rate on individual time entries when needed.

**Learn more:** [Time Tracking](/time-and-mileage/time-tracking)

### Tax/VAT ID

Store the client's Tax or VAT registration number on their record. This appears on invoices automatically, which is important for B2B invoicing and tax compliance in many regions.

### Notes

Add free-text notes to a client record for anything relevant to the relationship — billing preferences, special requirements, account references, or internal context. Notes are visible only to your team and do not appear on invoices.

### Invoice Statistics

Each client record shows a summary of invoice activity. This includes payments recorded against invoices (marked as paid) and the unreconciled balance from your books — giving you a quick view of what has been received and what is still owed.

### Direct Debit Mandates

GoCardless integration enables automated payment collection for recurring or regular clients.

**Mandate statuses:**

- **Success** — Active and ready for automatic collection
- **Pending** — The client has not yet completed authorisation
- **Revoked** — The client cancelled, or authorisation failed


Monitor mandate statuses directly from the client list.


## Client List Management

### Searching and Filtering

From the **Clients** section you can:

- Search by name or contact details
- Filter by status (active or archived)
- Filter by date the client was added or last updated
- Access quick actions from the three-dot menu next to each client
- Select a client to view their invoice list and download a client statement (also available from **Reports** in the left menu)


### Archiving Clients

Archiving removes a client from your active list without deleting their history. Archived clients and all associated transactions remain visible in reports.

To archive a client, select the three-dot menu next to their name and select **Archive**.


## Common Use Cases

### Freelancer or Consultant

**Typical workflow:**

- 5–10 active clients
- Project and hourly invoicing
- Different time rates per client
- Quotes for new project scopes
- International clients in multiple currencies


**Key features used:**

- Default hourly rate per client
- Multi-currency invoicing
- Quote-to-invoice conversion


### Small Business Owner

**Typical workflow:**

- 20–50 active clients
- Recurring monthly invoicing
- Direct debit for regular clients
- Mix of one-off and retainer billing


**Key features used:**

- GoCardless mandates for automated collection
- Default currency per client
- Client statement download from the invoice list
- Accounts receivable ageing report


### Agency or Service Business

**Typical workflow:**

- 50+ clients across a team
- Retainer and project billing
- Team time tracked per client
- Client-specific billing rates


**Key features used:**

- Per-client time rates
- Team time tracking linked to clients
- Revenue reporting by client


## Best Practices

### Setting Up Clients

- Configure complete client details before creating the first invoice
- Set accurate default currencies for international clients
- Set client-specific default time rates to override the global rate in Settings
- Store Tax/VAT IDs for all B2B clients
- Enable direct debit early for recurring clients
- Use consistent address formatting across records


### Maintaining Client Records

- Update contact information promptly when notified of changes
- Archive inactive clients rather than leaving them in the active list
- Review time rates periodically to keep them current
- Monitor mandate statuses monthly for active GoCardless clients
- Remove duplicate entries when found


### Staying Organised

- Use clear, consistent naming conventions
- Add notes to client records for billing requirements or preferences
- Review the client list quarterly
- Download client statements from the invoice list for reconciliation


## Getting Started with Clients

Add your first clients from **Clients** in the left sidebar. Enter their details, set a default currency and time rate if applicable, and add a Tax/VAT ID for B2B clients. Once saved, create a test invoice to verify the details carry through correctly.

To set up automated payment collection, connect GoCardless under **Integrations** > **Payments**, then enable direct debit on invoices for recurring clients.

From there, add new clients as you acquire them, keep contact details current, and archive inactive clients quarterly to keep your list clean.


## Need More Help?

**Set up and manage clients:** [Managing Clients](/clients-vendors/clients)

**Create invoices:** [Creating Invoices](/invoicing/creating-invoices)

**Set up payment automation:** [Payment Integrations](/integrations/payments/overview)

**Track billable time:** [Time Tracking](/time-and-mileage/time-tracking)

**View financial reports:** [Financial Reports](/reporting/overview)

---

## Available Guides

[📄️ Managing Clients — Learn how to add and manage clients in Fiskl for streamlined invoicing, quotes, and payment processing.](/clients-vendors/clients)
