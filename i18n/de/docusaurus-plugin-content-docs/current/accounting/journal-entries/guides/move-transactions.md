---
title: "Transaktionen zwischen Konten verschieben"
description: "Erfahren Sie, wie Sie Transaktionen zwischen Hauptbuchkonten in Fiskl verschieben, um Fehlkategorisierungen zu korrigieren und Ihre Finanzunterlagen genau zu halten."
keywords: ["move transactions", "ledger accounts", "mis-categorization", "reclassify", "accounting correction"]
sidebar_position: 1
tags:
  - Accounting
  - Transactions
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Anleitung erklärt, wie Sie Buchungen zwischen Konten im Hauptbuch in Fiskl verschieben. Nutzen Sie diese Funktion, um Buchungen zu korrigieren, die auf dem falschen Konto erfasst wurden, ohne sie löschen und neu eingeben zu müssen.

## Grundlagen von Buchungsverschiebungen

In Fiskl wird jede Buchung gegen ein bestimmtes Hauptbuchkonto erfasst — zum Beispiel könnte eine Ausgabe unter Bürobedarf erfasst werden, obwohl sie unter Reisekosten hätte sein sollen. Das Verschieben einer Buchung ermöglicht es Ihnen, sie dem korrekten Hauptbuchkonto zuzuweisen, während alle ursprünglichen Details und Ihr Audit-Trail erhalten bleiben.

:::info
Das Verschieben einer Buchung weist sie nur einem anderen Hauptbuchkonto innerhalb von Fiskl zu. Wenn Geld tatsächlich zwischen zwei Ihrer echten Bankkonten verschoben wurde — zum Beispiel eine Überweisung von Ihrem Sparkonto auf Ihr Girokonto — sollten Sie dies stattdessen als interne Überweisung erfassen. Siehe [Interne Überweisungen](/accounting/journal-entries/guides/internal-transfers).
:::

<details>
<summary>Wann würde ich eine Buchung verschieben müssen?</summary>

Sie könnten eine Buchung aus mehreren Gründen verschieben müssen:

- **Fehlerberichtigung** — die Buchung wurde auf dem falschen Hauptbuchkonto erfasst
- **Kontoumstrukturierung** — Sie haben Ihren Kontenrahmen umstrukturiert
- **Verbesserte Kategorisierung** — Sie möchten die Art einer Buchung besser darstellen
- **Genauigkeit der Finanzberichterstattung** — Ihre Berichte müssen Ihre Finanzaktivität korrekt darstellen
- **Kontokonsolidierung** — Sie führen Konten zusammen oder schließen sie

</details>

<details className="blue-box">
<summary>Praktisches Beispiel</summary>

Sie haben mehrere geschäftliche Reisekostenbelege versehentlich unter Bürobedarf erfasst. Anstatt jede Buchung zu löschen und neu einzugeben, können Sie alle auswählen und sie in einem Schritt auf das Konto Reisekosten verschieben. Alle ursprünglichen Buchungsdetails bleiben erhalten und Ihr Audit-Trail bleibt intakt.

</details>

## Verschieben einer Buchung

:::caution
Fiskl zeigt nur Zielkonten desselben Kontotyps wie das Quellkonto an. Wenn Sie beispielsweise von einem Betriebsausgabenkonto verschieben, werden in der Dropdown-Liste nur andere Betriebsausgabenkonten angezeigt.
:::

So verschieben Sie eine oder mehrere Buchungen auf ein anderes Hauptbuchkonto:

1. Gehen Sie zu **Accounting** > **Transactions**
2. Wählen Sie das Hauptbuchkonto aus, das die Buchung enthält, die Sie verschieben möchten
3. Wählen Sie die Buchung aus, um sie zu öffnen, und wählen Sie dann **Move transaction** — oder um mehrere Buchungen zu verschieben, wählen Sie das Kontrollkästchen neben jeder Buchung aus und wählen Sie dann **Move transactions**
4. Wählen Sie in dem angezeigten Bereich das Ziel-Hauptbuchkonto aus der Dropdown-Liste
5. Wählen Sie **Move**, um die Aktion abzuschließen

Die Buchung wird nun im Ziel-Hauptbuchkonto mit allen ursprünglichen Details angezeigt.

:::tip
Um mehrere Buchungen gleichzeitig zu verschieben, wählen Sie das Kontrollkästchen neben jeder Buchung aus, bevor Sie **Move transactions** auswählen.
:::

## Verwalten von Buchungsverschiebungen

### Anzeigen des Buchungsverlaufs

Fiskl führt einen vollständigen Audit-Trail, der zeigt, wann jede Buchung erstellt, geändert oder verschoben wurde. Sie können diesen Verlauf anzeigen, indem Sie eine beliebige Buchung öffnen und das Aktivitätsprotokoll überprüfen.

### Wichtige Überlegungen

Beachten Sie diese Punkte vor dem Verschieben von Buchungen:

- **Kontokompatibilität** — Buchungen können nur zwischen Hauptbuchkonten verschoben werden, die denselben Kontotyp und die gleiche Währung aufweisen. Zum Beispiel können Sie zwischen zwei Ausgabenkonten verschieben, aber nicht von einem Ausgabenkonto auf ein Bankkonto.
- **Währungsabstimmung** — Bei mehrsprachigen Setups muss das Zielkonto die gleiche Währung wie die Buchung verwenden.
- **Gesperrte Abrechnungszeiträume** — Wenn ein Berichtszeitraum in **Settings** > **Accounting** gesperrt wurde, können Buchungen in diesem Zeitraum nicht verschoben werden. Dies verhindert Änderungen an Berichten, die bereits an Steuerbehörden eingereicht wurden. Wenden Sie sich an Ihren Buchhalter, wenn Sie eine Buchung in einem gesperrten Zeitraum verschieben müssen.
- **Abgestimmte Buchungen** — Das Verschieben einer abgestimmten Buchung kann Ihren Abstimmungsstatus beeinflussen. Fiskl warnt Sie, bevor Sie die Verschiebung durchführen.

Fiskl warnt Sie automatisch, wenn eine Verschiebung zu Inkonsistenzen in der Buchhaltung führen würde, und führt einen vollständigen Audit-Trail aller Buchungsverschiebungen.

:::tip
Exportieren Sie vor dem Verschieben von Buchungen einen Bericht der betroffenen Hauptbuchkonten. Dies gibt Ihnen zur Referenz einen Überblick über den Zustand vor der Verschiebung.
:::

## Häufige Probleme

<details>
<summary>Ich sehe die Option „Move transactions" nicht</summary>

Die Option **Move transactions** ist nur auf manuellen Hauptbuchkonten verfügbar. Sie wird nicht auf importierten Bankkontotransaktionen angezeigt. Wenn Sie eine Buchung auf einem dieser Konten korrigieren müssen, bearbeiten Sie die Buchung direkt oder nutzen Sie stattdessen die [Match- und Split-Funktion](/accounting/journal-entries/guides/match-and-split-transactions).

</details>

<details>
<summary>Ich habe eine Buchung auf das falsche Konto verschoben</summary>

Verschieben Sie sie erneut. Öffnen Sie das Ziel-Hauptbuchkonto, finden Sie die Buchung und wiederholen Sie den Verschiebevorgang, um sie auf das richtige Konto zu verschieben. Jede Verschiebung wird im Audit-Trail erfasst.

</details>

<details>
<summary>Fiskl warnt mich vor Abschluss der Verschiebung</summary>

Fiskl prüft auf mögliche Probleme, bevor eine Verschiebung erlaubt wird — wie Währungskonflikte, gesperrte Zeiträume oder Abstimmungskonflikte. Lesen Sie die Warnmeldung sorgfältig. Wenn Sie unsicher sind, ob Sie fortfahren sollten, wenden Sie sich vor der Bestätigung an Ihren Buchhalter.

</details>

## Verwandte Themen

- [Interne Überweisungen](/accounting/journal-entries/guides/internal-transfers) — Erfassen Sie Geldtransfers zwischen Ihren echten Bankkonten
- [Match- und Split-Buchungen](/accounting/journal-entries/guides/match-and-split-transactions) — Ordnen Sie Banktransaktionen Hauptbucheinträgen zu oder teilen Sie sie auf Konten auf
- [Kontenrahmen](/accounting/chart-of-accounts) — Zeigen Sie Ihre Hauptbuchkontostruktur an und verwalten Sie sie
- [Mehrkonto-Buchungssätze](/accounting/journal-entries/multi-journal-entries) — Erfassen Sie komplexe Buchungen über mehrere Konten hinweg
