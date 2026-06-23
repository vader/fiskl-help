---
title: "Steuer-Einstellungen"
description: "Richten Sie Steuerbehörden, Steuersätze und Steuergruppen in Fiskl ein und verwalten Sie diese, um genaue Steuerkonformität über alle Ihre Transaktionen hinweg zu gewährleisten."
keywords: ["tax settings", "tax rates", "tax agency", "tax groups", "VAT", "sales tax", "tax compliance"]
sidebar_position: 5
tags:
  - Settings
  - Tax settings
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# Steuer-Einstellungen

Die Seite „Steuer-Einstellungen" ermöglicht es Ihnen, Ihre Steuerbehörden, Steuersätze und Steuergruppen zu verwalten. Fiskl unterstützt mehrere Steuerbehörden in verschiedenen Währungen, einschließlich einfacher Sätze, mehrfacher Sätze und gestaffelter Steuern.

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

Greifen Sie auf die Steuer-Einstellungen zu, indem Sie das **Zahnradsymbol** im Menü oben links auswählen, oder navigieren Sie im Dashboard zum Punkt **Einstellungen** > **Steuer-Einstellungen**.

:::info
Bevor Sie einen Steuersatz erstellen können, müssen Sie zunächst eine Steuerbehörde einrichten. Die Steuerbehörde bestimmt die Währung und das Land für alle ihr zugewiesenen Sätze.
:::

## Steuerbehörden

Eine Steuerbehörde stellt die Behörde dar, an die Sie Steuern zahlen, z. B. das Finanzamt oder ein regionales Finanzamt. Jede Steuerbehörde ist einem bestimmten Land und einer bestimmten Währung zugeordnet.

Wenn Sie eine Steuerbehörde erstellen, erstellt Fiskl automatisch ein entsprechendes **Verbindlichkeits**-Konto in Ihrem [Kontenrahmen](/accounting/chart-of-accounts). Alle Transaktionen mit Steuern, die mit dieser Behörde verknüpft sind, werden als Buchungssätze in diesem Konto erfasst. Wenn Sie eine Steuerbehörde umbenennen, wird das entsprechende Konto ebenfalls umbenannt.

### Steuerbehörde einrichten

1. Navigieren Sie zu **Einstellungen** > **Steuer-Einstellungen**
2. Wählen Sie die Registerkarte **Steuerbehörden**
3. Wählen Sie **Neue Steuerbehörde**
4. Geben Sie die Steuernummer ein
5. Wählen Sie ein Land und eine Währung aus den Dropdown-Menüs
6. Geben Sie ein **Präfix** ein (optional)
7. Wählen Sie aus, ob diese Steuernummer in generierten Berichten enthalten sein soll
8. Wählen Sie den Steuerzeitraum aus (z. B. monatlich oder vierteljährlich)
9. Wählen Sie ein Anmeldedatum
10. Wählen Sie **Erstellen**

:::tip
Wenn Ihr Unternehmen in mehreren Ländern tätig ist, erstellen Sie für jede Gerichtsbarkeit eine separate Steuerbehörde. Erstellen Sie beispielsweise eine Behörde für UK-Mehrwertsteuer (GBP) und eine weitere für französische Mehrwertsteuer (EUR).
:::

## Steuersätze

Steuersätze definieren den Prozentsatz, der auf Ihre Transaktionen angewendet wird. Jeder Steuersatz muss einer Steuerbehörde zugeordnet sein. Sie können Sätze entweder als Umsatzsteuer oder als Nicht-Umsatzsteuer bezeichnen.

Die Währung eines Steuersatzes wird durch die zugewiesene Steuerbehörde bestimmt. Sie können mehrere Steuersätze einer einzelnen Behörde zuweisen.

### Steuersatz hinzufügen

1. Navigieren Sie zu **Einstellungen** > **Steuer-Einstellungen**
2. Wählen Sie die Registerkarte **Steuersätze**
3. Wählen Sie **Neuer Steuersatz**
4. Geben Sie den Steuernamen ein (z. B. Mehrwertsteuer 20%)
5. Geben Sie den Prozentsatz im Feld **Satz (%)** ein
6. Wählen Sie die **Steuerbehörde** aus, der dieser Satz zugeordnet werden soll
7. Wählen Sie aus, ob es sich um eine Umsatzsteuer oder eine Nicht-Umsatzsteuer handelt
8. Eine Zusammenfassung der ausgewählten Details der Steuerbehörde wird angezeigt
9. Wählen Sie **Erstellen**

## Steuergruppen

Steuergruppen ermöglichen es Ihnen, zwei oder mehr Steuersätze in einer einzigen Auswahl zu kombinieren. Dies ist nützlich, wenn mehrere Steuern auf dieselbe Transaktion angewendet werden. Sie können auch gestaffelte (kumulierte) Steuern innerhalb einer Gruppe konfigurieren.

### Standard-Steuergruppe

In einer Standardgruppe wird jede Steuer unabhängig auf den ursprünglichen Betrag berechnet.

<details>
<summary>Beispiel: Berechnung einer Standard-Steuergruppe</summary>

Eine Gruppe mit drei Steuern, die auf einen Artikel im Wert von 100 EUR angewendet werden:

- Steuer A (5%): 100 EUR × 0,05 = 5,00 EUR
- Steuer B (6%): 100 EUR × 0,06 = 6,00 EUR
- Steuer C (4%): 100 EUR × 0,04 = 4,00 EUR

Gesamtsteuern: 5,00 EUR + 6,00 EUR + 4,00 EUR = 15,00 EUR

</details>

### Gestaffelte Steuergruppe

In einer gestaffelten Gruppe wird eine Steuer auf den Betrag plus die vorherige Steuer berechnet.

<details>
<summary>Beispiel: Berechnung einer gestaffelten Steuergruppe (Quebec GST/QST)</summary>

Quebec wendet sowohl die föderale GST als auch die provinciale QST an. Die QST wird auf den Preis plus GST berechnet:

- Basispreis: 100 EUR
- GST (5%): 100 EUR × 0,05 = 5,00 EUR
- QST (9,975%): (100 EUR + 5,00 EUR) × 0,09975 = 10,47 EUR

Gesamtsteuern: 5,00 EUR + 10,47 EUR = 15,47 EUR

</details>

### Steuergruppe erstellen

1. Navigieren Sie zu **Einstellungen** > **Steuer-Einstellungen**
2. Wählen Sie die Registerkarte **Steuergruppen**
3. Wählen Sie **Neue Steuergruppe**
4. Geben Sie einen Namen für die Gruppe ein
5. Wählen Sie zwei oder mehr Steuersätze aus, die einbezogen werden sollen
6. Aktivieren Sie bei Bedarf das Kontrollkästchen **Gestaffelt** für eine gestaffelte Berechnung
7. Wählen Sie **Erstellen**

## Zusätzliche Aktionen

Wählen Sie **Aktualisieren**, um sicherzustellen, dass Sie die aktuellsten Informationen anzeigen.

Aus einer beliebigen Steuerliste können Sie die folgenden Aktionen ausführen:

- Um eine Standard-Steuer festzulegen, wählen Sie das **Sternsymbol**
- Um einen Datensatz zu bearbeiten, wählen Sie das **Bearbeitungssymbol**. Um die Genauigkeit früherer Transaktionen zu gewährleisten, können Steuergruppen, Sätze und Behörden nach der Erstellung nicht vollständig bearbeitet werden. Sie können nur den Namen und den Standardstatus aktualisieren
- Um einen Datensatz zu archivieren, wählen Sie das **Archivierungssymbol**. Verwenden Sie den **Status**-Filter, um zwischen **Aktiven** und **Inaktiven** Datensätzen zu wechseln
- In der Liste **Steuersätze** können Sie auch nach **Steuertyp** filtern

:::tip
Wenn Sie die Steuerzusammensetzung oder die Sätze anpassen müssen, archivieren Sie die vorhandene Gruppe und erstellen Sie eine neue. Wenn sich beispielsweise ein Steuersatz ändert, erstellen Sie eine neue Steuergruppe mit dem aktualisierten Satz.
:::

## Häufige Probleme

<details>
<summary>Kann keinen Steuersatz erstellen</summary>

Sie müssen eine Steuerbehörde erstellen, bevor Sie Steuersätze hinzufügen. Navigieren Sie zur Registerkarte **Steuerbehörden** und richten Sie zunächst mindestens eine Behörde ein. Die Behörde definiert das Land und die Währung für den Satz.

</details>

<details>
<summary>Steuersatz zeigt die falsche Währung an</summary>

Ein Steuersatz erbt seine Währung von der zugewiesenen Steuerbehörde. Um eine andere Währung zu verwenden, erstellen Sie eine neue Steuerbehörde mit der richtigen Währung und weisen Sie den Satz stattdessen dieser Behörde zu.

</details>

<details>
<summary>Fehlendes Konto für eine Steuerbehörde</summary>

Fiskl erstellt automatisch ein Verbindlichkeits-Konto, wenn Sie eine Steuerbehörde hinzufügen. Wenn das Konto fehlt, überprüfen Sie den [Kontenrahmen](/accounting/chart-of-accounts) auf ein Konto mit demselben Namen wie Ihre Steuerbehörde.

</details>

## Verwandte Themen

- [Kontenrahmen](/accounting/chart-of-accounts) — Verwalten Sie Ihre Konten, einschließlich automatisch erstellter Steuer-Verbindlichkeitskonten
- [Accounting-Einstellungen](/settings/accounting-settings) — Konfigurieren Sie Ihre Buchhaltungseinstellungen
- [Rechnungen erstellen](/invoicing/creating-invoices) — Wenden Sie Steuersätze beim Abrechnen mit Kunden an
- [Umsatzsteuerbericht](/reporting/sales-tax) — Überprüfen Sie Ihre Steuerverpflichtungen und Anmeldungen
