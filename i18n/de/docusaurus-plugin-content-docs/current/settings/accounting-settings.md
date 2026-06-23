---
title: "Buchhaltungseinstellungen"
description: "Konfigurieren Sie Ihre Buchhaltungspräferenzen in Fiskl — legen Sie Ihr Geschäftsjahr, die Buchhaltungsmethode, den Steuertyp, das automatische Matching und die standardmäßigen Einnahmekonten fest."
keywords: ["accounting settings", "fiscal year", "cash accounting", "accrual accounting", "auto matching", "auto categorisation", "standard income accounts", "ledger accounts"]
sidebar_position: 3
tags:
  - Settings
  - Accounting
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Konfigurieren Sie Ihre Buchhaltungseinstellungen und Standard-Konten für genaue Finanzberichte in Fiskl. Diese Einstellungen steuern Ihr Geschäftsjahr, die Buchführungsmethode und die Standard-Einnahmekonten.

## Zugriff auf Buchhaltungseinstellungen

Gehen Sie zu **Einstellungen** > **Buchhaltungseinstellungen** in der linken Seitenleiste.

## Buchhaltungseinstellungen

| Einstellung | Beschreibung                                                                                                      |
|---|------------------------------------------------------------------------------------------------------------------|
| **Unternehmens-Währung** | Ihre Basiswährung, die bei der Kontenerstellung festgelegt wird. Kann nicht geändert werden.                                                  |
| **Unternehmens-Steuertyp** | Wählen Sie **Keine Steuer**, **Einfach** oder **Mehrfach**. Wird auf der gesamten Plattform angewendet.                              |
| **Geschäftsjahresende** | Legt die Datumsbereiche für Zeitraumfilter in Berichten fest (dieses Geschäftsjahr, dieses Quartal usw.).               |
| **Buchführungsmethode** | **Gewinn- und Verlustrechnung** erfasst Einnahmen und Ausgaben, wenn Geld den Besitzer wechselt. **Saldenbilanz** erfasst sie, wenn sie verdient oder entstanden sind. |
| **Automatische Abstimmung** | Stimmt importierte Banktransaktionen automatisch mit Rechnungen und Ausgaben ab.                                       |
| **Automatische Kategorisierung** | Weist Hauptbuchkonten Transaktionen automatisch basierend auf erlernten Mustern zu.                                 |

:::info
Das Ändern Ihrer Buchführungsmethode kann sich erheblich auf Ihre Finanzberichte auswirken. Fiskl bietet jedoch einzigartige Flexibilität:

- Diese Einstellung bestimmt die anfängliche Ansicht für Ihre Berichte
- Im Gegensatz zu anderen Plattformen ermöglicht Fiskl den Wechsel zwischen Gewinn- und Verlustrechnung und Saldenbilanz, ohne Ihre zugrunde liegenden Daten zu beeinflussen
- Sie können mit der Gewinn- und Verlustrechnung beginnen und später zur Saldenbilanz (oder umgekehrt) wechseln
- Fiskl ermöglicht es Ihnen, Berichte sowohl in Gewinn- und Verlustrechnung als auch in Saldenbilanzmethode zu erstellen, unabhängig von Ihrer gewählten Einstellung

Diese Flexibilität ermöglicht es Ihnen, Ihre Buchhaltungssicht anzupassen, während sich Ihre Geschäftsanforderungen weiterentwickeln, ohne dass eine Datenmigration oder Reorganisation erforderlich ist.
:::

## Standard-Einnahmekonten

Legen Sie das Standard-Hauptbuchkonto für jeden Einnahmetyp fest. Fiskl füllt diese vorab, wenn Sie Rechnungen erstellen oder fakturierbare Artikel hinzufügen.

| Einnahmetyp | Beispielkonto |
|---|---|
| **Produkte** | Produktverkäufe |
| **Services** | Serviceverkäufe |
| **Zeit** | Sonstige Verkäufe |
| **Kilometerstand** | Sonstige Verkäufe |
| **Fakturierbare Ausgaben** | Verkäufe — Fakturierte Ausgaben |

Konten werden aus Ihrem [Kontenrahmen](/accounting/chart-of-accounts) entnommen. Sie können das Standard-Konto auf Produktebene, Serviceebene oder Positionsebene überschreiben.

Wählen Sie **Speichern**, um Ihre Änderungen anzuwenden.

## Häufig gestellte Fragen

<details>
<summary>Berichtsdatumsfilter zeigen die falschen Zeiträume</summary>

Überprüfen Sie, dass **Geschäftsjahresende** richtig eingestellt ist, und führen Sie den Bericht erneut aus.

</details>

<details>
<summary>Die automatische Abstimmung erstellt falsche Zuordnungen</summary>

1. Gehen Sie zum **Bankkonto** und öffnen Sie die relevante Transaktion
2. Löschen Sie die falsche Zeile
3. Wählen Sie **Abstimmen** und wählen Sie die richtige Zuordnung
4. Wählen Sie **Fertig**

Stellen Sie sicher, dass Ihre Rechnungen und Ausgaben genaue Beträge und Daten haben, um zukünftige Zuordnungen zu verbessern.

</details>

<details>
<summary>Ein Hauptbuchkonto fehlt in den Dropdowns für Standard-Einnahmekonten</summary>

Fügen Sie das Konto zunächst im [Kontenrahmen](/accounting/chart-of-accounts) hinzu und kehren Sie dann hierher zurück, um es zuzuweisen.

</details>

## Verwandte Themen

- [Steuereinstellungen](/settings/tax-settings) — Steuersätze einrichten und verwalten
- [Währungsverwaltung](/settings/currency-management) — Währungen hinzufügen und verwalten
- [Kontenrahmen](/accounting/chart-of-accounts) — Ihre Hauptbuchkonten anzeigen und verwalten
- [Gewinn- und Verlustvortrag](/reporting/profit-and-loss) — Sehen Sie, wie Ihre Buchführungsmethode Berichte beeinflusst
- [Banking-Übersicht](/integrations/banking/overview) — Verbinden Sie Ihre Bank und verwalten Sie Transaktionsabstimmungen
