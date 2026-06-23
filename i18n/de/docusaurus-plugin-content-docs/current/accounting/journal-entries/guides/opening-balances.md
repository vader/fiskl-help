---
title: "Eröffnungssalden"
description: "Erfahren Sie, was Eröffnungssalden in Fiskl sind, wann und warum Sie sie erstellen sollten, wie Sie sie zu Ihren Ledgerkonten hinzufügen und wie Sie überprüfen, dass sie korrekt bilanzieren."
keywords: ["opening balance", "starting balance", "accounting period", "ledger account", "chart of accounts", "financial reporting"]
sidebar_position: 5
tags:
  - Accounting
  - Journal Entry
  - Financial Reports
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, was Eröffnungssalden sind, warum sie wichtig sind und wie Sie sie in Fiskl erstellen und überprüfen können.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Was sind Eröffnungssalden?

Ein Eröffnungssaldo ist der Anfangsbetrag auf einem Hauptbuchkonto zu Beginn einer Rechnungsperiode. Er bildet die Grundlage für die Erfassung aller finanziellen Aktivitäten während dieser Periode — Verkäufe, Einkäufe, Ausgaben und Zahlungen.

Eröffnungssalden erfüllen mehrere wichtige Zwecke:

- Sicherstellung korrekter Kontostände von Anfang an
- Aufrechterhaltung der Kontinuität beim Start einer neuen Rechnungsperiode
- Erstellung genauer Finanzabschlüsse
- Unterstützung der Einhaltung von Rechnungslegungsstandards

**Eröffnungssalden für Bankkonten**

Wenn Sie Transaktionen für das aktuelle Geschäftsjahr importieren, entsprechen diese möglicherweise nicht Ihrem tatsächlichen Kontostand. Ihr Kontostand umfasst alle Transaktionen seit der Erstellung des Kontos, nicht nur die importierten.

Ein Eröffnungssaldo stellt alle Aktivitäten vor Ihren importierten Daten dar. Dies stellt sicher, dass Ihr Hauptbuch mit Ihrem Kontostand übereinstimmt und bestätigt, dass alle Transaktionen korrekt erfasst sind.

:::info
Bei verbundenen Bankkonten fügt Fiskl den Eröffnungssaldo automatisch als Transaktion hinzu. Sie müssen ihn nicht manuell erstellen.
:::

## Bevor Sie beginnen

Bestätigen Sie vor der Erstellung von Eröffnungssalden Folgendes:

- Sie haben Zugriff auf Ihre vorherigen Kontoauszüge oder Bankauszüge
- Sie kennen das Datum Ihrer ältesten importierten Transaktion
- Sie haben identifiziert, welche Hauptbuchkonten Eröffnungssalden benötigen

## Erstellen eines Eröffnungssaldos

Die Schritte unterscheiden sich leicht je nachdem, ob das Konto neu ist oder bereits Transaktionen enthält.

**Neues Konto ohne Transaktionen**

Verwenden Sie dies, wenn Ihr Bankkonto nicht verbunden ist und Sie ein neues Hauptbuchkonto mit einem Anfangssaldo einrichten:

1. Wählen Sie im linken Menü **Buchhaltung** > **Transaktionen**
2. Wählen Sie das Konto aus der Dropdown-Liste **Konto auswählen** aus
3. Wählen Sie **+ Sollbuchung** oder **- Habenbuchung** je nach Vorzeichen Ihres Eröffnungssaldos
4. Geben Sie im Feld **Name** „Eröffnungssaldo" ein
5. Geben Sie den Eröffnungssaldobetrag ein
6. Wählen Sie **Eröffnungssaldo** als Kategorie
7. Setzen Sie das Datum auf den Anfang Ihrer Rechnungsperiode
8. Wählen Sie **Speichern**

Der oben auf dem Bildschirm angezeigte Kontosaldo wird sofort aktualisiert, um den eingegebenen Betrag widerzuspiegeln.

**Bestehendes Konto mit Transaktionen**

Verwenden Sie dies, wenn Ihr Konto bereits Transaktionen enthält, z. B. wenn Sie von einem vorherigen Buchhaltungssystem wechseln. Der Eröffnungssaldo sollte den Schlusssaldo aus Ihrem vorherigen System widerspiegeln. Verwenden Sie alternativ den Saldo auf Ihrem letzten Kontoauszug vor Ihrer ältesten Transaktion in Fiskl:

1. Wählen Sie im linken Menü **Buchhaltung** > **Transaktionen**
2. Wählen Sie das Konto aus der Dropdown-Liste **Konto auswählen** aus
3. Suchen Sie Ihre älteste bestehende Transaktion und notieren Sie deren Datum
4. Wählen Sie **+ Sollbuchung** oder **- Habenbuchung** je nach Vorzeichen Ihres Eröffnungssaldos
5. Geben Sie im Feld **Name** „Eröffnungssaldo" ein
6. Geben Sie den Eröffnungssaldobetrag ein
7. Wählen Sie **Eröffnungssaldo** als Kategorie
8. Setzen Sie das Datum auf einen Tag vor Ihrem ältesten Transaktionsdatum
9. Wählen Sie **Speichern**

:::tip
Wenn Sie von einem anderen Buchhaltungssystem wechseln, geben Sie vor der Erfassung neuer Transaktionen Eröffnungssalden für jedes Konto ein. Dies hält Ihre Aufzeichnungen von Anfang an konsistent.
:::

## Anzeigen von Eröffnungssalden

Sie können Eröffnungssaldotransaktionen an mehreren Stellen anzeigen:

**In einem bestimmten Hauptbuchkonto:** Gehen Sie zu dem Konto und filtern Sie Transaktionen nach der Kategorie **Eröffnungssaldo**.

**Über alle Konten hinweg:** Wählen Sie im linken Menü **Buchhaltung** > **Transaktionen** und wählen Sie das Hauptbuchkonto **Eröffnungssaldo**, um alle Einträge zusammen anzuzeigen.

**In Berichten:** Eröffnungssalden werden in der Saldenbilanz, den Transaktionen nach Konto und den Hauptbuchberichten angezeigt.

## Eröffnungssalden — Migration von einem anderen Buchhaltungssystem

Wenn Sie die Buchhaltungssoftware wechseln, müssen Sie Ihre Schlussbilanz aus dem alten System als Eröffnungssalden in Fiskl replizieren.

**So funktioniert es**

1. Exportieren Sie die **Saldenbilanz** aus Ihrem vorherigen System (z. B. Xero)
2. Geben Sie in Fiskl den **Eröffnungssaldo** jedes Kontos ein, um den **Schlusssaldo** aus dem alten System zu entsprechen
3. Sobald alle Salden korrekt eingegeben sind, sollte das **Eröffnungssaldo-Hauptbuchkonto** in Fiskl **null** anzeigen — dies bestätigt, dass die Einträge ausgeglichen sind

Wenn Sie unsicher sind, welche Konten Eröffnungssalden benötigen oder warum Ihre Saldenbilanz nicht ausgeglichen ist, wählen Sie **Ask Fi** in der oberen rechten Ecke des Bildschirms, um spezifische Anleitungen zu Ihren Konten zu erhalten.

:::caution
Wenn das Eröffnungssaldokonto nicht null anzeigt, überprüfen Sie jeden Eintrag auf fehlende oder falsche Beträge. Ein unausgeglichener Eröffnungssaldo kann alle zukünftigen Berichte beeinflussen.
:::

## Häufige Probleme

<details>
<summary>Mein Eröffnungssaldo stimmt nicht mit meinem Kontoauszug überein</summary>

Dies bedeutet normalerweise, dass das Datum oder der Betrag falsch ist. Überprüfen Sie Folgendes:

1. Bestätigen Sie, dass das Eröffnungssalddatum auf einen Tag vor Ihrer ältesten importierten Transaktion gesetzt ist
2. Überprüfen Sie Ihren Kontoauszug auf den Saldo an diesem Datum
3. Stellen Sie sicher, dass um das Umstellungsdatum herum keine doppelten Transaktionen vorhanden sind
4. Wenn die Abweichung bestehen bleibt, überprüfen Sie den Transaktionsverlauf in den Aufzeichnungen Ihrer Bank und passen Sie den Eröffnungssaldobetrag entsprechend an

</details>

<details>
<summary>Das Eröffnungssaldokonto zeigt nach der Migration nicht null an</summary>

Jeder Sollbuchungseintrag in Ihren Eröffnungssalden muss einen entsprechenden Habenbuchungseintrag haben. Ein nicht-null Saldo bedeutet, dass mindestens ein Konto fehlt oder falsch eingegeben wurde.

1. Gehen Sie zu **Berichtswesen** > **Saldenbilanz** und identifizieren Sie Konten mit unerwarteten Salden
2. Überprüfen Sie jeden Saldo anhand Ihrer Aufzeichnungen aus dem vorherigen System
3. Fügen Sie Eröffnungssaldeneinträge hinzu oder korrigieren Sie diese, bis das Eröffnungssaldokonto null erreicht

</details>

<details>
<summary>Ich kann die Kategorie Eröffnungssaldo beim Hinzufügen einer Transaktion nicht finden</summary>

Die Kategorie **Eröffnungssaldo** ist nur verfügbar, wenn Sie eine Transaktion direkt innerhalb eines Hauptbuchkontos hinzufügen. Stellen Sie sicher, dass Sie sich in **Buchhaltung** > **Transaktionen** befinden, ein bestimmtes Konto ausgewählt haben und die Schaltfläche **+ Sollbuchung** oder **- Habenbuchung** verwenden, um die Transaktion zu erstellen.

</details>

## Verwandte Themen

- [Kontenrahmen](/accounting/chart-of-accounts) — Anzeigen und Verwalten Ihrer Hauptbuchkonten
- [Übersicht Buchungssätze](/accounting/journal-entries/overview) — Erfahren Sie, wie Buchungssätze in Fiskl funktionieren
- [Saldenbilanz](/core-features/accounting/reports/trial-balance) — Überprüfen Sie, ob Ihre Konten ausgeglichen sind
- [Hauptbuch](/reporting/general-ledger) — Überprüfen Sie alle Transaktionen über Ihre Konten hinweg
- [Transaktionen nach Konto](/reporting/transactions-by-account) — Zeigen Sie Transaktionen gefiltert nach Hauptbuchkonto an
