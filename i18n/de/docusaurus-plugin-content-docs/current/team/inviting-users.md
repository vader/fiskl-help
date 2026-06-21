---
title: "Benutzer einladen und verwalten"
description: "Erfahren Sie, wie Sie Teammitglieder einladen, deren Rollen und Zugriff verwalten und Ihre Teamliste in Fiskl pflegen."
keywords: ["invite users", "manage team", "add team members", "change roles", "deactivate users", "user management"]
sidebar_position: 3
---

Dieses Handbuch erklärt, wie Sie Teammitglieder in Fiskl einladen und verwalten, und hilft Ihnen, zu kontrollieren, wer Zugriff auf die Finanzdaten Ihres Unternehmens hat.

## Bevor Sie beginnen

Stellen Sie sicher, dass Sie Folgendes haben:
- Eigentümer- oder Administratorrolle (erforderlich zur Verwaltung von Benutzern)
- E-Mail-Adresse des Teammitglieds
- Entschieden haben, welche Rolle dem neuen Mitglied zugewiesen werden soll

Weitere Informationen zu [Benutzerrollen und deren Berechtigungen](./roles-permissions).

Nur Eigentümer und Administratoren können Teammitglieder einladen und verwalten. Wenn Sie **Teammitglieder** in der linken Seitenleiste nicht sehen, verfügen Sie nicht über ausreichende Berechtigungen.

## Ein neues Teammitglied einladen

Fügen Sie Teammitglieder hinzu, indem Sie E-Mail-Einladungen verschicken.

**Schritte:**

1. Gehen Sie zu **Teammitglieder** in der linken Seitenleiste
2. Wählen Sie **Neues Mitglied einladen** oder das **+ Symbol**
3. Füllen Sie das Einladungsformular aus:

   **Name**  
   Geben Sie den vollständigen Namen des Teammitglieds ein.  
   Beispiel: John Smith

   **E-Mail-Adresse**  
   Geben Sie ihre geschäftliche E-Mail-Adresse ein. Die Einladung wird dorthin gesendet.  
   Beispiel: john.smith@company.com

   **Rolle**  
   Wählen Sie die entsprechende Rolle aus dem Dropdown-Menü:
   - Eigentümer (nur wenn Sie das Eigentum übertragen)
   - Administrator
   - Billing-Benutzer
   - Benutzer
   - Buchhalter

4. Überprüfen Sie die Informationen
5. Wählen Sie **Einladung senden**

Fiskl versendet die Einladung sofort per E-Mail.

### Was passiert danach

Nachdem Sie die Einladung versendet haben, erhält das Teammitglied eine E-Mail mit einem Einladungslink. Es erscheint in Ihrer Teilnehmerliste mit dem Status „Ausstehend".

Wenn es den Einladungslink auswählt, erstellt es sein Fiskl-Konto und legt ein Passwort fest. Nach Abschluss der Registrierung und dem Anmelden ändert sich der Status in „Aktiv". Es kann nun mit den Berechtigungen seiner zugewiesenen Rolle auf Fiskl zugreifen.

:::tip
Einladungslinks verfallen nach 7 Tagen. Senden Sie die Einladung erneut, wenn das Teammitglied sie bis dahin nicht angenommen hat.
:::

## Überwachung des Einladungsstatus

Verfolgen Sie, welche Einladungen angenommen wurden.

**So zeigen Sie den Einladungsstatus an:**

1. Gehen Sie zu **Teammitglieder**
2. Überprüfen Sie die Statusspalte für jedes Teammitglied:
   - **Aktiv**: Benutzer hat akzeptiert und kann sich anmelden
   - **Ausstehend**: Einladung versendet, aber noch nicht angenommen
   - **Inaktiv**: Benutzer wurde deaktiviert

### Einladungen erneut versenden

Wenn ein Teammitglied die Einladung nicht erhalten hat oder diese abgelaufen ist, können Sie sie erneut versenden.

**Schritte:**

1. Gehen Sie zu **Teammitglieder**
2. Suchen Sie die ausstehende Einladung
3. Wählen Sie **Einladung erneut versenden** oder das Resend-Symbol

Fiskl sendet eine neue Einladungs-E-Mail. Das Teammitglied erhält einen neuen Einladungslink, der weitere 7 Tage gültig ist.

## Benutzerrollen ändern

Aktualisieren Sie Teampositionen, wenn sich ihre Verantwortungen ändern. Rollenänderungen werden sofort wirksam.

**Schritte:**

1. Gehen Sie zu **Teammitglieder**
2. Suchen Sie das Teammitglied in der Liste
3. Wählen Sie ihre aktuelle Rolle (angezeigt als Dropdown)
4. Wählen Sie die neue Rolle aus dem Dropdown-Menü

Die Änderung wird sofort angewendet. Wenn der Benutzer derzeit angemeldet ist, muss er seinen Browser möglicherweise aktualisieren, um die Änderungen zu sehen. Alle Rollenänderungen werden protokolliert und sind für Administratoren und den Eigentümer sichtbar.

**Häufige Rollenübergänge:**
- **Benutzer → Billing-Benutzer**: Wenn Sie mit der Kundenabrechnung beginnen
- **Billing-Benutzer → Administrator**: Wenn Sie die Finanzverwaltung übernehmen
- **Administrator → Billing-Benutzer**: Wenn Sie den Zugriff nach Rollenänderungen reduzieren
- **Beliebige Rolle → Buchhalter**: Beim Konvertieren von internen Mitarbeitern zu schreibgeschütztem Zugriff

:::info
Sie können die Rolle des Eigentümers nicht ändern. Nur der Eigentümer kann das Eigentum auf einen anderen Benutzer übertragen.
:::

## Benutzer aktivieren und deaktivieren

Kontrollieren Sie, ob Teammitglieder sich anmelden können, ohne sie dauerhaft aus dem System zu entfernen.

### Benutzer deaktivieren

Entziehen Sie den Zugriff vorübergehend, während Sie den Benutzer in Ihrem System behalten.

**Schritte:**

1. Gehen Sie zu **Teammitglieder**
2. Suchen Sie das Teammitglied
3. Schalten Sie den Schalter neben seinem Namen auf **Aus**

Der Benutzerstatus ändert sich in „Inaktiv".

**Was passiert bei Deaktivierung:**
- Benutzer kann sich nicht bei Fiskl anmelden
- Alle historischen Daten bleiben erhalten
- Rechnungen, Ausgaben und Zeit, die er erstellt hat, bleiben sichtbar
- Benutzer erscheint in Ihrer Teilnehmerliste als „Inaktiv"
- Keine Gebühren für inaktive Benutzer

**Wann deaktivieren:**
- Teammitglied ist im erweiterten Urlaub
- Projekt des Auftragnehmer ist abgeschlossen, könnte aber zurückkehren
- Vorübergehende Zugriffsentfernung zur Untersuchung
- Benutzer wird in Zukunft zurückkehren

### Benutzer reaktivieren

Stellen Sie den Zugriff für zuvor deaktivierte Benutzer wieder her.

**Schritte:**

1. Gehen Sie zu **Teammitglieder**
2. Suchen Sie den inaktiven Benutzer
3. Schalten Sie den Schalter neben seinem Namen auf **An**

Der Benutzerstatus ändert sich in „Aktiv". Der Benutzer kann sich sofort mit seinen bestehenden Anmeldedaten anmelden.

## Teammitglieder löschen

Entfernen Sie Benutzer dauerhaft, die nicht zurückkehren werden.

**Schritte:**

1. Gehen Sie zu **Teammitglieder**
2. Deaktivieren Sie den Benutzer zunächst durch Umschalten auf **Aus**
3. Nach der Deaktivierung wird neben seinem Namen eine **Schaltfläche zum Löschen** angezeigt
4. Wählen Sie die **Schaltfläche zum Löschen**
5. Bestätigen Sie das Löschen im Dialog

**Was passiert beim Löschen:**
- Benutzer wird dauerhaft aus Ihrer Teilnehmerliste entfernt
- Benutzer kann sich nicht anmelden (auch wenn er Anmeldedaten hatte)
- Alle historischen Daten bleiben erhalten
- Rechnungen, Ausgaben und Zeit, die er erstellt hat, bleiben sichtbar
- Der Benutzer kann nicht reaktiviert werden (muss als Neuer eingeladen werden)

:::warning
Das Löschen eines Teammitglieds ist permanent. Die Person benötigt eine neue Einladung, um wieder Zugriff zu erhalten. Wenn Sie sie möglicherweise in Zukunft benötigen, deaktivieren Sie sie statt sie zu löschen.
:::

## Eigentümer übertragen

Wenn Sie der Eigentümer sind und das Eigentum auf einen anderen Benutzer übertragen müssen, führen Sie diese Schritte aus.

**Schritte:**

1. Gehen Sie zu **Teammitglieder**
2. Stellen Sie sicher, dass der Zielbenutzer bereits Administrator ist
3. Wählen Sie Ihr eigenes Benutzerprofil oder Ihre Einstellungen
4. Wählen Sie **Eigentümer übertragen**
5. Wählen Sie den Administrator, um der neue Eigentümer zu werden
6. Bestätigen Sie die Übertragung

**Wichtige Hinweise:**
- Nur Eigentümer können das Eigentum übertragen
- Der Zielbenutzer muss bereits Administrator sein
- Nach der Übertragung werden Sie Administrator
- Der neue Eigentümer erhält Abonnement- und Abrechnungszugriff
- Übertragungen können nicht automatisch rückgängig gemacht werden (der neue Eigentümer muss zurückübertragen)

**Wann Eigentümer übertragen:**
- Geschäftseigentum wechselt
- Hauptkontaktperson wechselt
- Ruhestand oder Ausscheiden aus dem Unternehmen

## Verwalten Sie Ihre Teammitglieder

### Anzeigen von Teammitgliedern

Die Seite Teammitglieder zeigt wichtige Informationen zu jeder Person in Ihrem Team. Sie können ihren Namen, ihre E-Mail-Adresse, die zugewiesene Rolle und ihren aktuellen Status sehen. Bei aktiven Benutzern können Sie auch sehen, wann sie sich zuletzt angemeldet haben.

### Sortieren und Filtern

Organisieren Sie Ihre Teamansicht nach Status oder Rolle.

**Nach Status filtern:**
- Wählen Sie **Aktiv**, um nur aktive Mitglieder anzuzeigen
- Wählen Sie **Ausstehend**, um nur ausstehende Einladungen anzuzeigen
- Wählen Sie **Inaktiv**, um nur deaktivierte Mitglieder anzuzeigen
- Wählen Sie **Alle**, um alle anzuzeigen

**Nach Rolle filtern:**  
In einigen Ansichten können Sie nach Rolle filtern, um alle Billing-Benutzer, alle Benutzer usw. anzuzeigen.

### Team-Informationen verstehen

**Letzte Anmeldung**  
Zeigt, wann das Teammitglied zuletzt auf Fiskl zugegriffen hat. Dies ist nützlich, um aktive Benutzer zu bestätigen, ungenutzte Konten zu identifizieren und die Sicherheit zu überprüfen.

**Ausstehende Dauer**  
Bei ausstehenden Einladungen wird angezeigt, wie lange Sie die Einladung versendet haben. Führen Sie ein Follow-up durch, wenn es mehr als 2-3 Tage her ist.

## Best Practices für die Teamverwaltung

### Onboarding neuer Mitglieder

Fügen Sie jeweils ein oder zwei Teammitglieder hinzu. Stellen Sie sicher, dass sie ihren Zugriff verstehen, bevor Sie weitere hinzufügen. Wenn jemand innerhalb von 2-3 Tagen nicht angenommen hat, wenden Sie sich direkt an ihn. Einladungs-E-Mails landen manchmal im Spam, also erinnern Sie sie, dort nachzuschauchen.

Geben Sie vollständige Namen ein (nicht Spitznamen), damit jeder weiß, wer Zugriff hat.

### Verwaltung Ihres Teams

Überprüfen Sie Ihre Teilnehmerliste vierteljährlich. Deaktivieren Sie Benutzer, die keinen Zugriff mehr benötigen. Aktualisieren Sie Rollen für Personen mit veränderten Verantwortungen. Löschen Sie Benutzer, die dauerhaft gegangen sind.

Wenn Sie die Rolle einer Person ändern, teilen Sie es ihr mit. Sie könnten verwirrt sein, wenn Funktionen verschwinden oder unerwartet angezeigt werden.

Führen Sie ein separates Dokument auf, das anzeigt, wer welche Rolle haben sollte. Dies erleichtert die Prüfung.

### Best Practices für die Sicherheit

Wenn jemand geht, deaktivieren Sie sein Konto am oder vor seinem letzten Tag. Verwenden Sie immer die Buchhalter-Rolle für externe Buchhaltungsfachleute, nicht Administrator.

## Fehlerbehebung

### Teammitglied hat keine Einladung erhalten

**Mögliche Ursachen und Lösungen:**

**E-Mail im Spam-Ordner**  
Bitten Sie sie, ihre Spam-/Junk-Ordner zu überprüfen. Fügen Sie noreply@fiskl.com zu ihren Kontakten hinzu.

**Tippfehler bei E-Mail-Adresse**  
Überprüfen Sie die E-Mail-Adresse in Ihrer Einladung. Senden Sie die Einladung mit der korrigierten E-Mail-Adresse erneut.

**Firmen-E-Mail-Filter**  
Überprüfen Sie mit ihrer IT-Abteilung. Bitten Sie sie, fiskl.com-E-Mails auf die Whitelist zu setzen.

**Einladung abgelaufen**  
Senden Sie die Einladung erneut. Einladungen verfallen nach 7 Tagen.

### Kann die Rolle eines Benutzers nicht ändern

**Mögliche Ursachen:**
- Sie versuchen, den Eigentümer zu ändern (nur Eigentümer kann das Eigentum übertragen)
- Sie sind ein Administrator und versuchen, die Rolle eines anderen Administrators auf Eigentümer zu ändern
- Sie haben selbst keine Eigentümer- oder Administratorberechtigungen

**Lösung:**  
Stellen Sie sicher, dass Sie über die entsprechenden Berechtigungen verfügen. Administratoren können den Eigentümer nicht ändern oder neue Eigentümer erstellen.

### Benutzer kann nicht auf Funktionen zugreifen, auf die sie zugreifen sollten

**Mögliche Ursachen:**

**Falsche Rolle zugewiesen**  
Überprüfen Sie, ob ihre Rolle ihren Anforderungen entspricht. Weitere Informationen finden Sie unter [Rollen und Berechtigungen](./roles-permissions).

**Ausloggen und erneut anmelden erforderlich**  
Bitten Sie sie, sich komplett abzumelden. Melden Sie sich wieder an, um Berechtigungen zu aktualisieren.

**Browser-Cache-Problem**  
Löschen Sie den Browser-Cache. Versuchen Sie einen anderen Browser.

### Benutzer sieht „Zugriff verweigert"

**Ursache:** Der Benutzer versucht, auf eine Funktion zuzugreifen, die ihre Rolle nicht zulässt.

**Lösung:**  
Überprüfen Sie ihre Rolle und Berechtigungen. Aktualisieren Sie ihre Rolle falls erforderlich. Erklären Sie, welche Funktionen ihrer Rolle zur Verfügung stehen.

---

## Verwandte Themen

- [Benutzerrollen und Berechtigungen](./roles-permissions) - Verstehen Sie, worauf jede Rolle zugreifen kann
- [Übersicht Teammitglieder](./overview) - Erfahren Sie mehr über Teammanagement-Konzepte
- [Benutzereinstellungen](/settings/profile-settings) - So verwalten Teammitglieder ihre eigenen Einstellungen
