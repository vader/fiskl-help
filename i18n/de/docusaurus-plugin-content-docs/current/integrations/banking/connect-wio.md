---
title: "WIO Bank verbinden"
description: "Verbinden Sie Ihr WIO Bank-Konto mit Fiskl für automatische Transaktionsimporte, problemlose Abstimmung und Verwaltung von Mehrwährungstransfers."
keywords: ["WIO Bank", "WIO integration", "Fiskl Banking", "bank transactions", "multi-currency transfers", "automated reconciliation", "OpenBanking"]
sidebar_position: 4
slug: /integrations/banking/connecting-wio
tags:
  - Integrations
  - Banking
  - WIO
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Anleitung zeigt, wie Sie Ihr WIO Bank-Konto mit Fiskl verbinden, um Transaktionsimporte und Abstimmungen zu automatisieren, einschließlich automatischer Abstimmung für Multi-Currency-Transfers.

## So funktioniert es

Wenn Sie WIO Bank mit Fiskl verbinden, werden Transaktionen aus Ihren verbundenen Konten automatisch importiert. Fiskl erstellt für jede Transaktion Buchungssätze, einschließlich Wechselkurse für Multi-Currency-Transfers.

Konten werden bei Bedarf erstellt und aktualisiert. Bei Transfers zwischen WIO-Konten führt Fiskl eine automatische Abstimmung durch – es werden Transaktionen über Konten hinweg abgestimmt, einschließlich Multi-Currency-Transfers. Eröffnungssalden werden automatisch erstellt, wenn Sie zum ersten Mal verbinden.

## Vorteile

- **Automatische Abstimmung** – Automatisiert die Abstimmung von Transfers zwischen WIO-Konten, einschließlich Multi-Currency-Transaktionen
- **Multi-Currency-Unterstützung** – Verwaltet Transaktionen und Conversions über verschiedene Währungen hinweg automatisch
- **Zeitersparnis** – Reduziert den administrativen Aufwand für Sie und Ihren Buchhalter
- **Multi-Konto-Unterstützung** – Verbinden und verwalten Sie mehrere WIO Bank-Konten an einer Stelle
- **Sichere Datenweitergabe** – Nutzt OpenBanking-Standards für eine sichere und effiziente Verbindung

## Verbinden Sie Ihr WIO Bank-Konto

Bevor Sie beginnen, halten Sie Ihre WIO Bank-Anmeldedaten bereit.

So verbinden Sie Ihr WIO Bank-Konto:

1. Wählen Sie in der linken Seitenleiste **Banking** aus.
2. Wählen Sie **WIO Bank** aus den verfügbaren Banking-Anbietern aus.
3. Konfigurieren Sie Ihre Verbindungseinstellungen:
   - **Zustimmungsdauer** – Wählen Sie, wie lange Fiskl auf Ihr Konto zugreifen darf
   - **Startdatum** – Wählen Sie das Datum, ab dem Transaktionen importiert werden sollen
4. Geben Sie Ihre WIO Bank-Anmeldedaten ein, wenn Sie dazu aufgefordert werden.
5. Wählen Sie die WIO Bank-Konten aus, die Sie mit Fiskl synchronisieren möchten. Sie können mehrere Konten auswählen.
6. Wählen Sie **Erlauben** aus, um die Verbindung zu autorisieren.

### Was passiert als Nächstes

Nach der Autorisierung beginnt Fiskl, Ihren Transaktionsverlauf ab dem gewählten Startdatum zu importieren. Die erste Synchronisierung kann je nach Transaktionsmenge mehrere Minuten dauern. Nach Abschluss werden Ihre WIO Bank-Konten im Bereich **Banking** angezeigt.

:::info
Sie können mehrere WIO Bank-Konten verbinden, indem Sie diesen Vorgang für jedes Konto wiederholen.
:::

## Verbundene Konten verwalten

Nach der Verbindung können Sie anpassen, wie jedes Konto in Fiskl angezeigt wird.

So bearbeiten Sie Kontodetails:

1. Gehen Sie in der linken Seitenleiste zu **Banking**.
2. Suchen Sie das WIO Bank-Konto, das Sie bearbeiten möchten.
3. Wählen Sie **Bearbeiten** auf der Kontokarte aus.
4. Aktualisieren Sie den Kontonamen zur einfacheren Identifikation.
5. Wählen Sie **Speichern** aus, um Ihre Änderungen zu übernehmen.

Das Umbenennen von Konten hilft Ihnen, diese schnell zu identifizieren, besonders wenn Sie mehrere WIO Bank-Konten verbunden haben.

## Ihre Verbindung aufrechterhalten

Halten Sie Ihre WIO Bank-Verbindung aktiv, um eine kontinuierliche Datensynchronisierung zu gewährleisten.

Um Ihren Verbindungsstatus zu überprüfen, gehen Sie zu **Banking** und überprüfen Sie den Verbindungsindikator auf jeder Kontokarte. Achten Sie auf Warnmeldungen zu abgelaufener Zustimmung und stellen Sie sicher, dass Transaktionen regelmäßig synchronisiert werden.

Die Zustimmung, die Sie erteilen, hat ein Ablaufdatum, das auf der während der Einrichtung gewählten Dauer basiert. Fiskl benachrichtigt Sie, bevor die Zustimmung abläuft.

So erneuern Sie die Zustimmung:

1. Gehen Sie zu **Banking**.
2. Wählen Sie das WIO Bank-Konto mit abgelaufener Zustimmung aus.
3. Wählen Sie **Erneut verbinden** aus.
4. Folgen Sie erneut den Autorisierungsschritten.

:::tip
Überprüfen Sie Ihre WIO Bank-Verbindung monatlich, um Ihre Finanzdaten aktuell und die Abstimmung automatisch zu halten.
:::

## Häufige Probleme

<details>
<summary>Mein WIO Bank-Konto wird nicht verbunden</summary>

Überprüfen Sie folgende Punkte:

1. Bestätigen Sie, dass Sie die korrekten WIO Bank-Anmeldedaten verwenden.
2. Stellen Sie sicher, dass Ihr WIO Bank-Konto aktiv und in einwandfreiem Zustand ist.
3. Überprüfen Sie, dass Sie ausreichende Berechtigungen für das WIO Bank-Konto haben.
4. Versuchen Sie, das Konto zu trennen und erneut zu verbinden.

Wenn das Problem weiterhin besteht, kontaktieren Sie den Fiskl-Support mit Details zur Fehlermeldung, die Sie erhalten haben.

</details>

<details>
<summary>Transaktionen werden nicht von WIO Bank synchronisiert</summary>

Überprüfen Sie diese häufigen Ursachen:

1. Gehen Sie zu **Banking**, wählen Sie Ihr WIO Bank-Konto aus und überprüfen Sie **Verbindungsstatus**, um zu bestätigen, dass die Zustimmung nicht abgelaufen ist.
2. Überprüfen Sie Ihre Internetverbindung.
3. Überprüfen Sie, dass WIO Bank-Services betriebsbereit sind.
4. Wählen Sie **Aktualisieren** auf der Kontokarte aus, um eine manuelle Synchronisierung auszulösen.

Transaktionen werden normalerweise innerhalb weniger Stunden synchronisiert. Wenn Transaktionen nach 24 Stunden immer noch fehlen, kontaktieren Sie den Fiskl-Support.

</details>

<details>
<summary>Wie trenne ich mein WIO Bank-Konto?</summary>

So trennen Sie WIO Bank von Fiskl:

1. Gehen Sie zu **Banking**.
2. Wählen Sie das WIO Bank-Konto aus, das Sie trennen möchten.
3. Wählen Sie das Zahnradsymbol aus, um die Kontoeinstellungen zu öffnen.
4. Wählen Sie **Konto trennen** aus.
5. Bestätigen Sie Ihre Wahl.

Das Trennen stoppt die zukünftige Transaktionssynchronisierung, löscht aber keine historischen Transaktionen, die bereits in Fiskl importiert wurden.

</details>

## Verwandte Themen

- [Banking-Übersicht](/integrations/banking/overview) – Erfahren Sie mehr über Fiskl Banking-Funktionen und verbundene Konten
- [Buchungssätze-Übersicht](/accounting/journal-entries/overview) – Kategorisieren und verwalten Sie importierte Transaktionen
- [Abstimmungs-Übersicht](/accounting/reconciliation/overview) – Stimmen Sie Ihre Konten ab und überprüfen Sie die Genauigkeit
- [Multi-Currency-Transaktionen](/accounting/journal-entries/guides/multi-currency-transactions) – Verwalten Sie Transaktionen über verschiedene Währungen hinweg
