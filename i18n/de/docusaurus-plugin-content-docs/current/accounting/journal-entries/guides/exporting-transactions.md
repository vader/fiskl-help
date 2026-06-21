---
title: "Filterung und Export von Transaktionen"
description: "Erfahren Sie, wie Sie Buchungssatz-Transaktionen nach Datum, Quelle und Kategorie filtern und in Fiskl nach Google Sheets, Excel oder CSV exportieren."
keywords: ["filter transactions", "export transactions", "journal entries", "Google Sheets export", "CSV export", "accounting", "Fiskl"]
sidebar_position: 9
tags:
  - Accounting
  - Journal entry
  - Reporting
  - Data management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie Transaktionen aus Ihren Konten filtern und exportieren können. Verwenden Sie diese Tools, um spezifische Einträge schnell zu finden und Ihre Daten mit Buchhaltern oder externen Anwendungen zu teilen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

- Filterung und Export sind in jedem Konto verfügbar. Gehen Sie zu **Buchhaltung** > **Kontenrahmen** und wählen Sie das Konto aus, mit dem Sie arbeiten möchten.
- Um nach Google Sheets zu exportieren, benötigen Sie ein Google-Konto. Fiskl fordert Sie auf, den Zugriff beim ersten Mal zu autorisieren.

## Transaktionen filtern

Das Filtern hilft Ihnen, Ihre Transaktionsliste einzugrenzen, um genau das zu finden, was Sie benötigen. Sie können mehrere Filter kombinieren, um Ihre Ergebnisse weiter zu verfeinern.

### Verfügbare Filteroptionen

**Datumsfilter**

- **Datumsbereich** — Legen Sie ein benutzerdefiniertes Start- und Enddatum fest.
- **Vordefinierte Zeiträume** — Wählen Sie einen Zeitraum wie „Dieses Geschäftsjahr" oder „Letzter Monat" für schnellen Zugriff.

**Transaktionsquelle**

Drei Schaltflächen oben in der Transaktionsliste ermöglichen Ihnen, nach der Eingangsmethode in Fiskl zu filtern:

- **Alle** — zeigt alle Transaktionen unabhängig von der Quelle.
- **Manuell** — zeigt nur Transaktionen, die Sie oder Ihr Team manuell eingegeben haben, wie z. B. manuelle Rechnungen, Ausgaben oder Buchungssätze.
- **System** — zeigt automatisch erstellte Transaktionen, einschließlich Bankimporte, wiederkehrende Rechnungen und Integrationssynchronisierungen.

**Statusfilter**

- **Kategorisiert / Nicht kategorisiert** — Filtern Sie danach, ob eine Transaktion einem Konto zugewiesen wurde.
- **Von KI verarbeitet** — Wählen Sie das Glyphensymbol, um zwischen von der KI verarbeiteten Transaktionen und solchen zu wechseln, die nicht verarbeitet wurden oder nicht anwendbar sind.

:::info
Wenn Sie sehen, dass eine Transaktion falsch kategorisiert wurde, können Sie sie manuell korrigieren. Korrektionen helfen, die KI-Genauigkeit für zukünftige Transaktionen zu verbessern.
:::

**Erweiterte Filter**

Wählen Sie **Filter**, um auf zusätzliche Optionen zuzugreifen:

- **Kategorie**
- **Von KI abgeglichen**
- **Abgeglichen**
- **Abgeschlossen**
- **Zeichen** — filtern Sie nach eingehend (In) oder ausgehend (Out)
- **Erstellt von Benutzer**
- **Geändert von Benutzer**

**Textsuche**

Verwenden Sie die Suchleiste, um Transaktionen nach Lieferantennamen, Rechnungsnummer oder Beschreibung zu suchen.

:::tip
Wenn Sie während der Bankabstimmung Abweichungen feststellen, filtern Sie nach **System**, um auf fehlende oder doppelte Bankimporte zu prüfen. Filtern Sie nach **Manuell**, um potenzielle Dateneingabefehler zu identifizieren.
:::

### Wie man Filter anwendet

1. Gehen Sie zu **Buchhaltung** > **Kontenrahmen**.
2. Wählen Sie das Konto aus, das Sie überprüfen möchten.
3. Wählen Sie eine Datumsvorlage, eine Quellschaltfläche (**Alle**, **Manuell** oder **System**) oder einen Statusfilter direkt oben in der Transaktionsliste.
4. Um erweiterte Filter zu verwenden, wählen Sie **Filter**, um das Filterpanel zu öffnen und Ihre Optionen auszuwählen.
5. Wählen Sie **Anwenden**, um die Transaktionsliste zu aktualisieren.

## Transaktionen exportieren

Sie können Ihre Transaktionsliste in drei Formate exportieren. Exportierte Dateien spiegeln alle Filter wider, die Sie vor dem Export angewendet haben.

Fiskl unterstützt die folgenden Exportoptionen:

- **Google Sheets** — Exportiert direkt in ein neues Google Sheet in Ihrem Google Drive.
- **Excel** — Lädt eine `.xlsx`-Datei auf Ihr Gerät herunter.
- **CSV** — Lädt eine `.csv`-Datei auf Ihr Gerät herunter.

### Nach Google Sheets exportieren

1. Gehen Sie zu **Buchhaltung** > **Kontenrahmen**.
2. Wählen Sie das Konto aus, das Sie exportieren möchten.
3. Wenden Sie alle erforderlichen Filter an.
4. Wählen Sie **Export** oben in der Transaktionsliste.
5. Wählen Sie **Google Sheets**.
6. Folgen Sie den Autorisierungsaufforderungen, um Fiskl Zugriff auf Ihr Google-Konto zu gewähren.
7. Ihre Daten werden in ein neues Google Sheet im CSV-Format exportiert.

### Nach Excel oder CSV exportieren

1. Gehen Sie zu **Buchhaltung** > **Kontenrahmen**.
2. Wählen Sie das Konto aus, das Sie exportieren möchten.
3. Wenden Sie alle erforderlichen Filter an.
4. Wählen Sie **Export** oben in der Transaktionsliste.
5. Wählen Sie **Excel** oder **CSV**.
6. Die Datei wird auf Ihr Gerät heruntergeladen.

Das Exportieren ist nützlich zum Erstellen benutzerdefinierter Berichte, zum Teilen von Unterlagen mit Ihrem Buchhalter oder Steuererklärhelfer und zum Analysieren der Geschäftsleistung in Tabellenkalkulationssoftware. Es bietet Ihnen auch eine zusätzliche Sicherung, bevor Sie bedeutende Anpassungen an Ihren Daten vornehmen.

## Häufige Probleme

<details>
<summary>Die Google Sheets-Exportschaltfläche funktioniert nicht</summary>

Dies bedeutet normalerweise, dass die Autorisierung zwischen Fiskl und Ihrem Google-Konto nicht abgeschlossen wurde oder abgelaufen ist.

1. Wählen Sie **Export** > **Google Sheets** erneut.
2. Folgen Sie vollständig den Autorisierungsaufforderungen, einschließlich der Gewährung der erforderlichen Berechtigungen.
3. Wenn das Problem weiterhin besteht, versuchen Sie, sich von Fiskl abzumelden und erneut anzumelden, und wiederholen Sie dann den Export.

</details>

<details>
<summary>Meine exportierte Datei enthält fehlende Transaktionen</summary>

Exporte spiegeln die Filter wider, die derzeit auf Ihre Transaktionsliste angewendet werden. Wenn Transaktionen fehlen, überprüfen Sie, ob aktive Filter diese ausschließen.

1. Wählen Sie **Filter** und überprüfen Sie alle aktiven Filtereinstellungen.
2. Löschen Sie alle Filter, die die Ergebnisse einschränken könnten.
3. Wählen Sie **Anwenden** und exportieren Sie dann erneut.

</details>

<details>
<summary>Ich kann die Filter- oder Exportschaltflächen nicht sehen</summary>

Diese Steuerelemente werden oben in der Transaktionsliste angezeigt, wenn Sie sich in einem bestimmten Konto befinden. Sie werden nicht auf der Übersichtsseite des Kontenrahmens angezeigt.

1. Gehen Sie zu **Buchhaltung** > **Kontenrahmen**.
2. Wählen Sie das spezifische Konto aus, mit dem Sie arbeiten möchten.
3. Die Schaltflächen **Filter** und **Export** werden oben in der Transaktionsliste angezeigt.

</details>

## Verwandte Themen

- [Kontenrahmen](/accounting/chart-of-accounts) — Verwalten Sie Ihre Konten.
- [Buchungssätze Übersicht](/accounting/journal-entries/overview) — Verstehen Sie, wie Buchungssätze in Fiskl funktionieren.
- [Bankkontoabstimmung](/accounting/reconciliation/guides/bank-account-reconciliation) — Gleichen Sie Ihre Banktransaktionen ab.
- [Transaktionen nach Konto](/reporting/transactions-by-account) — Führen Sie einen Transaktionsbericht über Ihre Konten durch.
