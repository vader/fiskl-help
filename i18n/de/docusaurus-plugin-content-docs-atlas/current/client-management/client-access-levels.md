---
title: "Zugriffsstufen für Kunden"
description: "Verstehen Sie die zwei Ebenen des Kundenzugriffs in Atlas — Portal-Berechtigungen für Ihr Team und Fiskl-Berechtigungen für Buchhalter, die in Kundenkonten arbeiten."
keywords: ["client access levels", "permissions", "accountant access", "atlas", "portal permissions", "fiskl permissions"]
sidebar_position: 5
tags:
  - Atlas
  - Client Management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erklärt die zwei Zugriffsstufen, die steuern, wie Ihr Team mit Kundenkonten in Atlas interagiert.

## Zwei Zugriffsstufen

Der Kundenzugriff in Atlas funktioniert auf zwei Ebenen: was ein Buchhalter in Atlas tun kann und was er im Fiskl-Konto des Kunden tun kann.

### Atlas-Ebenen-Berechtigungen

Atlas-Ebenen-Berechtigungen steuern, was Ihre Teammitglieder in Atlas selbst sehen und tun können. Diese werden durch Filialrollen und Berechtigungsüberschreibungen festgelegt.

**Kundenberechtigungen** bestimmen, ob ein Buchhalter Kunden anzeigen, Kundenkonten erstellen oder löschen, Kundendetails aktualisieren, Konten synchronisieren und Kundennotizen verwalten kann:

- **Alle Kunden anzeigen** — Zugriff auf alle Kundenkonten in der Filiale
- **Zugewiesene Kunden anzeigen** — Zugriff nur auf Kunden, denen sie zugewiesen sind
- **Kunden erstellen** — Neue Kundenkonten hinzufügen
- **Kunden löschen** — Kundenkonten entfernen
- **Kunden aktualisieren** — Kundendetails bearbeiten
- **Kunden synchronisieren** — Kontosynchronisation auslösen
- **Kundennotizen anzeigen** — Notizen zu Kundendatensätzen lesen
- **Kundennotizen aktualisieren** — Kundennotizen hinzufügen oder bearbeiten

**Zugriffskontrollberechtigungen** bestimmen, ob ein Buchhalter den Zugriff anderer Teammitglieder auf Kunden verwalten kann:

- **Kundenzugriff gewähren** — Buchhalter einem Kunden zuweisen
- **Kundenzugriff widerrufen** — Buchhalter von einem Kunden entfernen
- **Kundenzugriff aktualisieren** — Die Zuweisung eines Buchhalters bei einem Kunden ändern
- **Zugriffsverlauf anzeigen** — Den Widerrufssverlauf für einen Kunden anzeigen

Diese Berechtigungen gewähren keinen Zugriff auf das Fiskl-Konto des Kunden. Um in einem Kundenkonto zu arbeiten, muss ein Buchhalter auch diesem Kunden zugewiesen werden.

### Fiskl-Ebenen-Berechtigungen

Wenn ein Buchhalter einem Kunden zugewiesen wird, erhält er Zugriff auf das Fiskl-Konto des Kunden. Diese Zuweisung erfolgt in zwei Formen: **Hauptbuchhalter** oder **Buchhalter**. Derzeit gibt es nur minimale Unterschiede zwischen den beiden Rollen.

Die Berechtigungsstufe im Fiskl-Konto des Kunden bestimmt, was der Buchhalter tun kann — Daten anzeigen, Rechnungen erstellen, Banking verwalten, Berichte erstellen und so weiter. Dies ist derzeit standardmäßig auf Admin-Ebene für alle zugewiesenen Buchhalter eingestellt.

:::info
Fiskl entwickelt sich von rollenbasierten zu berechtigungsbasierten Zugriffskontrolls weiter. Wenn dies verfügbar ist, können Sie granulare Fiskl-Ebenen-Berechtigungen für jeden Buchhalter bei jedem Kundenkonto direkt von Atlas aus festlegen. Dies ist eine geplante Funktion und noch nicht verfügbar.
:::

## Wie die zwei Ebenen zusammenwirken

Ein Buchhalter benötigt beide Zugriffsstufen, um mit einem Kunden zu arbeiten. Atlas-Ebenen-Berechtigungen gewähren Sichtbarkeit und Verwaltungsfähigkeiten in Atlas. Fiskl-Ebenen-Zugriff — durch Zuweisung als Buchhalter — gewährt die Möglichkeit, sich beim Konto des Kunden anzumelden und mit seinen Daten zu arbeiten.

Beispielsweise kann ein Buchhalter mit der Berechtigung **Zugewiesene Kunden anzeigen** in Atlas nur Kunden sehen, denen er zugewiesen ist. Sobald er **Fiskl aufrufen** bei einem zugewiesenen Kunden auswählt, bestimmen seine Fiskl-Ebenen-Berechtigungen (derzeit Admin), was er in diesem Konto tun kann.

## Verwandte Themen

- [Kundenverbindungen](client-connections.md) — Buchhalter-Zuweisungen und Kundenzugriff verwalten
- [Rollen und Berechtigungen](../team-collaboration/roles-permissions.md) — Verstehen Sie Atlas-Filialrollen und Berechtigungsüberschreibungen
- [Kunden hinzufügen](adding-clients.md) — Kunden mit den Modellen „Charge Us" oder „Client Pays" hinzufügen
