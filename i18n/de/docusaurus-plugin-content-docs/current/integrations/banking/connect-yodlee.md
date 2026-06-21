---
title: "Mit Yodlee verbinden"
description: "Verbinden Sie Ihre Bank mit Fiskl über Yodlee für automatisierte Transaktionsimporte in den USA, Kanada und Südafrika."
keywords: ["Yodlee", "bank connection", "transaction imports", "Fiskl Banking", "US banking", "Canada banking"]
sidebar_position: 1
slug: /integrations/banking/connecting-yodlee
tags:
  - Integrations
  - Banking
  - Yodlee
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Yodlee verbindet deine Bankkonten mit Fiskl und importiert Transaktionen automatisch, sodass deine Finanzunterlagen aktuell bleiben, ohne dass manuelle Einträge erforderlich sind.

Die Integration unterstützt Banken in den USA, Kanada und Südafrika. Nach der Verbindung synchronisiert Fiskl deine Bankdaten täglich.

## Bevor Sie beginnen

- Halten Sie Ihre Online-Banking-Anmeldedaten bereit
- Bestätigen Sie, dass Ihre Bank in einer unterstützten Region ansässig ist (USA, Kanada oder Südafrika)
- Stellen Sie sicher, dass Ihre Bank Drittanbieterverbindungen zulässt – überprüfen Sie die Sicherheitseinstellungen Ihrer Bank, falls Sie unsicher sind

## Verbinden Sie Ihr Bankkonto

1. Wählen Sie in der linken Seitenleiste **Banking**
2. Wählen Sie **Bank verbinden**
3. Wählen Sie **Yodlee** als Ihren Anbieter
4. Suchen Sie Ihre Bank nach Name oder durchsuchen Sie nach Region, wählen Sie sie dann aus den Ergebnissen
5. Folgen Sie dem Authentifizierungsprozess Ihrer Bank – dies umfasst normalerweise die Eingabe Ihrer Online-Banking-Anmeldedaten und die Durchführung aller erforderlichen Sicherheitsüberprüfungen
6. Überprüfen Sie die Liste der zurückgegebenen Konten. Alle Konten sind standardmäßig ausgewählt – deselektieren Sie alle, die Sie nicht synchronisieren möchten
7. Wählen Sie **Speichern & Fertigstellen** aus, um das Setup abzuschließen, oder wählen Sie **Speichern & weitere Konten verknüpfen** aus, um eine weitere Bank hinzuzufügen

:::info
Die erste Synchronisierung kann je nach Ihrer Transaktionshistorie bis zu 12 Stunden dauern. Nachfolgende tägliche Synchronisierungen sind schneller.
:::

### Was nach der Verbindung passiert

- Neue Transaktionen erscheinen automatisch – wählen Sie eine Bankkontenkarte in **Banking** aus, um sie anzuzeigen, oder finden Sie sie in Ihrem **Kontenrahmen**
- Fiskl ordnet Transaktionen automatisch wo möglich bestehenden Rechnungen und Ausgaben zu
- Sie können nicht zugeordnete Transaktionen manuell überprüfen und kategorisieren

Sie können mehrere Konten von verschiedenen Instituten verbinden. Jedes Konto wird unabhängig synchronisiert.

## Verwalten Sie Ihre Verbindung

Einige Banken erfordern eine regelmäßige Erneuerung der Authentifizierung aus Sicherheitsgründen. Falls Ihre Verbindung abläuft, erscheint eine Benachrichtigung in **Banking**. Wählen Sie **Erneut verbinden** auf der betroffenen Kontkarte und führen Sie die Authentifizierungsschritte durch, um die Verbindung wiederherzustellen.

:::tip
Überprüfen Sie Ihre Bankverbindungen alle 30 Tage, um Unterbrechungen der Transaktionssynchronisierung zu vermeiden.
:::

## Häufig auftretende Probleme

<details>
<summary>Verbindung bei der Authentifizierung fehlgeschlagen</summary>

Dies wird normalerweise durch fehlerhafte Anmeldedaten, eine Sicherheitseinstellung der Bank, die den Zugriff durch Drittanbieter blockiert, oder ein Timeout der Zwei-Faktor-Authentifizierung verursacht.

1. Melden Sie sich direkt auf der Website Ihrer Bank an, um zu überprüfen, ob Ihre Anmeldedaten korrekt sind
2. Überprüfen Sie die Sicherheitseinstellungen Ihrer Bank auf Berechtigungen für Drittanbieter oder externen Zugriff
3. Versuchen Sie die Verbindung erneut herzustellen und führen Sie alle Sicherheitsschritte umgehend durch, ohne die Seite zu verlassen

Falls das Problem weiterhin besteht, wenden Sie sich an den Fiskl-Support und teilen Sie die Fehlermeldung mit, die Sie erhalten haben.

</details>

<details>
<summary>Transaktionen werden nicht synchronisiert</summary>

1. Gehen Sie zu **Banking** und überprüfen Sie den Status auf Ihrer Bankkontenkarte
2. Falls Sie eine Meldung wie „Verbindung abgelaufen" oder ähnlich sehen, wählen Sie **Erneut verbinden**
3. Falls die Verbindung als aktiv angezeigt wird, warten Sie 24 Stunden auf die nächste automatische Synchronisierung
4. Wählen Sie **Aktualisieren** auf der Kontkarte aus, um eine manuelle Synchronisierung auszulösen

Falls Transaktionen nach 48 Stunden noch immer fehlen, wenden Sie sich an den Fiskl-Support.

</details>

<details>
<summary>Meine Bank wird nicht aufgelistet</summary>

Yodlee deckt die meisten Banken in den USA, Kanada und Südafrika ab. Falls Ihre Bank in den Suchergebnissen nicht angezeigt wird:

1. Suchen Sie mit dem vollständigen offiziellen Namen Ihrer Bank
2. Versuchen Sie, unter einem Mutterkonzern zu suchen, falls Ihre Bank Teil einer größeren Unternehmensgruppe ist
3. Durchsuchen Sie nach Region, anstatt zu suchen

Falls Sie Ihre Bank immer noch nicht finden können, kann [Salt Edge](/integrations/banking/connecting-saltedge) sie möglicherweise als alternativen Anbieter abdecken.

</details>

<details>
<summary>Ich sehe eine Meldung „Zustimmung abgelaufen"</summary>

Einige Banken erfordern eine regelmäßige Erneuerung der Zustimmung als Teil ihrer Sicherheitskonformität. Dies ist ein erwartetes Verhalten.

1. Gehen Sie zu **Banking**
2. Wählen Sie **Erneut verbinden** auf der betroffenen Kontkarte
3. Führen Sie die Authentifizierungsschritte durch, um die Zustimmung zu erneuern

Ihre Transaktionen werden nach der erneuten Verbindung automatisch wieder synchronisiert.

</details>

## Verwandte Themen

- [Banking-Übersicht](/integrations/banking/overview) – Weitere Informationen zu Fiskl Banking-Funktionen und unterstützten Anbietern
- [Mit Salt Edge verbinden](/integrations/banking/connecting-saltedge) – Alternativer Banking-Anbieter mit breiterer internationaler Abdeckung
- [Kontoabstimmung](/accounting/reconciliation/overview) – Importierte Transaktionen gegen Ihre Unterlagen abstimmen
- [Handbücher zu Buchungssätzen](/accounting/journal-entries/guides/overview) – Transaktionen in Ihrem Hauptbuch kategorisieren und verwalten
