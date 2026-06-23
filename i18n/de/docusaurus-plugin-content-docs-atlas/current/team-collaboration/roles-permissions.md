---
title: "Rollen und Berechtigungen"
description: "Verstehen Sie Filial-Rollen, übergeordnete Rollen und die acht Berechtigungskategorien, die steuern, was Teammitglieder in Atlas tun können."
keywords: ["roles", "permissions", "branch roles", "parent roles", "Owner", "Admin", "Member", "Super Admin", "atlas", "permission categories"]
sidebar_position: 3
tags:
  - Atlas
  - Team
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erklärt, wie Rollen und Berechtigungen in Atlas funktionieren, einschließlich der drei Branch-Rollen, drei übergeordneten Rollen und acht Berechtigungskategorien, die Sie für jedes Teammitglied anpassen können.


## Wie Rollen und Berechtigungen funktionieren

Jedes Teammitglied in Atlas erhält eine Rolle in jedem Branch, dem es angehört. Rollen sind Berechtigungsgruppen – jede Rolle verfügt über einen vordefinierten Berechtigungssatz. Sie können dann einzelne Berechtigungen für jedes Teammitglied außer Kraft setzen, um bestimmte Funktionen hinzuzufügen oder zu entfernen.

Das bedeutet, dass Rollen einen sinnvollen Ausgangspunkt bieten, während Berechtigungsüberschreibungen bei Bedarf eine präzise Kontrolle ermöglichen.

## Branch-Rollen

Branch-Rollen kontrollieren, was ein Teammitglied innerhalb eines bestimmten Branches tun kann. Jedes Teammitglied kann auf jedem Branch, dem es zugewiesen ist, eine andere Rolle haben.

### Owner

Vollständige Kontrolle über den Branch. Owners können Abrechnung, Teammitglieder, Kunden und alle Branch-Einstellungen verwalten. Dies ist die höchste Role auf Branch-Ebene.

### Admin

Verwalten Sie Kunden und Teammitglieder mit eingeschränktem Abrechnungszugriff. Admins handhaben den täglichen Betrieb, haben aber möglicherweise je nach Berechtigungskonfiguration keinen Zugriff auf Zahlungsmethoden und Abonnementverwaltung.

### Member

Arbeiten Sie mit zugewiesenen Kunden, können aber keine Teammitglieder oder Abrechnung verwalten. Members haben die am meisten eingeschränkten Standardberechtigungen und konzentrieren sich normalerweise auf Kundenarbeit.

## Übergeordnete Rollen

Übergeordnete Rollen bieten organisationsweiten Zugriff auf alle Branches. Ein Teammitglied kann zusätzlich zu seinen Branch-Rollen eine übergeordnete Rolle haben oder keine übergeordnete Rolle.

### Super Admin

Vollständiger Zugriff auf alles in Atlas – alle Branches, alle Benutzer, alle Abrechnungen und alle Einstellungen. Super Admin setzt alle Berechtigungen auf Branch-Ebene außer Kraft.

### Billing Admin

Zeigen Sie alle Rechnungen, Gebühren und anstehenden Gebühren über jeden Branch hinweg an. Billing Admins haben Lesezugriff auf Abrechnungsinformationen organisationsweit, haben aber außerhalb ihrer zugewiesenen Branches keine Verwaltungsfunktionen.

### Viewer

Schreibgeschützter Zugriff auf alle Branches und Kundendaten in der gesamten Organisation. Viewers können alles sehen, können aber keine Änderungen vornehmen.

### Keine übergeordnete Rolle

Ein Teammitglied ohne übergeordnete Rolle hat nur Zugriff auf die Branches, denen es explizit zugewiesen ist, mit den durch seine Branch-Rolle und alle Außerkraftsetzungen definierten Berechtigungen.

## Berechtigungskategorien

Atlas organisiert Berechtigungen in acht Kategorien. Diese Kategorien werden als Registerkarten angezeigt, wenn Sie die Berechtigungen eines Teammitglieds in einem Branch anpassen.

### Organisation

Kontrolliert den Zugriff auf Einstellungen auf Branch-Ebene.

- **Organisation anzeigen** — Branch-Details und Einstellungen anzeigen
- **Branch aktualisieren** — Branch-Namen und Einstellungen ändern
- **Branch löschen** — Branch dauerhaft löschen

### Abrechnung

Kontrolliert den Zugriff auf Finanzinformationen und Zahlungsverwaltung.

- **Abrechnung anzeigen** — Rechnungen und Abrechnungsverlauf anzeigen
- **Abrechnung verwalten** — Zahlungsmethoden und Abonnements aktualisieren

### Team

Kontrolliert die Möglichkeit, andere Teammitglieder zu verwalten.

- **Teammitglieder anzeigen** — Liste der Buchhalter anzeigen
- **Teammitglieder einladen** — Einladungen an neue Buchhalter senden
- **Teammitglieder entfernen** — Buchhalter aus dem Branch entfernen
- **Rollen ändern** — Buchhalterrollen im Branch ändern
- **Zu Branches hinzufügen** — Buchhalter zu anderen Branches hinzufügen
- **Teamberechtigungen anzeigen** — Berechtigungsüberschreibungen für Teammitglieder anzeigen
- **Teamberechtigungen verwalten** — Einzelne Berechtigungen für Teammitglieder gewähren oder widerrufen

### Übergeordnete Rollen

Kontrolliert die Möglichkeit, organisationsweite Rollen zu verwalten.

- **Übergeordnete Rollen anzeigen** — Anzeigen, welche übergeordneten Rollen zugewiesen sind
- **Übergeordnete Rollen gewähren** — Übergeordnete Rollen Teammitgliedern zuweisen
- **Übergeordnete Rollen aktualisieren** — Vorhandene Zuweisungen übergeordneter Rollen ändern
- **Übergeordnete Rollen widerrufen** — Übergeordnete Rollen von Teammitgliedern entfernen
- **Parent Admin** — Vollständige Verwaltungskontrolle über Zuweisungen übergeordneter Rollen

### Kunden

Kontrolliert den Zugriff auf Kundenkonten und Datensätze.

- **Alle Kunden anzeigen** — Zugriff auf alle Kundenkonten im Branch
- **Zugewiesene Kunden anzeigen** — Zugriff nur auf Kunden, denen das Teammitglied zugewiesen ist
- **Kunden erstellen** — Neue Kundenkonten hinzufügen
- **Kunden löschen** — Kundenkonten entfernen
- **Kunden aktualisieren** — Kundendetails bearbeiten
- **Kunden synchronisieren** — Kontosynchronisierung auslösen
- **Kundennotizen anzeigen** — Notizen in Kundendatensätzen lesen
- **Kundennotizen aktualisieren** — Kundennotizen hinzufügen oder bearbeiten

### Zugriffskontrolle

Kontrolliert die Möglichkeit, Buchhalter-zu-Kunden-Zuweisungen zu verwalten.

- **Kundenzugriff gewähren** — Buchhalter einem Kunden zuweisen
- **Kundenzugriff widerrufen** — Buchhalter von einem Kunden entfernen
- **Kundenzugriff aktualisieren** — Zuweisung eines Buchhalters zu einem Kunden ändern
- **Zugriffsverlauf anzeigen** — Widerrufsverlauf für einen Kunden anzeigen

### Audit & Berichte

Kontrolliert den Zugriff auf Audit- und Berichtsfunktionen.

- **Audit-Protokolle anzeigen** — Zugriff auf Audit-Trail-Informationen
- **Berichte anzeigen** — Zugriff auf Praxisberichte

### Sicherheit

Kontrolliert die Sicherheitsverwaltungsfunktionen.

- **MFA zurücksetzen** — Multi-Faktor-Authentifizierung für andere Teammitglieder zurücksetzen (Sie können Ihre eigene MFA von diesem Ort aus nicht zurücksetzen)

## Berechtigungen anpassen

Rollen sind ein Ausgangspunkt, keine Grenze. Sie können jede einzelne Berechtigung für ein Teammitglied in einem bestimmten Branch außer Kraft setzen.

Beispielsweise können Sie **Abrechnung verwalten** von einem Admin entfernen, der keinen Zugriff auf Zahlungsmethoden haben sollte, oder **Teammitglieder einladen** einem Member gewähren, der bei der Onboarding-Unterstützung hilft.

So passen Sie Berechtigungen an:

1. Gehen Sie zu **Teamverwaltung** > **Teammitglieder**
2. Wählen Sie das Teammitglied
3. Wählen Sie im Abschnitt **Branch-Zugriff** die Option **Berechtigungen aktualisieren** im relevanten Branch
4. Aktivieren oder deaktivieren Sie einzelne Berechtigungen auf den acht Kategorienregisterkarten
5. Wählen Sie **Änderungen speichern** und geben Sie einen Grund für die Änderung an

Berechtigungsänderungen werden im Audit-Protokoll mit dem angegebenen Grund erfasst.

:::tip
Wenn Sie sich nicht sicher sind, welche Berechtigung ein Teammitglied benötigt, versuchen Sie die Aktion selbst. Atlas zeigt eine Schaltfläche auf jeder Schaltfläche an, um zu erklären, welche Berechtigung erforderlich ist, falls Sie keinen Zugriff haben. Dies erleichtert es, die genaue zu gewährende Berechtigung zu identifizieren.
:::

## Verwandte Themen

- [Verwaltung von Teammitgliedern](managing-team-members.md) — Laden Sie ein, zeigen Sie an und verwalten Sie Ihr Team
- [Branch-Verwaltung](branch-management.md) — Erstellen und konfigurieren Sie Branches
- [Kundenzugriffsstufen](../client-management/client-access-levels.md) — Wie sich Atlas-Berechtigungen auf den Fiskl-Zugriff für Kunden beziehen
