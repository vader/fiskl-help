---
title: "Saldenbilanz-Bericht"
description: "Generieren und analysieren Sie den Saldenbilanz-Bericht in Fiskl, um die Genauigkeit der Buchführung zu überprüfen und Jahresabschlüsse vorzubereiten."
keywords: ["trial balance", "debit", "credit", "accrual", "cash basis", "financial reports", "bookkeeping"]
sidebar_position: 5
slug: /core-features/accounting/reports/trial-balance
tags:
  - Accounting
  - Reports
  - Trial Balance
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie den Saldenbilanz-Bericht in Fiskl erstellen und analysieren. Verwenden Sie diesen Bericht, um zu überprüfen, ob Ihre Gesamtbelastungen Ihren Gesamtgutschriften entsprechen, und um Ihre anderen Finanzberichte vorzubereiten. Eine regelmäßige Überprüfung hilft Ihnen, saubere Bücher zu führen, Probleme frühzeitig zu erkennen und Ihre Finanzberichte auf solide Grundlagen zu stellen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Was ist der Saldenbilanz-Bericht?

Der Saldenbilanz-Bericht listet jedes Hauptbuchwerkzeug mit seinem Sollsaldo oder Habensaldo auf. Er bestätigt, dass Ihre Bücher mathematisch ausgeglichen sind, bevor Sie andere Finanzberichte erstellen.

<details>
<summary>Warum ist die Saldenbilanz wichtig?</summary>

Der Saldenbilanz-Bericht hilft Ihnen:

- Buchungsfehler und Unstimmigkeiten zu erkennen, bevor sie Ihre Finanzberichte beeinflussen
- Als Ausgangspunkt für die Vorbereitung Ihrer Bilanz und Ihres Gewinn- und Verlustberichts zu dienen
- Einen schnellen Überblick über alle Hauptbuchkontosalden zu erhalten
- Ungewöhnliche Salden oder Trends zu erkennen, die möglicherweise untersucht werden müssen

</details>

## Saldenbilanz vs. andere Finanzberichte

Die Saldenbilanz unterscheidet sich auf wichtige Weise von Ihren anderen Finanzberichten.

- **Saldenbilanz** — Ein Arbeitsdokument, das alle Hauptbuchkonten mit ihren Sollsalden oder Habensalden auflistet. Es bestätigt mathematische Genauigkeit, kategorisiert aber keine Konten.
- **Bilanz** — Ordnet Konten in Vermögenswerte, Verbindlichkeiten und Eigenkapital. Sie zeigt die finanzielle Position Ihres Unternehmens zu einem bestimmten Zeitpunkt.
- **Gewinn- und Verlustreport** — Zeigt Einnahmen und Ausgaben über einen Zeitraum. Es zeigt die Rentabilität Ihres Unternehmens.

Betrachten Sie die Saldenbilanz als die Hintergrund-Überprüfung, die Ihre Bilanz und Ihren Gewinn- und Verlustreport untermauert.

## Wichtige Berichtkomponenten

Ihr Saldenbilanz-Bericht enthält diese Elemente:

- **Kontonamen** — Jedes Hauptbuchwerkzeug in Ihrem Hauptbuch
- **Kontonummern** — Der eindeutige Bezeichner für jedes Konto
- **Sollspalte** — Der Sollsaldo für jedes Konto
- **Habenspalte** — Der Habensaldo für jedes Konto
- **Summen** — Die Summe aller Sollvorgänge und aller Habensalden, die gleich sein müssen

:::info
Wenn Gesamtbelastungen nicht gleich Gesamtgutschriften sind, liegt ein Buchungsfehler vor, der identifiziert und korrigiert werden muss, bevor Sie fortfahren.
:::

## Bevor Sie beginnen

Bevor Sie Ihren Saldenbilanz-Bericht erstellen, bestätigen Sie, dass:

- Ihre Transaktionen gepostet und aktuell sind
- Sie wissen, welche Rechnungslegungsbasis (Kasse oder Abgrenzung) Sie verwenden möchten
- Ihr Berichtszeitraum in Ihrem Datumsauswahlfeld korrekt eingestellt ist

## Erstellen des Saldenbilanz-Berichts

1. Wählen Sie **Accounting** im linken Menü.
2. Wählen Sie **Reports**, dann wählen Sie **Trial Balance**.
3. Wählen Sie **Filters & Settings**, um das Konfigurationsfenster zu öffnen.
4. Unter **Report Data Settings** stellen Sie das **As of Date** ein — wählen Sie einen vordefinierten Zeitraum oder geben Sie ein benutzerdefiniertes Datum ein.
5. Unter **Report Basis** schalten Sie **Accrual Basis** je nach Ihrer bevorzugten Methode ein oder aus.
6. Schalten Sie **Unrealized FX Gain/Loss** ein, um offene Fremdwährungssalden einzubeziehen.
7. Unter **Display Options** passen Sie die Berichtsanzeige an:
   - **Divide by 1,000** — Skaliert große Zahlen für leichtere Lesbarkeit
   - **Hide Empty Accounts** — Entfernt Konten ohne Aktivität aus der Ansicht
   - **Show Subsections** — Teilt Konten in Unterabschnitte innerhalb jeder Kategorie ein
   - **Compact** — Reduziert den Abstand für eine kompaktere Ansicht
8. Wählen Sie **Run Report**, um den Bericht zu erstellen.

<details>
<summary>Welche Rechnungslegungsbasis sollte ich verwenden?</summary>

Fiskl unterstützt sowohl Kassen- als auch Abgrenzungsberichte:

- **Kassenbasis** — Salden spiegeln wider, wann Bargeld tatsächlich eingegangen oder ausgezahlt wurde. Verwenden Sie dies, wenn Sie Ihre Bücher auf Kassenbasis führen oder Ihre tatsächliche Bargeldposition sehen möchten.
- **Abgrenzungsbasis** — Salden spiegeln wider, wann Transaktionen verdient oder angefallen wurden, unabhängig davon, wann Bargeld die Hände wechselte. Verwenden Sie dies, wenn Ihr Unternehmen auf Abgrenzungsbasis arbeitet oder wenn Ihr Buchhalter dies verlangt.

Wenn Sie sich nicht sicher sind, welche Methode auf Ihr Unternehmen zutrifft, lesen Sie [Accounting Fundamentals](/glossary/accounting-fundamentals) oder fragen Sie Ihren Buchhalter.

</details>

:::tip
Ihre Standard-Kassen- oder Abgrenzungsbasis kann in [Accounting Settings](/settings/accounting-settings) eingestellt werden.
:::

## Analyse des Berichts

Nach der Erstellung Ihres Berichts:

1. **Überprüfen Sie die Summen** — Bestätigen Sie, dass Gesamtbelastungen gleich Gesamtgutschriften sind. Jeder Unterschied deutet auf einen Buchungsfehler hin.
2. **Überprüfen Sie Kontosalden** — Suchen Sie nach ungewöhnlichen oder unerwarteten Salden, die möglicherweise untersucht werden müssen.
3. **Gehen Sie zu Transaktionen** — Wählen Sie einen beliebigen Betrag im Bericht, um die damit verbundenen Transaktionen hinter diesem Saldo anzuzeigen.
4. **Vergleichen Sie Zeiträume** — Führen Sie den Bericht für ein anderes Datum aus, um Änderungen oder Trends im Laufe der Zeit zu identifizieren.
5. **Bereiten Sie Finanzberichte vor** — Verwenden Sie die ausgeglichene Saldenbilanz als Ausgangspunkt für die Bilanz und den Gewinn- und Verlustreport.

:::tip
Wählen Sie einen beliebigen Betrag im Bericht, um die Transaktionen hinter dieser Zahl anzuzeigen. Dies hilft Ihnen, Fehler schnell bis zu ihrer Quelle zurückzuverfolgen.
:::

Wenn Sie Hilfe bei der Interpretation Ihrer Salden benötigen, wählen Sie das Symbol **Ask Fi** in der oberen rechten Ecke des Bildschirms. Fi kann Ihnen helfen zu verstehen, was Ihre Zahlen bedeuten und wo Sie untersuchen sollten.

## Exportieren und Freigeben

So exportieren Sie Ihren Saldenbilanz-Bericht:

1. Wählen Sie die Schaltfläche **Export** in der oberen rechten Ecke des Bildschirms.
2. Wählen Sie das Format **Google Sheets**, **Excel** oder **CSV**.

Alle exportierten Berichte enthalten das Berichtsdatum, die Uhrzeit und die verwendete Rechnungslegungsbasis.

## Hinzufügen von Notizen

So fügen Sie Kontext oder Erklärungen zu Ihrem Bericht hinzu:

1. Wählen Sie das Symbol **Note** in der unteren linken Ecke des Bildschirms.
2. Geben Sie Ihre Kommentare in das Textfeld ein.

Notizen sind enthalten, wenn Sie den Bericht exportieren.

## Häufige Probleme

<details>
<summary>Gesamtbelastungen und Gutschriften stimmen nicht überein</summary>

Eine Nichtübereinstimmung bedeutet, dass in Ihrer Buchhaltung ein Fehler vorliegt. So untersuchen Sie:

1. Wählen Sie einen beliebigen Betrag im Bericht, um die zugehörigen Transaktionen anzuzeigen.
2. Suchen Sie nach Transaktionen, die nur auf einer Seite eines Eintrags gepostet wurden.
3. Überprüfen Sie manuelle Buchungssätze, denen möglicherweise eine entsprechende Zeile fehlt.
4. Überprüfen Sie aktuelle Importe oder Bankfeed-Transaktionen auf Duplikate oder Fehlbuchungen.

Wenn Sie die Quelle nicht identifizieren können, wählen Sie das Symbol **Ask Fi** in der oberen rechten Ecke des Bildschirms, um Hilfe bei der Verfolgung der Abweichung zu erhalten. Falls das Problem weiterhin besteht, wenden Sie sich an den Fiskl-Support.

</details>

<details>
<summary>Erwartete Konten werden nicht im Bericht angezeigt</summary>

Konten ohne Aktivität während des ausgewählten Zeitraums können ausgeblendet sein. Schalten Sie **Hide Empty Accounts** in **Filters & Settings** aus und wählen Sie dann **Run Report** erneut, um alle Hauptbuchkonten anzuzeigen.

</details>

<details>
<summary>Abgrenzungs- und Kassenzahlen sind unterschiedlich</summary>

Das ist normal. Die Kassenbasis zeigt Salden basierend auf tatsächlichen Bargeldbewegungen. Die Abgrenzungsbasis enthält Transaktionen, die verdient oder angefallen wurden, aber noch nicht ausgeglichen wurden. Der Unterschied bezieht sich in der Regel auf unbezahlte Rechnungen und ausstehende Rechnungen.

</details>

<details>
<summary>Unrealisierte Wechselkursgewinne/-verluste werden nicht angezeigt</summary>

Die Umschaltfläche **Unrealized FX Gain/Loss** ist standardmäßig aus. Öffnen Sie **Filters & Settings**, schalten Sie **Unrealized FX Gain/Loss** unter **Report Basis** ein und wählen Sie dann **Run Report**, um offene Fremdwährungssalden in Ihren Bericht aufzunehmen.

</details>

## Verwandte Themen

- [Bilanz](/reporting/balance-sheet) — Sehen Sie Ihre Vermögenswerte, Verbindlichkeiten und Eigenkapital zu einem bestimmten Zeitpunkt
- [Gewinn und Verlust](/reporting/profit-and-loss) — Überprüfen Sie Einnahmen und Ausgaben über einen Zeitraum
- [Hauptbuch](/reporting/general-ledger) — Sehen Sie eine vollständige Transaktionsebenen-Ansicht jedes Hauptbuchkontos
- [Accounting Fundamentals](/glossary/accounting-fundamentals) — Erfahren Sie mehr über Kassen- vs. Abgrenzungsbuchhaltung und grundlegende Buchkonzepte
- [Kontenrahmen](/accounting/chart-of-accounts) — Verwalten Sie die Hauptbuchkonten, die in Ihrer Saldenbilanz erscheinen
