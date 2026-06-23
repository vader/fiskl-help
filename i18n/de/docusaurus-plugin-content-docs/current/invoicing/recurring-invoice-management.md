---
title: "Verwalten von wiederkehrenden Rechnungen"
description: "Verwalten Sie Ihre wiederkehrenden Rechnungsplan in Fiskl – bearbeiten Sie Vorlagen, pausieren oder setzen Sie Zeitpläne fort, beenden Sie wiederkehrende Rechnungen und zeigen Sie alle zugehörigen Rechnungen an."
keywords: ["recurring invoices", "invoice schedule", "pause recurring invoice", "edit recurring invoice", "end recurring invoice"]
sidebar_position: 3
tags:
  - Invoicing
  - Recurring Invoices
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Verwalten Sie Ihre Rechnungsplan-Zeitpläne von einer einzigen Liste aus — pausieren, bearbeiten oder beenden Sie sie jederzeit, ohne bereits erstellte Rechnungen zu beeinflussen.

## Zugriff auf Ihre wiederkehrenden Rechnungen

Gehen Sie zu **Verkauf** > **Wiederkehrende Rechnungen** im linken Menü, um alle aktiven, unterbrochenen und beendeten Rechnungspläne anzuzeigen.

:::info
Rechnungen, die von einem Rechnungsplan erstellt wurden, werden sowohl in der regulären Rechnungsliste als auch in der Liste der wiederkehrenden Rechnungen angezeigt. Sie funktionieren wie normale Rechnungen und bieten zusätzlich die Möglichkeit, alle Rechnungen desselben Zeitplans anzuzeigen.
:::

## Verfügbare Aktionen

Aus der Liste der wiederkehrenden Rechnungen können Sie:

- **Bearbeiten** — Ändern Sie die Rechnungsvorlage, den Zeitplan oder beides
- **Pausieren** — Stoppen Sie vorübergehend, dass zukünftige Rechnungen erstellt und versendet werden
- **Beenden** — Stoppen Sie alle zukünftigen Rechnungen und entfernen Sie die wiederkehrende Vorlage
- **Zugehörige Rechnungen anzeigen** — Sehen Sie alle Rechnungen, die von einem bestimmten Zeitplan generiert wurden

## Bearbeiten einer wiederkehrenden Rechnung

Sie müssen eine wiederkehrende Rechnung pausieren, bevor Sie sie bearbeiten können.

1. Gehen Sie zu **Verkauf** > **Wiederkehrende Rechnungen**
2. Öffnen Sie die wiederkehrende Vorlage
3. Wählen Sie **Pausieren**
4. Wählen Sie die Schaltfläche **Weitere Optionen** und dann **Bearbeiten**
5. Nehmen Sie Ihre Änderungen an der Vorlage, dem Zeitplan oder beiden vor
6. Wählen Sie **Starten**, um die wiederkehrende Rechnung erneut zu aktivieren

:::warning
Sie müssen **Starten** nach der Bearbeitung auswählen, um den Zeitplan fortzusetzen. Dies gilt, ob Sie die Vorlage, den Zeitplan oder beides geändert haben.
:::

## Pausieren einer wiederkehrenden Rechnung

Das Pausieren stoppt die Erstellung zukünftiger Rechnungen, ohne die Vorlage oder den Zeitplan zu entfernen.

1. Gehen Sie zu **Verkauf** > **Wiederkehrende Rechnungen**
2. Öffnen Sie die wiederkehrende Vorlage
3. Wählen Sie **Zeitplan pausieren**

Um fortzufahren, wählen Sie **Starten**, wenn Sie sie erneut aktivieren möchten.

## Beenden einer wiederkehrenden Rechnung

Das Beenden einer wiederkehrenden Rechnung entfernt die Vorlage und den Zeitplan dauerhaft.

1. Gehen Sie zu **Verkauf** > **Wiederkehrende Rechnungen**
2. Wählen Sie **Beenden** für die Rechnung, die Sie stoppen möchten

Diese Aktion wirkt sich nicht auf Rechnungen aus, die bereits durch den Zeitplan erstellt wurden.

:::tip
Nachdem eine wiederkehrende Rechnung beendet wurde, können Sie alle von ihr erstellten Rechnungen weiterhin anzeigen. Wählen Sie in der regulären Rechnungsliste den Filter **Geplant**, um sie zu finden.
:::

## Häufige Probleme

<details>
<summary>Ich habe eine wiederkehrende Rechnung beendet — wo befinden sich die Rechnungen, die sie erstellt hat?</summary>

Das Beenden einer wiederkehrenden Rechnung entfernt die Vorlage und den Zeitplan, aber alle zuvor erstellten Rechnungen werden beibehalten. Um sie zu finden, gehen Sie zu **Verkauf** > **Rechnungen** und wählen Sie den Filter **Geplant**.

</details>

<details>
<summary>Ich muss eine versendte oder bezahlte Rechnung bearbeiten, die von einem wiederkehrenden Rechnungsplan erstellt wurde</summary>

Rechnungen, die von einem wiederkehrenden Rechnungsplan erstellt wurden, folgen den gleichen Bearbeitungsregeln wie normale Rechnungen. Um eine versendete Rechnung zu bearbeiten, öffnen Sie sie, setzen Sie den Status auf **Entwurf**, nehmen Sie Ihre Änderungen vor und speichern Sie.

Für bezahlte oder teilweise bezahlte Rechnungen, die in der Buchhaltung abgestimmt wurden, müssen Sie die Transaktion zunächst nicht abgleichen. Siehe [Rechnungsverwaltung](invoice-management.md) für vollständige Details.

</details>

## Verwandte Themen

- [Wiederkehrende Rechnungen erstellen](create-recurring-invoices.md) — Richten Sie einen neuen Rechnungsplan-Zeitplan ein
- [Rechnungsverwaltung](invoice-management.md) — Bearbeiten, stornieren und verwalten Sie den Status einzelner Rechnungen
- [Rechnungen versenden](sending-invoices.md) — Versenden Sie Rechnungen manuell oder per E-Mail
