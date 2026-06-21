---
title: "Umsatzsteuerbericht"
description: "Verwenden Sie den Fiskl-Umsatzsteuerbericht, um Steuerschulden zu verfolgen, Transaktionen nach Steuerperiode zu überprüfen und Daten für die Einreichung bei den Steuerbehörden zu exportieren."
keywords: ["sales tax report", "tax liability", "tax period", "VAT report", "tax filing", "tax agency"]
sidebar_position: 7
tags:
  - Reporting
  - Tax
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erläutert, wie Sie den Umsatzsteuer-Bericht verwenden, um Steueraktivitäten zu überprüfen, Steuerschulden zu berechnen und Daten für Steuerbehörden zu exportieren.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

- Stellen Sie sicher, dass Ihre Steuernummern (Steuerbehörden) unter **Einstellungen** > **Steuerverwaltung** konfiguriert sind. Jede Steuernummer generiert ihren eigenen Bericht.
- Bestätigen Sie, dass auf Ihren Rechnungen und Lieferantenrechnungen die korrekten Steuersätze angewendet werden. Steuerbeträge werden in dem Monat erfasst, in dem die Rechnung oder Lieferantenrechnung erstellt wird, nicht wenn die Zahlung eingegangen ist.

## Funktionsweise des Berichts

Der Umsatzsteuer-Bericht wird pro Steuernummer generiert, auch als Ihre Steuerbehörde bekannt. Jeder Bericht zeigt Daten in der Währung dieser Steuernummer an, mit der Option, Umrechnungen in Basiswährung daneben anzuzeigen.

Sie generieren den Bericht für einen bestimmten Steuerzeitraum. Der Bericht enthält Eröffnungs- und Schlussstände für diesen Zeitraum und gibt Ihnen einen vollständigen Überblick über Ihre Steuerposition.

:::info
Steuern werden zum Zeitpunkt der Rechnungs- oder Lieferantenrechnungserstellung berechnet. Der erfasste Monat ist das Erstellungsdatum, unabhängig davon, wann die Zahlung eingegangen ist.
:::

Der Umsatzsteuer-Bericht fasst alle Transaktionen mit Verkäufen und Käufen zusammen, die an die Finanzbehörden eines Landes gemeldet werden müssen. In Fiskl umfasst „Umsatzsteuer" sowohl Verkaufs- als auch Einkaufssteuern innerhalb eines einzelnen Steuertyps.

## Einrichten eines Steuersatzes

Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuersätze** und erstellen Sie einen neuen Steuersatz:

1. Geben Sie unter **Steuername** einen beschreibenden Namen ein – beispielsweise *Umsatzsteuer Landwirtschaft* oder *Einkaufssteuer Lebensmittel*.
2. Geben Sie den Steuersatz ein.
3. Markieren Sie ihn als **Umsatzsteuer**.

Nach der Erstellung wird der Steuersatz zur Auswahl bei Transaktionen verfügbar.

## Wie Steuern in Transaktionen angezeigt werden

- **Rechnungen** an Kunden ausgestellt – Steuer wird unter Verkaufen angezeigt
- **Lieferantenrechnungen** als Käufe erfasst – Steuer wird unter Käufen angezeigt

## Zugriff auf den Bericht

1. Wählen Sie **Buchhaltung** in der linken Seitenleiste.
2. Wählen Sie **Berichte**.
3. Wählen Sie **Umsatzsteuer** aus der Liste der Berichte.

## Konfigurieren des Berichts

Wählen Sie **Filter & Einstellungen**, um das Konfigurationsfenster zu öffnen.

### Umsatzsteuerkonto und Berichtszeitraum

1. Wählen Sie Ihre Steuerbehörde aus dem Dropdown **Umsatzsteuerkonto**.
2. Wählen Sie einen Berichtszeitraum unter **Berichtszeitraum** – beispielsweise „Dieses Quartal bis heute" oder einen benutzerdefinierten Datumsbereich.

### Berichtsbasis

Zwei Schalter steuern, wie Transaktionen einbezogen werden:

- **Periodenabgrenzung** – erfasst Steuern, wenn Rechnungen oder Lieferantenrechnungen erstellt werden, unabhängig davon, wann die Zahlung eingegangen ist. Deaktivieren Sie diese Option, um zur Kassierbasis zu wechseln, die Steuern nur bei Zahlungseingang erfasst.
- **Unrealisierte Transaktionen einschließen** – bezieht Transaktionen ein, die noch nicht abgewickelt wurden.

### Anzeigeoptionen

Verwenden Sie die Schalter **Anzeigeoptionen**, um die Darstellung des Berichts zu steuern. Änderungen werden sofort angewendet.

- **Detailliert anzeigen** – wechselt von der Zusammenfassungsansicht zur Ansicht mit Transaktionsdetails
- **Basiswährung anzeigen** – fügt Spalten in Basiswährung neben der Steuerkontowährung hinzu
- **Kompakt** – reduziert den Zeilenabstand für eine kompaktere Ansicht

## Hinzufügen von Notizen zum Bericht

Wählen Sie **Notizen** am unteren Ende des Berichts, um Notizen zu Ihrem Bericht hinzuzufügen. Notizen werden in jeden Export oder Download einbezogen.

## Exportieren des Berichts

1. Wählen Sie **Exportieren** oben rechts auf dem Bildschirm.
2. Wählen Sie **Google Sheets**, **Excel** oder **CSV** als Exportformat.

Die exportierte Datei entspricht Ihrer aktuellen Ansicht (Zusammenfassung oder Detailliert) und enthält alle angewendeten Filter.

Der Berichtstotal zeigt Ihre Netto-Steuerposition für den Zeitraum. Ein negativer Betrag bedeutet, dass Steuer erstattet wird. Ein positiver Betrag bedeutet, dass Steuer an die Finanzbehörde zu zahlen ist.

:::tip
Exportieren Sie in der Detailliertansicht bei der Vorbereitung von Unterlagen für eine Steuerbehörde oder Prüfung. Sie enthält vollständige Daten auf Transaktionsebene.
:::

## Häufige Probleme

<details>
<summary>Mein Bericht zeigt keine Daten für den ausgewählten Zeitraum</summary>

Dies bedeutet normalerweise, dass in diesem Zeitraum keine Rechnungen oder Lieferantenrechnungen mit angewendeter Steuer erstellt wurden.

1. Bestätigen Sie, dass die richtige Steuerbehörde im Dropdown **Umsatzsteuerkonto** ausgewählt ist.
2. Überprüfen Sie, dass der **Berichtszeitraum** die erwarteten Termine abdeckt.
3. Überprüfen Sie, dass Rechnungen und Lieferantenrechnungen in diesem Zeitraum Steuersätze angewendet haben – unversteuerte Transaktionen werden nicht in diesem Bericht angezeigt.

</details>

<details>
<summary>Steuerbeträge werden im falschen Monat angezeigt</summary>

Wenn **Periodenabgrenzung** aktiviert ist, wird Steuer am Erstellungsdatum der Rechnung oder Lieferantenrechnung erfasst, nicht am Zahlungsdatum. Wenn eine Lieferantenrechnung im März erstellt, aber im April bezahlt wurde, erscheint die Steuer im März-Bericht. Passen Sie Ihren **Berichtszeitraum** an das Erstellungsdatum an, oder deaktivieren Sie **Periodenabgrenzung**, um zur Kassierbasis-Berichtsführung zu wechseln.

</details>

<details>
<summary>Ich kann meine Steuerbehörde nicht im Dropdown Umsatzsteuerkonto finden</summary>

Das Dropdown zeigt nur Steuernummern an, die unter **Einstellungen** > **Steuerverwaltung** konfiguriert sind. Wenn Ihre Steuerbehörde fehlt, fügen Sie sie dort zuerst hinzu und kehren Sie dann zum Bericht zurück.

</details>

<details>
<summary>Spalten mit Basiswährung werden nicht angezeigt</summary>

Basiswährungsspalten sind standardmäßig ausgeblendet. Öffnen Sie **Filter & Einstellungen**, gehen Sie zu **Anzeigeoptionen** und aktivieren Sie **Basiswährung anzeigen**.

</details>

## Verwandte Themen

- [Steuerverwaltung](/settings/tax-management) – Konfigurieren Sie Steuernummern und -sätze für Ihr Unternehmen
- [Berichtsübersicht](/reporting/overview) – Zeigen Sie alle verfügbaren Berichte in Fiskl an
- [Gewinn und Verlust](/reporting/profit-and-loss) – Überprüfen Sie die Gesamtleistung Ihres Unternehmens
- [Rechnungen erstellen](/invoicing/creating-invoices) – Wenden Sie Steuersätze beim Erstellen von Rechnungen an
