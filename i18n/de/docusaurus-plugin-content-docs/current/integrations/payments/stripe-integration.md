---
title: "Stripe"
description: "Verbinden Sie Stripe mit Fiskl, um Kreditkarten, Debitkarten, Google Pay, Apple Pay, iDEAL und Bancontact auf Ihren Rechnungen zu akzeptieren."
keywords: ["Stripe", "Stripe integration", "payment gateway", "online payments", "Fiskl payments", "iDEAL", "Bancontact"]
sidebar_position: 1
slug: /integrations/payments/stripe
tags:
  - Integrations
  - Payment gateways
  - Stripe
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie Stripe mit Fiskl verbinden, damit Ihre Kunden Rechnungen online bezahlen können.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Vorteile

Durch die Verbindung mit Stripe erhalten Sie Zugang zu einer Reihe von Zahlungsoptionen für Ihre Kunden:

- Kreditkarten- und Debitkartenzahlungen
- Google Pay und Apple Pay (automatisch aktiviert)
- iDEAL für Unternehmen in den Niederlanden
- Bancontact für Unternehmen in Belgien
- Schnelle Auszahlungen direkt auf Ihr Bankkonto

## Stripe verbinden

Sie können ein neues Stripe-Konto erstellen oder ein bestehendes Konto verbinden.

### Neues Stripe-Konto erstellen

1. Gehen Sie zu **Integrationen** im linken Menü
2. Wählen Sie **Mit Stripe verbinden**
3. Geben Sie Ihre E-Mail-Adresse ein
4. Folgen Sie den Anweisungen in Stripe, um die Kontoeinrichtung abzuschließen

:::info
Neue Stripe-Konten erfordern KYC-Verifizierung, bevor Sie Zahlungen akzeptieren können. Überprüfen Sie den Status in Ihrem Stripe-Dashboard oder auf der Seite **Integrationen** in Fiskl.
:::

### Bestehendes Stripe-Konto verbinden

1. Gehen Sie zu **Integrationen** im linken Menü
2. Wählen Sie **Mit Stripe verbinden**
3. Melden Sie sich bei Ihrem Stripe-Konto an
4. Wählen Sie das Konto aus, das Sie mit Fiskl verknüpfen möchten
5. Fiskl leitet Sie nach der Autorisierung zurück

## Stripe auf Rechnungen verwenden

Nach der Verbindung erscheint Stripe als Zahlungsoption auf allen neuen Rechnungen.

Verbundene Zahlungsgateways werden standardmäßig auf jeder Rechnung ausgewählt. Um diese Standardeinstellung zu ändern, gehen Sie zu **Einstellungen** > **Rechnung & Angebot Einstellungen**.

Sie können auch zwischen Zahlungsgateways wechseln, wenn Sie eine einzelne Rechnung erstellen.

## Zusätzliche Zahlungsmethoden aktivieren

### Google Pay und Apple Pay

Google Pay und Apple Pay sind automatisch verfügbar, wenn Sie Stripe verbinden. Ihre Kunden sehen diese als Zahlungsoptionen, wenn sie Ihre Rechnung anzeigen.

### iDEAL (Niederlande)

Wenn Ihr Unternehmen in den Niederlanden ansässig ist:

1. Verbinden Sie Ihr Stripe-Konto
2. Gehen Sie zu **Integrationen** und wählen Sie **iDEAL aktivieren**
3. iDEAL erscheint als Zahlungsoption auf neuen Rechnungen

### Bancontact (Belgien)

Wenn Ihr Unternehmen in Belgien ansässig ist:

1. Verbinden Sie Ihr Stripe-Konto
2. Gehen Sie zu **Integrationen** und wählen Sie **Bancontact aktivieren**
3. Bancontact erscheint als Zahlungsoption auf neuen Rechnungen

## Zahlungsgateway entfernen

Um ein Zahlungsgateway aus Ihren Rechnungen zu entfernen, gehen Sie zu **Integrationen** und wählen Sie das Löschsymbol neben dem verbundenen Gateway.

## Stripe trennen

Es gibt zwei Möglichkeiten, Stripe von Fiskl zu trennen:

- Gehen Sie in Fiskl zu **Integrationen** und wählen Sie das Löschsymbol neben dem verbundenen Stripe-Konto
- Folgen Sie in Stripe der [Stripe-Anleitung zum Trennen einer Third-Party-Plattform](https://support.stripe.com/questions/disconnect-your-stripe-account-from-a-connected-third-party-platform)

## Häufig gestellte Fragen

<details>
<summary>Mein Stripe-Konto ist verbunden, akzeptiert aber keine Zahlungen</summary>

Stripe erfordert KYC-Verifizierung, bevor Live-Zahlungen verarbeitet werden. Überprüfen Sie Ihren Verifizierungsstatus in Ihrem Stripe-Dashboard. Bis die Verifizierung abgeschlossen ist, befindet sich das Konto nur im Testmodus.

</details>

<details>
<summary>iDEAL oder Bancontact wird auf meinen Rechnungen nicht angezeigt</summary>

Diese Methoden müssen nach der Verbindung mit Stripe separat aktiviert werden. Gehen Sie zu **Integrationen**, bestätigen Sie, dass Ihr Stripe-Konto verbunden ist, und wählen Sie dann **iDEAL aktivieren** oder **Bancontact aktivieren**.

</details>

## Verwandte Themen

- [Zahlungsintegrationen](/integrations/payments/overview) — Übersicht über alle in Fiskl verfügbaren Zahlungsgateways
- [GoCardless](/integrations/payments/gocardless) — Akzeptieren Sie Lastschriftzahlungen über GoCardless
- [PayPal](/integrations/payments/paypal) — Akzeptieren Sie Zahlungen über PayPal
- [Rechnung & Angebot Einstellungen](/settings/invoice-quotes-settings) — Konfigurieren Sie Standard-Zahlungsmethoden und das Verhalten von Rechnungen
