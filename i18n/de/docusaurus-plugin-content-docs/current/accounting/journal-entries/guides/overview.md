---
title: "Transaktionsleitfäden"
description: "Erfahren Sie, wie Buchungssätze in Fiskl funktionieren, wie Transaktionen automatisch erfasst werden und wann Sie diese manuell erstellen oder bearbeiten sollten."
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

Diese Anleitung erläutert, wie Buchungssätze in Fiskl funktionieren und wie alle finanziellen Transaktionen in Ihrem Buchhaltungssystem erfasst und verwaltet werden.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Was sind Buchungssätze?

Buchungssätze — auch Kontotransaktionen genannt — bilden die Grundlage Ihres Buchhaltungssystems. Jedes finanzielle Ereignis in Fiskl wird als Buchungssatz in einem oder mehreren Hauptbuchkonten erfasst.

Sie können sich den [Kontenrahmen](/accounting/chart-of-accounts) als Ihre Ordnerstruktur vorstellen, und Buchungssätze als die einzelnen Transaktionen, die darin abgelegt sind.

## Wie Fiskl Buchungssätze verwaltet

Fiskl verwendet doppelte Buchführung, daher beeinflusst jede Transaktion mindestens zwei Hauptbuchkonten. Die meisten Buchungssätze werden automatisch erstellt, wenn Sie Rechnungen, Ausgaben oder Banktransaktionen erfassen.

<details>
<summary>Wichtigste Funktionen</summary>

- **Unterstützung für mehrere Währungen**: Vollständige Unterstützung für mehrere Währungen mit länderübergreifendem Abgleich, Aufteilung, internen Transfers und mehrsprachiger Berichtserstattung
- **Automatische Erstellung**: Die meisten Buchungssätze werden automatisch erstellt, wenn Sie Transaktionen wie Verkäufe, Käufe oder Banktransfers erfassen. Forderungen werden automatisch für Rechnungen und Zahlungen verwaltet. Banking-Feeds und Importe generieren ihre jeweiligen Buchungssätze
- **Echtzeit-Salden**: Alle Berichte und Salden werden in Echtzeit generiert, daher sind Ihre Finanzdaten immer aktuell
- **Mobiler Zugriff**: Sie können Buchungssätze über die Web- und Mobile-App anzeigen und verwalten
- **Flexibilität der Buchhaltungsmethode**: Sie können zwischen Kassenbuchhaltung und Accrual-Buchhaltung wechseln, ohne die zugrunde liegenden Daten zu beeinflussen

</details>

## Arten von Buchungssätzen

Fiskl unterstützt mehrere Arten von Buchungssätzen, um alle Ihre Buchhaltungsanforderungen zu erfüllen.

| Typ | Beschreibung |
|------|-------------|
| Standard | Regelmäßige Umsatz- und Ausgabentransaktionen |
| [Multi-Buchungssätze](/accounting/journal-entries/multi-journal-entries) | Erstellen Sie mehrere Einträge über mehrere Konten in einer Transaktion |
| Geteilte Transaktionen | Eine einzelne Transaktion, die mehrere Konten betrifft |
| Abgestimmte Transaktionen | Gleichen Sie Banktransaktionen mit Ihren vorhandenen Aufzeichnungen ab |
| Interne Transfers | Verschieben Sie Geld zwischen Ihren eigenen Hauptbuchkonten |
| Mehrsprachig | Transaktionen, die mehr als eine Währung betreffen |
| Eröffnungssalden | Legen Sie Ihre anfänglichen Kontosalden fest, wenn Sie zu Fiskl migrieren |

## Erstellen und Verwalten von Buchungssätzen

Während Fiskl die meisten Buchungssätze automatisiert, müssen Sie möglicherweise Buchungssätze manuell erstellen oder bearbeiten — beispielsweise um Anpassungen, Eröffnungssalden oder Transaktionen zu erfassen, die nicht von einem Feed erfasst werden.

Schritt-für-Schritt-Anweisungen finden Sie in den [Anleitungen zu Buchungssätzen](/accounting/journal-entries/guides/overview).

## Buchungssätze anzeigen

Sie können Transaktionen innerhalb jedes einzelnen Hauptbuchkontos anzeigen. Dies ist nützlich, wenn Sie Überprüfungen oder Anpassungen auf Kontoebene durchführen.

Für einen umfassenderen Überblick über alle Konten verwenden Sie den Bericht [Transaktionen nach Konto](/reporting/transactions-by-account). Für finanzielle Zusammenfassungen verwenden Sie die Berichte [Bilanz](/reporting/balance-sheet) oder [Gewinn- und Verlustrechnung](/reporting/profit-and-loss).

:::info
Wenn Sie einen Bericht auf **Detaillierte** Ansicht einstellen, können Sie auf Transaktionsebene detailliert werden.
:::

## Soll- und Habenseite Referenz

Diese Tabelle zeigt, wie häufige Transaktionen über Ihre Hauptbuchkonten erfasst werden.

| Transaktion | Konto | Soll | Haben |
|-------------|---------|-------|--------|
| Rechnung gestellt | Forderungen | ✓ | |
| Rechnung gestellt | Umsatz | | ✓ |
| Zahlung vom Kunden erhalten | Bank | ✓ | |
| Zahlung vom Kunden erhalten | Forderungen | | ✓ |
| Ausgabe erfasst | Ausgabenkonto | ✓ | |
| Ausgabe erfasst | Verbindlichkeiten | | ✓ |
| Lieferantenzahlung getätigt | Verbindlichkeiten | ✓ | |
| Lieferantenzahlung getätigt | Bank | | ✓ |
| Interner Transfer aus | Zielbankkonto | ✓ | |
| Interner Transfer aus | Quellbankkonto | | ✓ |

## Verwandte Themen

- [Kontenrahmen](/accounting/chart-of-accounts) — Richten Sie Ihre Hauptbuchkontostruktur ein und verwalten Sie sie
- [Multi-Buchungssätze](/accounting/journal-entries/multi-journal-entries) — Erstellen Sie komplexe Einträge über mehrere Konten
- [Anleitungen zu Buchungssätzen](/accounting/journal-entries/guides/overview) — Schritt-für-Schritt-Anweisungen für bestimmte Transaktionstypen
- [Transaktionen nach Konto](/reporting/transactions-by-account) — Zeigen Sie alle Transaktionen über Ihren Kontenrahmen an
- [Bilanz](/reporting/balance-sheet) — Überprüfen Sie Ihr Vermögen, Ihre Verbindlichkeiten und Ihr Eigenkapital
- [Gewinn- und Verlustrechnung](/reporting/profit-and-loss) — Überprüfen Sie Umsatz und Ausgaben über einen Zeitraum
