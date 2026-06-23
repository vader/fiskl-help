---
title: "Zahlungsintegrationen"
description: "Verbinden Sie Stripe, PayPal oder GoCardless mit Fiskl, um Online-Zahlungen für Rechnungen zu akzeptieren und die Zahlungsabstimmung zu automatisieren."
keywords: ["payment integrations", "online payments", "Stripe", "PayPal", "GoCardless", "invoice payments", "direct debit"]
sidebar_position: 1
tags:
  - Integrations
  - Payments
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Dieser Abschnitt behandelt die Zahlungsintegrationen, die in Fiskl verfügbar sind. Verbinden Sie einen Zahlungsdienstleister, damit Kunden Rechnungen online bezahlen können und Zahlungsdaten automatisch mit Ihren Konten synchronisiert werden.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## So funktionieren Zahlungsintegrationen

Wenn Sie ein Zahlungs-Gateway verbinden, fügt Fiskl eine Zahlungsschaltfläche zu Ihren Rechnungen hinzu. Kunden wählen ihre bevorzugte Zahlungsmethode und führen die Zahlung auf der sicheren Seite des Dienstleisters durch. Fiskl erfasst die Zahlung und aktualisiert den Rechnungsstatus automatisch.

Sie können mehr als ein Gateway verbinden. Kunden sehen dann alle verfügbaren Optionen auf der Rechnung und wählen aus, welche sie verwenden möchten.

:::info
Fiskl erhebt keine zusätzlichen Gebühren auf die eigenen Transaktionsgebühren des Gateway-Dienstleisters.
:::

## Verfügbare Integrationen

### Stripe

Stripe unterstützt Kredit- und Debitkarten, digitale Geldbörsen (Apple Pay, Google Pay) und lokale Zahlungsmethoden wie iDEAL und Bancontact. Es eignet sich für Unternehmen, die Einmalzahlungen von Kunden weltweit akzeptieren.

[Stripe einrichten](/integrations/payments/stripe)

### PayPal

PayPal ermöglicht Kunden die Zahlung über ihr PayPal-Guthaben, ein verknüpftes Bankkonto oder eine Karte. Es ist weit verbreitet und erfordert kein Merchant-Konto für den Anfang.

[PayPal einrichten](/integrations/payments/paypal)

### GoCardless

GoCardless nutzt Lastschrift, um Zahlungen von den Bankkonten der Kunden einzuziehen. Es eignet sich besonders für wiederkehrende Abrechnungen, Retainer und Zahlungspläne und weist typischerweise niedrigere Transaktionsgebühren auf als die Kartenzahlung.

[GoCardless einrichten](/integrations/payments/gocardless)

## Auswahl eines Gateways

| | Stripe | PayPal | GoCardless |
|---|---|---|---|
| **Kartenzahlungen** | Ja | Ja | Nein |
| **Digitale Geldbörsen** | Apple Pay, Google Pay | PayPal Wallet | Nein |
| **Lastschrift** | Nein | Nein | Ja |
| **Wiederkehrende Zahlungen** | Über wiederkehrende Rechnungen | Über wiederkehrende Rechnungen | Automatisch |
| **Optimaler Einsatz** | Einmalzahlungen, internationale Kunden | Kunden, die PayPal bevorzugen | Wiederkehrende Abrechnungen, Retainer |

## Zahlungsoptionen auf Rechnungen konfigurieren

Nach dem Verbinden eines Gateways können Sie alle verbundenen Gateways automatisch auf jeder neuen Rechnung auswählen.

1. Navigieren Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen**
2. Wählen Sie die Registerkarte **Zahlungsmethoden**
3. Aktivieren Sie **Zahlungs-Gateways automatisch auswählen**
4. Wählen Sie **Speichern**

Wenn diese Option aktiviert ist, werden alle verbundenen Gateways auf jeder neuen Rechnung vorausgewählt. Sie können einzelne Gateways bei der Erstellung oder Bearbeitung einer Rechnung immer noch pro Rechnung aktivieren oder deaktivieren.

## Verwandte Themen

- [Auswahl eines Zahlungs-Gateways](/integrations/payments/choosing-a-payment-gateway) — Vergleichen Sie Gateways nach Gebühren, Zahlungsmethoden und regionaler Verfügbarkeit
- [Stripe-Integration](/integrations/payments/stripe) — Verbinden Sie Stripe, um Karten- und Zahlungen über digitale Geldbörsen zu akzeptieren
- [PayPal-Integration](/integrations/payments/paypal) — Verbinden Sie PayPal, um Zahlungen über PayPal-Konten und Karten zu akzeptieren
- [GoCardless-Integration](/integrations/payments/gocardless) — Verbinden Sie GoCardless für Lastschriften und wiederkehrende Zahlungserhebung
- [Rechnungen erstellen](/invoicing/creating-invoices) — Zahlungsoptionen beim Erstellen einer Rechnung hinzufügen
- [Wiederkehrende Rechnungen](/invoicing/create-recurring-invoices) — Automatisieren Sie die Abrechnung mit GoCardless
