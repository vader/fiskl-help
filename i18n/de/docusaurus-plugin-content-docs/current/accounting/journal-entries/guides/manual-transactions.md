---
title: "Manuelle Transaktionen erfassen"
description: "Erfahren Sie, wie Sie manuelle Buchungssätze in Fiskl erstellen, um Barkäufe, zukünftige Zahlungen und andere Transaktionen zu erfassen, die nicht automatisch erfasst werden."
keywords: ["manual transaction", "journal entry", "account transaction", "chart of accounts", "manual entry", "debit", "credit"]
sidebar_position: 1
tags:
  - Accounting
  - Journal entry
  - Account transaction
  - Chart of Accounts
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Dieses Handbuch erklärt, wie Sie manuelle Transaktionen in Fiskl erfassen — Geldströme in Ihren Kassenkonten. Dies wird manchmal als Kontotransaktion bezeichnet. Es unterscheidet sich von einem [Mehrfach-Buchungssatz](/accounting/journal-entries/multi-journal-entries), der Transaktionen über mehrere Konten des Hauptbuchs gleichzeitig erfasst.

## Bevor Sie beginnen

- Sie haben Zugriff auf Ihren Kontenrahmen
- Sie wissen, welches Konto des Hauptbuchs die Transaktion betrifft
- Sie haben den Transaktionsbetrag und das Datum bereit

## Häufige Gründe für die Erstellung manueller Transaktionen

Nicht alle Transaktionen werden automatisch erfasst. Hier sind zwei häufige Beispiele, wann Sie eine manuelle Transaktion erstellen müssen:

1. **Barkäufe** — Wenn Sie Büroartikel mit Portokasse kaufen, erfassen Sie dies, um Ihr **Bargeld** und das Ausgabenkonto **Büromaterial** zu aktualisieren
2. **Zukünftige Zahlungen** — Wenn Sie Lagerbestände jetzt erhalten, aber später bezahlen, erfassen Sie diese anstehende Ausgabe unter **Verbindlichkeiten** für eine genaue Budgetierung

<details>
<summary>Weitere Gründe für die Erstellung manueller Transaktionen anzeigen</summary>

1. **Erfassung von Bartransaktionen** — Essentiell für die Führung einer genauen Aufzeichnung von Kapitalflüssen, die nicht auf elektronischem Wege bearbeitet werden, wie z. B. Portokasse-Ausgaben
2. **Berichtigungsbuchungen am Monats- oder Jahresende** — Stellt sicher, dass der Jahresabschluss die korrekten Umsätze und Ausgaben innerhalb des entsprechenden Abrechnungszeitraums widerspiegelt
3. **Abschreibung von Vermögenswerten** — Spiegelt den Verbrauch des wirtschaftlichen Nutzens von Anlagevermögen über ihre Nutzungsdauer wider
4. **Rückstellungen für unbezahlte Ausgaben oder unverdiente Einnahmen** — Stellt sicher, dass Ausgaben und Einnahmen dem Zeitraum zugeordnet werden, in dem sie anfallen oder verdient werden, unabhängig von Geldbewegungen
5. **Erfassung von immateriellen Transaktionen wie Tauschgeschäfte** — Erfasst den Austausch von Waren oder Dienstleistungen ohne Geldbewegung
6. **Korrektur von Fehlern in zuvor erfassten Transaktionen** — Erhält die Integrität und Genauigkeit von Buchungsunterlagen
7. **Erstellung von Eröffnungs- und Abschlusssalden** — Stellt sicher, dass neue Abrechnungsperioden korrekt beginnen und die Bücher am Ende einer Periode abgeschlossen werden

</details>

## So erfassen Sie eine manuelle Transaktion

<details>
<summary>Schritt-für-Schritt-Anleitung zum Erstellen einer manuellen Transaktion</summary>

1. Wählen Sie in der linken Seitenleiste **Buchhaltung** > **Kontenrahmen**
2. Wählen Sie **Vermögenswerte** > **Zahlungsmittel und Zahlungsmitteläquivalente**, um alle Konten anzuzeigen
3. Wählen Sie das Konto aus, dem Sie die Transaktion hinzufügen möchten
4. Wählen Sie, ob Sie das Konto belasten oder entlasten möchten. In Fiskl bedeutet **Belastung (IN/+)** Geld, das in das Konto fließt, und **Entlastung (OUT/-)** bedeutet Geld, das das Konto verlässt. Verwenden Sie die **IN/OUT**-Umschalter, wenn Sie mit Kassenkonten arbeiten
5. Geben Sie einen Namen für Ihre Transaktion ein
6. Geben Sie den Transaktionsbetrag ein
7. Wählen Sie eine Kategorie. Die Kategorie stellt die andere Seite der Transaktion dar — beispielsweise das betroffene Ausgaben- oder Einnahmekonto. Die Kategorie muss bereits in Ihrem Kontenrahmen vorhanden sein. Falls nicht zugewiesen, wird die Transaktion als Nicht kategorisierte Einnahmen oder Nicht kategorisierte Ausgaben erfasst, ohne Mehrwertsteuer. Die Auswahl einer Kategorie ist erforderlich
8. Fügen Sie eine Steuer hinzu oder erstellen Sie eine neue Steuer, falls zutreffend. Steuern können nicht auf Entlastungsbuchungen (OUT) angewendet werden — wenn Sie eine Zahlung an einen Lieferanten erfassen, ist das Steuerfeld nicht verfügbar
9. Wählen Sie einen Kunden oder Lieferanten aus, falls die Transaktion mit einem davon verknüpft ist
10. Geben Sie eine Referenznummer in das Nummernfeld ein, falls erforderlich
11. Um eine Anlage hinzuzufügen, wählen Sie das Büroklammer-Symbol
12. Wählen Sie **Speichern**, um Ihre Transaktion zu speichern

Ihre Transaktion wird in Ihrem Konto angezeigt und Ihr Saldo wird aktualisiert. Die Transaktion wird auch im ausgewählten Kategorie-Konto des Hauptbuchs gespeichert.

</details>

## Transaktionen in mehreren Währungen

Fiskl bietet zwei Möglichkeiten zur Erfassung von Transaktionen in Fremdwährungen:

- Erfassen Sie die Transaktion in jedem **Zahlungsmittel- oder Zahlungsmitteläquivalent**-Konto direkt, indem Sie eine Kategorie in Fremd- oder Basiswährung auswählen
- Eröffnen Sie ein Fremdwährungs-**Zahlungsmittel- oder Zahlungsmitteläquivalent**-Konto und geben Sie den Transaktionsbetrag in dieser spezifischen Fremdwährung ein

<details>
<summary>Schritt-für-Schritt-Anleitung zur Erfassung in einer anderen Währung</summary>

1. Führen Sie die Schritte 1–4 aus dem Abschnitt „So erfassen Sie eine manuelle Transaktion" oben aus
2. Wählen Sie **In einer anderen Währung erfassen?**
3. Wählen Sie die erforderliche Währung
4. Geben Sie den Betrag in Fremdwährung ein. Der Wechselkurs wird automatisch angezeigt und kann bei Bedarf angepasst werden
5. Füllen Sie die verbleibenden Details wie in der Standardanleitung aus
6. Wählen Sie **Speichern**, um Ihre Transaktion zu speichern

Ihre Transaktion wird in Ihrem Konto angezeigt und zeigt sowohl die Fremd- als auch die Basiswährung.

</details>

:::info
Beim Anzeigen einer Transaktion können Sie auch Optionen für **Aufteilen**, **Abgleich** und **Interne Überweisung** sehen. Dies sind separate Funktionen, die nicht in diesem Handbuch behandelt werden. Weitere Informationen finden Sie unter [Abgleich und Aufteilung von Transaktionen](/accounting/journal-entries/guides/match-and-split-transactions).
:::

## Häufige Probleme

<details>
<summary>Ich kann die richtige Kategorie für meine Transaktion nicht finden</summary>

Die benötigte Kategorie existiert möglicherweise noch nicht in Ihrem Kontenrahmen. Gehen Sie zu **Buchhaltung** > **Kontenrahmen** und fügen Sie das relevante Konto des Hauptbuchs hinzu, bevor Sie zur Erfassung Ihrer Transaktion zurückkehren.

</details>

<details>
<summary>Mein Betrag in Fremdwährung wird nicht korrekt umgerechnet</summary>

Der angezeigte Wechselkurs wird automatisch abgerufen, kann aber manuell angepasst werden. Wählen Sie in Schritt 4 der Anleitung für mehrere Währungen das Wechselkursfeld aus und geben Sie Ihren bevorzugten Kurs ein. Dies ist nützlich, wenn Sie den Kurs Ihrer Bank anstelle des aktuellen Kurses verwenden möchten.

</details>

## Verwandte Themen

- [Übersicht der Buchungssatz-Leitfäden](/accounting/journal-entries/guides/overview) — Alle Arten von Transaktionsleitfäden durchsuchen
- [Mehrfach-Buchungssätze](/accounting/journal-entries/multi-journal-entries) — Erfassen Sie komplexe Transaktionen über mehrere Konten des Hauptbuchs
- [Kontenrahmen](/accounting/chart-of-accounts) — Verwalten und organisieren Sie Ihre Konten des Hauptbuchs
- [Transaktionen in mehreren Währungen](/accounting/journal-entries/guides/multi-currency-transactions) — Detaillierte Anleitung zu Einträgen in Fremdwährung
