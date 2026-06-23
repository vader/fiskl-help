---
title: "Rechnungsverwaltung"
description: "Verwalten Sie Rechnungen während ihres gesamten Lebenszyklus in Fiskl — bearbeiten Sie Entwürfe, senden Sie diese an Kunden, stornieren Sie diese mit Statusverfolgung und verwalten Sie bezahlte oder überfällige Rechnungen."
keywords: ["invoice management", "edit invoice", "cancel invoice", "invoice status", "paid invoice", "draft invoice", "sent invoice"]
sidebar_position: 3
tags:
  - Invoicing
  - Payments
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erläutert, wie Sie Rechnungen während ihres gesamten Lebenszyklus in Fiskl verwalten – vom Bearbeiten von Entwürfen bis zum Stornieren gesendeter Rechnungen und zur Verfolgung von Zahlungen.

Während Sie die Felder einer Rechnung ausfüllen, wird die Vorschau auf der linken Seite des Bildschirms in Echtzeit aktualisiert. Dies ermöglicht es Ihnen, genau zu sehen, wie Ihre Rechnung für Ihren Kunden aussieht, bevor Sie sie versenden.

Fiskl aktualisiert den Rechnungsstatus automatisch basierend auf dem Fälligkeitsdatum und den eingegangenen Zahlungen.

![Rechnungsverwaltungsbildschirm mit dem Rechnungsvorschau-Panel auf der linken Seite und den Bearbeitungsfeldern auf der rechten Seite](/img/invoice/invoice-management.jpg)

## Entwurfs-Rechnungen

Während sich eine Rechnung im Status **Entwurf** befindet, können Sie:

- Rechnungsdetails bearbeiten
- Einstellungen für die E-Mail-Zustellung konfigurieren
- Zahlungsmethoden überprüfen, aktualisieren oder erstellen
- Anhänge hinzufügen, die mit der Rechnung versendet werden
- Die zugehörige Marke ändern
- Überfälligkeitserinnerungen hinzufügen
- Verlauf und Zahlungen anzeigen

Entwurfs-Rechnungen haben keinen verfügbaren Freigabe-Link.

## Gesendete Rechnungen

Es gibt zwei Möglichkeiten, eine Rechnung als gesendet zu markieren:

- **Freigabe-Link generieren** — markiert die Rechnung als **Gesendet** und gibt Ihnen einen Link, den Sie manuell über Ihren bevorzugten Kanal wie eine Messaging-App oder E-Mail teilen können.
- **Per E-Mail versenden** — sendet die Rechnung direkt an Ihren Kunden und markiert sie automatisch als **Gesendet**.

Sobald eine Rechnung gesendet wurde, können Sie ihren Verlauf anzeigen, Zahlungen verfolgen, Zahlungsmethoden verwalten und Anhänge hinzufügen oder entfernen.

Falls Sie beim Versenden der Rechnung keine Überfälligkeitserinnerungen festgelegt haben, öffnen Sie die überfällige Rechnung, bearbeiten Sie die E-Mail wie erforderlich und wählen Sie **Erneut versenden**. Der Überfälligkeitsstatus wird automatisch in der E-Mail-Betreffzeile für Ihren Kunden angezeigt.

## Gesendete Rechnungen bearbeiten

Sie können Rechnungen nur im Status **Entwurf** direkt bearbeiten. So bearbeiten Sie eine gesendete Rechnung:

1. Öffnen Sie die Rechnung aus Ihrer Rechnungsliste
2. Wählen Sie den aktuellen Status aus und ändern Sie ihn zu **Entwurf**
3. Nehmen Sie Ihre Änderungen vor
4. Wählen Sie **Speichern**

Sie können auch Zahlungsmethoden und Gateways hinzufügen oder entfernen, während Sie eine gesendete Rechnung bearbeiten.

:::caution
Das Bearbeiten einer gesendeten Rechnung deaktiviert vorübergehend vorhandene Zahlungen. Diese werden normalerweise wiederhergestellt, wenn Sie speichern. Wenn Sie Rechnungsdaten so ändern, dass Zahlungsdaten vor dem Rechnungsdatum liegen, werden Zahlungen möglicherweise nicht ordnungsgemäß wiederhergestellt und Überfälligkeitserinnerungen könnten ausgelöst werden.
:::

## Bezahlte oder teilweise bezahlte Rechnungen bearbeiten

Wenn Ihr Kunde über ein Zahlungs-Gateway bezahlt, markiert Fiskl die Rechnung automatisch als **Bezahlt** oder **Teilweise**. Wenn Sie eine manuelle Zahlungsmethode verwendet haben, fügen Sie die Zahlung manuell hinzu – nach dem Speichern aktualisiert Fiskl den Status automatisch.

So bearbeiten Sie eine bezahlte oder teilweise bezahlte Rechnung:

1. Wenn die Zahlung in der Buchhaltung abgeglichen wurde, gehen Sie zu **Buchhaltung** und heben Sie zunächst den Abgleich der Transaktion auf
2. Öffnen Sie die Rechnung und ändern Sie ihren Status zu **Entwurf**
3. Nehmen Sie Ihre Änderungen vor und speichern Sie sie

Sobald die Rechnung erneut versendet oder als bezahlt markiert wird, wird Fiskl sie automatisch in der Buchhaltung abgleichen.

## Rechnungen stornieren

Wenn Sie eine Rechnung stornieren müssen, berücksichtigen Sie Ihre Rechnungsnummernvergabe und alle gesetzlichen Anforderungen in Ihrer Region. Fiskl bietet drei Optionen.

### Option 1: Als abgelehnt markieren (empfohlen)

Das Ändern des Status zu **Abgelehnt** ist der empfohlene Ansatz für die meisten Situationen.

1. Öffnen Sie die Rechnung aus Ihrer Rechnungsliste
2. Wählen Sie den aktuellen Status aus
3. Wählen Sie **Abgelehnt** aus der Dropdown-Liste

Diese Option behält einen Datensatz der Rechnung bei, bewahrt Ihre Rechnungsnummernvergabe und erfüllt gesetzliche Anforderungen in vielen Ländern.

### Option 2: In Entwurf zurücksetzen

Verwenden Sie diese Option, wenn Sie Änderungen vornehmen müssen, bevor Sie erneut versenden.

1. Öffnen Sie die Rechnung aus Ihrer Rechnungsliste
2. Wählen Sie den aktuellen Status aus
3. Wählen Sie **Entwurf** aus der Dropdown-Liste

### Option 3: Rechnung löschen

Löschen Sie eine Rechnung nur im äußersten Notfall.

1. Suchen Sie die Rechnung in Ihrer Rechnungsliste
2. Wählen Sie das Dropdown-Menü auf der rechten Seite aus
3. Wählen Sie **Löschen**

:::warning
Das Löschen einer Rechnung entfernt sie dauerhaft aus Ihren Unterlagen. Dies kann zu Lücken in Ihrer Rechnungsnummernvergabe führen und erfüllt möglicherweise keine Aufbewahrungsanforderungen in einigen Ländern.
:::

:::tip
Wenden Sie sich an Ihren Buchhalter oder die zuständige Steuerbehörde, um zu erfahren, wie Sie stornierte Rechnungen in Ihrer Region korrekt behandeln.
:::

## Rechnungsstatus in Massenform ändern

Sie können den Status einer oder mehrerer Rechnungen direkt aus der Rechnungsliste ändern, ohne jede einzelne zu öffnen.

1. Wählen Sie eine oder mehrere Rechnungen aus der Liste aus
2. Wählen Sie **Status**
3. Wählen Sie den neuen Status aus der Dropdown-Liste

## Weitere Aktionen

Aus der Rechnungsliste heraus können Sie Rechnungen drucken, duplizieren oder löschen. Das Löschen ist nur in der Rechnungslisten-Ansicht verfügbar.

## Häufige Probleme

<details>
<summary>Vorhandene Zahlungen wurden nach dem Bearbeiten einer gesendeten Rechnung nicht wiederhergestellt</summary>

Dies kann vorkommen, wenn Sie die Rechnungsdaten so geändert haben, dass eines oder mehrere Zahlungsdaten vor dem neuen Rechnungsdatum liegen. Fiskl kann Zahlungen in dieser Situation nicht wiederherstellen.

Gehen Sie wie folgt vor, um das Problem zu beheben:

1. Setzen Sie die Rechnung auf **Entwurf** zurück
2. Korrigieren Sie das Rechnungsdatum so, dass es vor allen Zahlungsdaten liegt
3. Speichern Sie die Rechnung

Falls das Problem weiterhin besteht, kontaktieren Sie den Fiskl-Support.

</details>

<details>
<summary>Ich kann eine bezahlte Rechnung nicht bearbeiten – die Option zum Ändern des Status zu „Entwurf" ist ausgegraut</summary>

Dies bedeutet normalerweise, dass die Zahlung einer Transaktion in der Buchhaltung zugeordnet wurde. Sie müssen zunächst die Zuordnung aufheben.

1. Gehen Sie zu **Buchhaltung**
2. Suchen Sie die zugeordnete Transaktion und heben Sie die Zuordnung auf
3. Kehren Sie zur Rechnung zurück und ändern Sie den Status zu **Entwurf**

</details>

## Verwandte Themen

- [Rechnungen erstellen](creating-invoices.md) — Wie Sie eine neue Rechnung erstellen und konfigurieren
- [Rechnungen versenden](sending-invoices.md) — Optionen für die Zustellung von Rechnungen an Ihre Kunden
- [Rechnungszahlungspläne](invoice-payment-schedules.md) — Richten Sie Zahlungspläne für große Rechnungen ein
- [Zahlungen – Stripe-Integration](../integrations/payments/stripe-integration.md) — Verbinden Sie Stripe, um Kartenzahlungen zu akzeptieren
- [Buchhaltungsübersicht](../accounting/overview.md) — Wie Fiskl den Transaktionsabgleich und die Abstimmung durchführt
