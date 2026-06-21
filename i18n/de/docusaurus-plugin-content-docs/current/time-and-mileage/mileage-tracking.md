---
title: "Kilometerstand-Verfolgung"
description: "Erfahren Sie, wie Sie Geschäftskilometer in Fiskl mithilfe manueller Einträge, Kilometerzählerablesungen oder Google Maps erfassen, um Reisekosten für Abrechnung und Steuern zu dokumentieren."
keywords: ["mileage tracking", "mileage entry", "business travel", "odometer", "Google Maps", "billable mileage", "distance tracking"]
sidebar_position: 3
tags:
  - Time & Mileage
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Dieser Leitfaden erklärt, wie Sie den Kilometerstand in Fiskl verfolgen und Geschäftsreiseausgaben für die Kundenabrechnung und Steuervergünstigungen erfassen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

Um die Kilometerstandverfolgung optimal zu nutzen, richten Sie diese voraus ein:

- Stellen Sie Ihre bevorzugte Entfernungseinheit in **Einstellungen** > **Benutzereinstellungen** ein — dies wird der Standard für alle neuen Einträge
- Stellen Sie Ihren Standard-Kilometerstand-Tarif in **Einstellungen** > **Benutzereinstellungen** ein — Fiskl verwendet diesen Tarif für alle neuen Einträge, sodass Sie ihn nicht jedes Mal eingeben müssen
- Fügen Sie Ihre Kunden in **Kunden** hinzu, wenn Sie den Kilometerstand abrechnen möchten — Sie können auch direkt aus dem Kilometerstandeingabeformular einen Kunden erstellen

## Erstellen eines Kilometerstand-Eintrags

Alle Kilometerstand-Einträge enthalten die gleichen grundlegenden Informationsfelder. Die für die Entfernungsberechnung ausgewählte Methode bestimmt die Felder im Abschnitt **Entfernung & Tarif** unten.

### Grundlegende Informationen

1. Wählen Sie in der linken Seitenleiste **Zeit & Kilometerstand**
2. Wählen Sie **Neuer Kilometerstand-Eintrag**
3. Geben Sie einen Namen für den Eintrag im Feld **Name** ein — verwenden Sie eine Beschreibung, die den Reisezweck identifiziert
4. Legen Sie das **Datum** der Reise fest
5. Wählen Sie einen **Kunden** aus, wenn der Kilometerstand abrechenbar ist
6. Wählen Sie die **Währung** für den Eintrag
7. Wählen Sie ein **Konto** aus — Standard ist **Umsatz - Sonstiges**
8. Wählen Sie eine **Steuer** oder Steuergruppe aus, falls zutreffend
9. Geben Sie optional eine **Beschreibung** mit zusätzlichen Reisedetails ein

### Entfernung & Tarif

Wählen Sie Ihre bevorzugte Methode von den drei Registerkarten im Abschnitt **Entfernung & Tarif**.

#### Manuelle Eingabe

Geben Sie die Entfernung direkt ein, wenn Sie den genauen Kilometerstand kennen.

1. Wählen Sie die Registerkarte **Manuelle Eingabe**
2. Geben Sie die Entfernung ein und wählen Sie **Meilen** oder **Kilometer**
3. Geben Sie den **Tarif pro Meile** (oder km) ein
4. Schalten Sie **Hin- und Rückfahrt** ein, wenn der Kilometerstand beide Richtungen abdeckt — Fiskl verdoppelt die Entfernung automatisch
5. Schalten Sie **Rückerstattung** ein, wenn dieser Eintrag für eine Kostenrückerstattung berechtigt ist

#### Kilometerzähler

Erfassen Sie Start- und End-Kilometerzählerstände für präzise Entfernungsverfolgung.

1. Wählen Sie die Registerkarte **Kilometerzähler**
2. Geben Sie den Anfangs-Kilometerstand ein
3. Geben Sie den End-Kilometerstand ein
4. Wählen Sie **Meilen** oder **Kilometer**
5. Geben Sie den Tarif pro Meile oder Kilometer ein
6. Schalten Sie **Hin- und Rückfahrt** oder **Rückerstattung** nach Bedarf ein

Fiskl berechnet die Entfernung, indem es den Anfangswert vom Endwert subtrahiert.

#### Google Maps

Lassen Sie Fiskl die Entfernung automatisch anhand von Start- und Endorten berechnen.

1. Wählen Sie die Registerkarte **Google Maps**
2. Geben Sie die Startadresse oder den Startort ein
3. Geben Sie die Endadresse oder den Endort ein
4. Überprüfen Sie die berechnete Entfernung auf der Karte
5. Bestätigen oder passen Sie den Tarif pro Meile oder Kilometer an
6. Schalten Sie **Hin- und Rückfahrt** oder **Rückerstattung** nach Bedarf ein

Google Maps verwendet die effizienteste Route zur Entfernungsberechnung. Überprüfen Sie die Route auf der Karte, bevor Sie speichern.

### Speichern des Eintrags

Wählen Sie **Speichern**, um den Kilometerstand-Eintrag zu erfassen. Fiskl berechnet die Gesamtkosten durch Multiplikation von Entfernung mit Tarif.

## Festlegen von Kilometerstand-Tarifen

Sie können Tarifen auf drei Ebenen festlegen, um Ihren Abrechnungs- oder Steueranforderungen gerecht zu werden.

**Standardtarif** — Legen Sie Ihren Standardtarif in **Einstellungen** > **Benutzereinstellungen** fest. Fiskl verwendet diesen Tarif für alle neuen Einträge.

**Kundenspezifischer Tarif** — Überschreiben Sie den Standard für einen bestimmten Kunden. Gehen Sie zu **Kunden**, wählen Sie den Kunden aus, und legen Sie einen benutzerdefinierten Kilometerstand-Tarif fest.

**Eintragsgerechter Tarif** — Ändern Sie den Tarif beim Erstellen oder Bearbeiten eines einzelnen Eintrags für besondere Umstände.

:::info
Viele Steuerbehörden veröffentlichen Standard-Kilometerstand-Tarifen für Geschäftsreiseabzüge. Aktualisieren Sie Ihren Standard-Tarif jährlich, um die Einhaltung aktueller Richtlinien sicherzustellen.
:::

## Abrechenbare vs. nicht abrechenbare Kilometerstand

Wenn Sie einen Kunden bei einem Kilometerstand-Eintrag auswählen, wird dieser als abrechenbar gekennzeichnet. Lassen Sie das Feld **Kunden** leer, um den Eintrag als nicht abrechenbar zu kennzeichnen.

Verfolgen Sie beide Typen, um Steuervergünstigungen zu maximieren und Reisekosten in Ihrem gesamten Unternehmen zu analysieren.

## Bilder anhängen

Fügen Sie Fotos zu Kilometerstand-Einträgen zur Überprüfung und Dokumentation hinzu.

1. Erstellen Sie einen Kilometerstand-Eintrag oder öffnen Sie ihn
2. Wählen Sie **Bild anhängen**
3. Wählen Sie ein Foto von Ihrem Gerät oder machen Sie ein neues auf
4. Fügen Sie optional eine Beschriftung hinzu
5. Wählen Sie **Speichern**

Nützliche Bilder zum Anhängen sind Kilometerzählerstände am Anfang und Ende einer Reise, Parkplatzbelege, Mautbelege und Fotos, die den geschäftlichen Zweck der Reise dokumentieren.

## Bearbeiten und Löschen von Einträgen

**So bearbeiten Sie einen nicht abgerechneten Eintrag:** Gehen Sie zu **Zeit & Kilometerstand**, wählen Sie den Eintrag aus, nehmen Sie Ihre Änderungen vor, und wählen Sie **Speichern**.

**So bearbeiten Sie einen abgerechneten Eintrag:** Bearbeiten Sie den Eintrag direkt auf der Rechnung anstelle im Abschnitt Kilometerstandverfolgung.

**So löschen Sie einen Eintrag:**

1. Wählen Sie in der linken Seitenleiste **Zeit & Kilometerstand**
2. Wählen Sie das Menü im Kilometerstand-Eintrag und wählen Sie **Löschen**
3. Bestätigen Sie das Löschen

:::caution
Das Löschen eines Kilometerstand-Eintrags, der sich bereits auf einer Rechnung befindet, entfernt ihn aus dieser Rechnung. Erwägen Sie stattdessen, das Rechnungsposten zu bearbeiten.
:::

## Entfernungseinheiten

Fiskl unterstützt sowohl Meilen als auch Kilometer. Um Ihre bevorzugte Einheit zu ändern, gehen Sie zu **Einstellungen** > **Benutzereinstellungen**, suchen Sie **Entfernungseinheit**, wählen Sie **Meilen** oder **Kilometer**, und wählen Sie **Speichern**.

Alle zukünftigen Einträge verwenden Ihre ausgewählte Einheit. Vorhandene Einträge bleiben in ihrer ursprünglichen Einheit.

## Häufig auftretende Probleme

<details>
<summary>Google Maps zeigt die falsche Entfernung an</summary>

Die Route kann Autobahnen verwenden, obwohl Sie Landstraßen genommen haben.

1. Überprüfen Sie die auf der Karte angezeigte Route
2. Wenn die Route falsch ist, wechseln Sie zur Registerkarte **Manuelle Eingabe**
3. Geben Sie die tatsächliche Entfernung Ihres Kilometerzählers ein
4. Fügen Sie einen Hinweis im Feld **Beschreibung** hinzu, der die Abweichung erklärt

</details>

<details>
<summary>Kilometerstand-Tarif ist bei einem Eintrag falsch</summary>

Der Eintrag verwendet möglicherweise Ihren Standard-Tarif anstelle eines kundenspezifischen Tarifs.

1. Überprüfen Sie den benutzerdefinierten Tarif des Kunden in **Kunden**
2. Öffnen Sie den Kilometerstand-Eintrag und aktualisieren Sie den Tarif manuell
3. Um dies in Zukunft zu vermeiden, legen Sie den richtigen Tarif auf Kundenebene fest

</details>

<details>
<summary>Müssen von Meilen zu Kilometern wechseln</summary>

1. Gehen Sie zu **Einstellungen** > **Benutzereinstellungen**
2. Aktualisieren Sie die **Entfernungseinheit** auf **Kilometer**
3. Wählen Sie **Speichern**

Vorhandene Einträge bleiben in ihrer ursprünglichen Einheit. Fügen Sie eine Notiz zu älteren Einträgen hinzu, wenn Sie die Einheiten klären müssen.

</details>

## Verwandte Themen

- [Zeitverfolgung](/time-and-mileage/time-tracking) — Verfolgen Sie abrechenbare Stunden neben dem Kilometerstand
- [Abrechnung von Zeit und Kilometerstand](/time-and-mileage/billing-time-and-mileage) — Fügen Sie Kilometerstand-Einträge zu Kundenrechnungen hinzu
- [Rechnungen erstellen](/invoicing/creating-invoices) — Erstellen Sie Rechnungen für Kunden
- [Unternehmenseinstellungen](/settings/company-settings) — Konfigurieren Sie Standard-Kilometerstand-Tarife und Entfernungseinheiten
