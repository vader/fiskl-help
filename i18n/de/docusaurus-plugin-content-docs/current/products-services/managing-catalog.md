---
title: "Verwaltung Ihres Katalogs"
description: "Erfahren Sie, wie Sie Produkte und Dienstleistungen in Ihrem Fiskl-Katalog anzeigen, suchen, bearbeiten und löschen können, um genaue Rechnungen zu gewährleisten."
keywords: ["catalog management", "edit products", "search services", "delete product", "products and services"]
sidebar_position: 3
tags:
  - Products
  - Services
  - Catalog
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import TOCInline from '@theme/TOCInline';

Diese Anleitung erklärt, wie Sie Elemente in Ihrem Produkt- und Servicekatalog anzeigen, suchen, bearbeiten und löschen.

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## Bevor Sie beginnen

- Sie benötigen mindestens ein Produkt oder einen Service in Ihrem Katalog. Siehe [Produkte erstellen](/products-services/creating-products) oder [Services verwalten](/products-services/managing-services), um Elemente hinzuzufügen.

## Anzeigen Ihres Katalogs

Wechseln Sie zu **Produkte & Services** in der linken Seitenleiste, um Ihren Katalog zu öffnen. Alle Elemente werden in einer Liste angezeigt mit:

- Name
- Typ
- Preis/Satz
- Währung
- Konto
- Umsatzsteuer
- Einheit
- Zuletzt aktualisiert

Sortieren Sie die Liste, indem Sie die Pfeile neben einem Spaltenkopf auswählen.

Wählen Sie das **Filter**-Symbol, um die Liste nach Folgendem zu filtern:

- **Typ** — Produkt oder Service
- **Währung** — eine oder mehrere Währungen auswählen

Wählen Sie **Zurücksetzen**, um zur vollständigen Katalogliste zurückzukehren.

## Suche in Ihrem Katalog

Wählen Sie das **Such**-Symbol und geben Sie Suchbegriffe ein, um Elemente nach Name oder Beschreibung zu finden.

## Bearbeiten von Produkten und Services

1. Wechseln Sie zu **Produkte & Services**
2. Wählen Sie das Element aus, das Sie bearbeiten möchten
3. Aktualisieren Sie eines der folgenden Felder:
   - **Name**
   - **Dynamische Namenvorlage**
   - **Preis/Satz**
   - **Währung**
   - **Konto**
   - **Umsatzsteuer**
   - **Beschreibung**
4. Fügen Sie Anhänge hinzu oder entfernen Sie diese nach Bedarf
5. Wählen Sie **Speichern**

:::info
Änderungen gelten nur für die zukünftige Verwendung. Bestehende Rechnungen, die das Element bereits enthalten, sind davon nicht betroffen.
:::

## Löschen von Produkten und Services

1. Wechseln Sie zu **Produkte & Services**
2. Aktivieren Sie das Kontrollkästchen neben dem Element, das Sie löschen möchten
3. Wählen Sie die rote Schaltfläche **Löschen** oben in der Liste
4. Bestätigen Sie das Löschen

Bestehende Rechnungen, die das gelöschte Element enthalten, bleiben erhalten. Finanzielle Berichte zeigen weiterhin historische Daten aus dem Element an. Das Element wird dauerhaft aus Ihrem Katalog entfernt und kann nicht zu neuen Rechnungen hinzugefügt werden.

:::warning
Das Löschen ist dauerhaft und kann nicht rückgängig gemacht werden. Falls Sie das Element möglicherweise später benötigen, erwägen Sie, es zu behalten und die Suche zu nutzen, um Ihre aktiven Angebote zu lokalisieren.
:::

## Häufige Probleme

<details>
<summary>Ich habe ein Element gelöscht, es wird aber immer noch auf einer vorhandenen Rechnung angezeigt</summary>

Dies ist das erwartete Verhalten. Das Löschen eines Elements entfernt es aus Ihrem Katalog, ändert aber keine Rechnungen, die bereits mit diesem Element erstellt wurden. Ihre historischen Aufzeichnungen bleiben intakt.

</details>

<details>
<summary>Ich habe ein Element bearbeitet, aber der Preis auf einer vorhandenen Rechnung wurde nicht aktualisiert</summary>

Änderungen an Katalogelementen gelten nur für zukünftige Rechnungen. Bestehende Rechnungen behalten die Details, die beim Erstellen der Rechnung gültig waren. Um die Preisgestaltung auf einer vorhandenen Rechnung zu aktualisieren, öffnen Sie die Rechnung direkt und bearbeiten Sie dort das Zeilenelement.

</details>

<details>
<summary>Ich kann ein Element im Katalog nicht finden</summary>

Wählen Sie das **Filter**-Symbol und überprüfen Sie, ob ein Typ- oder Währungsfilter aktiv ist. Wählen Sie **Zurücksetzen**, um alle Filter zu löschen und zur vollständigen Katalogliste zurückzukehren. Verwenden Sie dann das **Such**-Symbol, um das Element nach Name oder Beschreibung zu lokalisieren.

</details>

<details>
<summary>Ein Katalogelement fügt Rechnungen die falsche Steuer hinzu</summary>

Öffnen Sie das Element und überprüfen Sie das Feld **Umsatzsteuer**. Falls der falsche Steuersatz zugewiesen ist, aktualisieren Sie ihn und wählen Sie **Speichern**. Der korrigierte Satz gilt für neue Rechnungen. Bestehende Rechnungen sind davon nicht betroffen und müssen manuell aktualisiert werden.

</details>

## Fragen Sie Fi

Falls Sie unsicher sind, welches Konto Sie einem Produkt oder Service zuweisen sollen, oder wenn Sie Hilfe beim Einrichten Ihres Katalogs benötigen, fragen Sie Fi. Wählen Sie das **Fi**-Symbol auf einer beliebigen Seite und beschreiben Sie, was Sie benötigen.

Fi kann Ihnen helfen:

- das richtige Sachkonto für ein Produkt oder einen Service zu identifizieren
- zu verstehen, wie sich die Umsatzsteuer-Einstellungen auf Ihre Rechnungen auswirken

## Verwandte Themen

- [Produkte erstellen](/products-services/creating-products) — Fügen Sie neue Produkte zu Ihrem Katalog hinzu
- [Services verwalten](/products-services/managing-services) — Fügen Sie neue Services zu Ihrem Katalog hinzu
- [Rechnungen erstellen](/invoicing/creating-invoices) — Verwenden Sie Katalogelemente als Zeilenpositionen auf Rechnungen
- [Kontenrahmen](/accounting/chart-of-accounts) — Verstehen Sie Kontenzuweisungen
