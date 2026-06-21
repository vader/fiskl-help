---
title: "Berechnen Sie uns Abonnements"
description: "Verstehen Sie, wie Charge Us Abonnements funktionieren, einschließlich Proration, Abrechnung innerhalb des Zyklus, Planebenen und Verwaltung Ihrer Zahlungsmethode."
keywords: ["Charge Us subscription", "prorating", "mid-cycle billing", "subscription plans", "estimated bill", "Stripe", "atlas billing"]
sidebar_position: 4
tags:
  - Atlas
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erklärt, wie Charge Us Abonnements strukturiert sind, wie die Proration funktioniert, wenn Sie Kunden während des Abrechnungszyklus hinzufügen oder ändern, und wie Sie Ihre Zahlungsmethode verwalten.

## Wie Abonnements strukturiert sind

Jede Filiale hat ein Abonnement pro Abrechnungswährung. Das Abonnement wird über Stripe verwaltet und deckt alle Charge Us Kunden auf dieser Filiale in dieser Währung ab.

Jedes Abonnement enthält drei Preisstufen, die die verfügbaren Pläne darstellen: Solo, Pro und Prime. Ihre Kunden können eine Mischung dieser Pläne innerhalb desselben Abonnements nutzen. Sie können den Plan eines Kunden jederzeit aktualisieren oder herabstufen, und die Änderung wird in Ihrer nächsten Abrechnung berücksichtigt.

## Wie die Proration funktioniert

Die Proration stellt sicher, dass Sie nur für den Teil des Abrechnungszyklus zahlen, während dem ein Kunde aktiv ist. Wie die Proration angewendet wird, hängt davon ab, ob Sie Ihren ersten Kunden oder einen weiteren Kunden auf einer Filiale hinzufügen.

### Erster Kunde auf einer Filiale

Wenn Sie Ihren ersten Charge Us Kunden auf einer Filiale hinzufügen, erstellt Fiskl das Abonnement und erfasst gleichzeitig eine Zahlungsmethode. Ihnen wird sofort ein anteiliger Betrag für die verbleibenden Tage des Abrechnungszyklus berechnet.

**Beispiel:** Sie erstellen eine Filiale in New York und fügen Ihren ersten Kunden auf einem $20 pro Monat Solo Plan in der Mitte des Monats hinzu. Ihnen werden sofort $10 für die verbleibende Hälfte des Monats berechnet. Am Ende des Monats erneuert sich Ihr Abonnement und Ihnen werden $20 für den folgenden vollständigen Monat berechnet.

### Weitere Kunden

Wenn Sie nach dem ersten Kunden weitere Kunden hinzufügen, erfolgt keine sofortige Berechnung. Die anteiligen Kosten für den aktuellen Abrechnungszeitraum werden aufgeschoben und zur nächsten Abonnementabrechnung hinzuaddiert.

**Beispiel:** Sie haben bereits einen Kunden auf einem $20 pro Monat Plan. In der Mitte des Monats fügen Sie einen zweiten Kunden auf dem gleichen Plan hinzu. Es erfolgt keine sofortige Berechnung. Ihre nächste Rechnung enthält drei Komponenten:

- $20 für den vollständigen nächsten Monat des ersten Kunden
- $20 für den vollständigen nächsten Monat des zweiten Kunden
- $10 für den halben Monat des zweiten Kunden aus dem aktuellen Zyklus

Ihre geschätzte Rechnung zeigt $50 für diese bevorstehende Abrechnung.

## Upgrades und Downgrades

Sie können den Plan eines Kunden jederzeit zwischen Solo, Pro und Prime ändern. Die Preisdifferenz wird als anteilige Anpassung berechnet und bei Ihrer nächsten Abonnementabrechnung angewendet. Upgrades und Downgrades folgen dem gleichen aufgeschobenen Abrechnungsmuster wie das Hinzufügen weiterer Kunden.

## Ihre geschätzte Rechnung verstehen

Die geschätzte Rechnung auf Ihrem Dashboard zeigt, was Ihre nächste Abonnementabrechnung voraussichtlich sein wird. Diese Zahl beinhaltet:

- Gebühren für vollständige Monate für alle aktiven Kunden in der Zukunft
- Alle anteiligen Beträge, die von Kunden-Hinzufügungen oder Planänderungen während des aktuellen Zeitraums übertragen wurden

Die geschätzte Rechnung wird automatisch aktualisiert, wenn Sie während des Abrechnungszyklus Kunden hinzufügen, entfernen oder ändern.

## Zahlungsmethode verwalten

Um Ihre Karte oder Rechnungsadresse zu aktualisieren:

1. Gehen Sie zum Abschnitt **Abrechnung** in Atlas
2. Fiskl leitet Sie zum Stripe-Kundenportal weiter
3. Aktualisieren Sie Ihre Zahlungsdaten oder Rechnungsadresse
4. Änderungen werden automatisch auf zukünftige Abrechnungen angewendet

Fiskl verwendet das Stripe-Kundenportal für alle Aktualisierungen von Zahlungsmethoden und Rechnungsadressen. Dies hält Ihre Zahlungsdaten sicher und wird direkt über Stripe verwaltet.

:::info
Ihre Zahlungsmethoden-Währung muss mit der Filial-Abrechnungswährung übereinstimmen. Wenn Sie Filialen in mehreren Währungen haben, verwendet jedes Filial-Abonnement die mit dieser Währung verbundene Zahlungsmethode.
:::

## Häufige Probleme

<details>
<summary>Meine geschätzte Rechnung scheint höher zu sein als erwartet</summary>

Die geschätzte Rechnung enthält anteilige Gebühren von Kunden-Hinzufügungen oder Planänderungen während des Zyklus. Diese einmaligen Anpassungen erscheinen bei der nächsten Abrechnung neben den regulären monatlichen Beträgen. Nach dieser Abrechnung kehrt die Rechnung zur standardmäßigen monatlichen Summe für Ihre aktiven Kunden zurück.

</details>

<details>
<summary>Ich habe einen Kunden hinzugefügt, aber mir wurde nicht sofort etwas berechnet</summary>

Sofortige Abrechnungen erfolgen nur, wenn Sie Ihren ersten Charge Us Kunden auf einer Filiale hinzufügen. Alle nachfolgenden Kunden-Hinzufügungen werden aufgeschoben und in Ihrer nächsten Abonnementabrechnung berücksichtigt. Dies ist das erwartete Verhalten.

</details>

<details>
<summary>Ich kann meine Zahlungsmethode nicht aktualisieren</summary>

Aktualisierungen der Zahlungsmethode werden über das Stripe-Kundenportal durchgeführt. Wenn die Weiterleitung nicht geladen wird, überprüfen Sie Ihre Browser-Einstellungen auf Pop-up-Blocker. Wenn das Problem weiterhin besteht, kontaktieren Sie den Support.

</details>

## Verwandte Themen

- [Charge Us Modell](bill-us-model.md) — Wie das Charge Us Abrechnungsmodell funktioniert, einschließlich Verifizierung und Eigentumswechsel
- [Client Pays Modell](client-pays-model.md) — Wie die von Kunden bezahlte Abrechnung funktioniert
- [Abrechnungsmodelle wechseln](switching-billing-models.md) — Wie man das Abrechnungsmodell eines Kunden ändert
- [Filialen konfigurieren](../getting-started/configuring-branches.md) — Filialen und Abrechnungswährungen einrichten
