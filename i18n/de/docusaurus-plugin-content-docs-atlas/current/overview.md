---
title: "Atlas-Übersicht"
slug: /
description: "Verwalten Sie Ihre Buchhaltungspraxis mit Atlas – organisieren Sie Teams, Kunden und Abrechnung über mehrere Niederlassungen von einem Ort aus."
keywords: ["atlas", "accountant portal", "accounting practice management", "multi-branch", "client management", "team permissions", "billing models"]
sidebar_position: 1
tags:
  - Atlas
  - Getting Started
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Atlas ist Ihr zentraler Arbeitsbereich für die Verwaltung Ihrer Buchhaltungspraxis in Fiskl. Dieses Accountant-Portal bringt Teammanagement, Kundenüberwachung und Abrechnung auf einer einzigen Plattform zusammen, die für Kanzleien jeder Größe entwickelt wurde.


## Warum Atlas verwenden

Egal, ob Sie eine Einzelpraxis oder eine Multi-Office-Kanzlei betreiben – Atlas bietet Ihnen die Struktur und Kontrolle, um effizient zu skalieren. Sie verwalten alles von einem Ort aus – Ihr Team, Ihre Kunden und Ihre Abrechnung – während jede Niederlassung unabhängig bleibt.

**Wichtige Vorteile:**

- Organisieren Sie Ihre Kanzlei in Niederlassungen nach Standort, Währung oder Geschäftsbereich
- Kontrollieren Sie den Teamzugriff mit granularen, auf Niederlassungsebene basierenden Berechtigungen
- Wählen Sie zwischen firmenbezahlter oder kundenbezahlter Abrechnung für jeden Kunden
- Überwachen Sie Ihre Praxis über Dashboards auf Niederlassungs- und Organisationsebene
- Verdienen Sie Provisionseinnahmen durch das Fiskl-Partnerprogramm
- Kostenlos für Buchhalter

## Wie Atlas strukturiert ist

Atlas verwendet eine zweistufige Hierarchie: eine übergeordnete Organisation an der Spitze mit einer oder mehreren Niederlassungen darunter.

### Übergeordnete Organisation

Wenn Sie sich anmelden, werden Sie Super Admin Ihrer übergeordneten Organisation. Die übergeordnete Organisation bietet zentrale Überwachung aller Niederlassungen, Benutzer und Abrechnungen. Sie verwaltet Kunden nicht direkt – das geschieht auf Niederlassungsebene.

### Niederlassungen

Jede Niederlassung stellt einen Standort, ein Büro oder eine Geschäftseinheit innerhalb Ihrer Kanzlei dar. Niederlassungen sind der Ort, an dem die tägliche Arbeit stattfindet: Verwaltung von Buchhaltern, Kundenintegration und Abrechnung.

Jede Niederlassung arbeitet in einer einzigen Abrechnungswährung. Sie legen diese Währung beim Erstellen der Niederlassung fest. Wenn Ihre Kanzlei in mehreren Währungen arbeitet, erstellen Sie für jede eine Niederlassung. Beispielsweise kann ein New York-Büro mit USD-Abrechnung neben einer zweiten Niederlassung mit EUR-Abrechnung für europäische Kunden bestehen.

:::info
Kundenkonten können unabhängig von der Abrechnungswährung der Niederlassung jede Währung verwenden. Eine USD-Niederlassung kann Kunden verwalten, die in EUR, GBP oder jeder anderen Währung tätig sind.
:::

## Teammanagement

Sie verwalten Ihr Team auf zwei Ebenen: organisationsweite Rollen und Berechtigungen auf Niederlassungsebene.

### Organisationsrollen

Organisationsrollen gelten für alle Niederlassungen:

- **Super Admin** — Vollständiger Zugriff auf alle Niederlassungen, Benutzer und Abrechnungseinstellungen
- **Billing Admin** — Alle Rechnungen, Gebühren und bevorstehende Gebühren über Niederlassungen hinweg anzeigen
- **Viewer** — Schreibgeschützter Zugriff auf alle Niederlassungen und Kundendaten

### Niederlassungsrollen

Sie weisen Buchhalter bestimmten Niederlassungen mit einer Berechtigungsstufe für jede zu. Derselbe Buchhalter kann in verschiedenen Niederlassungen unterschiedliche Rollen haben. Beispielsweise könnte Sarah Owner-Berechtigungen für die Amsterdam-Niederlassung haben, aber nur Member-Zugriff auf die Paris-Niederlassung.

- **Owner** — Vollständige Kontrolle über die Niederlassung einschließlich Abrechnung und Teammanagement
- **Admin** — Verwalten Sie Kunden und Teammitglieder mit begrenztem Abrechnungszugriff
- **Member** — Arbeiten Sie mit zugewiesenen Kunden, können aber Team oder Abrechnung nicht verwalten

Sie können Berechtigungen für einzelne Benutzer weiter anpassen. Entfernen Sie spezifische Berechtigungen – wie Abrechnungszugriff – von jeder Rolle bei Bedarf.

## Kundenverwaltung

Sie fügen Kunden zu einer Niederlassung mit einer von drei Methoden hinzu. Jede Methode bestimmt, wer das Konto besitzt und wer die Abrechnung verwaltet.

### Bill Us — Ihre Kanzlei zahlt

Ihre Kanzlei erstellt und besitzt das Kundenkonto. Sie kontrollieren die Abrechnung, und Abonnementkosten erscheinen auf der monatlichen Rechnung Ihrer Niederlassung.

1. Fügen Sie eine Zahlungsmethode über Stripe hinzu (muss der Abrechnungswährung der Niederlassung entsprechen)
2. Erstellen Sie das Kundenkonto aus Ihrem Portal
3. Laden Sie den Geschäftsinhaber ein, auf sein Konto zuzugreifen

Der Kunde kann die Accountant-Beziehung nicht trennen. Dieses Modell funktioniert gut für vollständig verwaltete Servicevereinbarungen.

### Client Pays — Accountant lädt Kunden ein

Sie senden einen Einladungslink an Ihren Kunden. Der Kunde meldet sich an, erstellt sein eigenes Konto und fügt seine eigene Zahlungsmethode hinzu. Sie erhalten dann eine Einladung, auf sein Konto zuzugreifen.

Der Kunde besitzt das Konto und verwaltet sein eigenes Abonnement. Jede Partei kann die Beziehung jederzeit trennen. Dieses Modell eignet sich für Beratungsbeziehungen und Buchhaltungsdienste.

### Client Pays — Kunde lädt Accountant ein

Ihr Kunde meldet sich unabhängig bei Fiskl an und lädt Sie ein, sein Buchhalter zu sein. Dies funktioniert genauso wie der von Accountant eingeleitete Ablauf – der Kunde besitzt das Konto und jede Partei kann trennen.

:::tip
Sie können Abrechnungsmodelle innerhalb derselben Niederlassung kombinieren. Führen Sie einige Kunden auf Bill Us und andere auf Client Pays basierend auf jeder Beziehung aus.
:::

## Dashboards

Atlas bietet zwei Sichtebenen in Ihre Praxis:

- **Branch-Dashboard** — Zeigt Kunden, Teamaktivität und Abrechnung für eine einzelne Niederlassung
- **Organisations-Dashboard** — Verfügbar für Benutzer mit Zugriff auf Organisationsebene, zeigt eine Zusammenfassung über alle Niederlassungen

## Partner-Referralprogramm

Das Fiskl-Partnerprogramm ermöglicht es Ihnen, durch Empfehlungen neuer Benutzer Provisionen zu verdienen. Das Programm gilt nur für Client Pays-Konten.

Sie melden sich über Atlas an und erhalten benutzerdefinierte Referral-Links zur Verfolgung. Wenn sich ein empfohlener Kunde anmeldet, verdienen Sie Provisionen. Das Referral-Dashboard zeigt Zahlungsdetails, Provisionsbeträge und Konversionsstatus.

Sie können das Referralprogramm auf Organisationsebene oder auf Niederlassungsebene verwalten. Fiskl stellt E-Mail-Vorlagen mit Ihrem Referral-Link bereit, Sie versenden alle Kommunikationen jedoch von Ihrer eigenen E-Mail aus, um Ihre Marke zu wahren.

## Abrechnung und Zahlungen

Fiskl erstellt pro Niederlassung monatlich eine Rechnung für alle Bill Us-Kunden dieser Niederlassung. Das Hinzufügen oder Aktualisieren von Benutzern erfolgt automatisch auf Basis des Abrechnungszyklus. Fiskl verwendet Stripe für Zahlungsverarbeitung und Rechnungsverwaltung.

Um Ihre Zahlungsmethode oder Rechnungsadresse zu aktualisieren, gehen Sie zum Abrechnungsbereich in Atlas. Fiskl leitet Sie zur sicheren gehosteten Seite von Stripe weiter, wo Sie Ihre Details aktualisieren können. Änderungen werden automatisch auf zukünftige Rechnungen angewendet.

Kunden im Client Pays-Modell verwalten ihre eigene Abrechnung direkt mit Fiskl. Sie haben keine Zahlungsverpflichtung für diese Konten.

## Support

Atlas umfasst Live-Chat-Support und Zugriff auf die vollständige Fiskl-Hilfedokumentation. Atlas ist kostenlos für Buchhalter, die aktiv auf der Plattform arbeiten.

## Erste Schritte

So beginnen Sie mit Atlas:

1. Melden Sie sich an und werden Sie Super Admin Ihrer Organisation
2. Erstellen Sie Ihre erste Niederlassung und legen Sie deren Abrechnungswährung fest
3. Fügen Sie eine Zahlungsmethode hinzu, wenn Sie das Bill Us-Modell verwenden möchten
4. Laden Sie Buchhalter zur Niederlassung mit entsprechenden Berechtigungen ein
5. Fügen Sie Ihre ersten Kunden mit Ihrer bevorzugten Abrechnungsmethode hinzu

## Verfügbare Anleitungen

Demnächst verfügbar.

## Verwandte Themen

- [Einrichten Ihrer Praxis](./getting-started/setting-up-your-practice.md) — Schritt-für-Schritt-Anleitung zum Konfigurieren Ihrer Organisation und ersten Niederlassung
- [Konfigurieren von Niederlassungen](./getting-started/configuring-branches.md) — Erstellen und verwalten Sie Niederlassungen für verschiedene Standorte oder Währungen
- [Teamstruktur](./getting-started/team-structure.md) — Verstehen Sie Rollen auf Organisations- und Niederlassungsebene
- [Übersicht über Abrechnungsmodelle](./billing-models/overview.md) — Vergleichen Sie Bill Us- und Client Pays-Modelle im Detail
- [Rollen und Berechtigungen](./team-collaboration/roles-permissions.md) — Detaillierte Aufschlüsselung der Berechtigungsstufen
- [Partnerprogramm](./partner-program/overview.md) — Melden Sie sich beim Referralprogramm an und verfolgen Sie Ihre Einnahmen
