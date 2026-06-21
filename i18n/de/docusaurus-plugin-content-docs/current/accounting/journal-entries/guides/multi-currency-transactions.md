---
title: "Verwaltung von Transaktionen in mehreren Währungen"
description: "Erfahren Sie, wie Sie Transaktionen in mehreren Währungen in Fiskl erfassen und verwalten, Wechselkurse verfolgen und genaue Finanzunterlagen über verschiedene Währungen hinweg führen."
keywords: ["multi-currency", "foreign currency", "exchange rate", "currency transactions", "base currency", "currency conversion"]
sidebar_position: 1
tags:
  - Accounting
  - Multi-currency
  - Banking
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie Mehrwährungstransaktionen in Fiskl erfassen und verwalten. Nutzen Sie sie, wenn Sie Zahlungen oder Belege in einer anderen Währung als Ihrer Basiswährung nachverfolgen müssen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

- Um dedizierte Konten für Fremdwährungen zu nutzen, richten Sie diese zunächst in Ihrem [Kontenrahmen](/accounting/chart-of-accounts) ein.
- Fiskl ruft Live-Wechselkurse automatisch ab. Sie können benutzerdefinierte Wechselkurse in der [Währungsverwaltung](/settings/currency-management) anzeigen, hinzufügen und bearbeiten.

## Warum in der Originalwährung erfassen?

Die Erfassung von Transaktionen in ihrer Originalwährung ermöglicht genauere Bücher. Sie können den tatsächlich gezahlten oder erhaltenen Betrag nachverfolgen, Wechselkursänderungen im Zeitverlauf überwachen und Steuererklärungsanforderungen in verschiedenen Ländern erfüllen.

**Beispiel:** Sie zahlen eine Hotelrechnung von €1.500 mit einer USD-Karte. Ihre Bank berechnet $1.789,35. In Fiskl erfassen Sie €1.500 als Transaktionsbetrag und geben $1.789,35 als Basiswährungsäquivalent ein. Beide Beträge werden gespeichert, was Ihnen einen vollständigen Datensatz bietet.

## Erfassung einer Mehrwährungstransaktion

Fiskl bietet zwei Methoden, je nachdem, wie Sie Ihre Konten verwalten.

### Methode 1: In einer anderen Währung erfassen

Verwenden Sie diese Methode, wenn die Transaktion über ein Basiswährungskonto läuft, der ursprüngliche Betrag aber in einer Fremdwährung vorliegt.

1. Gehen Sie zum relevanten Kasse- oder Kassenäquivalentkonto.
2. Wählen Sie **+Soll** (Einnahmen) oder **+Haben** (Ausgaben).
3. Geben Sie die Transaktionsdetails ein.
4. Wählen Sie **In einer anderen Währung erfassen**.
5. Wählen Sie die Währung aus dem Dropdown. Fiskl trägt den Betrag automatisch in dieser Fremdwährung ein.
6. Überprüfen Sie den angezeigten Wechselkurs. Passen Sie ihn bei Bedarf manuell an.
7. Wählen Sie **Speichern**.

Die Transaktion erscheint in Ihrem Konto und zeigt sowohl den Fremdwährungsbetrag als auch das Basiswährungsäquivalent.

### Methode 2: Ein Fremdwährungskonto verwenden

Verwenden Sie diese Methode, wenn Sie regelmäßig mit einer bestimmten Fremdwährung arbeiten und ein dediziertes Konto dafür pflegen.

1. Gehen Sie zum Fremdwährungskonto (z. B. Kasse — EUR).
2. Wählen Sie **+Soll** (Einnahmen) oder **+Haben** (Ausgaben).
3. Geben Sie die Transaktionsdetails in der Fremdwährung ein.
4. Überprüfen Sie das angezeigte Basiswährungsäquivalent und den Wechselkurs. Passen Sie diese bei Bedarf manuell an.
5. Wählen Sie **Speichern**.

Die Transaktion wird sowohl in der Fremdwährung als auch in Ihrer Basiswährung erfasst.

:::tip
Wenn Sie häufig mit einer bestimmten Fremdwährung arbeiten, hält ein dediziertes Konto Ihre Aufzeichnungen übersichtlicher und macht die Berichterstellung einfacher.
:::

## Mehrwährungstransaktionen anzeigen

Sie können Ihre Mehrwährungstransaktionen an mehreren Orten finden:

- Im spezifischen Konto, in dem Sie diese erfasst haben
- In Ihrem [Kontenrahmen](/accounting/chart-of-accounts) unter der relevanten Kategorie
- In Berichten wie der [Bilanz](/reporting/balance-sheet) oder der [Gewinn- und Verlustrechnung](/reporting/profit-and-loss)

Finanzberichte zeigen Beträge standardmäßig in Ihrer Basiswährung an.

## Wechselkursgewinne und -verluste

Wechselkursbewegungen können Ihre Finanzaussagen beeinflussen. Es gibt zwei Arten, auf die Sie achten sollten:

- **Realisierte Gewinne und Verluste** entstehen, wenn Sie Geld zwischen Währungen umwandeln — beispielsweise wenn eine Fremdwährungszahlung auf Ihrem Basiswährungsbankkonto eingeht.
- **Nicht realisierte Gewinne und Verluste** sind mögliche Differenzen auf ausstehenden Fremdwährungssalden, die durch Kursänderungen seit der ursprünglichen Transaktion entstehen. Diese werden normalerweise am Ende eines Berichtszeitraums berechnet.

:::info
Fiskl berechnet Wechselkurse automatisch zum Zeitpunkt jeder Transaktion. Sie können Kurse manuell anpassen, wenn Ihr Bankensatz vom Systemsatz abweicht.
:::

## Häufige Probleme

<details>
<summary>Der angezeigte Wechselkurs entspricht nicht meinem Banksatz</summary>

Fiskl ruft automatisch einen Mid-Market-Kurs ab. Ihre Bank kann einen anderen Kurs anwenden, einschließlich Gebühren oder eines Spreads. Geben Sie den genauen Kurs aus Ihrem Kontoauszug im Wechselkursfeld ein, bevor Sie **Speichern** wählen. Dies stellt sicher, dass Ihr Basiswährungsbetrag Ihrer tatsächlichen Bankgebühr entspricht.

</details>

<details>
<summary>Ich habe die Transaktion in der falschen Währung erfasst</summary>

Transaktionen können nach der Erstellung nicht bearbeitet werden. Löschen Sie die falsche Transaktion und geben Sie sie mit der korrekten Währung erneut ein. Gehen Sie zum Konto, finden Sie die Transaktion und wählen Sie **Löschen**. Folgen Sie dann erneut den Schritten unter [Erfassung einer Mehrwährungstransaktion](#erfassung-einer-mehrwährungstransaktion).

</details>

<details>
<summary>Mein Fremdwährungskonto wird nicht in der Dropdown-Liste angezeigt</summary>

Das Konto muss erstellt werden, bevor es als Option angezeigt wird. Gehen Sie zu **Buchhaltung** > **Kontenrahmen** und fügen Sie ein neues Konto mit der zugewiesenen korrekten Währung hinzu. Nachdem Sie es gespeichert haben, wird es im Kontoauswähler angezeigt.

</details>

<details>
<summary>Meine Basiswährungssumme sieht nach einer Fremdwährungseingabe falsch aus</summary>

Überprüfen Sie den Wechselkurs, der zum Zeitpunkt der Eingabe angewendet wurde. Öffnen Sie die Transaktion und überprüfen Sie den angezeigten Kurs. Wenn dieser von Ihrem Banksatz abweicht, löschen Sie die Transaktion und geben Sie sie mit dem korrekten Kurs erneut ein. Überprüfen Sie bei historischen Transaktionen, ob eine manuelle Kursanpassung vorgenommen wurde.

</details>

## Verwandte Themen

- [Kontenrahmen](/accounting/chart-of-accounts) — Richten Sie Ihre Konten ein und verwalten Sie diese, einschließlich Fremdwährungskonten
- [Buchhaltungseinstellungen](/settings/accounting-settings) — Konfigurieren Sie Ihre Basiswährung und Buchhaltungseinstellungen
- [Bilanz](/reporting/balance-sheet) — Zeigen Sie Vermögens- und Verbindlichkeitssalden über alle Währungen hinweg an
- [Gewinn- und Verlustrechnung](/reporting/profit-and-loss) — Überprüfen Sie Umsatz- und Ausgabensummen in Ihrer Basiswährung
- [Manuelle Transaktionen](/accounting/journal-entries/guides/manual-transactions) — Erfassen Sie Transaktionen manuell über Konten hinweg
