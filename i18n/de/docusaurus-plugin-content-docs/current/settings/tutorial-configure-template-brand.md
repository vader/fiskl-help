---
title: "Tutorial: Rechnungsvorlagen und Marken einrichten"
description: "Schrittweise Anleitung zum Erstellen und Anpassen von Rechnungsvorlagen und Marken in Fiskl."
keywords: ["invoice template", "brands", "custom emails", "logo", "template settings", "tutorial"]
sidebar_position: 99
sidebar_class_name: hidden

# AI Tutorial Metadata
document_type: tutorial
task: configure-template-brand
difficulty: intermediate
estimated_time: "10 minutes"
prerequisites:
  - task: company-settings
    label: "Company details configured"
    check: "Have you set up your company name, address, and logo in Settings > Company Settings?"
    resolve_url: /settings/company-settings
  - task: set-up-tax-rates
    label: "Tax rates configured (if applicable)"
    check: "Do you have tax rates set up? You need these if you want to display a tax ID on your invoices."
    resolve_url: /settings/tax-settings
related_tutorials:
  - configure-invoice-settings
  - create-invoice
  - send-invoice
---

# Anleitung: Rechnungsvorlagen und Marken einrichten

Diese Anleitung führt Sie durch die Erstellung einer Rechnungsvorlage mit Ihrem Branding — Logo, Farben, Schriftarten und Anzeigeeinstellungen. Sie erfahren auch, wie Sie benutzerdefinierte E-Mails einrichten und optional eine Marke mit überschriebenen Unternehmensdetails erstellen. Am Ende haben Sie eine professionelle Vorlage, die Sie auf Ihre Rechnungen und Angebote anwenden können.

## PREREQUISITE_CHECK

Bevor Sie beginnen, bestätigen Sie Folgendes:

1. **Unternehmensdetails konfiguriert** — Ihr Unternehmensname, Adresse und Logo werden als Standards auf jeder Vorlage verwendet. Falls nicht eingerichtet, gehen Sie zu **Einstellungen** > **Unternehmenseinstellungen**. Siehe [Unternehmenseinstellungen](/settings/company-settings)
   app_url: https://app.fiskl.com/dashboard/settings
2. **Steuersätze konfiguriert (falls zutreffend)** — Wenn Sie eine Steuernummer auf Ihren Rechnungen anzeigen möchten, müssen Sie zunächst eine Steuerbehörde und einen Steuersatz einrichten. Siehe [Steuereinstellungen](/settings/tax-settings)
   app_url: https://app.fiskl.com/dashboard/settings/taxes/agencies

:::warning
Das Bearbeiten einer bestehenden Vorlage ändert das Aussehen aller Rechnungen und Angebote, die diese Vorlage verwenden, einschließlich zuvor gesendeter Dokumente. Wenn Sie das Aussehen gesendeter Dokumente beibehalten möchten, erstellen Sie stattdessen eine neue Vorlage.
:::

## QUICK_PATH

app_url: https://app.fiskl.com/dashboard/settings/invoices/templates

Für erfahrene Benutzer, die eine Auffrischung benötigen:

1. Gehen Sie zu **Einstellungen** > **Vorlagen & Marken**
2. Wählen Sie **Neue Vorlage hinzufügen** oder wählen Sie eine bestehende Vorlage
3. Geben Sie einen Vorlagennamen ein und laden Sie Ihr Logo hoch
4. Wählen Sie ein Layout, passen Sie Farben an und wählen Sie eine Schriftart
5. Schalten Sie Anzeigeoptionen um (Steuernummer, Wechselkurse, Einheiten, Menge)
6. Fügen Sie optional Anhänge hinzu und passen Sie E-Mail-Inhalte an
7. Überschreiben Sie optional Unternehmensdetails, um eine Marke zu erstellen
8. Wählen Sie **Speichern**

## STEP_DETAIL

### Schritt 1: Öffnen Sie Vorlagen und Marken

app_url: https://app.fiskl.com/dashboard/settings/invoices/templates

Navigieren Sie zur Konfigurationsseite für Vorlagen.

- Wählen Sie das **Zahnradsymbol** im unteren linken Menü
- Wählen Sie **Vorlagen & Marken**
- Ihre bestehenden Vorlagen werden hier angezeigt, oder ein leerer Zustand, wenn dies Ihre erste ist

### Schritt 2: Erstellen Sie eine neue Vorlage

Starten Sie eine neue Vorlage, damit Sie diese von Grund auf konfigurieren können.

- Wählen Sie **Neue Vorlage hinzufügen**
- Ein Vorlagen-Editor wird mit einer Live-Vorschau auf der rechten Seite geöffnet
- Geben Sie einen aussagekräftigen Vorlagennamen ein (nur Sie sehen diesen, nicht Ihre Kunden)

### Schritt 3: Passen Sie das Aussehen Ihrer Vorlage an

Laden Sie Ihr Logo hoch, wählen Sie ein Layout, legen Sie Ihre Farben fest und wählen Sie eine Schriftart. Die Live-Vorschau auf der rechten Seite wird aktualisiert, während Sie Änderungen vornehmen.

- Im Bereich **Name & Header** laden Sie Ihr Unternehmenslogo hoch und passen Sie dessen Größe mit den verfügbaren Steuerelementen an
- Laden Sie optional ein separates E-Mail-Logo hoch (quadratisches Bild, maximal 100 KB, dargestellt bei 70×70 px)
- Im Bereich **Design und Farben** wählen Sie ein voreingestelltes Rechnungslayout und passen Sie einzelne Farbendemente an: Header, Text, Beschriftungen und Trennlinien
- Im Bereich **Schriftarten** wählen Sie eine der verfügbaren Schriftarten

:::tip
Laden Sie nach dem Ändern von Schriftarten eine Test-PDF herunter, um zu bestätigen, dass Ihr Text korrekt dargestellt wird. Nicht alle Schriftarten unterstützen nicht-lateinische Skripte wie Chinesisch, Kyrillisch oder Arabisch im PDF-Format.
:::

### Schritt 4: Konfigurieren Sie Anzeigeoptionen

Kontrollieren Sie, welche Details auf Ihren Rechnungen und Angeboten angezeigt werden.

- Im Bereich **Anzeigeoptionen** schalten Sie jede Option ein oder aus:
  - **Unternehmens-ID** — Ihre Geschäftsregistrierungsnummer
  - **Steuernummer** — Ihre Steuernummer oder Mehrwertsteuernummer (muss auch in [Steuereinstellungen](/settings/tax-settings) aktiviert sein)
  - **Wechselkurse** — Wechselkurse für mehrsprachige Positionen
  - **Einheiten** — Einheitenbezeichnungen auf Positionen
  - **Menge** — Mengenspalte auf Positionen
  - **Proforma-Label** — kennzeichnet die Rechnung als Proforma

:::tip
Wenn Ihre Steuernummer nicht auf Rechnungen angezeigt wird, überprüfen Sie diese Einstellung und die entsprechende Einstellung in **Steuereinstellungen**. Beide müssen aktiviert sein.
:::

### Schritt 5: Fügen Sie Anhänge und benutzerdefinierte E-Mails hinzu (optional)

Fügen Sie Dateien an und passen Sie die E-Mail-Nachrichten an, die mit Ihren Rechnungen und Angeboten versendet werden.

- Im Bereich **Anhänge** laden Sie alle Standarddokumente hoch (zum Beispiel Geschäftsbedingungen oder Zahlungsrichtlinien)
- Im Bereich **Benutzerdefinierte E-Mails** wählen Sie den E-Mail-Typ aus, den Sie anpassen möchten: Rechnung, Anzahlungsanfrage, Teilzahlung, Zahlungserinnerung oder Angebot
- Bearbeiten Sie den E-Mail-Text und verwenden Sie Platzhalter wie `[Company name]`, `[Total]` und `[Client name]` für dynamische Inhalte
- Benutzerdefinierte E-Mails sind Klartext ohne HTML-Formatierung

### Schritt 6: Erstellen Sie eine Marke (optional)

Wenn Sie mehrere Unternehmen oder Marken unter einem Fiskl-Konto betreiben, überschreiben Sie die Unternehmensdetails auf dieser Vorlage.

- Im Bereich **Markenüberschreibungen** geben Sie unterschiedliche Werte für Unternehmensname, E-Mail, Telefon, Adresse, Rechnungsname oder Angebotsname ein
- Die Vorschau wird in Echtzeit aktualisiert, während Sie Änderungen vornehmen
- Wenn Sie diese Vorlage einer Rechnung zuweisen, erscheinen die überschriebenen Details anstelle Ihrer Standard-Unternehmenseinstellungen

### Schritt 7: Speichern Sie Ihre Vorlage

Überprüfen Sie die Live-Vorschau, um zu bestätigen, dass alles korrekt aussieht.

- Wählen Sie **Speichern**
- Ihre Vorlage ist nun verfügbar, um sie beim Erstellen von Rechnungen und Angeboten auszuwählen

## COMMON_FAILURES

### Steuernummer wird auf Rechnungen nicht angezeigt

**Symptom:** Die Rechnung wird ohne Ihre Steuernummer oder Mehrwertsteuernummer dargestellt, obwohl Sie einen Steuersatz auf Positionen angewendet haben.

**Ursache:** Zwei separate Einstellungen steuern die Sichtbarkeit der Steuernummer. Beide müssen aktiviert sein: eine in den Steuereinstellungen und eine in den Anzeigeoptionen der Vorlage.

**Behebung:**
1. Gehen Sie zu **Einstellungen** > **Steuereinstellungen** und bestätigen Sie, dass **Steuernummer auf Rechnungen anzeigen** aktiviert ist
2. Gehen Sie zu **Einstellungen** > **Vorlagen & Marken**, öffnen Sie die Vorlage und bestätigen Sie, dass die AnzeigeOption **Steuernummer** aktiviert ist
3. Bestätigen Sie, dass mindestens eine Position auf der Rechnung einen Steuersatz hat

### Logo sieht verschwommen oder zu klein auf dem PDF aus

**Symptom:** Das Logo erscheint minderwertig oder winzig, wenn Sie die Rechnung als PDF herunterladen.

**Ursache:** Das hochgeladene Logo ist zu klein in Pixeldimensionen, oder die Größeneinstellung ist zu niedrig.

**Behebung:**
1. Laden Sie eine höher aufgelöste Version Ihres Logos hoch (mindestens 300 px Breite empfohlen)
2. Verwenden Sie die Größensteuerelemente, um die Logogröße im Vorlagen-Editor zu erhöhen
3. Laden Sie eine Test-PDF herunter, um das Ergebnis zu bestätigen

### Schriftart wird in PDF nicht dargestellt

**Symptom:** Zeichen erscheinen als Quadrate oder Fragezeichen in der heruntergeladenen PDF.

**Ursache:** Die ausgewählte Schriftart unterstützt nicht den Zeichensatz, der auf Ihrer Rechnung verwendet wird (zum Beispiel chinesische, kyrillische oder arabische Zeichen).

**Behebung:**
1. Öffnen Sie die Vorlage und wechseln Sie zu einer Schriftart, die Ihre Sprache unterstützt
2. Laden Sie eine Test-PDF herunter, um zu überprüfen

### Benutzerdefinierte E-Mail-Platzhalter funktionieren nicht

**Symptom:** Die E-Mail, die Ihr Kunde erhält, zeigt `[Company name]` oder `[Total]` als wörtlichen Text anstelle tatsächlicher Werte.

**Ursache:** Die Platzhaltersyntax ist falsch — sie muss genau übereinstimmen, einschließlich der eckigen Klammern und Abstände.

**Behebung:**
1. Gehen Sie zu **Vorlagen & Marken**, öffnen Sie die Vorlage und wählen Sie **Benutzerdefinierte E-Mails**
2. Überprüfen Sie den Platzhaltertext gegen die verfügbaren Optionen im Editor
3. Korrigieren Sie alle falsch geschriebenen oder falsch formatierten Platzhalter
4. Wählen Sie **Speichern** und senden Sie eine Test-Rechnung zur Überprüfung

### Vorlagenänderungen betrafen zuvor gesendete Rechnungen

**Symptom:** Ein Kunde meldet, dass eine Rechnung, die Sie früher gesendet haben, jetzt anders aussieht.

**Ursache:** Vorlagenänderungen gelten für alle Dokumente, die diese Vorlage verwenden, einschließlich gesendeter Rechnungen.

**Behebung:**
1. Erstellen Sie eine neue Vorlage für zukünftige Rechnungen
2. Weisen Sie die neue Vorlage neuen Rechnungen in Zukunft zu

## NEXT_STEPS

Jetzt, da Sie Ihre Vorlage eingerichtet haben, können Sie:

- **Rechnungseinstellungen konfigurieren** — Legen Sie Zahlungsbedingungen, manuelle Zahlungsmethoden und Spracheinstellungen fest. Siehe [Rechnungs- und Angebotseinstellungen](/settings/invoice-quotes-settings)
- **Erstellen Sie Ihre erste Rechnung** — Wenden Sie Ihre neue Vorlage bei der Rechnungsstellung an einen Kunden an. Siehe [Rechnungen erstellen](/invoicing/creating-invoices)
- **Rechnungen versenden** — E-Mail-Rechnungen an Kunden mit Ihrer markierten Vorlage. Siehe [Rechnungen versenden](/invoicing/sending-invoices)
- **Richten Sie wiederkehrende Rechnungen ein** — Automatisieren Sie regelmäßige Abrechnungen mit Ihrer Vorlage. Siehe [Wiederkehrende Rechnungen](/invoicing/create-recurring-invoices)
