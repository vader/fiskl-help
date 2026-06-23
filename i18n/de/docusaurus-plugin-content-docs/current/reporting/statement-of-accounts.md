---
title: "Kontoauszug"
description: "Erstellen und teilen Sie eine Kontoauszug in Fiskl, um alle Transaktionen mit einem Kunden zusammenzufassen, einschließlich Rechnungen, Zahlungen und ausstehender Salden."
keywords: ["statement of accounts", "client statement", "accounts receivable", "outstanding balance", "invoice summary", "multi-currency statement"]
sidebar_position: 9
slug: /core-features/accounting/reports/statement-of-accounts
tags:
  - Reporting
  - Invoicing
  - Client management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie eine Kontoauszugsrechnung in Fiskl generieren, anpassen und freigeben – einen Bericht, der alle finanziellen Transaktionen mit einem bestimmten Kunden zusammenfasst, einschließlich Rechnungen und etwaiger ausstehender Salden.

<details>
<summary>Warum ist der Bericht „Kontoauszugsrechnung" wichtig?</summary>

Der Bericht „Kontoauszugsrechnung" ist wertvoll, da er:

- Alle finanziellen Transaktionen mit einem bestimmten Kunden an einem Ort zusammenfasst
- Hilft, ausstehende Salden und Zahlungsverlauf zu verfolgen
- Effektive Verwaltung der Forderungen unterstützt
- Sie dabei hilft, mit Kunden klar über deren finanzielle Situation zu kommunizieren
- Von einigen Unternehmen regelmäßig oder vor der Begleichung von Rechnungen angefordert wird

</details>

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Vor dem Start

- Der Bericht „Kontoauszugsrechnung" ist kundenspezifisch. Sie benötigen mindestens einen Kunden mit erfassten Transaktionen, um einen aussagekräftigen Bericht zu generieren.
- Um Forderungstransaktionen einzubeziehen, stellen Sie sicher, dass Forderungseinträge für den Kunden vorhanden sind. Forderungseinträge werden generiert, wenn eine Rechnung gesendet wird, nicht wenn sie als Entwurf erstellt wird.

## Zugriff auf den Bericht

Sie können die Kontoauszugsrechnung von zwei Orten aus öffnen:

- **Rechnungsliste** — Nach Kunde filtern und dann **Kontoauszugsrechnung** auswählen
- **Buchhaltung** > **Berichte** — **Kontoauszugsrechnung** im linken Menü auswählen

## Generieren einer Kontoauszugsrechnung

1. Öffnen Sie den Bericht von einem der oben genannten Orte aus.
2. Wählen Sie **Filter & Einstellungen** aus, um die Berichtsoptionen zu erweitern.
3. Wählen Sie den Kunden aus, für den Sie die Kontoauszugsrechnung generieren möchten.
4. Legen Sie den Datumsbereich mit dem Datumswähler oder einem vordefinierten Zeitraum fest.
5. Wählen Sie die einzubeziehenden Währungen aus, oder lassen Sie sie deaktiviert, um alle Währungen anzuzeigen.
6. Schalten Sie **Forderungstransaktionen einbeziehen** ein oder aus, um Forderungstransaktionen ein- oder auszuschließen.
7. Geben Sie Ihren Firmennamen so ein, wie er im Bericht angezeigt werden soll.
8. Geben Sie einen benutzerdefinierten Berichtsnamen ein, falls erforderlich.
9. Wählen Sie **Bericht ausführen**.

:::info
Wenn ein Kunde Transaktionen in mehreren Währungen hat, gruppiert der Bericht jeden Abschnitt nach Währung. Sie sehen beispielsweise separate Abschnitte für Rechnungen in EUR und Rechnungen in USD, wobei die Eröffnungs- und Schlusssalden ebenfalls nach Währung aufgeschlüsselt werden.
:::

## Verständnis des Berichts

### Berichtsabschnitte

Der Berichtskopf zeigt Ihre Firmendetails, die Kundendetails sowie die Eröffnungs- und Schlusssalden. Wenn der Kunde Transaktionen in mehreren Währungen hat, wird jeder Saldo pro Währung angezeigt, wobei überfällige Beträge hervorgehoben werden.

Der Berichtsteil enthält bis zu zwei Abschnitte, jeweils nach Währung gruppiert:

| Abschnitt | Beschreibung |
|---|---|
| **Rechnungen** | Alle Rechnungen innerhalb des ausgewählten Zeitraums mit Datum, Rechnungsnummer, Status, fälligem Betrag, bezahltem Betrag und Gesamtsumme |
| **Forderungstransaktionen** | Manuelle Forderungsbuchungssätze für den Kunden mit Datum, Name und Betrag. Wird nur angezeigt, wenn **Forderungstransaktionen einbeziehen** aktiviert ist |

### Berichtsansichten

Der Bericht hat zwei Versionen:

**Fiskl-Ansicht** — Die Version, die Sie sehen, wenn Sie in Fiskl arbeiten. Durch Auswahl einer Rechnung navigieren Sie direkt zu dieser Rechnung. Durch Auswahl einer Forderungstransaktion navigieren Sie zu dieser Transaktion.

**Kundenansicht** — Die Version, die Ihr Kunde als PDF erhält. Durch Auswahl einer Rechnung gelangt Ihr Kunde zur Zahlungsseite, wo er die Rechnung ansehen, geleistete oder ausstehende Zahlungen sehen und die Rechnung sowie Belege herunterladen kann.

## Hinzufügen von Notizen

Notizen werden hinzugefügt, nachdem Sie den Bericht ausgeführt haben.

1. Wählen Sie das Notizensymbol am unteren Ende des Berichts.
2. Geben Sie Ihre Kommentare oder Kontext für den Kunden ein.
3. Notizen sind enthalten, wenn Sie den Bericht drucken.

## Freigabe des Berichts

Um die Kontoauszugsrechnung als PDF freizugeben:

1. Wählen Sie **Drucken** oben rechts im Bericht. Die PDF enthält direkte Links zu den Rechnungen des Kunden.

:::tip
Der regelmäßige Versand einer Kontoauszugsrechnung trägt zur Transparenz mit Kunden bei und kann die Zahlungspünktlichkeit verbessern.
:::

## Analyse des Berichts

Der Schlusssaldo zeigt, was Ihr Kunde derzeit schuldet. Alle überfälligen Beträge werden rot hervorgehoben und pro Währung aufgeschlüsselt, um leicht zu erkennen, wo Maßnahmen erforderlich sind.

Falls der Schlusssaldo höher als erwartet aussieht, überprüfen Sie die Rechnungszeilen auf überfällige Posten und prüfen Sie, ob Forderungstransaktionen die Gesamtsumme beeinflussen. Das Verlängern des Datumsbereichs kann auch helfen, Transaktionen zu identifizieren, die vor dem aktuellen Zeitraum entstanden sein könnten.

Nachdem Sie überfällige Rechnungen identifiziert haben, können Sie diese in der Fiskl-Ansicht direkt auswählen, um ihnen nachzugehen oder eine Zahlung zu erfassen.

:::tip
Verwenden Sie das **Ask Fi**-Symbol oben rechts auf dem Bildschirm, um Hilfe bei der Interpretation eines unerwarteten Saldos zu erhalten oder Fragen zur Transaktionshistorie eines Kunden zu stellen.
:::

## Häufig auftretende Probleme

<details>
<summary>Der Bericht zeigt keine Transaktionen für den ausgewählten Zeitraum</summary>

Überprüfen Sie, ob der Datumsbereich den erwarteten Zeitraum abdeckt. Wenn Sie nach einer bestimmten Währung filtern, bestätigen Sie, dass der Kunde Transaktionen in dieser Währung hat. Überprüfen Sie auch, dass Rechnungen gesendet wurden (nicht als Entwürfe belassen), da Forderungseinträge beim Versenden generiert werden.

</details>

<details>
<summary>Forderungstransaktionen werden nicht im Bericht angezeigt</summary>

Schalten Sie **Forderungstransaktionen einbeziehen** in **Filter & Einstellungen** ein. Wenn Forderungstransaktionen weiterhin nicht angezeigt werden, überprüfen Sie, dass die Rechnungen für diesen Kunden gesendet wurden – Entwürfe generieren keine Forderungseinträge.

</details>

<details>
<summary>Der Eröffnungs- oder Schlusssaldo sieht falsch aus</summary>

Der Eröffnungssaldo widerspiegelt Transaktionen vor Ihrem ausgewählten Startdatum. Falls der Saldo unerwartet aussieht, versuchen Sie, den Datumsbereich zu verlängern, um frühere Zeiträume einzubeziehen. Überprüfen Sie auch, ob Sie die richtigen Währungen ausgewählt haben – Salden werden für Kunden mit mehreren Währungen pro Währung angezeigt.

</details>

<details>
<summary>Die PDF-Links funktionieren für den Kunden nicht</summary>

Stellen Sie sicher, dass der Kunde auf die PDF-Version der Kontoauszugsrechnung zugreift, nicht auf einen Screenshot oder eine ausgedruckte Kopie. Die Links in der Kundenansicht verbinden sich mit der Fiskl-Zahlungsseite für jede Rechnung.

</details>

## Verwandte Themen

- [Kundenfälligkeitsbericht](/reporting/client-aging) — Zeigen Sie überfällige Salden aller Kunden an
- [Verwaltung von Kunden](/clients-vendors/clients) — Fügen Sie Ihre Kundendatensätze hinzu und verwalten Sie sie
- [Forderungstransaktionen](/accounting/journal-entries/guides/accounts-receivable-transactions) — Verstehen Sie, wie Forderungseinträge erstellt werden
- [Hauptbuch](/reporting/general-ledger) — Zeigen Sie alle Transaktionen über Konten an
