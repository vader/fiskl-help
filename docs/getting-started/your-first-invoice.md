---
title: "Creating Your First Invoice"
description: "Complete guide to creating your first professional invoice in Fiskl, including tax setup, template customization, language settings, and email configuration."
keywords: ["first invoice", "create invoice", "invoice setup", "invoice template", "tax settings", "invoice language", "email templates", "invoice branding"]
sidebar_position: 5
---

This guide explains how to create your first invoice in Fiskl and helps you configure essential settings for professional, tax-compliant invoicing.

## Before You Create Your First Invoice

Setting up key configurations before creating your first invoice ensures accuracy and professionalism. Complete these setup steps to avoid editing invoices later.

**Essential setup checklist:**
- [ ] Configure tax settings (if charging tax)
- [ ] Set up company information and branding
- [ ] Customize invoice templates
- [ ] Configure language settings (if invoicing in different languages)
- [ ] Set up email templates

These settings take 10-15 minutes to complete but streamline all future invoicing.

## Step 1: Configure Tax Management

If you charge tax on products or services, configure tax settings before creating invoices.

### Set Up Your Tax Authority

1. Go to **Settings** > **Taxes**
2. Select **Add Tax ID**
3. Enter your tax authority details:
   - Tax authority name (e.g., "VAT UK", "Sales Tax CA")
   - Tax identification number
   - Tax type (Sales Tax, VAT, GST, etc.)
4. Select **Save**

Fiskl automatically creates a corresponding ledger account in your Chart of Accounts for this tax.

### Add Tax Rates

Configure the specific tax rates you charge:

1. In **Tax Management**, go to the **Single Taxes** section
2. Select **Add Tax**
3. Configure the tax:
   - Tax name (e.g., "Standard VAT 20%")
   - Tax rate percentage
   - Assign to your tax authority (Tax ID)
   - Mark as Sales Tax or Non-Sales Tax
4. Select **Save**

**Multiple tax rates example:**
- Standard rate: 20%
- Reduced rate: 5%
- Zero rate: 0%

### Set Default Tax Rates

Configure default taxes that apply automatically to new invoices:

1. In **Tax Management**, find your primary tax rate
2. Mark it as the default for sales
3. Select **Save**

This tax applies automatically to all line items unless you specify otherwise.

**Learn more:** [Tax Management](/settings/tax-management.md)

## Step 2: Set Up Company Information and Branding

Your company information appears on every invoice. Configure it once for consistent branding.

### Add Company Details

1. Go to **Settings** > **Company**
2. Complete your company information:
   - Legal business name
   - Business address
   - Phone number
   - Email address
   - Website
   - Business registration number
3. Upload your company logo
4. Select **Save**

### Configure Invoice Templates and Brands

Templates control the appearance and content of your invoices.

1. Go to **Settings** > **Templates and Brands**
2. Select **Add New Template** or edit the default template
3. Customize the template:

**Name & Header:**
- Template name (internal use only)
- Upload your logo (appears on invoices)
- Adjust logo size
- Upload email logo (square, 100KB max, displays at 70x70px)

**Brand Overrides:**

If you operate multiple brands under one entity, override company details:
- Company name
- Address
- Contact information
- Logo

This creates separate branded invoices without multiple accounts.

**Colors & Fonts:**
- Select brand colors for headers and accents
- Customize font styles
- Preview changes in real time

**Invoice Layout:**
- Select layout style (Classic, Modern, Minimal)
- Select which fields to display
- Adjust spacing and formatting

**Learn more:** [Invoice Templates](/settings/invoice-template-brands-settings.md)

## Step 3: Configure Language Settings

If you invoice clients in multiple languages, configure language settings before creating invoices.

### Set Your Default Language

1. Go to **Settings** > **Invoice and Quote Settings**
2. Under **Language Settings**, select your primary language
3. Select **Save**

All new invoices use this language by default. You can change the language for individual invoices when needed.

**Supported features:**
- Over 60 languages available
- Invoice and quote translations
- Email template translations
- Client-facing payment screens
- Payment schedule interfaces

### Customize Language Translations (Optional)

Create custom language versions for regional dialects or specific terminology:

1. In **Language Settings**, select **Clone Language**
2. Select the base language to customize
3. Edit translations:
   - Change terminology to suit your business
   - Adapt regional dialects
   - Customize field labels
4. Save your custom language

Your custom language appears in the language selector when creating invoices.

**Learn more:** [Invoice and Quote Settings](/settings/invoice-quotes-settings)

## Step 4: Configure Email Templates

Fiskl sends email notifications for invoices, reminders, and overdue notices. Configure your email strategy before sending invoices.

### Select Your Email Strategy

Fiskl offers two email approaches:

**Option 1: Fiskl HTML Email Templates (Recommended)**

Pre-designed, translated HTML emails that automatically match your invoice language.

**Benefits:**
- Professional HTML formatting
- Automatic translation to invoice language
- Consistent branding
- Includes dynamic placeholders
- Works for invoices, reminders, overdue notices, and recurring invoices

**Option 2: Custom Email Text**

Write your own email content with full control over wording.

**Benefits:**
- Complete customization
- Your specific tone and voice
- Custom messaging per scenario
- Still includes dynamic placeholders

### Configure Email Templates

1. Go to **Settings** > **Templates and Brands**
2. Select your template
3. Scroll to **Email Settings**
4. Select your email strategy:
   - **Use Fiskl templates** - Select this for translated HTML emails
   - **Use custom text** - Select this to write your own

**If using custom email text:**

1. Configure emails for each scenario:
   - New invoice email
   - Payment reminder email
   - Overdue notice email
   - Recurring invoice email
2. Write your email content
3. Use placeholders for dynamic information

### Email Placeholders

Placeholders automatically populate with invoice data:

**Common placeholders:**
- `{invoice_number}` - Invoice number
- `{invoice_date}` - Invoice date
- `{due_date}` - Payment due date
- `{client_name}` - Client name
- `{company_name}` - Your company name
- `{invoice_total}` - Total amount
- `{invoice_link}` - Link to view invoice online

**Example custom email:**

```
Subject: Invoice {invoice_number} from {company_name}

Dear {client_name},

Thank you for your business. Please find invoice {invoice_number}
for {invoice_total} attached.

Payment is due by {due_date}.

View and pay online: {invoice_link}

Best regards,
{company_name}
```

The placeholders work across all email types, ensuring consistency.

## Step 5: Create Your First Invoice

Now that settings are configured, create your first invoice.

### Start a New Invoice

1. Go to **Invoices** in the left navigation
2. Select **New Invoice**
3. The invoice creation screen opens

### Add Client Information

**If the client exists:**
1. Select the client from the **Client** dropdown
2. Their details populate automatically

**If this is a new client:**
1. Select **Add New Client**
2. Enter client details:
   - Client name
   - Email address
   - Billing address
   - Phone number (optional)
3. Select **Save**

### Set Invoice Details

Configure the invoice parameters:

**Invoice number:**
- Auto-generated based on your sequence
- Editable if needed

**Invoice date:**
- Defaults to today
- Change if issuing for a different date

**Due date:**
- Set payment deadline
- Uses your default payment terms

**Language:**
- Defaults to your primary language
- Change for this specific invoice if needed

**Template:**
- Select which template to use
- Change if using multiple templates/brands

### Add Line Items

Add products or services to your invoice:

1. Select **Add Line Item**
2. Enter line item details:
   - Description (product or service name)
   - Quantity
   - Unit price
   - Tax rate (defaults to your primary tax rate)
3. The amount calculates automatically

**Add more line items:**
- Select **Add Line Item** for each product or service
- Fiskl calculates subtotals and totals automatically

**Product library:**

If you have products or services saved:
1. Select **Select from library**
2. Select the product
3. Details populate automatically

### Apply Discounts (Optional)

Add discounts to line items or the entire invoice:

**Line item discount:**
1. Select the line item
2. Enter discount percentage or amount
3. The line calculates the discounted price

**Invoice-level discount:**
1. Scroll to the invoice total section
2. Enter discount percentage or amount
3. The total updates automatically

### Add Notes and Terms (Optional)

**Invoice notes:**
- Add notes visible to the client
- Include project details or special instructions

**Payment terms:**
- Add payment terms and conditions
- Include late payment policies

### Review Tax Calculation

Before finalizing, verify tax calculation:

1. Check that tax applies to appropriate line items
2. Verify the tax rate is correct
3. Review the tax amount in the total
4. Confirm the final amount including tax

If tax doesn't calculate correctly, check your tax settings and line item tax assignments.

## Step 6: Preview and Send Your Invoice

### Preview the Invoice

1. Select **Preview**
2. Review the invoice as your client will see it
3. Check all details:
   - Client information correct
   - Line items accurate
   - Tax calculated properly
   - Totals correct
   - Branding looks professional

### Save or Send

**Option 1: Save as Draft**

If you need to finish later:
1. Select **Save as Draft**
2. The invoice saves for later editing
3. Find it in **Invoices** with Draft status

**Option 2: Send to Client**

When ready to send:
1. Select **Send Invoice**
2. Review the email preview
3. Edit the email message if needed (if using custom emails)
4. Select **Send**

The client receives the invoice via email with a link to view and pay online.

**Option 3: Download PDF**

To send manually or print:
1. Select **Download PDF**
2. The invoice downloads as a PDF file
3. Attach to your own email or print

## After Sending Your Invoice

### Track Invoice Status

Monitor your invoice in the **Invoices** section:

**Status indicators:**
- **Draft** - Not sent yet
- **Sent** - Sent to client, awaiting payment
- **Viewed** - Client opened the invoice
- **Partially Paid** - Partial payment received
- **Paid** - Fully paid
- **Overdue** - Past due date, unpaid

### Record Payments

When a client pays:

1. Go to **Invoices**
2. Select the invoice
3. Select **Record Payment**
4. Enter payment details:
   - Payment amount
   - Payment date
   - Payment method
   - Bank account (where funds were received)
5. Select **Save**

The invoice status updates to Paid and the transaction records in your accounting.

### Send Reminders

If an invoice is unpaid:

1. Select the invoice
2. Select **Send Reminder**
3. Select reminder type:
   - Friendly reminder (before due date)
   - Payment due reminder (near due date)
   - Overdue notice (after due date)
4. Review the email preview
5. Select **Send**

Reminder emails use the templates you configured earlier.

## Common Invoice Scenarios

### Invoicing in Multiple Currencies

If your client uses a different currency:

1. When creating the invoice, select the currency dropdown
2. Select the client's currency
3. Enter amounts in that currency
4. Fiskl converts to your base currency for reporting

Exchange rates update automatically.

### Recurring Invoices

For repeat clients with regular billing:

1. Create the first invoice as normal
2. Select **Make Recurring**
3. Configure the schedule:
   - Frequency (weekly, monthly, yearly)
   - Start date
   - End date or number of occurrences
4. Select **Save**

Fiskl generates and sends invoices automatically based on the schedule.

### Progress Invoicing

For project-based work with milestones:

1. Create the first invoice for the initial milestone
2. Mark it as partial invoice
3. Enter the percentage or amount
4. Create subsequent invoices referencing the original
5. Fiskl tracks total billed vs. project value

## Best Practices for Invoicing

### Before Creating Invoices

- [ ] Complete all setup configurations
- [ ] Test with a sample invoice to yourself
- [ ] Verify tax calculations are accurate
- [ ] Confirm email templates display correctly
- [ ] Check that branding matches your identity

### When Creating Invoices

- [ ] Use clear, detailed line item descriptions
- [ ] Include project or purchase order numbers in notes
- [ ] Set realistic due dates (typically Net 30)
- [ ] Double-check client email addresses
- [ ] Preview before sending

### After Sending Invoices

- [ ] Monitor invoice status regularly
- [ ] Send reminders for upcoming due dates
- [ ] Follow up promptly on overdue invoices
- [ ] Record payments as soon as received
- [ ] Reconcile invoice payments with bank transactions

### For Professional Results

- [ ] Use consistent templates across all invoices
- [ ] Include complete payment instructions
- [ ] Add your logo and branding
- [ ] Provide multiple payment methods
- [ ] Send thank you notes when payments are received

## Troubleshooting Common Issues

### Tax Not Calculating Correctly

**Cause:** Tax settings not configured or line items missing tax assignment

**Solution:**
1. Verify tax rates are set up in **Settings** > **Taxes**
2. Check that tax is assigned to line items
3. Confirm default tax rate is configured
4. Review tax-exempt items are marked correctly

### Email Not Sending

**Cause:** Client email address incorrect or email delivery issues

**Solution:**
1. Verify client email address is correct
2. Check your email sending limits
3. Ask client to check spam folder
4. Use **Resend Invoice** to try again
5. Download PDF and send manually if issues persist

### Invoice Number Sequence Wrong

**Cause:** Manual numbering or sequence configuration

**Solution:**
1. Go to **Settings** > **Invoice and Quote Settings**
2. Check invoice number sequence settings
3. Adjust the next invoice number if needed
4. Consider using automatic sequential numbering

### Template Not Displaying Correctly

**Cause:** Logo size issues or template customization errors

**Solution:**
1. Check logo dimensions (recommended max 800px wide)
2. Verify template settings saved correctly
3. Clear browser cache and preview again
4. Try a different template to isolate the issue

### Client Can't View Invoice Online

**Cause:** Email link issues or browser compatibility

**Solution:**
1. Resend the invoice email
2. Ask client to check spam folder
3. Download PDF and send directly
4. Verify invoice isn't in draft status

## Next Steps

After creating your first invoice, explore these features:

**Automate invoicing:**
- Set up recurring invoices for repeat clients
- Enable automatic payment reminders
- Connect payment gateways for instant payments

**Track performance:**
- Review invoice aging reports
- Monitor average time to payment
- Analyze revenue by client

**Expand capabilities:**
- Create professional quotes
- Set up retainer invoicing
- Enable online deposits and partial payments

:::tip
Create invoice templates for your most common services or products. This speeds up invoice creation and ensures consistency across all client communications.
:::

## Need More Help?

**Configure tax settings:** [Tax Management](/settings/tax-management.md)

**Customize templates and branding:** [Invoice Templates](/settings/invoice-template-brands-settings.md)

**Adjust language and payment options:** [Invoice and Quote Settings](/settings/invoice-quotes-settings.md)

[//]: # (**Manage invoices:** [Invoice Management]&#40;/invoicing/invoice-management.md&#41;)

**Contact support:** [Get Support](/support/overview.md)