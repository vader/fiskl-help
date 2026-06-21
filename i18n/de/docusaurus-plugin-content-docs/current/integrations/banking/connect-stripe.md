---
title: "Stripe verbinden"
description: "Verbinden Sie Ihr Stripe-Konto mit Fiskl Banking für automatische Transaktionsimporte, genaue Buchungseinträge und nahtlose Abstimmung von Auszahlungen."
keywords: ["Stripe", "banking integration", "Stripe connect", "payout reconciliation", "Stripe ledger", "Fiskl banking"]
sidebar_position: 3
slug: /integrations/banking/connecting-stripe
tags:
  - Integrations
  - Banking
  - Stripe
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Dieses Handbuch zeigt, wie Sie Stripe mit Fiskl Banking verbinden, damit Transaktionen automatisch importiert werden, Buchungssätze korrekt erstellt werden und Stripe-Auszahlungen ohne manuelle Arbeit mit Ihrem Bankkonto abgestimmt werden.

## Bevor Sie beginnen

Stellen Sie sicher, dass Sie folgendes haben:

- Admin-Zugriff auf Ihr Fiskl-Konto
- Anmeldedaten für Ihr Stripe-Konto
- Ihr Bankkonto bereits mit Fiskl Banking verbunden (empfohlen – ermöglicht automatische Auszahlungsabstimmung)
- Ihr aktuelles Geschäftsjahrbeginn-Datum zur Hand

## So funktioniert die Integration

Wenn Sie Stripe verbinden, importiert Fiskl automatisch alle Transaktionen und erstellt Buchungssätze. Jeder Buchungssatz erfasst den Betrag, Gebühren und Wechselkurse.

### Erstellung von Sachkonten

Fiskl erstellt Sachkonten basierend auf den in Ihrem Stripe-Konto konfigurierten Auszahlungsbankkonten. Jedes Stripe-Auszahlungskonto wird auf ein entsprechendes Sachkonto in Fiskl abgebildet. Wenn Sie beispielsweise ein USD-Auszahlungskonto in Stripe haben, erstellt Fiskl ein USD-Sachkonto, auf dem alle entsprechenden Transaktionen angezeigt werden.

Dies funktioniert über mehrere Währungen hinweg. Wenn Sie EUR-, GBP- und USD-Transaktionen verarbeiten, aber nur ein USD-Auszahlungskonto in Stripe haben, werden alle Transaktionen in USD umgerechnet und fließen in das USD-Sachkonto. Fiskl erfasst die ursprüngliche Währung und den Wechselkurs, sodass Zahlungen unabhängig von der Umrechnung dennoch dem richtigen Angebot zugeordnet werden.

Wenn Sie ein neues Auszahlungskonto in Stripe hinzufügen – z. B. ein EUR-Bankkonto – erkennt Fiskl dies automatisch und erstellt das entsprechende EUR-Sachkonto. Ab diesem Zeitpunkt fließen EUR-Transaktionen in die EUR-Auszahlung und werden im EUR-Sachkonto angezeigt.

### Automatische Auszahlungsabstimmung

Wenn sowohl Stripe als auch Ihr Bankkonto mit Fiskl Banking verbunden sind, verknüpft Fiskl automatisch Stripe-Auszahlungen mit Ihren Bankeinzahlungen als interne Transfers. Dies ist besonders nützlich, wenn Sie mehrere Auszahlungskonten in verschiedenen Währungen haben, da jede Auszahlung ohne manuelle Schritte abgestimmt wird.

## Stripe verbinden

### Schritt 1: Öffnen Sie Banking und wählen Sie Stripe

1. Gehen Sie zu **Banking** im linken Menü
2. Wählen Sie **Stripe** aus den verfügbaren Optionen
3. Wählen Sie **Verbinden**

### Schritt 2: Importeinstellungen konfigurieren

1. Wählen Sie ein **Startdatum** für den Import von Transaktionen – verwenden Sie das Startdatum Ihres aktuellen Geschäftsjahrs
2. Wählen Sie Ihren **Importumfang**

:::warning
Vermeiden Sie den Import aller historischen Transaktionen. Verwenden Sie stattdessen Ihr Geschäftsjahrbeginn-Datum. Der Import aller Verlaufsdaten kann aufgrund des detaillierten Transaktions-Feeds von Stripe zu einer großen Anzahl unnötiger Buchungssätze führen. Fiskl erstellt eine Eröffnungsbilanz-Transaktion nach Bedarf.
:::

### Schritt 3: Kategorien einrichten

1. Wählen Sie eine **Gebührenkategorie** für Bearbeitungsgebühren (z. B. „Zahlungsabwicklungsgebühren")
2. Schalten Sie **Kundenerstellung** ein, um automatisch Kundendatensätze aus neuen Stripe-Kunden zu erstellen
3. Schalten Sie **Lieferantenerstellung** ein, um automatisch Lieferantendatensätze aus neuen Lieferanten zu erstellen

:::info
Das Aktivieren der automatischen Lieferantenerstellung kann nach der ersten Synchronisierung viele Datensätze zu Ihrem Konto hinzufügen. Überprüfen Sie die Lieferantenliste nach Abschluss der Verbindung.
:::

### Schritt 4: Verbindung vervollständigen

1. Wählen Sie **Fortfahren**
2. Melden Sie sich bei Ihrem Stripe-Konto an (oder erstellen Sie eines)
3. Autorisieren Sie Fiskl für den Zugriff auf Ihre Stripe-Daten
4. Bestätigen Sie, dass die Verbindung aktiv ist

Ihre Stripe-Konten werden in Fiskl Banking angezeigt. Sie können mehrere Stripe-Konten verbinden, einschließlich Konten in verschiedenen Währungen.

## Was nach der Verbindung geschieht

Fiskl beginnt sofort mit dem Importieren Ihres Transaktionsverlaufs. Die erste Synchronisierung kann mehrere Minuten dauern. Während die Kontostände berechnet werden, werden möglicherweise vorübergehend Warnsymbole angezeigt – diese werden nach Abschluss der Synchronisierung gelöscht.

### Transaktionen anzeigen

Wählen Sie **Transaktionen** auf der Stripe-Kontokarte, um importierte Aktivitäten anzuzeigen. Alternativ gehen Sie zu **Buchhaltung** > **Kontenrahmen** und wählen Sie das entsprechende Stripe-Sachkonto.

Jedes Sachkonto entspricht einem Stripe-Auszahlungskonto. Wenn Sie USD-, EUR- und GBP-Auszahlungskonten in Stripe haben, sehen Sie drei separate Sachkonten in Fiskl. Transaktionen werden im Sachkonto angezeigt, das der Auszahlungswährung entspricht.

### Wartung der Verbindung

Überprüfen Sie, dass Transaktionen korrekt importiert werden und dass Kategorien wie erwartet zugewiesen sind. Wenn Sie ein neues Auszahlungskonto in Stripe hinzufügen, erstellt Fiskl das entsprechende Sachkonto automatisch – es ist keine Aktion in Fiskl erforderlich.

:::info
Das Verbinden von Stripe als Zahlungsmethode für Rechnungen ist separat von dieser Banking-Integration. Siehe [Zahlungs-Gateways](/integrations/payments/overview) für die Einrichtung von Rechnungszahlungen.
:::

## Häufige Probleme

<details>
<summary>Wie erkenne ich, in welchem Sachkonto eine Transaktion angezeigt wird?</summary>

Transaktionen werden im Sachkonto angezeigt, das der Stripe-Auszahlungswährung entspricht. Wenn beispielsweise ein GBP-Kunde eine GBP-Rechnung bezahlt, Sie aber nur ein USD-Auszahlungskonto in Stripe haben, wird die Transaktion in USD umgerechnet und wird im USD-Sachkonto angezeigt. Fiskl erfasst die ursprüngliche Währung und den Wechselkurs, sodass die Zahlung dennoch der richtigen GBP-Rechnung zugeordnet wird.

Wenn Sie später ein GBP-Auszahlungskonto in Stripe hinzufügen, erstellt Fiskl ein GBP-Sachkonto und zukünftige GBP-Transaktionen fließen darin.

</details>

<details>
<summary>Transaktionen werden nicht importiert</summary>

1. Gehen Sie zu **Banking** und bestätigen Sie, dass Ihre Stripe-Verbindung als aktiv angezeigt wird
2. Überprüfen Sie, dass Sie über die Berechtigung zum Zugriff auf das betreffende Stripe-Konto verfügen
3. Überprüfen Sie, dass das Importstartdatum korrekt eingestellt ist
4. Versuchen Sie, Ihr Stripe-Konto zu trennen und erneut zu verbinden

Wenn Transaktionen immer noch nicht angezeigt werden, kontaktieren Sie den Support mit Ihrer Stripe-Konto-ID.

</details>

<details>
<summary>Automatische interne Transfers werden nicht erstellt</summary>

1. Bestätigen Sie, dass sowohl Stripe als auch Ihr Bankkonto mit Fiskl Banking verbunden sind
2. Überprüfen Sie, dass Auszahlungen sowohl in Ihrem Stripe-Konto als auch in Ihrem Bankkonto angezeigt werden
3. Überprüfen Sie, dass die Auszahlungsbeträge zwischen Stripe und Ihrer Bank übereinstimmen
4. Erlauben Sie bis zu 24 Stunden für die automatische Abstimmung

Wenn die automatische Abstimmung nicht erfolgt, können Sie den internen Transfer manuell erstellen.

</details>

<details>
<summary>Bilanzkorrekturen oder Fehler nach der Verbindung</summary>

Vorübergehende Warnsymbole während der ersten Synchronisierung sind normal, während Fiskl Kontostände berechnet. Diese werden normalerweise innerhalb weniger Minuten gelöst. Wenn Warnungen nach 30 Minuten bestehen bleiben, überprüfen Sie, dass Ihre Eröffnungsbilanz-Transaktion korrekt ist.

</details>

## Verwandte Themen

- [Banking-Übersicht](/integrations/banking/overview) – Einführung in Fiskl Banking und unterstützte Verbindungen
- [Zahlungs-Gateways](/integrations/payments/overview) – Stripe zum Akzeptieren von Rechnungszahlungen einrichten (separat von dieser Banking-Integration)
- [Kontenrahmen](/accounting/chart-of-accounts) – Verstehen Sie, wie Sachkonten strukturiert sind
- [Interne Transfers](/accounting/journal-entries/guides/internal-transfers) – Verwalten Sie Transfers zwischen Konten manuell
