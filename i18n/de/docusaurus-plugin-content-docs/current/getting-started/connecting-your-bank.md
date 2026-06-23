---
title: "Verbindung Ihrer Bank"
description: "Schritt-für-Schritt-Anleitung zum Verbinden Ihrer Bankkonten mit Fiskl mithilfe automatisierter Bankverbindungen, Stripe-Integration oder manueller Importe."
keywords: ["banking connection", "connect bank", "bank integration", "Salt Edge", "Yodlee", "Wio Bank", "Stripe", "bank import", "transaction sync"]
sidebar_position: 3
---

Dieses Handbuch erläutert, wie Sie Ihre Bankkonten mit Fiskl verbinden, und hilft Ihnen bei der Auswahl der besten Verbindungsmethode für Ihre Region und Ihren Finanzinstitut.

## Warum Ihre Bank verbinden?

Das Verbinden Ihrer Bank ist der kritischste Schritt für Buchhalter und Geschäftsinhaber, die Fiskl nutzen. Automatisierte Bankverbindungen transformieren Ihre Finanzverwaltung, indem sie manuelle Dateneingaben eliminieren und Genauigkeit gewährleisten.

**Hauptvorteile:**
- Transaktionen werden täglich automatisch importiert
- Echtzeit-Übersicht über Ihre Liquiditätsposition
- Automatische Kategorisierung spart Stunden Buchhaltungsarbeit
- Transaktionen in mehreren Währungen werden nahtlos verarbeitet
- Sichere Verbindungen mit Open-Banking-Protokollen

Nach der Verbindung übernimmt Fiskl die mühsame Arbeit, während Sie sich auf die Geschäftsführung konzentrieren.

## Wählen Sie Ihre Verbindungsmethode

Fiskl bietet drei Möglichkeiten, Ihre Finanzdaten zu verbinden. Wählen Sie die Methode, die Ihren Anforderungen und Ihrem Komfortniveau am besten entspricht.

### Option 1: Automatisierte Bankverbindungen (Empfohlen)

Automatisierte Verbindungen synchronisieren Transaktionen direkt von Ihrer Bank mit Fiskl unter Verwendung sicherer Open-Banking-Protokolle.

**Am besten für:**
- Tägliche Transaktionsimporte
- Mehrere Bankkonten
- Internationale Unternehmen mit Konten in verschiedenen Ländern
- Benutzer, die berührungslose Buchhaltung wünschen

**Verfügbare Anbieter:**
- **Salt Edge** - Banken in Europa, Asien, Nahost
- **Yodlee** - Banken in USA, Kanada, Südafrika
- **Wio Bank** - Direkte VAE-Bankintegration

### Option 2: Stripe-Integration

Verbinden Sie Ihr Stripe-Konto, um Zahlungstransaktionen, Auszahlungen und Gebühren automatisch zu importieren.

**Am besten für:**
- Unternehmen, die Online-Zahlungen akzeptieren
- E-Commerce-Plattformen
- SaaS-Unternehmen
- Freiberufler, die Stripe für Rechnungsstellung nutzen

Stripe wird in Fiskl als Banking-Feed behandelt und synchronisiert sich automatisch nach der Verbindung.

### Option 3: Manuelle Bankimporte

Laden Sie Kontoauszüge manuell in CSV-, OFX- oder QIF-Formaten hoch.

**Am besten für:**
- Banken, die von automatisierten Anbietern nicht unterstützt werden
- Einmalige historische Datenimporte
- Benutzer, die manuelle Kontrolle bevorzugen
- Vierteljährliche Abstimmungs-Workflows

## Schritt-für-Schritt: Verbinden Sie Ihre Bank

### Finden Sie den richtigen Anbieter für Ihre Region

Wählen Sie den Anbieter, der die Bank in Ihrer Region abdeckt:

**Nahost (VAE, Saudi-Arabien usw.):**
- **Wio Bank** - Direkte Integration für Wio-Geschäftskonten
- **Salt Edge** - Meiste traditionelle Banken in der Region

**Nordamerika (USA, Kanada):**
- **Yodlee** - Umfassende Abdeckung von US- und kanadischen Banken
- **Stripe** - Falls Sie Zahlungen über Stripe verarbeiten

**Europa:**
- **Salt Edge** - Open-Banking-Verbindungen für die meisten europäischen Banken
- **Stripe** - Integration für Zahlungsabwicklung

**Asien und andere Regionen:**
- **Salt Edge** - Wachsende Abdeckung in Asien, Afrika und Lateinamerika
- Überprüfen Sie den Anbieterauswahlbildschirm für Ihre spezifische Bank

**Globale Zahlungsabwicklung:**
- **Stripe** - Funktioniert weltweit für Zahlungsdaten

### Verbinden Sie sich mit automatisiertem Banking

1. Gehen Sie zu **Banking** in der linken Navigation
2. Wählen Sie **Bank verbinden**
3. Wählen Sie Ihren Anbieter (Salt Edge, Yodlee oder Wio Bank)
4. Suchen Sie Ihre Bank nach Name
5. Wählen Sie Ihre Bank aus den Ergebnissen
6. Folgen Sie dem sicheren Authentifizierungsprozess auf der Website Ihrer Bank
7. Wählen Sie, welche Konten verbunden werden sollen
8. Legen Sie Ihr Synchronisierungsstartdatum fest (wir empfehlen 90 Tage Historie)

Ihre Transaktionen beginnen sofort zu synchronisieren. Die erste Synchronisierung dauert je nach Transaktionsvolumen einige Minuten.

:::tip
Wenn Sie in mehreren Regionen tätig sind, verbinden Sie Konten von verschiedenen Anbietern im selben Fiskl-Unternehmen. Nutzen Sie beispielsweise Yodlee für US-Konten und Salt Edge für britische Konten.
:::

**Detaillierte Anbieiterleitfäden:**
- [Mit Salt Edge verbinden](/integrations/banking/connect-saltedge.md)
- [Mit Yodlee verbinden](/integrations/banking/connect-yodlee.md)
- [Wio Bank verbinden](/integrations/banking/connect-wio.md)

### Verbinden Sie Stripe

Die Stripe-Integration importiert automatisch Zahlungsdaten, Gebühren und Auszahlungen.

1. Gehen Sie zu **Integrationen** > **Zahlungen**
2. Wählen Sie **Stripe**
3. Wählen Sie **Stripe-Konto verbinden**
4. Autorisieren Sie Fiskl für den Zugriff auf Ihre Stripe-Daten
5. Wählen Sie, welche Stripe-Konten synchronisiert werden sollen (falls vorhanden)

Stripe-Daten werden täglich synchronisiert und erscheinen in Ihrem **Banking**-Tab neben Banktransaktionen.

**Weitere Informationen:** [Stripe verbinden](/integrations/banking/connect-stripe.md)

### Manueller Import von Kontoauszügen

Laden Sie Kontoauszüge hoch, wenn automatisierte Verbindungen nicht verfügbar sind.

1. Laden Sie Ihren Kontoauszug in CSV-, OFX- oder QIF-Format von Ihrer Bank herunter
2. Gehen Sie zu **Banking** in Fiskl
3. Wählen Sie **Transaktionen importieren**
4. Wählen Sie Ihr Dateiformat
5. Laden Sie Ihre Auszugsdatei hoch
6. Ordnen Sie Spalten (für CSV-Dateien) dem Fiskl-Format zu
7. Überprüfen und bestätigen Sie den Import

Importierte Transaktionen erscheinen in Ihrem **Banking**-Tab zur Kategorisierung und Abstimmung.

:::warning
Manuelle Importe erfordern regelmäßiges Herunterladen von Kontoauszügen, um Ihre Bücher aktuell zu halten. Automatisierte Verbindungen eliminieren diesen manuellen Schritt und bieten tägliche Aktualisierungen.
:::

## Was geschieht nach der Verbindung?

Nach der Verbindung Ihrer Bank fließen Transaktionen automatisch in Fiskl:

1. **Tägliche Synchronisierung**: Neue Transaktionen erscheinen täglich in Ihrem **Banking**-Tab
2. **Automatisches Abgleichen**: Fiskl schlägt Übereinstimmungen mit bestehenden Rechnungen und Ausgaben vor
3. **Intelligente Kategorisierung**: Das System lernt Ihre Vorlieben und schlägt Hauptbuchkonten vor
4. **Bereit für Abstimmung**: Überprüfen und bestätigen Sie Transaktionen, um Ihre Bücher zu aktualisieren

Ihr Kontenrahmen und Finanzberichte werden in Echtzeit aktualisiert, während Sie Transaktionen kategorisieren.

## Verwalten Sie Ihre Verbindungen

### Anzeige verbundener Konten

Gehen Sie zu **Banking** > **Konten**, um alle verbundenen Konten zu sehen. Jedes Konto zeigt an:
- Aktueller Kontostand
- Datum und Uhrzeit der letzten Synchronisierung
- Verbindungsstatus
- Anzahl der ausstehenden Transaktionen

### Konten erneut verbinden

Bankverbindungen erfordern gelegentlich eine Wiederautorisierung aus Sicherheitsgründen. Wenn eine Verbindung abläuft:

1. Gehen Sie zu **Banking** > **Konten**
2. Suchen Sie das Konto, das **Verbindung erforderlich** anzeigt
3. Wählen Sie **Erneut verbinden**
4. Schließen Sie den Authentifizierungsprozess ab

### Trennen Sie die Verbindung zu Konten

So entfernen Sie eine Bankverbindung:

1. Gehen Sie zu **Banking** > **Konten**
2. Wählen Sie das Konto, das getrennt werden soll
3. Wählen Sie **Trennen**
4. Bestätigen Sie die Aktion

Historische Transaktionen bleiben in Fiskl erhalten. Nur die zukünftige Synchronisierung wird gestoppt.

## Fehlerbehebung bei häufigen Problemen

### Bank nicht in der Anbieterliste gefunden

Wenn Ihre Bank nicht in den Suchergebnissen angezeigt wird:

1. Versuchen Sie, alternative Namen oder Abkürzungen zu suchen
2. Wählen Sie einen anderen Anbieter (Salt Edge gegen Yodlee)
3. Nutzen Sie manuellen Import als Alternative
4. Kontaktieren Sie den Support, um das Hinzufügen Ihrer Bank anzufordern

### Verbindung schlägt während der Authentifizierung fehl

Häufige Ursachen und Lösungen:

- **Falsche Anmeldedaten**: Überprüfen Sie Ihren Banknamen und Passwort
- **Zwei-Faktor-Authentifizierung**: Schließen Sie alle Sicherheitsaufforderungen Ihrer Bank ab
- **Bankenwartung**: Versuchen Sie es in ein paar Stunden erneut
- **Nicht unterstützter Kontotyp**: Einige Geschäftskontotypen erfordern manuelles Setup

### Transaktionen werden nicht synchronisiert

Wenn Transaktionen nicht mehr angezeigt werden:

1. Überprüfen Sie den Verbindungsstatus unter **Banking** > **Konten**
2. Wählen Sie **Erneut verbinden**, wenn der Status einen Fehler anzeigt
3. Überprüfen Sie, dass Ihr Bankkonto aktiv und nicht gesperrt ist
4. Überprüfen Sie, dass Sie keine Transaktionslimits erreicht haben (selten)

## Sicherheit und Datenschutz

Fiskl verwendet branchenstandard Open-Banking-Protokolle für alle automatisierten Verbindungen.

**Wichtigste Sicherheitsmerkmale:**
- Fiskl speichert Ihre Bankdaten nie
- Lesezugriff nur (Fiskl kann keine Überweisungen einleiten)
- Bankensicherheitsverschlüsselung für alle Datenübertragungen
- Verbindungen verwenden OAuth-Tokens, die jederzeit widerrufen werden können
- Regelmäßige Sicherheitsprüfungen und Compliance-Checks

Ihre Bankdaten bleiben jederzeit privat und sicher.

## Nächste Schritte

Nach dem Verbinden Ihrer Bankkonten:

1. **Überprüfen Sie importierte Transaktionen** im **Banking**-Tab
2. **Kategorisieren Sie Transaktionen** durch Zuordnung zu Hauptbuchkonten
3. **Stimmen Sie Transaktionen ab** mit bestehenden Rechnungen und Ausgaben
4. **Stimmen Sie Konten ab**, um Genauigkeit zu gewährleisten
5. **Generieren Sie Berichte**, um Ihre aktualisierte Finanzposition zu sehen

:::tip
Reservieren Sie wöchentlich 15-30 Minuten, um neue Transaktionen zu überprüfen und zu kategorisieren. Diese Routine hält Ihre Bücher aktuell und macht den Monatsabschluss mühelos.
:::

## Benötigen Sie mehr Hilfe?

**Erkunden Sie detaillierte Anbieiterleitfäden:** [Bankverbindungen – Übersicht](/integrations/banking/overview.md)

**Erfahren Sie mehr über Abstimmung:** [Abstimmung – Übersicht](/accounting/reconciliation/overview.md)

**Importieren Sie historische Daten:** [Daten importieren](/getting-started/importing-data.md)

**Support kontaktieren:** [Hilfe erhalten](/support/overview.md)
