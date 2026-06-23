---
title: "Kapitalflussrechnung"
description: "Erstellen und interpretieren Sie die Kapitalflussrechnung in Fiskl, um Geldbewegungen über operative, Investitions- und Finanzierungsaktivitäten hinweg zu überwachen."
keywords: ["cash flow", "statement of cash flows", "cash flow report", "operating activities", "investing activities", "financing activities", "Fiskl reports"]
sidebar_position: 3
tags:
  - Reporting
  - Accounting
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erläutert, wie Sie den Kapitalflussrechnung-Bericht in Fiskl generieren und interpretieren, um die Muster der Kapitalgenerierung und -verwendung Ihres Unternehmens zu überwachen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

- Ihr [Kontenrahmen](/accounting/chart-of-accounts) muss vor dem Ausführen von Kapitalflussberichten konfiguriert sein
- Stellen Sie sicher, dass Ihre Transaktionen ordnungsgemäß erfasst und kategorisiert sind, damit Kapitalflüsse in den richtigen Abschnitten angezeigt werden
- Wenn Sie mehrere Währungen verwenden, werden alle Beträge in Ihrer [Basiswährung](/settings/currency-management) angezeigt
- Stellen Sie sicher, dass alle Bankkonten abgestimmt sind

## Was ist die Kapitalflussrechnung?

Die Kapitalflussrechnung verfolgt alle Kapitalbewegungen in Ihrem Unternehmen, organisiert in drei Kategorien: Betriebs-, Investitions- und Finanzierungsaktivitäten. Sie zeigt, woher das Kapital kommt und wie es verwendet wird — und gibt Ihnen einen klaren Überblick über die Liquidität und finanzielle Gesundheit Ihres Unternehmens.

Im Gegensatz zum Gewinn- und Verlustvortrag, der Einnahmen und Ausgaben erfasst, wenn sie anfallen, spiegelt der Kapitalflussbericht die tatsächlichen Kapitalbewegungen wider. Ein profitables Unternehmen kann dennoch mit Kapitalmangel konfrontiert werden, daher ist die regelmäßige Überprüfung dieses Berichts für eine solide Finanzwirtschaft unverzichtbar.

<details className="blue-box">
<summary>Warum ist dieser Bericht wichtig?</summary>

Die Kapitalflussrechnung hilft Ihnen:

- Die Quellen und Verwendungen Ihres Kapitals zu verfolgen
- Die Fähigkeit Ihres Unternehmens zu überwachen, Kapital für zukünftiges Wachstum zu generieren
- Trends in Kapitalflussmustern zu erkennen
- Fundierte Entscheidungen über den Zeitpunkt von Zahlungen und Investitionen zu treffen

</details>

## Wie Sie Ihren Kapitalflussbericht generieren

1. Wählen Sie im linken Menü **Accounting** > **Reports** > **Cash Flow**
2. Wählen Sie oben rechts **Filters & Settings**
3. Wählen Sie Ihren Datumsbereich
4. Passen Sie die Anzeigeoptionen nach Bedarf an

### Anzeigeoptionen

Verwenden Sie diese Optionen, um zu steuern, wie der Bericht angezeigt wird:

- **Show Unrealised FX Gains/Losses** — Fremdwährungsbewegungen einbeziehen oder ausschließen, die noch nicht realisiert wurden
- **Show Account Details** — Einzelne Hauptbuchkonten in jedem Abschnitt anzeigen, um eine detailliertere Ansicht zu erhalten
- **Divide by 1000** — Große Zahlen skalieren, um bei Unternehmen mit hohem Umsatzvolumen eine einfachere Lesbarkeit zu ermöglichen
- **Compact** — Zeilenabstände reduzieren, um eine komprimierte Ansicht zu erhalten

### Anpassen des Berichtslayouts

1. Wählen Sie **Cash Flow Report Config** oben im Bericht
2. Ziehen Sie Hauptbuchkonten, um sie in einem Abschnitt neu zu ordnen, oder verschieben Sie sie zwischen Abschnitten
3. Wählen Sie **Credit Cards as Cash & Cash Equivalents**, um Ihre Kreditkartensalden in die Eröffnungs- und Abschlusssalden des Kapitals einzubeziehen. Standardmäßig werden Kreditkarten als Verbindlichkeiten (Geld, das dem Kartenaussteller geschuldet ist) behandelt und von Ihrer Kapitalposition ausgeschlossen. Aktivieren Sie diese Option, wenn Ihr Unternehmen die meisten Ausgaben über eine Firmenkarte abwickelt und diese regelmäßig ausgleicht. Wenn aktiviert, spiegelt die Nettokapitalveränderung Bewegungen auf Bankkonten und Kreditkarten wider. Falls Sie sich unsicher sind, sprechen Sie mit Ihrem Buchhalter
4. Um das ursprüngliche Layout wiederherzustellen, wählen Sie **Reset**

Damit können Sie die Berichtsstruktur an Ihr Unternehmen oder das bevorzugte Format Ihres Buchhalters anpassen.

:::tip
Besprechen Sie das Layout mit Ihrem Buchhalter, bevor Sie Änderungen vornehmen. Konsistente Kategorisierung über Berichtszeiträume hinweg macht die Trendanalyse aussagekräftiger.
:::

## Kapitalflussalternativen verstehen

Fiskl organisiert Ihre Kapitalflüsse in drei Abschnitten.

### Betriebstätigkeit

Betriebstätigkeiten erfassen Kapital aus Ihrem täglichen Geschäftsbetrieb:

- Von Kunden eingegangene Zahlungen
- An Lieferanten geleistete Zahlungen
- Gezahlte Mitarbeiterlöhne
- Andere gezahlte Betriebsausgaben

Eine positive Zahl weist hier darauf hin, dass Ihr Kerngeschäft Kapital generiert. Eine negative Zahl kann auf Timing-Probleme bei Forderungen oder steigende Kosten hindeuten.

### Investitionstätigkeiten

Investitionstätigkeiten spiegeln das Kapital wider, das für oder von langfristigen Vermögenswerten verwendet oder erhalten wird:

- Käufe von Ausrüstung und Vermögenswerten
- Einnahmen aus Vermögensverkäufen
- Investitionskäufe und -renditen

Negative Zahlen in diesem Abschnitt sind für wachsende Unternehmen, die in Vermögenswerte investieren, üblich.

### Finanzierungstätigkeiten

Finanzierungstätigkeiten zeigen Kapitalflüsse im Zusammenhang mit Finanzierung und Verteilungen:

- Erhaltene Darlehenserlöse
- Geleistete Darlehensrückzahlungen
- Eigenkapitalbeiträge
- Eigenkapitalentnahmen oder Dividenden

## Ihren Bericht exportieren

Sie können die Kapitalflussrechnung in zwei Formaten exportieren:

- **Excel**
- **Google Sheets**

So exportieren Sie:

1. Wählen Sie **Export** oben im Bericht
2. Wählen Sie Ihr bevorzugtes Format
3. Öffnen Sie die Datei direkt oder speichern Sie sie auf Ihrem Gerät

## Notizen hinzufügen

Sie können Ihrem Bericht Kontext hinzufügen, bevor Sie ihn mit Stakeholdern oder Ihrem Buchhalter teilen:

1. Wählen Sie **Notes** unten im Bericht
2. Geben Sie Ihre Kommentare oder Erklärungen ein
3. Ihre Notizen sind in der exportierten Datei enthalten

:::info
Notizen sind nützlich, um einmalige Kapitalbewegungen, wie einen großen Vermögenskauf oder eine Darlehensrückzahlung, zu erklären, damit Rezensenten den vollständigen Kontext haben.
:::

## Häufige Probleme

<details>
<summary>Transaktionen erscheinen im falschen Kapitalflussabschnitt</summary>

Dies tritt auf, wenn ein Hauptbuchkonto im Kontenrahmen der falschen Kategorie zugeordnet ist oder wenn Konten manuell im Berichtslayout verschoben wurden.

So beheben Sie dies:

1. Gehen Sie zu **Accounting** > **Chart of Accounts**
2. Suchen Sie das relevante Hauptbuchkonto und überprüfen Sie seinen Kontotyp
3. Kehren Sie zum Kapitalflussbericht zurück und ziehen Sie das Konto in den korrekten Abschnitt
4. Falls das Problem über alle Perioden hinweg bestehen bleibt, muss der Kontotyp möglicherweise aktualisiert werden — sprechen Sie mit Ihrem Buchhalter, bevor Sie Änderungen vornehmen

</details>

<details>
<summary>Kapitalsalden entsprechen nicht meinem Banksaldo</summary>

Der Abschlusssaldo im Bericht spiegelt alle Konten wider, die in Fiskl als Kapital oder Kapitaläquivalente kategorisiert sind. Falls sich Ihr Banksaldo unterscheidet, überprüfen Sie Folgendes:

- Nicht abgestimmte Transaktionen fehlen möglicherweise in Fiskl
- Die Einstellung **Credit Cards as Cash & Cash Equivalents** muss möglicherweise abhängig von Ihrem Setup ein- oder ausgeschaltet werden
- Transaktionen, die in einer Fremdwährung erfasst wurden, werden in Ihre Basiswährung konvertiert, was aufgrund von Wechselkursbewegungen zu kleinen Unterschieden führen kann

</details>

<details>
<summary>Fremdwährungsbewegungen treten unerwartet auf</summary>

Falls Sie in mehreren Währungen tätig sind, erscheinen unrealisierte Fremdwährungsgewinne und -verluste im Bericht, wenn sich Wechselkurse zwischen dem Transaktionsdatum und dem Berichtsdatum ändern. Schalten Sie **Show Unrealised FX Gains/Losses** in **Filters & Settings** aus, wenn Sie diese aus Ihrer Ansicht ausschließen möchten.

</details>

<details>
<summary>Der Bericht zeigt keine Daten für meinen ausgewählten Datumsbereich</summary>

Falls der Bericht leer ist, überprüfen Sie Folgendes:

- Transaktionen vorhanden und im ausgewählten Datumsbereich erfasst sind
- Ihre Bank- oder Hauptbuchkonten verbunden und synchronisiert sind

</details>

## Verwandte Themen

- [Gewinn und Verlust](/reporting/profit-and-loss) — Anzeigen von Einnahmen und Ausgaben über einen Zeitraum
- [Bilanz](/reporting/balance-sheet) — Anzeige Ihrer Vermögenswerte, Verbindlichkeiten und Eigenkapital zu einem bestimmten Zeitpunkt
- [Kontenrahmen](/accounting/chart-of-accounts) — Konfigurieren Sie, wie Transaktionen kategorisiert werden
- [Währungsverwaltung](/settings/currency-management) — Legen Sie Ihre Basiswährung fest und verwalten Sie Wechselkurse
- [Bankkontoabstimmung](/accounting/reconciliation/guides/bank-account-reconciliation) — Gleichen Sie Ihre Fiskl-Datensätze mit Ihren Bankauszügen ab
