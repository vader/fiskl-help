---
title: "Transaktionen nach Konto-Bericht"
description: "Generieren Sie den Bericht „Transaktionen nach Konto in Fiskl, um alle Transaktionen auf Ihren Sachkonten anzuzeigen, mit vollständigen Details in mehreren Währungen."
keywords: ["transactions by account", "multi-currency report", "ledger transactions", "FX rate", "accounting reports", "cash accrual"]
sidebar_position: 10
tags:
  - Accounting
  - Reports
  - Multi-currency
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie den Bericht „Transaktionen nach Konto" in Fiskl erstellen und verwenden. Verwenden Sie diesen Bericht, um alle Transaktionen in Ihren Hauptbuchkonten mit vollständigen Mehrwährungsdetails für einen beliebigen Zeitraum zu überprüfen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Was ist der Bericht „Transaktionen nach Konto"?

Der Bericht „Transaktionen nach Konto" zeigt alle Transaktionen, die in Ihren Hauptbuchkonten innerhalb eines ausgewählten Datumsbereichs erfasst wurden. Jede Transaktion wird mit Brutto-, Netto- und Steuerbeträgen in drei Währungsansichten angezeigt – Originalwährung, Kontowährung und Grundwährung – was es besonders nützlich für Unternehmen macht, die in mehreren Währungen tätig sind.

<details>
<summary>Warum ist dieser Bericht wichtig?</summary>

Der Bericht „Transaktionen nach Konto" hilft Ihnen dabei:

- Alle Transaktionen für ein oder mehrere Hauptbuchkonten in einer einzigen Ansicht zu überprüfen
- Beträge in verschiedenen Währungen zu verfolgen und abzustimmen
- Steuerbeträge und Wechselkurse bei einzelnen Transaktionen zu überprüfen
- Kontoaktivitäten über beliebige Zeiträume zu analysieren

</details>

## Vor dem Start

Bevor Sie Ihren Bericht „Transaktionen nach Konto" erstellen, stellen Sie sicher, dass:

- Ihre Transaktionen gebucht und aktuell sind
- Sie wissen, welche Hauptbuchkonten Sie überprüfen möchten
- Sie den Datumsbereich kennen, den Sie analysieren möchten
- Sie wissen, ob Sie die Ergebnisse auf Cash- oder Accrual-Basis anzeigen möchten

## Bericht erstellen

1. Wählen Sie im linken Menü **Accounting** aus.
2. Wählen Sie **Reports** und dann **Transactions by Account** aus.
3. Wählen Sie einen Datumsbereich aus den voreingestellten Zeiträumen oder wählen Sie einen benutzerdefinierten Bereich.
4. Wählen Sie **Filters & Settings**, um Ihre Konten auszuwählen und alle zusätzlichen Optionen anzuwenden.

Um den Bericht sofort auszuführen, wählen Sie **Run With Defaults**. Dies verwendet einen vierwöchigen Datumsbereich, alle Konten und Ihre standardmäßige Cash- oder Accrual-Basis.

## Berichtsoptionen

Sie können den Bericht mit den folgenden Optionen in **Filters & Settings** anpassen. Verwenden Sie die Kontoauswahl oben im Bereich, um alle Konten oder ein oder mehrere spezifische Hauptbuchkonten auszuwählen.

- **Cash oder Accrual** — Wechseln Sie zwischen Cash- und Accrual-Accounting-Methoden
- **Summary oder Detail** — Wechseln Sie zwischen einer Übersichtsansicht und einer vollständigen Transaktionsansicht
- **Divide by 1000** — Skalieren Sie große Beträge zur besseren Lesbarkeit
- **Hide empty accounts** — Entfernen Sie Hauptbuchkonten ohne Transaktionen im ausgewählten Zeitraum aus dem Bericht
- **Show opening and closing balances** — Zeigen Sie den Anfangs- und Endsaldo für jedes Konto an

:::tip
Ihre standardmäßige Cash- oder Accrual-Basis kann in den [Accounting Settings](/settings/accounting-settings) festgelegt werden.
:::

## Berichtsspalten verstehen

Der Bericht zeigt Beträge in bis zu drei Währungen für jede Transaktion an:

- **Originalwährung** – die Währung, die bei der Erfassung der Transaktion verwendet wurde
- **Kontowährung** – die Währung des Hauptbuchkontos
- **Grundwährung** – Ihre Standardrechnungswährung des Unternehmens

Jede Transaktion zeigt auch eine Aufschlüsselung von **Bruttobetrag** (Gesamtbetrag), **Nettobetrag** (ohne Steuer) und **Steuerbetrag**.

## Spalten anpassen

Aktivieren oder deaktivieren Sie im Abschnitt **Column Visibility** der **Filters & Settings** jede Spalte, um nur das Notwendige anzuzeigen. Ihre Auswahl wird auch beim Export des Berichts angewendet.

<details>
<summary>Siehe eine Aufschlüsselung der verfügbaren Spalten</summary>

**Grundinformationen:**

- **Date** – Wann die Transaktion stattgefunden hat
- **Account** – Das Hauptbuchkonto, auf das die Transaktion gebucht wird
- **Number** – Die Transaktions- oder Dokumentreferenznummer
- **Type** – Der Transaktionstyp, z. B. Rechnung, Ausgabe oder Überweisung
- **Name** – Der mit der Transaktion verbundene Name
- **Client/Vendor** – Der mit der Transaktion verknüpfte Kunde oder Lieferant
- **Category** – Die zugewiesene Transaktionskategorie
- **Description** – Eine kurze Beschreibung der Transaktion

**Amountspalten:**

Jeder Betrag wird in drei Währungen angezeigt:

- **Original Currency Amount** – die Währung, die bei der Erfassung der Transaktion verwendet wurde
- **Account Currency Amount** – die Währung des Hauptbuchkontos
- **Base Currency Amount** – Ihre Standardrechnungswährung des Unternehmens

**Zusätzlich:**

- **Balance** – Der laufende Saldo des Kontos (wird angezeigt, wenn Anfangs- und Endsaldi aktiviert sind)
- **Tax rate** – Der auf die Transaktion angewendete Steuersatz
- **FX Rate** – Der Wechselkurs zwischen Grundwährung und Kontowährung zum Zeitpunkt der Transaktion

</details>

## Bericht exportieren

So exportieren Sie Ihren Bericht „Transaktionen nach Konto":

1. Wählen Sie die Exportschaltfläche oben rechts im Bericht.
2. Wählen Sie **Google Sheets** oder **Excel** als Exportformat.

Die exportierte Datei spiegelt Ihre aktuelle Spaltenauswahl und Filter wider.

## Benötigen Sie Hilfe bei der Interpretation Ihres Berichts?

Wählen Sie das Symbol **Ask Fi** oben rechts auf dem Bildschirm, um Hilfe vom integrierten KI-Ratgeber von Fiskl zu erhalten. Fi kann Ihnen dabei helfen, Transaktionsdaten zu interpretieren, Währungsunterschiede zu erklären und Buchungsfragen basierend auf Ihren spezifischen Zahlen zu beantworten.

## Häufig auftretende Probleme

<details>
<summary>Ich erwartete, eine Transaktion zu sehen, aber sie wird nicht im Bericht angezeigt</summary>

Überprüfen Sie die folgenden Punkte:

1. Bestätigen Sie, dass der Datumsbereich das Transaktionsdatum abdeckt.
2. Bestätigen Sie, dass Sie das richtige Hauptbuchkonto in der Kontoauswahl ausgewählt haben, oder wählen Sie alle Konten aus, um alles zu durchsuchen.
3. Überprüfen Sie, ob Sie auf Cash- oder Accrual-Basis arbeiten – einige Transaktionen werden je nach ausgewählter Methode an verschiedenen Terminen angezeigt.
4. Bestätigen Sie, dass die Transaktion gebucht wurde und sich nicht noch im Entwurf befindet.

</details>

<details>
<summary>Die Beträge in der Originalwährung und Grundwährung sehen identisch aus</summary>

Wenn die Transaktion in Ihrer Grundwährung erfasst wurde, zeigen alle drei Währungsspalten denselben Betrag an. Dies ist das erwartete Verhalten. Unterschiede zwischen den Spalten werden nur angezeigt, wenn eine Transaktion eine Fremdwährung beinhaltet.

</details>

## Verwandte Themen

- [Trial Balance Report](/core-features/accounting/reports/trial-balance) – Überprüfen Sie, dass die gesamten Sollbeträge den gesamten Habenseiten über alle Konten hinweg entsprechen
- [General Ledger Report](/reporting/general-ledger) – Sehen Sie sich den vollständigen Datensatz aller Buchungssätze nach Konto an
- [Chart of Accounts](/accounting/chart-of-accounts) – Sehen Sie sich Ihre Hauptbuchkonten an und verwalten Sie diese
- [Multi-currency Transactions](/accounting/journal-entries/guides/multi-currency-transactions) – Verstehen Sie, wie Fiskl Fremdwährungsbeträge erfasst und konvertiert
