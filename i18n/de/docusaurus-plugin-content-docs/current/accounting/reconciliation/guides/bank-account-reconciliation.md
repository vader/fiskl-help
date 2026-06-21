---
title: Bankkontoabstimmung
sidebar_position: 14
description: "Schritt-für-Schritt-Anleitung zur Durchführung einer Kontoabstimmung in Fiskl, vom Setup bis zur Fertigstellung mit perfekter Transaktionsabstimmung."
keywords: ["bank account reconciliation", "Fiskl reconciliation setup", "transaction matching", "bank statement reconciliation"]
toc_min_heading_level: 2 
toc_max_heading_level: 4
tags: 
 - Accounting 
 - Bank Reconciliation 
 - Transaction Matching
---

## Durchführung einer perfekten Abstimmung (100% Übereinstimmung)

Sobald alle Fiskl-Transaktionen automatisch mit Ihrem Kontoauszug abgestimmt wurden, wird die Abstimmungsdifferenz als Null angezeigt, was darauf hinweist, dass Sie durch Anklicken der Schaltfläche „Abstimmen" fortfahren können, um die Abstimmung abzuschließen.

## Einrichten Ihrer Abstimmung

1. **Navigieren Sie zur Abstimmung:** Gehen Sie im linken Menü zu Buchhaltung > Abstimmung
2. **Wählen Sie Ihr Konto:** Wählen Sie das spezifische Bank- oder Geldkonto, das Sie abstimmen möchten, aus dem Dropdown-Menü aus und klicken Sie auf „Abstimmen"

Die allererste Abstimmung deckt den Zeitraum von der ersten Transaktion im Bankkonto bis zum ausgewählten Endzeitraum ab. Bitte beachten Sie, dass der Kontostand des Hauptbuchs für das Ende des ausgewählten Zeitraums dem Kontoauszugssaldo entsprechen sollte.

<details>

<summary>Ist dies Ihre erste Abstimmung in Fiskl?</summary>

Wenn dies Ihre erste Abstimmung in Fiskl ist und Sie Konttransaktionen aus früheren Jahren haben, befolgen Sie bitte diese Schritte

1. Bestimmen Sie den letzten Monat, in dem der Hauptbuchangebotssaldo mit dem Kontoauszugssaldo übereinstimmte
2. Wählen Sie in Fiskl Ihr Bankkonto aus und klicken Sie auf „Abstimmen"
3. Starten Sie eine Abstimmung mit dem Standard-Startdatum und stellen Sie das Enddatum so ein, dass es dem Datum aus Schritt 1 entspricht
4. Geben Sie den Endsaldo des Kontoauszugs aus dem Bankauszug ein
5. Es sollte keine Differenz vorhanden sein, und diese Abstimmung wird alle historischen Transaktionen für die vorherigen Zeiträume beinhalten
6. Durch die Speicherung dieser ersten Abstimmung können Sie zu einer häufigeren Abstimmungsfrequenz übergehen, die Ihren Buchhaltungsanforderungen entspricht.

</details>

## Überprüfung der Kontoauszugsinformationen

1. **Wählen Sie das Enddatum:** Geben Sie das Abschlussdatum aus Ihrem Kontoauszug ein
2. **Endsaldo des Kontoauszugs:** Geben Sie den endgültigen Saldo ein, der in Ihrem Kontoauszug angezeigt wird

:::info[tip]
**Abstimmung eingehend:** Zeigt die Summe und Anzahl der positiven Transaktionen an (Geldeingang)
**Abstimmung ausgehend** Zeigt die Summe und Anzahl der negativen Transaktionen an (Geldabgang)
:::

### Transaktionsabgleichsprozess

**Automatischer Abgleich:** Sobald die obigen Informationen eingegeben wurden, erkennt Fiskl innerhalb von Sekunden automatisch, ob es eine Diskrepanz zum Kontoauszug gibt. In Zukunft können wir Änderungen an den Transaktionen vornehmen, um zu einer Differenz von 0 zu gelangen, oder wir können fortfahren, indem wir auf die Differenz klicken und den Kontoauszug im CSV-Format hochladen.

## Umgang mit verschiedenen Transaktionszuständen

## Transaktionen, die perfekt übereinstimmen

Wenn Transaktionen sowohl in Ihrem Kontoauszug als auch in Fiskl angezeigt werden:
**Automatische Erkennung:** Fiskl hebt diese Übereinstimmungen automatisch hervor, was Ihnen hilft, Stunden manueller Arbeit und Querprüfung zu sparen, damit Sie schneller zur abgestimmten Status gelangen.

## Kontoauszugstransaktionen nicht in Fiskl

Für Transaktionen, die in Ihrem Kontoauszug angezeigt werden, aber versehentlich in Fiskl hinzugefügt oder entfernt wurden:

1. **Identifizieren Sie fehlende Elemente:** Suchen Sie nach ungeprüften Elementen auf der Kontoauszugsseite
2. **Neue Transaktionen hinzufügen:** Klicken Sie auf die Schaltfläche „+" neben der Kontoauszugstransaktion
3. **Transaktionsdetails vervollständigen:** Wählen Sie eine geeignete Kategorie (z. B. Bankgebühren, Zinseinnahmen)
4. **Erstellen und abgleichen: Klicken Sie auf „Erstellen", um die Transaktion hinzuzufügen, und aktivieren Sie dann beide Elemente, um den Abgleich abzuschließen**

## Fiskl-Transaktionen nicht auf dem Kontoauszug

Für Transaktionen, die in Fiskl aufgezeichnet, aber nicht auf Ihrem Kontoauszug angezeigt werden:

1. **Identifizieren Sie Zeitunterschiede:** Dies sind typischerweise noch nicht eingezogene Schecks oder Einzahlungen in Transit
2. **Nicht markiert lassen:** Aktivieren Sie diese Transaktionen während der Abstimmung nicht – ZUR SPÄTER BEARBEITUNG
3. **Überprüfen Sie auf Fehler:** Überprüfen Sie, ob es sich um legitime Zeitunterschiede handelt, nicht um Dateneingabefehler
4. **Zukünftige Kontoauszüge:** Diese Elemente sollten in Ihrem nächsten Abstimmungszeitraum angezeigt werden – ZUR SPÄTER BEARBEITUNG

### Abschließende Abstimmungsschritte

**Durchführen einer erfolgreichen Abstimmung:** Sobald Ihre Abstimmung eine Nulldifferenz anzeigt, klicken Sie auf Abstimmen.

### Nach der Abstimmung durchgeführte Maßnahmen

**Berichte generieren:** Online in Fiskl anzeigen oder bei Bedarf als PDF exportieren
**Vorhandene Datensätze aktualisieren oder neue Datensätze hinzufügen:** Falls Sie Transaktionen innerhalb des abgestimmten Zeitraums hinzufügen/entfernen oder vorhandene ändern müssen, ändert sich Ihr Abstimmungsstatus zu „Aufmerksamkeit erforderlich", was bedeutet, dass Sie zur entsprechenden Abstimmung zurückkehren und diese beheben müssen.

:::note Bei einer perfekten Abstimmung – Nulldifferenzen – sollten alle Transaktionen erfasst sein, und Ihr abgestimmter Kontostand sollte eine Nulldifferenz zu Ihrem Kontoauszugssaldo aufweisen. :::
