---
title: "Mit Salt Edge verbinden"
description: "Verbinden Sie Ihre Bank mit Fiskl über Salt Edge für automatisierte Transaktionsimporte und Echtzeit-Finanzverfolgung in Europa, Asien und dem Nahen Osten."
keywords: ["Salt Edge", "bank connection", "transaction imports", "OpenBanking", "Fiskl Banking"]
sidebar_position: 2
slug: /integrations/banking/connecting-saltedge
tags:
  - Integrations
  - Banking
  - Salt Edge
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Dieses Handbuch erläutert, wie Sie Ihre Bank mit Fiskl über Salt Edge für den automatisierten Transaktionsimport verbinden. Salt Edge unterstützt Banken in Europa, Asien und dem Nahen Osten über OpenBanking-Standards.

## Vor dem Start

- Bestätigen Sie, dass Ihre Bank von Salt Edge unterstützt wird, indem Sie die [Salt Edge-Bankabdeckungsprüfung](https://www.saltedge.com/products/account_information/coverage) verwenden.
- Halten Sie Ihre Online-Banking-Anmeldedaten bereit.
- Stellen Sie sicher, dass Ihre Bank Verbindungen zu Drittanbieterdiensten erlaubt.

## Verbinden Ihres Bankkontos

1. Wählen Sie in der linken Seitenleiste **Banking** aus.
2. Wählen Sie **Bank verbinden** aus.
3. Wählen Sie **Salt Edge** als Ihren Anbieter aus.
4. Suchen Sie Ihre Bank nach Name oder durchsuchen Sie sie nach Land, wählen Sie sie dann aus den Ergebnissen aus.
5. Folgen Sie den Authentifizierungsschritten Ihrer Bank. Diese umfassen typischerweise die Eingabe Ihrer Online-Banking-Anmeldedaten, die Durchführung einer Sicherheitsverifizierung und die Autorisierung für Fiskl zum Zugriff auf Ihre Kontodaten.
6. Nach der Authentifizierung verbindet Fiskl Ihre Konten und importiert Ihre letzten Transaktionen.

:::info
Jede Bank hat ihre eigenen Sicherheitsanforderungen. Der Prozess ähnelt Ihrer normalen Online-Banking-Anmeldung, einschließlich aller Zwei-Faktor-Authentifizierungsmethoden, die Ihre Bank verwendet.
:::

### Was nach der Verbindung geschieht

- Fiskl synchronisiert Ihre Transaktionen täglich.
- Neue Transaktionen werden in der Transaktionskarte in **Banking** und in Ihrem **Kontenrahmen** angezeigt.
- Fiskl ordnet Transaktionen automatisch in Kategorien ein und gleicht sie mit Rechnungen oder Ausgaben ab.
- Die anfängliche Synchronisierung kann je nach Ihrer Transaktionshistorie mehrere Minuten dauern.

## Verwalten Ihrer Verbindung

Einige Banken erfordern eine regelmäßige erneute Authentifizierung aus Sicherheitsgründen. Wenn Ihre Verbindung abläuft, wird eine Benachrichtigung in **Banking** angezeigt. Wählen Sie **Erneut verbinden** aus und führen Sie die Authentifizierungsschritte erneut aus, um die Verbindung wiederherzustellen.

:::tip
Überprüfen Sie regelmäßig Ihren Bankverbindungsstatus in **Banking**, um Ihre Finanzdaten aktuell zu halten.
:::

## Häufige Probleme

<details>
<summary>Meine Bank wird in der Suche nicht angezeigt</summary>

Bestätigen Sie, dass Ihre Bank in der [Salt Edge-Abdeckungsprüfung](https://www.saltedge.com/products/account_information/coverage) aufgelistet ist. Wenn sie in Salt Edges Liste angezeigt wird, aber nicht in Fiskl:

1. Schließen und öffnen Sie den Verbindungsdialog erneut, um die Bankliste zu aktualisieren.
2. Suchen Sie mit dem vollständigen offiziellen Namen Ihrer Bank.
3. Prüfen Sie, ob Ihre Bank unter einem Muttergesellschaftsnamen aufgelistet ist.

Wenn Sie Ihre Bank immer noch nicht finden können, kontaktieren Sie den Fiskl-Support.

</details>

<details>
<summary>Verbindung ist während der Authentifizierung fehlgeschlagen</summary>

Häufige Ursachen sind falsche Anmeldedaten, Bankensicherheitseinstellungen, die den Zugriff von Drittanbietern blockieren, oder ein Timeout bei der Zwei-Faktor-Authentifizierung.

1. Melden Sie sich direkt auf der Website Ihrer Bank an, um Ihre Anmeldedaten zu überprüfen.
2. Überprüfen Sie die Sicherheitseinstellungen Ihrer Bank, um zu bestätigen, dass externe Verbindungen erlaubt sind.
3. Versuchen Sie die Verbindung erneut und führen Sie alle Sicherheitsschritte rechtzeitig vor einem Timeout aus.

</details>

<details>
<summary>Transaktionen werden nicht synchronisiert</summary>

1. Gehen Sie zu **Banking** und überprüfen Sie Ihre Bankentokarte auf eine Warnung oder einen Fehler.
2. Wenn Sie „Verbindung abgelaufen" oder ähnliches sehen, wählen Sie **Erneut verbinden** aus.
3. Wenn die Verbindung als aktiv angezeigt wird, warten Sie 24 Stunden auf die automatische tägliche Synchronisierung.
4. Wählen Sie auf der Bankenkontkarte **Aktualisieren** aus, um eine manuelle Synchronisierung auszulösen.

Kontaktieren Sie den Fiskl-Support, wenn Transaktionen nach 48 Stunden immer noch fehlen.

</details>

## Verwandte Themen

- [Banking-Übersicht](/integrations/banking/overview) — Zeigen Sie alle Ihre verbundenen Bankkonten an und verwalten Sie sie
- [Mit Yodlee verbinden](/integrations/banking/connecting-yodlee) — Alternative Bankverbindung für unterstützte Regionen
- [Kontoabstimmung](/accounting/reconciliation/overview) — Gleichen Sie importierte Transaktionen mit Ihren Aufzeichnungen ab
