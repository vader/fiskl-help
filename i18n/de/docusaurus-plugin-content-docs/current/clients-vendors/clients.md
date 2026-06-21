---
title: "Kunden"
description: "Fügen Sie Kunden in Fiskl hinzu und verwalten Sie diese — legen Sie Standard-Währungen, Abrechnungssätze, Steuer-/Mehrwertsteuernummern fest und halten Sie Rechnungsunterlagen genau."
keywords: ["clients", "client management", "invoicing", "multi-currency", "time billing", "Tax ID", "VAT ID", "GoCardless"]
sidebar_position: 2
tags:
  - Clients
  - Invoicing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung behandelt das Hinzufügen und Verwalten von Kunden in Fiskl. Kunden sind die Personen und Unternehmen, die Sie bezahlen — genaue Aufzeichnungen stellen sicher, dass Ihre Rechnungen, Angebote und Finanzberichte die richtigen Informationen widerspiegeln.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Was Sie tun können

- Kunden hinzufügen und deren Kontakt- und Adressdaten speichern
- Eine Standardwährung für die Rechnungen jedes Kunden festlegen
- Stundensätze für die zeitbasierte Abrechnung konfigurieren
- Eine Steuer- oder Mehrwertsteuer-ID zur Verwendung auf Rechnungen speichern
- Notizen zur Kundenbeziehung hinzufügen
- GoCardless-Mandatsstatus im Kundendatensatz ansehen
- Inaktive Kunden archivieren, ohne deren Verlauf zu verlieren

## Einen Kunden hinzufügen

1. Gehen Sie zu **Umsatz** > **Kunden**.
2. Wählen Sie **+ Neuer Kunde**.
3. Geben Sie den Namen des Kunden, die E-Mail-Adresse und das Land ein.
4. Geben Sie die Rechnungsadresse ein (optional).
5. Wählen Sie **Steuer-/Mehrwertsteuer-ID hinzufügen**, falls erforderlich (optional).
6. Wählen Sie **Notizen hinzufügen**, um Details zur Kundenbeziehung zu erfassen (optional).
7. Legen Sie die **Standardwährung** für die Rechnungen dieses Kunden fest.
8. Legen Sie einen **Standardstundensatz** fest, wenn Sie diesen Kunden nach Stunden abrechnen.
9. Wählen Sie **Speichern**.

Sie können einen Kunden auch direkt beim Erstellen einer Rechnung oder eines Angebots hinzufügen — wählen Sie **Neuen Kunden erstellen** aus der Kundenliste und geben Sie die Details ein.

:::tip
Legen Sie die Standardwährung fest, bevor Sie Ihre erste Rechnung für einen Kunden erstellen. Eine spätere Änderung aktualisiert bestehende Rechnungen nicht.
:::

## Kundeneinstellungen

### Standardwährung

Die Standardwährung bestimmt, welche Währung auf neuen Rechnungen für diesen Kunden angezeigt wird. Fiskl konvertiert Wechselkurse automatisch. Sie können die Währung auf jeder einzelnen Rechnung außer Kraft setzen.

### Standardstundensatz

Legen Sie einen Stundensatz für Kunden fest, denen Sie zeitbasiert abrechnen. Dieser Satz wird beim Hinzufügen von Zeiteinträgen zu einer Rechnung automatisch eingefügt und kann bei einzelnen Einträgen außer Kraft gesetzt werden. Weitere Informationen finden Sie unter [Zeitverfolgung](/time-and-mileage/time-tracking).

### Steuer-/Mehrwertsteuer-ID

Geben Sie die Steuer- oder Mehrwertsteuer-ID des Kunden ein, damit sie auf Rechnungen angezeigt wird. Dies ist nützlich für B2B-Rechnungen, bei denen Kunden ihre Registrierungsnummer auf Dokumenten benötigen.

### Notizen

Wählen Sie **Notizen hinzufügen** im Kundendatensatz, um Informationen zur Kundenbeziehung zu speichern. Notizen sind nur für Ihr Team sichtbar und werden nicht auf Rechnungen oder Angeboten angezeigt.

### GoCardless-Mandat

Wenn Sie GoCardless verwenden, wird der Mandatsstatus für jeden Kunden im Datensatz unter **GoCardless-Mandat** angezeigt. Das Panel zeigt die Mandats-ID, das Erstellungsdatum und das Zahlungsschema sowie den aktuellen Status:

- **Erfolg** — Aktiv und bereit für automatische Einzugsermächtigungen
- **Ausstehend** — Der Kunde hat die Autorisierung noch nicht abgeschlossen
- **Widerrufen** — Der Kunde hat die Autorisierung storniert oder diese ist fehlgeschlagen

Weitere Informationen finden Sie unter [GoCardless-Integration](../integrations/payments/gocardless-integration.md).

## Verwalten Ihrer Kundenliste

Gehen Sie zu **Umsatz** > **Kunden**, um Ihre Kundenliste anzuzeigen. Suchen Sie nach Name oder filtern Sie nach Status (**Aktiv** oder **Archiviert**). Wählen Sie einen Kunden aus, um deren Details zu bearbeiten — Änderungen gelten nur für zukünftige Rechnungen.

Um einen Kunden zu archivieren, öffnen Sie deren Datensatz und wählen Sie **Archivieren**. Archivierte Kunden bleiben in Ihren Aufzeichnungen und Berichten. Stellen Sie den Statusfilter auf **Archiviert**, um sie anzuzeigen.

:::warning
Nur Kunden ohne Rechnungen oder Angebote können gelöscht werden. Archivieren Sie inaktive Kunden stattdessen, um Ihre Finanzhistorie zu bewahren.
:::

## Häufige Probleme

<details>
<summary>Die falsche Währung wird auf einer neuen Rechnung angezeigt</summary>

Überprüfen Sie die Einstellung **Standardwährung** des Kunden. Gehen Sie zu **Umsatz** > **Kunden**, wählen Sie den Kunden aus und bestätigen Sie, dass die Währung korrekt ist. Aktualisieren Sie diese bei Bedarf — die richtige Währung wird auf zukünftige Rechnungen angewendet.

</details>

<details>
<summary>Ein Mandat zeigt Ausstehend an und der Kunde wird nicht belastet</summary>

Der Kunde hat die GoCardless-Autorisierung nicht abgeschlossen. Bitten Sie ihn, seine E-Mail auf den Link zur Mandatserstellung zu überprüfen. Wenn der Link abgelaufen ist, senden Sie die Rechnung mit aktivierter Mandatsoption erneut, um eine neue Anfrage auszulösen.

</details>

<details>
<summary>Ich kann keinen archivierten Kunden finden</summary>

Gehen Sie zu **Umsatz** > **Kunden** und stellen Sie den Statusfilter auf **Archiviert**. Archivierte Kunden sind in der Standardansicht **Aktiv** ausgeblendet, aber vollständig zugänglich.

</details>

## Verwandte Themen

- [Lieferanten](/clients-vendors/vendors) — Fügen Sie die Unternehmen hinzu, denen Sie zahlen, und verwalten Sie diese
- [Rechnungen erstellen](/invoicing/creating-invoices) — Erstellen und versenden Sie Rechnungen an Ihre Kunden
- [GoCardless-Integration](../integrations/payments/gocardless-integration.md) — Richten Sie die Einzugsermächtigung ein
- [Zeitverfolgung](/time-and-mileage/time-tracking) — Verfolgen und rechnen Sie Zeit gegen Kunden ab
- [Kundenfälligkeitsbericht](/reporting/client-aging) — Zeigen Sie ausstehende Salden nach Kunde an
- [Kontoauszug](../reporting/statement-of-accounts.md) — Erstellen Sie Kundenkontoanzeigen
