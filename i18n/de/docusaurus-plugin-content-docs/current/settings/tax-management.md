---
title: "Steuerverwaltung"
description: "Richten Sie Steuerbehörden, Steuersätze und Steuergruppen in Fiskl ein. Verwalten Sie Mehrwertsteuer, GST und zusammengesetzte Steuern über mehrere Jurisdiktionen, Währungen und Steuerzeiträume hinweg."
keywords: ["tax management", "tax agency", "tax rates", "tax groups", "VAT", "GST", "compound tax", "sales tax", "Fiskl tax settings"]
sidebar_position: 4
tags:
  - Settings
  - Tax
  - Accounting
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Anleitung erläutert, wie Sie die Steuerbehörden, Steuersätze und Steuergruppen einrichten, die für Ihre Transaktionen gelten. Fiskl unterstützt mehrere Jurisdiktionen, Währungen, einzelne Steuersätze und zusammengesetzte Steuern.

## Vor dem Start


Stellen Sie vor dem Start sicher, dass Sie Folgendes haben:

- Mindestens eine Steuerbehörde erstellt — die Behörde bestimmt das Land und die Währung für jeden Steuersatz, der ihr zugewiesen ist

Für Hilfe bei anderen Buchhaltungseinstellungen siehe [Buchhaltungseinstellungen](/settings/accounting-settings).


## Steuerbehörden


Eine Steuerbehörde stellt die Behörde dar, an die Sie Steuern zahlen — beispielsweise HMRC, das IRS oder ein regionales Mehrwertsteuer-Amt. Jede Behörde ist mit einem bestimmten Land und einer bestimmten Währung verknüpft.


Wenn Sie eine Steuerbehörde erstellen, erstellt Fiskl automatisch ein entsprechendes **Verbindlichkeits**-Konto in Ihrem [Kontenrahmen](/accounting/chart-of-accounts). Alle Transaktionen mit Steuern für diese Behörde werden als Buchungssätze in diesem Konto erfasst. Wenn Sie eine Steuerbehörde umbenennen, wird das entsprechende Konto ebenfalls umbenannt.


### Einrichten einer Steuerbehörde


1. Gehen Sie zu **Einstellungen** > **Steuerverwaltung**
2. Wählen Sie **Steuerbehörden**
3. Wählen Sie **Neue Steuerbehörde**
4. Geben Sie die Steuernummer ein
5. Wählen Sie ein Land und eine Währung aus den Dropdown-Menüs
6. Geben Sie ein Präfix ein (optional)
7. Wählen Sie, ob die Steuernummer in generierten Berichten enthalten sein soll
8. Wählen Sie den Abrechnungszeitraum, z. B. monatlich oder vierteljährlich
9. Wählen Sie ein Abgabedatum
10. Wählen Sie **Erstellen**


:::tip
Wenn Ihr Unternehmen in mehreren Ländern tätig ist, erstellen Sie für jede Jurisdiktion eine separate Steuerbehörde. Erstellen Sie beispielsweise eine Behörde für UK Mehrwertsteuer (GBP) und eine andere für französische Mehrwertsteuer (EUR).
:::


## Steuersätze


Steuersätze definieren den Prozentsatz, der auf Ihre Transaktionen angewendet wird. Jeder Steuersatz muss einer Steuerbehörde zugewiesen werden, und seine Währung wird durch diese Behörde bestimmt. Sie können mehrere Steuersätze einer einzelnen Behörde zuweisen. Steuersätze können als Umsatzsteuer oder Nicht-Umsatzsteuer gekennzeichnet werden.


### Hinzufügen eines Steuersatzes


1. Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuersätze**
2. Wählen Sie **Neuer Steuersatz**
3. Geben Sie den Steuernamen ein, z. B. „Mehrwertsteuer 20 %"
4. Geben Sie den Prozentsatz im Feld **Steuersatz (%)** ein
5. Wählen Sie die **Steuerbehörde** aus, der dieser Steuersatz zugewiesen werden soll
6. Wählen Sie aus, ob dies eine Umsatzsteuer oder eine Nicht-Umsatzsteuer ist
7. Überprüfen Sie die auf dem Bildschirm angezeigte Zusammenfassung der Steuerbehörde
8. Wählen Sie **Erstellen**


## Steuergruppen


Mit Steuergruppen können Sie zwei oder mehr Steuersätze zu einer einzelnen Auswahl kombinieren. Dies ist nützlich, wenn mehrere Steuern für dieselbe Transaktion gelten. Sie können Gruppen als Standard oder zusammengesetzt konfigurieren.


### Standard-Steuergruppe


In einer Standardgruppe wird jede Steuer unabhängig auf den ursprünglichen Betrag berechnet.


### Zusammengesetzte Steuergruppe


In einer zusammengesetzten Gruppe wird eine Steuer auf den ursprünglichen Betrag plus die vorherige Steuer berechnet. Dies wird für Steuersysteme wie die GST/QST von Quebec verwendet.


### Erstellen einer Steuergruppe


1. Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuergruppen**
2. Wählen Sie **Neue Steuergruppe**
3. Geben Sie einen Namen für die Gruppe ein
4. Wählen Sie zwei oder mehr Steuersätze aus, die einbezogen werden sollen
5. Aktivieren Sie das Kontrollkästchen **Zusammengesetzt**, wenn Sie eine gestaffelte Berechnung benötigen
6. Wählen Sie **Erstellen**


## Verwalten von Steuerdatensätzen


Wählen Sie **Aktualisieren**, um sicherzustellen, dass Sie die aktuellsten Informationen anzeigen.


Aus einer beliebigen Liste in der Steuerverwaltung können Sie:


- **Ein Standard festlegen** — Wählen Sie das Sternsymbol neben einem Steuersatz, einer Gruppe oder einer Behörde
- **Bearbeiten** — Wählen Sie das Bearbeitungssymbol, um den Namen und den Standardstatus zu aktualisieren
- **Archivieren** — Wählen Sie das Archivierungssymbol, um Datensätze auszublenden, die Sie nicht mehr benötigen
- **Nach Steuertyp filtern** — Wählen Sie einen Filter aus der Liste **Steuersätze**, um die Ergebnisse einzugrenzen


Um die Genauigkeit vergangener Transaktionen zu schützen, können Sie nach der Erstellung nur den Namen und den Standardstatus aktualisieren. Filtern Sie nach **Status**, um aktive oder archivierte Datensätze anzuzeigen.


:::warning
Um die Zusammensetzung oder den Prozentsatz einer Steuergruppe zu ändern, archivieren Sie die vorhandene Gruppe und erstellen Sie eine neue. Wenn sich beispielsweise ein Steuersatz ändert, erstellen Sie eine neue Steuergruppe mit dem aktualisierten Steuersatz.
:::


## Häufige Probleme


<details>
<summary>Kann keinen neuen Steuersatz erstellen</summary>

Sie müssen eine Steuerbehörde erstellen, bevor Sie Steuersätze hinzufügen. Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuerbehörden** und richten Sie zunächst mindestens eine Behörde ein. Die Behörde definiert das Land und die Währung für den Steuersatz.

</details>


<details>
<summary>Steuersatz zeigt die falsche Währung an</summary>

Ein Steuersatz erbt seine Währung von der zugewiesenen Steuerbehörde. Um eine andere Währung zu verwenden, erstellen Sie eine neue Steuerbehörde mit der richtigen Währung und weisen Sie den Steuersatz dieser Behörde zu.

</details>


<details>
<summary>Verbindlichkeitskonto fehlt für eine Steuerbehörde</summary>

Fiskl erstellt beim Hinzufügen einer Steuerbehörde automatisch ein **Verbindlichkeits**-Konto. Wenn das Konto fehlt, überprüfen Sie Ihren [Kontenrahmen](/accounting/chart-of-accounts) auf ein Konto mit demselben Namen wie die Steuerbehörde.

</details>


## Verwandte Themen


- [Kontenrahmen](/accounting/chart-of-accounts) — Verwalten Sie Ihre Konten, einschließlich automatisch erstellter Steuerlastkonten
- [Buchhaltungseinstellungen](/settings/accounting-settings) — Konfigurieren Sie Ihre Buchhaltungseinstellungen
- [Rechnungen erstellen](/invoicing/creating-invoices) — Wenden Sie Steuersätze bei der Rechnungsstellung an Kunden an
- [Umsatzsteuerbericht](/reporting/sales-tax) — Überprüfen Sie Ihre Steuerschulden und Abgaben
