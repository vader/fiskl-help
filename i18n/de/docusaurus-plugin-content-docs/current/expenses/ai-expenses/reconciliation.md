---
title: "KI-gestützte Ausgabenabstimmung"
description: "Erfahren Sie, wie AI Ausgaben mit Banktransaktionen in Fiskl abgestimmt werden, einschließlich automatischer Zuordnung, manueller Abstimmung und Tipps zur Fehlerbehebung."
keywords: ["AI expenses", "expense reconciliation", "bank matching", "reconcile expenses", "Fiskl expenses"]
sidebar_position: 3
tags:
   - Expenses
   - AI Expenses
   - Reconciliation
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Dieses Handbuch erklärt, wie AI-Ausgaben mit Banktransaktionen abgestimmt werden und wie Sie den Abgleichsprozess verwalten.

## Funktionsweise der automatischen Abstimmung

Wenn Sie einen Beleg/eine Rechnung über AI-Ausgaben hochladen, überwacht Fiskl Ihre verbundenen Bankkonten auf eine entsprechende Transaktion. Wenn eine Übereinstimmung gefunden wird, wird die Ausgabe automatisch abgestimmt.

**Der Abgleichsprozess:**

1. **Ausgabe erstellt** — Die KI extrahiert Daten aus dem hochgeladenen Beleg/der Rechnung
2. **In Verbindlichkeiten gespeichert** — Die Ausgabe wird als unbezahlt in Ihren Aufzeichnungen eingegeben
3. **Überwachung beginnt** — Das System sucht nach entsprechenden Banktransaktionen
4. **Übereinstimmung identifiziert** — Das System findet eine Transaktion, die dem Lieferanten, Betrag und Datum entspricht
5. **Automatische Abstimmung** — Die Ausgabe wird mit der Transaktion verknüpft und Buchungsdatensätze werden aktualisiert

:::info
Für die Abstimmung ist mindestens ein verbundenes Bankkonto erforderlich. Gehen Sie zu **Banking**, um Ihre Konten zu verbinden, bevor Sie Ausgaben hochladen.
:::

## Was das System abgleicht

Fiskl verwendet mehrere Datenpunkte, um entsprechende Transaktionen zu identifizieren.

**Primäre Abgleichskriterien:**

- **Betrag** — Der Transaktionsbetrag stimmt mit dem Ausgabenbetrag überein (genau oder innerhalb der Toleranz)
- **Datum** — Das Transaktionsdatum fällt in einen angemessenen Bereich des Ausgabedatums
- **Lieferant** — Die Bankttransaktionsbeschreibung enthält den Lieferantennamen

**Sekundäre Kriterien:**

- **Währung** — Die Transaktionswährung stimmt mit der Ausgabenwährung überein
- **Konto** — Die Transaktion befindet sich auf dem erwarteten Zahlungskonto

## Abstimmungsstatus

AI-Ausgaben zeigen ihren Verarbeitungsstatus in der Ausgabenliste an:

| Status | Bedeutung | Nächste Schritte |
|---|---|---|
| **Verarbeitet** | Der Beleg/die Rechnung wurde erfolgreich extrahiert und gespeichert | Überprüfen Sie die Ausgabendetails und bestätigen Sie deren Richtigkeit |
| **Wird verarbeitet** | Die KI extrahiert derzeit Daten aus dem Beleg/der Rechnung | Warten Sie, bis die Verarbeitung abgeschlossen ist, bevor Sie Maßnahmen ergreifen |
| **Fehler** | Die KI konnte keine Daten aus dem Beleg/der Rechnung extrahieren | Laden Sie den Beleg/die Rechnung erneut hoch oder geben Sie die Ausgabe manuell ein |
| **Duplikat** | Der Beleg/die Rechnung entspricht einer bereits in Ihren Aufzeichnungen vorhandenen Ausgabe | Überprüfen Sie das Duplikat und löschen Sie es, falls nicht erforderlich |

Auf der Seite **Transaktionen** bedeutet ein **Verknüpfter** Status (in Grün angezeigt), dass die Transaktion mit einer Banktransaktion abgestimmt wurde, entweder vollständig oder teilweise.

## Abstimmungsdetails anzeigen

1. Gehen Sie zu **AI-Ausgaben** in der linken Seitenleiste
2. Wählen Sie eine Ausgabe aus, um die entsprechende Banktransaktion und Abgleichdetails sowie den Zahlungsstatus (Bezahlt oder Überfällig) anzuzeigen

## Potenzielle Übereinstimmungen bestätigen

Wenn das System eine potenzielle Übereinstimmung identifiziert:

1. Wählen Sie die Ausgabe aus, um die vorgeschlagene Banktransaktion anzuzeigen
2. Vergleichen Sie die Beträge, Daten, Lieferantennamen und die Währung
3. Wählen Sie **Bestätigen**, wenn richtig, oder lehnen Sie den Abgleich ab, um eine andere Transaktion zu finden

## Manuelle Abstimmung

Wenn der automatische Abgleich die richtige Transaktion nicht findet:

1. Wählen Sie die unabgestimmte Ausgabe aus
2. Wählen Sie die Option zum manuellen Abgleich
3. Durchsuchen Sie Ihre Banktransaktionen oder suchen Sie nach der richtigen Transaktion
4. Wählen Sie die entsprechende Transaktion aus
5. Wählen Sie **Bestätigen**, um die Ausgabe abzustimmen

## Warum Übereinstimmungen möglicherweise nicht automatisch erfolgen

**Transaktion noch nicht importiert:**

- Die Banktransaktion ist noch nicht in Ihrem Konto erschienen
- Die Banksynchronisierung ist nicht kürzlich ausgeführt worden
- Die Transaktion ist noch ausstehend

**Lieferantennamen stimmen nicht überein:**

- Die Bank zeigt einen anderen Geschäftsnamen als der Beleg/die Rechnung
- Der Beleg/die Rechnung zeigt einen Namen eines Unternehmens oder der Muttergesellschaft
- Die Transaktionsbeschreibung ist abgekürzt

**Betragsdifferenz:**

- Der Beleg/die Rechnung zeigt einen Betrag vor Trinkgeld, aber die Bank zeigt den Gesamtbetrag mit Trinkgeld
- Eine Währungsumrechnung ist aufgetreten
- Eine Teilzahlung oder geteilte Transaktion wurde durchgeführt

**Datumsabweichung:**

- Die Transaktion wurde mehrere Tage nach dem Ausgabedatum gebucht
- Internationale Transaktionen können verzögerte Verarbeitung haben
- Vorgenehmigung und endgültige Gebührdaten unterscheiden sich

## Tipps für besseren automatischen Abgleich

**Halten Sie Lieferantennamen konsistent:**

- Bearbeiten Sie Lieferantennamen, um den in Ihrem Bankfeed angezeigten Beschreibungen zu entsprechen
- Beachten Sie gegebenenfalls Unterschiede zwischen Muttergesellschaften und Tochtergesellschaften

**Laden Sie rechtzeitig hoch:**

- Laden Sie Belege/Rechnungen bald nach dem Kauf hoch, um einen zuverlässigeren Abgleich zu ermöglichen

**Halten Sie Bankverbindungen aktiv:**

- Stellen Sie sicher, dass alle Zahlungskonten in **Banking** verbunden sind
- Aktivieren Sie automatische Banksynchronisierungen

**Überprüfen Sie regelmäßig:**

- Überprüfen Sie unabgestimmte Ausgaben wöchentlich
- Gleichen Sie alle Ausgaben manuell ab, die sieben oder mehr Tage lang unabgestimmt sind

## Häufige Probleme

<details className="blue-box">
<summary>Kreditkartenausgaben werden mit einer Banküberweisung statt der Kartentransaktion abgestimmt</summary>

Wenn Sie mit einer Kreditkarte bezahlt haben, sollte die Ausgabe mit der Kreditkartentransaktion abgestimmt werden – nicht mit der späteren Banküberweisung an die Kreditkartengesellschaft.

1. Stellen Sie sicher, dass das Kreditkartenkonto in **Banking** verbunden ist
2. Die Ausgabe sollte mit der Transaktion auf dem Kreditkartenkonto abgestimmt werden
3. Die Zahlung von Ihrer Bank an die Kreditkarte wird als separate Transaktion angezeigt

</details>

<details className="blue-box">
<summary>Ausgabe in Fremdwährung wird aufgrund von Wechselkursunterschieden nicht abgestimmt</summary>

Kleine Unterschiede zwischen dem Ausgabenbetrag und dem Bankttransaktionsbetrag sind normal, wenn Fremdwährung beteiligt ist.

1. Das System ermöglicht Wechselkursschwankungen innerhalb eines Toleranzbereichs
2. Bestätigen Sie den Abgleich, wenn die Beträge ähnlich sind
3. Jede Devisendifferenz wird separat in Ihrer Buchhaltung erfasst

</details>

<details className="blue-box">
<summary>Ausgabe wird nicht abgestimmt, obwohl eine entsprechende Banktransaktion vorhanden ist</summary>

1. Überprüfen Sie, ob das Bankkonto ordnungsgemäß in **Banking** verbunden ist
2. Stellen Sie sicher, dass die Transaktion erfolgreich importiert wurde
3. Bestätigen Sie, dass Beträge und Währung übereinstimmen
4. Überprüfen Sie den Lieferantennamen sowohl in der Ausgabe als auch in der Banktransaktion
5. Versuchen Sie einen manuellen Abgleich, wenn der automatische Abgleich fehlschlägt
6. Kontaktieren Sie den Support, wenn das Problem weiterhin besteht

</details>

<details className="blue-box">
<summary>Falsche Transaktion wurde automatisch abgestimmt</summary>

1. Wählen Sie die Ausgabe aus
2. Wählen Sie die Option zum Aufheben der Transaktionsverknüpfung
3. Die Ausgabe kehrt zum unabgestimmten Status zurück
4. Suchen Sie manuell und bestätigen Sie die richtige Transaktion

</details>

<details className="blue-box">
<summary>Mehrere Ausgaben werden mit derselben Transaktion abgestimmt</summary>

Dies kann auf ein Szenario mit geteilten Transaktionen hindeuten.

1. Überprüfen Sie, ob ein einzelner Beleg/eine Rechnung mehrere Artikel abdeckt
2. Überprüfen Sie, ob die Artikel separate Ausgaben sein sollten
3. Behalten Sie entweder separate Ausgaben bei und gleichen Sie die Transaktion teilweise ab, oder fassen Sie sie in einer einzelnen Ausgabe zusammen
4. Gleichen Sie basierend auf Ihren Aufzeichnungen ab

</details>

## Was nach der Abstimmung geschieht

Sobald eine Ausgabe mit einer Banktransaktion abgestimmt ist:

**Buchhaltung wird aktualisiert:**

- Die Ausgabe wechselt von Verbindlichkeiten zum Status „Bezahlt"
- Der Saldo des verbundenen Bankkontos wird aktualisiert
- Finanzberichte berücksichtigen die abgestimmte Ausgabe

**Aufbewahrung von Aufzeichnungen:**

- Das ursprüngliche Belegebild bleibt an die Ausgabe angehängt
- Die Banktransaktion wird dauerhaft mit der Ausgabe verknüpft
- Ein Audit-Trail zeichnet die Abstimmung auf

:::tip
Verwenden Sie **Ask Fi** oben rechts auf dem Bildschirm, wenn Sie Hilfe zum Verständnis eines Abstimmungsstatus oder eines Abgleichsergebnisses benötigen.
:::

## Verwandte Themen

- [AI-Ausgaben verwalten](/expenses/ai-expenses/managing-ai-expenses) — Bearbeiten, überprüfen und verwalten Sie von KI verarbeitete Ausgaben
- [AI-Ausgaben hochladen](/expenses/ai-expenses/uploading) — Laden Sie Belegbilder zur KI-Verarbeitung hoch
- [Bankverbindungen](/integrations/banking/overview) — Verbinden Sie Bankkonten, um die Abstimmung zu aktivieren
- [Traditionelle Ausgaben](/expenses/traditional-expenses/overview) — Zeigen Sie Legacy-Ausgabendatensätze an
