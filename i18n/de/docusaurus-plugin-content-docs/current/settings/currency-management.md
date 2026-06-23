---
title: "Währungsverwaltung"
description: "Verwalten Sie Wechselkurse in Fiskl. Legen Sie benutzerdefinierte Kurse für bestimmte Daten oder Zeiträume fest, um zu kontrollieren, wie Währungsumrechnungen in Transaktionen und Berichten angezeigt werden."
keywords: ["currency management", "exchange rates", "multi-currency", "custom rates", "currency override", "Fiskl settings"]
sidebar_position: 4
slug: /settings/currency-management
tags:
  - Settings
  - Currency Management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erläutert, wie Sie Wechselkurse in Fiskl anzeigen und verwalten können. Nutzen Sie die Währungsverwaltung, um Systemkurse für bestimmte Daten oder Zeiträume außer Kraft zu setzen und eine einheitliche Währungsumrechnung über Transaktionen und Berichte hinweg zu gewährleisten. Alle Wechselkurse werden relativ zur Basiswährung Ihres Kontos berechnet.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Auf die Währungsverwaltung zugreifen

Gehen Sie zu **Einstellungen** > **Währungsverwaltung**.

## Was Sie sehen können

Der Bildschirm Währungsverwaltung zeigt alle in Ihrem Konto aktiven Währungen an. Verwenden Sie die **Datums**-Auswahl, um Kurse für ein bestimmtes Datum anzuzeigen, und **Währungen filtern**, um die Liste einzugrenzen.

Die Kurstafel zeigt die folgenden Spalten für jede Währung (die nachstehenden Beispiele verwenden USD als Basiswährung):

- **Währung** — Währungscode und Name
- **1 Basis zu Währung** — wie viele Einheiten dieser Währung einer Einheit Ihrer Basiswährung entsprechen (z. B. 1 USD = 0,921 EUR)
- **1 Währung zu Basis** — wie viele Basiswährungseinheiten einer Einheit dieser Währung entsprechen (z. B. 1 EUR = 1,086 USD)
- **Systemkurs** — der Kurs, den Fiskl automatisch anwendet
- **Status** — zeigt **System** an, wenn der Systemkurs aktiv ist, oder **Benutzerdefiniert**, wenn Sie einen manuellen Überschreibungskurs festgelegt haben
- **Aktionen** — wählen Sie das Bearbeitungssymbol, um einen benutzerdefinierten Kurs hinzuzufügen oder zu aktualisieren

## Benutzerdefinierten Kurs hinzufügen

Benutzerdefinierte Kurse überschreiben den Systemkurs für ein bestimmtes Datum oder einen Datumsbereich. Verwenden Sie diese, wenn ein Vertrag, eine Sicherungsvereinbarung oder eine Gruppenrichtlinie einen festen Kurs erfordert.

1. Gehen Sie zu **Einstellungen** > **Währungsverwaltung**
2. Wählen Sie **+ Benutzerdefinierten Kurs hinzufügen**
3. Wählen Sie die Währung aus der Dropdownliste **Währung** aus
4. Legen Sie den **Geltungszeitraum** fest – standardmäßig auf heute's Datum festgelegt. Um den Kurs über mehrere Tage hinweg anzuwenden, wählen Sie das Datumsfeld und legen Sie ein Start- und Enddatum fest
5. Geben Sie den Wechselkurs im Feld **Wechselkurs** ein, ausgedrückt als die Anzahl der Fremdwährungseinheiten gleich einer Einheit Ihrer Basiswährung (z. B. 1 USD = 0,921 EUR)
6. Wählen Sie **Speichern**

Die Spalte **Status** für diese Währung wird auf **Benutzerdefiniert** aktualisiert.

## Benutzerdefinierten Kurs bearbeiten

1. Gehen Sie zu **Einstellungen** > **Währungsverwaltung**
2. Wählen Sie das Bearbeitungssymbol in der Spalte **Aktionen** für die Währung, die Sie aktualisieren möchten
3. Aktualisieren Sie den **Geltungszeitraum** oder den **Wechselkurs** wie erforderlich
4. Wählen Sie **Speichern**

## Benutzerdefinierten Kurs entfernen

1. Gehen Sie zu **Einstellungen** > **Währungsverwaltung**
2. Wählen Sie das Bearbeitungssymbol in der Spalte **Aktionen** für die Währung
3. Wählen Sie das **×** neben dem Datum im Feld **Geltungszeitraum**
4. Wählen Sie **Auswahl löschen** aus dem Kalender-Popup
5. Wählen Sie **Speichern**

Die Spalte **Status** wird auf **System** zurückgesetzt.

:::tip
Überprüfen Sie Ihre benutzerdefinierten Kurse zu Beginn jedes Berichtszeitraums, um zu bestätigen, dass sie Ihre Geschäftsanforderungen noch erfüllen.
:::

## Wann benutzerdefinierte Kurse verwendet werden

<details>
<summary>Langfristige Projekte mit festen Budgets</summary>

Währungsschwankungen können Vergleiche zwischen Budget und Ist-Wert bei langfristigen internationalen Projekten verzerren. Das Festlegen eines konsistenten Kurses für den Projektzeitraum hält die Berichterstellung auf die operative Leistung konzentriert, anstatt auf Marktbewegungen.

</details>

<details>
<summary>Anwendung von Sicherungskursen</summary>

Wenn Ihr Unternehmen Terminkontrakte oder andere Sicherungsinstrumente nutzt, können Sie den gesicherten Kurs auf zukünftige Transaktionen anwenden. Dies bringt Ihre Buchhaltungsunterlagen mit Ihrer Position im Finanzrisikomanagement in Einklang.

</details>

<details>
<summary>Verträge mit festen Wechselkursen</summary>

Einige Verträge geben einen festen Wechselkurs für die Vertragsdauer an. Wenn Sie diesen Kurs in der Währungsverwaltung eingeben, wird sichergestellt, dass Ihre Rechnungen und Berichte die vereinbarten Bedingungen widerspiegeln.

</details>

<details>
<summary>Konzernrechnungslegungsrichtlinien</summary>

Unternehmensgruppen verlangen häufig einen standardisierten monatlichen oder vierteljährlichen Kurs für alle konzerninternen Transaktionen. Das Festlegen dieses Kurses hier wendet ihn einheitlich auf Ihr gesamtes Konto an.

</details>

## Verwandte Themen

- [Buchhaltungseinstellungen](/settings/accounting-settings) – Konfigurieren Sie Ihre Basiswährung und Buchhaltungspräferenzen
- [Transaktionen in mehreren Währungen](/accounting/journal-entries/guides/multi-currency-transactions) – Erfassen Sie Transaktionen in Fremdwährungen
- [Kontenrahmen](/accounting/chart-of-accounts) – Verwalten Sie Ihre Sachkonten
