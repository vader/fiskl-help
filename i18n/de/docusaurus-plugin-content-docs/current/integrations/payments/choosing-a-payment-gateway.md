---
title: "Auswahl eines Zahlungs-Gateways"
description: "Vergleichen Sie Stripe, PayPal und GoCardless, um das richtige Zahlungsgateway für Ihr Unternehmen zu finden – mit Übersicht über Gebühren, Zahlungsmethoden, Regionen und Anwendungsfälle."
keywords: ["payment gateway", "Stripe", "PayPal", "GoCardless", "transaction fees", "direct debit", "recurring payments", "online payments"]
sidebar_position: 2
tags:
  - Integrations
  - Payments
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Dieser Leitfaden hilft Ihnen, das richtige Zahlungs-Gateway für Ihr Unternehmen auszuwählen, indem er Zahlungsmethoden, Gebühren, regionale Verfügbarkeit und typische Anwendungsfälle vergleicht.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Funktionsweise von Zahlungs-Gateways

Wenn ein Kunde eine Zahlungsoption in Ihrer Rechnung auswählt, wird er zur sicheren Zahlungsseite des Gateways weitergeleitet. Das Gateway verarbeitet die Zahlung und überweist die Mittel nach einem Auszahlungsplan auf Ihr Bankkonto. Fiskl zeichnet die Zahlung auf und aktualisiert den Rechnungsstatus automatisch.

Keine Zahlungskartendaten werden durch Fiskl geleitet oder darin gespeichert. Alle Verarbeitungsvorgänge finden auf der eigenen Infrastruktur des Gateways statt.

## Zahlungsmethoden nach Gateway

Jedes Gateway unterstützt unterschiedliche Zahlungsarten für Kunden.

### Stripe

- Kredit- und Debitkarten (Visa, Mastercard, Amex)
- Apple Pay und Google Pay
- iDEAL (Niederlande)
- Bancontact (Belgien)

Stripe bietet die breiteste Palette an Zahlungsmethoden und eignet sich für Unternehmen mit internationalen Kunden oder solche, die Karten- und Digital-Wallet-Optionen anbieten möchten.

### PayPal

- PayPal-Guthaben
- Verknüpftes Bankkonto
- Kredit- und Debitkarten (verarbeitet durch PayPal)

PayPal ist weltweit bekannt und von Kunden vertraut. Es eignet sich für Unternehmen, deren Kunden bereits PayPal nutzen, oder für solche, die eine schnelle Einrichtung ohne Händlerkonto wünschen.

### GoCardless

- Lastschrift (30+ Länder)
- Instant Bank Pay über Open Banking (nur UK)

GoCardless zieht Zahlungen direkt von einem Kundenkonto ab, indem es ein autorisiertes Mandat nutzt. Es eignet sich für Unternehmen mit wiederkehrenden Abrechnungen, Retainern oder Zahlungsplänen und hat typischerweise niedrigere Gebühren als Kartenverarbeitung.

## Transaktionsgebühren

Die Gebühren variieren je nach Region, Kontotyp und Transaktionsvolumen. Die folgenden Zahlen sind richtwertbasiert. Überprüfen Sie die Website des Anbieters auf aktuelle Tarife in Ihrer Region.

| Gateway | Typische Gebühr | Hinweise |
|---|---|---|
| **Stripe** | 2,9% + Pauschalgebühr | Zusätzliche Gebühren für internationale Karten und Währungsumrechnung |
| **PayPal** | 2,9% + Pauschalgebühr | Zusätzliche Gebühren für internationale Transaktionen und Währungsumrechnung |
| **GoCardless** | 1% (begrenzt) | UK: begrenzt auf £2. EU: begrenzt auf €2. Niedriger als Kartenverarbeitung für höherwertige Rechnungen |

:::info
Fiskl erhebt keine zusätzlichen Gebühren für die eigenen Gebühren des Gateway-Anbieters.
:::

Für Unternehmen mit hohem Transaktionsvolumen bieten alle drei Anbieter benutzerdefinierte Preisgestaltung an. Kontaktieren Sie den Anbieter direkt, um Tarife zu verhandeln.

## Auswahl nach Zahlungstyp

### Einmalige Zahlungen

Stripe oder PayPal sind die bessere Wahl für einmalige Rechnungszahlungen.

- Verwenden Sie **Stripe** für maximale Zahlungsmethodenabdeckung, internationale Kunden oder Apple Pay und Google Pay-Unterstützung
- Verwenden Sie **PayPal**, wenn Ihre Kunden bereits PayPal nutzen oder Sie die schnellste Einrichtung wünschen

### Wiederkehrende Zahlungen

GoCardless ist die bessere Wahl für wiederkehrende Abrechnungen. Nach der Autorisierung eines Zahlungsmandats durch einen Kunden sammelt GoCardless jede Zahlung automatisch ein, ohne dass der Kunde erneut tätig werden muss. Dies reduziert verspätete Zahlungen und manuelle Nachverfolgung.

Stripe und PayPal können wiederkehrende Abrechnungen über Fiskls Funktion für wiederkehrende Rechnungen unterstützen, aber jede Einziehung hängt weiterhin davon ab, dass der Kunde jede Rechnung aktiv bezahlt.

### Beide Zahlungstypen

Sie können mehrere Gateways verbinden. Ein häufiges Setup ist Stripe oder PayPal für einmalige Zahlungen und GoCardless für wiederkehrende Kunden.

## Regionale Verfügbarkeit

### Vereinigtes Königreich

- **Stripe** — Vollständige Karten- und Digital-Wallet-Unterstützung. Unterstützt Bacs Direct Debit.
- **GoCardless** — Bacs Direct Debit mit niedrigeren begrenzten Gebühren. Instant Bank Pay (Open Banking) verfügbar.
- **PayPal** — Verfügbar und FCA-reguliert.

### Europäische Union

- **Stripe** — Paneuropäische Kartenunterstützung. iDEAL (Niederlande) und Bancontact (Belgien) verfügbar.
- **GoCardless** — SEPA-Lastschrift im gesamten Euroraum. Gebühren begrenzt auf €2.
- **PayPal** — In der gesamten EU verfügbar.

### Vereinigte Staaten

- **Stripe** — Umfassende Karten- und Digital-Wallet-Unterstützung. ACH-Banktransfers verfügbar.
- **GoCardless** — ACH Direct Debit verfügbar. Gebühren variieren.
- **PayPal** — Weit verbreitet. Geeignet für Kunden, die PayPal der Karteneingabe vorziehen.

### Naher Osten und Asien

- **Stripe** — In den meisten Ländern verfügbar. Überprüfen Sie [Stripes Verfügbarkeit nach Land](https://stripe.com/global) für Ihre Region.
- **PayPal** — In 200+ Ländern verfügbar. Am weitesten verbreitetes Gateway in dieser Region.
- **GoCardless** — Abdeckung ist stärker begrenzt. Überprüfen Sie [die von GoCardless unterstützten Länder](https://gocardless.com/direct-debit/countries/), bevor Sie eine Verbindung einrichten.

## Sicherheit und Compliance

Alle drei Gateways erfüllen die Sicherheitsstandards der Branche. Sie müssen die PCI-Compliance nicht direkt verwalten — jedes Gateway verwaltet dies auf seiner eigenen Infrastruktur.

| Gateway | Wichtigste Zertifizierungen |
|---|---|
| **Stripe** | PCI DSS Level 1, SOC 2 Type II, GDPR-konform, 3D Secure 2.0 |
| **PayPal** | PCI DSS-konform, GDPR-konform, FCA-reguliert (UK) |
| **GoCardless** | FCA-autorisiert (UK), PSD2-konform, GDPR-konform, Open Banking-zertifiziert |

## Häufig gestellte Fragen

<details>
<summary>Kann ich mehr als ein Gateway verbinden?</summary>

Ja. Verbinden Sie alle drei, falls erforderlich. Kunden sehen alle verbundenen Optionen in der Rechnung und wählen ihre Vorliebe. Sie können auch kontrollieren, welche Gateways standardmäßig in **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Zahlungsmethoden** angezeigt werden.

</details>

<details>
<summary>Wie schnell erhalte ich Gelder?</summary>

Die Auszahlungspläne variieren je nach Gateway und Region:

- **Stripe** — typischerweise zwei Arbeitstage nach Zahlung
- **PayPal** — typischerweise ein bis zwei Arbeitstage
- **GoCardless** — typischerweise zwei Arbeitstage nach Einziehung vom Kundenkonto

Überprüfen Sie Ihr Gateway-Dashboard für den genauen Plan für Ihr Konto.

</details>

<details>
<summary>Was passiert, wenn eine Zahlung fehlschlägt?</summary>

Fiskl aktualisiert den Rechnungsstatus automatisch. Bei Kartenabrechnungen (Stripe, PayPal) kann der Kunde sofort einen erneuten Versuch durchführen. Bei Lastschriftfehlern (GoCardless) versucht GoCardless die Einziehung basierend auf den Wiederholungseinstellungen in Ihrem GoCardless-Konto erneut.

</details>

## Verwandte Themen

- [Zahlungsintegrationen](/integrations/payments/overview) — Übersicht aller Zahlungsintegrationen in Fiskl
- [Stripe-Integration](/integrations/payments/stripe) — Verbinden Sie Stripe, um Karten- und Digital-Wallet-Zahlungen zu akzeptieren
- [PayPal-Integration](/integrations/payments/paypal) — Verbinden Sie PayPal, um Zahlungen über PayPal-Konten und Karten zu akzeptieren
- [GoCardless-Integration](/integrations/payments/gocardless) — Verbinden Sie GoCardless für Lastschrift und wiederkehrende Zahlungseinzugserfassung
- [Wiederkehrende Rechnungen](/invoicing/create-recurring-invoices) — Automatisieren Sie die Abrechnung mit wiederkehrenden Rechnungen
