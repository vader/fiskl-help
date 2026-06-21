---
title: "Produkte erstellen"
description: "Erfahren Sie, wie Sie Produktvorlagen in Fiskl erstellen, um die Rechnungserstellung zu beschleunigen und einheitliche Preise über alle Ihre Transaktionen hinweg sicherzustellen."
keywords: ["create product", "product template", "product catalog", "invoicing", "pricing", "ledger account"]
sidebar_position: 1
tags:
  - Products
  - Invoicing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie Produktvorlagen in Fiskl erstellen, in denen Ihre Standardpreisgestaltung, Steuersätze und Beschreibungen gespeichert sind, sodass das Hinzufügen von Positionen zu Rechnungen schnell und konsistent erfolgt.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

Bevor Sie ein Produkt erstellen, halten Sie Folgendes bereit:

- Produktname und Stückpreis
- Das korrekte Ledger-Konto für die Umsatzverfolgung (normalerweise Produktverkäufe)
- Der anwendbare Steuersatz

## Erstellen eines neuen Produkts aus dem Katalog

1. Gehen Sie zu **Produkte & Dienstleistungen** in der linken Seitenleiste
2. Wählen Sie **+ Neues Produkt/Dienstleistung**
3. Wählen Sie die Registerkarte **Produkt**, falls sie nicht bereits aktiv ist
4. Füllen Sie die Felder aus:

   - **Name** — Geben Sie einen klaren, aussagekräftigen Namen ein. Beispiel: „Pro Software-Lizenz - Jahresabonnement"
   - **Einheit** — Geben Sie die Maßeinheit ein. Gängige Optionen sind Stück, Karton, Palette, Lizenz und Einheit
   - **Preis/Satz** — Geben Sie den Stückpreis ein
   - **Währung** — Wählen Sie die Währung für dieses Produkt
   - **Konto** — Wählen Sie das Ledger-Konto für die Umsatzkategorisierung. Die meisten Produkte verwenden Produktverkäufe
   - **Umsatzsteuer** — Wählen Sie den anwendbaren Steuersatz oder die Steuergruppe

5. Geben Sie optional eine **Beschreibung** ein — dieser Text erscheint auf Rechnungen, daher schreiben Sie ihn aus Kundenperspektive
6. Wählen Sie **Produkt/Dienstleistung speichern**

Das Produkt wird in Ihrem Katalog angezeigt und ist bereit, zu Rechnungen hinzugefügt zu werden.

:::tip
Verwenden Sie aussagekräftige Namen, die ähnliche Produkte unterscheiden. „Software-Lizenz - Pro Jahresabonnement" ist klarer als „Lizenz", wenn Sie mehrere Lizenztypen haben.
:::

## Dynamische Namenvorlagen

Beim Erstellen oder Bearbeiten eines Produkts können Sie einen dynamischen Namen erstellen, der sich automatisch bei wiederkehrenden Rechnungen aktualisiert. Aktivieren Sie **Dynamische Namenvorlagen für wiederkehrende Rechnungen**, um die verfügbaren Token anzuzeigen.

- **Datumvorlagen** — Tag, Monat, Jahr, Datum, Kurzformat oder Mittelformat einfügen
- **Kundenvorlagen** — Kundennamen einfügen

Wählen Sie ein Token aus, um es in das Feld **Name** einzufügen. Verwenden Sie **+/-**, um Datumversätze für wiederkehrende Positionen anzupassen.

**Beispiel:** Sie erbringen monatliche Wartungsleistungen für mehrere Kunden. Erstellen Sie ein Produkt mit dem Namen `Website-Wartung - {Client Name} - {Month} {Year}`. Jedes Mal, wenn eine wiederkehrende Rechnung generiert wird, wird der Name automatisch aktualisiert – zum Beispiel „Website-Wartung - Acme Inc - Juli 2025".

:::info
Der Produkttyp kann nach der Erstellung nicht geändert werden. Wenn Sie ein Produkt in eine Dienstleistung ändern müssen oder umgekehrt, erstellen Sie einen neuen Eintrag mit dem richtigen Typ.
:::

## Erstellen von Produkten inline während der Rechnungserstellung

Sie können während der Erstellung einer Rechnung ein neues Produkt erstellen:

1. Öffnen Sie eine neue oder bestehende Rechnung und gehen Sie zum Bereich der Rechnungspositionen
2. Wählen Sie **Zum Hinzufügen klicken**
3. Wählen Sie **Neuer Eintrag** und dann **Produkt**
4. Geben Sie einen Produktnamen in das Positionsfeld ein
5. Füllen Sie die Felder aus – Einheit, Preis/Satz, Währung und Umsatzsteuer
6. Wählen Sie **Weitere Details**, um zusätzliche Felder festzulegen, einschließlich **Konto** und **Währung** (Sie können hier auch den Wechselkurs anpassen)
7. Fügen Sie bei Bedarf weitere Positionen hinzu und wählen Sie dann **Fertig**

Fiskl speichert den Eintrag als Produktvorlage in Ihrem Katalog zur zukünftigen Verwendung.

## Produktfelder erklärt

### Name

Der Primärbezeichner in Ihrem Katalog und auf Rechnungen. Machen Sie ihn spezifisch genug, um ähnliche Artikel zu unterscheiden, aber prägnant genug, um ihn auf einen Blick zu erfassen.

### Einheit

Definiert, wie das Produkt gemessen und verkauft wird. Das Einheitsbezeichnung wird auf Rechnungen neben der Menge angezeigt. Gängige Optionen sind Stück, Karton, Palette, Lizenz und Einheit.

### Preis/Satz

Der Standardverkaufspreis pro Einheit. Sie können diesen Preis auf einzelnen Rechnungen anpassen, ohne die Vorlage zu ändern.

### Währung

Die Währung, in der dieses Produkt bewertet ist. Beim Hinzufügen des Produkts zu einer Rechnung können Sie den Wechselkurs im Bereich **Weitere Details** der Rechnungsposition anpassen.

### Konto

Verknüpft das Produkt mit einem Ledger-Konto in Ihrem Kontenrahmen. Der Umsatz aus diesem Produkt wird dem ausgewählten Ledger-Konto zugewiesen, wenn Rechnungen bezahlt werden. Gängige Optionen sind Produktverkäufe, Software-Umsatz und Geräteverkäufe.

### Umsatzsteuer

Der Standard-Steuersatz oder die Steuergruppe, die angewendet wird, wenn Sie dieses Produkt zu einer Rechnung hinzufügen. Sie können den Satz bei Bedarf auf einzelnen Rechnungspositionen überschreiben.

:::tip
Wenn Ihr Unternehmen Mehrwertsteuer-registriert ist, weisen Sie Ihren Produkten immer eine Umsatzsteuer zu, um eine genaue Steuermeldung zu gewährleisten.
:::

### Beschreibung

Erklärt, was das Produkt beinhaltet. Dieser Text erscheint auf Rechnungen. Halten Sie ihn auf ein bis drei Sätze und notieren Sie alle relevanten Bedingungen oder Einschränkungen.

### Anlagen

Sie können produktbezogene Dateien – wie Fotos, technische Spezifikationen oder Garantiedokumente – vom Bereich **Anlagen** auf der rechten Seite des Rechnungsformulars anhängen. Wählen Sie **Dateien hinzufügen**, um hochzuladen. Es werden maximal drei Dateien mit bis zu 5 MB pro Datei unterstützt.

## Hinzufügen gespeicherter Produkte zu Rechnungen

Zum Hinzufügen eines bestehenden Produkts aus Ihrem Katalog zu einer Rechnung:

1. Öffnen Sie eine neue oder bestehende Rechnung und gehen Sie zum Bereich der Rechnungspositionen
2. Wählen Sie **Bestehende auswählen**
3. Wählen Sie das Produkt oder die Produkte aus der Liste aus
4. Wählen Sie **Ausgewählte anhängen**
5. Passen Sie die Menge nach Bedarf an

## Bearbeiten eines Produkts auf einer Rechnung

Wenn Sie ein Produkt zu einer Rechnung hinzufügen, wird es zu einer Rechnungsposition, die Sie für diese Transaktion bearbeiten können. Wählen Sie im Bereich der Rechnungspositionen **Bearbeiten** auf der Rechnungsposition und nehmen Sie Ihre Änderungen vor. Wählen Sie **Weitere Details**, um Felder wie **Konto** oder **Währung** zu aktualisieren.

Änderungen an einer Rechnungsposition beeinflussen nicht die ursprüngliche Produktvorlage. Zukünftige Rechnungen verwenden weiterhin die Standardwerte der Vorlage.

## Häufig auftretende Probleme

<details>
<summary>Kann ich das gleiche Produkt in mehreren Währungen verwenden?</summary>

Jede Produktvorlage speichert eine einzelne Standardwährung. Wenn Sie Rechnungen für Kunden in verschiedenen Währungen ausstellen, haben Sie zwei Möglichkeiten. Sie können separate Produktvorlagen für jede Währung erstellen – zum Beispiel „Beratungstag - USD" und „Beratungstag - EUR". Alternativ fügen Sie das Produkt zu einer Rechnung hinzu und wählen **Weitere Details** auf der Rechnungsposition, um die Währung und den Wechselkurs für diese Transaktion anzupassen, ohne die Vorlage zu ändern.

</details>

<details>
<summary>Das falsche Ledger-Konto ist einem Produkt zugewiesen</summary>

Gehen Sie zu **Produkte & Dienstleistungen**, öffnen Sie das Produkt und wählen Sie **Bearbeiten**. Aktualisieren Sie das Feld **Konto** auf das korrekte Ledger-Konto und wählen Sie **Produkt/Dienstleistung speichern**. Alternativ wählen Sie im Rechnungspositionsbereich **Bearbeiten** und dann **Weitere Details** und aktualisieren dort das Konto. Änderungen an der Vorlage gelten nur für neue Rechnungen. Bestehende Rechnungen sind nicht betroffen.

</details>

## Verwandte Themen

- [Verwaltung von Dienstleistungen](/products-services/managing-services) — Erstellen Sie Vorlagen für immaterielle Angebote
- [Verwaltung Ihres Katalogs](/products-services/managing-catalog) — Organisieren, bearbeiten und verwalten Sie Ihre Produkte und Dienstleistungen
- [Rechnungen erstellen](/invoicing/creating-invoices) — Fügen Sie Produkte als Rechnungspositionen zu Rechnungen hinzu
- [Steuereinstellungen](/settings/tax-settings) — Konfigurieren Sie die in Ihren Produktvorlagen verfügbaren Steuersätze
