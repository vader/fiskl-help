---
title: "GoCardless-Integration"
description: "Verbinden Sie GoCardless mit Fiskl, um Lastschrift- und Instant Bank Pay-Zahlungen für Rechnungen einzuziehen. Automatisieren Sie wiederkehrende Zahlungen und reduzieren Sie verspätete Zahlungen."
keywords: ["GoCardless", "direct debit", "automated payments", "payment integration", "recurring invoices", "Instant Bank Pay"]
sidebar_position: 2
slug: /integrations/payments/gocardless
tags:
  - Integrations
  - Payments
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erläutert, wie Sie GoCardless mit Fiskl verbinden, Zahlungen auf Rechnungen einziehen und die Integration verwalten.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

Sie benötigen ein aktives GoCardless-Konto, bevor Sie eine Verbindung herstellen. Wenn Sie noch keins haben, können Sie es während des Verbindungsprozesses in Fiskl erstellen.

:::info
Die Genehmigung des GoCardless-Kontos erfolgt nicht sofort. Geben Sie GoCardless Zeit, Ihre Anwendung zu überprüfen, bevor Sie Zahlungen einziehen können.
:::

## Vorteile

Mit der Verbindung von GoCardless zu Fiskl können Sie:

- Direktzahlungsaufträge auf wiederkehrenden Rechnungen und Zahlungsplänen einziehen
- Zahlungen in über 30 Ländern und mehreren Währungen akzeptieren
- Verspätete Zahlungen durch automatische Einzüge reduzieren
- In der Währung Ihres Kunden einziehen und in Ihrer eigenen abrechnen

GoCardless eignet sich am besten für Kunden mit laufenden Beziehungen – zum Beispiel Beratung oder professionelle Dienstleistungen. Es ist weniger geeignet für einmalige, hochwertige oder sofortabwicklungstransaktionen.

## Zahlungsarten

GoCardless bietet in Fiskl zwei Zahlungsarten an.

**Direktzahlungsauftrag** – für wiederkehrende oder einmalige Zahlungen:

1. Erstellen Sie eine Rechnung in Fiskl und wählen Sie GoCardless als Zahlungsmethode.
2. Ihr Kunde füllt das Bankbelastungsautorisierungsformular bei seiner ersten Zahlung aus.
3. Fiskl benachrichtigt Sie, wenn die Genehmigung der Kundenermächtigung erteilt wurde.
4. Nachfolgende Rechnungen unter derselben Ermächtigung werden automatisch eingezogen.

**Instant Bank Pay** (nur Großbritannien) – verwendet Open Banking für sofortige Banktransfers:

- Verfügbar neben Direktzahlungsauftrag für britische Kunden.
- Geeignet für erste Zahlungen auf wiederkehrenden Rechnungen oder Zahlungsplänen.
- Nachfolgende Zahlungen verwenden die etablierte Direktzahlungsauftrag-Ermächtigung.

## GoCardless mit Fiskl verbinden

1. Gehen Sie im linken Menü zu **Integrationen**.
2. Wählen Sie **Mit GoCardless verbinden**.
3. Füllen Sie das GoCardless-Kontoaktivierungsformular aus, oder melden Sie sich bei Ihrem bestehenden Konto an.
4. Warten Sie auf die Genehmigung Ihres Kontos durch GoCardless. Fiskl benachrichtigt Sie über alle Statusänderungen.

## Zahlungszeitpunkte und Limits

Gelder werden in der Regel zwei Arbeitstage nach dem Einzug ausbezahlt. Die Transaktionslimits variieren je nach Land – zum Beispiel £5.000 für Großbritannien und $5.000 für die USA.

Sie können Ihre geschätzte Auszahlung in Ihrem GoCardless-Dashboard einsehen. Fiskl verbindet sich direkt mit der relevanten Zahlung innerhalb der App.

## GoCardless trennen

Es gibt zwei Möglichkeiten, die Integration zu entfernen:

- Gehen Sie in Fiskl zu **Integrationen** und wählen Sie das Löschsymbol neben der Aktionsschaltfläche auf der GoCardless-Karte.
- Trennen Sie in GoCardless Fiskl in Ihren GoCardless-Kontoeinstellungen.

## Häufige Probleme

<details>
<summary>Mein Kunde hat das Zahlungsautorisierungsformular nicht erhalten</summary>

Überprüfen Sie, dass die Rechnung erfolgreich versendet wurde und die E-Mail-Adresse des Kunden korrekt ist. Sie können die Rechnung von **Rechnungsstellung** > **Rechnungen** erneut versenden. Wenn das Problem weiterhin besteht, bitten Sie den Kunden, seinen Spam-Ordner zu überprüfen.

</details>

<details>
<summary>Mein GoCardless-Konto ist noch nicht genehmigt</summary>

GoCardless überprüft neue Konten, bevor es die Zahlungseinziehung zulässt. Sie erhalten eine Benachrichtigung, sobald Ihr Konto genehmigt ist. Wenden Sie sich an den GoCardless-Support, wenn die Genehmigung länger als erwartet dauert.

</details>

## Häufig gestellte Fragen

### Muss mein Kunde jede Zahlung autorisieren?

Nein. Ihr Kunde autorisiert die Ermächtigung einmalig bei seiner ersten Zahlung. Alle nachfolgenden Rechnungen unter derselben Ermächtigung werden automatisch eingezogen.

### Welche Währungen unterstützt GoCardless?

GoCardless unterstützt GBP, EUR, USD, SEK, DKK, AUD, NZD und CAD.

### Welche Gebühren berechnet GoCardless?

Unter [GoCardless-Preisgestaltung](https://gocardless.com/pricing/) finden Sie aktuelle Gebühreninformationen. Fiskl erhebt keine zusätzlichen Gebühren neben den GoCardless-Gebühren.

:::tip
Verwenden Sie den GoCardless-Preisrechner, um Ihre Gebührenstruktur zu verstehen. Rechnungen über $2.000 können einer zusätzlichen Gebühr unterliegen.
:::

Weitere Informationen zu internationalen Zahlungen finden Sie auf der Seite [GoCardless-Auslandszahlungen](https://gocardless.com/international-payments).

## Verwandte Themen

- [Zahlungsintegrationen](/integrations/payments/overview) – Übersicht aller in Fiskl verfügbaren Zahlungsoptionen
- [Stripe-Integration](/integrations/payments/stripe) – Verbinden Sie Stripe für Kartenzahlungen auf Rechnungen
- [PayPal-Integration](/integrations/payments/paypal) – Verbinden Sie PayPal für Online-Zahlungen auf Rechnungen
- [Rechnungen erstellen](/invoicing/creating-invoices) – Fügen Sie eine Zahlungsmethode beim Erstellen einer Rechnung hinzu
- [Wiederkehrende Rechnungen](/invoicing/create-recurring-invoices) – Automatisieren Sie die Rechnungserstellung für laufende Kunden
