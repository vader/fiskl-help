---
title: "Verwaltung von KI-Ausgaben"
description: "Überprüfen, bearbeiten, filtern und löschen Sie Ausgaben, die durch KI-Ausgaben verarbeitet wurden. Überprüfen Sie extrahierte Daten und verwalten Sie angehängte Dokumente."
keywords: ["manage AI expenses", "edit expenses", "review expenses", "expense details", "expense documents", "AI expense reconciliation"]
sidebar_position: 2
tags:
   - Expenses
   - AI Expenses
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Anleitung behandelt, wie Sie Ausgaben nach der KI-Verarbeitung überprüfen, bearbeiten, filtern und löschen. Nutzen Sie sie, um extrahierte Daten zu verifizieren und Ungenauigkeiten vor der Abstimmung zu korrigieren.

## AI-Ausgaben anzeigen

So zeigen Sie Ihre verarbeiteten Ausgaben an:

1. Wählen Sie **Einkauf** in der linken Seitenleiste.
2. Wählen Sie **AI-Ausgaben**.
3. Wählen Sie eine beliebige Ausgabe aus, um die vollständige Detailansicht zu öffnen.

Alle verarbeiteten Ausgaben werden in chronologischer Reihenfolge mit wichtigen Details in der Liste angezeigt.

## Ausgabendetails verstehen

Jede KI-Ausgabe enthält aus dem Originaldokument extrahierte Informationen.

**Extrahierte Informationen:**

- **Lieferant** — Unternehmen, das den Beleg oder die Rechnung ausgestellt hat
- **Datum** — Transaktionsdatum aus dem Dokument
- **Betrag** — Gesamtausgabebetrag
- **Steuer** — Steuerbetrag, falls im Dokument angegeben
- **Kategorie** — Vorgeschlagene Ausgabenkategorie

**Dokumentspeicherung:**

- **Originaldatei** — Der hochgeladene Beleg oder die hochgeladene Rechnung
- **Uploaddatum** — Wann das Dokument hochgeladen wurde

## Extrahierte Daten überprüfen

Nach Abschluss der Verarbeitung öffnen Sie die KI-Ausgabe, um die extrahierten Informationen zu verifizieren:

1. **Überprüfen Sie den Lieferantennamen** — Bestätigen Sie, dass der Name des Unternehmens korrekt und richtig geschrieben ist.
2. **Überprüfen Sie den Betrag** — Bestätigen Sie, dass der Gesamtbetrag mit dem Beleg übereinstimmt. Dies ist das wichtigste Feld.
3. **Überprüfen Sie das Datum** — Stellen Sie sicher, dass das Transaktionsdatum korrekt ist.
4. **Überprüfen Sie die Kategorie** — Prüfen Sie, ob die vorgeschlagene Kategorie angemessen ist.

## AI-Ausgaben bearbeiten

Um extrahierte Daten zu korrigieren:

1. Wählen Sie **Einkauf** in der linken Seitenleiste und dann **AI-Ausgaben**.
2. Wählen Sie die Ausgabe aus, die Sie bearbeiten möchten, um sie zu öffnen.
3. Aktualisieren Sie alle Felder, die korrigiert werden müssen:
   - Name
   - Datum oder Fälligkeitsdatum
   - Kategorie
   - Steuer
   - Lieferant
   - Beschreibung
4. Wählen Sie **Speichern**.

:::tip
Überprüfen und korrigieren Sie Ausgaben zeitnah, während die ursprüngliche Transaktion noch präsent ist. Genaue Lieferantennamen und Kategorien machen Filterung und Berichterstellung zuverlässiger.
:::

## Angehängte Dokumente anzeigen

So zeigen Sie den ursprünglichen Beleg oder die ursprüngliche Rechnung an:

1. Wählen Sie **Einkauf** in der linken Seitenleiste und dann **AI-Ausgaben**.
2. Wählen Sie die Ausgabe aus, um ihre Details zu öffnen.
3. Wählen Sie die Anlage aus, um die Vollansicht zu öffnen.

:::tip
Sie können das Originaldokument auch direkt aus der AI-Ausgaben-Liste herunterladen, ohne die Ausgabe zu öffnen. Wählen Sie das Menü **...** in der Spalte **Aktionen** und wählen Sie **Herunterladen**.
:::

## Filterung und Sortierung

Verwenden Sie die Filter- und Sortiersteuerflächen über der Ausgabenliste, um bestimmte Ausgaben zu finden.

**Nach Datumsbereich:**

1. Wählen Sie den Datumfilter oben in der Liste.
2. Wählen Sie Ihr Start- und Enddatum.

**Liste sortieren:**

Wählen Sie einen beliebigen Spaltenkopf — **Uploaddatum**, **Datei** oder **Status** — um nach dieser Spalte zu sortieren. Wählen Sie erneut aus, um die Sortierreihenfolge umzukehren.

## Ausgabenstatus verstehen

Jede Ausgabe zeigt ihren aktuellen Verarbeitungsstatus in der Spalte **Status** an.

| Status | Bedeutung |
|---|---|
| **Verarbeitet** | KI-Extraktion abgeschlossen und eine Transaktion wurde erstellt |
| **Fehlgeschlagen** | Die Verarbeitung war nicht erfolgreich und es wurde keine Transaktion erstellt |

Verarbeitete Ausgaben zeigen auch einen Genauigkeitsprozentsatz für die Transaktion an. Ein Label **Verknüpft** bei einer Transaktion zeigt an, dass sie mit einer Banktransaktion abgeglichen wurde.

Anleitung zum Abstimmungsprozess finden Sie unter [KI-Ausgaben-Abstimmung](/expenses/ai-expenses/reconciliation).

## AI-Ausgaben löschen

Um eine Ausgabe zu löschen, wählen Sie das Menü **...** in der Spalte **Aktionen** und wählen Sie **Löschen**.

:::info
Sie können eine KI-Ausgabe nicht löschen, die bereits mit einer Banktransaktion abgeglichen wurde. Um sie zu löschen, gehen Sie zunächst zur verknüpften Banktransaktion und löschen Sie entweder die Transaktion oder entfernen Sie die Übereinstimmung. Kehren Sie dann zu AI-Ausgaben zurück, um die Ausgabe zu löschen.
:::

## Häufige Probleme

<details>
<summary>Lieferantenname wurde falsch extrahiert</summary>

Die KI-Extraktion kann handgeschriebenen oder Text mit geringem Kontrast auf Belegen misslesen.

Um dies zu korrigieren:

1. Wählen Sie die Ausgabe aus, um sie zu öffnen.
2. Aktualisieren Sie das Feld **Name** mit dem korrekten Lieferantennamen.
3. Wählen Sie **Speichern**.

Die Verwendung konsistenter Lieferantennamen über alle Ausgaben hinweg macht Filterung und Berichterstellung genauer.

</details>

<details>
<summary>Ausgabe wurde keine Kategorie zugewiesen</summary>

Wenn die KI keine geeignete Kategorie bestimmen konnte, wird die Ausgabe als **Nicht kategorisierte Ausgaben** markiert.

Um eine Kategorie zuzuweisen:

1. Wählen Sie die Ausgabe aus, um sie zu öffnen.
2. Wählen Sie die richtige Kategorie aus der Dropdown-Liste **Kategorie**.
3. Wählen Sie **Speichern**.

</details>

<details>
<summary>Schlechte Bildqualität führte zu Extraktionsfehlern</summary>

Bilder mit niedriger Auflösung oder schlechter Beleuchtung können zu Extraktionsfehlern bei Beträgen, Daten oder Lieferantennamen führen.

Um die extrahierten Daten zu korrigieren:

1. Wählen Sie die Ausgabe aus, um sie zu öffnen.
2. Aktualisieren Sie die falschen Felder manuell.
3. Wählen Sie **Speichern**.

Wenn derselbe Beleg konsistent falsch extrahiert wird, versuchen Sie, ein klareres Bild erneut hochzuladen.

</details>

<details>
<summary>Ausgabe zeigt einen Status „Fehlgeschlagen"</summary>

Der Status **Fehlgeschlagen** bedeutet, dass die KI das Dokument nicht verarbeiten konnte und keine Transaktion erstellt wurde.

Um dies zu beheben:

1. Wählen Sie das Menü **...** auf der fehlgeschlagenen Ausgabe.
2. Wählen Sie **Löschen**, um sie zu entfernen.
3. Laden Sie eine klarere oder korrekt formatierte Version des Dokuments erneut hoch.

Weitere Informationen zu unterstützten Dateiformaten und Bildanleitung finden Sie unter [Ausgaben in AI-Ausgaben hochladen](/expenses/ai-expenses/uploading).

</details>

<details>
<summary>Abstimmungsstatus wird nicht aktualisiert</summary>

Der Abgleich erfordert ein verbundenes Bankkonto mit importierten Transaktionen. Wenn eine Ausgabe unverknüpft bleibt:

1. Bestätigen Sie, dass Ihr Bankkonto verbunden ist und Transaktionen importiert werden.
2. Überprüfen Sie, dass das Transaktionsdatum und der Betrag in Ihren Bankdaten mit der Ausgabe übereinstimmen.
3. Verwenden Sie manuelles Verknüpfen, wenn kein automatischer Abgleich identifiziert wird.

Vollständige Anleitung finden Sie unter [KI-Ausgaben-Abstimmung](/expenses/ai-expenses/reconciliation).

</details>

## Verwandte Themen

- [Ausgaben in AI-Ausgaben hochladen](/expenses/ai-expenses/uploading) — Wie Sie Beleg- und Rechnungsbilder hochladen
- [KI-Ausgaben-Abstimmung](/expenses/ai-expenses/reconciliation) — Abgleich von Ausgaben mit Banktransaktionen
- [Ausgabenkategorien](/expenses/expense-categories) — Verwalten und Anpassen von Ausgabenkategorien
- [Übersicht KI-gesteuerte Ausgaben](/expenses/ai-expenses/overview) — Wie die KI-Ausgaben-Funktion funktioniert
