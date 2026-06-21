---
title: "Branch Dashboard"
description: "Zeigen Sie Kundenzahlen, Teammitglieder, geschätzte Abrechnung und Aktivitätsprotokolle für einen einzelnen Branch im Atlas-Dashboard an."
keywords: ["branch dashboard", "atlas dashboard", "estimated bill", "activity log", "branch metrics", "atlas"]
sidebar_position: 2
tags:
  - Atlas
  - Reporting
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erklärt, was das Branch-Dashboard anzeigt und wie Sie es verwenden können, um Aktivitäten, Abrechnung und Team-Status für einen einzelnen Branch zu überwachen.

## Zugriff auf das Branch-Dashboard

Wählen Sie einen Branch über die Branch-Auswahl oben im linken Menü aus. Das Dashboard ist die Standardansicht, wenn Sie einen Branch öffnen.

## Dashboard-Karten

Das Branch-Dashboard zeigt oben auf der Seite drei Zusammenfassungskarten an.

### Kunden

Diese Karte zeigt die Gesamtzahl der Kunden innerhalb des Branch. Sie umfasst sowohl „Charge Us"- als auch „Client Pays"-Kunden.

### Teammitglieder

Diese Karte zeigt die Anzahl der Teammitglieder, die dem Branch zugewiesen sind. Dies umfasst alle Rollen — Inhaber, Administratoren und Mitglieder.

### Geschätzte Abrechnung

Diese Karte zeigt die geschätzte Abrechnung für den Branch in seiner Abrechnungswährung zusammen mit dem nächsten Fälligkeitsdatum. Diese Zahl gilt nur für „Charge Us"-Kunden. „Client Pays"-Konten erscheinen nicht auf Ihrer Branch-Rechnung.

:::info
Die geschätzte Abrechnung kann höher als Ihr regulärer monatlicher Gesamtbetrag sein, wenn Sie Kunden kürzlich während eines Zyklus hinzugefügt haben. Weitere Informationen finden Sie unter [Verständnis der Abrechnung im laufenden Zyklus](#verständnis-der-abrechnung-im-laufenden-zyklus).
:::

## Verständnis der Abrechnung im laufenden Zyklus

Wenn Sie während eines Abrechnungszyklus einen neuen „Charge Us"-Kunden hinzufügen, wird der anteilige Betrag für die verbleibenden Tage nicht sofort berechnet. Stattdessen wird er auf der nächsten Rechnung zusammen mit den vollständigen monatlichen Gebühren berücksichtigt.

Beispiel: Wenn Sie zwei Kunden zu je 20 € pro Monat haben, beträgt Ihre reguläre Abrechnung 40 €. Wenn Sie Mitte des Monats einen dritten Kunden hinzufügen, enthält die nächste Rechnung drei vollständige monatliche Gebühren (60 €) plus die anteilige halbe Mitte für den neuen Kunden (10 €). Dies macht die nächste geschätzte Abrechnung auf 70 €.

Im nächsten Monat kehrt die reguläre Abrechnung zum regulären Betrag von 60 € für drei Kunden zurück. Der einmalige Anstieg spiegelt die Angleichung für den halben Monat wider, nicht einen Abrechnungsfehler.

Dieses Proration-Verhalten kann dazu führen, dass die geschätzte Abrechnungskarte unmittelbar nach dem Hinzufügen neuer Kunden einen höher als erwartet angezeigten Wert anzeigt.

## Schnelllinks

Unterhalb der Zusammenfassungskarten bietet ein Schnelllinks-Bereich Verknüpfungen zu wichtigen Bereichen des Branch. Diese Links führen Sie direkt zu den Abschnitten **Kunden** und **Team** Management, ohne durch die Seitenleiste zu navigieren.

## Aktivitätsprotokoll

Der untere Bereich des Branch-Dashboards zeigt das Aktivitäts-Audit-Protokoll an. Dieses Protokoll erfasst alle Aktionen, die innerhalb des Branch über alle Teammitglieder hinweg durchgeführt wurden.

Das Aktivitätsprotokoll zeigt Ereignisse wie Kundenzusätze, Änderungen an Teammitgliedern, Berechtigungsaktualisierungen und Abrechnungsaktionen. Sie können dieses Protokoll verwenden, um nachzuverfolgen, was geschah und wer jede Aktion innerhalb des Branch ausgeführt hat.

## Verwandte Themen

- [Parent-Dashboard](parent-dashboard.md) — Metriken und Aktivitäten über alle Branches hinweg anzeigen
- [Verwaltung von Teammitgliedern](../team-collaboration/managing-team-members.md) — Einladung, Anzeige und Verwaltung Ihres Teams
- [Rollen und Berechtigungen](../team-collaboration/roles-permissions.md) — Detaillierte Übersicht aller Rollen und Berechtigungskategorien
