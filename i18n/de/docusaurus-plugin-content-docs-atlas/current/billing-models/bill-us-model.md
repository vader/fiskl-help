---
title: "Gebührenmodell"
description: "Erfahren Sie, wie das Charge Us-Abrechnungsmodell in Atlas funktioniert – Ihre Kanzlei bezahlt die Kundenabonnements, besitzt die Konten und kontrolliert die Beziehung."
keywords: ["Charge Us", "Bill Us", "firm pays", "billing model", "atlas", "client subscription", "billing verification", "transfer ownership"]
sidebar_position: 3
tags:
  - Atlas
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erklärt, wie das Charge Us-Abrechnungsmodell funktioniert, einschließlich Rechnungsprüfung, monatlicher Rechnungsstellung und Übertragung der Kontoinhabe auf einen Kunden.

## So funktioniert Charge Us

Mit dem Charge Us-Modell zahlt Ihre Kanzlei das Fiskl-Abonnement für den Kunden. Sie erstellen das Kundenkonto aus Atlas, wählen seinen Plan aus, und die Kosten erscheinen auf Ihrer monatlichen Filialrechnung. Ihre Kanzlei besitzt das Konto und der Kunde kann die Beziehung nicht beenden.

Dieses Modell eignet sich für vollständig verwaltete Servicevereinbarungen, bei denen der Kunde sich auf Sie für alle Buchhaltungsarbeiten verlässt.

## Rechnungsprüfung

Bevor Sie Ihren ersten Charge Us-Kunden hinzufügen können, muss Fiskl Ihre Zahlungsmethode überprüfen. Dies wird als Rechnungsprüfung bezeichnet.

Sie fügen eine aktive Zahlungsmethode hinzu – eine Kreditkarte, Debitkarte oder Banküberweisung, die von Stripe in Ihrer Region unterstützt wird. Die Währung der Zahlungsmethode muss der Filial-Abrechnungswährung entsprechen.

**Kartenzahlungen** können je nach Risikoscore von Stripe sofortige Genehmigung erhalten. **Direktbelastungen** dauern normalerweise drei bis fünf Tage, da die Direktbelastung das Bankensystem durchlaufen muss. Sie können keine Charge Us-Kunden hinzufügen, bis die Zahlungsmethode bestätigt ist.

Wenn Ihr Risikoscore der Zahlungsmethode nicht ausreichend ist, organisiert Fiskl einen Anruf, um eine Beziehung zu Ihrer Kanzlei aufzubauen. Dieser Schritt existiert, weil Charge Us-Abonnements am Ende jeder Abrechnungsperiode abgerechnet werden – im Gegensatz zu Standard-Fiskl-Abonnements, die zu Beginn abgerechnet werden. Fiskl trägt das Zahlungsrisiko, bis die Rechnung bezahlt ist.

Sobald Ihre Abrechnung überprüft ist, überspringen Sie diesen Schritt für alle zukünftigen Charge Us-Kunden in dieser Filiale.

## Charge Us-Kunden hinzufügen

1. Gehen Sie zum **Dashboard** in Atlas
2. Wählen Sie **Kunden** > **Kunden hinzufügen**
3. Wählen Sie **Charge Us**
4. Führen Sie die Rechnungsprüfung durch, wenn dies Ihr erster Charge Us-Kunde ist
5. Wählen Sie den Abonnementplan für den Kunden
6. Geben Sie die grundlegenden Informationen des Kunden ein, einschließlich seiner E-Mail-Adresse
7. Geben Sie die Unternehmensdetails des Kunden ein und wählen Sie seine Kontowährung

Fiskl überprüft die E-Mail-Adresse, um sicherzustellen, dass sie auf der gesamten Plattform eindeutig ist. Das Konto wird sofort erstellt, sobald Sie bestätigen. Sie werden zum primären Buchhalter des Kunden, obwohl dies später geändert werden kann.

:::warning
Die Währung, die Sie auswählen, wird zur Basiswährung des Kunden in Fiskl. Alle Buchhaltungsdaten werden relativ zu dieser Währung eingerichtet. Sie kann nach der Kontoerstellung nicht geändert werden.
:::

Der Abonnementplan kann nach der Erstellung jederzeit aktualisiert oder herabgestuft werden.

## Monatliche Abrechnung

Fiskl generiert pro Monat eine Rechnung pro Filiale für alle Charge Us-Kunden in dieser Filiale. Das Hinzufügen oder Aktualisieren von Kunden während eines Abrechnungszeitraums wird automatisch anteilig berechnet. Eine detaillierte Aufschlüsselung zur Berechnung von Proration, Mid-Cycle-Gebühren und geschätzten Rechnungen finden Sie unter [Charge Us-Abonnements](charge-us-subscriptions.md).

So aktualisieren Sie Ihre Zahlungsmethode oder Rechnungsadresse:

1. Gehen Sie zum Bereich **Abrechnung** in Atlas
2. Fiskl leitet Sie zum Stripe-Kundenportal weiter
3. Aktualisieren Sie Ihre Zahlungsdetails oder Rechnungsadresse
4. Änderungen gelten automatisch für zukünftige Rechnungen

## Übertragung der Kontoinhabe auf einen Kunden

Wenn Sie sich von einem Charge Us-Kunden trennen, können Sie die Kontoinhabe auf den Kunden übertragen. Dies ermöglicht es dem Kunden, alle seine Daten zu behalten und Fiskl unabhängig weiterhin zu nutzen.

### So funktioniert die Übertragung der Kontoinhabe

Wenn Sie die Kontoinhabe übertragen:

1. Die Abrechnung für Ihre Kanzlei stoppt für dieses Konto
2. Das Konto tritt in den Archivmodus ein
3. Der Kunde kann sich anmelden und auf alle seine vorhandenen Daten zugreifen
4. Der Kunde richtet sein eigenes Abonnement ein, um Kontoinhaber zu werden
5. Die Beziehung zwischen Ihrer Kanzlei und dem Kunden wird entfernt

Nach der Übertragung hat der Kunde vollständige Kontoinhabe und verwaltet seine eigene Abrechnung direkt mit Fiskl. Es gibt keine verbleibende Verbindung zwischen den beiden Konten.

Wenn der Kunde Ihre Kanzlei später erneut einbeziehen möchte, müsste er Sie über den Standard-Client Pays-Einladungsprozess aus **Externer Zugriff** in seinem Fiskl-Dashboard einladen.

### Wann die Kontoinhabe übertragen wird

Die Übertragung der Kontoinhabe ist nützlich, wenn eine Kundenbeziehung endet, der Kunde aber sein Fiskl-Konto und seine Daten behalten möchte. Anstatt die Verbindung zu trennen und dem Kunden keinen Zugriff zu geben, bietet die Übertragung dem Kunden einen sauberen Weg zur Unabhängigkeit.

## Wichtigste Merkmale

- Ihre Kanzlei erstellt und besitzt das Kundenkonto
- Ihre Kanzlei zahlt das Abonnement auf einer monatlichen Filialrechnung
- Der Kunde kann die Buchhalter-Beziehung nicht beenden
- Sie wählen den Plan des Kunden und können ihn jederzeit ändern
- Rechnungsprüfung ist erforderlich, bevor Sie Ihren ersten Kunden hinzufügen
- Sie können die Kontoinhabe auf den Kunden übertragen, wenn die Beziehung endet

## Verwandte Themen

- [Charge Us-Abonnements](charge-us-subscriptions.md) – Prorationing, Mid-Cycle-Abrechnung, Plantarife und Zahlungsverwaltung
- [Client Pays-Modell](client-pays-model.md) – So funktioniert kundenseitige Abrechnung
- [Wechsel der Abrechnungsmodelle](switching-billing-models.md) – So ändern Sie das Abrechnungsmodell eines Kunden
- [Kunden hinzufügen](../client-management/adding-clients.md) – Schritt-für-Schritt-Anleitung zum Hinzufügen von Kunden
- [Filialen konfigurieren](../getting-started/configuring-branches.md) – Richten Sie Filialen und Abrechnungswährungen ein
