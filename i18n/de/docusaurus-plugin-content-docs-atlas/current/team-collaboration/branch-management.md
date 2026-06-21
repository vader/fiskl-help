---
title: "Branchenverwaltung"
description: "Erstellen und konfigurieren Sie Branches in Atlas mit dem Branch-Selektor, verwalten Sie Branch-Einstellungen und aktualisieren Sie die Abrechnung über das Stripe-Portal."
keywords: ["branch management", "create branch", "branch currency", "branch settings", "atlas", "multi-branch", "branch selector"]
sidebar_position: 4
tags:
  - Atlas
  - Team
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erläutert, wie Sie Niederlassungen erstellen, auf ihre Einstellungen zugreifen und Abrechnungsdetails in Atlas verwalten.

## Was sind Niederlassungen?

Niederlassungen stellen die Betriebseinheiten Ihrer Kanzlei in Atlas dar. Jede Niederlassung verwaltet ihre eigenen Teammitglieder, Kundenliste, Abrechnung und Berechtigungen. Sie können Niederlassungen für verschiedene Bürostandorte, Leistungsbereiche, Währungen oder jede andere Aufteilung erstellen, die für Ihre Kanzlei geeignet ist.

Kundenkonten in einer Niederlassung können jede beliebige Währung nutzen, unabhängig von der Abrechnungswährung der Niederlassung. Eine USD-Niederlassung kann Kunden verwalten, die in EUR, GBP oder einer anderen unterstützten Währung tätig sind. Wenn Ihre Kanzlei in mehreren Währungen abrechnen muss, erstellen Sie eine separate Niederlassung für jede.

## Die Niederlassungsauswahl

Die Niederlassungsauswahl befindet sich oben links im Atlas-Menü. Sie erfüllt drei Funktionen:

- **Niederlassungen wechseln** — Wählen Sie eine andere Niederlassung aus, um den Kontext für alle Team-, Kunden- und Abrechnungsansichten zu ändern
- **Auf Einstellungen zugreifen** — Wählen Sie das Zahnradsymbol neben einem Niederlassungsnamen aus, um die Einstellungen dieser Niederlassung zu öffnen
- **Eine Niederlassung hinzufügen** — Wählen Sie **Niederlassung hinzufügen** aus, um eine neue Niederlassung zu erstellen

## Erstellen einer Niederlassung

So erstellen Sie eine neue Niederlassung:

1. Öffnen Sie die Niederlassungsauswahl oben links im Menü
2. Wählen Sie **Niederlassung hinzufügen** aus
3. Geben Sie die erforderlichen Details ein:

- **Name** — Ein Anzeigename für die Niederlassung. Dies kann jederzeit geändert werden.
- **E-Mail der Niederlassung** — Die E-Mail-Adresse zum Empfang von Kundeneinladungen und Abrechnungskommunikation. Dies kann jederzeit geändert werden.
- **Land** — Das Land, in dem die Niederlassung tätig ist. Dies kann jederzeit geändert werden.
- **Abrechnungswährung** — Die Währung, die für Charge Us-Abonnementrechnungen in dieser Niederlassung verwendet wird. Ihre Zahlungsmethode muss dieser Währung entsprechen.

4. Bestätigen Sie, um die Niederlassung zu erstellen

:::warning
Die Abrechnungswährung kann nach der Erstellung der Niederlassung nicht mehr geändert werden. Alle anderen Niederlassungsdetails — Name, E-Mail und Land — können jederzeit in den Niederlassungseinstellungen aktualisiert werden.
:::

Fügen Sie nach der Erstellung der Niederlassung eine Zahlungsmethode hinzu, wenn Sie das Charge Us-Abrechnungsmodell nutzen möchten. Laden Sie anschließend Teammitglieder ein und beginnen Sie, Kunden hinzuzufügen.

## Niederlassungseinstellungen

Sie können auf Niederlassungseinstellungen auf zwei Arten zugreifen: Wählen Sie das Zahnradsymbol in der Niederlassungsauswahl aus, oder gehen Sie in der linken Seitenleiste zu **Verwaltung** > **Einstellungen**.

Der Einstellungsbereich hat zwei Unterabschnitte unter **Niederlassung**:

### Details

Zeigen Sie Ihre Niederlassungsinformationen an und aktualisieren Sie diese:

- **Niederlassungsname** — Aktualisieren Sie den Anzeigenamen
- **E-Mail der Niederlassung** — Ändern Sie die E-Mail-Adresse für Kundeneinladungen und Kommunikation
- **Land** — Aktualisieren Sie das Niederlassungsland

### Abrechnung

Zeigen Sie Ihre Zahlungsmethode und Rechnungsadresse an und verwalten Sie diese. Wählen Sie die Option aus, um Ihre Abrechnungsdetails zu aktualisieren. Atlas leitet Sie dann zum sicheren gehosteten Portal von Stripe weiter. Im Stripe-Portal können Sie Ihre Zahlungsmethode (Karte, Lastschrift oder andere unterstützte Methoden) und Ihre Rechnungsadresse aktualisieren. Die Rechnungsadresse ist mit Ihrer Zahlungsmethode verknüpft.

Änderungen im Stripe-Portal werden automatisch auf zukünftige Rechnungen angewendet.

## Verwaltungsmenü

Die linke Seitenleiste enthält einen Bereich **Verwaltung** mit drei Bereichen:

- **Einstellungen** — Niederlassungsdetails und Abrechnungskonfiguration wie oben beschrieben
- **Abrechnung** — Zeigen Sie Rechnungen, Gebühren und Abrechnungsverlauf für die Niederlassung an
- **Audit-Protokoll** — Zeigen Sie ein Protokoll von Aktionen und Änderungen an, die in der Niederlassung vorgenommen wurden

## Niederlassungszugriff

Teammitglieder werden spezifischen Niederlassungen mit jeweils einer Rolle zugewiesen. Ein Teammitglied kann mehreren Niederlassungen mit unterschiedlichen Rollen angehören. Beispielsweise könnte Sarah eine Eigentümerin der Niederlassung Amsterdam und ein Mitglied der Niederlassung Paris sein.

Teammitglieder mit einer übergeordneten Rolle (Super Admin, Abrechnungs-Admin oder Betrachter) haben Zugriff auf alle Niederlassungen gemäß ihrem übergeordneten Rollenniveau. Teammitglieder ohne übergeordnete Rolle sehen nur die Niederlassungen, denen sie explizit zugewiesen sind.

## Verwandte Themen

- [Verwaltung von Teammitgliedern](managing-team-members.md) — Laden Sie Mitglieder ein und verwalten Sie Niederlassungszuweisungen
- [Rollen und Berechtigungen](roles-permissions.md) — Verstehen Sie Niederlassungsrollen und Berechtigungskategorien
- [Niederlassungen konfigurieren](../getting-started/configuring-branches.md) — Erstmalige Niederlassungseinrichtung während des Onboardings
- [Übersicht Abrechnungsmodelle](../billing-models/overview.md) — Wie die Abrechnung pro Niederlassung funktioniert
