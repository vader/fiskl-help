---
id: configuring-branches
title: "Konfigurieren von Filialen"
description: "Erstellen und konfigurieren Sie Niederlassungen in Atlas, um Ihre Praxis nach Standort, Währung oder Dienstleistungsbereich zu organisieren – jede mit ihrem eigenen Team, Kunden und Abrechnung."
keywords: ["atlas", "branches", "branch configuration", "create branch", "branch currency", "multi-branch", "accountant portal"]
sidebar_position: 4
---

Dieses Handbuch erklärt die Funktionsweise von Branches in Atlas und hilft Ihnen, Branches für Ihre Kanzlei zu erstellen und zu konfigurieren.

## Was ein Branch ist

Ein Branch ist eine operative Einheit innerhalb Ihrer Kanzlei. Jeder Branch hat eigene Teammitglieder, eine Kundenliste, eine Abrechnung und Berechtigungen. Sie können Branches für verschiedene Bürostandorte, Dienstleistungsbereiche oder Abrechnungswährungen erstellen.

Jedes Charge Us-Abonnement auf einem Branch wird in der Abrechnungswährung des Branches abgerechnet. Kundenkonten im Branch können jedoch jede beliebige Währung nutzen — ein USD-Branch kann Kunden verwalten, die in EUR, GBP oder einer anderen Währung tätig sind.

## Erstellen eines Branches

1. Öffnen Sie den Branch-Selector oben links im Atlas-Menü
2. Wählen Sie **Branch hinzufügen**
3. Geben Sie die folgenden Details ein:
   - **Name** — Ein Anzeigename für den Branch
   - **Branch-E-Mail** — Wird für Kundeneinladungen und Abrechnungsmitteilungen verwendet
   - **Land** — Das Land, in dem der Branch tätig ist
   - **Abrechnungswährung** — Die Währung für Charge Us-Abonnement-Rechnungen auf diesem Branch

4. Bestätigen Sie, um den Branch zu erstellen

:::warning
Die Abrechnungswährung kann nach der Erstellung des Branches nicht mehr geändert werden. Alle anderen Details — Name, E-Mail und Land — können jederzeit über die Branch-Einstellungen aktualisiert werden.
:::

## Nach der Erstellung eines Branches

Nach der Erstellung des Branches führen Sie diese Schritte aus, bevor Sie Kunden hinzufügen:

- **Zahlungsmethode hinzufügen** (nur Charge Us) — Gehen Sie zu **Administration** > **Einstellungen** > **Abrechnung** und fügen Sie über das Stripe-Portal eine Karte oder ein Bankkonto hinzu. Die Währung der Zahlungsmethode muss der Abrechnungswährung des Branches entsprechen.
- **Teammitglieder einladen** — Gehen Sie zu **Team-Verwaltung** > **Teammitglieder** und laden Sie die Buchhalter ein, die an diesem Branch arbeiten werden.

## Verwalten von Branch-Einstellungen

Um Branch-Details nach der Erstellung zu aktualisieren, wählen Sie das Zahnradsymbol neben dem Branch-Namen im Branch-Selector oder gehen Sie zu **Administration** > **Einstellungen**.

Von dort aus können Sie den Branch-Namen, die E-Mail-Adresse und das Land aktualisieren. Der Bereich **Abrechnung** ermöglicht es Ihnen, Ihre Zahlungsmethode und Rechnungsadresse über das Stripe-Portal zu aktualisieren.

## Verwandte Themen

- [Branch-Verwaltung](../team-collaboration/branch-management.md) — Vollständiger Leitfaden zu Branch-Einstellungen und -Verwaltung
- [Abrechnungsmodelle](../billing-models/overview.md) — Verstehen Sie Charge Us und Client Pays Abrechnungsmodelle, bevor Sie Kunden hinzufügen
- [Verwalten von Teammitgliedern](../team-collaboration/managing-team-members.md) — Laden Sie Ihr Branch-Team ein und konfigurieren Sie es
