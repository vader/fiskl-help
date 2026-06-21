---
title: "Bankkontoauszüge importieren"
description: "Erfahren Sie, wie Sie historische Bankauszüge in den Formaten CSV, QIF und OFX in Fiskl importieren, um eine vollständige Transaktionshistorie und genaue Eröffnungssalden zu erhalten."
keywords: ["bank import", "CSV import", "QIF import", "OFX import", "historical data", "opening balance", "transaction import", "bank statement"]
sidebar_position: 4
---

Dieses Handbuch erklärt, wie Sie Kontoauszüge in Fiskl importieren und hilft Ihnen, genaue historische Transaktionsdaten mit korrekten Eröffnungssalden einzurichten.

## Warum Kontoauszüge importieren?

Manuelle Kontoauszugsimporte sind wesentlich, um vollständige historische Daten in Fiskl zu erhalten. Während automatisierte Bankverbindungen tägliche Transaktionsaktualisierungen bieten, synchronisieren die meisten Anbieter nur die letzten 12 Monate der Historie.

**Manuelle Importe verwenden für:**
- Historische Transaktionen von vor mehr als 12 Monaten
- Banken, die von automatisierten Konnektoren nicht unterstützt werden
- Anfängliche Kontoeinrichtung mit vollständiger Transaktionshistorie
- Kombination mit automatisierten Feeds für vollständige Datenabdeckung
- Kreditkartenkonten und andere Verbindlichkeitskonten
- Migration von einem anderen Buchhaltungssystem

Manuelle Importe funktionieren nahtlos neben automatisierten Bankverbindungen. Importieren Sie Ihre Historie einmalig, dann übernehmen automatisierte Feeds die laufenden Transaktionen.

## Unterstützte Importformate

Fiskl akzeptiert drei standardisierte Bankdateiformate. Ihre Bank bietet typischerweise mindestens eines dieser Formate beim Export von Kontoauszügen an.

### CSV (Comma-Separated Values) – am vielseitigsten

CSV ist das flexibelste Format und funktioniert mit nahezu jedem Kontoauszug-Export.

**Vorteile:**
- Unterstützt verschiedene Spaltenlayouts und Formate
- Einfach in Tabellenkalkulationssoftware vor dem Import zu bearbeiten
- Verarbeitet verschiedene Datumsformate automatisch
- Funktioniert mit benutzerdefinierten Bankexportformaten

**Am besten geeignet für:**
- Banken mit eindeutigen Auszugsformaten
- Datenbereinigung vor dem Import
- Kombinieren von Daten aus mehreren Quellen

### QIF (Quicken Interchange Format)

QIF ist ein standardisiertes Format, das von vielen Buchhaltungsanwendungen verwendet wird.

**Vorteile:**
- Strukturiertes Format mit konsistenten Feldern
- Ordnet Standard-Transaktionsfelder automatisch zu
- Keine Spaltenzuordnung erforderlich

**Am besten geeignet für:**
- Export aus Quicken oder ähnlicher Software
- Banken, die direkt QIF-Export anbieten
- Schnelle Importe ohne Anpassung

### OFX (Open Financial Exchange)

OFX ist ein Bankensoftware-Standard-Format.

**Vorteile:**
- Enthält automatisch Kontometadaten
- Hochgradig strukturiert und zuverlässig
- Von den meisten Finanzinstitutionen bevorzugt

**Am besten geeignet für:**
- Direkte Bankexporte
- Sicherung der Datengenauigkeit
- Große Transaktionsvolumina

## Welche Konten unterstützen Importe?

Sie können Kontoauszüge in bestimmte Kontotypen in Fiskl importieren.

**Unterstützte Kontotypen:**
- Bargeld- und Bargeldäquivalentkonten (Giro-, Sparkonten)
- Kreditkartenkonten
- Andere Verbindlichkeitskonten mit Transaktionshistorie

**Wo importieren:**

Gehen Sie zu **Banking** > Wählen Sie das Konto > Wählen Sie **Transaktionen importieren**

:::tip
Sie müssen das Bankkonto in Fiskl erstellen, bevor Sie Transaktionen importieren. Gehen Sie zu **Banking** > **Konto hinzufügen**, um ein manuelles Konto zu erstellen, falls Sie es noch nicht getan haben.
:::

## Schritt für Schritt: Kontoauszüge importieren

### Schritt 1: Laden Sie Ihren Kontoauszug herunter

Rufen Sie Ihre Kontoauszugsdatei von Ihrem Finanzinstitut ab:

1. Melden Sie sich auf der Website Ihrer Bank an
2. Gehen Sie zu Kontoauszügen oder Transaktionsverlauf
3. Wählen Sie den benötigten Datumsbereich
4. Wählen Sie das Exportformat (CSV, QIF oder OFX)
5. Laden Sie die Datei auf Ihren Computer herunter

**Empfohlener Datumsbereich:**
- Beginnend mit dem Anfang Ihres Geschäftsjahres, oder
- Importieren Sie mindestens 12 Monate Historie, oder
- Importieren Sie ab dem Zeitpunkt, als Sie das Konto zu verwenden begannen

### Schritt 2: Bereiten Sie Ihren Eröffnungssaldo vor

Bevor Sie importieren, müssen Sie Ihren Eröffnungssaldo kennen. Dies ist der Kontosaldo unmittelbar vor Ihrer ersten importierten Transaktion.

**So finden Sie Ihren Eröffnungssaldo:**

Schauen Sie sich Ihren Kontoauszug an, um den Saldo anzuzeigen, der vor dem ersten Transaktionsdatum angezeigt wird, das Sie importieren.

**Beispiel:**
- Erstes Transaktionsdatum: 1. Januar 2024
- Saldo am 31. Dezember 2023: $5.000
- Zu erfassender Eröffnungssaldo: $5.000

:::warning
Das Einstellen des korrekten Eröffnungssaldos ist entscheidend für genaue Finanzberichte. Überprüfen Sie diesen Betrag anhand Ihres Kontoauszugs, bevor Sie fortfahren.
:::

### Schritt 3: Erfassen Sie Ihren Eröffnungssaldo

Der Eröffnungssaldo muss als Buchungssatz erfasst werden, bevor Transaktionen importiert werden.

**So erfassen Sie den Eröffnungssaldo:**

1. Gehen Sie zu **Accounting** > **Buchungssätze**
2. Wählen Sie **Neuer Buchungssatz**
3. Stellen Sie das Datum auf einen Tag vor Ihrer ersten Transaktion
4. Geben Sie die Beschreibung ein: "Eröffnungssaldo - [Kontoname]"
5. Fügen Sie zwei Zeilen hinzu:
   - **Soll** Ihr Bankkonto mit dem Eröffnungssaldobetrag
   - **Haben** Ihrem Eigenkapitalkonto (Eröffnungssaldo-Eigenkapital oder ähnlich)
6. Wählen Sie **Speichern**

**Beispiel-Buchungssatz:**

Datum: 31. Dezember 2023

| Konto | Soll | Haben |
|---------|-------|--------|
| Geschäftsgirokonto | $5.000 | |
| Eröffnungssaldo-Eigenkapital | | $5.000 |

Dies legt Ihren Startpunkt für genaue Abstimmung fest.

### Schritt 4: Importieren Sie Ihre Transaktionen (CSV)

CSV-Importe erfordern die Zuordnung der Spalten Ihrer Bank zu Fiskls Format.

1. Gehen Sie zu **Banking** > Wählen Sie Ihr Konto
2. Wählen Sie **Transaktionen importieren**
3. Wählen Sie **CSV** als Format
4. Laden Sie Ihre CSV-Datei hoch
5. Überprüfen Sie die Spaltenvorschau

**Erforderliche Spalten zuordnen:**

Der Import-Assistent zeigt Ihre CSV-Spalten. Ordnen Sie jede dem entsprechenden Fiskl-Feld zu:

**Wesentliche Spalten (erforderlich):**
- **Datum** - Transaktionsdatum
- **Beschreibung** - Transaktionsbeschreibung oder Notiz
- **Betrag** - Transaktionsbetrag

**Betragsspalten-Optionen:**

Wählen Sie einen dieser Ansätze basierend auf Ihrem CSV-Format:

- **Einzelne Betragsspalte** - Negativ für Abflüsse, positiv für Zuflüsse
- **Separate Spalten** - Eine Spalte für eingehende Beträge, eine für ausgehende
- **Soll/Haben-Spalten** - Buchhaltungsformat

**Erweiterte Spalten (optional):**
- **Referenz-/Schecknummer** - Eindeutige Transaktionskennung
- **Kategorie** - Vorkategorisierte Transaktionen
- **Zahlungsempfänger** - Transaktionsgegenpartei

**Der Vorteil der Referenznummer:**

Wenn Ihre CSV eine eindeutige Referenz- oder Transaktions-ID enthält, ordnen Sie sie dem Feld „Referenz" zu. Fiskl verwendet dies, um doppelte Importe zu verhindern, wenn Sie dieselbe Datei erneut importieren.

6. Wählen Sie **Weiter** nach der Spaltenzuordnung
7. Überprüfen Sie die Transaktionsvorschau
8. Wählen Sie **Importieren**

Ihre Transaktionen werden importiert und erscheinen in der **Banking**-Registerkarte.

### Schritt 5: Importieren Sie Ihre Transaktionen (QIF oder OFX)

QIF- und OFX-Dateien haben standardisierte Formate, die automatisch zugeordnet werden.

1. Gehen Sie zu **Banking** > Wählen Sie Ihr Konto
2. Wählen Sie **Transaktionen importieren**
3. Wählen Sie **QIF** oder **OFX** als Format
4. Laden Sie Ihre Datei hoch
5. Überprüfen Sie die Transaktionsvorschau
6. Wählen Sie **Importieren**

Keine Spaltenzuordnung erforderlich. Transaktionen werden direkt importiert.

### Schritt 6: Überprüfen Sie importierte Transaktionen

Überprüfen Sie nach dem Import, ob Ihre Transaktionen korrekt geladen wurden:

1. Gehen Sie zu **Banking** > Wählen Sie Ihr Konto
2. Überprüfen Sie die Transaktionsliste
3. Überprüfen Sie, ob der Datumsbereich Ihren Importzeitraum abdeckt
4. Überprüfen Sie, ob der Endsaldo mit Ihrem Kontoauszug übereinstimmt

**Häufige Probleme zum Überprüfen:**
- Doppelte Transaktionen (falls Sie zuvor importiert haben)
- Falsche Datumsformate (Daten erscheinen falsch)
- Beträge mit falschen Vorzeichen (Soll wird als Haben angezeigt)
- Fehlende Transaktionen aus der Originaldatei

Wenn Sie Probleme feststellen, können Sie den importierten Batch löschen und nach Korrektur der Quelldatei erneut importieren.

## Kombination von Importen mit automatisierten Feeds

Der leistungsstärkste Ansatz verbindet manuelle Importe mit automatisierten Bankverbindungen.

**Empfohlener Arbeitsablauf:**

1. **Importieren Sie historische Daten** - Rufen Sie 12+ Monate Transaktionsverlauf per CSV-Import ab
2. **Verbinden Sie den automatisierten Feed** - Richten Sie eine Salt Edge-, Yodlee- oder Wio Bank-Verbindung ein
3. **Lassen Sie die Automatisierung die Arbeit übernehmen** - Zukünftige Transaktionen werden automatisch synchronisiert

Dies gibt Ihnen einen vollständigen Verlauf sowie laufende Automatisierung ohne manuelle Arbeit.

**Behandlung der Überschneidung:**

Die meisten automatisierten Verbindungen synchronisieren die letzten 90 Tage bei der erstmaligen Verbindung. Dies erzeugt eine kleine Überschneidung mit Ihrem historischen Import.

**So behandeln Sie überlappende Transaktionen:**

- Fiskl erkennt potenzielle Duplikate basierend auf Datum, Betrag und Beschreibung
- Überprüfen Sie gekennzeichnete Duplikate in der **Banking**-Registerkarte
- Löschen Sie doppelte Transaktionen, um Ihre Aufzeichnungen sauber zu halten

Referenznummern aus CSV-Importen helfen, Duplikate automatisch zu verhindern.

## Erweiterte CSV-Zuordnungstipps

### Mehrere Betragsspalten

Wenn Ihre CSV separate Spalten für Einzahlungen und Abhebungen hat:

1. Ordnen Sie die Einzahlungsspalte zu **Eingehend**
2. Ordnen Sie die Abhebungsspalte zu **Ausgehend**
3. Fiskl verarbeitet die Vorzeichen automatisch

### Datumformatprobleme

Wenn Daten nicht korrekt analysiert werden:

1. Öffnen Sie die CSV in einer Tabellenkalkulationsanwendung
2. Formatieren Sie die Datumsspalte in YYYY-MM-DD-Format um
3. Speichern Sie die Datei und importieren Sie sie erneut

### Aufräumen von Beschreibungen

Wenn Transaktionsbeschreibungen unübersichtlich oder unklar sind:

1. Öffnen Sie die CSV vor dem Import
2. Bearbeiten Sie die Beschreibungsspalte, um sie lesbarer zu machen
3. Speichern und importieren Sie die bereinigte Version

Dies erleichtert die zukünftige Kategorisierung.

### Umgang mit verschiedenen Währungen

Wenn Ihr Kontoauszug Transaktionen in mehreren Währungen enthält:

1. Stellen Sie sicher, dass Ihre CSV eine Währungsspalte enthält
2. Ordnen Sie die Währungsspalte während des Imports zu
3. Fiskl konvertiert automatisch in Ihre Basiswährung

## Fehlerbehebung bei Importproblemen

### Import schlägt mit Formatfehler fehl

**Ursache:** CSV-Datei hat Formatierungsprobleme oder unerwartete Zeichen

**Lösung:**
1. Öffnen Sie die Datei in einem Text-Editor
2. Überprüfen Sie auf Sonderzeichen oder zusätzliche Kommas
3. Stellen Sie sicher, dass UTF-8-Kodierung vorhanden ist
4. Entfernen Sie alle Zusammenfassungszeilen oder Summen am Ende
5. Speichern Sie erneut und versuchen Sie den Import erneut

### Transaktionen haben falsche Daten

**Ursache:** Datumsformat wird nicht korrekt erkannt

**Lösung:**
1. Überprüfen Sie das Datumsformat in Ihrer CSV
2. Konvertieren Sie Daten vor dem Import ins YYYY-MM-DD-Format
3. Einige Banken verwenden DD/MM/YYYY vs. MM/DD/YYYY - überprüfen Sie das Format

### Beträge sind falsch oder negativ

**Ursache:** Spaltenzuordnung entspricht nicht Ihrem Bankformat

**Lösung:**
1. Überprüfen Sie, wie Ihre Bank Abflüsse und Zuflüsse darstellt
2. Ordnen Sie die Betragsspalten entsprechend neu zu
3. Einige Banken verwenden Klammern für negative Beträge - stellen Sie korrekte Formatierung sicher

### Doppelte Transaktionen nach dem Import

**Ursache:** Zuvor importierte Transaktionen oder Überschneidung mit automatisiertem Feed

**Lösung:**
1. Gehen Sie zu **Banking** > Wählen Sie Ihr Konto
2. Filtern Sie, um Datumseinträge doppelt anzuzeigen
3. Vergleichen Sie Beträge und Beschreibungen
4. Löschen Sie doppelte Einträge manuell

### Eröffnungssaldo stimmt nicht mit Kontoauszug überein

**Ursache:** Eröffnungssaldo-Buchungssatz war falsch oder fehlt

**Lösung:**
1. Gehen Sie zu **Accounting** > **Buchungssätze**
2. Finden Sie den Eröffnungssald-Eintrag
3. Überprüfen Sie, dass das Datum vor Ihrer ersten importierten Transaktion liegt
4. Überprüfen Sie, dass der Betrag mit Ihrem Kontoauszug übereinstimmt
5. Bearbeiten Sie den Buchungssatz bei Bedarf

## Best Practices für den Datenimport

### Vor dem Import

- [ ] Laden Sie Kontoauszüge herunter, die den gewünschten Datumsbereich abdecken
- [ ] Überprüfen Sie, dass das Dateiformat CSV, QIF oder OFX ist
- [ ] Notieren Sie sich Ihren Eröffnungssaldo aus dem Kontoauszug
- [ ] Erstellen Sie das Konto in Fiskl, falls es nicht vorhanden ist
- [ ] Erfassen Sie den Eröffnungssaldo-Buchungssatz

### Während des Imports

- [ ] Ordnen Sie alle erforderlichen Spalten sorgfältig zu (nur CSV)
- [ ] Ordnen Sie die Referenznummernnspalte zu, falls verfügbar
- [ ] Zeigen Sie eine Vorschau der Transaktionen an, bevor Sie den Import abschließen
- [ ] Überprüfen Sie, dass Beträge korrekte Vorzeichen haben
- [ ] Überprüfen Sie, dass der Datumsbereich den erwarteten Zeitraum abdeckt

### Nach dem Import

- [ ] Überprüfen Sie, dass die Transaktionszahl mit dem Kontoauszug übereinstimmt
- [ ] Überprüfen Sie, dass der Endsaldo mit dem Kontoauszug übereinstimmt
- [ ] Überprüfen Sie auf und entfernen Sie Duplikate
- [ ] Beginnen Sie mit der Kategorisierung von Transaktionen zu Konten
- [ ] Stimmen Sie das Konto ab, um Genauigkeit zu bestätigen

### Für fortlaufenden Erfolg

- [ ] Richten Sie eine automatisierte Bankverbindung für zukünftige Transaktionen ein
- [ ] Importieren Sie historische Daten nur einmal pro Konto
- [ ] Bewahren Sie Originaldateien zur Referenz auf
- [ ] Dokumentieren Sie Ihre Importdatumsbereiche als Referenz für die Zukunft
- [ ] Stimmen Sie Konten monatlich ab, um Probleme frühzeitig zu erkennen

## Was passiert nach dem Import?

Nach dem Import werden Transaktionen in Ihrer **Banking**-Registerkarte neben automatisierten Feed-Transaktionen angezeigt.

**Nächste Schritte:**

1. **Kategorisieren Sie Transaktionen** - Ordnen Sie jede Transaktion dem entsprechenden Hauptbuchkonto zu
2. **Gleichen Sie mit Rechnungen/Ausgaben ab** - Verknüpfen Sie Transaktionen mit bestehenden Datensätzen, falls zutreffend
3. **Stimmen Sie das Konto ab** - Bestätigen Sie, dass Ihr Fiskl-Saldo mit Ihrem Banksaldo übereinstimmt
4. **Generieren Sie Berichte** - Ihre Finanzberichte enthalten jetzt den importierten Verlauf

:::tip
Importieren Sie historische Daten während der anfänglichen Fiskl-Einrichtung, bevor Ihre arbeitsreichste Zeit. Dies stellt sicher, dass Ihre Berichte von Anfang an genau sind, ohne unter Druck durch Kategorisierung zu geraten.
:::

## Benötigen Sie weitere Hilfe?

**Informieren Sie sich über automatisierte Verbindungen:** [Verbinden Sie Ihre Bank](/getting-started/connecting-your-bank.md)

**Verstehen Sie Abstimmung:** [Abstimmungsübersicht](/accounting/reconciliation/overview.md)

**Richten Sie Ihren Kontenrahmen ein:** [Kontenrahmen](/accounting/chart-of-accounts)

**Kontaktieren Sie den Support:** [Holen Sie sich Support](/support/overview.md)
