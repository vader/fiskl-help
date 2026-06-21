---
title: "Dokumentenspeicher"
description: "Speichern Sie Kundenbelege, Verträge und unterzeichnete Formulare mit dem Kunden, dem sie zugehören, in Ihrer Atlas-Niederlassung – virengeprüft und zugriffskontrolliert."
keywords: ["document storage", "client documents", "file management", "accountant portal", "permissions", "virus scanning"]
sidebar_position: 1
tags:
  - Accountant Portal
  - Document Management
  - Permissions
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# Dokumentspeicherung

Dokumentspeicherung bietet jeder Niederlassung in Atlas einen sicheren Ort für Kundendokumente — Belege, Verträge, unterzeichnete Formulare, Kontoauszüge — neben dem Kunden, dem sie angehören. Jede Datei wird virengeprüft, der Zugriff wird durch Berechtigungen kontrolliert, und 1 GB Speicher ist kostenlos pro Niederlassung enthalten.

## Voraussetzungen

Sie benötigen einen Administrator, um Dokumentspeicherung auf der Niederlassung zu aktivieren. Die Funktion ist standardmäßig deaktiviert — nach der Aktivierung bleibt sie für diese Niederlassung aktiviert und kann nicht vor Teammitgliedern mit den richtigen Berechtigungen verborgen werden.

## Dokumentspeicherung aktivieren

Dokumentspeicherung wird pro Niederlassung aktiviert. Jede Niederlassung in Atlas verwaltet ihre eigenen Dateien separat.

So aktivieren Sie Dokumentspeicherung:

1. Gehen Sie zum Profil eines beliebigen Kunden in der Niederlassung, auf der Sie den Speicher aktivieren möchten.
2. Suchen Sie die Karte **Dokumentenverwaltung**.
3. Wählen Sie **Kostenlos aktivieren**.

Die Funktion wird sofort eingeschaltet. Sie sehen den Dokumentenbrowser unmittelbar nach der Aktivierung.

:::info
Dokumentspeicherung kann nicht von Teammitgliedern aktiviert werden, die die Organisation nicht besitzen. Wenn Sie kein Inhaber sind, bitten Sie den Organisationsinhaber, es für die Niederlassung zu aktivieren.
:::

## Mit Dokumenten arbeiten

Nach der Aktivierung des Speichers hat jeder Kunde in der Niederlassung einen eigenen Dokumentbereich. Der Dokumentenbrowser unterstützt Ordner, Mehrfachdatei-Upload, Suche, Umbenennung, Verschiebung und Soft-Delete.

### Dateien hochladen

So laden Sie eine oder mehrere Dateien hoch:

1. Öffnen Sie den Bereich **Dokumentenverwaltung** des Kunden.
2. Wählen Sie **Hochladen**.
3. Wählen Sie eine oder mehrere Dateien von Ihrem Computer.

Dateien werden direkt in sicheren Speicher hochgeladen — sie werden nicht über Ihren Browser-Cache übertragen. Jede Datei wird automatisch virengeprüft, und ein Scansymbol wird neben der Datei angezeigt, während der Scan läuft.

### Ordner zur Organisation verwenden

Ordner ermöglichen es Ihnen, Dokumente im Speicher eines Kunden zu gruppieren. Sie sind nur visuell — das Verschieben oder Umbenennen eines Ordners ist sofort und verschiebt niemals die tatsächlichen Datei-Bytes.

So erstellen Sie einen Ordner:

1. Öffnen Sie den Bereich **Dokumentenverwaltung** des Kunden.
2. Wählen Sie **Neuer Ordner**.
3. Geben Sie einen Ordnernamen ein und wählen Sie **Erstellen**.

Sie können Dokumente und Unterordner zwischen Ordnern verschieben, indem Sie auf ein beliebiges Element **Verschieben** auswählen.

### Vorschau und Download

Zwei Möglichkeiten, ein Dokument anzuzeigen:

- **Vorschau** — öffnet die Datei inline in Ihrem Browser. Nur für PDFs und Bilder verfügbar.
- **Download** — speichert die Datei auf Ihrem Computer.

Beide Optionen überprüfen den Virenscan unmittelbar vor dem Servieren der Datei erneut. Ein Dokument, das den Scan nicht besteht, kann nicht heruntergeladen oder in der Vorschau angezeigt werden, auch wenn es in der Liste angezeigt wird.

### Suchen

Verwenden Sie das Suchfeld in der Symbolleiste, um Dokumente über alle Ordner für den aktuellen Kunden zu finden. Die Suche entspricht dem Dokumentnamen und ist auf jeweils einen Kunden beschränkt.

### Löschen

Das Löschen eines Dokuments ist ein Soft-Delete — die Datei wird aus Auflistungen ausgeblendet, die Bytes bleiben aber 90 Tage lang im Speicher erhalten. Nach 90 Tagen wird die Datei dauerhaft gelöscht und der Speicher freigegeben.

:::warning
Soft-gelöschte Dokumente geben die Speicherquote nicht frei. Wenn sich Ihre Niederlassung dem 1-GB-Limit nähert, löscht das Löschen von Dateien jetzt nicht sofort die Nutzung. Der Speicher wird nur nach dem 90-tägigen dauerhaften Löschvorgang freigegeben.
:::

## Berechtigungen

Dokumentspeicherung verwendet drei separate Berechtigungen, die jeweils eine andere Zugriffsstufe steuern. Berechtigungen stapeln sich — das Haben von **DOCUMENTS_DELETE** gewährt keinen Zugriff auf Ansicht oder Upload; Sie benötigen jede erforderliche Berechtigung.

### Dokumente anzeigen (DOCUMENTS_VIEW)

Ermöglicht einem Teammitglied:

- Die Dokumentliste und Ordner für jeden Kunden in der Niederlassung anzuzeigen
- Dokumentmetadaten zu lesen (Größe, Upload-Datum, Scanstatus)
- Dateien herunterzuladen
- PDFs und Bilder in der Vorschau anzuzeigen

Dies ist die niedrigste Zugriffsstufe. Ohne diese Berechtigung sehen Teammitglieder die Karte **Dokumentenverwaltung** auf Kundenprofilen nicht.

### Dokumente hochladen (DOCUMENTS_UPLOAD)

Ermöglicht einem Teammitglied:

- Neue Dokumente hochzuladen
- Ordner zu erstellen
- Dokumente und Ordner umzubenennen
- Dokumente zwischen Ordnern zu verschieben

Diese Berechtigung impliziert auch die Anzeigeberechtigung für Dokumente, die das Teammitglied hochlädt oder verschiebt. Für vollständigen Lesezugriff auf Uploads anderer Teammitglieder ist **DOCUMENTS_VIEW** ebenfalls erforderlich.

### Dokumente löschen (DOCUMENTS_DELETE)

Ermöglicht einem Teammitglied:

- Dokumente zu soft-löschen
- Ordner zu soft-löschen (und die darin enthaltenen Dokumente)

Gelöschte Elemente können nicht über die Benutzeroberfläche wiederhergestellt werden — Sie müssen sich an den Support wenden, um sie wiederherzustellen.

### Empfohlene Berechtigungssätze

Häufige Muster für Ihr Team:

- **Betrachter** (z. B. Analysten, die Dokumente überprüfen): Nur DOCUMENTS_VIEW
- **Buchhalter** (regelmäßige Dokumentbearbeiter): DOCUMENTS_VIEW + DOCUMENTS_UPLOAD
- **Leitende Mitarbeiter** (volle Dokumentenkontrolle): DOCUMENTS_VIEW + DOCUMENTS_UPLOAD + DOCUMENTS_DELETE

Weisen Sie diese auf dem Profil jedes Teammitglieds in **Team** > **Teammitglieder verwalten** zu.

## Speicherquote

Jede Niederlassung beginnt mit 1 GB enthaltenenem Speicher, der über jeden Kunden in dieser Niederlassung verteilt ist. Die aktuelle Nutzung wird auf der Karte **Dokumentenverwaltung** jedes Kunden angezeigt — z. B. **8,0 MB von 1,0 GB verwendet · niederlassungsweit**.

Wenn die Nutzung 50 % erreicht, wird neben der Nutzungsanzeige ein Link **Speicher hinzufügen** angezeigt. Bei 85 % Auslastung wird die Anzeige bernsteinfarben und der Link liest **Limit nähert sich — Speicher hinzufügen**. Bei 100 % werden Uploads blockiert, bis Sie entweder Dateien löschen oder bezahlten Speicher aktivieren.

Weitere Informationen darüber, was geschieht, wenn Sie das Limit erreichen, und wie bezahlter Speicher funktioniert, finden Sie unter [Speicherabrechnung](document-billing.md).

## Häufige Probleme

<details>
<summary>Ich kann das Profil eines Kunden sehen, aber die Karte Dokumentenverwaltung fehlt</summary>

Zwei mögliche Gründe:

1. Der Niederlassungsinhaber hat Dokumentspeicherung auf dieser Niederlassung noch nicht aktiviert. Bitten Sie einen Organisationsinhaber, es einzuschalten.
2. Sie haben nicht die Berechtigung **DOCUMENTS_VIEW**. Bitten Sie Ihren Organisationsinhaber, sie zu gewähren.

</details>

<details>
<summary>Ein hochgeladenes Dokument zeigt den Status „Unter Quarantäne"</summary>

Der Virenscanner hat eine Bedrohung in der Datei gefunden. Das Dokument kann nicht heruntergeladen oder in der Vorschau angezeigt werden und wird automatisch vom Servieren blockiert. Unter Quarantäne gestellte Dateien zählen nicht zu Ihrer Speicherquote.

Wenn Sie glauben, dass dies ein falsch positives Ergebnis ist, kontaktieren Sie den Support mit dem Dokumentnamen und der neben dem Status angezeigten Bedrohungskennung.

</details>

<details>
<summary>Mein Upload schlägt mit „Speicher voll" fehl</summary>

Die Niederlassung hat ihre volle 1-GB-Zuteilung verwendet. Sie haben drei Optionen:

1. Löschen Sie Dokumente, die Sie nicht mehr benötigen (Hinweis: Dies gibt den Speicher nicht sofort frei — siehe obige Warnung).
2. Warten Sie, bis soft-gelöschte Dateien nach 30 Tagen dauerhaft gelöscht werden.
3. Aktivieren Sie bezahlten Speicher, um über die 1-GB-Zuteilung hinaus hochzuladen. Siehe [Speicherabrechnung](document-billing.md).

</details>

<details>
<summary>Ich habe einen Ordner gelöscht, aber die darin befindlichen Dateien werden immer noch irgendwo aufgelistet</summary>

Ordner dienen nur der Organisation. Wenn Sie einen Ordner löschen, werden die darin befindlichen Dateien auch soft-gelöscht, bleiben aber in jeder ordnerübergreifenden Suche sichtbar, bis der 30-tägige Aufbewahrungszeitraum endet.

</details>

## Verwandte Themen

- [Speicherabrechnung](document-billing.md) — Aktivieren Sie bezahlten Speicher, um über die 1-GB-Kostenlos-Zuteilung hinaus hochzuladen
- [Rollen und Berechtigungen](../team-collaboration/roles-permissions.md) — Verwalten Sie, was Teammitglieder im Accountant Portal tun können
- [Niederlassungsverwaltung](../team-collaboration/branch-management.md) — Konfigurieren Sie Niederlassungen in Ihrem Accountant Portal
