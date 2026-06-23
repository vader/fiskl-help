---
title: "Kunden-Übersicht"
description: "Verwalten Sie Kunden in Fiskl, um die Rechnungsstellung, Angebote und Zahlungserfassung mit Multi-Währungs-Unterstützung und automatisierter Lastschrift zu optimieren."
keywords: ["clients", "client management", "invoicing", "accounts receivable", "direct debit", "GoCardless", "multi-currency", "time billing"]
sidebar_position: 1
---

Dieser Abschnitt erläutert, wie das Kundenmanagementsystem von Fiskl Ihnen hilft, Kontaktdaten zu speichern, die Rechnungserstellung zu optimieren und die Zahlungseinziehung zu automatisieren.

## Warum Kunden in Fiskl verwalten?

Die Verwaltung genauer Kundendaten gibt Ihnen eine einzige Informationsquelle für alle Ihre Einnahmeseitentransaktionen. Wenn Sie einen Kunden einmal erstellen, werden seine Daten automatisch in jede Rechnung, jedes Angebot und jede Zahlung übertragen, die Sie verarbeiten.

**Wichtige Vorteile:**

- Automatische Befüllung von Kundendetails auf Rechnungen und Angeboten
- Standardwährungseinstellungen für internationale Abrechnung
- Stundenhonorar-Konfiguration für zeitbasierte Abrechnung
- Automatisierte Zahlungseinziehung durch GoCardless Lastschrift
- Forderungsverfolgung und Rechnungsverlauf pro Kunde
- Umsatzberichte nach Kunde


## Kunde-Workflow

Der typische Kunde-Workflow verläuft von der Einrichtung über die Rechnungserstellung bis zur Zahlungseinziehung und Berichterstellung.

### 1. Kunde erstellen

Fügen Sie einen Kunden aus dem Bereich **Kunden** hinzu oder erstellen Sie ihn direkt während der Rechnungserstellung.

**Informationen, die Sie speichern können:**

- Kundenname und E-Mail-Adresse
- Rechnungs- und Lieferadressen
- Steuer-/Umsatzsteuer-ID
- Notizen zum Kunden oder zu Abrechnungsanforderungen
- Standardabrechnungswährung
- Standardstundensatz (für zeitbasierte Abrechnung)
- Cc- und Bcc-Adressen für die Rechnungslieferung


**Erstellungsmethoden:**

- Manuelle Eingabe im Bereich **Kunden**
- Inline-Erstellung während der Rechnung oder Angebotserstellung


### 2. Rechnungen und Angebote erstellen

Sobald ein Kunde vorhanden ist, werden seine Daten automatisch auf neuen Rechnungen und Angeboten eingetragen.

**Was wird automatisch übertragen:**

- Kundenname und E-Mail
- Rechnungsadresse (wie konfiguriert formatiert)
- Standardwährung
- Stundenhonorar (auf zeitbasierten Positionen)


**Weitere Informationen:** [Rechnungen erstellen](/invoicing/creating-invoices)

### 3. Lastschrifteinzug automatisieren

Automatisieren Sie die Zahlungseinziehung durch GoCardless Lastschrift. Weitere Zahlungsmethoden sind auf Rechnungsebene verfügbar — siehe [Zahlungsintegrationen](/integrations/payments/overview).

**So funktioniert es:**

1. Aktivieren Sie GoCardless auf einer Rechnung
2. Der Kunde erhält einen Link zur Genehmigung des Mandats
3. Der Kunde schließt die Genehmigung ab
4. Künftige Rechnungen werden automatisch am Fälligkeitsdatum eingezogen

### 4. Überprüfung und Berichterstellung

Verwenden Sie Kundendatensätze, um ausstehende Salden zu überwachen und Umsätze zu analysieren.

**Verfügbare Ansichten und Berichte:**

- Rechnungsverlauf pro Kunde
- Fälligkeitsbericht für Forderungen
- Kundenaufstellung — Download aus der Rechnungsliste innerhalb eines Kundendatensatzes oder aus **Berichte** im linken Menü

**Weitere Informationen:** [Finanzberichte](/reporting/overview)


## Kundenfunktionen im Detail

### Standardwährung

Legen Sie eine bevorzugte Abrechnungswährung für jeden Kundendatensatz fest. Fiskl wendet diese Währung automatisch an, wenn Sie eine Rechnung für diesen Kunden erstellen, und führt eine Wechselkurskonvertierung durch.

Dies ist besonders nützlich für internationale Kunden oder Unternehmen, die in mehreren Währungen abrechnen.

### Stundenhonorar für zeitbasierte Abrechnung

Legen Sie einen kundespezifischen Standard-Stundensatz fest, der den Standard-Satz überschreibt, der in **Einstellungen** > **Voreinstellungen** gespeichert ist. Wenn Sie Zeit für diesen Kunden erfassen, wendet Fiskl automatisch seinen Satz an und zieht abrechenbare Stunden in Rechnungen ein. Sie können den Satz bei Bedarf auch bei einzelnen Zeiteinträgen überschreiben.

**Weitere Informationen:** [Zeiterfassung](/time-and-mileage/time-tracking)

### Steuer-/Umsatzsteuer-ID

Speichern Sie die Steuer- oder Umsatzsteuer-Registrierungsnummer des Kunden in seinem Datensatz. Dies wird automatisch auf Rechnungen angezeigt, was für B2B-Rechnungen und Steuerkonformität in vielen Regionen wichtig ist.

### Notizen

Fügen Sie Freitextnoten zu einem Kundendatensatz hinzu — alles, das für die Geschäftsbeziehung relevant ist: Abrechnungspräferenzen, spezielle Anforderungen, Kontonummern oder interne Kontextinformationen. Notizen sind nur für Ihr Team sichtbar und werden nicht auf Rechnungen angezeigt.

### Rechnungsstatistiken

Jeder Kundendatensatz zeigt eine Zusammenfassung der Rechnungsaktivität. Dies umfasst Zahlungen, die gegen Rechnungen verbucht wurden (als bezahlt markiert), und den nicht abgestimmten Saldo aus Ihren Büchern — was Ihnen einen schnellen Überblick über das, was eingegangen ist und was noch ausstehend ist, gibt.

### Lastschriftmandate

Die GoCardless-Integration ermöglicht automatisierte Zahlungseinziehung für wiederkehrende oder regelmäßige Kunden.

**Mandate-Status:**

- **Erfolgreich** — Aktiv und bereit zur automatischen Einziehung
- **Ausstehend** — Der Kunde hat die Genehmigung noch nicht abgeschlossen
- **Widerrufen** — Der Kunde hat das Mandat gekündigt oder die Genehmigung ist fehlgeschlagen


Überwachen Sie die Mandate-Status direkt aus der Kundenliste.


## Kundenlisten-Verwaltung

### Suche und Filterung

Im Bereich **Kunden** können Sie:

- Nach Name oder Kontaktdetails suchen
- Nach Status filtern (aktiv oder archiviert)
- Nach Datum des Kundenhinzufügung oder letzten Aktualisierung filtern
- Schnellaktionen aus dem Drei-Punkt-Menü neben jedem Kunden aufrufen
- Einen Kunden auswählen, um seine Rechnungsliste anzuzeigen und eine Kundenaufstellung herunterzuladen (auch verfügbar unter **Berichte** im linken Menü)


### Kunden archivieren

Das Archivieren entfernt einen Kunden aus Ihrer aktiven Liste, ohne seinen Verlauf zu löschen. Archivierte Kunden und alle zugehörigen Transaktionen bleiben in Berichten sichtbar.

Um einen Kunden zu archivieren, wählen Sie das Drei-Punkt-Menü neben seinem Namen und klicken auf **Archivieren**.


## Häufige Anwendungsfälle

### Freiberufler oder Berater

**Typischer Workflow:**

- 5–10 aktive Kunden
- Projekt- und Stundenabrechnung
- Unterschiedliche Stundensätze pro Kunde
- Angebote für neue Projektumfänge
- Internationale Kunden in mehreren Währungen


**Verwendete Schlüsselfunktionen:**

- Standard-Stundensatz pro Kunde
- Mehrwährungs-Rechnungserstellung
- Angebot-zu-Rechnung-Konvertierung


### Inhaber eines kleinen Unternehmens

**Typischer Workflow:**

- 20–50 aktive Kunden
- Wiederkehrende monatliche Rechnungserstellung
- Lastschrift für regelmäßige Kunden
- Mischung aus einmaligen und Retainer-Abrechnungen


**Verwendete Schlüsselfunktionen:**

- GoCardless-Mandate für automatisierte Einziehung
- Standardwährung pro Kunde
- Kundenaufstellung-Download aus der Rechnungsliste
- Fälligkeitsbericht für Forderungen


### Agentur oder Dienstleistungsunternehmen

**Typischer Workflow:**

- 50+ Kunden in einem Team
- Retainer- und Projektabrechnung
- Team-Zeit pro Kunde erfasst
- Kundespezifische Abrechnungssätze


**Verwendete Schlüsselfunktionen:**

- Pro-Kunde-Stundensätze
- Team-Zeiterfassung mit Kundenbindung
- Umsatzberichte nach Kunde


## Best Practices

### Kunden einrichten

- Konfigurieren Sie komplette Kundendetails, bevor Sie die erste Rechnung erstellen
- Legen Sie genaue Standardwährungen für internationale Kunden fest
- Legen Sie kundespezifische Standard-Stundensätze fest, um den globalen Satz in den Einstellungen zu überschreiben
- Speichern Sie Steuer-/Umsatzsteuer-IDs für alle B2B-Kunden
- Aktivieren Sie die Lastschrift frühzeitig für wiederkehrende Kunden
- Verwenden Sie konsistente Adressformatierung über alle Datensätze hinweg


### Kundendatensätze verwalten

- Aktualisieren Sie Kontaktinformationen umgehend bei Änderungsmitteilung
- Archivieren Sie inaktive Kunden, anstatt sie in der aktiven Liste zu belassen
- Überprüfen Sie Stundensätze regelmäßig, um sie aktuell zu halten
- Überwachen Sie die Mandate-Status monatlich für aktive GoCardless-Kunden
- Entfernen Sie doppelte Einträge, wenn gefunden


### Organisation bewahren

- Verwenden Sie klare, konsistente Namenskonventionen
- Fügen Sie Notizen zu Kundendatensätzen für Abrechnungsanforderungen oder Voreinstellungen hinzu
- Überprüfen Sie die Kundenliste vierteljährlich
- Laden Sie Kundenaufstellungen aus der Rechnungsliste zur Abstimmung herunter


## Erste Schritte mit Kunden

Fügen Sie Ihre ersten Kunden über **Kunden** in der linken Seitenleiste hinzu. Geben Sie ihre Details ein, legen Sie eine Standardwährung und ggf. einen Stundensatz fest, und fügen Sie eine Steuer-/Umsatzsteuer-ID für B2B-Kunden hinzu. Nach dem Speichern erstellen Sie eine Test-Rechnung, um zu überprüfen, ob die Details korrekt übertragen wurden.

Um die automatisierte Zahlungseinziehung einzurichten, verbinden Sie GoCardless unter **Integrationen** > **Zahlungen**, und aktivieren Sie dann die Lastschrift auf Rechnungen für wiederkehrende Kunden.

Fügen Sie danach neue Kunden hinzu, wenn Sie sie gewinnen, halten Sie Kontaktdetails aktuell, und archivieren Sie inaktive Kunden vierteljährlich, um Ihre Liste sauber zu halten.


## Benötigen Sie weitere Hilfe?

**Kunden einrichten und verwalten:** [Kunden verwalten](/clients-vendors/clients)

**Rechnungen erstellen:** [Rechnungen erstellen](/invoicing/creating-invoices)

**Zahlungsautomation einrichten:** [Zahlungsintegrationen](/integrations/payments/overview)

**Abrechenbare Zeit erfassen:** [Zeiterfassung](/time-and-mileage/time-tracking)

**Finanzberichte anzeigen:** [Finanzberichte](/reporting/overview)

---

## Verfügbare Leitfäden

[📄️ Kunden verwalten — Erfahren Sie, wie Sie Kunden in Fiskl hinzufügen und verwalten, um eine optimierte Rechnungserstellung, Angebote und Zahlungsverarbeitung zu erreichen.](/clients-vendors/clients)
