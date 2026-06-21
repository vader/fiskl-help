---
title: "Abrechnungsmodelle"
description: "Verstehen Sie die zwei Abrechnungsmodelle in Atlas – „Charge Us, bei dem Ihre Kanzlei zahlt, und „Client Pays, bei dem der Kunde sein eigenes Abonnement verwaltet."
keywords: ["billing models", "Charge Us", "Client Pays", "atlas", "accountant billing", "client subscription"]
sidebar_position: 1
tags:
  - Atlas
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erklärt die zwei verfügbaren Abrechnungsmodelle in Atlas und hilft Ihnen zu entscheiden, welches Modell Sie für jede Kundenbeziehung verwenden sollten.

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Zwei Abrechnungsmodelle

Atlas unterstützt zwei Abrechnungsmodelle, die bestimmen, wer für das Fiskl-Abonnement eines Kunden bezahlt. Sie wählen das Modell bei Hinzufügen des Kunden, und Sie können beide Modelle innerhalb desselben Zweigstelle mischen.

- **Uns belasten** — Ihre Kanzlei bezahlt das Kundenabonnement. Sie erstellen und besitzen das Konto.
- **Kunde bezahlt** — Der Kunde bezahlt sein eigenes Abonnement. Der Kunde besitzt das Konto.

## Schnellvergleich

| | Uns belasten | Kunde bezahlt |
|---|---|---|
| **Wer bezahlt das Abonnement** | Ihre Kanzlei | Der Kunde |
| **Wer besitzt das Konto** | Ihre Kanzlei | Der Kunde |
| **Wer kann beenden** | Nur Sie | Jede Partei |
| **Abrechnungsmethode** | Monatliche Rechnung pro Zweigstelle | Kunde zahlt direkt an Fiskl |
| **Abrechnungsverifikation erforderlich** | Ja | Nein |
| **Eigentümertransfer verfügbar** | Ja — zum Kunden | Nicht zutreffend |
| **Am besten geeignet für** | Verwaltete Services, Vollservice-Kunden | Beratung, Buchhaltung, unabhängige Kunden |

## Auswahl eines Abrechnungsmodells

Das richtige Modell hängt vom gewünschten Kontrolllevel und der Art der Kundenbeziehung ab.

**Wählen Sie „Uns belasten"**, wenn Sie vollständige Kontrolle über das Konto wünschen und der Kunde auf Sie für alle Buchhaltungsarbeiten angewiesen ist. Der Kunde kann die Beziehung nicht beenden, und Sie verwalten die gesamte Abrechnung. Dies funktioniert gut für paketierte Service-Leistungen und Kunden, die einen praktischen Ansatz bevorzugen.

**Wählen Sie „Kunde bezahlt"**, wenn der Kunde sein Konto besitzen und sein Abonnement selbst verwalten möchte. Dies eignet sich für Beratungsbeziehungen, Buchhaltungsvereinbarungen und Kunden mit internen Teams. Jede Partei kann jederzeit beenden.

Sie sind nicht auf ein Modell für Ihre gesamte Kanzlei festgelegt. Einige Kunden könnten sich für „Uns belasten" eignen, während andere „Kunde bezahlt" bevorzugen. Sie können beide innerhalb derselben Zweigstelle ausführen.

:::info
Sie können das Abrechnungsmodell eines Kunden nach der Kontoverbindung nicht mehr ändern. Wenn Sie Modelle wechseln möchten, siehe [Abrechnungsmodelle wechseln](switching-billing-models.md).
:::

## Wie die Abrechnung funktioniert

### Abrechnung für „Uns belasten"

Fiskl erstellt jeden Monat eine Rechnung pro Zweigstelle für alle „Uns belasten"-Kunden auf dieser Zweigstelle. Das Hinzufügen oder Upgraden von Kunden wird automatisch basierend auf dem Abrechnungszyklus anteilig berechnet. Ihre Zweigstelle muss eine verifizierte Zahlungsmethode über Stripe in der Abrechnungswährung der Zweigstelle haben.

### Abrechnung für „Kunde bezahlt"

Kunden im Modell „Kunde bezahlt" zahlen direkt an Fiskl. Sie haben keine Zahlungsverpflichtung für diese Konten. Der Kunde verwaltet sein eigenes Abonnement, die Planebene und die Zahlungsmethode aus seinem Fiskl-Konto.

## Verwandte Themen

- [Modell „Uns belasten"](bill-us-model.md) — Detaillierter Leitfaden zur kanzleibezahlten Abrechnung
- [Modell „Kunde bezahlt"](client-pays-model.md) — Detaillierter Leitfaden zur kundengezonten Abrechnung
- [Abrechnungsmodelle wechseln](switching-billing-models.md) — So ändern Sie das Abrechnungsmodell eines Kunden
- [Kunden hinzufügen](../client-management/adding-clients.md) — Kunden mit einem der beiden Abrechnungsmodelle hinzufügen
- [Zweigstellen konfigurieren](../getting-started/configuring-branches.md) — Zweigstellen und Abrechnungswährungen einrichten
