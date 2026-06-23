---
title: "PayPal-Integration"
description: "Verbinden Sie PayPal mit Fiskl, um Online-Zahlungen auf Ihren Rechnungen zu akzeptieren. Richten Sie die Integration in wenigen Minuten ein und bieten Sie Kunden eine vertraute Zahlungsmethode."
keywords: ["PayPal integration", "Fiskl PayPal", "accept PayPal payments", "invoice payment methods", "online payments"]
sidebar_position: 3
slug: /integrations/payments/paypal
tags:
  - Integrations
  - Payment gateways
  - PayPal
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie Ihr PayPal-Konto mit Fiskl verbinden und PayPal als Zahlungsmethode auf Ihren Rechnungen anbieten.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

Sie benötigen ein aktives PayPal-Konto mit einer bestätigten E-Mail-Adresse. Wenn Sie noch kein Konto haben, besuchen Sie [paypal.com](https://www.paypal.com) und wählen Sie **Registrieren**, bevor Sie fortfahren.

## PayPal mit Fiskl verbinden

1. Gehen Sie zu **Integrationen** im linken Menü
2. Wählen Sie **Zahlungsintegrationen**
3. Wählen Sie **Verbinden** neben PayPal
4. Geben Sie die E-Mail-Adresse ein, die mit Ihrem PayPal-Konto verknüpft ist
5. Wählen Sie **Speichern**, um die Verbindung abzuschließen

:::tip
Verwenden Sie die E-Mail-Adresse, die mit Ihrem primären PayPal-Geschäftskonto verknüpft ist, um sicherzustellen, dass Zahlungen korrekt weitergeleitet werden.
:::

## PayPal auf Rechnungen verwenden

Nach der Verbindung wird PayPal als Zahlungsoption auf jeder Rechnung angezeigt. Schalten Sie es ein, um es für diese Rechnung zu aktivieren.

:::info
Um alle verbundenen Zahlungsgateways standardmäßig für jede neue Rechnung einzuschalten, aktivieren Sie dies unter **Einstellungen** > **Rechnungs- und Angebotseinstellungen**.
:::

## PayPal trennen

1. Gehen Sie zu **Integrationen** im linken Menü
2. Wählen Sie **Zahlungsintegrationen**
3. Wählen Sie **Trennen** neben PayPal

Das Trennen entfernt PayPal als Zahlungsoption aus zukünftigen Rechnungen. Es hat keine Auswirkungen auf bereits versendete Rechnungen oder erfasste Zahlungen.

## Häufige Probleme

<details>
<summary>PayPal-Zahlungen werden auf Rechnungen nicht angezeigt</summary>

Bestätigen Sie, dass die Integration unter **Integrationen** > **Zahlungsintegrationen** aktiv ist. Wenn PayPal als verbunden angezeigt wird, aber nicht auf einer bestimmten Rechnung angezeigt wird, überprüfen Sie, ob Zahlungsgateways für diese Rechnung in **Rechnungs- und Angebotseinstellungen** manuell angepasst wurden.

</details>

<details>
<summary>Verbindung während des Setup fehlgeschlagen</summary>

Stellen Sie sicher, dass die eingegebene E-Mail-Adresse genau mit Ihrem PayPal-Konto übereinstimmt. PayPal-Konten müssen aktiv und in gutem Zustand sein. Wenn das Problem weiterhin besteht, trennen Sie die Integration und verbinden Sie sie erneut.

</details>

## Verwandte Themen

- [Zahlungsintegrationen](/integrations/payments/overview) — Übersicht aller Zahlungsgateways in Fiskl
- [Stripe-Integration](/integrations/payments/stripe) — Verbinden Sie Stripe, um Kartenzahlungen zu akzeptieren
- [GoCardless-Integration](/integrations/payments/gocardless) — Richten Sie Lastschriftzahlungen über GoCardless ein
- [Rechnungs- und Angebotseinstellungen](/settings/invoice-quotes-settings) — Verwalten Sie standardmäßige Zahlungsgateways für Rechnungen
