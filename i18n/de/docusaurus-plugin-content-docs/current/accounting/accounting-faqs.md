---
title: Häufig gestellte Fragen zur Buchhaltung
description: "Finden Sie schnelle Antworten auf häufig gestellte Fragen zum Rechnungswesen in Fiskl zu Kontenrahmen, Transaktionen, Abstimmung und Berichterstellung."
keywords: ["accounting FAQ", "chart of accounts", "transaction reconciliation", "financial reporting", "double-entry accounting", "multi-currency", "Fiskl support"]
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - FAQ
  - Accounting
---

Dieses Handbuch beantwortet häufig gestellte Fragen zu den Buchführungsfunktionen von Fiskl und hilft Ihnen, häufige Probleme mit Transaktionen, Abstimmungen und Finanzberichten zu lösen. Finden Sie schnelle Lösungen für die Verwaltung des Kontenrahmens, die Bearbeitung mehrerer Währungen und die Generierung von Berichten.

**Zur Navigation:**
- [Allgemeine Buchhaltungsfragen](#allgemeine-buchhaltungsfragen)
- [Transaktionen und Zahlungen](#transaktionen-und-zahlungen)
- [Berichte](#berichte)

---

## Allgemeine Buchhaltungsfragen

### Ist Fiskl ein doppeltes Buchhaltungssystem?

Ja, Fiskl ist eine Buchhaltungsplattform mit doppelter Buchführung und Mehrwährungsunterstützung. Dies gewährleistet genaue und ausgeglichene Finanzaufzeichnungen für Ihr Unternehmen, mit automatischer Währungsumrechnung und Echtzeit-Wechselkursbearbeitung.

Weitere Informationen finden Sie unter [Buchführungs-Kernfunktionen](/accounting/overview).

### Kann ich meinen Kontenrahmen in Fiskl anpassen?

Ja, Sie können Ihren Kontenrahmen an Ihre Geschäftsanforderungen anpassen. So geht's:

1. **Öffnen Sie Ihren Kontenrahmen**

   Gehen Sie zu **Buchhaltung** > **Kontenrahmen**.

2. **Fügen Sie eine neue Kategorie hinzu**

   Wählen Sie die Plus-Schaltfläche (+) neben dem übergeordneten Konto aus, unter dem Sie eine Kategorie hinzufügen möchten.

3. **Geben Sie die Kategoriedetails ein**

   Füllen Sie den Kontonamen, den Kontotyp und andere erforderliche Felder aus.

4. **Speichern Sie Ihre Änderungen**

   Wählen Sie **Speichern**, um die Kategorie zu Ihrem Kontenrahmen hinzuzufügen.

Weitere Details finden Sie unter [Verwaltung des Kontenrahmens](/accounting/chart-of-accounts).

### Wie kann ich ein Konto aus meinem Kontenrahmen löschen?

So entfernen Sie ein Konto:

1. **Öffnen Sie Ihren Kontenrahmen**

   Gehen Sie zu **Buchhaltung** > **Kontenrahmen**.

2. **Archivieren Sie das Konto**

   Wählen Sie **Archivieren** neben dem Konto aus, das Sie entfernen möchten.

:::note
**Was geschieht beim Archivieren:**
- Wenn das Konto keine Transaktionen enthält, wird es dauerhaft gelöscht
- Konten mit Transaktionen werden in den Ordner „Archiviert" verschoben
- Archivierte Konten bleiben in der Buchhaltung aktiv und ihre Transaktionen zählen zu Ihren Unternehmenskonten
- Archivierte Konten werden nicht in der Kontoauswahl angezeigt, wenn neue Transaktionen erstellt werden
- Sie können standardmäßige Systemkonten (wie die unter Betriebseinnahmen) nicht löschen, können sie aber umbenennen
  :::

---

## Transaktionen und Zahlungen

### Was ist die beste Methode zur Verarbeitung einer Rechnungsüberzahlung in Fiskl?

Wenn ein Kunde mehr als den Rechnungsbetrag zahlt, müssen Sie die Überzahlung zur zukünftigen Verwendung verfolgbar machen. So geht's:

**Vorbereitung:**
Erstellen Sie ein Verbindlichkeitskonto namens „Kundenüberzahlungen" in Ihrem Kontenrahmen unter **Verbindlichkeiten** > **Kurzfristige Verbindlichkeiten**.

**Schritte zur Aufzeichnung der Überzahlung:**

1. **Verarbeiten Sie die Banktransaktion**

   Gehen Sie zu Ihrem Bankkonto unter **Banking** und suchen Sie die Überzahlungstransaktion.

2. **Ordnen Sie den Rechnungsbetrag zu**

   Ordnen Sie auf der ersten Zeile den korrekten Betrag der ursprünglichen Rechnung zu.

3. **Erfassen Sie den Überschussbetrag**

   Wählen Sie **Zeile hinzufügen** und erstellen Sie eine zweite Zeile für den Überschussbetrag. Kategorisieren Sie ihn in Ihrem Verbindlichkeitskonto **Kundenüberzahlungen**.

**Schritte zur Anwendung der Überzahlung auf eine zukünftige Rechnung:**

1. **Erstellen Sie die neue Rechnung**

   Erstellen Sie die nächste Rechnung für diesen Kunden wie gewohnt.

2. **Verarbeiten Sie die Zahlungstransaktion**

   Wenn der Kunde zahlt, suchen Sie die Transaktion in Ihrem Bankkonto.

3. **Ordnen Sie den Zahlungsbetrag zu**

   Ordnen Sie auf der ersten Zeile die Zahlung dem Rechnungsbetrag zu.

4. **Wenden Sie das Überzahlungsguthaben an**

   Wählen Sie **Zeile hinzufügen** und erstellen Sie eine zweite Zeile mit einem negativen Betrag (die vorherige Überzahlung). Kategorisieren Sie ihn in Ihrem Verbindlichkeitskonto **Kundenüberzahlungen**.

**Was passiert danach:**
Das Konto „Kundenüberzahlungen" behält einen laufenden Saldo, bis die Überzahlung vollständig angewendet ist. Nach Abschluss kehrt der Kontosaldo zu null zurück.

### Wie erfasse ich uneinbringliche Forderungen in Fiskl?

Wenn eine Rechnung uneinbringlich wird, müssen Sie sie als Forderungsausfallausgabe abschreiben. So funktioniert das:

1. **Markieren Sie die Rechnung als bezahlt**

   Öffnen Sie die Rechnung und wählen Sie **Als bezahlt markieren**. Wählen Sie **Bargeld bei Hand** als Zahlungskonto.

2. **Erfassen Sie die Forderungsausfallausgabe**

   Gehen Sie zu **Aktiva** > **Zahlungsmittel und Zahlungsmitteläquivalente** > **Bargeld bei Hand**.

3. **Erstellen Sie eine OUT-Transaktion**

   Wählen Sie **Transaktion hinzufügen** und wählen Sie **OUT** als Transaktionstyp.

4. **Kategorisieren Sie als Forderungsausfallausgabe**

    - **Betrag**: Geben Sie den Rechnungsbetrag ein
    - **Kategorie**: Wählen Sie Ihr Ausgabenkonto **Forderungsausfälle**
    - **Beschreibung**: Notieren Sie die Rechnungsnummer und den Grund

5. **Speichern Sie die Transaktion**

   Wählen Sie **Speichern**, um die Aufzeichnung abzuschließen.

**Was passiert danach:**

- Ihr Kontosaldo für „Bargeld bei Hand" kehrt zu null zurück
- Forderungsausfälle erscheinen als Ausgabe in Ihrer Gewinn- und Verlustrechnung
- Der Rechnungsstatus ändert sich von offen zu bezahlt und schließt die Forderungen
- Ihr Forderungssaldo sinkt um den Rechnungsbetrag

### Kann ich Kategorien für Lieferanten oder Kunden vordefinieren?

Derzeit unterstützt Fiskl keine Zuweisung von Standardkategorien direkt zu Kunden oder Lieferanten. Sie können jedoch:

- Ihren Kontenrahmen mit spezifischen Kategorien anpassen
- Benutzerdefinierte Kategorien zu Produkten, Dienstleistungen, Zeiteinträgen und Kilometerstand zuweisen
- Fiskls KI-Vorschläge nutzen, die von Ihren Kategorisierungsmustern lernen

Wir verbessern Fiskl ständig, also bleiben Sie gespannt auf zukünftige Updates!

### Wo kann ich Bankregeln für Transaktionsfeeds festlegen?

Banktransaktionsregeln sind derzeit automatisch und können nicht manuell konfiguriert werden. Fiskls KI lernt von Ihren Kategorisierungsmustern und schlägt automatisch Übereinstimmungen für ähnliche Transaktionen vor.

Diese Funktion steht auf unserer Roadmap für zukünftige Verbesserungen.

### Können Banktransaktionen ohne Genehmigung automatisch abgestimmt werden?

Fiskls KI optimiert die Bankabstimmung, indem sie automatisch relevante Kategorien basierend auf Ihrer Historie vorschlägt. Sie können Transaktionen schnell überprüfen und in Batches bestätigen, was den Prozess schneller und effizienter macht.

Aus Sicherheits- und Genauigkeitsgründen erfordern alle Transaktionen Ihre Überprüfung vor der endgültigen Abstimmung.

### Warum werden nicht alle meine Ausgaben in meinen Buchhaltungsberichten angezeigt?

Ausgaben in Fiskl können in zwei Zuständen existieren:

**Eigenständige Ausgaben**: Dies sind Ausgaben, die Sie im Bereich **Ausgaben** aufgezeichnet haben, aber noch nicht mit Ihrer Buchhaltung abgestimmt haben. Sie werden nicht in Ihrem Dashboard oder in Berichten angezeigt, bis sie abgestimmt sind.

**Abgestimmte Ausgaben**: Dies sind Ausgaben, die mit Transaktionen in Ihrem Buchhaltungssystem abgestimmt wurden. Sie werden automatisch in Ihrem Dashboard und in Berichten angezeigt.

**So stellen Sie sicher, dass Ihre Ausgaben in Ihrer Buchhaltung enthalten sind:**

- Wenn Sie eine eigenständige Ausgabe aufgezeichnet haben, stimmen Sie sie mit einer Transaktion in Ihrem Bank-, Kreditkarten- oder Bargeltkonto ab
- Wenn Sie Ausgaben direkt in Ihren Konten hinzufügen (über Geldkonten), werden sie automatisch in Ihrer Buchhaltung angezeigt

Eine detaillierte Erklärung finden Sie in unserem [Leitfaden zum Erfassen von Ausgaben](/accounting/journal-entries/overview).

### Warum sehe ich meine Ausgaben nicht in meiner Gewinn- und Verlustrechnung oder auf dem Dashboard?

Ausgaben, die über den Bereich **Ausgaben** hinzugefügt wurden, werden nicht automatisch in Ihrer [Gewinn- und Verlustrechnung](/reporting/profit-and-loss) oder auf dem Dashboard angezeigt, bis sie mit einer Buchhaltungstransaktion abgestimmt werden.

Der Bereich **Ausgaben** ist dafür gedacht:
- Ausgabendetails zur späteren Abstimmung erfassen
- Ausgaben verfolgen, die Kunden berechnet werden können
- Ausgaben zur Rückerstattung vorbereiten

**So machen Sie Ausgaben in Berichten sichtbar:**

1. **Stimmen Sie die Ausgabe ab**

   Gehen Sie zu **Banking** und gleichen Sie die Ausgabe mit der entsprechenden Bank- oder Kreditkartentransaktion ab.

2. **Überprüfen Sie, dass sie angezeigt wird**

   Überprüfen Sie Ihr **Dashboard** oder Ihren **Gewinn- und Verlustrechnung**-Bericht, um zu bestätigen, dass die Ausgabe jetzt angezeigt wird.

### Warum kann ich eine Ausgabe nicht direkt zu einem Ausgabenkonto hinzufügen?

In Fiskl können Sie Ausgabentransaktionen nur über [Geldkonten](/accounting/journal-entries/guides/manual-transactions) aufzeichnen. Dies gewährleistet eine genaue Verfolgung sowohl der Ausgabe als auch des Kontos, von dem sie bezahlt wurde.

**So funktioniert es:**

1. **Erfassen Sie die Transaktion im entsprechenden Geldkonto**

    - Für Bankzahlungen: Gehen Sie zu **Aktiva** > **Zahlungsmittel und Zahlungsmitteläquivalente** > **[Ihr Bankenname]**
    - Für Kreditkartenzahlungen: Gehen Sie zu **Verbindlichkeiten** > **Kreditkarte** > **[Ihr Kreditkartenname]**

2. **Kategorisieren Sie die Transaktion**

   Weisen Sie der Transaktion innerhalb des Geldkontos die richtige Ausgabenkategorie zu (z. B. „Reisekosten").

**Beispiel:**

Wenn Sie 500 USD für ein Flugticket mit Ihrem Chase-Bankkonto gezahlt haben:

1. Gehen Sie zu **Aktiva** > **Zahlungsmittel und Zahlungsmitteläquivalente** > **Chase Bank**
2. Suchen Sie die Transaktion von 500 USD
3. Wählen Sie **Kategorisieren** und wählen Sie **Reisekosten**
4. Wählen Sie **Speichern**

Diese Methode stellt sicher, dass Ihre Buchhaltung immer zeigt, woher das Geld kam und wohin es ging.

### Kann ich meine Buchhaltungstransaktionen in Massen kategorisieren?

Die Massenkategorisierung ist derzeit vorübergehend deaktiviert, während wir das System verbessern, um genauere Kategorisierung für komplexe Buchhaltungsregeln zu gewährleisten.

**Alternativer Ansatz, während wir diese Funktion verbessern:**

1. **Kategorisieren Sie eine einzelne Transaktion**

   Wählen Sie eine Transaktion aus und weisen Sie sie der entsprechenden Kategorie zu.

2. **Legen Sie Lieferanten und Kunden fest**

   Fügen Sie die Lieferanten- oder Kundeninformationen hinzu, um das Muster zu erstellen.

3. **Überprüfen Sie KI-Vorschläge**

   Während Sie durch Ihre aktuellen Transaktionen scrollen, schlägt Fiskl ähnliche Übereinstimmungen basierend auf dem von Ihnen erstellten Muster vor.

4. **Akzeptieren Sie Vorschläge in Massen**

   Überprüfen Sie die vorgeschlagenen Übereinstimmungen und akzeptieren Sie sie in Batches.

Wir priorisieren Genauigkeit und planen die schrittweise Wiedereinführung der Massenkategorisierung, beginnend mit einfacheren Übereinstimmungen. Wir schätzen Ihre Geduld, während wir an einem zuverlässigeren und effizienteren Kategorisierungsprozess arbeiten.

### Wie kann ich meine Ausgaben wiederkehrend machen?

Wiederkehrende Ausgaben sind noch nicht verfügbar, stehen aber auf unserer Roadmap. Vorerst müssen Sie Ausgaben bei Bedarf eingeben.

Weitere Informationen zur Verwaltung regelmäßiger Ausgaben finden Sie unter [Verbindlichkeitenstransaktionen](/accounting/journal-entries/guides/accounts-payable-transactions).

### Wie kann ich eine Transaktion aus der Abstimmung entfernen?

So entfernen Sie eine Transaktion aus der Abstimmung:

1. **Öffnen Sie das Konto**

   Gehen Sie zum Geldkonto (z. B. Ihr Bankkonto), in dem die Transaktion abgestimmt ist.

2. **Öffnen Sie die Transaktion**

   Wählen Sie die Transaktion aus, um ihre Details anzuzeigen.

3. **Leeren Sie die abgestimmte Zeile**

   Wählen Sie **Zeile löschen** auf der abgestimmten Zeile am unteren Ende der Transaktion.

4. **Speichern Sie die Änderungen**

   Wählen Sie **Speichern**, um die Transaktion aus der Abstimmung zu entfernen.

**Was passiert danach:**
Die Transaktion bleibt im Konto, kehrt aber zu einem nicht abgestimmten Zustand zurück, wodurch Sie sie neu kategorisieren oder unterschiedlich zuordnen können.

### Wie erfasse ich einen Kauf als Anlagevermögen in Fiskl?

Wenn Sie Ausrüstung oder andere langfristige Vermögenswerte kaufen, haben Sie zwei Optionen:

**Option 1: Verwenden Sie Sachanlagevermögen (empfohlen)**

Erfassen Sie die Transaktion unter **Aktiva** > **Sachanlagevermögen** > **Computerausrüstung** (oder die entsprechende Ausrüstungskategorie).

Diese Option ist am besten für Vermögenswerte geeignet, die der Abschreibung unterliegen.

**Option 2: Erstellen Sie ein benutzerdefiniertes Anlageverbrauchskonto**

1. Erstellen Sie ein neues Konto unter **Aktiva** > **Sonstige Kurzfristige Aktiva**
2. Nennen Sie es „Anlagevermögen" oder ähnlich
3. Erfassen Sie Ihre Kauftransaktion dort

:::tip
Option 1 wird für die meisten Anlagevermögen empfohlen, da sie die Abschreibungsverfolgung organisiert hält und bewährten Buchhaltungspraktiken für Vermögenswerte mit Lebenszyklen von mehr als einem Jahr entspricht.
:::

### Wie erfasse ich eine Lieferantengutschrift für eine Ausgabenrückerstattung?

Wenn ein Lieferant Ihnen eine Gutschrift für einen zurückgegebenen Artikel oder eine Rechnungskorrektur ausstellt, müssen Sie den ursprünglichen Ausgabeneintrag rückgängig machen. So erfassen Sie dies in Fiskl.

**Beispielszenario:** Sie haben ursprünglich 500 USD für Bürobedarf gezahlt. Der Lieferant hat eine Gutschrift von 100 USD für beschädigte Artikel ausgestellt.

**Schritte:**

1. **Öffnen Sie das entsprechende Geldkonto**

   Gehen Sie zu **Aktiva** > **Zahlungsmittel und Zahlungsmitteläquivalente** > **[Ihr Bankenname]** (oder das Konto, auf dem die Rückerstattung erscheint).

2. **Erstellen Sie eine IN-Transaktion**

   Wählen Sie **Transaktion hinzufügen** und wählen Sie **IN** als Transaktionstyp.

3. **Geben Sie die Rückerstattungsdetails ein**

    - **Betrag**: Geben Sie den Gutschriftbetrag ein (z. B. 100 USD)
    - **Lieferant**: Wählen Sie den Lieferanten aus, der die Gutschrift ausgestellt hat
    - **Kategorie**: Wählen Sie das gleiche Ausgabenkonto wie die ursprüngliche Transaktion (z. B. **Bürobedarf**)
    - **Beschreibung**: Notieren Sie, dass dies eine Gutschrift ist (z. B. „Gutschrift #CN-001 für beschädigte Waren")

4. **Speichern Sie die Transaktion**

   Wählen Sie **Speichern**, um die Aufzeichnung zu erfassen.

**Was passiert danach:**

- Die Rückerstattung reduziert Ihre Ausgabe in der Gewinn- und Verlustrechnung
- Falls der Lieferant Ihnen Geld schuldet, reduziert sie Ihren Verbindlichkeitensaldo
- Die Transaktion wird bei Ihrer Bankabstimmung angezeigt, wenn die Rückerstattung eingezahlt wird

:::tip
Falls Sie die Rückerstattung noch nicht erhalten haben, aber die Gutschrift verfolgen möchten, können Sie die Aufzeichnung erstellen und in der Beschreibung notieren, dass sie „ausstehend" ist. Aktualisieren Sie sie, wenn die Rückerstattung eingezahlt wird.
:::

---

## Berichte

### Kann ich meinen Kunden Auszüge mit ausstehenden Rechnungen und Zahlungen senden?

Ja, Sie können einen [Kontoauszug](/core-features/accounting/reports/statement-of-accounts)-Bericht erstellen. Dieser Bericht bietet eine umfassende Übersicht über das Kundenkonto, einschließlich:

- Ausstehende Rechnungen
- Eingegangene Zahlungen
- Aktueller Kontosaldo
- Transaktionsverlauf

**So erstellen Sie diesen Bericht:**

1. **Öffnen Sie Berichte**

   Gehen Sie zu **Berichte** > **Kontoauszug**.

2. **Wählen Sie den Kunden aus**

   Wählen Sie den Kunden aus der Dropdown-Liste aus.

3. **Wählen Sie den Zeitraum aus**

   Wählen Sie das Start- und Enddatum für den Berichtszeitraum aus.

4. **Erstellen Sie den Bericht**

   Wählen Sie **Erstellen**, um den Auszug zu generieren.

5. **Senden Sie ihn an Ihren Kunden**

   Wählen Sie **Senden**, um den Auszug direkt per E-Mail zu versenden, oder **Herunterladen**, um ihn als PDF zu speichern.

### Wie kann ich einen Ausgabenbericht erstellen, der zwei Geschäftsjahre vergleicht?

Sie können Ausgaben über zwei Geschäftsjahre hinweg anzeigen und vergleichen, indem Sie den Gewinn- und Verlustrechnung-Bericht verwenden.

**Schritte:**

1. **Öffnen Sie den Gewinn- und Verlustrechnung-Bericht**

   Gehen Sie zu **Berichte** > **Gewinn- und Verlustrechnung**.

2. **Wählen Sie den Vergleichsmodus**

   Wählen Sie die Vergleichsoption und wählen Sie Ihre zwei Geschäftsjahre aus.

3. **Erstellen Sie den Bericht**

   Wählen Sie **Erstellen**, um den Jahresvergleich anzuzeigen.

Der Bericht zeigt sowohl Ihre Einnahmen als auch Ausgaben mit einem Nebeneinander-Vergleich der beiden Geschäftsjahre an, wodurch es einfach wird, Trends und Änderungen zu identifizieren.

### Wie kann ich meinen Kontenrahmen exportieren?

Der Export des vollständigen Kontenrahmens steht auf unserer Roadmap. Derzeit können Sie einzelne Konten exportieren.

**So exportieren Sie ein einzelnes Konto:**

1. **Öffnen Sie das Konto**

   Gehen Sie zu **Buchhaltung** > **Kontenrahmen** und wählen Sie das Konto aus.

2. **Exportieren Sie Transaktionen**

   Wählen Sie **Exportieren**, um den Transaktionsverlauf des Kontos herunterzuladen.

### Warum zeigt mein USD-Bankkonto einen negativen EUR-Saldo an?

Dies ist normales Verhalten in der Mehrwährungsbuchhaltung. Sie müssen nichts korrigieren. Hier erfahren Sie, was vor sich geht und wie Sie überprüfen können, ob es korrekt ist.

**Warum dies geschieht:**

Wenn Sie ein Bankkonto in einer Fremdwährung haben (wie USD), konvertiert Fiskl den Saldo in Ihre Basiswährung (EUR) mit dem aktuellen Wechselkurs. Da sich Wechselkurse täglich ändern, ändert sich der konvertierte EUR-Betrag, obwohl Ihr tatsächlicher USD-Saldo gleich bleibt.

**Beispiel:** Sie haben 10.000 USD auf Ihrem Bankkonto.
- 1. Januar: Wechselkurs 1,10 = 9.091 EUR
- 15. Januar: Wechselkurs 1,05 = 9.524 EUR (433 EUR Gewinn)

Der Unterschied von 433 EUR wird als „Nicht realisierter Wechselkursgewinn" in Ihren Finanzberichten angezeigt.

**So überprüfen Sie, dass dies korrekt ist:**

1. **Überprüfen Sie Ihre Gewinn- und Verlustrechnung**

   Gehen Sie zu **Berichte** > **Gewinn- und Verlustrechnung** und suchen Sie nach dem Posten **Nicht realisierter Wechselkursgewinn oder -verlust** in der Nähe des Endes.

2. **Überprüfen Sie den Ausgleichsbetrag**

   Der negative Saldo in Ihrer USD-Kontos EUR-Spalte sollte (ungefähr) dem Betrag des nicht realisierten Wechselkursgewinns/-verlusts entsprechen.

3. **Überprüfen Sie Ihre Bilanz**

   Gehen Sie zu **Berichte** > **Bilanz**. Ihre Gesamtvermögenswerte sollten sich ordnungsgemäß ausgleichen, wenn das Konto für nicht realisierten Wechselkurs einbezogen ist.

**Was das bedeutet:**

- **Keine Maßnahmen erforderlich**: Fiskl behandelt dies automatisch nach bewährten Buchhaltungspraktiken
- **Nicht echtes Geld**: Dies sind „Papier"-Gewinne oder -verluste, bis Sie die Währung tatsächlich umrechnen
- **Automatischer Ausgleich**: Wenn Sie USD später in EUR umrechnen, wird der nicht realisierte Gewinn/Verlust realisiert und der Saldo korrigiert sich selbst

:::info
Nicht realisierte Wechselkursgewinne und -verluste sind ein Standardbestandteil der Mehrwährungsbuchhaltung. Sie stellen den theoretischen Gewinn oder Verlust dar, wenn Sie heute alle Fremdwährungen in Ihre Basiswährung konvertieren würden. Dies entspricht den International Financial Reporting Standards (IFRS) und allgemein anerkannten Rechnungslegungsprinzipien (GAAP).
:::

---

## Haben Sie noch Fragen?

Wenn Sie die gesuchte Antwort nicht gefunden haben, zögern Sie nicht, [unser Support-Team zu kontaktieren](mailto:support@fiskl.com). Wir sind hier, um Ihnen zu helfen!

---

[//]: # (## Verwandte Ressourcen)

[//]: # ()
[//]: # (- [Rechnungs-FAQs]&#40;#placeholder-link&#41;)

[//]: # (- [Banking-FAQs]&#40;#placeholder-link&#41;)

[//]: # (- [Mehrwährungs-FAQs]&#40;#placeholder-link&#41;)

[//]: # (- [Erste Schritte Anleitung]&#40;#placeholder-link&#41;)
