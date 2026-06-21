---
title: "Rechnungssprachen"
description: "Legen Sie Ihre Standard-Rechnungssprache fest und erstellen Sie benutzerdefinierte Übersetzungen für regionale Dialekte oder geschäftsspezifische Terminologie in Fiskl-Rechnungen, Angeboten und E-Mails."
keywords: ["invoice language", "translation", "multilingual", "custom language", "regional dialect"]
sidebar_position: 5
tags:
   - Settings
   - Invoicing
   - Localisation
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie Rechnungssprachen in Fiskl konfigurieren, einschließlich der Einstellung Ihrer Standardsprache und der Erstellung benutzerdefinierter Übersetzungen für regionale Dialekte oder geschäftsspezifische Terminologie.

## Vor dem Start

- Konfigurieren Sie Ihre Spracheinstellungen, bevor Sie Rechnungen erstellen. Das Ändern der Standardsprache später aktualisiert vorhandene Rechnungen nicht.
- Benutzerdefinierte Sprachen basieren auf einer der 60+ unterstützten Sprachen. Sie wählen die Basissprache im Rahmen des Einrichtungsvorgangs aus.
- Einige Übersetzungsfelder enthalten Platzhalter wie `{{1}}` oder `{{2}}`. Behalten Sie diese genau so bei und ändern Sie nur den umgebenden Text.

## Stellen Sie Ihre Standardsprache ein

Ihre Standardsprache gilt für alle neuen Rechnungen. Sie können sie bei Bedarf für einzelne Rechnungen überschreiben.

1. Gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen**
2. Wählen Sie **Sprache**
3. Wählen Sie Ihre bevorzugte Sprache aus der Liste
4. Wählen Sie **Speichern**

Alle neuen Rechnungen verwenden diese Sprache.

:::tip
Fiskl unterstützt über 60 Sprachen und deckt Rechnungstext, E-Mail-Vorlagen, kundenfreundliche Zahlungsbildschirme und Zahlungsplanzeitschnittstellen ab.
:::

## Erstellen Sie eine benutzerdefinierte Sprache

Benutzerdefinierte Sprachen ermöglichen es Ihnen, eine vorhandene Sprache für eine bestimmte Region anzupassen oder Standardterminologie durch Ihre eigene zu ersetzen. Beispielsweise können Sie Spanisch für einen bestimmten lateinamerikanischen Markt anpassen oder auf allen Ihren Dokumenten „Kunde" statt „Client" verwenden.

1. Gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Sprache**
2. Wählen Sie **Benutzerdefinierte Sprache hinzufügen**
3. Wählen Sie die Basissprache, die Sie anpassen möchten
4. Geben Sie einen Namen für Ihre benutzerdefinierte Sprache ein
5. Bearbeiten Sie die Übersetzungsfelder nach Bedarf:
   - Ersetzen Sie Terminologie, um Ihr Geschäft oder Ihre Region zu entsprechen
   - Aktualisieren Sie Feldbezeichnungen, um Ihr Publikum zufriedenzustellen
6. Wählen Sie **Speichern**

Ihre benutzerdefinierte Sprache wird in der Sprachauswahl angezeigt, wenn Sie Rechnungen erstellen oder bearbeiten.

:::warning
Für alle Übersetzungsfelder, die Platzhalter wie `{{1}}` oder `{{2}}` enthalten, behalten Sie die Platzhalter genau so bei, wie sie angezeigt werden. Bearbeiten Sie nur den Text um sie herum. Beispielsweise können Sie in `Payment ({{1}} of {{2}})` das Wort „Payment" ändern, müssen aber `{{1}}` und `{{2}}` unverändert lassen.
:::

## Ändern Sie die Sprache für eine einzelne Rechnung

Sie können die Standardsprache für jede einzelne Rechnung überschreiben, ohne Ihre kontoweite Einstellung zu ändern.

1. Öffnen Sie die Rechnung, die Sie bearbeiten möchten
2. Wählen Sie das Feld **Sprache** in den Dokumenteinstellungen
3. Wählen Sie die anzuwendende Sprache oder benutzerdefinierte Sprache
4. Wählen Sie **Speichern** oder senden Sie die Rechnung wie gewohnt

## Häufig auftretende Probleme

<details>
<summary>Meine vorhandenen Rechnungen haben sich nicht geändert, nachdem ich die Standardsprache aktualisiert habe</summary>

Die Standardspracheinstellung gilt nur für neue Rechnungen, die nach der Änderung erstellt werden. Vorhandene Rechnungen behalten die Sprache, mit der sie erstellt wurden.

Um die Sprache auf einer vorhandenen Rechnung zu aktualisieren, öffnen Sie diese, wählen Sie das Feld **Sprache**, wählen Sie die richtige Sprache aus und wählen Sie **Speichern**.

</details>

<details>
<summary>Ich kann meine benutzerdefinierte Sprache nicht in der Rechnungssprachauswahl finden</summary>

Benutzerdefinierte Sprachen werden nur angezeigt, nachdem sie erfolgreich gespeichert wurden. Gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Sprache** und bestätigen Sie, dass Ihre benutzerdefinierte Sprache aufgelistet ist. Wenn sie fehlt, wählen Sie **Benutzerdefinierte Sprache hinzufügen** und erstellen Sie sie erneut.

</details>

<details>
<summary>Meine Übersetzungen werden auf dem kundenfreundlichen Zahlungsbildschirm nicht angezeigt</summary>

Zahlungsbildschirm-Übersetzungen werden aus Ihrer Standardspracheinstellung angewendet, nicht aus der einzelnen Rechnungssprache. Gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Sprache**, bestätigen Sie, dass die richtige Sprache als Standard festgelegt ist, und wählen Sie **Speichern**.

</details>

<details>
<summary>Ich habe versehentlich einen Platzhalter wie `{{1}}` aus einem Übersetzungsfeld entfernt</summary>

Wenn ein Platzhalter fehlt, wird das Feld auf Ihren Dokumenten nicht korrekt angezeigt. Gehen Sie zu **Einstellungen** > **Rechnungs- und Angebotseinstellungen** > **Sprache**, wählen Sie Ihre benutzerdefinierte Sprache und stellen Sie den Platzhalter im betroffenen Feld wieder her. Beachten Sie die Standardsprachversion des Feldes, um das richtige Platzhalterformat zu sehen.

</details>

## Verwandte Themen

- [Rechnungs- und Angebotseinstellungen](invoice-quotes-settings.md) — Konfigurieren Sie Standardwerte für Rechnungen, Angebote und Zahlungsbedingungen
- [Rechnungsvorlage und Markenereinstellungen](invoice-template-brands-settings.md) — Passen Sie das Erscheinungsbild Ihrer Rechnungsdokumente an
- [Rechnungen erstellen](../invoicing/creating-invoices.md) — Erstellen und senden Sie professionelle Rechnungen an Kunden
