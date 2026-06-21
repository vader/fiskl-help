---
title: "Wechsel der Abrechnungsmodelle"
description: "Erfahren Sie, wie Sie das Abrechnungsmodell eines Kunden in Atlas ändern, einschließlich des Eigentumsübergangsprozesses für Charge-Us-Konten."
keywords: ["switch billing model", "change billing", "transfer ownership", "Charge Us to Client Pays", "atlas", "billing model"]
sidebar_position: 4
tags:
  - Atlas
  - Billing
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erklärt, wie Sie das Abrechnungsmodell eines Kunden in Atlas ändern.

## Abrechnungsmodelle können nicht direkt geändert werden

Sie können das Abrechnungsmodell eines Kunden nach dem Verbinden des Kontos nicht wechseln. Ein Kunde im Modell „Wir bezahlen" kann nicht in „Kunde bezahlt" konvertiert werden und umgekehrt, nicht innerhalb desselben Kontos.

Wenn Sie das Abrechnungsmodell ändern müssen, hängt der Ansatz von der Richtung ab, in die Sie wechseln möchten.

## Wir bezahlen zu Kunde bezahlt

Wenn Sie möchten, dass ein Kunde im Modell „Wir bezahlen" die Verantwortung für sein Konto übernimmt und sein eigenes Abonnement bezahlt, verwenden Sie den Prozess der Eigentumsübertragung.

### Wie die Eigentumsübertragung funktioniert

1. Initiieren Sie die Eigentumsübertragung von Atlas aus
2. Die Abrechnung für Ihre Kanzlei auf diesem Konto wird beendet
3. Das Konto wechselt in den Archivierungsmodus
4. Der Kunde meldet sich an und greift auf alle seine vorhandenen Daten zu
5. Der Kunde richtet sein eigenes Abonnement ein, um der Kontoeigentümer zu werden
6. Die Beziehung zwischen Ihrer Kanzlei und dem Kunden wird entfernt

Nach der Übertragung ist der Kunde vollständiger Eigentümer des Kontos und verwaltet seine eigene Abrechnung mit Fiskl. Es gibt keine verbleibende Verbindung zwischen den beiden Konten.

Wenn der Kunde nach der Übertragung wieder mit Ihrer Kanzlei zusammenarbeiten möchte, lädt er Sie über den Standardprozess unter **Externer Zugriff** in seinem Fiskl Dashboard ein. Dies erzeugt eine neue Beziehung im Modell „Kunde bezahlt".

### Wann Sie die Eigentumsübertragung verwenden sollten

Dies ist nützlich, wenn sich eine Kundenbeziehung ändert — beispielsweise wenn ein vollständig verwalteter Kunde zu einer Beratungsvereinbarung übergeht und die Kontrolle über sein eigenes Konto und seine Abrechnung übernehmen möchte. Der Kunde behält alle seine Daten ohne Unterbrechung.

## Kunde bezahlt zu Wir bezahlen

Es gibt keinen direkten Weg, um ein Konto im Modell „Kunde bezahlt" in „Wir bezahlen" zu konvertieren. Da der Kunde das Konto im Modell „Kunde bezahlt" besitzt, kann Ihre Kanzlei nicht das Eigentum oder die Abrechnung übernehmen.

Wenn sich beide Parteien einigen, zu „Wir bezahlen" zu wechseln:

1. Unterbrechen Sie die bestehende Beziehung im Modell „Kunde bezahlt"
2. Fügen Sie den Kunden als neues Konto im Modell „Wir bezahlen" von Atlas hinzu
3. Der Kunde erstellt ein neues Konto über Ihren Einladungslink für „Wir bezahlen"
4. Richten Sie das neue Konto ein und migrieren Sie Daten nach Bedarf

:::warning
Dies erzeugt ein neues Fiskl Konto. Das Originalkundenkonto und die Daten bleiben im Besitz des Kunden. Planen Sie die Datenmigration, bevor Sie diesen Prozess starten.
:::

## Verwandte Themen

- [Modell „Wir bezahlen"](bill-us-model.md) — Wie die von der Kanzlei bezahlte Abrechnung funktioniert, einschließlich Details zur Eigentumsübertragung
- [Modell „Kunde bezahlt"](client-pays-model.md) — Wie die vom Kunden bezahlte Abrechnung funktioniert
- [Überblick über Abrechnungsmodelle](overview.md) — Vergleichen Sie beide Modelle nebeneinander
- [Kunden hinzufügen](../client-management/adding-clients.md) — Fügen Sie Kunden mit einem beliebigen Abrechnungsmodell hinzu
