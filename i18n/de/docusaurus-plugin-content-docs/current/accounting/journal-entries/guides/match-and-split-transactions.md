---
title: "Zuordnung und Aufteilung von Transaktionen"
description: "Erfahren Sie, wie Sie Banktransaktionen mit Rechnungen und Ausgaben abgleichen und Transaktionen auf mehrere Konten aufteilen können in Fiskl."
keywords: ["transaction matching", "split transaction", "reconcile", "bank transactions", "multi-currency", "accounting"]
sidebar_position: 5
tags:
  - Accounting
  - Journal entry
  - Transactions
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Dieses Handbuch erläutert, wie Sie Banktransaktionen mit Ihren erfassten Finanzaktivitäten abgleichen und Transaktionen auf mehrere Konten verteilen können in Fiskl.

## Vor dem Start

- Ihr Bankkonto ist verbunden und Transaktionen wurden in Fiskl importiert
- Der Datensatz, den Sie abgleichen möchten, wurde bereits erstellt — eine Rechnung für einen Kunden, eine Lieferantenrechnung (hinzugefügt über Verbindlichkeiten oder KI-Ausgabe) oder eine eingehende oder ausgehende Zahlung
- Für den Mehrwährungsabgleich sind die relevanten Währungen in der [Währungsverwaltung](/settings/currency-management) aktiviert

## Was ist Transaktionsabgleich?

Der Transaktionsabgleich ermöglicht es Ihnen, Ihre erfassten Finanzaktivitäten mit Ihren Banktransaktionen abzustimmen. Dies hält Ihre Buchhaltungsunterlagen korrekt und stellt sicher, dass Ihre Finanzdaten Ihre tatsächliche Position widerspiegeln.

Häufige Abgleichszenarien sind:

- Abgleich einer Ausgabe mit einer Banktransaction
- Abgleich einer Rechnung mit einer erhaltenen Zahlung
- Abgleich einer Rechnungszahlung mit einer erhaltenen Zahlung
- Abstimmung einer Stapelzahlung (z. B. eine Stripe-Auszahlung) mit mehreren Rechnungen
- Abgleich einer erhaltenen Zahlung mit einer Forderungstransaction

## Transaktionen abgleichen

1. Wählen Sie in der linken Seitenleiste **Buchhaltung** > **Kontenrahmen** oder **Buchhaltung** > **Transaktionen**
2. Suchen Sie das Konto, an dem Sie arbeiten möchten, und öffnen Sie es
3. Wählen Sie **Abgleiche anzeigen** bei der Transaktion
4. Wählen Sie die entsprechende Transaktion oder Transaktionen aus der Liste
5. Überprüfen Sie die Abgleichdetails
6. Wählen Sie **Speichern**, um den Prozess abzuschließen

:::info
Wenn Sie eine Zahlung mit einer Rechnung abgleichen, erstellt Fiskl automatisch einen Zahlungsdatensatz für diese Rechnung.
:::

## Transaktionen in verschiedenen Währungen abgleichen

Der Prozess ist gleich wie bei einem Standardabgleich. Bei der Arbeit mit Mehrwährungstransaktionen zeigt Fiskl die geltenden Wechselkurse an. Sie können die Beträge oder Kurse nach Bedarf anpassen, um die Transaktion auszugleichen.

## Was ist Transaktionsaufteilung?

Die Aufteilung ermöglicht es Ihnen, eine einzelne Transaktion in mehrere Teile zu unterteilen und jeden Teil einem anderen Konto oder einer anderen Kategorie im Hauptbuch zuzuweisen. Dies ist nützlich, um komplexe Ausgaben oder Einnahmen genau zu erfassen.

<details>
<summary>Ein Beispiel einer realen aufgeteilten Transaktion</summary>

Stellen Sie sich vor, Sie sind ein freiberuflicher Marketingberater, der an einer Fachkonferenz teilnimmt. Sie zahlen eine Gebühr von 1.500 USD für die Veranstaltung, aber diese Gebühr deckt mehrere Aspekte Ihrer Geschäftsausgaben.

So könnten Sie diese Transaktion aufteilen:

- 800 USD für die Konferenzregistrierung (Ausgaben > Betriebsausgaben > Bildung und Schulung)
- 400 USD für Workshop-Materialien (Ausgaben > Betriebsausgaben > Büromaterial)
- 300 USD für die enthaltene Unterkunft (Ausgaben > Betriebsausgaben > Reisen — Unterkunft)

Diese Aufteilung ermöglicht es Ihnen, Ihre Ausgaben für Buchhaltungs- und Steuerzwecke genau zu kategorisieren:

- Die Konferenzregistrierungsgebühr ist eine direkte Berufsentwicklungsausgabe
- Die Workshop-Materialien sind Büromaterial, das Sie über die Konferenz hinaus nutzen werden
- Der Unterkunftsanteil ist eine Reiseausgabe

Durch die Aufteilung der Transaktion auf diese Weise können Sie:

- Verschiedene Arten von Geschäftsausgaben genauer verfolgen
- Besser verstehen, wie Ihr Budget für berufliche Entwicklung verwendet wird
- Möglicherweise verschiedene Steuerabzüge auf der Grundlage von Ausgabenkategorien geltend machen
- Einblicke in die Kostenaufschlüsselung der Teilnahme an Fachveranstaltungen erhalten

</details>

## Transaktionen aufteilen

1. Wählen Sie in der linken Seitenleiste **Buchhaltung** > **Kontenrahmen** oder **Buchhaltung** > **Transaktionen**
2. Suchen Sie die Transaktion, die Sie aufteilen möchten, und öffnen Sie sie
3. Wählen Sie **Aufteilen**
4. Fügen Sie neue Aufteilungszeilen hinzu und geben Sie den Betrag, das Konto und optional einen Lieferanten oder Kunden für jede an
5. Überprüfen Sie, dass die Aufteilungsbeträge dem Gesamttransaktionsbetrag entsprechen
6. Wählen Sie **Speichern**, um zu bestätigen

:::info
Fiskl zeigt Transaktionsbeträge standardmäßig als positive Werte an. Für Kreditstransaktionen geben Sie Aufteilungsbeträge als negative Zahlen ein, um sie korrekt zu erfassen.
:::

<details>
<summary>Tipps für effektive Aufteilung</summary>

- Wenn die Summe der Aufteilungen nicht ausgeglichen ist, zeigt Fiskl die verbleibende Differenz an. Wählen Sie die Differenz, um automatisch eine neue Aufteilungszeile für diesen Betrag hinzuzufügen
- Verwenden Sie aussagekräftige Beschreibungen und fügen Sie unterstützende Dateien und Bilder an
- Um Änderungen vorzunehmen, öffnen Sie die Transaktion und bearbeiten Sie die Aufteilungszeilen direkt

</details>

## Abgleich und Aufteilung mit mehreren Währungen

Fiskl unterstützt den Abgleich und die Aufteilung über verschiedene Währungen hinweg. Wenn Sie eine Mehrwährungstransaktion abgleichen oder aufteilen, zeigt Fiskl die Wechselkurse für jede beteiligte Währung an. Sie können die Beträge oder Kurse anpassen, um die Transaktion auszugleichen, und wählen, welchen Währungskurs Sie anpassen möchten, wenn Sie mit Mehrwährungsaufteilungen arbeiten.

Genauer Abgleich und Aufteilung ist die Grundlage zuverlässiger Finanzberichterstattung in Fiskl.

## Häufige Probleme

<details>
<summary>Es werden keine Abgleiche angezeigt, wenn ich „Abgleiche anzeigen" wähle</summary>

Dies bedeutet normalerweise, dass die Transaktionen auf beiden Seiten noch nicht importiert oder erfasst wurden. Überprüfen Sie:

1. Ihr Bank-Feed wurde synchronisiert — gehen Sie zu **Buchhaltung** > **Transaktionen** und lösen Sie ggf. eine manuelle Synchronisierung aus
2. Die entsprechende Rechnung, Ausgabe oder Zahlung existiert und hat den richtigen Status
3. Die Transaktionsbeträge sind nah beieinander genug, damit Fiskl einen Abgleich vorschlägt (kleine Abweichungen aufgrund von Gebühren sind normal — Sie können manuell anpassen)

</details>

<details>
<summary>Meine Aufteilungsbeträge ergeben nicht die Gesamtsumme</summary>

Fiskl zeigt die nicht zugewiesene Differenz oben im Aufteilungsfenster an. Wählen Sie den Differenzbetrag, um automatisch eine neue Aufteilungszeile für den verbleibenden Saldo zu erstellen. Alle Aufteilungszeilen müssen den ursprünglichen Transaktionsbetrag ergeben, bevor Sie speichern können.

</details>

<details>
<summary>Der für einen Mehrwährungsabgleich angezeigte Wechselkurs sieht falsch aus</summary>

Fiskl verwendet den Wechselkurs zum Zeitpunkt der Transaktionseingabe. Sie können den Kurs oder den umgerechneten Betrag direkt im Abgleichsfenster manuell anpassen. Wenn Sie einen bestimmten Kurs aus Compliance-Gründen benötigen, geben Sie ihn ein, bevor Sie **Fertig** wählen.

</details>

<details>
<summary>Eine Banktransaktion erschien, nachdem ich sie bereits manuell erfasst hatte — jetzt habe ich ein Duplikat</summary>

Dies kann vorkommen, wenn automatische Bank-Feeds um einige Tage verzögert sind. Wenn Sie eine Transaktion manuell erfasst und dieselbe Transaktion dann automatisch importiert wird, erscheinen beide in Ihrer Liste nicht abgestimmter Transaktionen.

Wählen Sie **Abgleiche anzeigen** bei der manuell erfassten Transaktion und gleichen Sie sie mit der importierten Banktransaktion ab. Dies gleicht sie ab und löscht beide aus Ihrer Liste nicht abgestimmter Transaktionen. Um diese Situation zu vermeiden, überprüfen Sie Ihre nicht abgestimmten Banktransaktionen, bevor Sie Einträge manuell hinzufügen.

</details>

<details>
<summary>Wie überprüfe oder passe ich automatisch abgeglichene oder kategorisierte Transaktionen an?</summary>

Fiskl kann Banktransaktionen automatisch mit Rechnungen und Ausgaben abgleichen und Transaktionen auf der Grundlage gelernter Muster kategorisieren. Beide Einstellungen finden Sie unter **Buchhaltung** > **Buchhaltungseinstellungen**.

Wir empfehlen, automatisch abgeglichene und kategorisierte Transaktionen regelmäßig zu überprüfen, um sicherzustellen, dass alles wie erwartet erfasst ist. Wenn Sie den Abgleich und die Kategorisierung lieber manuell verwalten möchten, können Sie beide Einstellungen unter **Buchhaltungseinstellungen** ausschalten.

</details>

## Verwandte Themen

- [Manuelle Transaktionen](/accounting/journal-entries/guides/manual-transactions) — Erfassen Sie Transaktionen manuell in Ihren Konten
- [Transaktionen zwischen Konten verschieben](/accounting/journal-entries/guides/move-transactions) — Übertragen Sie Transaktionen auf das richtige Konto
- [Mehrwährungstransaktionen](/accounting/journal-entries/guides/multi-currency-transactions) — Verstehen Sie, wie Fiskl Wechselkurse und Währungsumrechnung verarbeitet
- [Kontenrahmen](/accounting/chart-of-accounts) — Zeigen Sie Ihre Kontostruktur an und verwalten Sie sie
