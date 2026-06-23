---
title: "Verwaltung von Teammitgliedern"
description: "Laden Sie Teammitglieder ein, verwalten Sie Filialzuweisungen, passen Sie Berechtigungen an und kontrollieren Sie übergeordnete Rollen und Sicherheitseinstellungen in Atlas."
keywords: ["manage team", "invite accountant", "team members", "branch roles", "permissions", "MFA reset", "atlas"]
sidebar_position: 2
tags:
  - Atlas
  - Team
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erklärt, wie Sie Teammitglieder einladen, deren Zweigniederlassungszugriff und Berechtigungen verwalten, übergeordnete Rollen zuweisen und Sicherheitseinstellungen in Atlas handhaben.

## Teammitglieder und Einladungen

Die Teamverwaltung basiert auf Zweigniederlassungen. Verwenden Sie den Zweigniederlassungswähler am oberen Rand des linken Menüs, um auszuwählen, mit welcher Zweigniederlassung Sie arbeiten. Unter **Teamverwaltung** in der Seitenleiste finden Sie zwei Abschnitte:

- **Teammitglieder** — Zeigt alle aktuellen Teammitglieder der ausgewählten Zweigniederlassung
- **Teameinladungen** — Zeigt ausstehende Einladungen und den Einladungsverlauf

## Ein Teammitglied einladen

So laden Sie ein neues Teammitglied ein:

1. Gehen Sie zu **Teamverwaltung** > **Teammitglieder**
2. Wählen Sie **Teammitglied einladen**
3. Führen Sie den dreiteiligen Einladungsprozess durch:

**Schritt 1 — Wer:** Geben Sie die E-Mail-Adresse und den Namen des Teammitglieds ein.

**Schritt 2 — Zugriff:** Wählen Sie, ob Sie ihn nur zur aktuellen Zweigniederlassung oder zu allen Zweigniederlassungen einladen möchten.

**Schritt 3 — Rolle:** Wählen Sie eine Zweigniederlassungsrolle — **Eigentümer**, **Administrator** oder **Mitglied**.

4. Bestätigen Sie die Einladung und senden Sie sie ab

Die Einladung ist sieben Tage lang gültig. Sie wird im Abschnitt **Teameinladungen** angezeigt, bis das Teammitglied sie annimmt, die Einladung abläuft oder Sie sie stornieren.

## Einladungen verwalten

Gehen Sie zu **Teamverwaltung** > **Teameinladungen**, um alle Einladungsaktivitäten anzuzeigen. Die Seite hat zwei Abschnitte:

**Ausstehende Einladungen** werden oben angezeigt. Jede ausstehende Einladung hat Zeilenaktionen, mit denen Sie die Einladung per E-Mail erneut senden, den Einladungslink zum Teilen über einen anderen Kanal kopieren oder die Einladung vollständig stornieren können.

**Einladungsverlauf** wird darunter angezeigt und zeigt Einladungen, die akzeptiert, abgelaufen oder abgelehnt wurden. Dies gibt Ihnen einen vollständigen Überblick über alle Einladungsaktivitäten für die Zweigniederlassung.

## Das Teamitglied-Panel

Wählen Sie eine Teamitglied-Zeile aus, um deren Verwaltungs-Panel zu öffnen. Hier konfigurieren Sie alles über den Zugriff und die Berechtigungen des Teammitglieds.

### Zusammenfassung

Der Abschnitt Zusammenfassung zeigt wichtige Informationen auf einen Blick: die Anzahl der Zweigniederlassungen, denen das Teammitglied zugewiesen ist, die Anzahl der Kunden, auf die es Zugriff hat, und wann es zuletzt aktiv war.

### Kundenzugriff

Dieser Abschnitt zeigt eine Liste der Kunden, denen das Teammitglied zugewiesen ist. Jeder Kundeneintrag verlinkt auf den Kundenverwaltungsbereich, in dem Sie die Zuordnung anpassen können. Weitere Informationen zur Funktionsweise des Kundenzugriffs finden Sie unter [Kundenzugriffsstufen](../client-management/client-access-levels.md).

### Zweigniederlassungszugriff

Dieser Abschnitt zeigt jede Zweigniederlassung, der das Teammitglied zugewiesen ist, zusammen mit seiner Rolle in jeder. Von hier aus können Sie:

- **Zur Zweigniederlassung hinzufügen** — Weisen Sie das Teammitglied einer zusätzlichen Zweigniederlassung zu
- **Rolle ändern** — Aktualisieren Sie seine Rolle in einer Zweigniederlassung (Eigentümer, Administrator oder Mitglied)
- **Aus Zweigniederlassung entfernen** — Entfernen Sie das Teammitglied mit Mehrfachauswahl aus einer oder mehreren Zweigniederlassungen
- **Berechtigungen aktualisieren** — Passen Sie einzelne Berechtigungen für das Teammitglied in einer bestimmten Zweigniederlassung an

### Berechtigungen anpassen

Wenn Sie **Berechtigungen aktualisieren** für eine Zweigniederlassung auswählen, öffnet sich der Berechtigungseditor. Falls Sie die erforderlichen Berechtigungen haben, sehen Sie acht Registerkarten, die den Berechtigungskategorien entsprechen:

**Organisation** — Zweigniederlassungsdetails anzeigen, Zweigniederlassungseinstellungen aktualisieren, Zweigniederlassung löschen.

**Abrechnung** — Rechnungen und Abrechnungsverlauf anzeigen, Zahlungsmethoden und Abonnements verwalten.

**Team** — Teammitglieder anzeigen, Buchhalter einladen und entfernen, Rollen ändern, Buchhalter zu anderen Zweigniederlassungen hinzufügen, Teamberechtigungen anzeigen und verwalten.

**Übergeordnete Rollen** — Übergeordnete Rollen anzeigen, gewähren, aktualisieren und widerrufen. Beinhaltet die Berechtigung „Übergeordneter Administrator".

**Kunden** — Alle Kunden oder nur zugewiesene Kunden anzeigen, Kundenkonten erstellen, löschen, aktualisieren und synchronisieren, Kundennotizen anzeigen und aktualisieren.

**Zugriffskontrolle** — Buchhalter-Zugriff auf Kunden gewähren, widerrufen und aktualisieren. Zugriffsverlauf anzeigen.

**Audit & Berichte** — Audit-Protokolle und Berichte anzeigen.

**Sicherheit** — MFA für andere Teammitglieder zurücksetzen.

Rollen wie Eigentümer, Administrator und Mitglied sind Berechtigungsgruppen — jede Rolle wird mit einer vordefinierten Reihe von Berechtigungen geliefert. Sie können jede einzelne Berechtigung für ein bestimmtes Teammitglied überschreiben. Beispielsweise können Sie Abrechnungsberechtigungen von einem Administrator entfernen oder Teameinladungsberechtigungen an ein Mitglied gewähren.

:::info
Atlas zeigt Aktionsschaltflächen immer an, auch wenn Sie nicht über die erforderliche Berechtigung verfügen. Ein Tooltip auf der Schaltfläche erklärt, welche Berechtigung erforderlich ist. Dies macht das System selbstdokumentierend — Sie können sehen, was möglich ist und welche Berechtigungen Sie benötigen, um es zu tun.
:::

### Übergeordnete Rollen

Im Teamitglied-Panel können Sie übergeordnete Rollen zuweisen oder ändern. Übergeordnete Rollen bieten organisationsweiten Zugriff über alle Zweigniederlassungen:

- **Super Administrator** — Vollständiger Zugriff auf alle Zweigniederlassungen, Benutzer und Abrechnungseinstellungen
- **Abrechnungsadministrator** — Anzeigen aller Rechnungen, Gebühren und bevorstehenden Gebühren über Zweigniederlassungen hinweg
- **Betrachter** — Schreibgeschützter Zugriff auf alle Zweigniederlassungen und Kundendaten

Ein Teammitglied kann auch keine übergeordnete Rolle haben, was bedeutet, dass es nur Zugriff auf die Zweigniederlassungen hat, denen es explizit zugewiesen ist. Sie benötigen die entsprechenden Berechtigungen für übergeordnete Rollen, um diese Rollen zu gewähren oder zu widerrufen.

### Sicherheit und Authentifizierung

Der Sicherheitsbereich ermöglicht es Ihnen, MFA für das Teammitglied zu verwalten und deren Anmeldeaktivität anzuzeigen.

**MFA-Zurücksetzen** — Wenn ein Teammitglied den Zugriff auf seine Authentifizierungs-App verloren hat, können Sie dessen MFA aus diesem Bereich zurücksetzen. Sie benötigen die Berechtigung **MFA-Zurücksetzen**, um dies zu tun. Sie können Ihre eigene MFA nicht von diesem Ort aus zurücksetzen — dafür gehen Sie zu Ihren Profileinstellungen.

**Anmeldeaktivität** — Dieser Bereich zeigt das letzte Anmeldedatum und die IP-Adresse des Teammitglieds.

## Häufige Probleme

<details>
<summary>Teammitglied kann keine Aktionsschaltflächen sehen</summary>

Alle Schaltflächen sind in Atlas immer sichtbar, aber Schaltflächen, für die Sie keine Berechtigung haben, zeigen einen Tooltip mit der erforderlichen Berechtigung. Wenn ein Teammitglied meldet, dass es eine Aktion nicht ausführen kann, prüfen Sie den Tooltip, um die fehlende Berechtigung zu identifizieren, und aktualisieren Sie dann deren Berechtigungen oder Rolle.

</details>

<details>
<summary>Einladung abgelaufen, bevor das Teammitglied sie akzeptiert hat</summary>

Einladungen sind sieben Tage lang gültig. Gehen Sie zu **Teameinladungen**, suchen Sie die abgelaufene Einladung und wählen Sie **Erneut senden**, um eine neue Einladung zu senden. Alternativ können Sie die abgelaufene Einladung stornieren und eine neue erstellen.

</details>

<details>
<summary>Kann die MFA eines Teammitglieds nicht zurücksetzen</summary>

Sie benötigen die Berechtigung **MFA-Zurücksetzen** in der Kategorie Sicherheit. Wenn Sie diese Berechtigung nicht haben, kontaktieren Sie Ihren Zweigniederlassungseigentümer oder Super Administrator. Beachten Sie, dass Sie Ihre eigene MFA nicht aus dem Teamverwaltungs-Panel zurücksetzen können — verwenden Sie stattdessen Ihre Profileinstellungen.

</details>

## Verwandte Themen

- [Rollen und Berechtigungen](roles-permissions.md) — Detaillierte Aufschlüsselung aller Rollen und Berechtigungskategorien
- [Zweigniederlassungsverwaltung](branch-management.md) — Erstellen und konfigurieren Sie Zweigniederlassungen
- [Kundenzugriffsstufen](../client-management/client-access-levels.md) — Wie Teamberechtigungen mit dem Kundenzugriff zusammenhängen
- [Kundenverbindungen](../client-management/client-connections.md) — Verwalten Sie Buchhalter-Zuordnungen auf Kundenkonten
