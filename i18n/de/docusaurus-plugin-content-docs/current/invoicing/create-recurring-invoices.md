---
title: "Erstellen Sie wiederkehrende Rechnungen"
description: "Richten Sie wiederkehrende Rechnungen in Fiskl ein, um Abrechnungspläne zu automatisieren, Rechnungen automatisch zu versenden und nicht abgerechnete Zeit, Kilometerstand und Ausgaben einzubeziehen."
keywords: ["recurring invoices", "automated billing", "invoice schedule", "auto-send invoice", "recurring billing", "Fiskl invoicing"]
sidebar_position: 5
tags:
  - Invoicing
  - Recurring
  - Automation
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Wiederkehrende Rechnungen ermöglichen es Ihnen, die Rechnungsstellung für Kunden zu automatisieren, denen Sie regelmäßig Rechnungen ausstellen. Sie richten einen Plan einmal ein, und Fiskl erstellt und versendet die Rechnungen für Sie – reduziert manuelle Arbeit und hält Ihre Kapitalflussrechnung konsistent.

## Vor dem Start

- Stellen Sie sicher, dass der Kunde, dem Sie eine Rechnung ausstellen möchten, in Fiskl vorhanden ist. Siehe [Kunden](../clients-vendors/clients.md) für Setupanweisungen.
- Wenn Sie beabsichtigen, unbezahlte Zeit, Kilometerstand oder Ausgaben einzubeziehen, erfassen Sie diese Einträge vor der Erstellung der wiederkehrenden Rechnung.
- Um eine wiederverwendbare Produkt- oder Servicevorlage mit Platzhaltern zu verwenden, richten Sie diese zunächst unter [Produkte und Dienstleistungen](../products-services/creating-products.md) ein.

## Erstellen Sie eine wiederkehrende Rechnung

Eine wiederkehrende Rechnung hat zwei Teile: einen **Plan**, der steuert, wann Rechnungen erstellt und versendet werden, und eine **Rechnungsvorlage**, die festlegt, was jede Rechnung enthält.

### Richten Sie den Plan ein

1. Wählen Sie in der linken Seitenleiste **Verkauf** aus
2. Wählen Sie **Neue wiederkehrende Rechnung** aus
3. Legen Sie das **Startdatum** für Ihre erste Rechnung fest
4. Wählen Sie die Abrechnungshäufigkeit – wöchentlich, monatlich oder ein anderes Intervall
5. Für eine benutzerdefinierte Häufigkeit (zum Beispiel alle zwei Wochen) wählen Sie **Benutzerdefiniert** und geben Sie Ihre Voreinstellungen ein
6. Wählen Sie, wann der Plan endet:
   - Wählen Sie **Läuft unbegrenzt**, um bis Sie ihn manuell beenden zu fortfahren
   - Legen Sie ein **Enddatum** fest, um an einem bestimmten Datum zu stoppen
   - Legen Sie eine Anzahl von Vorkommen fest, um nach einer festen Anzahl von Rechnungen zu stoppen
7. Stellen Sie den **Automatischer Versand**-Umschalter ein:
   - Schalten Sie **Automatischer Versand** ein, um die Rechnung von Fiskl automatisch erstellen und versendet zu lassen
   - Schalten Sie **Automatischer Versand** aus, damit Fiskl die Rechnung als Entwurf erstellt und Sie benachrichtigt, wenn sie zur Überprüfung bereit ist
8. Um unbezahlte Elemente einzubeziehen, aktivieren Sie das Kontrollkästchen **Unbezahlte Elemente** und wählen Sie die einzubeziehenden Elementtypen aus – **Zeit**, **Kilometerstand** oder **Ausgaben**

:::tip
Fiskl speichert Ihre Planeinstellungen für wiederkehrende Rechnungen und wendet sie beim nächsten Erstellen einer wiederkehrenden Rechnung als Standardeinstellungen an.
:::

### Erstellen Sie die Rechnungsvorlage

Füllen Sie die Rechnungsvorlage auf die gleiche Weise aus wie eine Standardrechnung. Siehe [Rechnungen erstellen](creating-invoices.md) für vollständige Details zu Positionen, Steuereinstellungen und Zahlungsbedingungen.

:::info
Für Produkte oder Dienstleistungen, die sich über Rechnungen wiederholen, können Sie eine Vorlage unter **Produkte und Dienstleistungen** mit dynamischen Platzhaltern erstellen. Zum Beispiel: "1-Jahres-Gartnervertrag für [client_name], verfällt am [day+1Y]/[month+1Y]/[year+1Y]". Wenn sie zu einer wiederkehrenden Rechnung hinzugefügt werden, füllt Fiskl die Platzhalter automatisch aus.
:::

## Starten Sie den Plan

Sobald Ihre Vorlage fertig ist, wählen Sie **Plan starten**, um die wiederkehrende Rechnung zu aktivieren.

**Was als Nächstes passiert, hängt von Ihrer Automatischer Versand-Einstellung ab:**

| Einstellung | Fiskl-Aktion | Sie erhalten |
|---|---|---|
| Automatischer Versand ein | Erstellt und versendet die Rechnung, markiert sie als **Versendet** | Eine E-Mail-Benachrichtigung am Tag vor dem Versand jeder Rechnung |
| Automatischer Versand aus | Erstellt die Rechnung, markiert sie als **Entwurf** | Eine E-Mail-Benachrichtigung, wenn jede Rechnung zum Versand bereit ist |

## Verwalten Sie eine wiederkehrende Rechnung

Nachdem Sie eine wiederkehrende Rechnung gespeichert haben, wählen Sie die Schaltfläche **Mehr**, um auf diese Aktionen zuzugreifen:

- **Bearbeiten** – Aktualisieren Sie die Vorlage oder Planeinstellungen
- **Drucken** – Laden Sie die aktuelle Vorlage herunter oder drucken Sie sie
- **Plan beenden** – Verhindern Sie, dass zukünftige Rechnungen erstellt werden

Eine vollständige Liste der Verwaltungsoptionen finden Sie unter [Verwaltung wiederkehrender Rechnungen](recurring-invoice-management.md).

## Häufige Probleme

<details>
<summary>Unbezahlte Elemente werden in der wiederkehrenden Rechnung nicht angezeigt</summary>

Unbezahlte Elemente werden nur angezeigt, wenn sie gegen denselben Kunden erfasst wurden und nicht bereits auf einer anderen Rechnung enthalten sind.

1. Überprüfen Sie, dass die Zeit-, Kilometerstand- oder Ausgabeneinträge dem richtigen Kunden zugewiesen sind
2. Überprüfen Sie, dass die Einträge nicht bereits auf einer früheren Rechnung abgerechnet wurden
3. Überprüfen Sie, dass das Kontrollkästchen **Unbezahlte Elemente** ausgewählt ist und die richtigen Elementtypen aktiviert sind

</details>

<details>
<summary>Die wiederkehrende Rechnung wird nicht automatisch versendet</summary>

Wenn Rechnungen als Entwürfe erstellt werden, anstatt automatisch versendet zu werden, ist der Umschalter **Automatischer Versand** möglicherweise aus.

1. Wählen Sie **Mehr** neben der wiederkehrenden Rechnung
2. Wählen Sie **Bearbeiten** aus
3. Schalten Sie **Automatischer Versand** ein
4. Wählen Sie **Speichern** aus

</details>

## Verwandte Themen

- [Rechnungen erstellen](create-recurring-invoices.md) – So erstellen Sie eine Standardrechnungsvorlage
- [Verwaltung wiederkehrender Rechnungen](recurring-invoice-management.md) – Bearbeiten, pausieren und überprüfen Sie wiederkehrende Rechnungen
- [Rechnungen versendet](sending-invoices.md) – Optionen zum manuellen Versand und Zustellungseinstellungen
- [Produkte und Dienstleistungen](../products-services/creating-products.md) – Richten Sie wiederverwendbare Produkt- und Servicevorlage ein
- [Zeiterfassung](../time-and-mileage/time-tracking.md) – Erfassen Sie abrechenbare Zeit für wiederkehrende Rechnungen
- [Kilometerstandverfolgung](../time-and-mileage/mileage-tracking.md) – Erfassen Sie abrechenbaren Kilometerstand für wiederkehrende Rechnungen
