---
title: "Banking-Verbindungen – Übersicht"
description: "Verbinden Sie Ihre Bankkonten, Kreditkarten und Zahlungsdienstleister mit Fiskl für automatisierte Transaktionsimporte und mühelose Abstimmung."
keywords: ["banking", "bank connection", "bank sync", "Yodlee", "Salt Edge", "Stripe", "Wio", "open banking", "transaction import"]
sidebar_position: 1
tags:
  - Banking
  - Integrations
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Dieser Abschnitt behandelt die Verbindung Ihrer Bankkonten, Kreditkarten und Zahlungsdienstleister mit Fiskl. Live-Bankverbindungen eliminieren manuelle Dateneingabe durch automatisches Importieren von Transaktionen und bieten Ihnen genaue, aktuelle Datensätze, die zur Kategorisierung und Abstimmung bereit sind.

## Was Bankverbindungen leisten

Durch die Verknüpfung eines Finanzkontos mit Fiskl entsteht ein Live-Feed Ihrer Transaktionen. Nach der Verbindung importiert Fiskl Ihren Transaktionsverlauf und zeigt jeden Posten im Tab **Banking** an, wo Sie ihn kategorisieren, abgleichen und gegen Ihre Sachkonten abstimmen können.

Bankverbindungen unterstützen alle Kontotypen: Girokonten, Sparkonten, Kreditkarten und Zahlungsverarbeiterkonten wie Stripe. Sie können Konten in mehreren Währungen innerhalb desselben Unternehmens verbinden.

:::info
Fiskl nutzt branchenübliche Open-Banking-Protokolle. Ihre Bank-Anmeldedaten werden von Fiskl niemals gespeichert – die Authentifizierung wird vollständig vom Verbindungsanbieter durchgeführt.
:::

## Unterstützte Verbindungsanbieter

Um ein Bankkonto zu verbinden, gehen Sie zu **Banking** im linken Menü und wählen Sie **Bankkonto verbinden**. Fiskl arbeitet mit vier Anbietern zusammen, um eine weltweite Abdeckung zu ermöglichen. Der richtige Anbieter hängt vom Standort Ihrer Bank und vom Kontotyp ab.

| Anbieter | Primäre Regionen | Geeignet für |
|---|---|---|
| **Yodlee** | USA, Kanada, Südafrika | Umfassende Abdeckung für nordamerikanische Finanzinstitute |
| **Salt Edge** | Europa, Asien, Naher Osten | Open-Banking-Verbindungen für traditionelle Privatkundenbanken |
| **Stripe** | Global | Zahlungsverarbeitungskonten, Auszahlungen und mehrsprachiger Verkauf |
| **Wio Bank** | VAE / Naher Osten | Digitales Business-Banking mit automatisierten Transaktionsfeeds |

Wenn Sie in mehreren Regionen tätig sind, können Sie Konten über verschiedene Anbieter innerhalb desselben Fiskl-Unternehmens verbinden – beispielsweise Yodlee für ein US-Konto und Salt Edge für ein britisches Konto.

## Verbindungsleitfäden

import DocCardList from '@theme/DocCardList';

<DocCardList />

## Verwandte Themen

- [Ihre Bank verbinden](/getting-started/connecting-your-bank) – Einstiegsleitfaden für die erste Bankeinrichtung
- [Kontoabstimmung](/accounting/reconciliation/overview) – Abstimmung importierter Transaktionen gegen Ihr Hauptbuch
- [Kontenrahmen](/accounting/chart-of-accounts) – Verwalten Sie die Sachkonten, denen Transaktionen zugeordnet werden
- [Integrationsübersicht](/integrations/overview) – Alle verfügbaren Integrationen in Fiskl
