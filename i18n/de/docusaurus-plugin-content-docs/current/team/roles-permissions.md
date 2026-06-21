---
title: "Benutzerrollen und Berechtigungen"
description: "Verstehen Sie die fünf Benutzerrollen in Fiskl und welche Berechtigungen jede Rolle für eine effektive Teamzusammenarbeit gewährt."
keywords: ["user roles", "permissions", "access control", "owner", "admin", "billing user", "accountant"]
sidebar_position: 2
---

# Benutzerrollen und Berechtigungen

Diese Anleitung erläutert die fünf Benutzerrollen in Fiskl und die spezifischen Berechtigungen, die jede Rolle vergibt. Sie hilft Ihnen, angemessene Zugriffsebenen für Ihre Teammitglieder zuzuweisen.

## Rollenbasierte Zugriffskontrolle verstehen

Fiskl verwendet rollenbasierte Zugriffskontrolle, um zu verwalten, was Teammitglieder sehen und tun können. Jede Rolle gewährt eine bestimmte Reihe von Berechtigungen, die für häufige Geschäftsfunktionen konzipiert wurden.

**Warum Rollen wichtig sind:**
- Schützen Sie vertrauliche Finanzinformationen
- Verhindern Sie versehentliche Änderungen an Buchhaltungsunterlagen
- Ermöglichen Sie Delegation ohne Sicherheitsgefährdung
- Erfüllen Sie Compliance-Anforderungen für Zugriffskontrolle
- Vereinfachen Sie die Berechtigungsverwaltung

## Die fünf Rollen

### Inhaber

Der Inhaber ist der Kontogründer und hat vollständige Kontrolle über das Fiskl-Konto.

**Vollständige Berechtigungen:**
- Alle Features und Datenzugriff
- Abonnements und Abrechnung verwalten
- Alle Benutzer einladen, ändern und entfernen
- Zugriff auf alle Finanzunterlagen und Berichte
- Unternehmenseinstellungen ändern
- Banken verbinden und trennen
- Integrationen verwalten
- Alle Daten exportieren

**Einzigartige Funktionen:**
- Einzige Rolle, die das gesamte Konto löschen kann
- Einzige Rolle, die Abonnementpläne ändern kann
- Einzige Rolle, die Zahlungsmethoden aktualisieren kann
- Kann die Inhaberschaft auf einen anderen Benutzer übertragen

**Einschränkungen:**
- Nur ein Inhaber pro Konto
- Kann nicht deaktiviert werden (nur übertragen)

**Häufiger Anwendungsfall:**
Der Geschäftsgründer oder Hauptentscheidungsträger, der Abonnements und die gesamte Finanzstrategie verwaltet.

### Admin

Admins haben fast den gleichen Zugriff wie Inhaber, können aber Abonnements oder Abrechnung nicht verwalten.

**Vollständige Berechtigungen:**
- Alle Features außer Abonnement/Abrechnung
- Alle Benutzer einladen und verwalten (außer Änderungen am Inhaber)
- Zugriff auf alle Finanzunterlagen und Berichte
- Unternehmenseinstellungen ändern
- Banken verbinden und trennen
- Integrationen verwalten
- Alle Daten exportieren
- Alle Transaktionstypen erstellen und verwalten

**Kann nicht auf folgende zugreifen:**
- Abonnementpläne und Änderungen
- Zahlungsmethodenverwaltung
- Abrechnungsverlauf
- Kontolöschung

**Einschränkungen:**
- Kann die Rolle oder den Status des Inhabers nicht ändern
- Kann die Inhaberschaft nicht übertragen

**Häufiger Anwendungsfall:**
Büroleiter, Finanzcontroller oder Betriebsleiter, der den täglichen Finanzbetrieb verwaltet.

### Abrechnungsbenutzer

Abrechnungsbenutzer konzentrieren sich auf kundenorientierte Aktivitäten wie Rechnungsstellung und Ausgabeneinreichung.

**Kann auf folgende zugreifen:**
- Rechnungen erstellen, bearbeiten und versenden
- Angebote erstellen und verwalten
- Kunden hinzufügen und bearbeiten
- Ausgaben erstellen (nur eigene)
- Zeiteinträge protokollieren (nur eigene)
- Kilometerstand hinzufügen (nur eigener)
- Rechnungen und Angebote anzeigen
- Eigene eingereichte Ausgaben, Zeit und Kilometerstand anzeigen

**Kann nicht auf folgende zugreifen:**
- Buchhaltungsfunktionen (Kontenrahmen, Journale)
- Finanzberichte
- Banking und Transaktionen
- Ausgaben, Zeit oder Kilometerstand anderer Benutzer
- Unternehmenseinstellungen
- Benutzerverwaltung
- Abonnement- oder Abrechnungsinformationen

**Einschränkungen:**
- Kann keine Finanzmetriken des Dashboards sehen
- Kann Transaktionen nicht kategorisieren
- Kann Bankkonten nicht abstimmen
- Kann Einreichungen anderer Benutzer nicht anzeigen oder ändern

**Häufiger Anwendungsfall:**
Verkaufsteammitglieder, Projektmanager oder Kundenservicevertreter, die Rechnungen erstellen und ihre eigenen Ausgaben einreichen.

### Benutzer

Benutzer haben den eingeschränktesten Zugriff, begrenzt auf das Einreichen ihrer eigenen Ausgaben, Zeit und Kilometerstand.

**Kann auf folgende zugreifen:**
- Ausgaben erstellen (nur eigene)
- Zeiteinträge protokollieren (nur eigene)
- Kilometerstand hinzufügen (nur eigener)
- Eigene eingereichten Elemente anzeigen
- Eigene Elemente bearbeiten (falls noch nicht genehmigt)

**Kann nicht auf folgende zugreifen:**
- Rechnungsfunktionen
- Kundenverwaltung
- Finanzberichte
- Buchhaltungsfunktionen
- Banking und Transaktionen
- Einreichungen anderer Benutzer
- Unternehmenseinstellungen
- Benutzerverwaltung

**Einschränkungen:**
- Kann keine Rechnungen erstellen
- Kann Dashboard nicht anzeigen
- Kann keine Finanzmetriken sehen
- Kann auf keine Berichte zugreifen

**Häufiger Anwendungsfall:**
Außendienstmitarbeiter, Auftragnehmer oder Remote-Mitarbeiter, die Ausgaben einreichen und Zeit erfassen müssen, aber keinen Zugriff auf Rechnungsstellung oder Finanzdaten benötigen.

### Buchhalter

Buchhalter haben schreibgeschützten Zugriff auf alle Finanzunterlagen, perfekt für externe Buchhaltungsfachleute.

**Kann auf folgende zugreifen:**
- Kontenrahmen anzeigen
- Alle Transaktionen anzeigen
- Alle Berichte anzeigen und exportieren
- Rechnungen, Ausgaben und Zahlungen anzeigen
- Bankverbindungen und Transaktionen anzeigen
- Kunden- und Lieferantenlisten anzeigen

**Kann generieren und exportieren:**
- Gewinn- und Verlustrechnungen
- Bilanzen
- Kapitalflussrechnungsberichte
- Transaktionsberichte
- Steuerberichte
- Benutzerdefinierte Berichte

**Kann nicht:**
- Irgendwelche Datensätze erstellen oder bearbeiten
- Transaktionen löschen
- Kontenrahmen ändern
- Unternehmenseinstellungen ändern
- Benutzer einladen oder verwalten
- Auf Abonnement- oder Abrechnungsinformationen zugreifen

**Einschränkungen:**
- Streng schreibgeschützter Zugriff
- Kann keine Transaktionen initiieren
- Kann bestehende Datensätze nicht ändern

**Häufiger Anwendungsfall:**
Externer Buchhalter oder Bürohilfe, der Unterlagen überprüft, Steuererklärungen erstellt oder Finanzberatung anbietet.

:::info
Buchhalter sind in allen Fiskl-Plänen ohne zusätzliche Kosten enthalten. Sie können Ihren Buchhaltungsfachmann einladen, ohne sich über zusätzliche Gebühren Gedanken zu machen.
:::

## Berechtigungsvergleichstabelle

| Feature | Inhaber | Admin | Abrechnungsbenutzer |
|---------|---------|-------|---------------------|
| **Rechnungsstellung** | | | |
| Rechnungen erstellen/bearbeiten | ✓ | ✓ | ✓ |
| Rechnungen versenden | ✓ | ✓ | ✓ |
| Rechnungen anzeigen | ✓ | ✓ | ✓ |
| **Ausgaben & Zeit** | | | |
| Eigene Ausgaben erstellen | ✓ | ✓ | ✓ |
| Eigene Ausgaben anzeigen | ✓ | ✓ | ✓ |
| Alle Ausgaben anzeigen | ✓ | ✓ | ✗ |
| Eigene Zeit protokollieren | ✓ | ✓ | ✓ |
| Alle Zeit anzeigen | ✓ | ✓ | ✗ |
| **Kunden & Lieferanten** | | | |
| Kunden verwalten | ✓ | ✓ | ✓ |
| Kunden anzeigen | ✓ | ✓ | ✓ |
| Lieferanten verwalten | ✓ | ✓ | ✗ |
| Lieferanten anzeigen | ✓ | ✓ | ✗ |
| **Buchhaltung** | | | |
| Kontenrahmen | ✓ | ✓ | ✗ |
| Buchungssätze | ✓ | ✓ | ✗ |
| Transaktionen anzeigen | ✓ | ✓ | ✗ |
| Transaktionen kategorisieren | ✓ | ✓ | ✗ |
| **Banking** | | | |
| Banken verbinden | ✓ | ✓ | ✗ |
| Banking anzeigen | ✓ | ✓ | ✗ |
| Konten abstimmen | ✓ | ✓ | ✗ |
| **Berichte** | | | |
| Alle Berichte anzeigen | ✓ | ✓ | ✗ |
| Berichte exportieren | ✓ | ✓ | ✗ |
| Dashboard-Metriken | ✓ | ✓ | ✗ |
| **Einstellungen** | | | |
| Unternehmenseinstellungen | ✓ | ✓ | ✗ |
| Benutzerverwaltung | ✓ | ✓ | ✗ |
| Abonnement/Abrechnung | ✓ | ✗ | ✗ |
| Konto löschen | ✓ | ✗ | ✗ |

## Auswahl der richtigen Rolle

Verwenden Sie diesen Entscheidungsbaum, um geeignete Rollen auszuwählen:

**Muss diese Person Abonnements oder Abrechnung verwalten?**
- Ja → **Inhaber** (nur einer erlaubt)
- Nein → Weiter

**Muss diese Person vollständigen Zugriff auf alle Finanzdaten haben?**
- Ja, und sie müssen Datensätze ändern können → **Admin**
- Ja, aber schreibgeschützter Zugriff ist ausreichend → **Buchhalter**
- Nein → Weiter

**Muss diese Person Rechnungen erstellen?**
- Ja → **Abrechnungsbenutzer**
- Nein → Weiter

**Muss diese Person nur Ausgaben und Zeit einreichen?**
- Ja → **Benutzer**

## Besondere Überlegungen

### Mehrere Admins

Sie können mehrere Admins haben. Dies ist hilfreich für:
- Redundanz, falls der primäre Admin nicht verfügbar ist
- Große Teams mit mehreren Managern
- Aufgabentrennung unter Beibehaltung vollständigen Zugriffs

**Best Practice:** Begrenzen Sie Admins auf diejenigen, die vollständigen Zugriff wirklich benötigen. Mehr Admins bedeutet, dass mehr Personen Zugriff auf vertrauliche Daten haben.

### Externe Buchhalter

Verwenden Sie immer die Rolle **Buchhalter** für externe Buchhaltungsfachleute:
- Sie erhalten alle Daten, die sie für Berichte und Steuererklärungen benötigen
- Sie können Ihre Datensätze nicht versehentlich ändern
- Sie zahlen keine zusätzlichen Gebühren für Buchhalterbenutzer
- Sie können unabhängig ohne Ihre Beaufsichtigung arbeiten

### Rollenübergang

Wenn Teammitglieder in der Verantwortung wachsen, upgraden Sie ihre Rollen:
- Benutzer → Abrechnungsbenutzer: Wenn sie anfangen, Kundenrechnungen zu verwalten
- Abrechnungsbenutzer → Admin: Wenn sie Finanzmanagement-Aufgaben übernehmen

**So ändern Sie Rollen:** Siehe [Benutzer einladen und verwalten](./inviting-users)

## Häufige Szenarien zur Rollenzuweisung

### Kleines Unternehmen (1-5 Personen)
- **Inhaber**: Geschäftseigentümer
- **Admin**: Büroleiter oder Ehepartner, der Finanzen verwaltet
- **Abrechnungsbenutzer**: Verkaufsperson oder Assistent, der Kunden in Rechnung stellt
- **Buchhalter**: Externer CPA oder Bürohilfe

### Wachsendes Unternehmen (6-20 Personen)
- **Inhaber**: Gründer oder CEO
- **Admin**: CFO oder Controller, Büroleiter
- **Abrechnungsbenutzer**: Kontenmanager, Projektmanager
- **Benutzer**: Außendiensttechniker, Auftragnehmer
- **Buchhalter**: Externer Buchhalter für Steuererstellung

### Agentur oder Dienstleistungsunternehmen
- **Inhaber**: Führender Partner
- **Admin**: Betriebsleiter, Finanzmanager
- **Abrechnungsbenutzer**: Projektleiter, die Kunden in Rechnung stellen
- **Benutzer**: Alle anderen Teammitglieder, die Zeit protokollieren
- **Buchhalter**: Externer Buchhalter für Steuererstellung

## Sicherheits-Best-Practices

**Folgen Sie dem Prinzip der geringsten Berechtigung:**
Weisen Sie die minimale Rolle zu, die für die Jobrollen jeder Person erforderlich ist. Sie können später immer upgraden.

**Überprüfen Sie die Rollen vierteljährlich:**
Da sich Verantwortungen ändern, sollten sich auch die Rollen ändern. Überprüfen Sie alle paar Monate.

**Verwenden Sie die Rolle „Buchhalter" für externe Fachleute:**
Geben Sie externen Buchhaltern niemals Admin- oder Inhaberzugriff. Die Rolle „Buchhalter" bietet alles, was sie benötigen.

**Begrenzen Sie Inhaber- und Admin-Rollen:**
Beschränken Sie diese Rollen auf maximal 1-3 vertrauenswürdige Personen.

**Deaktivieren Sie sofort:**
Wenn jemand Ihre Organisation verlässt, deaktivieren Sie sein Konto am selben Tag.

**Teilen Sie sich nicht an:**
Jede Person sollte ein eigenes Konto haben. Gemeinsame Anmeldungen machen es unmöglich, zu verfolgen, wer was getan hat.

---

## Verwandte Themen

- [Benutzer einladen und verwalten](./inviting-users) - Fügen Sie Teammitglieder hinzu und verwalten Sie deren Zugriff
- [Überblick über Teammitglieder](./overview) - Verstehen Sie die Grundlagen der Teamverwaltung
- [Benutzereinstellungen](/settings/profile-settings) - Verwalten Sie persönliche Kontoeinstellungen
