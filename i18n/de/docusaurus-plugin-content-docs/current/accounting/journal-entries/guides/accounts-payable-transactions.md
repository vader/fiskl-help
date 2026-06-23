---
title: "Verbindlichkeiten Transaktionen"
description: "Erfahren Sie, wie Sie Verbindlichkeitstransaktionen in Fiskl erstellen, bezahlen und verwalten, einschließlich Teilzahlungen, Fremdwährungen und Aufteilungen."
keywords: ["accounts payable", "AP", "bills", "vendor payments", "accrual accounting", "journal entry", "partial payment", "foreign currency"]
sidebar_position: 10
tags:
  - Accounting
  - Journal Entry
  - Accounts Payable
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erläutert, wie Sie Verbindlichkeiten (AP) in Fiskl erstellen und verwalten. Sie behandelt die Erfassung von Rechnungen, die Zuordnung von Zahlungen, die Behandlung von Teilzahlungen und die Arbeit mit Fremdwährungen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Verbindlichkeiten verstehen

Verbindlichkeiten werden in der Periodenrechnung verwendet, um Geld zu erfassen, das Ihr Unternehmen Lieferanten für erhaltene, aber noch nicht bezahlte Waren oder Dienstleistungen schuldet. Die Erfassung von AP-Einträgen in Fiskl gibt Ihnen einen genauen Überblick über Ihre Verpflichtungen und zukünftigen Zahlungspflichten.

Wenn Sie eine AP-Transaktion erstellen, erfasst Fiskl die Verbindlichkeit im Verbindlichkeitskonto. Wenn Sie die Rechnung später bezahlen, ordnen Sie die Zahlung dem ursprünglichen AP-Eintrag zu. Dies setzt den ausstehenden Saldo auf Null und hält Ihre Bilanz, Saldenbilanz und Berichte zu Transaktionen nach Konto korrekt.

:::info
Verwenden Sie für bereits durchgeführte Zahlungen stattdessen operative Ausgaben oder andere relevante Ausgabenkonten anstelle von Verbindlichkeiten.
:::

<details>
<summary>Warum ist die Verwaltung von Verbindlichkeiten wichtig?</summary>

Eine ordnungsgemäße AP-Verwaltung hilft Ihnen:

- Ihre kurzfristigen Verpflichtungen nachzuverfolgen.
- Ihre finanzielle Position genau zu melden.
- Einen gesunden Kapitalfluss durch das Wissen über fällige Zahlungen und deren Fälligkeitsdatum zu gewährleisten.
- Stärkere Lieferantenbeziehungen durch pünktliche und genaue Zahlungen aufzubauen.

</details>

## Erstellen einer AP-Transaktion

So erfassen Sie eine Rechnung oder zukünftige Zahlung, die Sie einem Lieferanten schulden:

1. Gehen Sie zu **Accounting** im linken Menü und wählen Sie **Transactions**
2. Wählen Sie **Verbindlichkeiten** aus der Kontoliste
3. Wählen Sie **+ Credit**, um einen neuen AP-Eintrag zu erstellen
4. Vervollständigen Sie die Transaktionsdetails:
   - **Name** — eine klare Beschreibung wie „Breitbandgebühr" oder „Bürobedarfrechnung #1234"
   - **Currency** — wählen Sie die Währung aus, falls diese von Ihrer Basiswährung abweicht
   - **Amount** — geben Sie den geschuldeten Betrag ein
   - **Description** — fügen Sie interne Notizen hinzu (optional)
   - **Date** — das Rechnungs- oder Fakturadatum
   - **Category** — wählen Sie das relevante Ausgabenkonto aus dem Dropdown aus, oder erstellen Sie ein neues
   - **Tax** — wählen Sie den anwendbaren Steuersatz aus. Falls Sie als Mehrwertsteuer- oder Umsatzsteuerpflichtiger registriert sind, ist dies für genaue Steuerberichterstattung erforderlich.
   - **Vendor** — wählen Sie einen vorhandenen Lieferanten aus oder erstellen Sie einen neuen
   - **Client** — verknüpfen Sie mit einem Kunden, wenn die Ausgabe sich auf einen bestimmten Auftrag bezieht (optional)
   - **Reference** — geben Sie die Rechnungs- oder Fakturanummer des Lieferanten ein (optional)
5. Wählen Sie das Anhang-Symbol, um eine Kopie der Rechnung hochzuladen
6. Wählen Sie **Save**, um die Transaktion zu speichern

Ihre neue AP-Transaktion wird nun im Verbindlichkeitskonto und im entsprechenden Ausgabenkonto angezeigt.

:::tip
Wenn der Saldo in Ihrem Verbindlichkeitskonto Null beträgt, haben Sie derzeit keine zukünftigen Zahlungen oder Verpflichtungen erfasst.
:::

## Zuordnung einer AP-Transaktion zu einer Zahlung

Wenn Sie eine Rechnung bezahlen, kann Fiskl die Bankzahlung automatisch dem ursprünglichen AP-Eintrag zuordnen, oder Sie können eine Zuordnung manuell vornehmen oder ändern. Die Zuordnung löscht die ausstehende Verbindlichkeit und aktualisiert Ihre Finanzberichte.

### So funktioniert die automatische Zuordnung

Fiskl überwacht Ihre verbundenen Bankkonten auf Transaktionen, die erfassten AP-Einträgen entsprechen. Wenn eine Übereinstimmung gefunden wird, wird die AP-Transaktion automatisch abgestimmt, ohne dass manuelle Schritte erforderlich sind.

**Der Zuordnungsprozess:**

1. **AP-Transaktion gespeichert** — die Verbindlichkeit wird in Ihrem Verbindlichkeitskonto erfasst
2. **Überwachung startet** — Fiskl sucht nach eingehenden Banktransaktionen, die dem AP-Eintrag entsprechen
3. **Übereinstimmung identifiziert** — das System findet eine Banktransaktion, die Lieferant, Betrag und Datum entspricht
4. **Automatische Abstimmung** — die AP-Transaktion wird mit der Banktransaktion verknüpft und Ihre Buchhaltungsunterlagen werden aktualisiert

**Worauf Fiskl abgleicht:**

- **Amount** — genaue Übereinstimmung oder innerhalb einer kleinen Toleranz
- **Date** — das Bankdatum liegt in einem angemessenen Bereich zum AP-Eintragsdatum
- **Vendor** — die Banktransaktionsbeschreibung entspricht dem Lieferantennamen

Nach der automatischen Zuordnung erfasst Fiskl zwei Einträge im Verbindlichkeitskonto: den ursprünglichen Verbindlichkeitseintrag und den Zahlungseintrag. Der ausstehende Saldo wird auf Null zurückgesetzt.

### Manuelle Zuordnung oder Änderung einer Zuordnung

Falls Sie eine Zuordnung manuell vornehmen müssen, oder wenn eine automatische Zuordnung falsch ist und Sie sie ändern möchten:

1. Gehen Sie zu **Accounting** > **Transactions** und öffnen Sie das relevante Bank- oder Kreditkartenkonto
2. Suchen Sie die Zahlungstransaktion
3. Wählen Sie **Show matches** auf der Transaktion
4. Überprüfen Sie die Liste der verfügbaren AP-Transaktionen und wählen Sie die richtige aus
5. Falls eine falsche Zuordnung bereits angewendet wurde, wählen Sie sie aus, um sie abzuwählen — sie kehrt in die verfügbare Liste zurück
6. Wählen Sie die richtige AP-Transaktion aus der Liste
7. Wählen Sie **Update**, um die Zuordnung anzuwenden
8. Wählen Sie **Finish**, sobald alle Zuordnungen für die Transaktion abgeschlossen sind

Sie müssen **Finish** nur einmal auswählen — nach allen Zuordnungen, nicht nach jeder einzelnen.

## Zuordnung einer AP-Transaktion mit Teilzahlungen

Falls Sie eine Rechnung in Raten bezahlen, können Sie jede Teilzahlung der gleichen AP-Transaktion zuordnen:

1. Gehen Sie zu **Accounting** > **Transactions** und öffnen Sie das relevante Bank- oder Kassenkonto
2. Suchen Sie die erste Teilzahlungstransaktion
3. Wählen Sie **Show matches**
4. Wählen Sie die entsprechende AP-Transaktion aus der Liste — Fiskl passt den zugeordneten Betrag automatisch an die Teilzahlung an
5. Wählen Sie **Update**, um zu bestätigen
6. Wiederholen Sie dies für jede nachfolgende Teilzahlung, bis die AP-Transaktion vollständig bezahlt ist
7. Wählen Sie **Finish** nach der letzten Zahlungszuordnung, um die AP-Transaktion abzuschließen

Falls sich die Währungen zwischen der Zahlung und dem AP-Eintrag unterscheiden, wendet Fiskl den relevanten Wechselkurs automatisch an.

### So werden Teilzahlungen in Berichten angezeigt

Teilzahlungen aktualisieren Ihre Finanzberichte mit jeder zugeordneten Rate:

- **Bilanz** — zeigt die verbleibende unbezahlte Verbindlichkeit nach jeder Zahlung
- **Transaktionen nach Konto** — jede Teilzahlung wird als separater Eintrag angezeigt, der mit der ursprünglichen AP-Transaktion verknüpft ist
- **Saldenbilanz** — spiegelt den aktuellen ausstehenden Saldo für alle AP-Transaktionen wider

## Arbeiten mit AP-Transaktionen in Fremdwährung

Fiskl unterstützt AP-Transaktionen in jeder Währung. Wenn ein Lieferant Ihnen eine Rechnung in einer Währung ausstellt, die von Ihrer Basiswährung abweicht:

1. Wählen Sie beim Erstellen der AP-Transaktion die entsprechende Währung aus dem Dropdown **Currency**
2. Fiskl zeigt sowohl den Betrag in Fremdwährung als auch das Äquivalent in Ihrer Basiswährung an
3. Wenn Sie die Zahlung zuordnen, wählen Sie **Show matches** — Fiskl zeigt Übereinstimmungen über alle Währungen
4. Verwenden Sie die Währungsauswahl, um Übereinstimmungen auf eine bestimmte Währung zu filtern, falls gewünscht
5. Wählen Sie die richtige Übereinstimmung aus und passen Sie den Wechselkurs bei Bedarf an
6. Wählen Sie **Update**, um zu bestätigen

### Zahlung mehrerer Fremdwährungsrechnungen in einer Zahlung

Falls eine einzelne Bankzahlung mehrere AP-Transaktionen in einer Fremdwährung abdeckt:

1. Wählen Sie **Show matches** auf der Zahlungstransaktion
2. Wählen Sie alle relevanten AP-Transaktionen aus der Zuordnungsliste
3. Wählen Sie **Auto-adjust FX rate**, um den Wechselkurs proportional über alle zugeordneten Transaktionen zu verteilen
4. Wählen Sie **Update**, um den Vorgang abzuschließen

## Aufteilung einer AP-Transaktion

Wenn eine einzelne Rechnung mehrere Ausgabenkategorien, Lieferanten oder Währungen abdeckt, können Sie die AP-Transaktion aufteilen:

1. Öffnen Sie eine vorhandene AP-Transaktion oder erstellen Sie eine neue
2. Wählen Sie **Split**
3. Geben Sie für jede Aufteilungszeile ein:
   - **Amount**
   - **Category** — das Ausgabenkonto für diesen Teil
   - **Currency** — falls anders als die Basiswährung
   - **Tax** — falls anwendbar
   - **Vendor** — falls anders als der Hauptlieferant
   - **Client** — falls anwendbar
4. Das Feld **Difference** zeigt den verbleibenden, noch nicht zugewiesenen Betrag — stellen Sie sicher, dass dieser vor dem Speichern Null erreicht
5. Wählen Sie **Save**, um die Aufteilungstransaktion zu speichern

Jeder Aufteilungsteil wird in seinem jeweiligen Konto angezeigt, was Ihnen detaillierte Nachverfolgung über Kategorien und Lieferanten ermöglicht.

## Häufig auftretende Probleme

<details>
<summary>Mein AP-Saldo wird nach der Zuordnung einer Zahlung nicht auf Null gesetzt</summary>

Dies bedeutet normalerweise, dass die Zahlung und die AP-Transaktion mit unterschiedlichen Beträgen zugeordnet wurden. Öffnen Sie das Verbindlichkeitskonto und überprüfen Sie, ob die beiden Einträge gleich sind — das ursprüngliche Guthaben und die Zahlungsbelastung sollten übereinstimmen. Falls sie sich aufgrund einer Wechselkursänderung unterscheiden, müssen Sie möglicherweise einen Eintrag für Fremdwährungsgewinne oder -verluste erfassen. Weitere Informationen finden Sie in der [Anleitung für Transaktionen mit mehreren Währungen](/accounting/journal-entries/guides/multi-currency-transactions).

</details>

<details>
<summary>Ich habe eine AP-Transaktion versehentlich erfasst</summary>

Falls die AP-Transaktion keiner Zahlung zugeordnet wurde, öffnen Sie die Transaktion und wählen Sie **Delete**. Falls sie bereits zugeordnet wurde, heben Sie die Zuordnung zunächst auf. Öffnen Sie die zugeordnete Banktransaktion, entfernen Sie die Zuordnung und löschen Sie dann die AP-Transaktion.

</details>

<details>
<summary>Unsicher, wie Sie eine Rechnung kategorisieren oder Ihren AP-Workflow einrichten sollen?</summary>

Fi, der integrierte KI-Berater von Fiskl, kann Ihnen helfen, Ihre Buchhaltung durchzudenken, die richtige Ausgabenkategorien vorzuschlagen und Sie durch komplexere AP-Szenarien zu führen. Wählen Sie das Symbol **Ask Fi** auf der Plattform, um zu beginnen.

</details>

## Verwandte Themen

- [Mehrfach-Buchungssätze](/accounting/journal-entries/multi-journal-entries) — Erfassen Sie komplexe Transaktionen mit mehreren Soll- und Habenseiten
- [Transaktionen mit mehreren Währungen](/accounting/journal-entries/guides/multi-currency-transactions) — Behandlung von Wechselkursen und Währungsdifferenzen in Ihrem Hauptbuch
- [Forderungen-Transaktionen](/accounting/journal-entries/guides/accounts-receivable-transactions) — Erfassen Sie Einnahmen, die Ihrem Unternehmen geschuldet werden
- [Kontenrahmen](/accounting/chart-of-accounts) — Anzeige und Verwaltung Ihrer Kontokenstruktur
- [Lieferanten verwalten](/clients-vendors/vendors) — Erstellen und verwalten Sie Ihre Lieferantendatensätze
