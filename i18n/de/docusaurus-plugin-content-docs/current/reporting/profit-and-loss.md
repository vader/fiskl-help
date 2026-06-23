---
title: "Gewinn- und Verlustrechnung"
description: "Erfahren Sie, wie Sie die Gewinn- und Verlustrechnung in Fiskl erstellen und analysieren, um Umsatz, Ausgaben und Nettogewinn über einen beliebigen Zeitraum zu verfolgen."
keywords: ["profit and loss", "P&L", "income statement", "financial report", "compare periods", "cash accrual"]
sidebar_position: 1
tags:
  - Reporting
  - Accounting
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Der Bericht „Gewinn und Verlust" zeigt die finanzielle Leistung Ihres Unternehmens über einen ausgewählten Zeitraum. Nutzen Sie ihn, um zu verstehen, ob Ihr Unternehmen profitabel ist, um Kosteneinsparungsmöglichkeiten zu identifizieren und um Steuer- und Meldeanforderungen zu erfüllen.

<details>
<summary>Warum ist der Bericht „Gewinn und Verlust" wichtig?</summary>

Der G&V-Bericht hilft Ihnen:

- Festzustellen, ob Ihr Unternehmen Gewinne erzielt
- Bereiche zu identifizieren, in denen Sie Kosten senken können
- Anforderungen für Steuererklärungen und Kreditanträge zu erfüllen
- Fundierte Geschäftsentscheidungen basierend auf Finanzdaten zu treffen

</details>

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

Bevor Sie Ihren Bericht „Gewinn und Verlust" erstellen, stellen Sie sicher, dass:

- Ihre Transaktionen den korrekten Hauptbuchkonten zugeordnet sind
- Alle Bank-Feeds auf dem neuesten Stand sind und für den Berichtszeitraum abgestimmt wurden
- Sie wissen, welche Abrechnungsmethode für Ihr Unternehmen gilt — Ausgaben- oder Accrual-Methode (siehe [Ausgaben- vs. Accrual-Abrechnungsmethode](/glossary/accounting-fundamentals))
- Ihre Basiswährung ist korrekt eingestellt unter [**Einstellungen** > **Unternehmenseinstellungen**](/settings/company-settings)

:::tip
Falls Sie nicht abgestimmte Transaktionen oder nicht kategorisierte Ausgaben haben, spiegeln Ihre Berichtstotale möglicherweise nicht die wahre finanzielle Position wider. Stimmen Sie Ihre Konten ab, bevor Sie den Bericht extern weitergeben.
:::

## Grundlagen des Berichts „Gewinn und Verlust"

Der Bericht „Gewinn und Verlust" – auch als Gewinn- und Verlustrechnung bekannt – verfolgt die finanzielle Leistung über einen bestimmten Zeitraum. Er beginnt mit dem Umsatz und zieht Kosten und Ausgaben ab, um Ihren Nettogewinn oder -verlust zu berechnen.

Stellen Sie sich das als Video Ihrer Unternehmensfinanzen vor: Es zeigt, wie Geld während eines bestimmten Zeitraums verdient und ausgegeben wurde. Dies unterscheidet sich von der [Bilanz](/reporting/balance-sheet), die Ihre finanzielle Position zu einem bestimmten Zeitpunkt erfasst.

### Schlüsselkomponenten

Ihr Bericht enthält diese Abschnitte:

- **Umsatz** — Der Gesamtbetrag, der aus Ihren primären Geschäftsaktivitäten verdient wurde
- **Herstellungskosten** — Direktkosten, die mit der Herstellung Ihrer Waren oder Dienstleistungen verbunden sind
- **Rohgewinn** — Umsatz abzüglich Herstellungskosten, zeigt verfügbare Mittel zur Deckung von Betriebsausgaben
- **Betriebsausgaben** — Kosten für die Geschäftstätigkeit, die nicht direkt an die Produktion gebunden sind
- **Betriebsgewinn** — Rohgewinn abzüglich Betriebsausgaben, zeigt die Kernrentabilität des Geschäfts
- **Außerordentliche Erträge und Ausgaben** — Erträge oder Kosten, die nicht mit Ihren Hauptgeschäftstätigkeiten verbunden sind
- **Nettogewinn oder -verlust** — Die endgültige Zahl, die die Gesamtrentabilität nach allen Erträgen und Ausgaben anzeigt

:::tip
Überwachen Sie Ihren Rohgewinn und Betriebsgewinn genau. Diese Zahlen helfen Ihnen zu erkennen, ob Sie Ihre Preisgestaltung anpassen, Kosten reduzieren oder die operative Effizienz verbessern müssen.
:::

## Erstellen Sie Ihren Bericht

1. Wählen Sie im linken Menü **Buchhaltung** > **Berichte** > **Gewinn und Verlust**
2. Wählen Sie oben rechts **Filter & Einstellungen**
3. Wählen Sie Ihren Datumsbereich aus
4. Passen Sie die Anzeigeoptionen nach Bedarf an (siehe unten)

### Anzeigeoptionen

Verwenden Sie diese Optionen, um anzupassen, wie der Bericht angezeigt wird:

- **Zeiträume vergleichen** — Mehrere Zeiträume nebeneinander anzeigen
- **Ausgaben- / Accrual-Methode** — Zwischen Abrechnungsmethoden wechseln
- **Unrealisierte Wechselkursgewinne/-verluste anzeigen** — Devisenbewegungen ein- oder ausschließen
- **Zeitraumreihenfolge umkehren** — Zeiträume in umgekehrt chronologischer Reihenfolge anzeigen (neueste zuerst)
- **Durch 1000 teilen** — Große Zahlen skalieren für leichtere Lesbarkeit
- **Leere Konten ausblenden** — Konten ohne Aktivität aus der Ansicht entfernen
- **Vergleiche ausblenden** — Nur den primären Zeitraum ohne Vergleichsspalten anzeigen
- **Kompakt** — Abstände zwischen Zeilen verringern für eine kompaktere Darstellung

## Zeiträume vergleichen

Sie können bis zu 20 Zeiträume nebeneinander vergleichen, um Leistungstrends zu verfolgern.

1. Wählen Sie **Filter & Einstellungen** und dann **Zeiträume vergleichen**
2. Verwenden Sie die **−** und **+** Schaltflächen, um festzulegen, wie viele vorherige Zeiträume einbezogen werden sollen. Wenn Sie beispielsweise 2 eingeben, werden zwei frühere Zeiträume als zusätzliche Spalten neben Ihrem aktuellen Zeitraum hinzugefügt.
3. Der Bericht wird aktualisiert, um jeden Zeitraum als separate Spalte anzuzeigen, mit Unterschieden in Geldbeträgen und Prozentsätzen

Das Vergleichen von Zeiträumen hilft Ihnen, Trends, Saisonalitätsmuster und ungewöhnliche Abweichungen in Ihrer Geschäftsleistung zu identifizieren.

## Ausgaben- vs. Accrual-Abrechnungsmethode

Fiskl unterstützt beide Abrechnungsmethoden für Ihren Bericht „Gewinn und Verlust":

- **Ausgaben-Methode** — Erfasst Erträge beim Erhalt der Zahlung und Ausgaben bei Zahlung
- **Accrual-Methode** — Erfasst Erträge bei Verdienung und Ausgaben bei Entstehung, unabhängig davon, wann Bargeld fließt

Wählen Sie die Methode unter **Filter & Einstellungen**, um zwischen ihnen zu wechseln. Erfahren Sie mehr über [Ausgaben- vs. Accrual-Abrechnungsmethode](/glossary/accounting-fundamentals).

## Analyse Ihres Berichts

Um den größtmöglichen Nutzen aus Ihrem Bericht „Gewinn und Verlust" zu erzielen:

1. **Regelmäßig überprüfen** — Führen Sie monatliche oder vierteljährliche Überprüfungen durch, um die finanzielle Leistung im Blick zu behalten
2. **Vergleich mit vorherigen Zeiträumen** — Suchen Sie nach Trends, Mustern und Saisonalität in Ihrem Geschäft
3. **Wichtige Kennzahlen berechnen** — Bestimmen Sie Metriken wie Rohgewinnmarge und Betriebsgewinnmarge
4. **Abweichungen untersuchen** — Wenn Sie signifikante Änderungen feststellen, erkunden Sie die zugrunde liegenden Ursachen
5. **Für Prognosen nutzen** — Wenden Sie Erkenntnisse aus Ihrem Bericht auf Budgetplanung und Finanzprognosen an

:::tip
Wählen Sie in der Detailansicht einen beliebigen Gesamtbetrag aus, um alle zugehörigen Transaktionen anzuzeigen. Dies hilft Ihnen, bestimmte Einträge zu untersuchen und die Zahlen hinter Ihrem Bericht zu verstehen.
:::

## Exportieren und Freigeben

So exportieren Sie Ihren Bericht:

1. Wählen Sie oben rechts auf dem Bildschirm die Schaltfläche zum Exportieren
2. Wählen Sie das Format **Google Sheets** oder **Excel**
3. Wählen Sie zwischen den Ansichten **Detailliert** und **Zusammenfassung**

Alle exportierten Berichte enthalten einen Zeitstempel und die ausgewählte Abrechnungsmethode als Referenz.

## Notizen hinzufügen

1. Wählen Sie oben rechts auf dem Bildschirm das Notizensymbol
2. Geben Sie Ihre Kommentare oder Erklärungen ein
3. Ihre Notizen sind enthalten, wenn Sie den Bericht exportieren

## Häufige Probleme

<details>
<summary>Meine Berichtstotale stimmen nicht mit meinen Erwartungen überein</summary>

Dies wird normalerweise durch eines der folgenden Probleme verursacht:

1. Transaktionen sind dem falschen Hauptbuchkonto zugeordnet — überprüfen Sie Ihren [Kontenrahmen](/accounting/chart-of-accounts) und kategorisieren Sie falsch zugeordnete Elemente neu
2. Sie verwenden eine andere Abrechnungsmethode (Ausgaben- vs. Accrual-Methode) als erwartet — überprüfen Sie die in **Filter & Einstellungen** angezeigte Methode
3. Bank-Feeds sind nicht synchronisiert — gehen Sie zu **Banking** und lösen Sie eine manuelle Synchronisierung aus, führen Sie dann den Bericht erneut aus
4. Der Datumsbereich umfasst nicht alle erwarteten Transaktionen — bestätigen Sie Ihre Start- und Enddaten unter **Filter & Einstellungen**

</details>

<details>
<summary>Fremdwährungsbeträge sehen falsch aus</summary>

Fiskl konvertiert Fremdwährungstransaktionen in Ihre Basiswährung unter Verwendung des Wechselkurses zum Zeitpunkt der Transaktion. Wenn Sie **Unrealisierte Wechselkursgewinne/-verluste anzeigen** unter **Filter & Einstellungen** aktiviert haben, enthält der Bericht auch unrealisierte Bewegungen von offenen Rechnungen oder Guthaben.

Um Wechselkurse bei bestimmten Transaktionen zu überprüfen, wählen Sie in der Detailansicht die Transaktionssumme aus, um die zugrunde liegenden Einträge anzuzeigen.

</details>

<details>
<summary>Die Option „Zeiträume vergleichen" zeigt keine Unterschiede</summary>

Wenn die Vergleichsspalten angezeigt werden, aber keine Abweichungsziffern zeigen, überprüfen Sie, dass **Vergleiche ausblenden** nicht unter **Filter & Einstellungen** aktiviert ist. Wenn Abweichungsspalten weiterhin fehlen, bestätigen Sie, dass beide Zeiträume Transaktionsdaten enthalten — leere Zeiträume generieren keine Vergleichsziffern.

</details>

<details>
<summary>Ich kann bestimmte Konten im Bericht nicht sehen</summary>

Wenn **Leere Konten ausblenden** unter **Filter & Einstellungen** aktiviert ist, werden Hauptbuchkonten ohne Aktivität während des ausgewählten Zeitraums ausgeblendet. Deaktivieren Sie diese Option, um alle Konten anzuzeigen. Wenn ein Konto weiterhin fehlt, bestätigen Sie, dass es im [Kontenrahmen](/accounting/chart-of-accounts) dem korrekten Kontotyp zugeordnet ist.

</details>

## Verwandte Themen

- [Bilanz](/reporting/balance-sheet) — Zeigen Sie Ihre finanzielle Position zu einem bestimmten Zeitpunkt an
- [Kapitalflussrechnung](/reporting/cash-flow) — Verfolgen Sie Geldbewegungen in und aus Ihrem Unternehmen
- [Kontenrahmen](/accounting/chart-of-accounts) — Verwalten Sie die Hauptbuchkonten, die Ihre Berichte steuern
- [Buchhaltungsgrundlagen](/glossary/accounting-fundamentals) — Verstehen Sie Ausgaben- vs. Accrual-Methode und andere Schlüsselkonzepte
- [Bankkontoabstimmung](/accounting/reconciliation/guides/bank-account-reconciliation) — Stellen Sie sicher, dass Ihre Transaktionen genau sind, bevor Sie Berichte erstellen
