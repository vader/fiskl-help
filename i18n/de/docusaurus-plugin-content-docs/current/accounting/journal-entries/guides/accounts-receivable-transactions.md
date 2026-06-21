---
title: "Arbeiten mit Forderungen"
description: "Erfahren Sie, wie Fiskl Forderungen für Rechnungen und manuelle Transaktionen verfolgt, einschließlich Teilzahlungen und Multi-Währungs-Aufteilungen."
keywords: ["accounts receivable", "AR", "invoicing", "partial payments", "multi-currency", "accrual accounting"]
sidebar_position: 3
tags:
  - Accounting
  - Journal Entry
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Anleitung erklärt, wie Forderungen (Accounts Receivable, AR) in Fiskl funktioniert — wie sie automatisch für Rechnungen erstellt werden, wie Sie manuelle AR-Transaktionen erfassen und wie Sie Teilzahlungen verwalten.

:::tip
Sie können **Fi**, den KI-Berater von Fiskl, jederzeit Fragen zu Ihrem Forderungssaldo, überfälligen Rechnungen oder ausstehenden Zahlungen stellen. Wählen Sie **Fi** oben rechts auf dem Bildschirm, um zu beginnen.
:::

## Bevor Sie Beginnen

- Machen Sie sich mit [den Grundlagen der Periodenabgrenzungsrechnung](/glossary/accounting-fundamentals) vertraut
- Stellen Sie sicher, dass Ihre Basiswährung in den [Unternehmenseinstellungen](/settings/company-settings) festgelegt ist

## Was Sind Forderungen

Forderungen sind eine Aufzeichnung des Geldes, das Ihr Unternehmen für bereitgestellte Waren oder Dienstleistungen schuldet, das Sie aber noch nicht erhalten haben. In Fiskl verfolgt das AR-Sachkonto automatisch diese Beträge in mehreren Währungen und zeigt den Gesamtwert in Ihrer Basiswährung an.

Wenn Ihr Forderungssaldo null ist, wurden alle Ihre Rechnungen bezahlt und Sie haben keine ausstehenden Kundenzahlungen zu kassieren.

<details>
<summary>Warum ist die Verwaltung von Forderungen wichtig?</summary>

Eine ordnungsgemäße AR-Verwaltung hilft Ihnen:

- Das Geld zu verfolgen, das Ihrem Unternehmen schuldet
- Die Kapitalflussrechnung effektiv zu verwalten
- Ihre finanzielle Position genau zu melden

</details>

## Wie Fiskl AR für Rechnungen Handhabt

Fiskl automatisiert die AR-Verwaltung für Rechnungen und deren Zahlungen:

1. **Rechnung versendet** — Jedes Mal, wenn Sie eine Rechnung versenden, erstellt Fiskl automatisch einen AR-Datensatz. Dieser Eintrag ist ein Vermögenswert, der das Einkommen darstellt, das Sie von Ihrem Kunden erwarten.
2. **Zahlungszuordnung** — Wenn eine Banktransaktion einer Rechnung zugeordnet wird – entweder automatisch über Fiskls KI-gestützte automatische Zuordnung oder manuell im Banking-Bereich – aktualisiert Fiskl den AR-Datensatz, um die Zahlung widerzuspiegeln und den ausstehenden Saldo zu reduzieren.

Diese Automatisierung hält Ihre AR auf dem neuesten Stand und spiegelt genau die ausstehenden Kundenzahlungen wider, wenn Banktransaktionen zugeordnet werden.

## Manuelle AR-Transaktionen Erfassen

Sie können auch manuelle AR-Transaktionen erfassen, um künftig erwartete Zahlungen zu erfassen. Sie können eine manuelle AR-Transaktion in jeder Währung eingeben und auf mehrere Sachkonten aufteilen.

<details>
<summary>Reales Beispiel einer Forderung mit Aufteilungen in Nicht-Basiswährung</summary>

Sie werden eingeladen, auf einer internationalen Konferenz zu sprechen und erhalten eine Zahlung in einer Währung, die sich von Ihrer Basiswährung unterscheidet.

Angenommen, der Vertrag stipuliert eine Gesamtzahlung von €3000 EUR. Von diesem Betrag werden €2500 für Ihren Vortrag bereitgestellt, klassifiziert als Dienstleistungsverkauf, und die restlichen €500 sind für Waren, die Sie auf der Veranstaltung verkaufen, kategorisiert unter Produktverkauf.

Durch die Aufteilung dieser Transaktionen in Ihren Forderungen können Sie Umsatzströme genau verfolgen und die Komplexität von Fremdwährungstransaktionen verwalten. Diese Trennung hilft bei der Analyse der Rentabilität verschiedener Geschäftsaktivitäten und ist wichtig für genaue Finanzberichte, strategische Finanzplanung und Steuervorbereitung in Ihrer Basiswährung.

</details>

## AR-Transaktionen Anzeigen

Sie können Ihre Forderungstransaktionen auf mehrere Arten anzeigen:

- Wählen Sie in der linken Seitenleiste **Buchhaltung** > **Transaktionen** und dann **Forderungen**
- Wählen Sie in der linken Seitenleiste **Buchhaltung** > **Kontenrahmen** und dann **Forderungen**
- Wählen Sie in der linken Seitenleiste **Buchhaltung** > **Berichte** und dann [Bilanz](/reporting/balance-sheet) und aktivieren Sie die Detailoption
- Wählen Sie in der linken Seitenleiste **Buchhaltung** > **Berichte** und dann [Transaktionen nach Konto](/reporting/transactions-by-account)
- Wählen Sie in der linken Seitenleiste **Buchhaltung** > **Berichte** und dann [Saldenbilanz](/core-features/accounting/reports/trial-balance)

## AR-Transaktionstypen Verstehen

In Ihrer Forderungsliste sehen Sie zwei Haupttypen von Transaktionen:

- **Solleinträge** — Rechnungen, die Sie an Kunden versendet haben und die Ihren AR-Saldo erhöhen
- **Habeinträge** — Von Kunden eingegangene Zahlungen, die Ihren AR-Saldo verringern

## AR-Transaktionen Zuordnen

Wie bei den Verbindlichkeiten können Sie Ihre Forderungstransaktionen zuordnen.

:::info
Es ist nicht möglich, AR-Transaktionen der Rechnung manuell zuzuordnen. Fiskl handhabt dies automatisch.
:::

## KI-gestützte Bankkategorisierung

Wenn Banktransaktionen über Ihren verbundenen Bank-Feed ankommen, macht Fiskls KI zwei Dinge, um Ihre AR automatisch abzustimmen:

- **Automatische Zuordnung** — versucht, die eingehende Zahlung direkt dem entsprechenden AR-Eintrag zuzuordnen und verbindet die Banktransaktion ohne manuelle Intervention mit der richtigen Rechnung
- **Kategorievorschläge** — Wenn keine genaue Übereinstimmung gefunden wird, schlägt Fiskls KI die wahrscheinlichste Sachkontokategorie basierend auf der Transaktionsbeschreibung, dem Betrag und Ihren vorherigen Kategorisierungsmustern vor

Sie können einen Vorschlag mit einer Auswahl akzeptieren oder ihn bei Bedarf manuell überschreiben. Je mehr Sie Fiskl verwenden, desto genauer werden diese Vorschläge, da die KI Ihre Muster erlernt.

:::info
Die automatische Zuordnung und Kategorievorschläge funktionieren am besten, wenn Ihre Banktransaktionen klare Zahlungsreferenzen enthalten. Die Angabe Ihrer Rechnungsnummer in den Zahlungsanweisungen, die Sie an Kunden senden, verbessert die Zuordnungsgenauigkeit.
:::

## Teilzahlungen in Forderungen

Bei der Erfassung von Teilzahlungen gegen eine Rechnung müssen Sie diese Transaktionen genau zuordnen, um genaue Buchhaltungsunterlagen zu führen.

### Teilzahlung Erfassen

Sie können eine AR-Transaktion teilweise mit einer Teilzahlung aus Ihren Bank- oder Kassenkonten abgleichen. Zahlungen können in Ihrer Basiswährung, einer Fremdwährung oder mehreren Währungen erfolgen:

1. Suchen Sie die relevante Transaktion in Ihrem Sachkonto „Zahlungsmittel und Zahlungsmitteläquivalente" (Ihr Bankkonto)
2. Wählen Sie **Zuordnungen anzeigen**
3. Wählen Sie die entsprechende AR-Transaktion aus der Liste für den vollen Betrag
4. Fiskl passt den zugeordneten Betrag automatisch an die Teilzahlung an und wendet relevante Wechselkurse an
5. Wählen Sie **Speichern**, um die Zuordnung zu bestätigen

Wiederholen Sie diesen Vorgang für alle zugehörigen Teilzahlungen, bis die AR-Transaktion vollständig beglichen ist.

### Wie Teilzahlungen in Berichten Angezeigt Werden

Teilzahlungen beeinflussen Ihre Finanzberichte auf spezifische Weise:

- **Bilanz** — Zeigt den verbleibenden ausstehenden Betrag für teilweise bezahlte AR-Transaktionen
- **Transaktionen nach Konto** — Zeigt jede Teilzahlung als separaten Eintrag, der mit der ursprünglichen Rechnung verknüpft ist
- **Fälligkeitsbericht Kunden** — Enthält den unbezahlten Anteil teilweise bezahlter Rechnungen
- **Saldenbilanz** — Spiegelt den aktuellen ausstehenden Saldo für alle AR-Transaktionen wider

## Häufige Probleme

<details>
<summary>Mein Forderungssaldo stimmt nicht mit meinen Rechnungssummen überein</summary>

Dies bedeutet normalerweise, dass eine oder mehrere Rechnungen teilweise zugeordnet, der falschen Transaktion zugeordnet oder ein manueller AR-Eintrag zusätzlich zum automatischen Rechnungseintrag erstellt wurden.

1. Wählen Sie in der linken Seitenleiste **Buchhaltung** > **Transaktionen** und dann **Forderungen**
2. Überprüfen Sie jeden Sollbetrag und prüfen Sie, ob ein entsprechender Habenbetrag vorhanden ist
3. Wenn ein manueller AR-Eintrag eine Rechnung dupliziert, löschen Sie den manuellen Eintrag
4. Wenn eine Zahlung falsch zugeordnet wurde, heben Sie die Zuordnung auf und ordnen Sie sie der richtigen Rechnung zu

</details>

<details>
<summary>Die automatische Zuordnung hat meine Bankzahlung nicht mit der Rechnung verknüpft</summary>

Die automatische Zuordnung wird möglicherweise nicht ausgelöst, wenn der Zahlungsbetrag vom Rechnungssumme abweicht, die Zahlung in einer anderen Währung eingegangen ist oder die Banktransaktionsbeschreibung nicht genau der Rechnungsreferenz entspricht.

1. Wählen Sie in der linken Seitenleiste **Buchhaltung** > **Transaktionen** und dann **Zahlungsmittel und Zahlungsmitteläquivalente**
2. Suchen Sie die Bankzahlung und wählen Sie **Zuordnungen anzeigen**
3. Wählen Sie die korrekte AR-Transaktion aus der Liste
4. Wählen Sie **Speichern**, um die Zuordnung zu bestätigen

Bei Teilzahlungen passt Fiskl den zugeordneten Betrag automatisch an – siehe [Teilzahlung erfassen](#teilzahlung-erfassen) oben.

</details>

<details>
<summary>Meine Fremdwährung-AR-Transaktion zeigt einen unerwarteten Basiswährungsbetrag</summary>

Der Basiswährungswert einer Fremdwährung-AR-Transaktion wird anhand des Wechselkurses berechnet, der zum Zeitpunkt der Transaktionserfassung gültig war. Wenn sich der Kurs seitdem geändert hat, kann der angezeigte Betrag von dem erwarteten abweichen.

Um den Wechselkurs bei einer manuellen AR-Transaktion anzupassen, öffnen Sie die Transaktion und aktualisieren Sie das Ratenfeld vor dem Speichern. Für rechnungsgenerierte AR-Einträge wird der Kurs bei der Rechnungserstellung festgelegt und automatisch aktualisiert, wenn eine Zahlung zugeordnet wird.

</details>

<details>
<summary>Ich kann die AR-Transaktion für eine bestimmte Rechnung nicht finden</summary>

AR-Transaktionen für Rechnungen werden automatisch erstellt, erscheinen aber möglicherweise nicht sofort, wenn die Rechnung noch im Entwurfsstatus ist. Nur versendete oder genehmigte Rechnungen generieren einen AR-Eintrag.

1. Bestätigen Sie, dass die Rechnung versendet wurde — wählen Sie **Rechnungen** in der linken Seitenleiste und prüfen Sie den Rechnungsstatus
2. Wenn die Rechnung im Entwurf ist, wählen Sie **Versenden**, um den AR-Eintrag zu generieren
3. Wenn die Rechnung versendet wurde, aber kein AR-Eintrag angezeigt wird, wählen Sie **Buchhaltung** > **Transaktionen** > **Forderungen** und filtern Sie nach Datumsbereich, um ihn zu finden

</details>

## Verwandte Themen

- [Arbeiten mit Verbindlichkeiten](/accounting/journal-entries/guides/accounts-payable-transactions) — Verwalten Sie Gelder, die Ihr Unternehmen den Lieferanten schuldet
- [Transaktionen Zuordnen und Aufteilen](/accounting/journal-entries/guides/match-and-split-transactions) — Ordnen Sie Banktransaktionen Rechnungen und Ausgaben zu
- [Mehrwährungstransaktionen](/accounting/journal-entries/guides/multi-currency-transactions) — Erfassen und gleichen Sie Transaktionen in Fremdwährungen ab
- [Bilanz](/reporting/balance-sheet) — Zeigen Sie Ihre Vermögenswerte, Verbindlichkeiten und Eigenkapital zu einem bestimmten Zeitpunkt an
- [Transaktionen nach Konto](/reporting/transactions-by-account) — Überprüfen Sie alle Transaktionen für ein bestimmtes Sachkonto
- [Fi — Fiskls KI-Berater](/ai/fi) — Stellen Sie Fi Fragen zu Ihrem Forderungssaldo, überfälligen Rechnungen und Ihrer Kapitalflussrechnung
