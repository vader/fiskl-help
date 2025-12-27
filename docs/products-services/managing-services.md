---
title: "Managing Services"
description: "Learn how to create and manage service templates in Fiskl for accurate billing and streamlined invoicing."
keywords: ["create service", "service template", "billing", "consulting", "hourly rate"]
sidebar_position: 3
---

# Managing Services

This guide explains how to create and manage service templates in Fiskl that streamline billing for intangible offerings like consulting, repairs, and professional advice.

## What Are Services

Services are intangible offerings your business provides to clients, such as consulting hours, maintenance contracts, training sessions, or professional advice. Each service template stores standard information like hourly rates, tax rates, and descriptions that populate automatically when you add the service to an invoice.

## Before You Begin

Ensure you have:
- The service name and pricing information
- The correct ledger account for revenue tracking (usually "Sales of Services")
- Tax rate information if applicable
- Standard unit of measurement (hours, sessions, days, projects)

## Creating a New Service

**Steps:**

1. Go to **Products & Services** in the left sidebar
2. Select the **+ icon** or **New Product/Service**
3. Select the **Service** tab
4. Complete the required fields:

   **Name**
   Enter a clear, descriptive name your team will recognize.
   Example: "Website Design - Hourly"

   **Unit**
   Choose the measurement unit for billing.
   Common options: hour, session, day, project
   Example: "hour"

   **Amount**
   Enter the unit rate in your base currency.
   Example: 100.00

   **Account**
   Select the ledger account for revenue categorization.
   Most services use "Sales of Services"
   Choose a different account if needed (e.g., "Consulting Revenue")

   **Tax**
   Select the applicable tax rate or choose "Create new tax" if needed.
   Example: "Standard VAT (20%)" or "Exempt"

5. Add optional details:

   **Description**
   Explain what the service includes. This text appears on invoices.
   Example: "Custom website design and development including responsive layout and initial content setup"

   **Attachments**
   Upload service-related documents:
    - Service agreements
    - Scope of work templates
    - Portfolio examples
    - Supported formats: PNG, JPG, PDF
    - Multiple files allowed

6. Select **Save**

The service appears in your catalog and is ready to add to invoices.

:::tip
For time-based services, use "hour" as your unit and integrate with Fiskl's time tracking to automatically generate accurate invoices from logged hours.
:::

## Creating Services Inline During Invoicing

Create services on the fly while building invoices:

**Steps:**

1. While creating or editing an invoice, navigate to the line items section
2. Start typing a service name in the item field
3. If no matching service exists, press **Enter** or continue typing
4. A new line item appears with editable fields
5. Complete the fields (name, quantity, rate, tax)
6. Select **Save** on the invoice

Fiskl automatically creates a service template from this inline entry.

## Service Components Explained

### Name
The primary identifier in your catalog and on invoices. Make it specific enough to distinguish similar services.

Good examples:
- "Website Design - Hourly"
- "Monthly Maintenance Contract"
- "Emergency Repair Service"

Poor examples:
- "Service" (too vague)
- "Consulting" (not specific enough if you offer multiple types)

### Unit
Defines how the service is measured and billed:
- **hour**: Hourly services (most common for time-based work)
- **session**: Fixed-duration appointments (e.g., coaching, training)
- **day**: Day-rate services (e.g., on-site consulting)
- **project**: Fixed-scope deliverables (e.g., logo design, audit)

The unit label appears on invoices next to quantity.

### Amount
The standard billing rate per unit. You can adjust this rate on individual invoices without changing the template.

### Account
Links the service to your Chart of Accounts for financial reporting. Revenue from this service credits the selected account when invoices are paid.

Common accounts for services:
- Sales of Services (general professional services)
- Consulting Revenue
- Maintenance Revenue
- Training Revenue

### Tax
The default tax rate applied when adding this service to invoices. You can override the tax rate on individual invoices if needed.

### Description
Explains what the service includes and any relevant terms. This text appears on invoices.

**Good descriptions:**
- State what's included
- Note any limitations or exclusions
- Keep it client-friendly (1-3 sentences)

Example: "On-site technical support including diagnosis, repair, and testing. Parts not included."

### Attachments
Store service-related documents for reference or client sharing:
- Service agreements
- Terms and conditions
- Portfolio samples
- Scope of work templates

## Using Services in Invoices

Add services to invoices in three ways:

### Method 1: From the Services List

1. Go to **Products & Services**
2. Locate the service
3. Select the service row to open details
4. Select **Add to new invoice** or **Add to existing invoice**
5. Choose the target invoice if adding to existing
6. The service appears as a line item

### Method 2: From the Invoice

1. Open an invoice (new or existing)
2. Navigate to the line items section
3. Select **Add item** or start typing in the item field
4. Select the service from the dropdown list
5. The service populates with preset details
6. Adjust quantity as needed

### Method 3: Quick Search While Invoicing

1. While creating an invoice, type the service name in the item field
2. Matching services appear as you type
3. Select the service from suggestions
4. It populates automatically with preset details

## Adjusting Services on Invoices

When you add a service to an invoice, you can customize the line item:

**Adjustable fields:**
- **Quantity**: Change the number of units (e.g., hours worked)
- **Unit Price**: Override the default rate for this transaction
- **Description**: Add transaction-specific notes
- **Tax**: Change the tax rate for this line item

**Important:** Changes to invoice line items don't affect the original service template. Future invoices still use the template's default values.

## Creating Template Services for Recurring Invoices

For recurring invoices, create services with dynamic placeholders that populate automatically based on client and date:

**Steps:**

1. Go to **Products & Services**
2. Select **New Product/Service**
3. Select the **Service** tab
4. Toggle **Template** to ON
5. Select **Name** to display placeholder fields
6. Build your service name using placeholders:

   **Available placeholders:**
    - `[Client]` - Client name
    - `[Day]`, `[Month]`, `[Year]` - Current date components
    - `[Day+1Y]`, `[Month+1Y]`, `[Year+1Y]` - Date one year forward
    - `[Day-1D]`, `[Month-1M]` - Date adjustments

7. Complete other fields (amount, tax, etc.)
8. Select **Save**

**Example template:**

Service name: `1-year maintenance contract for [Client], expires [Day+1Y-1D]/[Month+1Y-1D]/[Year+1Y-1D]`

When added to a recurring invoice for "Acme Corp" on October 1, 2024, it becomes:
`1-year maintenance contract for Acme Corp, expires 30/09/2025`

:::info
Template placeholders only work with recurring invoices. Regular invoices display the placeholders as-is without substitution.
:::

## Best Practices

**Use clear, descriptive names:**
Make services easy to identify in your catalog.
Example: "Legal Consultation - Hourly" not just "Consultation"

**Set accurate default rates:**
Use your standard rates as template defaults. Adjust on specific invoices for special pricing.

**Assign services to correct accounts:**
Choose ledger accounts carefully for accurate financial reporting.

**Write client-friendly descriptions:**
Explain what clients get in plain language. Avoid internal jargon.

**For time-based services, integrate time tracking:**
Use Fiskl's time tracking to automatically convert logged hours into invoice line items.

**Create template services for recurring clients:**
Use placeholders to automate recurring billing with dynamic client names and dates.

**Review pricing regularly:**
Update service templates when you change standard rates.

**Group related services:**
Use consistent naming for service variations.
Example: "Consulting - Standard Hour", "Consulting - Evening Hour", "Consulting - Weekend Hour"

## Common Questions

### Can I change a service after using it on invoices?

Yes. Changes to the service template don't affect existing invoices. Only new invoices use the updated details.

### What happens if I delete a service?

Existing invoices containing that service remain unchanged. You can't add the deleted service to new invoices.

### How do I bill for time and materials?

Create two line items:
1. A service for labor (e.g., "Repair - Hourly")
2. A product for materials (e.g., "Replacement Parts")

Add both to the same invoice.

### Can I have different rates for different clients?

Service templates store one default rate. Adjust the unit price on individual invoices when needed, or create separate services for different pricing tiers.

### How do I integrate time tracking with services?

Log time in Fiskl's time tracking feature and assign it to a service. When creating invoices, Fiskl can automatically generate line items from logged time.

### Can I create package services?

Yes. Create a service with a unit type of "project" or "package" and set a fixed price. Use the description to list what's included.

---

## Related Topics

- [Creating Products](/docs/products-services/creating-products.md) - Create product templates for tangible goods
- [Time Tracking](/docs/time-and-mileage/time-tracking.md) - Log billable hours for service invoicing
- [Creating Recurring Invoices](/docs/invoicing/create-recurring-invoices.md) - Use template services for automated billing
- [Managing Your Catalog](/docs/accounting/chart-of-accounts.md) - Organize and maintain your products and services