---
title: "Kunden hinzufügen"
description: "Fügen Sie Kunden zu Ihrer Atlas-Praxis hinzu, indem Sie die Abrechnungsmodelle Charge Us oder Client Pays nutzen, oder akzeptieren Sie Einladungen von bestehenden Fiskl-Benutzern."
keywords: ["add clients", "invite clients", "Charge Us", "Client Pays", "client onboarding", "atlas", "accountant portal", "billing verification"]
sidebar_position: 3
tags:
  - Atlas
  - Client Management
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Diese Seite erklärt die drei Möglichkeiten, um Kunden zu Ihrer Praxis in Atlas hinzuzufügen, und hilft Ihnen, die richtige Methode für jede Kundenbeziehung auszuwählen.


## Drei Möglichkeiten, um Kunden hinzuzufügen

Atlas unterstützt drei Methoden, um sich mit Kunden zu verbinden. Jede Methode bestimmt, wer das Konto besitzt, wer die Abrechnung verwaltet und wer die Verbindung trennen kann.

- **Wir berechnen** — Sie erstellen das Kundenkonto und besitzen es. Ihre Kanzlei zahlt das Abonnement.
- **Kunde zahlt (Sie laden ein)** — Sie senden einen Einladungslink. Der Kunde erstellt sein eigenes Konto und zahlt sein eigenes Abonnement.
- **Kunde zahlt (Kunde lädt Sie ein)** — Ein bestehender Fiskl-Benutzer lädt Sie von seinem Konto ein. Der Kunde besitzt das Konto und zahlt sein eigenes Abonnement.

Alle drei Methoden verbinden den Kunden mit einem bestimmten Zweig in Ihrer Praxis.

### Erforderliche Berechtigungen

Um einen Kunden hinzuzufügen, benötigen Sie die Berechtigungen **Abrechnung verwalten** und **Kunden erstellen** für den Zweig. Super Admin-Zugriff setzt alle Berechtigungsanforderungen außer Kraft.

## Wir berechnen — Ein Kundenkonto erstellen

Verwenden Sie diese Methode, wenn Ihre Kanzlei das Abonnement des Kunden bezahlt und das Konto kontrolliert. Sie erstellen das Konto direkt aus Atlas.

### Bevor Sie beginnen

Ihr Zweig muss über eine verifizierte Zahlungsmethode verfügen, bevor Sie Kunden hinzufügen können, bei denen "Wir berechnen" aktiv ist. Dies wird als Abrechnungsverifizierung bezeichnet.

### Abrechnungsverifizierung

Fiskl muss jeden Buchhalter genehmigen, der Abonnements im Namen seiner Kunden bezahlen möchte. Um die Abrechnungsverifizierung zu bestehen, fügen Sie eine aktive Zahlungsmethode hinzu – eine Kreditkarte, Debitkarte oder Banküberweisung, die von Stripe in Ihrer Region unterstützt wird.

**Kartenzahlungen** können je nach Risikowert von Stripe sofortige Genehmigung erhalten. **Lastschriftzahlungen** dauern länger, da die Lastschrift durch das Bankensystem fließen muss. Dies dauert normalerweise drei bis fünf Tage. Sie können keine "Wir berechnen"-Kunden hinzufügen, bis die Zahlungsmethode bestätigt ist.

Wenn Ihr Risikowert der Zahlungsmethode nicht ausreichend ist, wird Fiskl einen Anruf vereinbaren, um eine Beziehung zu Ihrer Praxis aufzubauen. Fiskl tut dies, weil "Wir berechnen"-Abonnements am Ende jedes Abrechnungszeitraums in Rechnung gestellt werden, im Gegensatz zu Standard-Fiskl-Abonnements, die zu Beginn in Rechnung gestellt werden. Dies bedeutet, dass Fiskl das Zahlungsrisiko trägt, bis die Rechnung beglichen ist.

Wenn Ihre Abrechnung bereits verifiziert ist, überspringen Sie diesen Schritt vollständig beim Hinzufügen neuer Kunden.

### So fügen Sie einen "Wir berechnen"-Kunden hinzu

1. Gehen Sie zum **Dashboard** in Atlas
2. Wählen Sie **Kunden** > **Kunde hinzufügen**
3. Wählen Sie **Wir berechnen**
4. Führen Sie die Abrechnungsverifizierung durch, wenn dies Ihr erster "Wir berechnen"-Kunde ist (siehe oben)
5. Wählen Sie den Abonnementplan für den Kunden – dieser kann jederzeit aktualisiert oder herabgestuft werden
6. Geben Sie die grundlegenden Daten des Kunden ein, einschließlich seiner E-Mail-Adresse
7. Geben Sie die Unternehmensdetails des Kunden ein und wählen Sie seine Kontowährung

Fiskl überprüft die E-Mail-Adresse, um sicherzustellen, dass sie auf der gesamten Plattform eindeutig ist. Das Konto wird sofort erstellt, sobald Sie bestätigen.

:::warning
Die Währung, die Sie in diesem Schritt auswählen, wird zur Basiswährung des Kunden in Fiskl. Da Fiskl eine Multi-Währungs-Plattform ist, sind alle Buchhaltungsdaten relativ zu dieser Basiswährung eingerichtet. Sie kann nach der Kontoerstellung nicht geändert werden.
:::

### Was geschieht nach der Erstellung

Nach der Kontoerstellung:

- Der Kunde wird sofort in der Kundenliste Ihres Zweigs angezeigt
- Sie werden der primäre Buchhalter für diesen Kunden (dies kann später geändert werden)
- Die Abrechnung beginnt für Ihr Zweig-Abonnement
- Sie können sofort auf das Konto des Kunden zugreifen
- Der Kunde kann die Buchhalter-Beziehung nicht trennen

### Wann Sie "Wir berechnen" verwenden sollten

Dieses Modell funktioniert gut, wenn Sie vollständige Kontrolle über die Kundenbeziehung wünschen. Es eignet sich für vollständig verwaltete Service-Vereinbarungen, bei denen der Kunde für alle Buchhaltungsarbeiten auf Sie angewiesen ist. Der Kunde kann Sie nicht als seinen Buchhalter entfernen, und Sie verwalten alle Abonnementkosten.

## Kunde zahlt — Sie laden den Kunden ein

Verwenden Sie diese Methode, wenn der Kunde sein Konto besitzen und sein eigenes Fiskl-Abonnement bezahlen sollte. Sie generieren einen Einladungslink aus Atlas und teilen ihn selbst mit dem Kunden.

### So laden Sie einen "Kunde zahlt"-Kunden ein

1. Gehen Sie zum **Dashboard** in Atlas
2. Wählen Sie **Kunden** > **Kunde hinzufügen**
3. Wählen Sie **Kunde zahlt**
4. Atlas generiert einen eindeutigen Einladungslink für den Zweig

Atlas bietet eine Zusammenfassungs-E-Mail, die Sie kopieren können, und einen direkten Link, den Sie kopieren können. Sie senden dies per E-Mail oder Messaging an den Kunden. Atlas sendet die Einladung nicht in Ihrem Namen.

### Was geschieht, nachdem Sie den Link teilen

Der Kunde nutzt den Link, um sein Fiskl-Konto zu erstellen und sein eigenes Setup durchzuführen, einschließlich Hinzufügen einer Zahlungsmethode und Bezahlen seines Abonnements. Sobald der Kunde das Setup abgeschlossen hat, wird automatisch eine Einladung an Sie zurückgesendet, die die beiden Konten verbindet. Sie müssen diese Einladung immer noch von Ihrer Atlas-Seitenleiste aus akzeptieren, bevor Sie auf das Konto des Kunden zugreifen können.

Der Kunde besitzt das Konto und verwaltet sein eigenes Abonnement. Beide Parteien können die Beziehung jederzeit trennen.

### Wo Sie "Kunde zahlt"-Links teilen

"Kunde zahlt"-Links eignen sich gut für breite Verteilung, da der Kunde sein eigenes Konto und die Abrechnung kontrolliert:

- Ihre Kanzlei-Website oder Seite mit Dienstleistungen
- E-Mail-Signaturen
- Angebote und Onboarding-Dokumente
- Marketingmaterialien und soziale Medien

:::tip
Beschriften Sie Ihre Links intern nach Zweck – zum Beispiel „Buchhaltung – Website" oder „Steuerdienste – E-Mail-Kampagne" – damit Sie verfolgen können, welche Kanäle Kunden bringen.
:::

### Wann Sie "Kunde zahlt (Sie laden ein)" verwenden sollten

Dieses Modell eignet sich für Beratungsbeziehungen und Buchhaltungsdienste, bei denen Kunden ihr Konto besitzen möchten. Es funktioniert auch gut, wenn Sie einen einzelnen Link öffentlich teilen und Kunden zu Ihnen kommen lassen möchten.

## Kunde zahlt — Kunde lädt Sie ein

Verwenden Sie diese Methode, wenn ein Kunde bereits ein Fiskl-Konto hat und Sie als seinen Buchhalter hinzufügen möchte. Dieser Ablauf beginnt im Fiskl-Konto des Kunden, nicht in Atlas.

### Wie es funktioniert

1. Geben Sie dem Kunden Ihre Zweig-E-Mail-Adresse
2. Bitten Sie den Kunden, zu **Externer Zugriff** in seinem Fiskl Dashboard zu gehen
3. Der Kunde sendet eine Buchhalter-Einladung unter Verwendung Ihrer Zweig-E-Mail-Adresse
4. Die Einladung wird in Ihrer Atlas-Seitenleiste angezeigt
5. Akzeptieren oder lehnen Sie die Einladung aus Atlas ab

Die Zweig-E-Mail-Adresse ist die zuverlässigste Methode, damit Kunden den richtigen Zweig erreichen. Sie können auch die E-Mail-Adresse eines einzelnen Buchhalters verwenden, aber die Zweig-E-Mail-Adresse stellt sicher, dass die Einladung zum richtigen Ort geroutet wird.

### Wann Sie diese Methode verwenden sollten

Diese Methode ist anwendbar, wenn ein Kunde Fiskl bereits unabhängig nutzt und Ihnen Zugriff gewähren möchte. Es ist auch üblich, wenn ein Kunde von einem anderen Buchhalter zu Ihrer Praxis wechselt.

Vollständige Details zum Überprüfen und Akzeptieren eingehender Einladungen finden Sie unter [Kundeneladungen akzeptieren](accepting-client-invitations.md).

## Vergleich der drei Methoden

| | Wir berechnen | Kunde zahlt (Sie laden ein) | Kunde zahlt (Kunde lädt ein) |
|---|---|---|---|
| **Wer erstellt das Konto** | Sie (aus Atlas) | Kunde (über Ihren Link) | Kunde (unabhängig) |
| **Wer zahlt das Abonnement** | Ihre Kanzlei | Der Kunde | Der Kunde |
| **Wer besitzt das Konto** | Ihre Kanzlei | Der Kunde | Der Kunde |
| **Wer kann trennen** | Nur Sie | Beide Parteien | Beide Parteien |
| **Eingeleitet von** | Atlas | Atlas | Fiskl-Konto des Kunden |
| **Am besten für** | Verwaltete Dienstleistungen | Beratung, Buchhaltung | Bestehende Fiskl-Benutzer |

## Einladungslinks verwalten

Jeder Zweig kann einen "Wir berechnen"-Link und einen "Kunde zahlt"-Link haben. Links sind wiederverwendbar – Sie müssen nicht für jeden Kunden einen neuen Link generieren.

### Link regenerieren

Wenn Sie einen bestehenden Link ungültig machen müssen:

1. Gehen Sie zu **Kunden** > **Kunde hinzufügen**
2. Wählen Sie den Zweig und das Abrechnungsmodell
3. Wählen Sie **Link regenerieren**
4. Bestätigen Sie die Aktion

Der alte Link funktioniert sofort nicht mehr. Teilen Sie den neuen Link mit zukünftigen Kunden.

### Wann Sie regenerieren sollten

Erwägen Sie die Regenerierung eines Links, wenn ein Teammitglied mit Zugriff auf den Link Ihre Praxis verlässt, wenn Sie Ihre Zweige umstrukturieren oder wenn ein Link unbeabsichtigt geteilt wird.

## Nach dem Hinzufügen eines Kunden

Sobald sich ein Kunde mit Ihrem Zweig verbindet, können Sie mit der Arbeit in seinem Konto beginnen. Häufige erste Schritte umfassen das Überprüfen von Unternehmensdetails und Steuereinstellungen, das Verbinden von Bankkonten, das Konfigurieren von Rechnungsvorlagen und das Zuweisen von Teammitgliedern zum Kunden.

Vollständige Details zur Verwaltung laufender Kundenbeziehungen finden Sie unter [Kundenverbindungen](client-connections.md).

## Häufig gestellte Fragen

<details>
<summary>Die Abrechnungsverifizierung dauert länger als erwartet</summary>

Wenn Sie Lastschrift als Zahlungsmethode gewählt haben, dauert die Verifizierung normalerweise drei bis fünf Tage. Kartenzahlungen sind normalerweise sofort, können aber verzögert werden, wenn der Risikowert eine manuelle Überprüfung erfordert. Wenn die Verifizierung nach fünf Geschäftstagen nicht abgeschlossen ist, kontaktieren Sie den Fiskl-Support.

</details>

<details>
<summary>Die E-Mail-Adresse des Kunden wird während des "Wir berechnen"-Setups abgelehnt</summary>

Fiskl erfordert eine eindeutige E-Mail-Adresse für jedes Konto. Wenn die E-Mail bereits verwendet wird, hat der Kunde möglicherweise bereits ein Fiskl-Konto. Verwenden Sie in diesem Fall stattdessen die Methode "Kunde zahlt (Kunde lädt ein)" und bitten Sie den Kunden, Sie von **Externer Zugriff** in seinem Fiskl Dashboard einzuladen.

</details>

<details>
<summary>Buchhalter hat einen "Wir berechnen"-Link verwendet, möchte aber "Kunde zahlt"</summary>

Sie können das Eigentum auf den Kunden übertragen. Dies setzt das Konto in den Archivierungsmodus und der Kunde muss einen Plan abonnieren, um ihn zu nutzen.

</details>

<details>
<summary>Kunde wurde mit dem falschen Zweig verbunden</summary>

Zum Zeitpunkt des Schreibens können Sie dies in Atlas nicht tun. Sie müssen den Fiskl-Support kontaktieren, um das Konto zu verschieben. Diese Funktion wird derzeit evaluiert.

</details>


## Verwandte Themen

- [Kundeneladungen akzeptieren](accepting-client-invitations.md) — Überprüfen und beantworten Sie eingehende Kundeneladungen
- [Kundenverbindungen](client-connections.md) — Verwalten Sie laufende Kundenbeziehungen und Zugriff
- [Kundenzugriffsstufen](client-access-levels.md) — Kontrollieren Sie, was Kunden in ihren Konten sehen und tun können
