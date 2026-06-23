---
title: "Kundenalterungsbericht"
description: "Verfolgen Sie ausstehende Kundensalden und verwalten Sie Forderungen mit dem Fiskl-Fälligkeitsbericht für Kunden. Passen Sie Zeiträume an, filtern Sie nach Kunde und exportieren Sie."
keywords: ["client aging report", "accounts receivable", "outstanding transactions", "cash flow", "collections"]
sidebar_position: 15
tags:
  - Reporting
  - Accounts Receivable
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erläutert die Verwendung des Fälligkeitsberichts für Kunden in Fiskl zur Verfolgung ausstehender Kundenguthaben und zur Verwaltung Ihrer Forderungen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

<details>
<summary>Warum den Fälligkeitsbericht für Kunden verwenden?</summary>

Der Fälligkeitsbericht für Kunden hilft Ihnen:

- Alle ausstehenden Kundentransaktionen auf einen Blick zu sehen
- Langsame Zahler oder potenzielle Forderungsausfälle zu identifizieren
- Den Kapitalfluss effektiver zu verwalten und zu prognostizieren
- Zu priorisieren, welche Transaktionen sofortige Maßnahmen erfordern
- Fundierte Entscheidungen über Kreditrichtlinien für Kunden zu treffen

</details>

## Bevor Sie beginnen

- Rechnungen erzeugen einen Forderungseintrag, wenn sie versendet werden. Entwurfsrechnungen werden nicht im Bericht angezeigt.
- Um nach einem bestimmten Kunden zu filtern, stellen Sie sicher, dass dieser Kunde in Fiskl hinzugefügt wurde. Siehe [Kunden verwalten](/clients-vendors/clients).

## Was der Fälligkeitsbericht für Kunden zeigt

Der Fälligkeitsbericht für Kunden zeigt alle ausstehenden Forderungstransaktionen und wie lange jede unbezahlt ist. Verwenden Sie ihn, um den Kapitalfluss zu überwachen, Inkassoprobleme frühzeitig zu erkennen und zu priorisieren, welche Transaktionen eine Nachverfolgung erfordern.

Der Bericht organisiert ausstehende Salden in konfigurierbare Zeiträume – beispielsweise ein Monat, zwei Monate, drei Monate. Transaktionen, die älter als Ihr letzter definierter Zeitraum sind, erscheinen in einer finalen Spalte **Älter**, damit nichts übersehen wird.

## Bericht erstellen

1. Wählen Sie **Buchhaltung** im linken Menü.
2. Wählen Sie **Berichte**.
3. Wählen Sie **Fälligkeitsbericht für Kunden** aus der Berichtsliste.
4. Wählen Sie **Filter & Einstellungen**, um das Einstellungsfenster zu öffnen.
5. Konfigurieren Sie Ihre Berichteinstellungen (siehe [Berichteinstellungen](#berichteinstellungen) unten).
6. Der Bericht aktualisiert sich automatisch, wenn Sie die Einstellungen anpassen.

## Berichteinstellungen

Das Einstellungsfenster hat zwei Abschnitte: **Berichtdateneinstellungen** und **Anzeigeoptionen**.

### Berichtdateneinstellungen

- **Stichtag** — Legen Sie das Datum fest, auf das sich der Bericht bezieht. Wählen Sie eine Voreinstellung aus dem Dropdown oder geben Sie ein benutzerdefiniertes Datum ein. Verfügbare Voreinstellungen sind **Heute**, **Diese Woche bis heute**, **Dieser Monat**, **Dieser Monat bis heute** und **Dieses Quartal**. Voreinstellungen werden auf den letzten Tag des ausgewählten Zeitraums gesetzt – beispielsweise setzt **Dieser Monat** den Stichtag auf den 31. Mai.
- **Kunden** — Wählen Sie einen bestimmten Kunden oder lassen Sie das Feld leer, um alle Kunden einzubeziehen.
- **Zeitraum** — Steuert die Größe jeder überfälligen Spalte. **Monat** erstellt monatliche Spalten, **Woche** bietet eine detailliertere Ansicht und **Quartal** eine breitere.
- **Anzahl der Zeiträume** — Steuert, wie viele überfällige Spalten angezeigt werden. Bei **Zeitraum** auf **Monat** und **Anzahl der Zeiträume** auf **4** zeigt der Bericht vier Spalten: 1 Monat, 2 Monate, 3 Monate und 4 Monate überfällig. Alles Ältere erscheint automatisch in der Spalte **Älter**.

### Anzeigeoptionen

- **Durch 1.000 teilen** — Aktivieren Sie diese Option, um große Beträge durch 1.000 geteilt anzuzeigen, um die Lesbarkeit zu verbessern.
- **Originalwährung anzeigen** — Aktivieren Sie diese Option, um Transaktionsbeträge in ihrer Originalwährung neben Ihrer Basiswährung anzuzeigen.
- **Kompakt** — Aktivieren Sie diese Option, um das Berichtlayout zu verdichten.

:::tip
Stellen Sie **Zeitraum** auf **Monat** und **Anzahl der Zeiträume** auf Ihre Standardzahlungsbedingungen ein. Verwenden Sie beispielsweise drei Zeiträume für 90-Tage-Bedingungen. Dies richtet die Spalten nach Ihren Bedingungen aus und macht überfällige Transaktionen leichter identifizierbar.
:::

## Berichtansichten verstehen

### Zusammenfassungsansicht

Die Zusammenfassungsansicht zeigt eine Zeile pro Kunde mit ihrem Gesamtforderungssaldo über datumbasierte Spalten.

| Spalte | Beschreibung |
|---|---|
| **Kunde** | Kundenname |
| **Datumspalten** | Ausstehende Beträge nach Zeitraum. Spaltenüberschriften basieren auf Ihren Einstellungen **Zeitraum** und **Anzahl der Zeiträume** – beispielsweise Mai 2026, Apr 2026, Mär 2026, Feb 2026 |
| **Älter** | Transaktionen über Ihre letzte Datumspalte hinaus |
| **Gesamt** | Gesamtforderungssaldo für diesen Kunden |

### Detaillierte Ansicht

Die detaillierte Ansicht zeigt eine Zeile pro Transaktion, sodass Sie genau sehen können, woraus sich der Saldo eines Kunden zusammensetzt.

| Spalte | Beschreibung |
|---|---|
| **Kunde** | Kundenname |
| **Typ** | Transaktionstyp (z. B. Rechnung) |
| **Name** | Transaktionsnummer und -name |
| **Datum** | Datum, an dem die Transaktion ausgestellt wurde |
| **Datumspalten** | Der Zeitraum, in den der ausstehende Betrag fällt, basierend auf Ihren Einstellungen **Zeitraum** und **Anzahl der Zeiträume** |
| **Älter** | Transaktionen über Ihre letzte Datumspalte hinaus |
| **Gesamt** | Gesamtforderungssaldo für diesen Kunden über alle Transaktionen |

## Notizen hinzufügen

Wählen Sie **Notizen** in der unteren linken Ecke des Berichts, um Notizen zu Ihrem Bericht hinzuzufügen. Notizen erscheinen in den Zusammenfassungs- und detaillierten Ansichten und werden beim Export einbezogen.

## Bericht exportieren

1. Wählen Sie das Exportsymbol in der oberen rechten Ecke des Berichts.
2. Wählen Sie **Google Sheets**, **Excel** oder **CSV** als Exportformat.

Die exportierte Datei enthält alle Zeilen und Spalten aus dem Bericht.

:::info
Mit dem Export können Sie Fälligkeitsdaten mit anderen Finanzberichten kombinieren oder benutzerdefinierte Diagramme für Präsentationen erstellen.
:::

## Bericht analysieren

Verwenden Sie diese Strategien, um das Beste aus Ihrem Fälligkeitsbericht für Kunden herauszuholen:

- **Zahlungsmuster identifizieren** — Beachten Sie, welche Kunden konstant pünktlich zahlen und welche tendenziell verzögern.
- **Potenzielle Probleme erkennen** — Achten Sie besonders auf Transaktionen, die in ältere Spalten wandern.
- **Inkassobemühungen priorisieren** — Konzentrieren Sie sich zunächst auf größere Salden und ältere ausstehende Transaktionen.
- **Kreditrichtlinien überprüfen** — Verwenden Sie Zahlungsmuster, um Entscheidungen über Kreditbedingungen für einzelne Kunden zu treffen.
- **Kapitalfluss prognostizieren** — Schätzen Sie basierend auf den Fälligkeitsdaten, wann Sie wahrscheinlich Zahlungen erhalten werden.

Wir empfehlen, Ihren Fälligkeitsbericht für Kunden wöchentlich oder monatlich zu überprüfen, um Inkassoprobleme frühzeitig zu erkennen.

## Frag Fi

Fi, der integrierte KI-Berater von Fiskl, kann Ihnen bei der Interpretation Ihrer Fälligkeitsdaten helfen. Wählen Sie das Symbol **Frag Fi** in der oberen rechten Ecke des Bildschirms, um Fragen zu Ihren ausstehenden Salden zu stellen, Trends zu identifizieren oder eine Anleitung für die nächsten Schritte zu erhalten.

## Häufige Probleme

<details>
<summary>Eine Transaktion wird nicht im Bericht angezeigt</summary>

Der Fälligkeitsbericht für Kunden enthält nur Forderungstransaktionen mit einem ausstehenden Saldo. Überprüfen Sie folgende Punkte:

1. Bestätigen Sie, dass die Rechnung versendet und nicht als Entwurf hinterlassen wurde.
2. Bestätigen Sie, dass das Transaktionsdatum auf oder vor Ihrem **Stichtag** liegt.
3. Bestätigen Sie, dass die Transaktion nicht vollständig bezahlt oder abgeschrieben wurde.

</details>

<details>
<summary>Alle Transaktionen werden in der Spalte „Älter" angezeigt</summary>

Dies bedeutet normalerweise, dass die Einstellung **Anzahl der Zeiträume** oder **Zeitraum** zu eng ist. Versuchen Sie, die Anzahl der Zeiträume zu erhöhen oder wechseln Sie zu einem längeren Zeitraum wie Monat oder Quartal.

</details>

<details>
<summary>Der Bericht zeigt keine Daten an</summary>

Wenn der Bericht leer erscheint, überprüfen Sie folgende Punkte:

1. Bestätigen Sie, dass Ihr **Stichtag** den Zeitraum abdeckt, in dem Transaktionen gebucht wurden.
2. Bestätigen Sie, dass der Filter **Kunden** die erwarteten Kunden enthält.
3. Bestätigen Sie, dass mindestens eine versendete Rechnung einen ausstehenden Saldo aufweist.

</details>

## Verwandte Themen

- [Kontoauszug](/core-features/accounting/reports/statement-of-accounts) — Senden Sie Kunden eine Zusammenfassung ihrer ausstehenden Salden und Zahlungshistorie
- [Kunden verwalten](/clients-vendors/clients) — Kundendatensätze in Fiskl hinzufügen und verwalten
- [Rechnungsverwaltung](/invoicing/invoice-management) — Zeigen Sie an, bearbeiten Sie und verfolgen Sie den Status Ihrer Rechnungen
- [Forderungstransaktionen](/accounting/journal-entries/guides/accounts-receivable-transactions) — Verstehen Sie, wie Forderungstransaktionen in Ihrem Hauptbuch erfasst werden
