---
title: "Buchungssätze"
description: "Erfahren Sie, wie Buchungssätze in Fiskl funktionieren, wie Transaktionen automatisch erfasst werden, und wann Sie sie manuell erstellen oder bearbeiten müssen."
keywords: ["journal entries", "account transactions", "double-entry accounting", "multi-currency", "opening balances", "ledger"]
sidebar_position: 1
tags:
  - Accounting
  - Journal entries
  - Financial reports
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Dieser Leitfaden erläutert die Funktionsweise von Buchungssätzen in Fiskl und wie alle finanziellen Transaktionen in Ihrem Buchhaltungssystem erfasst und verwaltet werden.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Was sind Buchungssätze?

Buchungssätze — auch als Kontotransaktionen bezeichnet — bilden die Grundlage Ihres Buchhaltungssystems. Jedes finanzielle Ereignis in Fiskl wird als Buchungssatz in einem oder mehreren Konten erfasst.

Sie können den [Kontenrahmen](/accounting/chart-of-accounts) als Ihre Ordnerstruktur betrachten, und Buchungssätze als die einzelnen Transaktionen, die darin abgelegt sind.

## Wie Fiskl Buchungssätze verarbeitet

Fiskl verwendet die doppelte Buchführung, sodass jede Transaktion mindestens zwei Konten beeinflusst. Die meisten Buchungssätze werden automatisch erstellt, wenn Sie Rechnungen, Ausgaben oder Banktransaktionen erfassen.

<details>
<summary>Wichtigste Funktionen</summary>

- **Mehrwährungsunterstützung**: Vollständige Mehrwährungsunterstützung mit währungsübergreifender Abgleichung, Aufteilung, internen Transfers und Mehrwährungsberichten
- **Automatische Erstellung**: Die meisten Buchungssätze werden automatisch erstellt, wenn Sie Transaktionen wie Verkäufe, Käufe oder Banktransfers erfassen. Forderungen werden automatisch für Rechnungen und Zahlungen verwaltet. Bankfeeds und Importe generieren ihre entsprechenden Buchungssätze
- **Echtzeit-Salden**: Alle Berichte und Salden werden in Echtzeit generiert, daher sind Ihre Finanzdaten immer aktuell
- **Mobiler Zugriff**: Sie können Buchungssätze sowohl über die Web- als auch über die mobile App anzeigen und verwalten
- **Flexibilität der Buchhaltungsmethode**: Sie können zwischen Kassa- und Accrual-Buchhaltung wechseln, ohne die zugrundeliegenden Daten zu beeinflussen

</details>

## Arten von Buchungssätzen

Fiskl unterstützt mehrere Arten von Buchungssätzen, um alle Ihre Buchhaltungsanforderungen abzudecken.

| Typ | Beschreibung |
| --- | --- |
| Standard | Regelmäßige Einnahme- und Ausgabentransaktionen |
| [Multi-Buchungssätze](/accounting/journal-entries/multi-journal-entries) | Erstellen Sie mehrere Einträge über mehrere Konten in einer Transaktion |
| Aufgeteilte Transaktionen | Eine einzelne Transaktion, die mehrere Konten beeinflusst |
| Abgestimmte Transaktionen | Gleichen Sie Banktransaktionen mit Ihren vorhandenen Aufzeichnungen ab |
| Interne Transfers | Verschieben Sie Geld zwischen Ihren eigenen Konten |
| Mehrwährung | Transaktionen, die mehr als eine Währung betreffen |
| Anfangssalden | Legen Sie Ihre anfänglichen Kontosalden fest, wenn Sie zu Fiskl migrieren |

## Erstellen und Verwalten von Buchungssätzen

Obwohl Fiskl die meisten Buchungssätze automatisiert, müssen Sie diese möglicherweise manuell erstellen oder bearbeiten — zum Beispiel, um Anpassungen, Anfangssalden oder Transaktionen aufzuzeichnen, die nicht durch einen Feed erfasst werden.

Schritt-für-Schritt-Anweisungen finden Sie unter [Buchungssatz-Leitfäden](/accounting/journal-entries/guides/overview).

## Anzeigen von Buchungssätzen

Sie können Transaktionen innerhalb jedes einzelnen Kontos anzeigen. Dies ist hilfreich beim Überprüfen oder Durchführen von Anpassungen auf Kontoebene.

Um einen breiteren Überblick über alle Konten zu erhalten, verwenden Sie den Bericht [Transaktionen nach Konto](/reporting/transactions-by-account). Verwenden Sie für finanzielle Zusammenfassungen die Berichte [Bilanz](/reporting/balance-sheet) oder [Gewinn- und Verlustrechnung](/reporting/profit-and-loss).

:::info
Wenn Sie einen Bericht auf die Ansicht **Detailliert** setzen, können Sie bis zur Transaktionsebene drilldown.
:::

## Soll- und Habenliste

Diese Tabelle zeigt, wie häufige Transaktionen über Ihre Konten erfasst werden.

| Transaktion | Konto | Soll | Haben |
| --- | --- | --- | --- |
| Ausgangsrechnung ausgestellt | Forderungen | ✓ | |
| Ausgangsrechnung ausgestellt | Umsatz | | ✓ |
| Zahlung von Kunde eingegangen | Bank | ✓ | |
| Zahlung von Kunde eingegangen | Forderungen | | ✓ |
| Ausgabe erfasst | Ausgabenkonto | ✓ | |
| Ausgabe erfasst | Verbindlichkeiten | | ✓ |
| Lieferantenzahlung durchgeführt | Verbindlichkeiten | ✓ | |
| Lieferantenzahlung durchgeführt | Bank | | ✓ |
| Interner Transfer ausgehen | Zielbankkonto | ✓ | |
| Interner Transfer ausgehen | Quellbankkonto | | ✓ |

## Verwandte Themen

- [Kontenrahmen](/accounting/chart-of-accounts) — Richten Sie Ihre Kontostruktur ein und verwalten Sie sie
- [Multi-Buchungssätze](/accounting/journal-entries/multi-journal-entries) — Erstellen Sie komplexe Einträge über mehrere Konten
- [Buchungssatz-Leitfäden](/accounting/journal-entries/guides/overview) — Schritt-für-Schritt-Anweisungen für spezifische Transaktionstypen
- [Transaktionen nach Konto](/reporting/transactions-by-account) — Zeigen Sie alle Transaktionen über Ihren Kontenrahmen an
- [Bilanz](/reporting/balance-sheet) — Überprüfen Sie Ihre Vermögenswerte, Verbindlichkeiten und Eigenkapital
- [Gewinn- und Verlustrechnung](/reporting/profit-and-loss) — Überprüfen Sie Einnahmen und Ausgaben über einen Zeitraum
