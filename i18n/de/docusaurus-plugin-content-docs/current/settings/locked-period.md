---
title: "Gesperrter Zeitraum"
description: "Erfahren Sie, wie die gesperrte Periode in Fiskl Ihre Konten bis zu einem bestimmten Datum abschließt, was sie verhindert und warum die Zuordnung von Transaktionen in eine gesperrte Periode dennoch funktioniert."
keywords: ["locked period", "close accounts", "period lock", "accounting settings", "year end", "financial close"]
sidebar_position: 4
tags:
  - Accounting
  - Settings
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Dieses Handbuch erläutert die gesperrte Periode in Fiskl – was sie ist, wie man sie einstellt und was sie verhindert. Nutzen Sie eine gesperrte Periode, um abgeschlossene Konten vor versehentlichen Änderungen nach dem Abschluss einer Rechnungsperiode zu schützen.

## Was ist eine gesperrte Periode?

Eine gesperrte Periode kennzeichnet den Punkt, bis zu dem Ihre Konten als abgeschlossen gelten. Es ist ein einzelnes Datum: Alles an oder vor diesem Datum ist gesperrt, und alles danach bleibt offen.

Wenn Sie beispielsweise Ihre Konten für 2025 abschließen, stellen Sie die gesperrte Periode auf den 31. Dezember 2025. Ab diesem Zeitpunkt behandelt Fiskl alle Aktivitäten vom 31. Dezember 2025 oder früher als endgültig.

Das Sperren einer Periode schützt abgeschlossene Zahlen, nachdem Sie diese überprüft haben, Ihre Steuern eingereicht haben oder Berichte mit Ihrem Buchhalter geteilt haben. Es verhindert Änderungen, die Konten verändern würden, die Sie bereits abgeschlossen haben.

## Was eine gesperrte Periode verhindert

Wenn eine Periode gesperrt ist, können Sie nichts mit einem Datum innerhalb dieser Periode hinzufügen oder ändern, das Ihre Buchhaltung beeinflusst. Dies umfasst:

- Buchungssätze und Journal-Einträge
- Rechnungen und Rechnungszahlungen
- Ausgaben und Lieferantenzahlungen
- Verschieben von Buchungssätzen zwischen Ledger-Konten innerhalb der gesperrten Periode

Kurz gesagt, jede Aktion, die die Buchhaltungszahlen für ein gesperrtes Datum ändern würde, wird blockiert.

:::info
Die gesperrte Periode bezieht sich auf das Transaktionsdatum, nicht auf das Datum, an dem Sie es eingeben. Ein Eintrag mit einem Datum innerhalb der gesperrten Periode wird blockiert, auch wenn Sie ihn heute erstellen.
:::

## Einstellen der gesperrten Periode

1. Gehen Sie zu **Einstellungen** > **Buchhalterische Einstellungen**
2. Suchen Sie die Einstellung **Gesperrte Periode**
3. Wählen Sie das Datum aus, bis zu dem Sie Ihre Konten abschließen möchten
4. Wählen Sie **Speichern**

Alle Aktivitäten an oder vor diesem Datum sind nun gesperrt. Um eine Periode wiederzueröffnen, ändern Sie das Datum der gesperrten Periode auf ein früheres Datum oder löschen Sie es.

:::warning
Ändern Sie das Datum der gesperrten Periode nur, wenn Sie sicher sind, dass die Konten für diese Periode endgültig sind. Das Wiedereröffnen einer gesperrten Periode ermöglicht Änderungen an Zahlen, die Sie möglicherweise bereits den Steuerbehörden gemeldet haben.
:::

## Abgleich von Buchungssätzen in eine gesperrte Periode

Sie können einen Buchungssatz immer noch mit einem vorhandenen Buchungssatz innerhalb einer gesperrten Periode abgleichen, obwohl die Periode abgeschlossen ist.

Dies funktioniert, weil der Abgleich die Buchhaltungszahlen nicht ändert. Er verbindet zwei Datensätze, die dasselbe wirtschaftliche Ereignis darstellen – es gibt also keinen wirtschaftlichen Unterschied für die abgeschlossenen Konten.

**Beispiel:** Sie haben einen Buchungssatz im November 2025, innerhalb Ihrer gesperrten Periode 2025. Im Januar 2026 trifft ein zugehöriger Banktransaktionssatz ein. Sie können den Januar-Buchungssatz mit dem November-Buchungssatz abgleichen. Der Abgleich ist zulässig, weil er keine neue wirtschaftliche Aktivität in der gesperrten Periode aufzeichnet – er gleicht nur Datensätze ab, die bereits vorhanden sind.

:::info
Der Abgleich in eine gesperrte Periode ist zulässig, da vorhandene Datensätze abgeglichen werden, anstatt neue wirtschaftliche Aktivität hinzuzufügen. Das Erstellen, Bearbeiten oder Löschen von Buchungssätzen in einer gesperrten Periode bleibt blockiert.
:::

## Häufige Probleme

<details>
<summary>Ich kann eine Rechnung, Ausgabe oder einen Buchungssatz nicht speichern</summary>

Überprüfen Sie das Datum des Datensatzes. Wenn es auf oder vor Ihrem Datum der gesperrten Periode liegt, wird die Aktion blockiert. Ändern Sie entweder das Datum so, dass es nach der gesperrten Periode liegt, oder fragen Sie Ihren Buchhalter, ob die Periode wiedereröffnet werden kann.

</details>

<details>
<summary>Ich muss etwas in einer abgeschlossenen Periode korrigieren</summary>

Änderungen innerhalb einer gesperrten Periode werden absichtlich blockiert, um abgeschlossene Konten zu schützen. Wenn eine Korrektur erforderlich ist, öffnen Sie die Periode wieder, indem Sie das Datum der gesperrten Periode in **Einstellungen** > **Buchhalterische Einstellungen** ändern, nehmen Sie Ihre Korrektur vor und sperren Sie die Periode dann erneut. Fragen Sie zuerst Ihren Buchhalter, da dies Zahlen beeinflusst, die Sie möglicherweise bereits gemeldet haben.

</details>

<details>
<summary>Ein Buchungssatz aus einer neuen Periode wird nicht mit einem in der gesperrten Periode abgeglichen</summary>

Der Abgleich in eine gesperrte Periode ist zulässig. Wenn ein Abgleich nicht angezeigt wird, liegt die Ursache normalerweise nicht an der Sperrung – überprüfen Sie, dass beide Buchungssätze vorhanden sind, unkategorisiert sind, wenn erforderlich, und Beträge haben, die nah genug beieinander liegen, damit Fiskl den Abgleich vorschlägt. Siehe [Abgleich und Aufteilung von Buchungssätzen](/accounting/journal-entries/guides/match-and-split-transactions).

</details>

## Verwandte Themen

- [Buchhalterische Einstellungen](/settings/accounting-settings) – Konfigurieren Sie die gesperrte Periode und andere Buchhaltungseinstellungen
- [Abgleich und Aufteilung von Buchungssätzen](/accounting/journal-entries/guides/match-and-split-transactions) – Gleichen Sie Buchungssätze ab, einschließlich in eine gesperrte Periode
- [Verschieben von Buchungssätzen zwischen Konten](/accounting/journal-entries/guides/move-transactions) – Weisen Sie Buchungssätze außerhalb einer gesperrten Periode neu zu
- [Abstimmung von Konten](/accounting/reconciliation/overview) – Überprüfen Sie Ihre Konten vor dem Sperren einer Periode
