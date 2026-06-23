---
title: "Anleitung: Erstellen Sie Ihre erste Rechnung"
description: "Schritt-für-Schritt-Anleitung zum Erstellen und Versenden Ihrer ersten Rechnung in Fiskl."
keywords: ["invoice", "tutorial", "create invoice", "billing", "send invoice"]
sidebar_position: 99
sidebar_class_name: hidden

# AI Tutorial Metadata
document_type: tutorial
task: create-invoice
difficulty: beginner
estimated_time: "5 minutes"
app_url: https://app.fiskl.com/dashboard/invoices
prerequisites:
  - task: configure-invoice-settings
    label: "Invoice settings configured"
    check: "Have you set up your payment terms and payment methods in Settings > Invoice & Quote Settings?"
    resolve_url: /settings/invoice-quotes-settings
    resolve_tutorial: configure-invoice-settings
  - task: configure-template-brand
    label: "Invoice template configured"
    check: "Have you set up an invoice template with your logo and branding in Settings > Templates & Brands?"
    resolve_url: /settings/invoice-template-brands-settings
    resolve_tutorial: configure-template-brand
  - task: create-client
    label: "At least one client exists"
    check: "Do you have a client set up already, or do you need to create one?"
    resolve_url: /clients-vendors/clients
    resolve_tutorial: manage-clients
  - task: set-up-tax-rates
    label: "Tax rates configured (if applicable)"
    check: "Do you need to charge tax on your invoices? If so, have you set up your tax agencies and rates?"
    resolve_url: /settings/tax-settings
    resolve_tutorial: set-up-tax-rates
related_tutorials:
  - send-invoice
  - recurring-invoices
  - payment-schedules
  - configure-invoice-settings
  - configure-template-brand
---

# Anleitung: Erstellen Sie Ihre erste Rechnung

Diese Anleitung führt Sie durch das Erstellen und Versenden Ihrer ersten Rechnung in Fiskl. Am Ende werden Sie eine professionelle Rechnung gespeichert oder an Ihren Kunden versendet haben.

## PREREQUISITE_CHECK

Bevor Sie beginnen, bestätigen Sie Folgendes:

1. **Rechnungseinstellungen konfiguriert** — Zahlungsbedingungen, manuelle Zahlungsmethoden und Spracheinstellungen beeinflussen jede Rechnung, die Sie erstellen. Falls nicht eingerichtet, gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen**. Siehe [Rechnungs- und Angebotseinstellungen](/settings/invoice-quotes-settings).
   app_url: https://app.fiskl.com/dashboard/settings/invoices/invoice-quote-settings
2. **Rechnungsvorlage konfiguriert** — Ihre Vorlage steuert das Logo, die Farben, das Layout und die Anzeigeoptionen auf Rechnungen. Falls nicht eingerichtet, gehen Sie zu **Einstellungen** > **Vorlagen & Marken**. Siehe [Vorlagen und Marken](/settings/invoice-template-brands-settings).
   app_url: https://app.fiskl.com/dashboard/settings/invoices/templates
3. **Mindestens ein Kunde vorhanden** — Jede Rechnung erfordert einen Kunden. Sie können einen während der Rechnungserstellung erstellen, aber es ist zeitsparend, einen bereitzuhaben. Siehe [Kunden verwalten](/clients-vendors/clients).
4. **Steuersätze konfiguriert (falls zutreffend)** — Wenn Ihr Unternehmen Steuern erhebt, richten Sie Ihre Steuerbehörden und Sätze vor der Rechnungserstellung ein. Siehe [Steuereinstellungen](/settings/tax-settings).

:::warning
Falls Ihre Rechnungseinstellungen und Vorlage nicht zuerst konfiguriert werden, können Ihre Rechnungen falsche Zahlungsbedingungen, fehlende Logos oder keine Steuernummer anzeigen. Vervollständigen Sie diese Einstellungen vor der Erstellung Ihrer ersten Rechnung.
:::

## QUICK_PATH

app_url: https://app.fiskl.com/dashboard/invoices

Für erfahrene Benutzer, die eine Auffrischung benötigen:

1. Wählen Sie in der linken Seitenleiste **Rechnungen**
2. Wählen Sie **+ Neue Rechnung**
3. Wählen Sie einen Kunden aus oder fügen Sie einen hinzu
4. Legen Sie Rechnungsdatum und Fälligkeitsdatum fest
5. Wählen Sie **Posten hinzufügen** und geben Sie Beschreibung, Menge und Satz ein
6. Wenden Sie Steuern an, falls erforderlich
7. Wählen Sie **Speichern** (Entwurf) oder **Versenden** (E-Mail an Kunden)

## STEP_DETAIL

### Schritt 1: Öffnen Sie den Rechnungsbildschirm

app_url: https://app.fiskl.com/dashboard/invoices

Wählen Sie in der linken Seitenleiste **Rechnungen**. Sie sehen Ihre Rechnungsliste.

- Wählen Sie die Schaltfläche **+ Neue Rechnung** in der oberen rechten Ecke
- Ein leeres Rechnungsformular wird mit Ihren bereits eingetragenen Unternehmensdetails geöffnet

### Schritt 2: Wählen Sie Ihren Kunden

app_url: https://app.fiskl.com/dashboard/invoices/new

Jede Rechnung benötigt einen Kunden.

- Wählen Sie das Dropdown-Feld **Kunde** am oberen Rand des Formulars
- Wählen Sie einen bestehenden Kunden aus oder wählen Sie **Kunden hinzufügen**, um einen neuen zu erstellen
- Der Name des Kunden, die Adresse und die Standardwährung werden automatisch eingetragen

:::tip
Falls der Kunde eine Standardwährung hat, die sich von Ihrer Basiswährung unterscheidet, wechselt die Rechnung automatisch zu dieser Währung. Wählen Sie den Währungsnamen neben dem Gesamtbetrag, um ihn zu ändern.
:::

### Schritt 3: Legen Sie die Daten fest

Zwei Datumsfelder erscheinen unter dem Kunden.

- **Rechnungsdatum** ist standardmäßig auf heute eingestellt. Ändern Sie es bei Bedarf.
- **Fälligkeitsdatum** wird basierend auf Ihrer Zahlungsbedingungseinstellung festgelegt. Passen Sie es für diesen Kunden an, falls erforderlich.

### Schritt 4: Fügen Sie Positionen hinzu

Positionen sind die in Rechnung zu stellenden Zeilen auf Ihrer Rechnung.

- Wählen Sie **Posten hinzufügen**
- Wählen Sie den Positionstyp (am häufigsten: **Produkt** oder **Service**)
- Geben Sie Beschreibung, Menge und Satz ein
- Die Zeilensumme wird automatisch berechnet
- Fügen Sie weitere Positionen durch erneutes Wählen von **Posten hinzufügen** hinzu

### Schritt 5: Wenden Sie Steuern an

Falls Ihr Unternehmen Steuern erhebt, wenden Sie diese auf jede Position an.

- Wählen Sie das Steuerfeld auf einer Position
- Wählen Sie den korrekten Steuersatz aus dem Dropdown
- Fiskl berechnet den Steuerbetrag und aktualisiert die Rechnungssumme automatisch
- Um zwischen Steuer inklusive und Steuer exklusive Preisgestaltung zu wechseln, wählen Sie die Schaltfläche **+/-** neben dem Steuerfeld

### Schritt 6: Überprüfen und speichern oder versenden

Überprüfen Sie die Zwischensumme, Steuer und den Gesamtbetrag am unteren Ende der Rechnung.

- Wählen Sie **Speichern**, um die Rechnung als Entwurf zu speichern — Sie können sie später bearbeiten und versenden
- Wählen Sie **Versenden**, um die Rechnung sofort per E-Mail an Ihren Kunden zu versenden
- Ihr Kunde erhält eine E-Mail mit einem Link zum Online-Anzeigen und Bezahlen der Rechnung (falls eine Zahlungsmethode verbunden ist)

## COMMON_FAILURES

### Steuernummer wird auf der Rechnung nicht angezeigt

**Symptom:** Die Rechnung wird ohne Ihre Steuer- oder Mehrwertsteuernummer dargestellt, obwohl Steuern auf Positionen angewendet werden.

**Ursache:** Zwei separate Einstellungen steuern die Sichtbarkeit der Steuernummer. Beide müssen aktiviert sein.

**Lösung:**
1. Gehen Sie zu **Einstellungen** > **Steuereinstellungen** und bestätigen Sie, dass **Steuernummer auf Rechnungen anzeigen** ausgewählt ist
2. Gehen Sie zu **Einstellungen** > **Vorlagen & Marken** und bestätigen Sie, dass die Anzeigeoptionen für **Steuernummer** aktiviert sind
3. Bestätigen Sie, dass mindestens eine Position auf der Rechnung einen angewendeten Steuersatz hat

### Rechnungswährung ist falsch

**Symptom:** Die Rechnung zeigt eine andere Währung als erwartet an.

**Ursache:** Die Währung wird auf die Standardwährung des Kunden eingestellt. Falls das Kundenprofil eine andere Währung hat, wird Ihre Basiswährung überschrieben.

**Lösung:** Wählen Sie den Währungsnamen neben der Rechnungssumme und wählen Sie die korrekte Währung. Um die Standardwährung des Kunden dauerhaft zu ändern, gehen Sie zu **Kunden**, wählen Sie den Kunden und aktualisieren Sie seine Währungseinstellung.

### Kunde kann nicht online bezahlen

**Symptom:** Ihr Kunde sieht die Rechnung, aber es gibt keine Zahlungsschaltfläche.

**Ursache:** Kein Payment-Gateway ist verbunden oder das Gateway ist nicht für diese Rechnung aktiviert.

**Lösung:**
1. Gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen** und überprüfen Sie, ob **Payment-Gateways automatisch auswählen** aktiviert ist
2. Gehen Sie zu **Einstellungen** > **Zahlungsmethoden** und bestätigen Sie, dass ein Gateway (wie Stripe) verbunden und aktiv ist
3. Falls nur manuelle Zahlungsmethoden verwendet werden, bestätigen Sie, dass die Methode der Rechnung zugewiesen ist

### Rechnungsnummer ist nicht in Reihenfolge

**Symptom:** Die Rechnungsnummer folgt nicht der erwarteten Reihenfolge.

**Ursache:** Eine vorherige Rechnungsnummer wurde manuell bearbeitet. Fiskl verwendet die letzte Nummer als Basis für die automatische Inkrementierung.

**Lösung:** Erstellen Sie eine neue Rechnung und legen Sie die Nummer manuell auf den korrekten Wert fest. Alle nachfolgenden Rechnungen werden von diesem Punkt aus inkrementiert.

### Vorlage oder Logo wird nicht richtig angezeigt

**Symptom:** Die Rechnung zeigt Ihr Logo nicht an, verwendet die falschen Farben oder zeigt das Standard-Layout.

**Ursache:** Die Rechnung verwendet möglicherweise eine andere Vorlage oder die Vorlage wurde noch nicht konfiguriert.

**Lösung:**
1. Öffnen Sie die Rechnung im Bearbeitungsmodus und überprüfen Sie, welche Vorlage ausgewählt ist
2. Falls die falsche Vorlage zugewiesen ist, ändern Sie sie zu der richtigen
3. Falls keine Vorlage konfiguriert ist, gehen Sie zu **Einstellungen** > **Vorlagen & Marken** und richten Sie eine zuerst ein

## NEXT_STEPS

Nachdem Sie Ihre erste Rechnung erstellt haben, können Sie:

- **Die Rechnung versenden** — Falls Sie sie als Entwurf gespeichert haben, öffnen Sie sie und wählen Sie **Versenden**, um sie per E-Mail an Ihren Kunden zu versenden. Siehe [Rechnungen versenden](/invoicing/sending-invoices)
- **Wiederkehrende Rechnungen einrichten** — Falls Sie regelmäßig denselben Kunden abrechnen, automatisieren Sie es. Siehe [Wiederkehrende Rechnungen](/invoicing/create-recurring-invoices)
- **Zahlungspläne hinzufügen** — Teilen Sie eine einzelne Rechnung in Raten auf. Siehe [Rechnungszahlungspläne](/invoicing/invoice-payment-schedules)
- **Passen Sie Ihre Vorlage an** — Passen Sie Logo, Farben und Layout an. Siehe [Vorlagen und Marken](/settings/invoice-template-brands-settings)
