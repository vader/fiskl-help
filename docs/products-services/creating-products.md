---
title: "Creating Products"
description: "Learn how to create and manage product templates in Fiskl for faster invoicing and accurate inventory tracking."
keywords: ["create product", "product template", "inventory", "pricing", "product catalog"]
sidebar_position: 2
---

# Creating Products

This guide explains how to create product templates in Fiskl that streamline your invoicing process and ensure consistent pricing across all transactions.

## What Are Products

Products are tangible items your business sells, such as physical goods, software licenses, or equipment. Each product template stores standard information like price, tax rate, and description that populates automatically when you add it to an invoice.

## Before You Begin

Ensure you have:
- The product name and pricing information
- The correct ledger account for revenue tracking (usually "Sales of Products")
- Tax rate information if applicable
- Any product images or specification documents

## Creating a New Product

**Steps:**

1. Go to **Products & Services** in the left sidebar
2. Select the **+ icon** or **New Product/Service**
3. Ensure the **Product** tab is selected (not Service)
4. Complete the required fields:

   **Name**
   Enter a clear, descriptive name your team will recognize.
   Example: "Pro Software License - Annual"

   **Unit**
   Choose the measurement unit for pricing.
   Common options: each, box, pallet, unit, license
   Example: "license"

   **Amount**
   Enter the unit price in your base currency.
   Example: 499.00

   **Account**
   Select the ledger account for revenue categorization.
   Most products use "Sales of Products"
   Choose a different account if needed for specialized reporting

   **Tax**
   Select the applicable tax rate or choose "Create new tax" if needed.
   Example: "Standard VAT (20%)" or "Tax Exempt"

5. Add optional details:

   **Description**
   Provide details about the product. This text appears on invoices.
   Example: "Annual subscription to Pro software suite including all features and updates"

   **Attachments**
   Upload product images, spec sheets, or documentation:
    - Drag and drop files onto the attachment area
    - Or select **Choose files** to browse your computer
    - Supported formats: PNG, JPG, PDF
    - Multiple files allowed

6. Select **Save**

The product appears in your catalog and is ready to add to invoices.

:::tip
Use descriptive names that distinguish similar products. "Software License - Pro Annual" is clearer than just "License" when you have multiple license types.
:::

## Creating Products Inline During Invoicing

You can create products on the fly while building invoices:

**Steps:**

1. While creating or editing an invoice, navigate to the line items section
2. Start typing a product name in the item field
3. If no matching product exists, press **Enter** or continue typing
4. A new line item appears with editable fields
5. Complete the fields (name, quantity, price, tax)
6. Select **Save** on the invoice

Fiskl automatically creates a product template from this inline entry. The product appears in your catalog for future use.

**When to use inline creation:**
- You need to invoice quickly for a one-time item
- You're selling something new and want to test pricing
- You'll standardize the details later

## Product Components Explained

### Name
The primary identifier in your catalog and on invoices. Make it specific enough to distinguish similar items but concise enough to read easily.

### Unit
Defines how the product is measured and sold. Choose units that match how you price and deliver:
- **each**: Individual items (most common)
- **box**: Bulk packaging
- **pallet**: Large quantity shipments
- **license**: Software or digital rights
- **unit**: Generic measurement

The unit label appears on invoices next to quantity.

### Amount
The standard selling price per unit. You can adjust this price on individual invoices without changing the template.

### Account
Links the product to your Chart of Accounts for financial reporting. Revenue from this product credits the selected account when invoices are paid.

Common accounts for products:
- Sales of Products (general merchandise)
- Software Revenue (digital products)
- Equipment Sales (machinery or tools)

### Tax
The default tax rate applied when adding this product to invoices. You can override the tax rate on individual invoices if needed.

### Description
Explains what the product is and what it includes. This text appears on invoices, so write it for client-facing clarity.

Good descriptions:
- Explain what's included
- Note any limitations or terms
- Keep it concise (1-3 sentences)

### Attachments
Store product-related files for reference or client sharing:
- Product photos
- Technical specifications
- User guides
- Warranty information

Attachments don't automatically appear on invoices but are available for reference.

## Using Products in Invoices

Once created, add products to invoices in three ways:

### Method 1: From the Products List

1. Go to **Products & Services**
2. Locate the product
3. Select the product row to open details
4. Select **Add to new invoice** or **Add to existing invoice**
5. Choose the target invoice if adding to existing
6. The product appears as a line item

### Method 2: From the Invoice

1. Open an invoice (new or existing)
2. Navigate to the line items section
3. Select **Add item** or start typing in the item field
4. Select the product from the dropdown list
5. The product populates with preset details
6. Adjust quantity as needed

### Method 3: Quick Search While Invoicing

1. While creating an invoice, type the product name in the item field
2. Matching products appear as you type
3. Select the product from suggestions
4. It populates automatically with preset details

## Adjusting Products on Invoices

When you add a product to an invoice, it becomes a line item you can customize:

**Adjustable fields:**
- **Quantity**: Change the number of units sold
- **Unit Price**: Override the default price for this transaction
- **Description**: Add transaction-specific notes
- **Tax**: Change the tax rate for this line item

**Important:** Changes to invoice line items don't affect the original product template. Future invoices still use the template's default values.

## Best Practices

**Use consistent naming:**
Develop a naming convention for related products.
Example: "Software - Pro Annual", "Software - Basic Monthly", "Software - Enterprise Annual"

**Set accurate default prices:**
Use your standard pricing as the template default. You can always adjust on specific invoices for discounts.

**Assign products to correct accounts:**
Choose ledger accounts carefully. This affects financial reports and tax categorization.

**Add detailed descriptions:**
Write descriptions that answer common client questions. This reduces follow-up inquiries.

**Upload relevant attachments:**
Include product images or spec sheets to help your team and clients understand what's being sold.

**Review pricing regularly:**
Update product templates when you change standard pricing. This keeps new invoices accurate.

**Create products before invoicing:**
Set up your catalog before busy invoicing periods. Last-minute inline creation works but isn't ideal for accuracy.

## Common Questions

### Can I change a product after using it on invoices?

Yes. Changes to the product template don't affect existing invoices. Only new invoices use the updated details.

### What happens if I delete a product?

Existing invoices containing that product remain unchanged. You can't add the deleted product to new invoices.

### Can I track inventory quantities?

Fiskl products focus on pricing and invoicing templates, not inventory stock levels. For inventory management, consider using dedicated inventory software that integrates with Fiskl.

### How do I handle product variations?

Create separate product templates for each variation (size, color, model). Use clear naming to distinguish them.
Example: "T-Shirt - Blue - Medium", "T-Shirt - Blue - Large"

### Can I have different prices for different clients?

Product templates store one default price. Adjust the unit price on individual invoices when needed, or create separate products for different pricing tiers.

---

## Related Topics

- [Managing Services](./managing-services) - Create service templates for intangible offerings
- [Creating Invoices](/docs/invoicing/creating-invoices.md) - Use products when building invoices
- [Managing Your Catalog](./managing-catalog.md) - Organize and maintain your products and services