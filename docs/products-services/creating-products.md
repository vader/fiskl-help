---
title: Creating Products
description: Learn how to create product templates in Fiskl to speed up
  invoicing and ensure consistent pricing across all your transactions.
sidebar_position: 1
---


This guide explains how to create product templates in Fiskl that store your standard pricing, tax rate, and description, so adding items to invoices is fast and consistent.



## Before you begin

Before creating a product, have the following ready:

- Product name and unit price
- The correct ledger account for revenue tracking (typically Sales of Products)
- The applicable tax rate

## Creating a new product from the catalog

1. Go to **Products & Services** in the left sidebar
2. Select **+ New Product/Service**
3. Select the **Product** tab if it is not already active
4. Complete the fields:
  - **Name** — Enter a clear, descriptive name. Example: "Pro Software License - Annual"
  - **Unit** — Enter the measurement unit. Common options include each, box, pallet, license, and unit
  - **Price/Rate** — Enter the unit price
  - **Currency** — Select the currency for this product
  - **Account** — Select the ledger account for revenue categorisation. Most products use Sales of Products
  - **Sales Tax** — Select the applicable tax rate or tax group
5. Optionally, enter a **Description** — this text appears on invoices, so write it with your client in mind
6. Select **Save Product/Service**

The product appears in your catalog and is ready to add to invoices.

:::tip
Use descriptive names that distinguish similar products. "Software License - Pro Annual" is clearer than "License" when you have multiple license types.
:::

## Dynamic name templates

When creating or editing a product, you can build a dynamic name that updates automatically on recurring invoices. Toggle on **Dynamic name templates for recurring invoices** to reveal the available tokens.

- **Date Templates** — insert Day, Month, Year, Date, Date Short, or Date Medium
- **Client Templates** — insert the Client Name

Select a token to insert it into the **Name** field. Use **+/-** to adjust date offsets for recurring items.

**Example:** You provide monthly maintenance to several clients. Create a product with the name `Website Maintenance - {Client Name} - {Month} {Year}`. Each time a recurring invoice generates, the name updates automatically — for example, "Website Maintenance - Acme Inc - July 2025".

:::info
Product type cannot be changed after creation. If you need to change a product to a service or vice versa, create a new entry with the correct type.
:::

## Creating products inline during invoicing

You can create a new product while building an invoice:

1. Open a new or existing invoice and go to the line items section
2. Select **Click to add**
3. Select **Add new**, then select **Product**
4. Enter a product name in the item field
5. Complete the fields — unit, price/rate, currency, and sales tax
6. Select **More Details** to set additional fields including **Account** and **Currency** (you can also adjust the exchange rate here)
7. Continue adding more items as needed, then select **Done**

Fiskl saves the entry as a product template in your catalog for future use.

## Product fields explained

### Name

The primary identifier in your catalog and on invoices. Make it specific enough to distinguish similar items, but concise enough to read at a glance.

### Unit

Defines how the product is measured and sold. The unit label appears on invoices next to the quantity. Common options include each, box, pallet, license, and unit.

### Price/Rate

The standard selling price per unit. You can adjust this price on individual invoices without changing the template.

### Currency

The currency in which this product is priced. When adding the product to an invoice, you can adjust the exchange rate from the **More Details** panel in the line item.

### Account

Links the product to a ledger account in your Chart of Accounts. Revenue from this product is assigned to the selected ledger account when invoices are paid. Common options include Sales of Products, Software Revenue, and Equipment Sales.

### Sales Tax

The default tax rate or tax group applied when you add this product to an invoice. You can override the rate on individual line items if needed.

:::tip
If your business is VAT-registered, always assign a sales tax to your products to ensure accurate tax reporting.
:::

### Description

Explains what the product includes. This text appears on invoices. Keep it to one to three sentences and note any relevant terms or limitations.

### Attachments

You can attach product-related files — such as photos, technical specifications, or warranty documents — from the **Attachments** panel on the right side of the invoice form. Select **Add files** to upload. A maximum of three files, up to 5MB each, are supported.

## Adding saved products to invoices

To add an existing product from your catalog to an invoice:

1. Open a new or existing invoice and go to the line items section
2. Select **Select Existing**
3. Select the product or products from the list
4. Select **Attach Selected**
5. Adjust the quantity as needed

## Editing a product on an invoice

When you add a product to an invoice, it becomes a line item you can edit for that transaction. In the line items section, select **Edit** on the line item and make your changes. Select **More Details** to update fields such as **Account** or **Currency**.

Changes to a line item do not affect the original product template. Future invoices continue to use the template's default values.

## Common issues

Can I use the same product in multiple currencies?

Each product template stores a single default currency. If you invoice clients in different currencies, you have two options. You can create separate product templates for each currency — for example, "Consulting Day - USD" and "Consulting Day - EUR". Alternatively, add the product to an invoice and select **More Details** on the line item to adjust the currency and exchange rate for that transaction without changing the template.



The wrong ledger account is assigned to a product

Go to **Products & Services**, open the product, and select **Edit**. Update the **Account** field to the correct ledger account and select **Save Product/Service**. Alternatively, in the invoice line item section, select **Edit**, then **More Details**, and update the account there. Changes to the template apply to new invoices only. Existing invoices are not affected.



## Related topics

- [Tracking Products](/inventory/tracking-products) — Track stock levels and costs on a product
- [Managing Services](/products-services/managing-services) — Create templates for intangible offerings
- [Managing Your Catalog](/products-services/managing-catalog) — Organise, edit, and maintain your products and services
- [Creating Invoices](/invoicing/creating-invoices) — Add products to invoices as line items
- [Tax Management](/settings/tax-management) — Configure the tax rates available in your product templates

