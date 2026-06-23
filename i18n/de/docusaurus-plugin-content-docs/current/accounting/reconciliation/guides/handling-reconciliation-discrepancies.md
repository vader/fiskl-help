---
title: Behandlung von Abstimmungsabweichungen
sidebar_position: 15
description: "Lernen Sie, häufige Abstimmungsdiskrepanzen wie fehlende Transaktionen, doppelte Einträge und Betragsunterschiede in Fiskl zu erkennen und zu beheben."
keywords: ["reconciliation discrepancies", "missing transactions", "duplicate transactions", "reconciliation errors", "transaction corrections"]
slug: /core-features/accounting/journal-entries/guides/handling-reconciliation-discrepancies
toc_min_heading_level: 2
toc_max_heading_level: 4
tags: 
 - Accounting 
 - Troubleshooting 
 - Transaction Management
---

Wenn es Unterschiede zwischen Ihrem Kontoauszug und den Fiskl-Datensätzen gibt, können diese leicht identifiziert und alle Abweichungen systematisch behoben werden – und mehrere Korrektionen können in Bulk bearbeitet werden.

## Häufige Arten von Abweichungen

Bei Ihrer Abstimmung werden Sie auf verschiedene Arten von Abweichungen stoßen:

**Fehlende Transaktionen in Fiskl:** Transaktionen, die versehentlich in Fiskl gelöscht wurden oder noch nicht im Bank-Feed enthalten sind
**Doppelte Transaktionen:** Fiskl-Transaktionen, die zweimal erfasst oder im Bank-Feed dupliziert wurden
**Inkorrekte Beträge:** Manchmal können Transaktionen mit unterschiedlichen Werten in Fiskl und auf Ihrem Kontoauszug eingegeben werden. Dies geschieht häufig, wenn Beträge manuell hinzugefügt werden und nicht über beide Systeme hinweg übereinstimmen
**Inkorrekte Daten:** Dies geschieht häufig, wenn Transaktionen manuell hinzugefügt oder mit falschen Daten manuell importiert werden

## Fehlende Transaktionen in Fiskl

Dies sind Transaktionen, die auf Ihrem Kontoauszug erscheinen, aber nicht in Fiskl erfasst sind:
- Bankgebühren oder Provisionen
- Zinszahlungen oder Zinserträge
- Automatische Zahlungen oder Einzahlungen
- Überweisungsgebühren
- Währungsumwandlungsgebühren

## Fehlende Transaktionen zu Fiskl hinzufügen

1. Klicken Sie auf das „Plus"-Symbol neben der Bankauszugstransaktion, um eine neue Transaktion zu erstellen
2. Fügen Sie die Kategorie und weitere nützliche Informationen hinzu
3. Klicken Sie auf „Erstellen" – dies fügt Ihre Transaktion zur Abstimmung hinzu
4. Markieren Sie beide Transaktionen, um die Abstimmung abzuschließen

## Transaktionen, die in Fiskl erfasst, aber noch nicht auf Ihrem Kontoauszug widergespiegelt sind

Diese umfassen:
- Ausgestellte, aber noch nicht eingelöste Schecks
- Ausstehende elektronische Überweisungen
- Einzahlungen in Transit
- Ausstehende Zahlungen

**Lösung:** Lassen Sie diese Transaktionen während der Abstimmung unmarkiert, da sie Zeitdifferenzen darstellen.

## Inkorrekte Transaktionsbeträge

Transaktionen, die an beiden Orten vorhanden sind, aber unterschiedliche Beträge aufweisen:

- Dateneingabefehler
- Währungsumwandlungsabweichungen
- Teilzahlungen, die versehentlich als vollständige Zahlungen erfasst wurden

**Lösung:** Korrigieren Sie den Transaktionsbetrag in Fiskl, indem Sie auf das „Bearbeiten"-Symbol klicken, um die Fiskl-Transaktion zu ändern, oder erstellen Sie Korrekturbuchungen.

## Schritte zur Behebung von Abweichungen

1. **Identifizieren Sie den Unterschied:** Fiskl zeigt die Differenz der Beträge automatisch an
2. **Beheben Sie fehlende Transaktionen:**
3. Fügen Sie Transaktionen in Fiskl hinzu oder entfernen Sie sie, indem Sie auf die Minus-/Plus-Schaltfläche über den Fiskl-Transaktionen auf der linken Seite klicken
4. Fügen Sie Bankgebühren, Provisionen oder andere fehlende Posten zu Fiskl hinzu
5. Stellen Sie sicher, dass die Daten und Beträge korrekt sind
6. **Behandeln Sie Zeitdifferenzen:**
7. Lassen Sie ausstehende Schecks und Einzahlungen unmarkiert
8. Diese erscheinen in Ihrer nächsten Abstimmungsperiode

**Beheben Sie Fehler:**
1. Bearbeiten Sie falsche Transaktionsbeträge in Fiskl
2. Erstellen Sie Stornobuchungen für doppelte Transaktionen
3. Fügen Sie fehlende Transaktionsdetails oder Beschreibungen hinzu (optional)
4. **Schließen Sie die Abstimmung ab:** Finalisieren Sie die Abstimmung, nachdem alle Abweichungen behoben wurden, indem Sie auf Abstimmung klicken

:::tip Sie können Ihre Abstimmung als Entwurf speichern, bis Sie bereit sind, sie vollständig abzustimmen. :::
