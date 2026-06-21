---
title: "Tutorial: Rechnungseinstellungen konfigurieren"
description: "Schritt-für-Schritt-Anleitung zum Einrichten von Rechnungszahlungsbedingungen, manuellen Zahlungsmethoden und Spracheinstellungen in Fiskl."
keywords: ["invoice settings", "payment terms", "manual payment methods", "language settings", "tutorial"]
sidebar_position: 99
sidebar_class_name: hidden

# AI Tutorial Metadata
document_type: tutorial
task: configure-invoice-settings
difficulty: beginner
estimated_time: "5 minutes"
prerequisites:
  - task: company-settings
    label: "Company details configured"
    check: "Have you set up your company name, address, and base currency in Settings > Company Settings?"
    resolve_url: /settings/company-settings
related_tutorials:
  - configure-template-brand
  - create-invoice
  - set-up-tax-rates
---

# Tutorial: Rechnungseinstellungen konfigurieren

Dieses Tutorial führt Sie durch die Einrichtung Ihrer Rechnungsvorgaben — Zahlungsbedingungen, manuelle Zahlungsmethoden und Spracheinstellungen. Am Ende werden Ihre Rechnungen die korrekten Bedingungen verwenden, Ihre bevorzugten Zahlungsoptionen anbieten und in der richtigen Sprache angezeigt.

## PREREQUISITE_CHECK

Bevor Sie beginnen, bestätigen Sie folgende Punkte:

1. **Unternehmensdetails konfiguriert** — Ihr Unternehmensname und Adresse erscheinen auf jeder Rechnung. Falls nicht eingerichtet, gehen Sie zu **Einstellungen** > **Unternehmenseinstellungen** und geben Sie Ihre Daten ein. Siehe [Unternehmenseinstellungen](/settings/company-settings)
   app_url: https://app.fiskl.com/dashboard/settings

:::warning
Wenn Ihre Unternehmensadresse unvollständig ist, wird sie auf allen Rechnungen falsch angezeigt. Vervollständigen Sie Ihre Unternehmenseinstellungen, bevor Sie die Rechnungseinstellungen konfigurieren.
:::

## QUICK_PATH

app_url: https://app.fiskl.com/dashboard/settings/invoices/invoice-quote-settings

Für erfahrene Benutzer, die eine Auffrischung benötigen:

1. Gehen Sie zu **Einstellungen** > **Rechnungen & Angebote Einstellungen**
2. Legen Sie die standardmäßigen Zahlungsbedingungen fest (Tage bis Fälligkeit)
3. Schalten Sie **Zahlungsgateways automatisch auswählen** ein oder aus
4. Fügen Sie bei Bedarf Standard-Rechnungsnotizen und Geschäftsbedingungen hinzu
5. Gehen Sie zu **Manuelle Zahlungsmethoden** und wählen Sie **+**, um eine Methode mit Anweisungen hinzuzufügen
6. Gehen Sie zu **Sprachen** und wählen Sie eine Primärsprache für Rechnungen und Angebote
7. Klonen und passen Sie optional eine Sprache für regionale Anforderungen an

## STEP_DETAIL

### Schritt 1: Rechnungs- und Angebotseinstellungen öffnen

app_url: https://app.fiskl.com/dashboard/settings/invoices/invoice-quote-settings

Sie müssen auf die Einstellungsseite zugreifen, auf der die Rechnungsvorgaben konfiguriert werden.

- Wählen Sie das **Zahnradsymbol** im Menü unten links
- Wählen Sie **Rechnungen & Angebote Einstellungen**
- Die Einstellungsseite wird mit allgemeinen Rechnungsoptionen geöffnet

### Schritt 2: Zahlungsbedingungen festlegen

Zahlungsbedingungen steuern das Standard-Fälligkeitsdatum auf jeder neuen Rechnung.

- Suchen Sie das Feld **Zahlungsbedingungen**
- Geben Sie die Anzahl der Tage zwischen dem Rechnungsdatum und dem Fälligkeitsdatum ein (Standard sind sieben Tage)
- Dies gilt für alle neuen Rechnungen — Sie können es auf einzelnen Rechnungen überschreiben

### Schritt 3: Automatische Auswahl von Zahlungsgateways konfigurieren

Diese Einstellung steuert, ob Zahlungsmethoden automatisch auf Rechnungen aktiviert werden.

- Suchen Sie den Schalter **Zahlungsgateways automatisch auswählen**
- Wenn aktiviert, wählt Fiskl automatisch alle Zahlungsmethoden aus, die mit dem Land, der Währung und dem Betrag der Rechnung kompatibel sind
- Wenn deaktiviert, wählen Sie manuell aus, welche Zahlungsmethoden auf jeder Rechnung angezeigt werden

:::tip
Wenn Sie mehrere Zahlungsgateways verbunden haben (z. B. Stripe und PayPal), stellt die Aktivierung der automatischen Auswahl sicher, dass Ihre Kunden immer jede verfügbare Option sehen.
:::

### Schritt 4: Standard-Rechnungsnotizen und Geschäftsbedingungen hinzufügen (optional)

Notizen und Bedingungen erscheinen am Ende jeder Rechnung. Verwenden Sie diese für Standard-Erinnerungen, Zahlungsanweisungen oder rechtliche Bedingungen.

- Suchen Sie die Felder **Rechnungsnotizen** und **Geschäftsbedingungen**
- Diese Felder werden standardmäßig im Anzeigemodus angezeigt — wählen Sie **Bearbeiten**, um in den Bearbeitungsmodus zu wechseln
- Geben Sie Ihren Standardtext ein (begrenzte HTML wird für grundlegende Formatierung wie Fett, Kursiv und Links unterstützt)
- Wählen Sie **Speichern**, um zur Ansicht zurückzukehren
- Diese Standardwerte erscheinen auf allen neuen Rechnungen, können aber einzeln überschrieben werden

### Schritt 5: Eine manuelle Zahlungsmethode hinzufügen

app_url: https://app.fiskl.com/dashboard/settings/invoices/invoice-manual-payment-methods

Manuelle Zahlungsmethoden geben Ihren Kunden Anweisungen zur Zahlung außerhalb von Online-Gateways, z. B. Banküberweisung oder Scheck.

- Wählen Sie **Manuelle Zahlungsmethoden** aus dem Einstellungsmenü
- Wählen Sie das **+**-Symbol, um eine neue Zahlungsmethode hinzuzufügen
- Geben Sie einen aussagekräftigen Namen ein, den Ihr Kunde auf der Rechnung sieht (z. B. „Banküberweisung — Chase ACH")
- Fügen Sie klare Anweisungen im Feld **Kundennotizen** hinzu
- Geben Sie relevante Details an: Kontonummer, Bankleitzahl, Bankname und ähnliche Informationen
- Wählen Sie **Speichern**

Ihr Kunde sieht eine Kopieren-in-Zwischenablage-Schaltfläche neben jedem Zahlungsdetail.

### Schritt 6: Primärsprache einstellen

app_url: https://app.fiskl.com/dashboard/settings/invoices/languages

Fiskl unterstützt über 60 Sprachen für Rechnungen, Angebote, E-Mails und kundenorientierte Bildschirme.

- Wählen Sie **Sprachen** aus dem Einstellungsmenü
- Wählen Sie die Standardsprache für alle neuen Rechnungen und Angebote
- Sie können die Sprache bei Bedarf auf einzelnen Rechnungen ändern

:::tip
Wenn Sie eine Sprache für eine bestimmte Region anpassen müssen, wählen Sie neben einer Basissprache **Klonen**. Bearbeiten Sie die Übersetzungen und speichern Sie Ihre benutzerdefinierte Version. Dies ist nützlich für regionale Dialekte oder zum Ändern von Begriffen wie „Kunde" auf Ihren Dokumenten.
:::

## COMMON_FAILURES

### Kunde kann Zahlungsanweisungen auf der Rechnung nicht sehen

**Symptom:** Der Kunde öffnet die Rechnung, sieht aber keine manuellen Zahlungsoptionen.

**Ursache:** Die manuelle Zahlungsmethode wurde erstellt, aber nicht der Rechnung zugewiesen, oder die automatische Auswahl ist deaktiviert und die Methode wurde nicht manuell ausgewählt.

**Lösung:**
1. Öffnen Sie die Rechnung im Bearbeitungsmodus
2. Überprüfen Sie den Abschnitt Zahlungsmethoden und bestätigen Sie, dass die manuelle Methode ausgewählt ist
3. Gehen Sie alternativ zu **Rechnungen & Angebote Einstellungen** und aktivieren Sie **Zahlungsgateways automatisch auswählen**

### Fälligkeitsdatum auf neuen Rechnungen ist falsch

**Symptom:** Neue Rechnungen zeigen ein Fälligkeitsdatum, das nicht Ihren erwarteten Bedingungen entspricht.

**Ursache:** Der Wert für Zahlungsbedingungen könnte geändert worden sein, oder das Rechnungsdatum ist anders als heute.

**Lösung:**
1. Gehen Sie zu **Einstellungen** > **Rechnungen & Angebote Einstellungen**
2. Überprüfen Sie den Wert **Zahlungsbedingungen** und passen Sie ihn bei Bedarf an
3. Überprüfen Sie auf der Rechnung, dass das Rechnungsdatum korrekt ist — das Fälligkeitsdatum wird von diesem Datum berechnet

### Sprache ändert sich nicht auf Rechnungen

**Symptom:** Sie haben die Primärsprache geändert, aber vorhandene Rechnungen zeigen immer noch die alte Sprache.

**Ursache:** Die Spracheinstellung gilt nur für neue Rechnungen. Vorhandene Rechnungen behalten die Sprache, in der sie erstellt wurden.

**Lösung:**
1. Öffnen Sie die vorhandene Rechnung im Bearbeitungsmodus
2. Ändern Sie die Sprache auf dieser spezifischen Rechnung
3. Wählen Sie **Speichern**, um die neue Sprache anzuwenden

### Benutzerdefinierter Sprachklon wird nicht angezeigt

**Symptom:** Nach dem Klonen einer Sprache wird die benutzerdefinierte Version nicht im Sprachen-Dropdown angezeigt.

**Ursache:** Die geklonte Sprache wurde möglicherweise nicht gespeichert, oder die Seite muss aktualisiert werden.

**Lösung:**
1. Gehen Sie zu **Rechnungen & Angebote Einstellungen** > **Sprachen**
2. Suchen Sie die geklonte Sprache in der Liste
3. Wenn sie fehlt, klonen Sie die Basissprache erneut und bestätigen Sie, dass Sie **Speichern** nach der Bearbeitung auswählen

### Name der Zahlungsmethode zu vage für Kunden

**Symptom:** Kunden kontaktieren Sie und fragen, wie sie bezahlen können, da der Name der Zahlungsmethode unklar ist.

**Ursache:** Der auf der Rechnung angezeigte Name der Zahlungsmethode ist nicht aussagekräftig genug.

**Lösung:**
1. Gehen Sie zu **Rechnungen & Angebote Einstellungen** > **Manuelle Zahlungsmethoden**
2. Wählen Sie die zu bearbeitende Zahlungsmethode
3. Ändern Sie den Namen zu etwas Spezifischem (z. B. „Banküberweisung — Barclays GBP" statt „Banküberweisung")
4. Wählen Sie **Speichern**

## NEXT_STEPS

Nachdem Sie Ihre Rechnungseinstellungen konfiguriert haben, können Sie:

- **Ihre Rechnungsvorlage einrichten** — Konfigurieren Sie das visuelle Erscheinungsbild Ihrer Rechnungen einschließlich Logo, Farben und Layout. Siehe [Vorlagen und Marken](/settings/invoice-template-brands-settings)
- **Ihre erste Rechnung erstellen** — Verwenden Sie Ihre neuen Einstellungen, um einen Kunden in Rechnung zu stellen. Siehe [Rechnungen erstellen](/invoicing/creating-invoices)
- **Steuersätze einrichten** — Konfigurieren Sie Steuerbehörden und Sätze für Rechnungen. Siehe [Steuereinstellungen](/settings/tax-settings)
- **Ein Zahlungsgateway verbinden** — Aktivieren Sie Online-Zahlungen über Stripe, PayPal oder GoCardless. Siehe [Zahlungsgateways](/integrations/payments/overview)
