---
title: Managing Services
description: Learn how to create and manage service templates in Fiskl for
  accurate billing and streamlined invoicing of consulting and professional
  services.
sidebar_position: 2
---


This guide explains how to create and manage service templates in Fiskl to streamline billing for intangible offerings like consulting, repairs, and professional advice.



## What Are Services

Services are intangible offerings your business provides to clients, such as consulting hours, maintenance contracts, training sessions, or professional advice. Each service template stores standard information like hourly rates, tax rates, and descriptions that populate automatically when you add the service to an invoice.

## Before You Begin

Before creating a service, confirm the following:

- **Service name** — If you offer variations of the same service (different rates for standard, evening, or weekend work), plan your naming convention before you start so your catalog stays organised
- **Unit of measurement** — Consider whether you bill by output (project, session) or time (hour, day), as this affects how quantities appear on invoices
- **Price/Rate** — Use your standard rate as the template default. One-off pricing adjustments are made at invoice level, so the template only needs to reflect your usual charge
- **Currency** — If you work with international clients billed in different currencies, you can set the currency at template level to save time when invoicing
- **Ledger account** — The default is "Sales of Services". If your accountant tracks service lines separately (e.g., consulting vs. maintenance), confirm the correct account before saving
- **Tax rate** — If you operate across different tax jurisdictions or have services with different tax treatments, confirm which rate applies to this service before you create it

## Creating a New Service

1. Go to **Products & Services** in the left sidebar
2. Select the **+** icon or **New Product/Service**
3. Select the **Service** tab
4. Complete the required fields:
  - **Name** — Enter a clear, descriptive name your team will recognise. Example: "Website Design - Hourly"
  - **Unit** — Select the measurement unit for billing. Common options: hour, session, day, project
  - **Price/Rate** — Enter the unit rate in your base currency. Example: 100.00
  - **Currency** — Defaults to your base currency. Change this if the service is always billed in a different currency
  - **Account** — The default ledger account is "Sales of Services". Select a different account only if you track this service type separately
  - **Tax** — Select the applicable tax rate, or select **Create new tax** if needed
5. Add optional details:
  - **Description** — Explain what the service includes. This text appears on invoices. Example: "Custom website design and development including responsive layout and initial content setup"
  - **Attachments** — Upload service-related documents such as service agreements, scope of work templates, or portfolio examples. Supported formats: PNG, JPG, PDF
6. Select **Create Product/Service**

The service appears in your catalog and is ready to add to invoices.

## Dynamic Name Templates

When creating or editing a service, you can build a dynamic name that updates automatically on recurring invoices. Toggle on **Dynamic name templates for recurring invoices** to reveal the available tokens.

- **Date Templates** — insert Day, Month, Year, Date, Date Short, or Date Medium
- **Client Templates** — insert the Client Name

Select a token to insert it into the **Name** field. Use **+/-** to adjust date offsets for recurring items.

**Example:** You provide monthly retainer services to several clients. Create a service with the name `Monthly Retainer - {Client Name} - {Month} {Year}`. Each time a recurring invoice generates, the name updates automatically — for example, "Monthly Retainer - Acme Inc - July 2025".

:::info
Dynamic name templates work on both standard and recurring invoices. On a standard invoice, tokens resolve to the date of that invoice. On a recurring invoice, tokens update automatically each time a new invoice is generated.

Service type cannot be changed after creation. If you need to change a service to a product or vice versa, create a new entry with the correct type.
:::

## Creating Services Inline During Invoicing

You can create services on the fly while building invoices:

1. Open a new or existing invoice and go to the line items section
2. Select **Click to add**
3. Select **Add new**, then select **Service**
4. Enter a service name in the item field
5. Complete the fields — unit, price/rate, currency, and sales tax
6. Select **More Details** to set additional fields including **Account** and **Currency** (you can also adjust the exchange rate here)
7. Continue adding more items as needed, then select **Done**

Fiskl saves the entry as a service template in your catalog for future use.

## Service Fields Explained

### Name

The primary identifier in your catalog and on invoices. Make it specific enough to distinguish similar items, but concise enough to read at a glance.

### Unit

Defines how the service is measured and billed. The unit label appears on invoices next to the quantity. Common options include hour, session, day, project, and package.

### Price/Rate

The standard billing rate per unit. You can adjust this rate on individual invoices without changing the template.

### Currency

The currency in which this service is priced. When adding the service to an invoice, you can adjust the exchange rate from the **More Details** panel in the line item.

### Account

Links the service to a ledger account in your Chart of Accounts. Revenue from this service is assigned to the selected ledger account when invoices are paid. The default ledger account is "Sales of Services". Other common options include Consulting Revenue, Maintenance Revenue, and Training Revenue.

### Sales Tax

The default tax rate or tax group applied when you add this service to an invoice. You can override the rate on individual line items if needed.

:::tip
If your business is VAT-registered, always assign a sales tax to your services to ensure accurate tax reporting.
:::

### Description

Explains what the service includes. This text appears on invoices. Keep it to one to three sentences and note any relevant terms or limitations.

### Attachments

You can attach service-related files — such as service agreements, scope of work templates, or portfolio examples — from the **Attachments** panel on the right side of the invoice form. Select **Add files** to upload. A maximum of three files, up to 5MB each, are supported.

## Adding Saved Services to Invoices

To add an existing service from your catalog to an invoice:

1. Open a new or existing invoice and go to the line items section
2. Select **Select Existing**
3. Select the service or services from the list
4. Select **Attach Selected**
5. Adjust the quantity as needed

## Editing a Service on an Invoice

When you add a service to an invoice, it becomes a line item you can edit for that transaction. In the line items section, select **Edit** on the line item and make your changes. Select **More Details** to update fields such as **Account** or **Currency**.

Changes to a line item do not affect the original service template. Future invoices continue to use the template's default values.

## Best Practices

**Use clear, descriptive names.** Make services easy to identify in your catalog. Example: "Legal Consultation - Hourly" rather than "Consultation".

**Set accurate default rates.** Use your standard rates as template defaults. Adjust on specific invoices for special pricing.

**Assign services to the correct ledger accounts.** Select ledger accounts carefully for accurate financial reporting.

**Write client-friendly descriptions.** Explain what clients receive in plain language and avoid internal jargon.

**Review pricing regularly.** Update service templates when your standard rates change.

**Group related services with consistent naming.** Example: "Consulting - Standard Hour", "Consulting - Evening Hour", "Consulting - Weekend Hour".

**Create dynamic name templates for recurring clients.** Use placeholders to automate recurring billing with client names and dates that update each cycle.

## Common Issues

I changed a service template but existing invoices still show the old details

Changes to a service template only apply to new invoices. Existing invoices retain the details that were set when the service was added. To update an existing invoice, open it and edit the line item directly.



I deleted a service and can no longer add it to new invoices

Deleting a service removes it from your catalog permanently. Existing invoices containing that service remain unchanged, but you cannot add the deleted service to new invoices. If you need the service again, re-create it in **Products & Services**.



I need to bill different rates for different clients

Service templates store one default rate. To bill a different rate, open the invoice and adjust the unit price on the relevant line item. If you frequently bill different tiers, create separate service templates for each pricing level (e.g., "Consulting - Standard Rate", "Consulting - Premium Rate").



Template placeholders are appearing as text on a regular invoice

Dynamic name template tokens such as `{Client Name}` and `{Month}` resolve on both standard and recurring invoices. On a standard invoice, date tokens use the invoice date. If tokens are displaying as-is, check that **Dynamic name templates for recurring invoices** is toggled on for that service.



How do I bill for time and materials on the same invoice?

Create two separate line items on the invoice:

1. A service for labour (e.g., "Repair - Hourly")
2. A product for materials (e.g., "Replacement Parts")

Add both to the same invoice to give your client a clear breakdown.



How do I create a fixed-price package service?

Create a service with a unit type of "project" or "package" and set a fixed price. Use the description field to list what is included in the package. Adjust the quantity to 1 on the invoice.



## Related Topics

- [Creating Products](/products-services/creating-products) — Create product templates for tangible goods
- [Managing Your Catalog](/products-services/managing-catalog) — Organise and maintain your products and services
- [Time Tracking](/time-and-mileage/time-tracking) — Log billable hours for service invoicing
- [Creating Recurring Invoices](/invoicing/create-recurring-invoices) — Use template services for automated billing

