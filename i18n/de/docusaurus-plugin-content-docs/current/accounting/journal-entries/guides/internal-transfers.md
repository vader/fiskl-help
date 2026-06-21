---
title: "Interne Überweisungen"
description: "Erfahren Sie, wie Sie interne Überweisungen zwischen Ihren Geschäftskonten in Fiskl erfassen, einschließlich gleichwähriger und mehrwähriger Überweisungen."
keywords: ["internal transfer", "transfer between accounts", "multi-currency transfer", "accounting", "chart of accounts", "match transactions"]
sidebar_position: 5
tags:
  - Accounting
  - Transactions
  - Banking
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie interne Transfers zwischen Ihren Geschäftskonten in Fiskl erfassen. Genaue Transferaufzeichnungen halten Ihre Kontostände auf dem neuesten Stand und unterscheiden Fondsbewegungen von Einnahmen oder Ausgaben.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

- Ihre Geschäftskonten müssen im [Kontenrahmen](/accounting/chart-of-accounts) eingerichtet sein, bevor Sie Transfers zwischen ihnen erfassen können
- Beide Transaktionen müssen in Fiskl vorhanden sein — entweder über einen verbundenen Bankdatenimport oder manuell eingegeben
- Beide Transaktionen müssen als **Unkategorisierte Einnahmen** oder **Unkategorisierte Ausgaben** kategorisiert sein, um für die Zuordnung berechtigt zu sein

## Was sind interne Transfers?

Ein interner Transfer ist die Bewegung von Mitteln zwischen zwei Ihrer eigenen Geschäftskonten — beispielsweise von einem Girokonto auf ein Sparkonto oder zwischen Konten, die in verschiedenen Währungen gehalten werden.

Jeder interne Transfer hat zwei Aspekte:

- **Geschäftliche Aktion** — die tatsächliche Bewegung von Mitteln, durchgeführt durch Ihre Bank oder Finanzinstitution
- **Buchungsaufzeichnung** — der Eintrag in Fiskl, der diese Bewegung widerspiegelt und Ihre Bücher korrekt hält

Fiskl unterstützt Sie bei der Buchungsaufzeichnung. Wenn Sie Bankdatenimporte verbunden haben, kann Fiskl die beiden Seiten eines Transfers automatisch zuordnen. Wenn keine automatische Zuordnung gefunden wird, können Sie den Transfer manuell über den Kontenrahmen erfassen.

## Warum sollten Sie interne Transfers erfassen?

Die korrekte Erfassung interner Transfers stellt sicher, dass Ihre Finanzaufzeichnungen genau widerspiegeln, wie Geld innerhalb Ihres Unternehmens fließt. Ordnungsgemäße Aufzeichnungen helfen Ihnen:

- Fondsbewegungen von Einnahmen oder Ausgaben zu unterscheiden
- Eine klare Audit-Trail zu führen
- Kontostände im Hauptbuch über alle Konten hinweg aktuell zu halten
- Grenzüberschreitende Transfers genau zu verfolgen

:::caution
Erfassen Sie Ihre internen Transfers zeitnah. Dies ist besonders wichtig, wenn Sie häufig Transfers durchführen oder Transfers in verschiedenen Währungen tätigen, bei denen die Verbindung zwischen zwei Transaktionen möglicherweise nicht offensichtlich ist. Nicht erfasste Transfers können „Ghost"-Transaktionen erstellen, die Abweichungen zwischen Ihren Fiskl-Salden und Ihren tatsächlichen Bankkontoauszügen verursachen.
:::

Häufige Gründe für interne Transfers von Unternehmen sind die Deckung operativer Ausgaben, die Gehaltszahlung, der Einkauf von Bestandsbeständen, die Verwaltung mehrerer Währungen und die Aufrechterhaltung von Zielkontostanden über Konten hinweg.

## Wie Fiskl Transaktionen zuordnet

Fiskl sucht nach potenziellen Transfer-Übereinstimmungen nach folgender Prioritätsreihenfolge:

1. Transaktionen am selben Tag mit gleichem Betrag
2. Transaktionen am selben Tag mit Beträgen, die nach Währungsumrechnung eng beieinander liegen
3. Transaktionen innerhalb weniger Tage voneinander, bei denen Beträge übereinstimmen oder ähnlich sind

Nur Transaktionen, die als **Unkategorisierte Einnahmen** oder **Unkategorisierte Ausgaben** kategorisiert sind, sind für die Zuordnung berechtigt.

:::info
Wenn Fiskl keine Übereinstimmung für einen Transfer von Konto A zu Konto B findet, versuchen Sie, die Richtung umzukehren — öffnen Sie Konto B und suchen Sie nach einer Übereinstimmung zu Konto A. Dies kann vorkommen, wenn eine Bank mehrere Tage benötigt, um einen Transfer zu verarbeiten, was die Datumslücke von einer Seite aus zu groß erscheinen lässt, aber von der anderen Seite erkennbar ist.
:::

:::tip
Sie wissen nicht, warum ein Transfer nicht zugeordnet wird? Fragen Sie Fi — wählen Sie **Fi** oben rechts auf dem Bildschirm aus und beschreiben Sie die beteiligten Konten und Daten. Fi kann Ihnen helfen zu ermitteln, warum eine Übereinstimmung möglicherweise nicht angezeigt wird, und die nächsten Schritte vorschlagen.
:::

## Einen internen Transfer erfassen

### Transfer in gleicher Währung

So erfassen Sie einen Transfer zwischen zwei Konten in gleicher Währung:

1. Gehen Sie zu **Accounting** > **Chart of Accounts**
2. Wählen Sie das Bankkonto aus, von dem Sie Geld gesendet oder auf das Sie Geld erhalten haben
3. Wählen Sie die relevante Transaktion aus
4. Wählen Sie **Internal Transfer**
5. Wählen Sie die passende Transaktion vom Gegenkonto aus
6. Wählen Sie **Save**

Der Transfer wird nach Bestätigung in beiden Send- und Empfängerkonten angezeigt. Überprüfen Sie beide Konten, um zu überprüfen, dass der Betrag in einem als Sollbuchung und im anderen als Habenbuchung angezeigt wird.

### Transfer in mehreren Währungen

Der Prozess zur Erfassung eines Multi-Currency-Transfers ist derselbe wie ein [Transfer in gleicher Währung](#transfer-in-gleicher-währung). Wenn die zugeordneten Transaktionen in verschiedenen Währungen vorliegen, zeigt Fiskl den Wechselkurs an, den Ihre Bank auf den Transfer angewandt hat. Der Transfer wird in beiden Konten angezeigt und zeigt den ursprünglichen Währungsbetrag neben dem Äquivalent in Basiswährung.

## Häufige Probleme

<details>
<summary>Keine passende Transaktion wird vorgeschlagen</summary>

Dies bedeutet normalerweise, dass die beiden Transaktionen in Datum oder Betrag zu weit auseinander liegen, damit Fiskl sie als Paar erkennt.

Versuchen Sie diese Schritte:

1. Überprüfen Sie, dass beide Transaktionen als **Unkategorisierte Einnahmen** oder **Unkategorisierte Ausgaben** kategorisiert sind — Transaktionen in anderen Kategorien sind nicht für die Zuordnung berechtigt
2. Versuchen Sie die Zuordnung vom gegenteiligen Konto aus — öffnen Sie das Empfängerkonto und ordnen Sie von dort aus zu
3. Wenn die Verarbeitung des Transfers mehrere Tage gedauert hat, suchen Sie nach der Gegentransaktion einige Tage vor oder nach dem erwarteten Datum

</details>

<details>
<summary>Der falsche Wechselkurs wird auf einem Multi-Currency-Transfer angezeigt</summary>

Fiskl zeigt den durch die beiden Transaktionsbeträge implizierten Wechselkurs an. Wenn sich dieser von dem Kurs Ihrer Bank unterscheidet, überprüfen Sie, dass Sie die korrekte zugeordnete Transaktion ausgewählt haben. Verschiedene Transaktionen am selben Tag können aufgrund von Bankgebühren oder Rundungen unterschiedliche Beträge aufweisen. Wählen Sie die Transaktion aus, die dem Betrag, den Ihre Bank übertragen hat, am nächsten kommt.

</details>

## Verwandte Themen

- [Kontenrahmen](/accounting/chart-of-accounts) — Zeigen Sie Ihre Sachkonten an und verwalten Sie sie
- [Transaktionen abgleichen und teilen](/accounting/journal-entries/guides/match-and-split-transactions) — Andere Möglichkeiten, Transaktionen zu kategorisieren und abzustimmen
- [Transaktionen in mehreren Währungen](/accounting/journal-entries/guides/multi-currency-transactions) — Wie Fiskl ausländische Währungsbeträge verarbeitet
- [Bankkonto-Abstimmung](/accounting/reconciliation/guides/bank-account-reconciliation) — Stimmen Sie Ihre Konten nach Erfassung von Transfers ab
