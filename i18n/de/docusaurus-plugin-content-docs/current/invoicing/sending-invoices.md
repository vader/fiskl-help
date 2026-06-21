---
title: "Rechnungen versenden"
description: "Erfahren Sie, wie Sie Rechnungen in Fiskl per E-Mail oder Freigabelink versenden, CC- und BCC-Empfänger hinzufügen, automatisierte Zahlungserinnerungen einrichten und den Zustellungsstatus verfolgen."
keywords: ["send invoice", "invoice email", "share link", "invoice reminder", "overdue reminder", "CC BCC invoice", "custom email"]
sidebar_position: 3
tags:
  - Invoicing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Dieses Handbuch erklärt, wie Sie Rechnungen an Ihre Kunden per E-Mail oder über einen Freigabe-Link versenden und wie Sie automatisierte Erinnerungen für überfällige Rechnungen einrichten.

---


## Vor dem Start


Vor dem Versand bestätigen Sie bitte Folgendes:


- Sie haben die Rechnung auf Korrektheit überprüft
- Sie haben die entsprechenden Zahlungsmethoden ausgewählt


Hilfe zum Erstellen von Rechnungen finden Sie unter [Rechnungen erstellen](/invoicing/creating-invoices).


---


## Versandoptionen


Fiskl bietet zwei Möglichkeiten zum Versand einer Rechnung. Sie können eine E-Mail direkt aus der App versenden oder einen Link über jede Messaging-Plattform freigeben.


---


## Per E-Mail versenden


### E-Mail-Typen


Fiskl bietet zwei E-Mail-Formate:


**Standard-E-Mails** sind HTML-formatierte Vorlagen von Fiskl. Sie respektieren die Spracheinstellung der Rechnung, verwenden das in Templates und Brands festgelegte E-Mail-Logo und wenden die primäre Kopfzeilenfarbe aus Ihrer Rechnungsvorlage an.


**Benutzerdefinierte E-Mails** ermöglichen Ihnen, unternehmensspezifische Nachrichten für verschiedene Szenarien zu schreiben, z. B. Überfälligkeitserinnerungen, Anzahlungsanfragen und Rechnungszustellung. Richten Sie diese in [Templates und Brands](/settings/invoice-template-brands-settings) ein.


### Rechnung per E-Mail versenden


1. Öffnen Sie die Rechnung
2. Gehen Sie zum Bereich **E-Mail**
3. Wählen Sie das E-Mail-Format **Standard** oder **Benutzerdefiniert**
4. Bearbeiten Sie den E-Mail-Text bei Bedarf
5. Fügen Sie **CC**- oder **BCC**-Empfänger hinzu, falls erforderlich
6. Wählen Sie **Versenden**


### E-Mail CC und BCC


Um eine CC- oder BCC-Adresse hinzuzufügen, geben Sie die E-Mail-Adresse in das entsprechende Eingabefeld im Bereich **E-Mail** der Rechnung ein. Sie können auch eine Standard-BCC für alle ausgehenden Rechnungs-E-Mails in [Rechnungen & Angebote - Einstellungen](/settings/invoice-quotes-settings) festlegen.


:::info
Um E-Mails von Ihrer eigenen Domain zu versenden, whitelist diese in [Rechnungen & Angebote - Einstellungen](/settings/invoice-quotes-settings).
:::


---


## Per Freigabe-Link versenden


**Freigabe-Link erstellen** markiert die Rechnung als versendet und erstellt einen teilbaren Link. Sie können diesen Link über jeden Kanal versenden, z. B. WhatsApp, eine Messaging-App oder Ihren eigenen E-Mail-Client. Der Link führt Ihren Kunden zu einer sicheren Seite, auf der er die Rechnung in der Vorschau anzeigen und bezahlen kann.


### Rechnung per Freigabe-Link versenden


1. Öffnen Sie die Rechnung
2. Wählen Sie **Rechnung versenden**
3. Wählen Sie **Freigabe-Link erstellen**
4. Kopieren Sie den erstellten Link
5. Fügen Sie den Link in Ihre bevorzugte Messaging-App oder Kommunikationsmethode ein


:::tip
Messaging-Apps bieten Lesebestätigungen und Gesprächsverlauf, wodurch es einfach ist, den Versand zu verfolgen und Kunden zu folgen.
:::


---


## Automatisierte Erinnerungen einrichten


Fiskl kann automatisierte Erinnerungen für überfällige Rechnungen versenden:


1. Gehen Sie im Rechnungsformular zum Bereich **E-Mail**
2. Scrollen Sie nach unten zu **Überfälligkeitserinnerungen**
3. Wählen Sie Ihren bevorzugten Erinnerungszeitplan


---


## Best Practices


- Überprüfen Sie Rechnungsdetails vor dem Versand doppelt
- Verwenden Sie benutzerdefinierte E-Mails für einen persönlicheren Ansatz bei regelmäßigen Kunden
- Richten Sie automatisierte Erinnerungen ein, um Ihren Kapitalfluss zu verbessern
- Halten Sie E-Mail-Vorlagen professionell und konsistent mit Ihrer Marke
- Verwenden Sie die Fiskl iOS- und Android-Apps, um Push-Benachrichtigungen zum Rechnungsversandstatus zu erhalten
- Überprüfen Sie Ihre Benachrichtigungen auf Fehlermeldungen beim Versand


---


## Häufig auftretende Probleme


<details>
<summary>Kunde hat die Rechnungs-E-Mail nicht erhalten</summary>

Bitten Sie Ihren Kunden, seinen Spam- oder Junk-Ordner zu überprüfen. Überprüfen Sie, dass die E-Mail-Adresse in der Rechnung korrekt ist. Wenn das Problem weiterhin besteht, überprüfen Sie Ihre Benachrichtigungen auf eine Fehlermeldung beim Versand und versuchen Sie zu versenden.

</details>


<details>
<summary>Rechnung wird nach dem Freigeben des Links weiterhin als Entwurf angezeigt</summary>

Stellen Sie sicher, dass Sie **Freigabe-Link erstellen** aus der Option **Rechnung versenden** verwendet haben. Das direkte Kopieren der Browser-URL ändert den Rechnungsstatus nicht in „Versendet".

</details>


<details>
<summary>CC- oder BCC-Empfänger erhalten keine E-Mails</summary>

Bestätigen Sie, dass die E-Mail-Adressen im Bereich **E-Mail** korrekt eingegeben sind. Wenn Sie eine Standard-BCC in [Rechnungen & Angebote - Einstellungen](/settings/invoice-quotes-settings) festgelegt haben, überprüfen Sie, dass die Adresse noch gültig ist.

</details>


---


## Verwandte Themen


- [Rechnungen erstellen](/invoicing/creating-invoices) — Erstellen und konfigurieren Sie Rechnungen vor dem Versand
- [Rechnungsverwaltung](/invoicing/invoice-management) — Verfolgen, bearbeiten und verwalten Sie versendete Rechnungen
- [Templates und Brands - Einstellungen](/settings/invoice-template-brands-settings) — Passen Sie E-Mail-Vorlagen und Branding an
- [Rechnungen & Angebote - Einstellungen](/settings/invoice-quotes-settings) — Konfigurieren Sie Standard-BCC, Domain-Whitelisting und mehr
