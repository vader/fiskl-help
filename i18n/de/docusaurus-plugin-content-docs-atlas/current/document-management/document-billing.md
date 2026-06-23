---
title: "Speicherabrechnung"
description: "Aktivieren Sie bezahlten Speicher in Ihrer Accountant Portal-Filiale, um über die kostenlose 1-GB-Grenze hinaus hochzuladen. Sie zahlen nur für das, was Sie nutzen, und werden monatlich mit Ihrem Abonnement abgerechnet."
keywords: ["storage billing", "paid storage", "document storage", "overage", "accountant portal", "subscription"]
sidebar_position: 2
tags:
  - Accountant Portal
  - Document Management
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Jeder Branch in Ihrem Accountant Portal enthält 1 GB kostenlosen Dokumentenspeicher. Wenn Sie mehr benötigen, können Sie kostenpflichtigen Speicher aktivieren und zahlen nur für das, was Sie tatsächlich über die enthaltene Kapazität hinaus nutzen – monatlich mit Ihrem bestehenden Abonnement verrechnet.

## Bevor Sie beginnen

Sie benötigen:

- Die Berechtigung **Abrechnung verwalten** für den Branch
- Ein aktives Abonnement für den Branch (kostenpflichtiger Speicher wird mit Ihrem bestehenden Abonnement verknüpft)
- Dokumentenspeicher, der bereits für den Branch aktiviert ist

Wenn Ihr Branch das [Abrechnungsmodell Client zahlt](../billing-models/client-pays-model.md) nutzt, können Sie kostenpflichtigen Speicher für den Branch selbst nicht aktivieren – es gibt kein Branch-Abonnement, an das er gebunden werden kann.

## So funktioniert kostenpflichtiger Speicher

Wenn Sie kostenpflichtigen Speicher aktivieren, stoppt die 1-GB-Obergrenze nicht mehr, Uploads zu blockieren. Stattdessen werden Sie jeden Monat für jeden Speicher über 1 GB auf Basis der tatsächlichen Nutzung an Ihrem Abrechnungsdatum in Rechnung gestellt.

Das Modell ist einfach:

- **Kostenlose Kapazität** – 1 GB pro Branch, gemeinsam genutzt von allen Kunden
- **Gebührensatz** – ein fester Satz pro GB in der Abrechnungswährung Ihres Branch
- **Monatliche Abrechnung** – wird als Posten auf Ihrer vorhandenen Branch-Rechnung hinzugefügt

Ihnen wird der Speicher in Rechnung gestellt, der in dem Moment gespeichert ist, in dem Ihre Rechnung jeden Monat entwürfelt wird. Wenn Sie Dateien vor dem nächsten Rechnungsentwurf löschen, werden Sie für diesen Speicher auf der nächsten Rechnung nicht in Rechnung gestellt.

:::info
Die kostenlose 1 GB wird nicht übertragen. Wenn Sie einen Monat unter dem Limit bleiben, erhalten Sie im nächsten Monat keinen zusätzlichen Speicher – jede Rechnung wird gegen die gleiche 1-GB-Kapazität berechnet.
:::

## Kostenpflichtigen Speicher aktivieren

So aktivieren Sie kostenpflichtigen Speicher:

1. Öffnen Sie das Profil eines beliebigen Kunden im Branch.
2. Wählen Sie in der Karte **Dokumentenverwaltung** den Link **Speicher hinzufügen** in der Nutzungsanzeige aus.
3. Überprüfen Sie den pro-GB-Satz, der für die Währung Ihres Branch angezeigt wird.
4. Wählen Sie **Speicherabrechnung aktivieren** aus.

Die Änderung wird sofort wirksam. Sie können nach der Bestätigung über 1 GB hinaus hochladen.

Das Dialogfeld zeigt auch Ihre **Heutige Rechnung** als $0,00 – dies bestätigt, dass die Aktivierung der kostenpflichtigen Speicherabrechnung keine Gebühren im Voraus verursacht. Gebühren fallen nur an, wenn Ihre Nutzung bei der nächsten monatlichen Rechnung 1 GB überschreitet.

:::tip
Sie können kostenpflichtigen Speicher auch über das Dialogfeld „Kapazität erreicht" aktivieren, wenn Sie versuchen, hochzuladen, während Sie zu 100 % ausgelastet sind. Das Dialogfeld wird automatisch angezeigt, wenn Sie **Speicher voll** auf der Upload-Schaltfläche auswählen.
:::

## So wird die Abrechnung berechnet

Die Abrechnung wird **einmal pro Monat** in dem Moment berechnet, in dem Ihre Branch-Rechnung von Stripe entwürfelt wird. Das System prüft die insgesamt über alle Kunden im Branch gespeicherten Bytes in diesem genauen Moment, subtrahiert die kostenlose 1-GB-Kapazität und verrechnet den Rest zu Ihrem pro-GB-Satz.

### Durchgerechnetes Beispiel

Betrachten Sie einen Branch mit dem GBP-Satz (£0,40 pro GB pro Monat):

- 0,8 GB am Abrechnungstag gespeichert – unter Kapazität, keine Gebühr
- 1,4 GB am Abrechnungstag gespeichert – 0,4 GB verrechnet mit £0,40/GB = £0,16
- 3,5 GB am Abrechnungstag gespeichert – 2,5 GB verrechnet mit £0,40/GB = £1,00

Jeder Monat wird unabhängig berechnet. Ein Branch mit 1,4 GB über drei Monate wird jeden Monat mit £0,16 verrechnet, nicht nur einmal.

### Mengenrabatt

Wenn Ihr Atlas-Konto basierend auf Ihrer aktiven Kundenanzahl für einen Mengenrabatt qualifiziert ist, gilt der Rabatt auch für Ihre Speichergebühren. Der gleiche Prozentsatz Rabatt auf Ihren Tarifplan gilt für Ihre Speicherzeile auf derselben Rechnung.

Weitere Informationen zu Mengenrabatten finden Sie unter [Abrechnungsmodelle – Übersicht](overview.md).

## Aktuelle Nutzung und Kosten anzeigen

Die Karte **Dokumentenverwaltung** in jedem Kundenprofil zeigt die aktuelle Nutzung und die Kosten für den Branch:

- **Unter 1 GB genutzt, Abrechnung aktiviert** – `8,0 MB genutzt · Branch-weit · £0,40/GB über 1 GB` (noch keine Gebühr)
- **Über 1 GB genutzt, Abrechnung aktiviert** – `1,4 GB genutzt · Branch-weit · 0,4 GB bei £0,40/GB verrechnet`

Da die Zeile Branch-weit ist, zeigt jeder Kunde im selben Branch die gleiche Zahl. Das Wechseln zwischen Kunden ändert die Nutzung nicht.

## Kostenpflichtigen Speicher deaktivieren

So deaktivieren Sie kostenpflichtigen Speicher:

1. Gehen Sie zu Ihren Branch-Abrechnungseinstellungen.
2. Suchen Sie nach der Zeile **Speicherabrechnung**.
3. Wählen Sie **Deaktivieren** aus.

Nach dem Deaktivieren wird die 1-GB-Obergrenze wieder erzwungen. Vorhandene Dateien über der Obergrenze werden beibehalten, aber Sie können keine neuen hochladen, bis Ihre Nutzung unter 1 GB fällt.

:::warning
Das Deaktivieren stoppt die Rechnung des laufenden Monats nicht. Jeder Speicher über 1 GB zum Zeitpunkt des nächsten Rechnungsentwurfs wird für diesen Monat immer noch verrechnet, ggf. zeitlich anteilig. Die Änderung wirkt sich nur auf zukünftige Monate aus.
:::

## Sätze pro Währung

Der pro-GB-Satz hängt von der Abrechnungswährung Ihres Branch ab. Die Sätze werden für jede Währung in runden Zahlen festgelegt, anstatt live von einem Basissatz umgerechnet zu werden, sodass die angezeigte Zahl die Zahl ist, die Sie zahlen.

Wenn Sie das Dialogfeld **Speicherabrechnung aktivieren** öffnen, wird der genaue Satz für die Währung Ihres Branch angezeigt. Wenn Ihre Währung noch nicht für kostenpflichtigen Speicher unterstützt wird, teilt Ihnen das Dialogfeld mit, dass Sie den Support kontaktieren sollen.

## Häufige Probleme

<details>
<summary>Der Link „Speicher hinzufügen" wird nicht auf der Karte „Dokumentenverwaltung" angezeigt</summary>

Der Link wird nur angezeigt, wenn die Nutzung 50 % der Kapazität erreicht. Unter 50 % wird kein CTA angezeigt – es gibt noch viel Platz. Wenn Sie sich dem Limit nähern, wird der Link mit zunehmend mehr Gewicht angezeigt.

</details>

<details>
<summary>Die Schaltfläche „Speicherabrechnung aktivieren" ist deaktiviert</summary>

Drei mögliche Gründe, die jeweils im Dialogfeld angezeigt werden:

1. **Kein aktives Abonnement** – Ihr Branch nutzt ein Abrechnungsmodell „Client zahlt" oder hat die Abonnementeinrichtung nicht abgeschlossen. Richten Sie zunächst die Branch-Abrechnung ein.
2. **Keine Berechtigung „Abrechnung verwalten"** – Bitten Sie einen Organisationseigentümer, die Speicherabrechnung für Sie zu aktivieren.
3. **Preisgestaltung in Ihrer Währung nicht verfügbar** – Kontaktieren Sie den Support, um zu beantragen, dass Ihre Währung hinzugefügt wird.

</details>

<details>
<summary>Ich habe kostenpflichtigen Speicher aktiviert, sehe aber keine Gebühr auf meiner nächsten Rechnung</summary>

Das ist normal. Ihnen wird nur Speicher über 1 GB in Rechnung gestellt. Wenn Ihr Branch beim Entwürfeln Ihrer Rechnung unter 1 GB liegt, wird keine Speicherzeile auf dieser Rechnung angezeigt.

Um zu sehen, ob auf Ihrer nächsten Rechnung eine Gebühr anfällt, überprüfen Sie die Karte **Dokumentenverwaltung** – die Nutzungsanzeige **Branch-weit** zeigt Ihnen, ob Sie über der Kapazität liegen.

</details>

<details>
<summary>Ich habe Dateien gelöscht und wurde dennoch dafür verrechnet</summary>

Gelöschte Dateien werden soft-gelöscht und bleiben 30 Tage lang im Speicher, bevor sie dauerhaft entfernt werden. Während dieser 30 Tage zählen sie weiterhin zur Speichernutzung und zur Abrechnung.

Kontaktieren Sie den Support, um Speicher sofort freizugeben – das dauerhafte Löschen kann manuell angefordert werden.

</details>

## Verwandte Themen

- [Dokumentenspeicher – Übersicht](overview.md) – Wie Dokumentenspeicher funktioniert und wie man ihn verwendet
- [Abrechnungsmodelle – Übersicht](../billing-models/overview.md) – Abrechnungs- und Kundenabrechnung für Ihr Accountant Portal
- [Bill-Us-Abrechnungsmodell](../billing-models/bill-us-model.md) – Wie die Branch-Abrechnung funktioniert
