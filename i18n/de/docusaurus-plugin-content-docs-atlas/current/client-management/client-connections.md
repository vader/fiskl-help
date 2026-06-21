---
title: "Kundenverbindungen"
description: "Zeigen Sie Ihre Kundenliste an, greifen Sie auf Fiskl-Konten von Kunden zu, verwalten Sie Steuerberater-Zuweisungen und verfolgen Sie den Zugriffsverlauf in Atlas."
keywords: ["client connections", "manage clients", "access fiskl", "accountant assignment", "client notes", "revocation history", "atlas"]
sidebar_position: 4
tags:
  - Atlas
  - Client Management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erläutert, wie Sie Ihre verbundenen Kunden in Atlas anzeigen und verwalten, einschließlich des Zugriffs auf ihre Fiskl-Konten, der Zuweisung von Buchhältern und der Nachverfolgung des Zugriffsverlaufs.


## Die Kundenliste

Die Kundenliste zeigt alle verbundenen Kunden für den derzeit ausgewählten Mandanten. Sie finden sie unter **Kundenverwaltung** > **Kunden** in der linken Seitenleiste.

Um Kunden für einen anderen Mandanten anzuzeigen, verwenden Sie den Mandantenwähler oben links im Menü. Die Kundenliste wird automatisch aktualisiert, wenn Sie zwischen Mandanten wechseln.

Jede Zeile in der Kundenliste zeigt den Firmennamen des Kunden und wichtige Details. Auf der rechten Seite jeder Zeile erscheint eine primäre Aktionsschaltfläche — entweder **Fiskl öffnen** oder **Zugriff einrichten**, je nach Ihrer Beziehung zu diesem Kunden.

## Zugriff auf das Fiskl-Konto eines Kunden

Wenn Sie als Buchhalter dem Konto des Kunden zugewiesen sind, zeigt die primäre Schaltfläche **Fiskl öffnen**. Wählen Sie diese Schaltfläche aus, um sich direkt beim Fiskl-Konto des Kunden anzumelden und mit der Arbeit zu beginnen.

Wenn Sie noch nicht zugewiesen sind, aber über die Berechtigung verfügen, sich selbst hinzuzufügen, zeigt die Schaltfläche **Zugriff einrichten**. Wählen Sie diese aus, um sich selbst als Buchhalter dem Konto des Kunden zuzuweisen. Nach der Zuweisung ändert sich die Schaltfläche zu **Fiskl öffnen**.

## Verwalten eines Kunden

Wählen Sie eine Kundenzeile aus, um die Kundenverwaltungsseite zu öffnen. Von hier aus können Sie Buchhalter-Zuweisungen verwalten, Berechtigungen aktualisieren, Notizen hinzufügen und den Zugriffsverlauf anzeigen.

### Buchhalter-Zuweisungen

Sie können Buchhalter dem Fiskl-Konto des Kunden hinzufügen oder entfernen. Jeder zugewiesene Buchhalter erhält Zugriff auf die Daten des Kunden und kann in seinem Fiskl-Konto arbeiten.

Wenn Sie einen Buchhalter zuweisen, legen Sie auch seine Berechtigungsstufe dem Fiskl-Konto des Kunden fest. Derzeit erhalten zugewiesene Buchhalter Administratorebenen-Zugriff. Weitere differenziertere Berechtigungsoptionen sind für eine zukünftige Version geplant.

So fügen Sie einen Buchhalter zu einem Kunden hinzu:

1. Wählen Sie die Kundenzeile aus, um die Kundenverwaltung zu öffnen
2. Wählen Sie **Buchhalter hinzufügen**
3. Wählen Sie das Teammitglied aus Ihrem Mandanten
4. Bestätigen Sie die Zuweisung

So entfernen Sie einen Buchhalter von einem Kunden:

1. Wählen Sie die Kundenzeile aus, um die Kundenverwaltung zu öffnen
2. Finden Sie den Buchhalter in der Zuweisungsliste
3. Wählen Sie **Entfernen**
4. Bestätigen Sie die Entfernung

Der Buchhalter verliert sofort Zugriff auf das Fiskl-Konto des Kunden.

### Kundennotizen

Sie können Notizen zu jedem Kundendatensatz hinzufügen. Notizen sind unveränderlich — jede Bearbeitung erstellt eine neue Notiz, anstatt die vorherige zu überschreiben. Der vollständige Verlauf aller Notizen wird beibehalten, was Ihrem Team einen vollständigen Audit-Trail von Entscheidungen und Kommunikationen im Zusammenhang mit dem Kunden bietet.

So fügen Sie eine Notiz hinzu:

1. Wählen Sie die Kundenzeile aus, um die Kundenverwaltung zu öffnen
2. Gehen Sie zum Abschnitt **Notizen**
3. Geben Sie Ihre Notiz ein
4. Wählen Sie **Speichern**

Alle Teammitglieder mit Zugriff auf den Kunden können den Notizverlauf anzeigen.

### Widerrufsverlauf

Der Widerrufsverlauf zeigt jeden Buchhalter, der vom Konto des Kunden entfernt wurde. Dies bietet einen permanenten Datensatz aller Personen, die jemals Zugriff auf den Kunden hatten, und unterstützt Compliance- und Audit-Anforderungen.

Sie finden den Widerrufsverlauf auf der Kundenverwaltungsseite. Jeder Eintrag zeigt den Namen des Buchhalters, das Datum seiner Entfernung und wer die Entfernung durchgeführt hat.

## Häufige Probleme

<details>
<summary>Sie sehen „Zugriff einrichten", aber erwarteten „Fiskl öffnen"</summary>

Sie sind derzeit nicht als Buchhalter dem Konto dieses Kunden zugewiesen. Wählen Sie **Zugriff einrichten** aus, um sich selbst zuzuweisen. Wenn die Schaltfläche nicht angezeigt wird, verfügen Sie möglicherweise nicht über die erforderlichen Berechtigungen — wenden Sie sich an Ihren Mandanten-Owner oder Super Admin.

</details>

<details>
<summary>Ein Teammitglied kann einen Kunden in der Liste nicht sehen</summary>

Die Kundenliste zeigt Kunden für den derzeit ausgewählten Mandanten. Vergewissern Sie sich, dass das Teammitglied den richtigen Mandanten mit dem Mandantenwähler anzeigt. Bestätigen Sie auch, dass das Teammitglied die entsprechende Mandanten-Rolle und Berechtigungen für die Kundenansicht hat.

</details>

## Verwandte Themen

- [Kunden hinzufügen](adding-clients.md) — Kunden mit Charge Us- oder Client Pays-Modellen hinzufügen
- [Kundeneinladungen akzeptieren](accepting-client-invitations.md) — Eingehende Kundeneinladungen überprüfen und beantworten
- [Verwaltung von Teammitgliedern](../team-collaboration/managing-team-members.md) — Buchhalter über Mandanten hinweg einladen und verwalten
