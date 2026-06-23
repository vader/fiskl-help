---
title: "Mehrfach-Buchungssätze"
description: "Erfahren Sie, wie Sie mehrere Buchungssätze in Fiskl erstellen, um komplexe Transaktionen über mehrere Hauptbuchkonten in einem einzigen ausgeglichenen Buchungssatz zu erfassen."
keywords: ["multi-journal entry", "journal entry", "double-entry bookkeeping", "ledger accounts", "debits and credits", "accounting", "Fiskl"]
sidebar_position: 2
tags:
  - Accounting
  - Journal Entries
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie Multi-Buchungssätze in Fiskl erstellen. Verwenden Sie Multi-Buchungssätze, wenn eine einzelne Transaktion mehr als zwei Konten gleichzeitig betrifft.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

- Ihr Kontenrahmen muss eingerichtet sein, bevor Sie Buchungssätze erstellen. Siehe [Kontenrahmen](/accounting/chart-of-accounts).
- Wenn Sie neu im Umgang mit Sollbuchungen und Habenbuchungen sind, erweitern Sie vor dem Start den Abschnitt **Was sind Sollbuchungen und Habenbuchungen?** unten.
- Wenn Sie nur einen einfachen zweizeiligen Eintrag benötigen, ist ein [manueller Buchungssatz](/accounting/journal-entries/guides/manual-transactions) möglicherweise alles, was Sie brauchen.

## Was ist ein Multi-Buchungssatz?

Stellen Sie sich einen Multi-Buchungssatz als eine Möglichkeit vor, ein einzelnes Finanzereignis zu erfassen, das mehrere Stellen in Ihren Büchern gleichzeitig betrifft.

Die meisten alltäglichen Transaktionen sind einfach — Geld verlässt ein Konto und geht in ein anderes. Aber einige Transaktionen sind komplexer. Wenn Sie beispielsweise die Gehaltsabrechnung durchführen, verlässt Geld Ihr Bankkonto, Löhne gehen an Arbeitnehmer und Steuerschulden werden erfasst — alles aus einem Ereignis. Ein Multi-Buchungssatz behandelt all das in einem einzigen, organisierten Datensatz.

Jeder Multi-Buchungssatz muss sich ausgleichen: die Gesamtsumme auf einer Seite muss der Gesamtsumme auf der anderen Seite entsprechen. Fiskl lässt Sie nicht speichern, bis das der Fall ist.

Häufige Anwendungen sind:

- Durchführung der Gehaltsabrechnung über Löhne, Steuerschulden und ein Bankkonto
- Aufteilung eines Einkaufs auf mehrere Ausgabenkategorien
- Erfassung von Abschreibungen über mehrere Anlagekonten
- Aufteilung einer Darlehenszahlung zwischen Kapital und Zinsen

<details>
<summary>Was sind Sollbuchungen und Habenbuchungen?</summary>

Jede Transaktion ist Geld, das sich von einem Ort zu einem anderen bewegt. Sollbuchungen und Habenbuchungen sind die Möglichkeit, beide Seiten dieser Bewegung zu erfassen. Jeder Eintrag benötigt mindestens einen von jedem, und die Gesamtsummen müssen übereinstimmen.

**Ein reales Beispiel:** Ihr Unternehmen zahlt eine Stromrechnung von 500 USD von Ihrem Bankkonto.

- Die 500 USD verlassen Ihr Bankkonto → **Habenbuchung** Bankkonto 500 USD
- Die 500 USD gehen zu Stromkosten → **Sollbuchung** Stromausgaben 500 USD

Die 500-USD-Sollbuchung entspricht der 500-USD-Habenbuchung — der Eintrag stimmt ab.

Es funktioniert genauso, unabhängig davon, wie viele Zeilen ein Eintrag hat. Wenn sich eine Transaktion über fünf Konten erstreckt, müssen alle Sollbuchungen immer noch dieselbe Gesamtsumme wie alle Habenbuchungen ergeben.

Eine einfache Merkregel:

- **Sollbuchung** = wohin das Geld geht
- **Habenbuchung** = woher das Geld kommt

</details>

Multi-Buchungssätze folgen den Regeln der doppelten Buchführung. Jeder Eintrag benötigt mindestens eine Sollbuchungszeile und eine Habenbuchungszeile, und die Gesamtsumme muss sich auf null ausgleichen, bevor Sie speichern können.

## Erstellen Sie einen Multi-Buchungssatz

1. Wechseln Sie zu **Accounting** > **Multi Journal**.
2. Wählen Sie **New entry** aus.
3. Geben Sie einen Namen für den Buchungssatz ein.
4. Geben Sie ein **Datum** für die Transaktion ein.
5. Wählen Sie **Add internal notes about this journal entry** aus, um eine Beschreibung hinzuzufügen (optional, aber empfohlen).
6. Fügen Sie Ihre erste Zeile hinzu:
   - Wählen Sie ein **Ledger account** aus dem Dropdown-Menü aus.
   - Geben Sie den Betrag in der Spalte **Debit** oder **Credit** ein.
   - Wählen Sie **Client**, **Vendor** oder **Tax** aus, wenn Sie die Zeile an einen bestimmten Kunden, Lieferanten oder Steuersatz verknüpfen möchten (optional).
7. Wählen Sie **Add line** aus, um das nächste Konto hinzuzufügen.
8. Wiederholen Sie den Vorgang, bis alle betroffenen Konten eingeschlossen sind.
9. Überprüfen Sie, ob der Indikator **Difference** am unteren Ende Null anzeigt.
10. Wählen Sie das Büroklammer-Symbol, um ein Dokument anzuhängen (optional).
11. Wählen Sie **Save** aus.

Nach dem Speichern wird der Eintrag in Ihrer Buchungssatzliste angezeigt und alle betroffenen Konten werden sofort aktualisiert. Das Hinzufügen einer Beschreibung zu jeder Zeile — nicht nur zur Eintragsüberschrift — macht Einträge bei der späteren Überprüfung von Berichten oder beim Auditing Ihrer Bücher leichter zu verstehen.

## Der Bilanzindikator

Der Indikator **Difference** am unteren Ende des Eintragsformulars zeigt die laufende Lücke zwischen den Gesamtsollbuchungen und den Gesamthabenbuchungen. Er wird jedes Mal aktualisiert, wenn Sie eine Zeile hinzufügen oder bearbeiten.

- **Null** — der Eintrag stimmt ab und kann gespeichert werden
- **Jeder andere Wert** — der Eintrag ist nicht ausgeglichen und kann nicht gespeichert werden

### Fügen Sie eine Zeile hinzu, um das Gleichgewicht zu korrigieren

Wenn die Differenz ungleich null ist, können Sie auf zwei Arten eine Ausgleichszeile hinzufügen:

**Wählen Sie den Differenzbetrag aus** — Fiskl fügt automatisch eine neue Zeile mit dem vorausgefüllten Betrag hinzu. Wählen Sie das Konto für diese Zeile aus.

**Wählen Sie Add line aus** — Eine leere Zeile wird hinzugefügt. Wählen Sie das Konto aus und geben Sie den verbleibenden Betrag in der Spalte **Debit** oder **Credit** manuell ein.

### Passen Sie einen Wechselkurs an, um das Gleichgewicht zu korrigieren

Bei Multi-Währungs-Einträgen können kleine Unterschiede aus Rundungen bei der automatischen Wechselkursumrechnung resultieren. Fiskl verfügt über eine Automatische Anpassungsoption, die den Wechselkurs auf einer Zeile neu berechnet, um den Eintrag auf null zu bringen.

So verwenden Sie die automatische Anpassung:

1. Wählen Sie **Auto adjust FX** auf der betreffenden Zeile aus.
2. Fiskl aktualisiert den Wechselkurs, sodass sich der Eintrag ausgleicht.

Um die Rate manuell einzustellen:

1. Wählen Sie das Wechselkursfeld auf der betreffenden Zeile aus.
2. Geben Sie den Kurs ein, der Ihren Unterlagen entspricht.

Häufige Ursachen für einen nicht ausgeglichenen Eintrag:

- Ein Betrag wurde in die falsche Spalte eingegeben (Sollbuchung statt Habenbuchung oder umgekehrt)
- Ein Tippfehler in einem Zeilenbetrag
- Ein Rundungsunterschied bei einer Multi-Währungs-Umrechnung

## Multi-Währungs-Einträge

Wenn Ihr Unternehmen mehr als eine Währung verwendet, kann jede Zeile in einem Multi-Buchungssatz eine andere Währung verwenden. Fiskl konvertiert jeden Betrag in Ihre Basiswährung mit dem Wechselkurs am Transaktionsdatum.

Die Währung auf Bankkonten, Anlagekonten und Verbindlichkeitskonten ist festgelegt — sie verwendet die Währung, die auf diesem Konto eingestellt ist. Bei Ausgaben- und Einnahmekonten können Sie für jede Zeile eine andere Währung wählen.

So geben Sie eine Zeile mit Fremdwährung ein:

1. Fügen Sie eine Zeile hinzu und wählen Sie das Konto aus.
2. Wählen Sie die Währung aus dem Währungs-Dropdown in dieser Zeile aus.
3. Geben Sie den Betrag in der Fremdwährung ein.
4. Klicken Sie aus dem Feld — Fiskl zeigt automatisch den umgerechneten Basiswährungsbetrag an.

Sie können den Wechselkurs in jeder Zeile überschreiben, wenn der Standard nicht mit Ihren Unterlagen übereinstimmt. Die Bilanzprüfung verwendet immer Basiswährungsbeträge über alle Zeilen hinweg.

Weitere Informationen finden Sie unter [Multi-Currency Transactions](/accounting/journal-entries/guides/multi-currency-transactions).

## Bearbeiten oder Löschen Sie einen Multi-Buchungssatz

### Bearbeiten Sie einen Eintrag

1. Wechseln Sie zu **Accounting** > **Journal Entries**.
2. Suchen Sie den Eintrag und wählen Sie ihn aus, um ihn zu öffnen.
3. Nehmen Sie Ihre Änderungen vor.
4. Wählen Sie **Save** aus.

Alle betroffenen Konten werden unmittelbar nach dem Speichern aktualisiert.

### Löschen Sie einen Eintrag

1. Öffnen Sie den Eintrag, den Sie löschen möchten.
2. Wählen Sie **Delete** aus.
3. Bestätigen Sie die Löschung.

:::warning
Das Löschen eines Buchungssatzes kann nicht rückgängig gemacht werden. Alle betroffenen Kontostände werden rückgängig gemacht. Wenn sich der Eintrag innerhalb eines abgeschlossenen Zeitraums befindet, überprüfen Sie Ihre Berichte vor dem Löschen.
:::

Um tiefere Einblicke zu erhalten, wie Ihre Buchungssätze Ihre Finanzen beeinflussen, wählen Sie das Symbol **Ask Fi** in der oberen rechten Ecke des Bildschirms. Fi kann Fragen zu Ihren Konten, Kontostanden und Transaktionsverlauf beantworten.

## Häufig auftretende Probleme

<details>
<summary>Der Eintrag wird nicht gespeichert — „Entry is not balanced"</summary>

Die Gesamtsollbuchungen und die Gesamthabenbuchungen müssen gleich sein, bevor Sie speichern können. Überprüfen Sie den Indikator **Difference** am unteren Ende des Formulars.

Häufige Ursachen:

- Ein Betrag wurde in die falsche Spalte eingegeben (Sollbuchung statt Habenbuchung oder umgekehrt)
- Ein Zeilenbetrag enthält einen Tippfehler oder einen kleinen Rundungsunterschied
- Eine Multi-Währungs-Zeile hat eine etwas andere Basiswährungsumrechnung als erwartet — versuchen Sie, den Basiswährungsbetrag direkt in dieser Zeile einzugeben

Passen Sie Ihre Zeilen an, bis die Differenz Null anzeigt, und speichern Sie dann.

</details>

<details>
<summary>Ein Konto wird nicht in dem Dropdown angezeigt</summary>

Nur aktive Konten werden in dem Konto-Dropdown angezeigt. Wenn ein Konto fehlt:

1. Wechseln Sie zu **Accounting** > **Chart of Accounts**.
2. Suchen Sie das Konto und überprüfen Sie, ob es als archiviert markiert ist.
3. Wählen Sie die Registerkarte **Archived** aus, wählen Sie das Konto aus, und wählen Sie dann die Schaltfläche zum Entsperren der Archivierung auf der Kontolinie aus.
4. Kehren Sie zu Ihrem Buchungssatz zurück — das Konto sollte jetzt angezeigt werden.

</details>

<details>
<summary>Der Eintrag wurde gespeichert, aber ich kann ihn nicht in meinen Berichten sehen</summary>

Berichte verwenden das **Datum**, das Sie im Buchungssatz eingegeben haben — nicht das Datum, an dem Sie ihn gespeichert haben. Überprüfen Sie, ob das Datum in Ihrem Eintrag innerhalb des Berichtszeitraums liegt, den Sie anzeigen. Passen Sie den Berichtsdatumsbereich bei Bedarf an.

</details>

<details>
<summary>Der Wechselkurs auf einer Multi-Währungs-Zeile sieht falsch aus</summary>

Fiskl verwendet standardmäßig den Wechselkurs am Transaktionsdatum. Wenn der angezeigte Kurs nicht mit Ihren Unterlagen übereinstimmt, können Sie ihn überschreiben, indem Sie den Kurs direkt auf der Zeile eingeben. Dies ist nützlich beim Buchen historischer Einträge oder bei Verwendung eines mit Ihrer Bank vereinbarten Kurses.

</details>

## Verwandte Themen

- [Buchungssätze – Übersicht](/accounting/journal-entries/overview) — Einführung in Buchungssätze in Fiskl
- [Manuelle Transaktionen](/accounting/journal-entries/guides/manual-transactions) — Erstellen Sie einfache zweizeilige manuelle Buchungssätze
- [Multi-Currency Transactions](/accounting/journal-entries/guides/multi-currency-transactions) — Handhaben Sie Fremdwährungen in Buchungssätzen
- [Kontenrahmen](/accounting/chart-of-accounts) — Verwalten Sie Ihre Konten
- [Accounting Settings](/settings/accounting-settings) — Konfigurieren Sie Ihre Buchungsführungseinstellungen
