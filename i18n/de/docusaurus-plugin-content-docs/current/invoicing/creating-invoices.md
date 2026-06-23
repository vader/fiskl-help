---
title: "Rechnungen erstellen"
description: "Erfahren Sie, wie Sie professionelle Rechnungen in Fiskl erstellen. Konfigurieren Sie Steuer-, Branding- und E-Mail-Einstellungen, erstellen Sie dann Rechnungen und versenden Sie diese an Ihre Kunden."
keywords: ["create invoice", "invoice", "invoicing", "line items", "tax", "payment methods", "invoice template", "billing"]
sidebar_position: 2
tags:
  - Invoicing
  - Getting Started
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erläutert, wie Sie Rechnungen in Fiskl erstellen und Kunden professionell verrechnen – von der erstmaligen Einrichtung bis zur erweiterten Konfiguration.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

---

## Vor dem Start

Wenn Sie die folgenden Einrichtungsschritte vor der Erstellung Ihrer ersten Rechnung abschließen, gewährleisten Sie Genauigkeit und einheitliches Branding. Diese Einstellungen erfordern zehn bis fünfzehn Minuten zur Konfiguration und optimieren die zukünftige Rechnungsstellung.

**Einrichtungs-Checkliste:**

- Steuereinstellungen konfigurieren (sofern Sie Steuern berechnen)
- Unternehmensangaben und Branding einrichten
- Rechnungsvorlagen anpassen
- Spracheinstellungen konfigurieren (sofern Sie mehrsprachig abrechnen)
- E-Mail-Vorlagen einrichten
- Zahlungsgateways und manuelle Zahlungsmethoden verbinden


<details>
<summary>Schritt 1: Steuereinstellungen konfigurieren</summary>

Wenn Sie Steuern auf Produkte oder Dienstleistungen berechnen, konfigurieren Sie Ihre Steuereinstellungen vor der Rechnungserstellung.

### Eine Steuerbehörde einrichten

1. Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuerbehörden**
2. Wählen Sie **Steuernummer hinzufügen**
3. Geben Sie Ihre Steuerbehördendaten ein:
   - Name der Steuerbehörde (z. B. „Mehrwertsteuer DE" oder „Umsatzsteuer AT")
   - Steuernummer
   - Steuertyp (Umsatzsteuer, Mehrwertsteuer, GST usw.)
4. Wählen Sie **Speichern**

Fiskl erstellt automatisch ein entsprechendes Sachkonto in Ihrem Kontenrahmen für diese Steuerbehörde.

### Steuersätze hinzufügen

1. Wechseln Sie in der **Steuerverwaltung** zum Bereich **Steuersätze**
2. Wählen Sie **Steuer hinzufügen**
3. Konfigurieren Sie den Steuersatz:
   - Steuerbezeichnung (z. B. „Regelsteuersatz 19 %")
   - Steuersatzprozentsatz
   - Zuordnung zu Ihrer Steuerbehörde
   - Als Umsatzsteuer oder sonstige Steuer kennzeichnen
4. Wählen Sie **Speichern**

**Beispiele für Steuersätze:**

- Regelsteuersatz: 19 %
- Ermäßigter Satz: 7 %
- Nullsatz: 0 %

### Einen Standard-Steuersatz festlegen

1. Suchen Sie Ihren primären Steuersatz unter **Steuersätze**
2. Markieren Sie ihn als Standard für Verkäufe
3. Wählen Sie **Speichern**

Dieser Satz wird automatisch auf alle Positionen angewendet, sofern Sie auf der Rechnung nichts anderes angeben.

**Weitere Informationen:** [Steuereinstellungen](/settings/tax-settings)

</details>

<details>
<summary>Schritt 2: Unternehmensangaben und Branding einrichten</summary>

Ihre Unternehmensangaben werden auf jeder Rechnung angezeigt. Konfigurieren Sie diese einmalig für einheitliches Branding in allen Dokumenten.

### Unternehmensangaben hinzufügen

1. Gehen Sie zu **Einstellungen** > **Firmenprofil**
2. Füllen Sie Ihre Unternehmensangaben aus:
   - Rechtlicher Geschätsname
   - Geschäftsadresse
   - Telefonnummer
   - E-Mail-Adresse
   - Website
   - Geschäftsregistrierungsnummer
3. Laden Sie Ihr Unternehmenslogo hoch
4. Wählen Sie Ihre Zeitzone
5. Wählen Sie **Speichern**

### Rechnungsvorlagen und Brands konfigurieren

Vorlagen steuern das Erscheinungsbild und den Inhalt Ihrer Rechnungen.

1. Gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Vorlagen und Brands**
2. Wählen Sie **Neue Vorlage hinzufügen** oder bearbeiten Sie die Standardvorlage
3. Passen Sie die Vorlage über die nachfolgenden Registerkarten an

**Registerkarte Allgemeine Einstellungen**

Im Bereich **Name & Kopfzeile** können Sie:

- Einen Vorlagennamen festlegen (nur interne Verwendung)
- Ihr Logo hochladen und seine Größe anpassen
- Ein E-Mail-Logo hochladen (Quadratformat, max. 100 KB, angezeigt bei 70 × 70 px)

Wenn Sie mehrere Brands unter einer Entität betreiben, nutzen Sie **Brand-Überschreibungen**, um einen separaten Unternehmenseigenen Namen, eine Adresse, Kontaktangaben und ein Logo festzulegen. Dies ermöglicht es Ihnen, unterschiedliche branded Rechnungen zu erstellen, ohne mehrere Konten zu verwalten.

**Registerkarte Design**

- Wählen Sie Brand-Farben und Schriftartenstile
- Vorschau von Änderungen in Echtzeit
- Wählen Sie ein Layout-Style: Classic, Modern oder Minimal
- Wählen Sie, welche Felder angezeigt werden, und passen Sie Abstände an

**Weitere Informationen:** [Rechnungsvorlagen und Brands](/settings/invoice-template-brands-settings)

</details>

<details>
<summary>Schritt 3: E-Mail-Vorlagen konfigurieren</summary>

Fiskl sendet E-Mail-Benachrichtigungen, wenn Sie Rechnungen, Zahlungserinnerungen und Mahnungen ausstellen.

### Eine E-Mail-Strategie wählen

Fiskl bietet zwei Ansätze:

**Option 1: Fiskl HTML-E-Mail-Vorlagen (empfohlen)**

Vorgefertigte HTML-E-Mails, die automatisch Ihre Rechnungssprache abgleichen. Diese enthalten dynamische Platzhalter und gelten für alle Benachrichtigungstypen: Rechnungen, Erinnerungen, Mahnungen und wiederkehrende Rechnungen.

**Option 2: Benutzerdefinierter E-Mail-Text**

Schreiben Sie Ihre eigenen E-Mail-Inhalte mit vollständiger Kontrolle über Wortlaut, Ton und Messaging pro Szenario. Dynamische Platzhalter sind weiterhin verfügbar.

### E-Mail-Vorlage einrichten

1. Gehen Sie zu **Einstellungen** > **Vorlagen und Brands**
2. Wählen Sie Ihre Vorlage
3. Wählen Sie die Registerkarte **E-Mail**
4. Wählen Sie Ihre E-Mail-Strategie:
   - **Fiskl-Vorlagen** — deaktivieren Sie den Schalter
   - **Benutzerdefinierter Text** — aktivieren Sie den Schalter

**Bei Verwendung von benutzerdefiniertem E-Mail-Text**, konfigurieren Sie jedes Szenario separat:

- E-Mail für neue Rechnung
- E-Mail für Zahlungserinnerung
- E-Mail für Mahnung
- E-Mail für wiederkehrende Rechnung

### E-Mail-Platzhalter

Platzhalter fügen Rechnungsdaten automatisch in Ihre E-Mail ein.

| Platzhalter | Beschreibung |
| --- | --- |
| `{invoice_number}` | Rechnungsnummer |
| `{invoice_date}` | Rechnungsdatum |
| `{due_date}` | Zahlungsfälligkeitsdatum |
| `{client_name}` | Kundenname |
| `{company_name}` | Ihr Unternehmensname |
| `{invoice_total}` | Gesamtbetrag |
| `{invoice_link}` | Link zur Online-Ansicht und Bezahlung der Rechnung |

**Beispiel für benutzerdefinierte E-Mail:**

```
Betreff: Rechnung {invoice_number} von {company_name}

Liebe/r {client_name},

anbei finden Sie Rechnung {invoice_number} über {invoice_total}.

Zahlungsfällig bis {due_date}.

Online ansehen und bezahlen: {invoice_link}

Beste Grüße,
{company_name}
```

</details>

<details>
<summary>Schritt 4: Spracheinstellungen konfigurieren</summary>

Wenn Sie Kunden in mehreren Sprachen verrechnen, konfigurieren Sie Ihre Spracheinstellungen vor der Rechnungserstellung.

### Eine Standardsprache festlegen

1. Gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen**
2. Wählen Sie unter **Spracheinstellungen** Ihre Primärsprache
3. Wählen Sie **Speichern**

Alle neuen Rechnungen verwenden diese Sprache standardmäßig. Sie können die Sprache für einzelne Rechnungen bei Bedarf ändern.

Fiskl unterstützt über 60 Sprachen bei Rechnungs- und Angebotsübersetzungen, E-Mail-Vorlagen, kundengestützten Zahlungsbildschirmen und Zahlungsplanschnittstellen.

### Sprachübersetzungen anpassen (Optional)

Um eine Version für einen regionalen Dialekt oder eine spezifische Terminologie zu erstellen:

1. Wählen Sie unter **Spracheinstellungen** die Option **Sprache klonen**
2. Wählen Sie die anzupassende Ausgangssprache
3. Bearbeiten Sie die Übersetzungen: Terminologie, regionale Formulierungen oder Feldbezeichnungen
4. Wählen Sie **Speichern**

Ihre benutzerdefinierte Sprache wird in der Sprachauswahl beim Erstellen von Rechnungen angezeigt.

**Weitere Informationen:** [Rechnungs- und Angebotseinstellungen](/settings/invoice-quotes-settings)

</details>

<details>
<summary>Schritt 5: Zahlungsgateways und manuelle Zahlungsmethoden verbinden</summary>

Die Verbindung mit einem Zahlungsgateway ermöglicht es Kunden, Rechnungen direkt von der Rechnungsseite online zu bezahlen.

1. Gehen Sie zu **Integrationen**
2. Wählen Sie die Schaltfläche **Verbinden** für Ihr bevorzugtes Zahlungsgateway
3. Folgen Sie den Anweisungen auf dem Bildschirm, um die Verbindung abzuschließen

Unterstützte Gateways sind Stripe, GoCardless, PayPal, Google Pay, Apple Pay, iDEAL und Bancontact.

Sie können auch manuelle Zahlungsmethoden (z. B. Banküberweisung oder Scheckdaten) unter **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Manuelle Zahlungsmethoden** hinzufügen.

Um alle aktiven Zahlungsgateways automatisch auf jede neue Rechnung anzuwenden, schalten Sie **Zahlungsgateways automatisch auswählen** unter **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Manuelle Zahlungsmethoden** ein.

**Weitere Informationen:** [Zahlungsgateways](/integrations/payments/overview) | [Rechnungs- und Angebotseinstellungen](/settings/invoice-quotes-settings)

</details>

---

## Rechnung erstellen

### Neue Rechnung starten

1. Wählen Sie in der linken Navigation **Rechnungen**
2. Wählen Sie **Neue Rechnung**

### Kundenangaben hinzufügen

Die Rechnung ruft die folgenden Felder aus dem Kundenprofil automatisch ab:

- Kundenname und -adresse
- Kundenemail (einschließlich CC- und BCC-Adressen)
- Steuernummer / Umsatzsteuer-Identifikationsnummer (sofern im Kundenprofil festgelegt)
- Standardwährung und Stundensatz

**Wenn der Kunde bereits existiert:**

1. Wählen Sie den Kunden aus der Dropdown-Liste **Kunde**
2. Seine Details werden automatisch ausgefüllt

**Wenn dies ein neuer Kunde ist:**

1. Wählen Sie **Neuen Kunden hinzufügen**
2. Geben Sie die Kundenangaben ein: Name, E-Mail-Adresse, Rechnungsadresse und Telefonnummer (optional)
3. Wählen Sie **Speichern**

:::info
Fiskl speichert den Kunden automatisch unter **Kunden** in der linken Navigation.
:::

### Währung wählen

Die Rechnungswährung ist standardmäßig auf Ihre Basiswährung oder auf die Standardwährung des Kunden eingestellt, wenn diese in seinem Profil festgelegt ist. Um die Währung für diese Rechnung zu ändern, wählen Sie sie aus der Währungs-Dropdown-Liste im Bereich **Grundangaben**.

### Sprache wählen

Ihre Standardsprache ist automatisch ausgewählt. Um eine andere Sprache für diese Rechnung zu verwenden, wählen Sie sie aus der Sprach-Dropdown-Liste.

Die von Ihnen gewählte Sprache beeinflusst die Rechnung selbst, Standardemail-Vorlagen und alle kundengestützten Bildschirme.

### Vorlage wählen

Die Standardvorlage wird automatisch angewendet. Wenn Sie mehrere Vorlagen oder Brands verwenden, wählen Sie die entsprechende aus der Dropdown-Liste.

### Rechnungsdetails festlegen

**Rechnungsnummer**

Rechnungsnummern beginnen bei `REC-0001` und werden automatisch erhöht. Um ein anderes Format zu verwenden, bearbeiten Sie die Nummer auf jeder neuen Rechnung – Fiskl verwendet dieses Format für alle nachfolgenden Rechnungen.

Es gelten zwei Einschränkungen:

- Die automatische Erhöhung funktioniert nur, wenn die Nummer mit einer Ziffer endet
- Datumsbasierte Formate (z. B. `2025-01-0001`) erfordern manuelle Aktualisierungen bei jeder Periodeänderung

**Rechnungsdaten**

| Feld | Zweck | Standard |
| --- | --- | --- |
| Rechnungsdatum | Das Datum der Rechnungsausstellung | Heute |
| Fälligkeitsdatum | Die Zahlungsfrist | Sieben Tage nach Rechnungsdatum |
| Verkaufsdatum | Optional – dokumentiert, wann der Verkauf stattfand | Leer |

Um den Standardzeitraum für das Fälligkeitsdatum zu ändern, gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen**.

### Benutzerdefinierte Felder hinzufügen

Um eine Bestellnummer oder Referenznummer hinzuzufügen, wählen Sie **Benutzerdefinierte Felder** > **Plus** > **Feld hinzufügen**. Geben Sie die Bezeichnung (z. B. „Bestellnummer") und den Wert ein.

---

## Positionen hinzufügen

Positionen sind die abrechenbaren Zeilen auf Ihrer Rechnung. Fiskl unterstützt fünf Typen:

| Typ | Beschreibung |
| --- | --- |
| **Produkt** | Ein physisches oder digitales Produkt. Produkte sind wiederverwendbare Vorlagen. |
| **Dienstleistung** | Eine von Ihnen erbrachte Dienstleistung. Dienstleistungen sind wiederverwendbare Vorlagen. |
| **Ausgabe** | Eine Geschäftsausgabe, die Sie dem Kunden berechnen. |
| **Kilometerstand** | Fahrstrecke, die nach Kilometer- oder Meilenatz berechnet wird. |
| **Zeit** | Abrechenbare Stunden, die gegen die Rechnung erfasst werden. |

Sie können Positionen direkt auf der Rechnung erstellen oder sie im Voraus unter **Produkte & Dienstleistungen** in der linken Navigation einrichten.

### Produkt oder Dienstleistung hinzufügen

1. Wählen Sie **Plus** im Bereich „Position"
2. Wählen Sie **Neu hinzufügen** > **Produkt oder Dienstleistung**
3. Geben Sie die Positionsdetails ein:
   - Positionsname und Beschreibung
   - Menge und Einzelpreis
   - Steuersatz (Standard: Ihr primärer Steuersatz)
4. Der Betrag wird automatisch berechnet

Um mehr Details hinzuzufügen, wählen Sie **Weitere Details**:

- Ändern Sie das Standardkonto **Ertragskonto** aus der Dropdown-Liste
- Wählen Sie eine andere Währung, um eine mehrsprachige Position zu erstellen
- Passen Sie den Wechselkurs an und zeigen Sie die konvertierte Gesamtsumme an

### Ausgabe hinzufügen

1. Wählen Sie **Plus** im Bereich „Position"
2. Wählen Sie **Neu hinzufügen** > **Ausgabe**
3. Geben Sie die Ausgabedetails ein:
   - Wählen Sie einen Lieferanten aus der Dropdown-Liste oder erstellen Sie einen, indem Sie den Lieferantennamen eingeben und **+ Erstellen** wählen
   - Beschreibung und Preis
   - Steuersatz (Standard: Ihr primärer Steuersatz)
4. Der Betrag wird automatisch berechnet

Um mehr Details hinzuzufügen, wählen Sie **Weitere Details**:

- Ändern Sie das Ausgabenkonto oder die Ausgabenkategorie aus den Dropdown-Listen
- Wählen Sie eine andere Währung
- Fügen Sie ggf. eine Belegnummer hinzu

### Zeit hinzufügen

1. Wählen Sie **Plus** im Bereich „Position"
2. Wählen Sie **Neu hinzufügen** > **Zeit**
3. Geben Sie die Zeitdetails ein:
   - Name und Beschreibung
   - Menge (Gesamtzeit)
   - Satz (Standard: Ihre gespeicherte Einstellung oder der Kundenstandardsatz, falls festgelegt)
   - Steuersatz (Standard: Ihr primärer Steuersatz)
4. Der Betrag wird automatisch berechnet

Um mehr Details hinzuzufügen, wählen Sie **Weitere Details**:

- Ändern Sie das Ertragskonto aus der Dropdown-Liste
- Wählen Sie eine andere Währung
- Schalten Sie **Start – End-Zeit** ein, um bestimmte Start- und Endzeiten einzugeben – die Dauer wird automatisch berechnet

### Kilometerstand hinzufügen

1. Wählen Sie **Plus** im Bereich „Position"
2. Wählen Sie **Neu hinzufügen** > **Kilometerstand**
3. Geben Sie die Kilometerstanddetails ein:
   - Name und Beschreibung
   - Menge (Gesamtstrecke in Meilen oder Kilometern)
   - Satz (Standard: Ihre gespeicherte Einstellung)
   - Steuersatz (Standard: Ihr primärer Steuersatz)
4. Die Gesamtsumme wird automatisch berechnet

Um mehr Details hinzuzufügen, wählen Sie **Weitere Details** und wählen Sie eine Distanzeingabemethode:

- **Direkt** – Gesamtstrecke bereits eingegeben (Standard)
- **Kilometer-/Meilenzähler** – Geben Sie Start- und Endstände ein; schalten Sie diese für eine Hin- und Rückfahrt ein
- **Karten** – Geben Sie Start- und Endadressen ein oder nutzen Sie **Aktuellen Standort**; ziehen Sie die Routenlinie, um den Pfad anzupassen

Schalten Sie **Erstattung** ein, um den Kilometerstand als erstattungsfähig zu kennzeichnen.

### Aus Ihrem Produkte & Dienstleistungen-Katalog auswählen

Um vorhandene Elemente hinzuzufügen, anstatt neue zu erstellen:

1. Wählen Sie **Plus** im Bereich „Position"
2. Wählen Sie **Vorhandene auswählen**
3. Wählen Sie Elemente aus Ihrem Produkte & Dienstleistungen-Katalog oder gespeicherte Kundenelemente

Sie können die Liste nach Typ und Währung filtern.

---

## Steuer anwenden

Steuern werden auf Positionsebene angewendet. Fiskl unterstützt Einzelsteuern, Mehrfachsteuern und zusammengesetzte Steuern pro Position.

Schalten Sie die Option **ohne** auf einer Position ein, um zwischen Steuern ohne und mit Steuern im Preis enthalten zu wechseln.

Wenn Ihre Steuernummer auf der Rechnung nicht angezeigt wird, überprüfen Sie beide Einstellungen:

1. Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuersätze** und bestätigen Sie, dass das Kontrollkästchen **Steuernummer auf Rechnungen anzeigen** aktiviert ist
2. Gehen Sie zu **Einstellungen** > **Vorlagen & Brands** und bestätigen Sie, dass die Option **Steuernummer ausblenden** nicht aktiviert ist

Ihre Steuernummer wird automatisch angezeigt, wenn mindestens eine Position Steuer enthält.

---

## Rabatte und Anzahlungen anwenden (Optional)

Wenden Sie Rabatte oder Anzahlungen auf Rechnungsebene an, nicht auf Positionsebene.

1. Wählen Sie **Bearbeiten** neben **Zahlungsbedingungen**
2. Schalten Sie die Optionen **Rabatt** und/oder **Anzahlung** ein
3. Geben Sie einen festen Betrag ein (z. B. `100` für einen Rabatt von 100 €) oder einen Prozentsatz (z. B. `15 %`)
4. Die Gesamtsumme wird automatisch aktualisiert

Anzahlungen werden als separate Zeile in der Rechnungssumme angezeigt.

---

## Zahlungspläne einrichten (Optional)

Teilen Sie eine einzelne Rechnung mit Zahlungsplänen in zwei bis zwölf Raten auf. Jede Rate kann ein fester Betrag oder ein Prozentsatz des Gesamtbetrags sein, und Fiskl verfolgt den Zahlungsstatus jeder Rate separat.

:::tip
Nutzen Sie Zahlungspläne für kurzfristige Ratenzahlungen. Für langfristige oder unbegrenzt wiederkehrende Abrechnungen verwenden Sie stattdessen [Wiederkehrende Rechnungen](/invoicing/recurring-invoice-management).
:::

---

## Zahlungsmethoden wählen

Wenn Sie ein Zahlungsgateway verbunden haben, wird es unter **Zahlungsmethoden** angezeigt. Schalten Sie jedes Gateway ein, um es Ihrem Kunden auf der Rechnung und der Zahlungsseite zur Verfügung zu stellen. Fiskl aktualisiert den Rechnungsstatus automatisch, wenn Ihr Kunde bezahlt.

Unterstützte Gateways: Stripe, Bancontact, iDEAL, GoCardless, Apple Pay, Google Pay und PayPal.

:::tip
Um verfügbare Zahlungsgateways automatisch auf neuen Rechnungen auszuwählen, gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Manuelle Zahlungsmethoden** und schalten Sie **Zahlungsgateways automatisch auswählen** ein.
:::

Manuelle Zahlungsmethoden werden unter **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Manuelle Zahlungsmethoden** gespeichert.

---

## Speichern und Versenden

Wählen Sie **Speichern**, um Ihre Rechnung als Entwurf zu speichern.

Um die Rechnung zu versenden, siehe [Rechnungen versenden](/invoicing/sending-invoices).

---

## Häufige Probleme

<details>
<summary>Meine Steuernummer wird auf der Rechnung nicht angezeigt</summary>

Zwei Einstellungen steuern die Sichtbarkeit der Steuernummer – beide müssen korrekt konfiguriert sein.

1. Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuersätze** und bestätigen Sie, dass das Kontrollkästchen **Steuernummer auf Rechnungen anzeigen** aktiviert ist
2. Gehen Sie zu **Einstellungen** > **Vorlagen & Brands** und bestätigen Sie, dass die Option **Steuernummer ausblenden** nicht aktiviert ist

Ihre Steuernummer wird nur angezeigt, wenn mindestens eine Position auf der Rechnung Steuer enthält.

</details>

<details>
<summary>Die Rechnungswährung ist falsch</summary>

Die Währung ist standardmäßig auf Ihre Basiswährung oder die Standardwährung des Kunden eingestellt, falls festgelegt. Um sie für eine einzelne Rechnung zu ändern, wählen Sie die Währung aus der Dropdown-Liste im Bereich **Grundangaben**.

Um die Standardwährung des Kunden zu aktualisieren, gehen Sie zu **Kunden**, wählen Sie den Kunden und aktualisieren Sie seine Währungseinstellung.

</details>

<details>
<summary>Mein Kunde kann nicht online bezahlen</summary>

Für die Online-Zahlung ist ein aktives Zahlungsgateway erforderlich. Gehen Sie zu **Integrationen** und bestätigen Sie, dass Stripe oder ein anderes Gateway verbunden und aktiv ist. Überprüfen Sie auch, dass der Zahlungsgateway-Schalter innerhalb der Rechnung selbst eingeschaltet ist.

Wenn keine Zahlungsmethode eingerichtet ist, sieht Ihr Kunde die Rechnung, hat aber keine Zahlungsschaltfläche.

</details>

<details>
<summary>Die Rechnungsnummer ist außer Reihe</summary>

Wenn Sie eine Rechnungsnummer manuell bearbeitet haben, verwendet Fiskl diese Nummer als neue Grundlage für die automatische Erhöhung. Erstellen Sie eine neue Rechnung und geben Sie manuell die korrekte Nummer ein. Alle nachfolgenden Rechnungen werden von diesem Punkt an erhöht.

</details>

<details>
<summary>Vorlagenänderungen beeinflussen bereits versendete Rechnungen</summary>

Vorlagenänderungen gelten für alle Rechnungen, die diese Vorlage verwenden. Wenn Sie die Gestaltung ändern möchten, ohne bereits vorhandene Rechnungen zu beeinflussen, erstellen Sie eine neue Vorlage unter **Einstellungen** > **Vorlagen & Brands** und wenden Sie diese nur auf neue Rechnungen an.

</details>

---

## Verwandte Themen

- [Rechnungsverwaltung](/invoicing/invoice-management) – Bearbeiten, duplizieren, stornieren und archivieren Sie Rechnungen
- [Rechnungen versenden](/invoicing/sending-invoices) – E-Mail-Optionen, Erinnerungen und Kundensicht
- [Wiederkehrende Rechnungen](/invoicing/recurring-invoice-management) – Automatisieren Sie regelmäßige Abrechnungen
- [Zahlungspläne für Rechnungen](/invoicing/invoice-payment-schedules) – Teilen Sie Rechnungen in Raten auf
- [Steuereinstellungen](/settings/tax-settings) – Konfigurieren Sie Steuersätze und Anzeigeoptionen
- [Kunden verwalten](/clients-vendors/clients) – Richten Sie Kundenprofile und Standards ein
- [Zahlungsgateways](/integrations/payments/overview) – Verbinden Sie Stripe und andere Zahlungsmethoden
- [Produkte & Dienstleistungen](/products-services/overview) – Erstellen Sie einen wiederverwendbaren Katalog von Elementen
