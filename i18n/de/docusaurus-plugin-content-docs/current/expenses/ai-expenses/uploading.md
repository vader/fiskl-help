---
title: "Ausgaben in AI-Ausgaben hochladen"
description: "Laden Sie Belege und Rechnungen in Fiskl AI Ausgaben hoch, um automatische Datenextraktion zu ermöglichen. Unterstützt PDF-, JPEG-, PNG- und HEIC-Formate."
keywords: ["upload expenses", "AI expense upload", "receipt upload", "invoice scanning", "expense processing", "machine learning"]
sidebar_position: 1
tags:
   - Expenses
   - AI Expenses
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Anleitung erklärt, wie Sie Belege und Rechnungen zu AI-Ausgaben hochladen, wobei Fiskl die Daten automatisch mit Hilfe von AI und maschinellem Lernen extrahiert.

## Bevor Sie beginnen

Vor dem Hochladen bestätigen Sie, dass Sie folgende Ressourcen haben:

- Bilder von Belegen oder Rechnungen in einem unterstützten Format: PDF, JPEG, PNG oder HEIC
- Klare, lesbare Dokumentbilder — unscharfe oder schlecht beleuchtete Fotos verringern die Genauigkeit

## Eine einzelne Ausgabe hochladen

1. Wählen Sie **Einkauf** > **AI-Ausgaben** in der linken Seitenleiste.
2. Wählen Sie **Hochladen**, um die Dateiauswahl zu öffnen.
3. Wählen Sie das Bild des Belegs oder der Rechnung von Ihrem Gerät aus.
4. Warten Sie, bis das System die Daten extrahiert. Dies dauert einige Sekunden bis einige Minuten, je nach Dokumentkomplexität.
5. Überprüfen Sie die extrahierten Informationen auf Richtigkeit.

## Mehrere Ausgaben hochladen

1. Wählen Sie **Einkauf** > **AI-Ausgaben** in der linken Seitenleiste.
2. Halten Sie `Strg` (Windows) oder `Cmd` (Mac) gedrückt, während Sie Dateien auswählen, um einen Stapel hochzuladen.
3. Alle Dateien werden hochgeladen und automatisch zur Verarbeitung in die Warteschlange eingereiht.
4. Überwachen Sie den Verarbeitungsstatus für jedes Dokument. Sie können weiterarbeiten, während Dateien im Hintergrund verarbeitet werden.

## Eine Ausgabe manuell erstellen

Verwenden Sie diese Methode, wenn Sie kein Dokument zum Hochladen haben – beispielsweise eine mündliche Vereinbarung oder ein fehlender Beleg.

1. Wählen Sie **Einkauf** > **AI-Ausgaben** in der linken Seitenleiste.
2. Wählen Sie **Neu erstellen**, um das Transaktionsformular zu öffnen.
3. Geben Sie den **Namen** und **Betrag** der Ausgabe ein.
4. Legen Sie das **Datum** und **Fälligkeitsdatum** fest.
5. Wählen Sie eine **Kategorie**, **Steuer**satz und **Lieferant** nach Bedarf aus.
6. Wählen Sie **Speichern**.

:::info
Manuell erstellte Ausgaben werden in den Verbindlichkeiten gespeichert, durchlaufen aber nicht die AI-Extraktion oder Verarbeitung.
:::

## Was während der Verarbeitung geschieht

Wenn Sie ein Dokument hochladen, führt Fiskl automatisch folgende Schritte aus:

1. **Validiert die Datei** — Prüft Format und Dateigröße.
2. **Konvertiert bei Bedarf** — Konvertiert HEIC zu JPEG und ändert die Größe großer Bilder. Ihre ursprüngliche HEIC-Datei wird nicht beibehalten.
3. **Optimiert das Bild** — Verarbeitet das Bild für genaues Scannen. Das gespeicherte Bild kann sich von Ihrem ursprünglichen Upload unterscheiden.
4. **Extrahiert Daten** — Verwendet AI und maschinelles Lernen zum Lesen und Strukturieren von Text.
5. **Identifiziert Felder** — Erkennt Lieferant, Datum, Betrag und Steuer.
6. **Kategorisiert die Ausgabe** — Schlägt eine angemessene Ausgabenkategorie vor.
7. **Speichert in Verbindlichkeiten** — Erstellt automatisch den Ausgabensatz.
8. **Reiht zur Abstimmung ein** — Macht die Ausgabe für automatisches Abgleichen gegen Banktransaktionen verfügbar.
9. **Speichert das Dokument** — Bewahrt das verarbeitete Bild mit der Ausgabe.

## Verarbeitungszeit

Die Verarbeitungszeit hängt von der Dokumentkomplexität und der Systemauslastung ab. Die Verarbeitung ist asynchron, daher durchlaufen Dokumente mehrere Stufen.

- **Einfache Belege** — Einige Sekunden
- **Komplexe Rechnungen** — Bis zu eine Minute
- **Hohe Systemauslastung** — Kann mehrere Minuten dauern, während die Datei in der Warteschlange wartet

Sie können weiterarbeiten, während Dokumente im Hintergrund verarbeitet werden.

## Dateierforderungen

**Unterstützte Formate:**

- PDF (einseitig oder mehrseitig)
- JPEG / JPG
- PNG
- HEIC (Apple-Fotos)

**Automatische Konvertierungen:**

- HEIC-Dateien werden vor der Verarbeitung in JPEG konvertiert
- Große PNG-Dateien werden zur schnelleren Verarbeitung in JPEG konvertiert
- Übergroße Bilder werden automatisch verkleinert

:::tip
Verwenden Sie für beste Ergebnisse gut beleuchtete Bilder mit deutlich sichtbarem Text und dem gesamten Dokument im Bildrahmen. Vermeiden Sie Schatten, Glanz und zerknitterte Dokumente.
:::

## Upload-Status-Indikatoren

| Status | Bedeutung |
|---|---|
| **Wird hochgeladen** | Datei wird zu Fiskl übertragen |
| **Wird aufgenommen** | AI und maschinelles Lernen extrahieren Daten |
| **Abgeschlossen** | Ausgabe ist gespeichert und zur Überprüfung bereit |
| **Fehler** | Verarbeitung fehlgeschlagen — siehe die Fehlermeldung für Details |

## Scan-Nutzung

Jede Seite in einem hochgeladenen Dokument zählt als ein Scan gegen Ihre monatliche Planlimit. Ein fünfseitiges PDF verbraucht fünf Scans. Informationen zu Planlimits finden Sie unter [AI-Ausgaben-Übersicht](/expenses/ai-expenses/overview).

## Duplikaterkennung

Das System lehnt automatisch doppelte Uploads ab. Wenn Sie ein Dokument hochladen, das einem vorhandenen Ausgabensatz entspricht, kennzeichnet Fiskl es und verhindert die Erstellung eines doppelten Datensatzes.

## Häufige Probleme

<details>
<summary>Upload schlägt mit einem Fehler über nicht unterstützten Dateityp fehl</summary>

Überprüfen Sie, ob Ihre Datei im Format PDF, JPEG, PNG oder HEIC vorliegt. Prüfen Sie, ob die Dateierweiterung dem tatsächlichen Dateityp entspricht. Falls das Problem weiterhin besteht, konvertieren Sie die Datei vor dem Hochladen in JPEG oder PDF.

</details>

<details>
<summary>Die Verarbeitung dauert länger als erwartet</summary>

Die Verarbeitung ist asynchron und durchläuft mehrere Stufen. In Zeiten hoher Nachfrage werden Dokumente in die Warteschlange eingereiht und können mehrere Minuten dauern. Sie können weiterarbeiten, während die Verarbeitung im Hintergrund abgeschlossen wird. Wenn ein Dokument länger als zehn Minuten dauert, kontaktieren Sie den Support.

</details>

<details>
<summary>Extrahierte Daten sind ungenau</summary>

Verblasste oder beschädigte Dokumente führen zu weniger genauen Ergebnissen. Laden Sie ein klareres Bild erneut hoch. Sie können extrahierte Daten nach der Verarbeitung auch manuell bearbeiten – siehe [AI-Ausgaben verwalten](/expenses/ai-expenses/managing-ai-expenses) für Anweisungen.

</details>

## Verwandte Themen

- [AI-Ausgaben-Übersicht](/expenses/ai-expenses/overview) — Was AI-Ausgaben tun und wie es funktioniert
- [AI-Ausgaben verwalten](/expenses/ai-expenses/managing-ai-expenses) — Verarbeitete Ausgaben bearbeiten und überprüfen
- [AI-Ausgaben-Abstimmung](/expenses/ai-expenses/reconciliation) — Wie automatisches Abgleichen funktioniert
- [Traditionelle Ausgaben](/expenses/traditional-expenses/overview) — Manuelle Ausgabeneingabe
