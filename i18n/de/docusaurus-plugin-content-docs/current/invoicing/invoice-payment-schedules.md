---
title: "Einrichten von Rechnungszahlungsplänen"
description: "Erfahren Sie, wie Sie eine einzelne Rechnung in mehrere geplante Zahlungen mit bis zu 12 Raten aufteilen, indem Sie Beträge oder Prozentsätze verwenden."
keywords: ["payment schedule", "invoice instalments", "split payments", "invoice payment plan", "deposit", "payment terms"]
sidebar_position: 4
---

Dieses Handbuch erklärt, wie Sie Zahlungspläne für Rechnungen in Fiskl einrichten, um eine einzelne Rechnung in mehrere Ratenzahlungen für Ihre Kunden aufzuteilen.

## Was ist ein Zahlungsplan?

Ein Zahlungsplan teilt eine einzelne Rechnung in zwei bis 12 geplante Zahlungen auf. Jede Zahlung hat ein eigenes Fälligkeitsdatum und einen eigenen Betrag, wodurch Ihr Kunde einen klaren Plan für die zeitliche Zahlung erhält. Zahlungspläne erweitern die Anzahlungsfunktion — anstatt einer Vorauszahlung definieren Sie mehrere Zahlungen für die gleiche Rechnung.

:::info
Zahlungspläne gelten für eine einzelne Rechnung mit mehreren Zahlungen. Falls Sie für jede Abrechnungsperiode eine separate Rechnung benötigen, verwenden Sie stattdessen [wiederkehrende Rechnungen](/invoicing/recurring-invoice-management).
:::

## Zahlungsplan vs. wiederkehrende Rechnung

Bevor Sie einen Zahlungsplan erstellen, überlegen Sie, welche Option Ihren Anforderungen entspricht.

| Funktion | Zahlungsplan | Wiederkehrende Rechnung |
|---|---|---|
| Anzahl der Rechnungen | Eine Rechnung | Eine Rechnung pro Periode |
| Zahlungen | Zwei bis 12 Raten | Eine Zahlung pro Rechnung |
| Am besten geeignet für | Kurzfristige Ratenzahlungspläne | Laufende Abonnements oder Retainer |

## Zahlungsplan hinzufügen

So fügen Sie beim Erstellen oder Bearbeiten einer Rechnung einen Zahlungsplan hinzu:

1. **Öffnen Sie die Rechnung**

   Erstellen Sie eine neue Rechnung oder öffnen Sie einen vorhandenen Entwurf. Gehen Sie in der linken Seitenleiste zu **Invoicing** und wählen Sie **New Invoice** oder wählen Sie einen vorhandenen Entwurf.

2. **Erweitern Sie Zahlungsbedingungen**

   Scrollen Sie zum Abschnitt **Payment Terms** und erweitern Sie diesen. Sie sehen Optionen für **Deposit**, **Discount** und **Payment Schedule**.

3. **Wählen Sie Zahlungsplan**

   Wählen Sie **Payment Schedule**, um die Ratenkonfiguration anzuzeigen.

4. **Legen Sie die Anzahl der Zahlungen fest**

   Wählen Sie zwischen zwei und 12 Zahlungen. Fiskl verteilt den Rechnungsbetrag automatisch gleichmäßig auf jede Rate.

5. **Passen Sie Beträge oder Prozentsätze an**

   Sie können jede Zahlung als Festbetrag oder als Prozentsatz des Rechnungsbetrags definieren. Wenn Sie eine Rate manuell bearbeiten, wechselt Fiskl in den manuellen Modus und Sie müssen sicherstellen, dass die Zahlungen dem Rechnungsbetrag entsprechen. Fiskl warnt Sie, wenn der Gesamtbetrag nicht stimmt, und verhindert das Speichern, bis er korrekt ist.

6. **Legen Sie Zahlungsdaten fest**

   Weisen Sie jeder Rate ein Fälligkeitsdatum zu. Das letzte Zahlungsdatum wird zum Fälligkeitsdatum der Rechnung.

7. **Wählen Sie Speichern**

   Wählen Sie **Save**, um den Zahlungsplan auf Ihre Rechnung anzuwenden.

## So sehen Kunden Zahlungspläne

Wenn ein Kunde die Rechnung öffnet, sieht er nur die derzeit fälligen Zahlungen. Wenn ein Kunde die Rechnung nach einem oder mehreren Zahlungsterminen öffnet, werden diese überfälligen Beträge zu einer einzelnen fälligen Zahlung zusammengefasst. Der Kunde hat auch die Möglichkeit, alle verbleibenden Raten auf einmal zu bezahlen.

Wenn beispielsweise eine Rechnung drei geplante Zahlungen hat und der Kunde sie nach dem zweiten Zahlungsdatum öffnet, sieht er einen kombinierten Betrag für die erste und zweite Rate.

:::tip
Verwenden Sie prozentuale Zahlungen, wenn sich der Rechnungsbetrag möglicherweise ändern kann, bevor Sie ihn abschließen. Wechseln Sie zu Festbeträgen, wenn Sie präzise Kontrolle über jede Rate benötigen.
:::

## Verwandte Themen

- [Erstellen von Rechnungen](/invoicing/creating-invoices) — Erfahren Sie, wie Sie Rechnungen erstellen und versenden
- [Rechnungsanzahlungen](/invoicing/creating-invoices) — Sammeln Sie Vorauszahlungen vor der Leistungserbringung ein
- [Wiederkehrende Rechnungen](/settings/invoice-template-brands-settings) — Automatisieren Sie wiederholte Abrechnung mit separaten Rechnungen
