---
title: "Angebote erstellen"
description: "Erfahren Sie, wie Sie professionelle Angebote in Fiskl erstellen. Konfigurieren Sie Steuer-, Branding- und E-Mail-Einstellungen und erstellen Sie dann Angebote, um diese an Ihre Kunden zu versenden."
keywords: ["create quote", "quote", "quoting", "estimate", "proposal", "line items", "quote template", "convert quote to invoice"]
sidebar_position: 3
tags:
  - Invoicing
  - Quotes
toc_min_heading_level: 2
toc_max_heading_level: 3
---

## Bevor Sie Beginnen

:::note
Die Einstellungen für Angebote und Rechnungen verwenden denselben Konfigurationsbereich. Falls Sie bereits die Rechnungsstellung eingerichtet haben, verwenden Ihre Angebote automatisch dieselben Vorlagen, Steuersätze und E-Mail-Einstellungen.
:::

Wenn Sie die folgenden Einrichtungsschritte vor der Erstellung Ihres ersten Angebots abschließen, stellen Sie Genauigkeit und konsistentes Branding sicher. Diese Einstellungen erfordern zehn bis fünfzehn Minuten zum Konfigurieren und optimieren alle zukünftigen Angebote.

**Einrichtungs-Checkliste:**

- Steueinstellungen konfigurieren (falls Ihre Angebote Steuern enthalten)
- Unternehmensangaben und Branding einrichten
- Angebotsvorlagen anpassen
- Spracheinstellungen konfigurieren (falls Sie Kunden in mehreren Sprachen Angebote machen)
- E-Mail-Vorlagen einrichten

---

## Schritt 1: Steueinstellungen Konfigurieren

<details>
<summary>Schritt 1: Steueinstellungen Konfigurieren</summary>

Falls Sie Steuern auf Produkte oder Dienstleistungen berechnen, konfigurieren Sie Ihre Steueinstellungen vor der Erstellung von Angeboten.

### Eine Steuerbehörde Einrichten

1. Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuerbehörden**
2. Wählen Sie **Steuer-ID hinzufügen**
3. Geben Sie Ihre Steuerbehördendaten ein:
    - Name der Steuerbehörde (z. B. „Mehrwertsteuer Deutschland" oder „Umsatzsteuer DE")
    - Steueridentifikationsnummer
    - Steuertyp (Umsatzsteuer, Mehrwertsteuer, GST usw.)
4. Wählen Sie **Speichern**

Fiskl erstellt automatisch ein entsprechendes Sachkonto in Ihrem Kontenrahmen für diese Steuerbehörde.

### Steuersätze Hinzufügen

1. Gehen Sie in **Steuerverwaltung** zum Abschnitt **Steuersätze**
2. Wählen Sie **Steuer hinzufügen**
3. Konfigurieren Sie den Steuersatz:
    - Steuername (z. B. „Normalsteuersatz 19 %")
    - Steuersatzprozentsatz
    - Zuordnung zu Ihrer Steuerbehörde
    - Als Umsatzsteuer oder Nicht-Umsatzsteuer kennzeichnen
4. Wählen Sie **Speichern**

**Beispiel Steuersätze:**

- Normalsteuersatz: 19 %
- Ermäßigter Satz: 7 %
- Nullsatz: 0 %

### Einen Standard-Steuersatz Festlegen

1. Suchen Sie in **Steuersätze** Ihren primären Steuersatz
2. Markieren Sie ihn als Standard für Verkäufe
3. Wählen Sie **Speichern**

Dieser Satz wird automatisch auf alle Positionen angewendet, es sei denn, Sie geben im Angebot etwas Anderes an.

**Weitere Informationen:** [Steueinstellungen](/settings/tax-settings)

</details>

---

## Schritt 2: Unternehmensangaben und Branding Einrichten

<details>
<summary>Schritt 2: Unternehmensangaben und Branding Einrichten</summary>

Ihre Unternehmensangaben werden auf jedem Angebot angezeigt. Konfigurieren Sie sie einmalig für konsistentes Branding in allen Dokumenten.

### Unternehmensdetails Hinzufügen

1. Gehen Sie zu **Einstellungen** > **Unternehmensprofile**
2. Füllen Sie Ihre Unternehmensangaben aus:
    - Rechtlicher Firmenname
    - Geschäftsadresse
    - Telefonnummer
    - E-Mail-Adresse
    - Website
    - Handelsregisternummer
3. Laden Sie Ihr Unternehmenslogo hoch
4. Wählen Sie Ihre Zeitzone
5. Wählen Sie **Speichern**

### Angebotsvorlagen und Marken Konfigurieren

Vorlagen steuern das Erscheinungsbild und den Inhalt Ihrer Angebote.

1. Gehen Sie zu **Einstellungen** > **Rechnungs- & Angebotseinstellungen** > **Vorlagen und Marken**
2. Wählen Sie **Neue Vorlage hinzufügen** oder bearbeiten Sie die Standard-Vorlage
3. Schalten Sie Angebot ein
4. Passen Sie die Vorlage mithilfe der folgenden Registerkarten an

**Registerkarte „Allgemeine Einstellungen"**

Im Abschnitt **Name & Kopfzeile** können Sie:

- Einen Vorlagennamen festlegen (nur zur internen Verwendung)
- Ihr Logo hochladen und seine Größe anpassen
- Ein E-Mail-Logo hochladen (quadratisches Format, maximal 100 KB, wird bei 70×70 px angezeigt)

Wenn Sie mehrere Marken unter einer Einheit betreiben, verwenden Sie **Markenüberschreibungen**, um einen separaten Firmennamen, eine separate Adresse, separate Kontaktdaten und ein separates Logo festzulegen. Dies ermöglicht es Ihnen, unterschiedlich gebrandete Angebote zu erstellen, ohne mehrere Konten zu verwalten.

**Registerkarte „Design"**

- Wählen Sie Markenfarben und Schriftstile aus
- Sehen Sie Änderungen in Echtzeit in der Vorschau
- Wählen Sie einen Layout-Stil: Klassisch, Modern oder Minimal
- Wählen Sie, welche Felder angezeigt werden, und passen Sie den Abstand an

**Weitere Informationen:** [Rechnungsvorlagen und Marken](/settings/invoice-template-brands-settings)

</details>

---

## Schritt 3: E-Mail-Vorlagen Konfigurieren

<details>
<summary>Schritt 3: E-Mail-Vorlagen Konfigurieren</summary>

Fiskl sendet E-Mail-Benachrichtigungen, wenn Sie Angebote ausstellen und nachverfolgen.

### Eine E-Mail-Strategie Wählen

Fiskl bietet zwei Ansätze:

**Option 1: Fiskl HTML-E-Mail-Vorlagen (empfohlen)**

Vorgefertigte HTML-E-Mails, die automatisch Ihre Angebotssprache entsprechen. Diese enthalten dynamische Platzhalter und gelten für alle Angebotsbenachrichtigungstypen.

**Option 2: Benutzerdefinierter E-Mail-Text**

Schreiben Sie Ihren eigenen E-Mail-Inhalt mit vollständiger Kontrolle über Wording, Ton und Messaging pro Szenario. Dynamische Platzhalter stehen dennoch zur Verfügung.

### Ihre E-Mail-Vorlage Einrichten

1. Gehen Sie zu **Einstellungen** > **Vorlagen und Marken**
2. Wählen Sie Ihre Vorlage
3. Wählen Sie die Registerkarte **E-Mail**
4. Wählen Sie Ihre E-Mail-Strategie:
    - **Fiskl-Vorlagen** — Schalter deaktiviert lassen
    - **Benutzerdefinierter Text** — Schalter einschalten

**Bei Verwendung von benutzerdefiniertem E-Mail-Text** konfigurieren Sie jedes Szenario separat:

- Neue Angebots-E-Mail

### E-Mail-Platzhalter

Platzhalter fügen Angebotsdaten automatisch in Ihre E-Mail ein.

| Platzhalter | Beschreibung |
| --- | --- |
| `{quote_number}` | Angebotsnummer |
| `{quote_date}` | Angebotsdatum |
| `{expiry_date}` | Verfallsdatum des Angebots |
| `{client_name}` | Kundenname |
| `{company_name}` | Ihr Unternehmensname |
| `{quote_total}` | Gesamtbetrag |
| `{quote_link}` | Link zum Online-Anzeigen des Angebots |

**Beispiel für benutzerdefinierte E-Mail:**

```
Betreff: Angebot {quote_number} von {company_name}

Sehr geehrter {client_name},

Anbei finden Sie das Angebot {quote_number} für {quote_total}.

Dieses Angebot ist gültig bis {expiry_date}.

Sehen Sie sich Ihr Angebot online an: {quote_link}

Beste Grüße,
{company_name}
```

</details>

---

## Schritt 4: Spracheinstellungen Konfigurieren

<details>
<summary>Schritt 4: Spracheinstellungen Konfigurieren</summary>

Falls Sie Kunden in mehreren Sprachen Angebote machen, konfigurieren Sie Ihre Spracheinstellungen vor der Erstellung von Angeboten.

### Eine Standard-Sprache Festlegen

1. Gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen**
2. Wählen Sie unter **Sprache** Ihre Primärsprache
3. Wählen Sie **Speichern**

Alle neuen Angebote verwenden diese Sprache standardmäßig. Sie können die Sprache für einzelne Angebote bei Bedarf ändern.

Fiskl unterstützt über 60 Sprachen bei Angebots- und Rechnungsübersetzungen, E-Mail-Vorlagen und kundenorientierten Bildschirmen.

### Sprachübersetzungen Anpassen (Optional)

So erstellen Sie eine Version für einen regionalen Dialekt oder eine spezifische Terminologie:

1. Wählen Sie in **Sprache** **Benutzerdefinierte Sprache hinzufügen**
2. Wählen Sie die Basissprache zum Anpassen
3. Bearbeiten Sie die Übersetzungen: Terminologie, regionale Formulierungen oder Feldbezeichnungen
4. Wählen Sie **Speichern**

Ihre benutzerdefinierte Sprache wird in der Sprachauswahl angezeigt, wenn Sie Angebote erstellen.

**Weitere Informationen:** [Rechnungs- und Angebotseinstellungen](/settings/invoice-quotes-settings)

</details>

---

## Ein Angebot Erstellen

### Ein Neues Angebot Starten

1. Wählen Sie in der linken Navigation **Angebote**
2. Wählen Sie **Neues Angebot**

### Kundendetails Hinzufügen

Das Angebot ruft die folgenden Felder automatisch aus dem Kundenprofil ab:

- Kundenname und -adresse
- Kundenmail (inklusive CC- und BCC-Adressen)
- Steuer-/Mehrwertsteuerregistrierungsnummer (falls im Kundenprofil festgelegt)
- Standardwährung und Zeithonorar

**Falls der Kunde bereits vorhanden ist:**

1. Wählen Sie den Kunden aus der Dropdown-Liste **Kunde**
2. Seine Details werden automatisch eingefüllt

**Falls dies ein neuer Kunde ist:**

1. Wählen Sie **Neuen Kunden hinzufügen**
2. Geben Sie die Kundendetails ein: Name, E-Mail-Adresse, Rechnungsadresse und Telefonnummer (optional)
3. Wählen Sie **Speichern**

:::info
Fiskl speichert den Kunden automatisch unter **Kunden** in der linken Navigation.
:::

### Eine Währung Auswählen

Die Angebotswährung wird standardmäßig auf Ihre Unternehmens-Basiswährung oder auf die Standard-Währung des Kunden festgelegt, falls im Kundenprofil eine festgelegt ist. Um die Währung für dieses Angebot zu ändern, wählen Sie sie aus der Währungs-Dropdown-Liste im Abschnitt **Grunddetails**.

:::tip
Sie können Wechselkurse für Positionen in verschiedenen Währungen anpassen.
:::

### Eine Sprache Auswählen

Ihre Standard-Sprache wird automatisch ausgewählt. Um eine andere Sprache für dieses Angebot zu verwenden, wählen Sie sie aus der Sprach-Dropdown-Liste.

Die ausgewählte Sprache beeinflusst das Angebot selbst, Standard-E-Mail-Vorlagen und alle kundenorientierten Bildschirme.

### Eine Vorlage Auswählen

Die Standard-Vorlage wird automatisch angewendet. Falls Sie mehrere Vorlagen oder Marken verwenden, wählen Sie die entsprechende aus der Dropdown-Liste.

### Angebotsdetails Festlegen

**Angebotsnummer**

Angebotsnummern beginnen bei `ANGEBOT-0001` und werden automatisch erhöht. Um ein anderes Format zu verwenden, bearbeiten Sie die Nummer bei einem neuen Angebot — Fiskl verwendet dieses Format für alle nachfolgenden Angebote.

Zwei Einschränkungen gelten:

- Auto-Inkrementierung funktioniert nur, wenn die Nummer mit einer Ziffer endet
- Datumsbasierte Formate (z. B. `2025-01-0001`) erfordern manuelle Updates bei jedem Periodenwechsel

**Angebotsdaten**

| Feld | Zweck | Standard |
| --- | --- | --- |
| Angebotsdatum | Das Datum, an dem das Angebot ausgestellt wurde | Heute |
| Verfallsdatum | Das Datum, an dem das Angebot verfällt | Dreißig Tage nach Angebotsdatum |

Um die Standard-Verfallsfrist zu ändern, gehen Sie zu **Einstellungen** > **Rechnungs- & Angebotseinstellungen**.

### Notizen und Bedingungen Hinzufügen

Fügen Sie eine Übersicht/Einleitung und Geschäftsbedingungen für das Angebot hinzu. HTML-Tags wie `<b>`, `<i>`, `<u>`, `<p>`, `<br>` werden unterstützt.

Standard-Notizen und Bedingungen können in **Einstellungen** > **Rechnungs- & Angebotseinstellungen** konfiguriert werden.

---

## Positionen Hinzufügen

Positionen sind die Zeilen in Ihrem Angebot. Fiskl unterstützt fünf Typen:

| Typ | Beschreibung |
| --- | --- |
| **Produkt** | Ein physisches oder digitales Element. Produkte sind wiederverwendbare Vorlagen. |
| **Dienstleistung** | Eine von Ihnen erbrachte Dienstleistung. Dienstleistungen sind wiederverwendbare Vorlagen. |
| **Ausgabe** | Eine Geschäftsausgabe, die Sie dem Kunden in Rechnung stellen. |
| **Kilometerstand** | Reisestrecke, die zu einem Satz pro Kilometer oder pro Meile abgerechnet wird. |
| **Zeit** | Abrechenbare Stunden, die für das Angebot erfasst wurden. |

Sie können Positionen direkt im Angebot erstellen oder sie im Voraus unter **Produkte & Dienstleistungen** in der linken Navigation einrichten.

### Ein Produkt oder Eine Dienstleistung Hinzufügen

1. Wählen Sie **Plus** im Bereich „Positionen"
2. Wählen Sie **Neu hinzufügen** > **Produkt oder Dienstleistung**
3. Geben Sie die Details der Position ein:
    - Name und Beschreibung der Position
    - Menge und Einzelpreis
    - Steuersatz (nimmt standardmäßig Ihren primären Steuersatz an)
4. Der Betrag wird automatisch berechnet

Um mehr Details hinzuzufügen, wählen Sie **Weitere Details**:

- Ändern Sie das Standard-**Ertragskonto** aus der Dropdown-Liste
- Wählen Sie eine andere Währung, um eine Position mit mehreren Währungen zu erstellen
- Passen Sie den Wechselkurs an und sehen Sie sich die umgerechnete Gesamtsumme in der Vorschau an

### Eine Ausgabe Hinzufügen

1. Wählen Sie **Plus** im Bereich „Positionen"
2. Wählen Sie **Neu hinzufügen** > **Ausgabe**
3. Geben Sie die Details der Ausgabe ein:
    - Wählen Sie einen Lieferanten aus der Dropdown-Liste oder erstellen Sie einen, indem Sie den Namen des Lieferanten eingeben und **+ Erstellen** wählen
    - Beschreibung und Preis
    - Steuersatz (nimmt standardmäßig Ihren primären Steuersatz an)
4. Der Betrag wird automatisch berechnet

Um mehr Details hinzuzufügen, wählen Sie **Weitere Details**:

- Ändern Sie das **Ausgabenkonto** oder die **Ausgabenkategorie** aus den Dropdown-Listen
- Wählen Sie eine andere Währung
- Fügen Sie ggf. eine Belegnummer hinzu

### Zeit Hinzufügen

1. Wählen Sie **Plus** im Bereich „Positionen"
2. Wählen Sie **Neu hinzufügen** > **Zeit**
3. Geben Sie die Zeitdetails ein:
    - Name und Beschreibung
    - Menge (Gesamtzeit)
    - Satz (nimmt standardmäßig Ihre gespeicherte Voreinstellung oder den Kundensatz an, falls festgelegt)
    - Steuersatz (nimmt standardmäßig Ihren primären Steuersatz an)
4. Der Betrag wird automatisch berechnet

Um mehr Details hinzuzufügen, wählen Sie **Weitere Details**:

- Ändern Sie das **Ertragskonto** aus der Dropdown-Liste
- Wählen Sie eine andere Währung
- Schalten Sie **Start – End-Zeit** ein, um spezifische Start- und Endzeiten einzugeben — die Dauer wird automatisch berechnet

### Kilometerstand Hinzufügen

1. Wählen Sie **Plus** im Bereich „Positionen"
2. Wählen Sie **Neu hinzufügen** > **Kilometerstand**
3. Geben Sie die Kilometerstand-Details ein:
    - Name und Beschreibung
    - Menge (Gesamtstrecke in Meilen oder Kilometern)
    - Satz (nimmt standardmäßig Ihre gespeicherte Voreinstellung an)
    - Steuersatz (nimmt standardmäßig Ihren primären Steuersatz an)
4. Der Gesamtwert wird automatisch berechnet

Um mehr Details hinzuzufügen, wählen Sie **Weitere Details** und wählen Sie eine Entfernungs-Eingabemethode:

- **Direkt** — Gesamtstrecke bereits eingegeben (Standard)
- **Tachometer** — Geben Sie Start- und Endzahl ein; schalten Sie für eine Hin- und Rückfahrt ein
- **Karte** — Geben Sie Start- und Endadressen ein oder verwenden Sie **Aktueller Standort**; ziehen Sie die Routenlinie, um den Pfad anzupassen

### Aus Ihrem Produkten- und Dienstleistungskatalog Auswählen

Um vorhandene Elemente hinzuzufügen, statt neue zu erstellen:

1. Wählen Sie **Plus** im Bereich „Positionen"
2. Wählen Sie **Vorhandenes auswählen**
3. Wählen Sie Elemente aus Ihrem Produkten- und Dienstleistungskatalog oder gespeicherten Kundeneinträgen

Sie können die Liste nach Typ und Währung filtern.

---

## Steuer Anwenden

Wenden Sie Steuer auf der Positionsebene an. Fiskl unterstützt einfache Steuern, mehrere Steuern und zusammengesetzte Steuern pro Artikel.

Schalten Sie die Option **ausschl** bei einer Position ein, um zwischen Preisen ohne und mit Steuer umzuschalten.

Falls Ihre Steuernummer nicht auf dem Angebot angezeigt wird, überprüfen Sie beide Einstellungen:

1. Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuersätze** und bestätigen Sie, dass das Kontrollkästchen **Steuernummer auf Rechnungen anzeigen** aktiviert ist
2. Gehen Sie zu **Einstellungen** > **Vorlagen & Marken** und bestätigen Sie, dass die Option **Steuernummer ausblenden** nicht aktiviert ist

Ihre Steuernummer wird automatisch angezeigt, wenn mindestens eine Position eine angewendete Steuer hat.

---

## Rabatte Anwenden (Optional)

Wenden Sie einen Rabatt auf Angebotsebene an, nicht pro Position.

1. Wählen Sie **Bearbeiten** neben **Angebotsbedingungen**
2. Schalten Sie die Option **Rabatt** ein
3. Geben Sie einen festen Betrag (z. B. `100` für einen Rabatt von 100 EUR) oder einen Prozentsatz (z. B. `15%`) ein
4. Der Gesamtwert wird automatisch aktualisiert

---

## Ein Angebot in Eine Rechnung Umwandeln

Wenn ein Kunde Ihr Angebot akzeptiert, wandeln Sie es direkt in eine Rechnung um. Dies überträgt alle Positionen, Kundendetails und Beträge, ohne sie erneut eingeben zu müssen.

1. Öffnen Sie das akzeptierte Angebot
2. Wählen Sie **Mehr** dann **In Rechnung umwandeln**
3. Überprüfen Sie die Rechnungsdetails und passen Sie sie nach Bedarf an
4. Wählen Sie **Speichern**

Das ursprüngliche Angebot bleibt in Ihrer Angebotsliste mit dem Status **Umgewandelt** erhalten. Die neue Rechnung wird als Entwurf unter **Rechnungen** gespeichert.

:::tip
Wandeln Sie ein Angebot in eine Rechnung um, sobald Ihr Kunde die Annahme bestätigt, um Ihre Aufzeichnungen konsistent zu halten und den Abrechnungsprozess ohne Verzögerung zu starten.
:::

---

## Speichern und Senden

Wählen Sie **Speichern**, um Ihr Angebot als Entwurf zu speichern.

Um das Angebot an Ihren Kunden zu senden, wählen Sie **Speichern & Senden**.

---

## Häufig Auftretende Probleme

<details>
<summary>Meine Steuernummer wird nicht auf dem Angebot angezeigt</summary>

Zwei Einstellungen steuern die Sichtbarkeit der Steuernummer — beide müssen korrekt konfiguriert sein.

1. Gehen Sie zu **Einstellungen** > **Steuerverwaltung** > **Steuersätze** und bestätigen Sie, dass das Kontrollkästchen **Steuernummer auf Rechnungen anzeigen** aktiviert ist
2. Gehen Sie zu **Einstellungen** > **Vorlagen & Marken** und bestätigen Sie, dass die Option **Steuernummer ausblenden** nicht aktiviert ist

Ihre Steuernummer wird nur angezeigt, wenn mindestens eine Position im Angebot eine angewendete Steuer hat.

</details>

<details>
<summary>Die Angebotswährung ist falsch</summary>

Die Währung wird standardmäßig auf Ihre Unternehmens-Basiswährung oder die Standard-Währung des Kunden festgelegt, falls eine im Kundenprofil festgelegt ist. Um sie für ein einzelnes Angebot zu ändern, wählen Sie die Währung aus der Dropdown-Liste im Abschnitt **Grunddetails**.

Um die Standard-Währung des Kunden zu aktualisieren, gehen Sie zu **Kunden**, wählen Sie den Kunden aus und aktualisieren Sie deren Währungseinstellung.

</details>

<details>
<summary>Die Angebotsnummer ist nicht in der richtigen Reihenfolge</summary>

Falls Sie eine Angebotsnummer manuell bearbeitet haben, verwendet Fiskl diese Nummer als neue Basis für die Auto-Inkrementierung. Erstellen Sie ein neues Angebot und geben Sie manuell die richtige Nummer ein. Alle nachfolgenden Angebote werden von diesem Punkt an erhöht.

</details>

<details>
<summary>Vorlagenänderungen betrafen bereits gesendete Angebote</summary>

Vorlagenänderungen gelten für alle Angebote, die diese Vorlage verwenden. Falls Sie das Styling ändern müssen, ohne vorhandene Angebote zu beeinflussen, erstellen Sie eine neue Vorlage in **Einstellungen** > **Vorlagen & Marken** und wenden Sie sie nur auf neue Angebote an.

</details>

<details>
<summary>Die Option „In Rechnung umwandeln" ist nicht verfügbar</summary>

Die Option **In Rechnung umwandeln** ist bei Angeboten mit jedem Status verfügbar. Falls Sie sie nicht sehen, bestätigen Sie, dass Sie die richtige Rolle und Berechtigung zum Erstellen von Rechnungen haben. Kontaktieren Sie Ihren Kontoeigentümer, falls die Option weiterhin nicht verfügbar ist.

</details>

---

## Verwandte Themen

- [Angebotsverwaltung](quote-management.md) — Senden, bearbeiten, duplizieren und Angebotsstatus verwalten
- [Rechnungen Erstellen](creating-invoices.md) — Kunden abrechnen, sobald ein Angebot angenommen wurde
- [Steueinstellungen](../settings/tax-settings) — Steuersätze und Anzeigeoptionen konfigurieren
- [Rechnungs- und Angebotseinstellungen](../settings/invoice-quotes-settings) — Standardwerte für Nummerierung, Ablauf und Sprache festlegen
- [Rechnungsvorlagen und Marken](../settings/invoice-template-brands-settings) — Das Erscheinungsbild Ihrer Angebote anpassen
- [Kunden Verwalten](../clients-vendors/clients) — Kundenprofile und Standardwerte einrichten
- [Produkte & Dienstleistungen](../products-services/overview) — Erstellen Sie einen wiederverwendbaren Katalog von Artikeln
