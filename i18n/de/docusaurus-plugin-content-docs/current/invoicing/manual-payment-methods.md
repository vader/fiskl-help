---
title: "Manuelle Zahlungsmethoden"
description: "Richten Sie manuelle Zahlungsmethoden wie Banküberweisung oder Scheck auf Fiskl-Rechnungen ein, mit benutzerdefinierten Anweisungen, die für Kunden auf Rechnungen und Zahlungsseiten sichtbar sind."
keywords: ["manual payment", "bank transfer", "payment instructions", "cheque", "payment methods", "invoice payment"]
sidebar_position: 3
tags:
  - Invoicing
  - Payments
  - Settings
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Dieses Handbuch erläutert die Einrichtung manueller Zahlungsmethoden in Fiskl. Manuelle Zahlungsmethoden geben Kunden Anweisungen zur Zahlung außerhalb integrierter Gateways – wie Banküberweisung oder Scheck – und werden auf Rechnungen und Zahlungsseiten neben verbundenen Zahlungs-Gateways angezeigt.

## Bevor Sie beginnen

- Wenn Sie Zahlungs-Gateways wie Stripe oder GoCardless verwenden, bestätigen Sie, dass diese in **Integrations** im linken Menü verbunden sind. Manuelle Zahlungsmethoden werden auf der Rechnung neben ihnen angezeigt – sie ersetzen diese nicht.
- Um verfügbare Gateways beim Erstellen neuer Rechnungen automatisch anzuhängen, aktivieren Sie **Auto-select payment gateways** in **Einstellungen** > **Rechnung und Angebot Einstellungen** > **Manuelle Zahlungsmethoden**.

## Eine manuelle Zahlungsmethode hinzufügen

1. Gehen Sie zu **Einstellungen** > **Rechnung und Angebot Einstellungen** > **Manuelle Zahlungsmethoden**.
2. Wählen Sie **+ Neue Zahlungsmethode** aus.
3. Geben Sie einen aussagekräftigen Namen ein, den Ihr Kunde auf der Rechnung sieht – beispielsweise Banküberweisung – Chase ACH.
4. Fügen Sie klare Zahlungsanweisungen im Feld **Notizen** hinzu.
5. Fügen Sie relevante Kontodaten mit Name-Wert-Paaren wie Kontonummer, Bankleitzahl oder Bankname hinzu. Verwenden Sie die bereitgestellten Feldplatzhalter als Richtlinie.
6. Wählen Sie **Speichern** aus.

:::tip
Verwenden Sie einfaches HTML, um Ihre Zahlungsanweisungen für bessere Lesbarkeit zu formatieren. Unterstützte Tags sind `<b>`, `<i>`, `<u>`, `<p>` und `<br>`.

Beispiel:
```
<b>Bankname:</b> Example Bank<br>
<i>Bitte geben Sie Ihre Rechnungsnummer als Zahlungsreferenz an.</i>
```

Wählen Sie **Vorschau** aus, um zu sehen, wie Ihre Anweisungen den Kunden vor dem Speichern angezeigt werden.
:::

## Eine Zahlungsmethode bearbeiten oder löschen

1. Gehen Sie zu **Einstellungen** > **Rechnung und Angebot Einstellungen** > **Manuelle Zahlungsmethoden**.
2. Wählen Sie das Symbol **Bearbeiten** auf der Zahlungsmethodenkarte aus, um den Namen, die Notizen oder Details zu aktualisieren, und wählen Sie dann **Speichern** aus.
3. Wählen Sie das Symbol **Löschen** auf der Zahlungsmethodenkarte aus, um die Zahlungsmethode dauerhaft zu entfernen.

:::warning
Das Löschen einer Zahlungsmethode entfernt diese aus allen zukünftigen Rechnungen. Sie wird nicht mehr auf neuen Rechnungen oder Zahlungsseiten angezeigt.
:::

## Häufige Probleme

<details>
<summary>Meine manuelle Zahlungsmethode wird nicht auf der Rechnung angezeigt</summary>

Manuelle Zahlungsmethoden müssen für jede Rechnung ausgewählt werden, es sei denn, Sie haben **Auto-select payment gateways** in **Einstellungen** > **Rechnung und Angebot Einstellungen** aktiviert. Öffnen Sie die Rechnung, wählen Sie das Feld **Zahlungsmethoden** aus, und bestätigen Sie, dass Ihre manuelle Methode ausgewählt ist.

</details>

<details>
<summary>Mein Kunde kann die Zahlungsanweisungen nicht sehen</summary>

Zahlungsanweisungen werden nur angezeigt, wenn der Kunde die Rechnung anzeigt oder die Zahlungsseite öffnet. Bestätigen Sie, dass Sie Anweisungen im Feld **Notizen** eingegeben haben und beim Einrichten der Zahlungsmethode Kontodaten hinzugefügt haben. Wählen Sie **Vorschau** in den Zahlungsmethodeneinstellungen aus, um zu überprüfen, wie die Anweisungen angezeigt werden.

</details>

## Verwandte Themen

- [Zahlungs-Gateways](../integrations/payments/overview.md) – Verbinden Sie Stripe, GoCardless und andere integrierte Gateways, um Online-Zahlungen zu akzeptieren.
- [Rechnungen erstellen](../invoicing/creating-invoices.md) – Fügen Sie beim Erstellen oder Bearbeiten von Rechnungen Zahlungsmethoden hinzu.
- [Rechnung und Angebot Einstellungen](../settings/invoice-quotes-settings.md) – Konfigurieren Sie das Standard-Rechnungsverhalten, einschließlich Zahlungsoptionen.
