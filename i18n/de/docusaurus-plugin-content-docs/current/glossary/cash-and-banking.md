---
title: "Kasse und Bankwesen"
description: "Verwaltung von Bankkonten, Transaktionen und Kapitalflussrechnung in Fiskl"
sidebar_position: 5
---

# Zahlungsverkehr und Banking

Tools und Funktionen zum Verbinden von Bankkonten, zur Verwaltung von Transaktionen und zur Verfolgung von Kapitalflussrechnungsbewegungen.

## Bankverbindung {#bank-connection}

Eine sichere Verbindung zwischen Fiskl und Ihrer Finanzinstitution, die Banktransaktionen automatisch in Ihr Buchungssystem importiert. Bankverbindungen eliminieren manuelle Dateneingaben und stellen sicher, dass Ihre Unterlagen aktuell bleiben.

**Vorteile**:
- Automatischer Transaktionsimport
- Echtzeitaktualisierungen des Kontostands
- Reduzierte Dateneingabefehler
- Schnellere Abstimmung

:::note
Fiskl nutzt Bank-Level-Sicherheit und Verschlüsselung zum Schutz Ihrer Finanzdaten bei der Etablierung von Bankverbindungen.
:::

## Bankfeed {#bankfeed}

Der automatische Datenfluss von Transaktionsinformationen von Ihrer Bank zu Fiskl durch eine Bankverbindung. Bankfeeds liefern tägliche Aktualisierungen von Einzahlungen, Abhebungen und Kontostandsänderungen.

## Drittanbieter {#third-party-provider}

Ein externer Service, der Verbindungen zwischen Fiskl und Ihrer Bank erleichtert oder zusätzliche Funktionen bereitstellt. Beispiele sind Zahlungsabwickler, Bankfeed-Aggregatoren und Finanzdatenservices.

## Banküberweisung {#bank-transfer}

Die Bewegung von Geld von einem Bankkonto zu einem anderen. In Fiskl können Überweisungen zwischen Ihren eigenen Konten (interne Transfers) oder zu/von externen Parteien (Lieferantenzahlungen oder Kundeneinnahmen) erfolgen.

**Beispiel für interne Überweisung**: Verschiebung von 5.000 USD von Ihrem Girokonto auf Ihr Sparkonto.

**Beispiel für externe Überweisung**: Zahlung an einen Lieferanten von 1.200 USD per Banküberweisung.

## OFX {#ofx}

Open Financial Exchange – ein Standard-Dateiformat für den Austausch von Finanzdaten zwischen Softwareanwendungen und Finanzinstitutionen. OFX-Dateien enthalten Transaktionsdetails und können in Fiskl importiert werden, wenn direkte Bankverbindungen nicht verfügbar sind.

**Wann Sie OFX verwenden sollten**:
- Ihre Bank unterstützt keine direkten Verbindungen
- Sie möchten historische Transaktionen importieren
- Sie möchten Daten aus Finanzsoftware importieren

## CSV-Datei {#csv-file}

Comma-Separated Values – ein einfaches Dateiformat zum Speichern von Tabellendaten. CSV-Dateien können verwendet werden, um Transaktionsdaten, Kundenlisten oder andere Finanzinformationen in und aus Fiskl zu importieren oder zu exportieren.

**Beispiel CSV-Struktur**:
```
Date,Description,Amount,Category
2024-01-15,Office Supplies,45.99,Expenses
2024-01-16,Client Payment,1500.00,Income
```

## XLS/XLSX-Datei {#xls-xlsx-file}

Excel-Dateiformate (.xls für ältere Excel-Versionen, .xlsx für modernes Excel). Diese Tabellenkalkulationsdateien können zum Importieren oder Exportieren von Finanzdaten verwendet werden und bieten mehr Formatierungsoptionen als CSV-Dateien.

## Google Sheets {#google-sheets}

Googles Cloud-basierte Tabellenkalkulationsanwendung. Fiskl kann sich mit Google Sheets integrieren, um Daten zu importieren, benutzerdefinierte Berichte zu erstellen oder bei Finanzinformationen zusammenzuarbeiten.

## Kopfzeile {#header-row}

Die erste Zeile in einer CSV-, Excel- oder Google Sheets-Datei, die Spaltennamen enthält. Kopfzeilen helfen Fiskl, während des Imports zu erkennen, welche Spalten Daten, Beträge, Beschreibungen und andere Transaktionsdetails enthalten.

**Beispiel Kopfzeile**:
```
Transaction Date | Description | Debit | Credit | Balance
```

## Datenimport {#data-import}

Der Prozess der Übertragung von Finanzdaten in Fiskl aus externen Quellen wie Bankdateien, Buchhaltungssoftware oder Tabellenkalkulationen. Datenimport optimiert die Einrichtung und eliminiert die manuelle Eingabe von historischen Transaktionen.

**Häufige Importquellen**:
- Kontoauszüge (OFX, CSV)
- Frühere Buchhaltungssoftware
- Spesenabrechnungen
- Kunden- und Lieferantenlisten

## Datenexport {#data-export}

Der Prozess zum Extrahieren von Finanzdaten aus Fiskl für die Verwendung in anderen Anwendungen, zu Sicherungszwecken oder zum Bereitstellen von Informationen für Buchhalter und Prüfer.

**Exportoptionen**:
- Transaktionsberichte (CSV, Excel)
- Finanzberichte (PDF)
- Steuerberichte
- Kunden-/Lieferantenlisten

## Datenwiederherstellung {#data-restore}

Wiederherstellung von Finanzdaten aus einer Sicherung nach Datenverlust, Beschädigung oder versehentlichem Löschen. Regelmäßige Sicherungen stellen sicher, dass Sie Ihre Buchhaltungsinformationen bei Bedarf wiederherstellen können.

## Datensicherheit {#data-security}

Maßnahmen zum Schutz Ihrer Finanzinformationen vor unbefugtem Zugriff, Diebstahl oder Verlust. Fiskl nutzt mehrere Sicherheitsebenen, einschließlich Verschlüsselung, sicherer Authentifizierung und regelmäßiger Sicherungen.

**Sicherheitsfeatures**:
- Bank-Level-Verschlüsselung
- Sichere Rechenzentren
- Zwei-Faktor-Authentifizierung
- Regelmäßige Sicherheitsaudits
- Automatische Sicherungen

## Datenschutz {#data-privacy}

Der Schutz und die ordnungsgemäße Handhabung Ihrer persönlichen und Finanzinformationen. Fiskl verpflichtet sich, Ihre Daten privat zu halten und sich an Datenschutzbestimmungen zu halten.

**Ihre Rechte**:
- Kontrollieren Sie, wer auf Ihre Daten zugreift
- Exportieren Sie Ihre Daten jederzeit
- Fordern Sie die Datenlöschung an
- Erfahren Sie, wie Ihre Daten verwendet werden
