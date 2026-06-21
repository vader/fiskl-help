---
title: "Vorlagen und Marken"
description: "Erstellen und verwalten Sie Rechnungs- und Angebotsvorlagen in Fiskl. Passen Sie Layouts, Farben und Schriftarten an, und richten Sie Marken für mehrere Geschäftsidentitäten unter einem Konto ein."
keywords: ["invoice template", "quote template", "brand override", "logo", "custom email", "invoice design", "Fiskl settings"]
sidebar_position: 3
tags:
  - Settings
  - Templates
  - Brands
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';


Diese Anleitung erklärt, wie Sie Vorlagen und Marken in Fiskl erstellen und verwalten. Vorlagen steuern das visuelle Erscheinungsbild Ihrer Rechnungen, Angebote und E-Mails, während Marken es Ihnen ermöglichen, verschiedene Geschäftsidentitäten unter einem Konto zu vertreten.


<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />


## Bevor Sie beginnen


Gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Vorlagen & Marken**, um diese Seite zu öffnen. Sie müssen angemeldet sein, um direkt im Web-Dashboard auf die [Seite mit Vorlageneinstellungen](https://app.fiskl.com/dashboard/settings/invoices/templates) zuzugreifen.


Halten Sie Folgendes bereit, bevor Sie eine Vorlage erstellen oder bearbeiten:


- Ihre Logo-Datei im PNG- oder SVG-Format (Mindestens 400 px breit für Rechnungslogos; quadratisches Bild unter 100 KB für E-Mail-Logos)
- Ihre Unternehmensregistrierungsnummer und Steuernummer, falls diese auf Dokumenten angezeigt werden sollen
- Ihre Steuerbehörden unter **Einstellungen** > **Steuerverwaltung** > **Steuerbehörden**, falls Sie eine Steuernummer anzeigen möchten
- Markendetails wie ein separater Unternehmensname, eine Adresse oder E-Mail, falls Sie mehrere Unternehmen unter einem Konto betreiben


:::warning
Das Ändern einer vorhandenen Vorlage wirkt sich auf alle Rechnungen und Angebote aus, die sie verwenden, einschließlich bereits gesendeter Dokumente. Erstellen Sie eine neue Vorlage, wenn Sie das Erscheinungsbild von bereits gesendeten Dokumenten beibehalten möchten.
:::


## Vorlagen


Eine Vorlage definiert den Stil und den Inhalt Ihrer Rechnungen, Angebote und E-Mails. Sie können mehrere Vorlagen erstellen und verschiedenen Rechnungen unterschiedliche Vorlagen zuweisen. Aktivieren Sie die Funktion **Angebot**, um Angebotsvorlagen zu erstellen.


### Vorlage erstellen oder bearbeiten


1. Wählen Sie **Neue Vorlage hinzufügen**, oder wählen Sie eine vorhandene Vorlage zum Bearbeiten
2. Konfigurieren Sie jeden Abschnitt wie unten beschrieben
3. Verwenden Sie die Live-Vorschau auf der rechten Seite, um Ihre Änderungen in Echtzeit zu sehen
4. Wählen Sie **Speichern**, wenn Sie fertig sind


### Name und Kopfzeile


Wählen Sie die Registerkarte **Allgemein**, um den Namen der Vorlage, das Logo und die Markenübersteuerungen zu konfigurieren.


1. Geben Sie einen aussagekräftigen Namen für die Vorlage ein – dieser ist nur für Sie sichtbar, nicht für Kunden
2. Laden Sie Ihr Logo für Rechnungen und Angebote hoch und passen Sie es an
3. Laden Sie ein separates E-Mail-Logo für Standard-E-Mails hoch (quadratisches Bild, maximal 100 KB, Rendering bei 70×70 px)


### Markenübersteuerungen


Eine Marke ist eine Vorlage mit übergesteuerten Unternehmensdetails. Dies ist nützlich, wenn Sie mehrere Unternehmen unter einem Fiskl-Konto betreiben. Sie können die folgenden Felder übersteuer:


- Unternehmensname
- E-Mail-Adresse
- Telefonnummer
- Adresse
- Rechnungsname
- Angebotsname


:::tip
Die Vorschau auf der rechten Seite wird in Echtzeit aktualisiert, wenn Sie Markenwerte ändern. Verwenden Sie sie, um das Layout zu überprüfen, besonders bei der Adresszeile.
:::


### Design und Farben


Wählen Sie die Registerkarte **Design**, um zu konfigurieren, wie Ihre Rechnungen aussehen. Sie können ein vordefiniertes Layout-Theme für Ihre Rechnungen und Angebote auswählen und Farben für einzelne Elemente wie Kopfzeile, Text, Beschriftungen und Trennlinien anpassen.


### Schriftarten


Wählen Sie aus verfügbaren Schriftarten für Ihre Dokumente. Nicht alle Schriftarten unterstützen nicht-lateinische Skripte wie Chinesisch, Kyrillisch oder Arabisch beim PDF-Generieren. Nach dem Ändern von Schriftarten laden Sie ein Test-PDF herunter, um zu bestätigen, dass Ihr Text korrekt gerendert wird.


### Anzeigeoptionen


Wählen Sie die Registerkarte **Anzeige**, um zu wählen, welche Unternehmensdetails und Zeileneinträge auf Rechnungen und Angeboten angezeigt werden, die an Kunden gesendet werden.


| Option | Was es auf Ihren Dokumenten anzeigt |
|---|---|
| **Unternehmens-ID** | Ihre Unternehmensregistrierungsnummer auf Rechnungen |
| **Steuernummer** | Ihre Steuernummer – muss auch unter **Einstellungen** > **Steuerverwaltung** > **Steuerbehörden** aktiviert sein |
| **FX-Standardwährung** | Umgerechnete Summen in Ihrer Basiswährung, angezeigt neben der Rechnungswährung für Rechnungen in Fremdwährung |
| **Einheiten** | Maßeinheit für jeden Zeileneintrag |
| **Menge** | Menge für jeden Zeileneintrag |
| **Proforma** | Ein Proforma-Label auf Rechnungen, um anzuzeigen, dass diese nicht endgültig sind |


### Anhänge


Fügen Sie Dateien an alle Rechnungen oder Angebote an, die diese Vorlage verwenden. Dies ist nützlich für Standarddokumente wie Geschäftsbedingungen oder Zahlungsrichtlinien.


### Benutzerdefinierte E-Mails


Erstellen Sie benutzerdefinierten E-Mail-Inhalt für verschiedene Szenarien:


- Rechnungs-E-Mails
- Anzahlungsanforderungs-E-Mails
- Teilzahlungsbestätigungs-E-Mails
- Mahnungs-E-Mails für überfällige Rechnungen
- Angebots-E-Mails


Verwenden Sie die bereitgestellten Platzhalter für dynamische Inhalte wie `[Company name]`, `[Total]` und `[Client name]`. Diese werden beim Versand der E-Mail durch die tatsächlichen Werte ersetzt.


:::info
Benutzerdefinierte E-Mails sind Klartext ohne HTML-Formatierung. Das in der Sektion **Name und Kopfzeile** hochgeladene E-Mail-Logo ist nur für Standard-E-Mails verfügbar, nicht für benutzerdefinierte E-Mails.
:::


## Häufig auftretende Probleme


<details>
<summary>Meine Steuernummer wird auf Rechnungen nicht angezeigt, obwohl sie aktiviert ist</summary>

Die Anzeigeoptionen für die Steuernummer in der Vorlage erfordern, dass die Steuernummer auch auf Behördenebeneneebene aktiviert ist. Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuerbehörden** und öffnen Sie die entsprechende Behörde. Bestätigen Sie, dass das Feld Steuernummer ausgefüllt und sichtbar ist. Sobald beide Einstellungen aktiv sind, wird die Steuernummer auf neuen und vorhandenen Rechnungen angezeigt, die diese Vorlage verwenden.

</details>


<details>
<summary>Rechnungen in Fremdwährung zeigen die umgerechnete Summe nicht an</summary>

Aktivieren Sie **FX-Standardwährung** auf der Registerkarte **Anzeige** der Vorlage. Diese Option zeigt die umgerechnete Summe in Ihrer Basiswährung neben der Rechnungswährung. Wenn der Schieberegler aktiviert ist, aber die umgerechnete Summe immer noch nicht angezeigt wird, bestätigen Sie, dass die Rechnung eine andere Währung als Ihre Basiswährung verwendet. Das Feld wird nur gerendert, wenn eine Umrechnung erforderlich ist.

</details>


<details>
<summary>Meine benutzerdefinierten E-Mail-Platzhalter werden als Literaltext anstelle von Werten angezeigt</summary>

Überprüfen Sie, dass Sie das genaue Platzhalterformat verwenden, das im Editor angezeigt wird, einschließlich der eckigen Klammern – zum Beispiel `[Client name]` und nicht `{Client name}` oder `(Client name)`. Platzhalter beachten die Groß- und Kleinschreibung. Kopieren Sie sie direkt aus der Platzhalter-Liste im Editor, um Tippfehler zu vermeiden.

</details>


## Verwandte Themen


- [Rechnungs- und Angebotseinstellungen](/settings/invoice-quotes-settings) – Konfigurieren Sie Zahlungsbedingungen, manuelle Zahlungsmethoden, Sprachen und E-Mail-Versand
- [Steuereinstellungen](/settings/tax-settings) – Richten Sie Steuerbehörden und Sätze ein, die auf Ihren Rechnungen angezeigt werden
- [Rechnungen erstellen](/invoicing/creating-invoices) – Wenden Sie Vorlagen beim Erstellen von Rechnungen an
- [Unternehmenseinstellungen](/settings/company-settings) – Legen Sie die Standardunternehmensdetails fest, die auf Vorlagen angezeigt werden
