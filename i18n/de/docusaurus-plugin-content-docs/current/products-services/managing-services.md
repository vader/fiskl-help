---
title: "Verwaltung von Dienstleistungen"
description: "Erfahren Sie, wie Sie in Fiskl Service-Vorlagen erstellen und verwalten, um eine genaue Abrechnung und optimierte Rechnungsstellung von Beratungs- und Dienstleistungen zu gewährleisten."
keywords: ["create service", "service template", "billing", "consulting", "hourly rate", "recurring invoice", "time tracking"]
sidebar_position: 2
tags:
  - Products & Services
  - Invoicing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie Service-Vorlagen in Fiskl erstellen und verwalten, um die Abrechnung von immateriellen Leistungen wie Beratung, Reparaturen und professionelle Dienstleistungen zu rationalisieren.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Was sind Services

Services sind immaterielle Leistungen, die Ihr Unternehmen Kunden erbringt, wie beispielsweise Beratungsstunden, Wartungsverträge, Schulungssitzungen oder professionelle Beratung. Jede Service-Vorlage speichert Standardinformationen wie Stundensätze, Steuersätze und Beschreibungen, die automatisch ausgefüllt werden, wenn Sie den Service zu einer Rechnung hinzufügen.

## Bevor Sie beginnen

Vor dem Erstellen eines Service bestätigen Sie bitte Folgendes:

- **Service-Name** — Wenn Sie Variationen desselben Service anbieten (unterschiedliche Sätze für Standard-, Abend- oder Wochenendarbeiten), planen Sie Ihre Namenskonvention im Voraus, damit Ihr Katalog organisiert bleibt
- **Maßeinheit** — Überlegen Sie, ob Sie nach Leistung (Projekt, Sitzung) oder Zeit (Stunde, Tag) abrechnen, da dies Auswirkungen auf die Darstellung der Mengen auf Rechnungen hat
- **Preis/Satz** — Verwenden Sie Ihren Standardsatz als Template-Standard. Einmalige Preisanpassungen werden auf Rechnungsebene vorgenommen, daher muss die Vorlage nur Ihre übliche Gebühr widerspiegeln
- **Währung** — Wenn Sie mit internationalen Kunden arbeiten, die in verschiedenen Währungen abgerechnet werden, können Sie die Währung auf Template-Ebene festlegen, um Zeit beim Rechnungsschreiben zu sparen
- **Ledger-Konto** — Der Standard ist „Verkauf von Services". Falls Ihr Buchhalter Service-Linien separat erfasst (z. B. Beratung vs. Wartung), bestätigen Sie vor dem Speichern das richtige Konto
- **Steuersatz** — Wenn Sie in verschiedenen Steuerjurisdiktionen tätig sind oder Services mit unterschiedlichen Steuerbehandlungen anbieten, bestätigen Sie vor der Erstellung, welcher Satz für diesen Service gilt

## Erstellen eines neuen Service

1. Gehen Sie zu **Produkte & Services** in der linken Seitenleiste
2. Wählen Sie das **+**-Symbol oder **Neues Produkt/Service**
3. Wählen Sie die Registerkarte **Service**
4. Füllen Sie die erforderlichen Felder aus:

   - **Name** — Geben Sie einen klaren, aussagekräftigen Namen ein, den Ihr Team erkennt. Beispiel: "Webdesign - Stundlich"
   - **Einheit** — Wählen Sie die Maßeinheit für die Abrechnung. Häufige Optionen: Stunde, Sitzung, Tag, Projekt
   - **Preis/Satz** — Geben Sie den Unitpreis in Ihrer Basiswährung ein. Beispiel: 100.00
   - **Währung** — Standardmäßig Ihre Basiswährung. Ändern Sie dies, wenn der Service immer in einer anderen Währung abgerechnet wird
   - **Konto** — Das Standard-Ledger-Konto ist „Verkauf von Services". Wählen Sie ein anderes Konto nur, wenn Sie diesen Service-Typ separat erfassen
   - **Steuer** — Wählen Sie den geltenden Steuersatz, oder wählen Sie **Neue Steuer erstellen**, falls erforderlich

5. Fügen Sie optionale Details hinzu:

   - **Beschreibung** — Erklären Sie, was der Service umfasst. Dieser Text erscheint auf Rechnungen. Beispiel: "Benutzerdefiniertes Webdesign und -entwicklung, einschließlich responsives Layout und initiale Inhaltserstellung"
   - **Anhänge** — Laden Sie servicebezogene Dokumente wie Serviceverträge, Scope-of-Work-Vorlagen oder Portfolio-Beispiele hoch. Unterstützte Formate: PNG, JPG, PDF

6. Wählen Sie **Produkt/Service erstellen**

Der Service erscheint in Ihrem Katalog und kann zu Rechnungen hinzugefügt werden.

## Dynamische Name-Vorlagen

Beim Erstellen oder Bearbeiten eines Service können Sie einen dynamischen Namen erstellen, der sich bei wiederkehrenden Rechnungen automatisch aktualisiert. Aktivieren Sie **Dynamische Name-Vorlagen für wiederkehrende Rechnungen**, um die verfügbaren Tokens anzuzeigen.

- **Datums-Vorlagen** — fügen Sie Tag, Monat, Jahr, Datum, Datum Kurz oder Datum Mittel ein
- **Kunden-Vorlagen** — fügen Sie den Kundennamen ein

Wählen Sie einen Token aus, um ihn in das Feld **Name** einzufügen. Verwenden Sie **+/-**, um Datumversätze für wiederkehrende Posten anzupassen.

**Beispiel:** Sie bieten monatliche Retainer-Services für mehrere Kunden an. Erstellen Sie einen Service mit dem Namen `Monthly Retainer - {Client Name} - {Month} {Year}`. Jedes Mal, wenn eine wiederkehrende Rechnung generiert wird, wird der Name automatisch aktualisiert — beispielsweise „Monthly Retainer - Acme Inc - July 2025".

:::info
Dynamische Name-Vorlagen funktionieren sowohl bei Standard- als auch bei wiederkehrenden Rechnungen. Bei einer Standard-Rechnung werden Tokens zum Rechnungsdatum aufgelöst. Bei einer wiederkehrenden Rechnung werden Tokens automatisch aktualisiert, jedes Mal wenn eine neue Rechnung generiert wird.

Der Service-Typ kann nach der Erstellung nicht mehr geändert werden. Wenn Sie einen Service in ein Produkt umwandeln möchten oder umgekehrt, erstellen Sie einen neuen Eintrag mit dem korrekten Typ.
:::

## Service während des Rechnungsschreibens inline erstellen

Sie können Services spontan erstellen, während Sie Rechnungen zusammenstellen:

1. Öffnen Sie eine neue oder vorhandene Rechnung und gehen Sie zum Abschnitt Rechnungspositionen
2. Wählen Sie **Zum Hinzufügen klicken**
3. Wählen Sie **Neu hinzufügen**, dann wählen Sie **Service**
4. Geben Sie einen Service-Namen in das Feld Artikel ein
5. Füllen Sie die Felder aus — Einheit, Preis/Satz, Währung und Umsatzsteuer
6. Wählen Sie **Weitere Details**, um zusätzliche Felder einschließlich **Konto** und **Währung** festzulegen (Sie können hier auch den Wechselkurs anpassen)
7. Fügen Sie nach Bedarf weitere Posten hinzu, wählen Sie dann **Fertig**

Fiskl speichert den Eintrag als Service-Vorlage in Ihrem Katalog zur zukünftigen Verwendung.

## Service-Felder erläutert

### Name

Der primäre Identifier in Ihrem Katalog und auf Rechnungen. Machen Sie es spezifisch genug, um ähnliche Posten zu unterscheiden, aber prägnant genug, um auf einen Blick zu verstehen.

### Einheit

Definiert, wie der Service gemessen und abgerechnet wird. Die Einheitenbezeichnung erscheint auf Rechnungen neben der Menge. Häufige Optionen sind Stunde, Sitzung, Tag, Projekt und Paket.

### Preis/Satz

Der Standard-Abrechnungssatz pro Einheit. Sie können diesen Satz auf einzelnen Rechnungen anpassen, ohne die Vorlage zu ändern.

### Währung

Die Währung, in der dieser Service bepreist ist. Wenn Sie den Service zu einer Rechnung hinzufügen, können Sie den Wechselkurs im Panel **Weitere Details** in der Rechnungsposition anpassen.

### Konto

Verknüpft den Service mit einem Ledger-Konto in Ihrem Kontenrahmen. Umsätze aus diesem Service werden dem ausgewählten Ledger-Konto zugewiesen, wenn Rechnungen bezahlt werden. Das Standard-Ledger-Konto ist „Verkauf von Services". Weitere häufige Optionen sind Beratungsumsatz, Wartungsumsatz und Schulungsumsatz.

### Umsatzsteuer

Der Standard-Steuersatz oder die Steuergruppe, die angewendet wird, wenn Sie diesen Service zu einer Rechnung hinzufügen. Sie können den Satz auf einzelnen Rechnungspositionen bei Bedarf überschreiben.

:::tip
Falls Ihr Unternehmen mehrwertsteuerpflichtig ist, weisen Sie Ihren Services immer eine Umsatzsteuer zu, um eine genaue Steuerberichterstattung zu gewährleisten.
:::

### Beschreibung

Erklären Sie, was der Service umfasst. Dieser Text erscheint auf Rechnungen. Halten Sie es auf eine bis drei Sätze und beachten Sie alle relevanten Bedingungen oder Einschränkungen.

### Anhänge

Sie können servicebezogene Dateien — wie Serviceverträge, Scope-of-Work-Vorlagen oder Portfolio-Beispiele — aus dem Panel **Anhänge** auf der rechten Seite des Rechnungsformulars anhängen. Wählen Sie **Dateien hinzufügen**, um hochzuladen. Es werden maximal drei Dateien mit je bis zu 5MB unterstützt.

## Speichern von Services zu Rechnungen hinzufügen

So fügen Sie einen vorhandenen Service aus Ihrem Katalog zu einer Rechnung hinzu:

1. Öffnen Sie eine neue oder vorhandene Rechnung und gehen Sie zum Abschnitt Rechnungspositionen
2. Wählen Sie **Vorhandenes auswählen**
3. Wählen Sie den oder die Services aus der Liste
4. Wählen Sie **Ausgewählte anhängen**
5. Passen Sie die Menge nach Bedarf an

## Bearbeiten eines Service auf einer Rechnung

Wenn Sie einen Service zu einer Rechnung hinzufügen, wird er zu einer Rechnungsposition, die Sie für diese Transaktion bearbeiten können. Wählen Sie im Abschnitt Rechnungspositionen **Bearbeiten** auf der Rechnungsposition und nehmen Sie Ihre Änderungen vor. Wählen Sie **Weitere Details**, um Felder wie **Konto** oder **Währung** zu aktualisieren.

Änderungen an einer Rechnungsposition wirken sich nicht auf die ursprüngliche Service-Vorlage aus. Zukünftige Rechnungen verwenden weiterhin die Standardwerte der Vorlage.

## Best Practices

**Verwenden Sie klare, aussagekräftige Namen.** Machen Sie Services in Ihrem Katalog leicht zu identifizieren. Beispiel: „Rechtliche Beratung - Stundlich" statt „Beratung".

**Legen Sie genaue Standard-Sätze fest.** Verwenden Sie Ihre Standard-Sätze als Template-Standards. Passen Sie sie auf spezifischen Rechnungen für Spezialpreise an.

**Weisen Sie Services den richtigen Ledger-Konten zu.** Wählen Sie Ledger-Konten sorgfältig für eine genaue Finanzberichterstattung aus.

**Schreiben Sie kundenfreundliche Beschreibungen.** Erklären Sie, was Kunden in verständlicher Sprache erhalten, und vermeiden Sie interne Fachbegriffe.

**Überprüfen Sie die Preise regelmäßig.** Aktualisieren Sie Service-Vorlagen, wenn sich Ihre Standard-Sätze ändern.

**Gruppieren Sie verwandte Services mit konsistenter Benennung.** Beispiel: „Beratung - Standard Stunde", „Beratung - Abend Stunde", „Beratung - Wochenende Stunde".

**Erstellen Sie dynamische Name-Vorlagen für wiederkehrende Kunden.** Verwenden Sie Platzhalter, um wiederkehrende Abrechnung mit Kundennamen und Daten zu automatisieren, die sich mit jedem Zyklus aktualisieren.

## Häufige Probleme

<details>
<summary>Ich habe eine Service-Vorlage geändert, aber vorhandene Rechnungen zeigen immer noch die alten Details</summary>

Änderungen an einer Service-Vorlage gelten nur für neue Rechnungen. Vorhandene Rechnungen behalten die Details bei, die beim Hinzufügen des Service festgelegt wurden. Um eine vorhandene Rechnung zu aktualisieren, öffnen Sie diese und bearbeiten Sie die Rechnungsposition direkt.

</details>

<details>
<summary>Ich habe einen Service gelöscht und kann ihn nicht mehr zu neuen Rechnungen hinzufügen</summary>

Das Löschen eines Service entfernt ihn dauerhaft aus Ihrem Katalog. Vorhandene Rechnungen, die diesen Service enthalten, bleiben unverändert, aber Sie können den gelöschten Service nicht zu neuen Rechnungen hinzufügen. Wenn Sie den Service wieder benötigen, erstellen Sie ihn in **Produkte & Services** neu.

</details>

<details>
<summary>Ich muss verschiedene Sätze für verschiedene Kunden abrechnen</summary>

Service-Vorlagen speichern einen Standard-Satz. Um einen anderen Satz abzurechnen, öffnen Sie die Rechnung und passen Sie den Unitpreis auf der relevanten Rechnungsposition an. Wenn Sie häufig verschiedene Stufen abrechnen, erstellen Sie separate Service-Vorlagen für jede Preisstufe (z. B. „Beratung - Standard-Satz", „Beratung - Premium-Satz").

</details>

<details>
<summary>Vorlagen-Platzhalter werden als Text auf einer Standard-Rechnung angezeigt</summary>

Dynamische Name-Template-Tokens wie `{Client Name}` und `{Month}` werden sowohl bei Standard- als auch bei wiederkehrenden Rechnungen aufgelöst. Bei einer Standard-Rechnung verwenden Datums-Tokens das Rechnungsdatum. Wenn Tokens unverändert angezeigt werden, überprüfen Sie, ob **Dynamische Name-Vorlagen für wiederkehrende Rechnungen** für diesen Service aktiviert ist.

</details>

<details>
<summary>Wie rechne ich Zeit und Material auf derselben Rechnung ab?</summary>

Erstellen Sie zwei separate Rechnungspositionen auf der Rechnung:

1. Ein Service für Arbeiten (z. B. „Reparatur - Stundlich")
2. Ein Produkt für Material (z. B. „Ersatzteile")

Fügen Sie beide zu derselben Rechnung hinzu, um Ihrem Kunden eine klare Aufschlüsselung zu geben.

</details>

<details>
<summary>Wie erstelle ich einen Pauschal-Service?</summary>

Erstellen Sie einen Service mit einem Einheitstyp von „Projekt" oder „Paket" und legen Sie einen Pauschalpreis fest. Verwenden Sie das Beschreibungsfeld, um aufzulisten, was im Paket enthalten ist. Passen Sie die Menge auf der Rechnung auf 1 an.

</details>

## Verwandte Themen

- [Erstellen von Produkten](/products-services/creating-products) — Erstellen Sie Produktvorlagen für materielle Waren
- [Verwalten Ihres Katalogs](/products-services/managing-catalog) — Organisieren und pflegen Sie Ihre Produkte und Services
- [Zeiterfassung](/time-and-mileage/time-tracking) — Protokollieren Sie abrechenbare Stunden für Service-Rechnungen
- [Erstellen wiederkehrender Rechnungen](/invoicing/create-recurring-invoices) — Verwenden Sie Template-Services für automatisierte Abrechnung
