---
title: "Zeitverfolgung"
description: "Erfassen Sie Zeit in Fiskl durch manuelle Eingabe oder mit Start- und Endzeiten, und fügen Sie diese zu Kundenabrechnungen hinzu."
keywords: ["time tracking", "billable hours", "hourly rate", "time entry", "time rounding"]
sidebar_position: 1
tags:
  - Time tracking
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Dieses Handbuch erläutert die Verfolgung von Arbeitszeiten in Fiskl und deren Hinzufügung zu Kundennrechnungen.

## Zeiteinträge verstehen

Zeiteinträge in Fiskl sind eigenständige Datensätze, die abgeschlossene Arbeiten darstellen. Jeder Eintrag erfasst die Dauer, den Satz und Details zur ausgeführten Arbeit.

Zeiteinträge bleiben von Rechnungen getrennt, bis Sie bereit sind zu fakturieren. Dies ermöglicht es Ihnen, Arbeiten kontinuierlich zu verfolgen und Kunden nach Ihrem bevorzugten Plan in Rechnung zu stellen.

## Erstellen eines Zeiteintrags

So erstellen Sie einen neuen Zeiteintrag:

1. Gehen Sie zu **Zeit** in der linken Seitenleiste
2. Wählen Sie **+ Neuer Zeiteintrag**
3. Geben Sie einen Namen in das Feld **Name** ein (dieser wird auf Rechnungen angezeigt)
4. Wählen Sie das Datum, an dem die Arbeit ausgeführt wurde
5. Wählen Sie den **Kunde** (erforderlich für abrechenbare Arbeiten)
6. Wählen Sie die **Währung**
7. Wählen Sie ein **Ertragskonto**
8. Wählen Sie ggf. eine **Steuer**
9. Geben Sie optional eine **Beschreibung** ein
10. Geben Sie Zeit und Satz im Abschnitt **Zeit & Satz** ein
11. Wählen Sie **Speichern**

### Manueller Zeiteintrag

Standardmäßig zeigt der Abschnitt **Zeit & Satz** separate Felder für **Stunden** und **Minuten** an. Geben Sie die Gesamtdauer der ausgeführten Arbeit ein.

### Start- und Endzeiten

Aktivieren Sie **Start - Endzeit**, um zu Start- und Endzeitfeldern zu wechseln. Geben Sie das **Startdatum**, die **Startzeit**, das **Enddatum** und die **Endzeit** ein. Fiskl berechnet die **Berechnete Dauer** automatisch.

## Zeiteintragsfelder

Jeder Zeiteintrag enthält diese Details:

- **Name** — die Eintragsbezeichnung wie sie auf Rechnungen angezeigt wird
- **Datum** — wann die Arbeit ausgeführt wurde
- **Kunde** — für wen die Arbeit ausgeführt wurde (leer lassen für nicht abrechenbare Zeit)
- **Währung** — Währung für den Satz
- **Ertragskonto** — Sachkonto für die Verbuchung von Einnahmen
- **Steuer** — geltende Steuer oder Steuergruppe (optional)
- **Beschreibung** — zusätzliche Notizen zur Arbeit (optional)
- **Satz pro Stunde** — pro Stunde berechneter Betrag

## Festlegen von Zeitsätzen

Sie können Sätze auf verschiedenen Ebenen festlegen, um Ihre Abrechnungsstruktur zu entsprechen.

**Standardsatz:** Legen Sie Ihren Standard-Stundensatz in **Einstellungen** > **Benutzereinstellungen** > **Nachverfolgungseinstellungen** fest. Fiskl verwendet diesen Satz für alle neuen Zeiteinträge.

**Kundenstandardsatz:** Legen Sie einen Standardsatz für einen bestimmten Kunden in **Verkauf** > **Kunden** fest. Dies überschreibt die Unternehmensstandard für alle Zeiteinträge, die mit diesem Kunden verknüpft sind.

**Eintragsabhängiger Satz:** Ändern Sie den **Satz pro Stunde** beim Erstellen oder Bearbeiten einzelner Zeiteinträge für Spezialrojekte oder besondere Umstände.

## Abrechenbare und nicht abrechenbare Zeit

Zeiteinträge können abrechenbar oder nicht abrechenbar sein.

**Abrechenbare Zeit:** Fügen Sie den Zeiteintrag an eine Rechnung an, um ihn einem Kunden in Rechnung zu stellen. Einträge, die an eine Rechnung angehängt sind, können nach **Abgerechnet** gefiltert werden.

**Nicht abrechenbare Zeit:** Einträge, die nicht an eine Rechnung angehängt sind, werden als **Nicht abgerechnet** gefiltert. Verwenden Sie dies für interne Arbeiten, administrative Aufgaben oder berufliche Weiterentwicklung, die Sie Kunden nicht in Rechnung stellen.

## Zeitmessung auf dem Mobilgerät

Die Fiskl-Mobile-App enthält alle Zeitmessungsfunktionen, einschließlich Timer und Zeitrundung.

### Timer

Der Timer verfolgt die Zeit automatisch, während Sie arbeiten.

So verwenden Sie den Timer:

1. Öffnen Sie die Fiskl-Mobile-App
2. Gehen Sie zu **Zeit**
3. Wählen Sie die Schaltfläche Wiedergabe, um den Timer zu starten

Der Timer läuft im Hintergrund, während Sie arbeiten. Wählen Sie **Pausieren**, um ihn zu pausieren, oder wählen Sie **Zeit protokollieren**, um den Eintrag zu speichern und zu beenden.

:::tip
Der Timer läuft weiter, auch wenn Sie in der App navigieren. Wählen Sie **Pausieren** oder **Zeit protokollieren**, um ihn zu stoppen.
:::

### Zeitrundung

Um die Rundung zu aktivieren, wählen Sie die Rundungsoptionen unter dem Timer aus und wählen Ihr bevorzugtes Inkrement.

Verfügbare Rundungsoptionen:

- 3 Minuten (0,05 Stunden)
- 5 Minuten (0,08 Stunden)
- 10 Minuten (0,17 Stunden)
- 15 Minuten (0,25 Stunden)
- 30 Minuten (0,50 Stunden)

Fiskl rundet auf zum nächsten Inkrement auf. Beispielsweise werden bei 15-Minuten-Rundung 1 Stunde und 8 Minuten zu 1 Stunde und 15 Minuten.

## Bearbeiten von Zeiteinträgen

Ändern Sie Zeiteinträge, bevor oder nachdem Sie sie zu Rechnungen hinzufügen.

So bearbeiten Sie einen nicht abgerechneten Zeiteintrag:

1. Gehen Sie zu **Zeit** in der linken Seitenleiste
2. Suchen Sie den Eintrag, den Sie bearbeiten möchten
3. Wählen Sie den Eintrag
4. Nehmen Sie Ihre Änderungen vor
5. Wählen Sie **Speichern**

Nach dem Hinzufügen zu einer Rechnung bearbeiten Sie den Eintrag direkt auf der Rechnung statt im Zeitabschnitt.

## Löschen von Zeiteinträgen

Entfernen Sie Zeiteinträge, die versehentlich protokolliert wurden.

So löschen Sie einen Zeiteintrag:

1. Gehen Sie zu **Zeit** in der linken Seitenleiste
2. Suchen Sie den zu löschenden Eintrag
3. Wählen Sie das Drei-Punkte-Menü des Zeiteintrags
4. Wählen Sie **Löschen**
5. Bestätigen Sie das Löschen

:::warning
Das Löschen eines Zeiteintrags, der sich bereits auf einer Rechnung befindet, entfernt ihn von dieser Rechnung. Erwägen Sie stattdessen, den Rechnungszeilenartikel zu bearbeiten.
:::

## Häufige Probleme

<details className="blue-box">
<summary>Zeiteintrag zeigt falschen Satz an</summary>

Das Feld **Satz pro Stunde** ist möglicherweise auf Ihren Unternehmensstandard anstelle eines kundenspezifischen Satzes voreingestellt. Bearbeiten Sie den Zeiteintrag, aktualisieren Sie das Feld **Satz pro Stunde**, und wählen Sie **Speichern**.

</details>

<details className="blue-box">
<summary>Zeiteintrag kann nicht gefunden werden</summary>

Überprüfen Sie den Datumsbereich und die Filter:

1. Erweitern Sie den Datumsbereich in **Zeit**
2. Löschen Sie alle aktiven Filter
3. Suchen Sie nach Kundenname oder Beschreibung
4. Überprüfen Sie, ob der Eintrag bereits zu einer Rechnung hinzugefügt wurde

</details>

## Verwandte Themen

- [Kilometerstandverfolgung](/time-and-mileage/mileage-tracking) — Geschäftsreisen nachverfolgen
- [Abrechnung von Zeit und Kilometerstand](/time-and-mileage/billing-time-and-mileage) — Einträge zu Rechnungen hinzufügen
- [Erstellen von Rechnungen](/invoicing/creating-invoices) — Kundenrechnungen generieren
- [Unternehmenseinstellungen](/settings/company-settings) — Standardsätze konfigurieren
