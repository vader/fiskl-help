---
title: "Hauptbuch-Bericht"
description: "Verwenden Sie den Hauptbuch-Bericht in Fiskl, um alle Finanztransaktionen mit vollständiger Multi-Währungs-Detail anzuzeigen, zu gruppieren und zu exportieren."
keywords: ["general ledger", "GL report", "financial transactions", "multi-currency", "accounting reports", "Fiskl reports"]
sidebar_position: 6
tags:
  - Reporting
  - Accounting
  - Multi-currency
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Dieser Leitfaden erläutert, wie Sie den Hauptbuch-Bericht erstellen und verwenden, um alle Finanztransaktionen in Ihrer Organisation mit flexibler Gruppierung und mehrsprachigen Details anzuzeigen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Was ist der Hauptbuch-Bericht?

Der Hauptbuch-Bericht bietet Ihnen einen vollständigen Überblick über alle Finanztransaktionen in Ihrer Organisation. Er ist besonders nützlich für Unternehmen, die mehrere Währungen verwalten, und bietet detaillierte Einblicke und flexible Analysen über Konten, Transaktionstypen und Zeiträume hinweg.

<details>
<summary>Warum ist der Hauptbuch-Bericht wichtig?</summary>

Der Hauptbuch-Bericht hilft Ihnen dabei:

- Alle Transaktionen mit flexiblen Gruppierungsoptionen anzuzeigen
- Mehrwährungstransaktionen mit ursprünglichen, Konto- und Basiswährungsbeträgen zu verfolgen
- Aktivitäten über Konten, Transaktionstypen und Zeiträume hinweg zu analysieren
- Konten abzustimmen und Finanzüberprüfungen zu unterstützen

</details>

## Wichtigste Funktionen

- **Mehrsprachige Währungsansichten** — sehen Sie Originalwährungsbeträge, Konto-Ledger-Währung und Basisrechnungswährung für jede Transaktion
- **Detaillierte Transaktionsaufschlüsselung** — zeigen Sie Brutto-, Netto- und Steuerbeträge in jeder Währung an
- **Wechselkursverfolgung** — überwachen Sie die Wechselkurse, die zum Zeitpunkt jeder Transaktion angewendet werden
- **Flexible Gruppierung** — gruppieren Sie Transaktionen nach Sachkonto, Transaktionstyp, Jahr, Quartal, Monat oder Datum

## Bevor Sie beginnen

- Sie benötigen Zugriff auf den Bereich **Buchhaltung**. Wenn dieser Bereich nicht sichtbar ist, überprüfen Sie Ihre Berechtigungen beim Eigentümer Ihrer Organisation.
- Der Bericht liefert nur Ergebnisse für Zeiträume, in denen Transaktionen vorhanden sind. Wenn Sie sich unsicher sind, überprüfen Sie zunächst die relevanten Sachkonten im [Kontenrahmen](/accounting/chart-of-accounts).
- Für Unternehmen mit mehreren Währungen aktivieren Sie die Spalte **Wechselkurs** in der Spaltensichtbarkeit, um den auf jede Transaktion angewendeten Wechselkurs anzuzeigen.

## Generieren des Berichts

1. Wählen Sie im linken Menü **Buchhaltung** und dann **Berichte**.
2. Wählen Sie **Hauptbuch** aus der Liste der verfügbaren Berichte.
3. Wählen Sie **Konfigurieren**, um das Einstellungen-Panel zu öffnen.
4. Legen Sie Ihren **Datumsbereich** für den Zeitraum fest, den Sie analysieren möchten.
5. Wählen Sie eine **Gruppierungsoption** — wählen Sie eine der folgenden: **Sachkonto**, **Transaktionstyp**, **Jahr**, **Quartal**, **Monat** oder **Datum**.
6. Verwenden Sie den Kontoauswähler, um alle Konten oder bestimmte Sachkonten auszuwählen, die einbezogen werden sollen.
7. Legen Sie nach Bedarf weitere Anzeigeoptionen fest (siehe [Anzeigeoptionen](#anzeigeoptionen) unten).
8. Wählen Sie **Ausführen**, um den Bericht zu generieren.

## Anzeigeoptionen

Diese Optionen sind im Panel **Konfigurieren** verfügbar und können jederzeit angepasst werden:

- **Kasse oder Rechnungsabgrenzung** — wechseln Sie zwischen Buchhaltungsmethoden, um zu ändern, wie Transaktionen erfasst werden
- **Unrealisierte Wechselkursgewinne/-verluste** — aktivieren Sie diese Option, um unrealisierte Devisenbewegungen einzubeziehen
- **Durch 1.000 dividieren** — vereinfacht große Zahlen für bessere Lesbarkeit
- **Kompakt** — verdichtet das Berichtslayout für eine engere, druckfreundliche Ansicht

:::tip
Ihre standardmäßige Kassen- oder Rechnungsabgrenzungsbasis kann in [Buchhaltungseinstellungen](/settings/accounting-settings) festgelegt werden.
:::

:::tip
Verwenden Sie **Durch 1.000 dividieren** in Kombination mit **Kompakt**, wenn Sie den Bericht Stakeholdern präsentieren — dies hält die Zahlen lesbar und das Layout sauber.
:::

## Berichtsspalten verstehen

Der Hauptbuch-Bericht zeigt Beträge in bis zu drei Währungen für jede Transaktion an:

- **Originalwährung** — die bei der Erfassung der Transaktion verwendete Währung
- **Kontowährung** — die Währung des Sachkontos
- **Basiswährung** — Ihre Organisation's Basis-Rechnungswährung

Jede Transaktion zeigt auch eine Aufschlüsselung des **Bruttobetrags** (Gesamtbetrag), **Nettobetrags** (ohne Steuer) und **Steuerbetrags**.

## Anpassen von Spalten

Im Abschnitt **Spaltensichtbarkeit** können Sie jede Spalte ein- oder ausschalten, um nur das Benötigte anzuzeigen. Ihre Auswahl wird auch beim Export des Berichts angewendet.

<details>
<summary>Siehe eine Aufschlüsselung der verfügbaren Spalten</summary>

**Grundinformationen:**

- **Datum** — wann die Transaktion aufgetreten ist
- **Konto** — das Sachkonto, auf das die Transaktion gebucht ist
- **Nummer** — die Transaktions- oder Dokumentreferenznummer
- **Typ** — der Transaktionstyp, z. B. Rechnung, Ausgabe oder Überweisung
- **Name** — der Name, der der Transaktion zugeordnet ist
- **Kunde/Lieferant** — der Kunde oder Lieferant, der der Transaktion zugeordnet ist
- **Kategorie** — die zugewiesene Transaktionskategorie
- **Beschreibung** — eine kurze Beschreibung der Transaktion

**Amtsspalten:**

Jeder Betrag wird in drei Währungen angezeigt:

- **Originalwährungsbetrag** — die bei der Erfassung der Transaktion verwendete Währung
- **Kontowährungsbetrag** — die Währung des Sachkontos
- **Basiswährungsbetrag** — Ihre Organisation's Basis-Rechnungswährung

**Zusätzlich:**

- **Wechselkurs** — der Wechselkurs zwischen Basiswährung und Kontowährung zum Zeitpunkt der Transaktion

</details>

## Exportieren des Berichts

1. Wählen Sie die Schaltfläche Exportieren oben rechts im Bericht.
2. Wählen Sie **Google Sheets** oder **Excel** als Ihr Format.

:::info
Spaltenanpassung wird beim Export berücksichtigt. Legen Sie Ihre bevorzugten Spalten vor dem Export fest, um eine saubere Tabelle zu erhalten.
:::

## Häufige Probleme

<details>
<summary>Der Bericht zeigt keine Transaktionen für den ausgewählten Zeitraum an</summary>

Dies bedeutet normalerweise, dass für den ausgewählten Datumsbereich keine Transaktionen in den ausgewählten Konten erfasst wurden.

1. Erweitern Sie den Datumsbereich und wenden Sie ihn erneut an.
2. Überprüfen Sie, dass die richtigen Sachkonten ausgewählt sind — verwenden Sie **Alle Konten**, um ein Kontofilterproblem auszuschließen.
3. Bestätigen Sie, dass Transaktionen für den Zeitraum vorhanden sind, indem Sie das relevante Sachkonto im **Kontenrahmen** überprüfen.

</details>

<details>
<summary>Währungsbeträge sehen falsch oder inkonsistent aus</summary>

Der Bericht zeigt Beträge in drei Währungen an: ursprüngliche, Konto- und Basis. Wenn eine Zahl unerwartet aussieht:

1. Überprüfen Sie die Spalte **Wechselkurs**, um den zum Zeitpunkt der Transaktion verwendeten Wechselkurs zu bestätigen.
2. Schalten Sie **Unrealisierte Wechselkursgewinne/-verluste** ein oder aus, um zu sehen, ob dies den Unterschied erklärt.
3. Überprüfen Sie Ihre Buchhaltungsmethode in **Konfigurieren** — das Wechseln zwischen Kasse und Rechnungsabgrenzung ändert, welche Transaktionen angezeigt werden.

</details>

<details>
<summary>Der Export enthält nicht alle Spalten</summary>

Der Export berücksichtigt Ihre aktive Spaltenauswahl. Wenn Spalten aus dem Export fehlen:

1. Wählen Sie **Filter & Einstellungen** oben rechts im Bericht.
2. Bestätigen Sie, dass alle erforderlichen Spalten in **Spaltensichtbarkeit** aktiviert sind.
3. Exportieren Sie den Bericht erneut.

</details>

## Verwandte Themen

- [Kontenrahmen](/accounting/chart-of-accounts) — Zeigen Sie Ihre Sachkonten an und verwalten Sie diese
- [Buchhaltungseinstellungen](/settings/accounting-settings) — Legen Sie Ihre Basiswährung und Buchhaltungsmethode fest
- [Saldenbilanz](/core-features/accounting/reports/trial-balance) — Zeigen Sie eine Zusammenfassung aller Kontostände an
- [Gewinn- und Verlustrechnung](/reporting/profit-and-loss) — Analysieren Sie Einnahmen und Ausgaben über einen Zeitraum
