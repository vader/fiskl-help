---
title: "Integrationen"
description: "Verbinden Sie Fiskl mit Ihren Bankkonten und Zahlungsgateways, um Transaktionsimporte zu automatisieren und Zahlungen für Rechnungen zu akzeptieren."
keywords: ["integrations", "banking connections", "payment gateways", "Stripe", "PayPal", "GoCardless", "Salt Edge", "Yodlee", "Wio Bank"]
sidebar_position: 1
tags:
  - Integrations
  - Banking
  - Payments
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import TOCInline from '@theme/TOCInline';

Dieser Abschnitt behandelt Fiskls Integrationen mit Banken und Zahlungsanbietern. Verbinden Sie Ihre Konten, um Transaktionsimporte zu automatisieren und ermöglichen Sie Kunden, Rechnungen online zu bezahlen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bankverbindungen

Bankverbindungen verknüpfen Ihre Bankkonten, Kreditkarten und Geschäftskonten mit Fiskl. Nach der Verbindung werden Transaktionen automatisch importiert, sodass Ihre Aufzeichnungen aktuell bleiben, ohne dass ein manueller Eintrag erforderlich ist.

Fiskl unterstützt vier Bankanbieter:

- **Salt Edge** — Banken in Europa, Asien und dem Nahen Osten
- **Yodlee** — Banken in den USA, Kanada und Südafrika
- **Wio Bank** — Direkte Integration für UAE-Wio-Konten
- **Stripe** — Importieren Sie Transaktionsdaten aus Ihrem Stripe-Konto

:::info
Fiskl verwendet Nur-Lese-Zugriff für alle Bankverbindungen. Die Integration kann keine Überweisungen einleiten oder Ihr Bankkonto ändern.
:::

Anleitung zum Einrichten und Details zu Anbietern finden Sie unter [Bankverbindungen](/integrations/banking/overview).

## Zahlungsgateways

Zahlungsgateways ermöglichen es Kunden, Rechnungen online zu bezahlen. Nach der Verbindung werden Zahlungsschaltflächen automatisch auf Ihren Rechnungen angezeigt.

Fiskl unterstützt drei Zahlungsanbieter:

- **Stripe** — Kreditkarten, Debitkarten, Apple Pay und Google Pay
- **PayPal** — Online-Zahlungen akzeptiert in über 200 Ländern
- **GoCardless** — Lastschriften und wiederkehrende Zahlungen in über 30 Ländern

Zahlungsdaten werden nach jeder Transaktion automatisch mit Fiskl synchronisiert.

Anleitung zum Einrichten und Details zu Anbietern finden Sie unter [Zahlungsgateways](/integrations/payments/overview).

## Verwandte Themen

- [Bankverbindungen](/integrations/banking/overview) — Verbinden Sie Ihre Bankkonten und verwalten Sie Transaktionsimporte
- [Zahlungsgateways](/integrations/payments/overview) — Richten Sie Online-Zahlungen für Ihre Rechnungen ein
- [Bank verbinden](/getting-started/connecting-your-bank) — Schritt-für-Schritt-Anleitung für Ihre erste Bankverbindung
- [Kontoauszüge importieren](/getting-started/importing-data) — Importieren Sie Transaktionen manuell, wenn eine direkte Verbindung nicht verfügbar ist
