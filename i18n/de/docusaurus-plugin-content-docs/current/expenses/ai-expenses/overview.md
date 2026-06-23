---
title: "KI-gestützte Ausgaben – Übersicht"
description: "Automatisieren Sie die Ausgabenverarbeitung in Fiskl mit KI, um Daten aus Belegen und Rechnungen zu extrahieren und manuelle Dateneingaben zu vermeiden."
keywords: ["AI expenses", "automated expense processing", "receipt scanning", "expense automation", "machine learning"]
sidebar_position: 1
tags:
  - Expenses
  - AI
toc_min_heading_level: 2
toc_max_heading_level: 2
---

Dieser Abschnitt behandelt KI-gestützte Ausgaben, die die Ausgabeverarbeitung automatisieren, indem Daten mithilfe von KI und maschinellem Lernen aus Beleg- und Rechnungsbildern extrahiert werden. Laden Sie Ihre Dokumente hoch und Fiskl erledigt die Dateneingabe automatisch.

## Warum KI-gestützte Ausgaben verwenden

KI-gestützte Ausgaben ersetzen die manuelle Ausgabeverwaltung durch eine vollständig automatisierte Pipeline. Laden Sie einen Beleg oder eine Rechnung hoch und Fiskl extrahiert die Daten, kategorisiert die Ausgabe und gleicht sie gegen Ihre Banktransaktionen ab – ohne manuelle Eingriffe.

**Extraktion** — KI liest Lieferantennamen, Datum, Betrag, Steuer und Positionen direkt aus dem Dokumentbild.

**Kategorisierung** — Die Ausgabe wird automatisch der richtigen Kategorie zugewiesen, basierend auf dem Dokumentinhalt.

**Abstimmung** — Sobald Ihre Banktransaction erscheint, gleicht Fiskl diese automatisch mit der Ausgabe ab und vervollständigt den Datensatz ohne manuelle Zuordnung.

## Funktionsweise

Der Workflow für KI-gestützte Ausgaben folgt vier Schritten:

1. **Hochladen** — Laden Sie Beleg- oder Rechnungsbilder über die Web-App hoch
2. **Extrahieren** — KI und maschinelles Lernen extrahieren alle relevanten Daten aus dem Dokument
3. **Speichern** — Die Ausgabe wird in Verbindlichkeiten mit automatisch angewendeter Kategorisierung gespeichert
4. **Abstimmen** — Das System gleicht Ausgaben mit Banktransaktionen ab, wenn diese erscheinen

## Hauptfunktionen

- **Intelligente Extraktion** — Extrahiert Lieferantennamen, Datum, Betrag, Steuer und Positionen
- **Automatische Kategorisierung** — Schlägt die korrekte Ausgabenkategorie basierend auf dem Dokumentinhalt vor
- **Mehrere Dokumente** — Laden Sie mehrere Belege gleichzeitig für Batch-Verarbeitung hoch
- **Originaldokumentspeicherung** — Alle Originalbilder werden mit dem Ausgabedatensatz bewahrt
- **Automatische Abstimmung** — Gleicht Ausgaben mit Banktransaktionen ohne manuelle Eingriffe ab
- **Duplikatwiderstand** — Lehnt doppelte Uploads automatisch ab

## Nutzung und Limits

Jeder Plan enthält eine monatliche Anzahl von Scans. Die Nutzung wird pro Seite gezählt, nicht pro Dokument. Eine fünfseitige Rechnung zählt als fünf Scans.

**Standardpläne:**

| Plan | Monatlich enthaltene Scans |
|------|------------------------|
| **Solo** | 25 |
| **Pro** | 100 |
| **Prime** | 300 |

**Geschenk- und Lifetime-Pläne:**

| Plan-Stufe | Monatlich enthaltene Scans |
|-----------|------------------------|
| **Stufe 1** | 5 |
| **Stufe 2** | 10 |
| **Stufe 3** | 15 |

:::info
Die Möglichkeit, zusätzliche Scans über Ihre Plan-Zuteilung hinaus zu erwerben, wird in Kürze verfügbar sein. Weitere Informationen zu Plan-Funktionen finden Sie unter [Pläne und Abrechnung](/plans-billing/overview).
:::

## Unterstützte Dateiformate

| Format | Erweiterung | Notizen |
|--------|-----------|-------|
| **PDF** | `.pdf` | Mehrseitige Dokumente unterstützt |
| **JPEG** | `.jpg`, `.jpeg` | Häufigste Format für Fotos |
| **PNG** | `.png` | Hochwertige Screenshots |
| **HEIC** | `.heic` | Apple-Fotos (automatisch in JPEG konvertiert) |

HEIC-Dateien werden automatisch in JPEG konvertiert. Große PNG-Dateien und übergroße Bilder werden ebenfalls konvertiert oder in der Größe angepasst, um schnellere Verarbeitung zu ermöglichen. Original-HEIC-Dateien werden nach der Konvertierung nicht beibehalten.

---

## Verfügbare Handbücher

[📄️ Ausgaben in KI-Ausgaben hochladen Laden Sie Beleg- und Rechnungsbilder in KI-gestützte Ausgaben hoch, um automatische Datenextraktion mit KI und maschinellem Lernen zu nutzen.](/expenses/ai-expenses/uploading)

[📄️ KI-Ausgaben verwalten Überprüfen, bearbeiten und verwalten Sie Ausgaben, die über KI-gestützte Ausgaben verarbeitet wurden, einschließlich Überprüfung extrahierter Daten und angehängter Dokumente.](/expenses/ai-expenses/managing-ai-expenses)

[📄️ KI-Ausgaben-Abstimmung Verstehen Sie, wie Fiskl KI-gestützte Ausgaben automatisch mit Banktransaktionen abgleicht, um eine nahtlose Ausgaben-Abstimmung zu erreichen.](/expenses/ai-expenses/reconciliation)
