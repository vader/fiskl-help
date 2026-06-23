---
title: "Tutorial: Steuersätze einrichten"
description: "Schritt-für-Schritt-Anleitung zum Einrichten von Steuerbehörden, Steuersätzen und Steuergruppen in Fiskl."
keywords: ["tax rates", "tax agency", "tax groups", "VAT", "sales tax", "tutorial", "tax settings"]
sidebar_position: 99
sidebar_class_name: hidden

# AI Tutorial Metadata
document_type: tutorial
task: set-up-tax-rates
difficulty: beginner
estimated_time: "5 minutes"

related_tutorials:
  - create-invoice
  - send-invoice
  - record-expenses
---

# Anleitung: Einrichtung von Steuersätzen

Diese Anleitung führt Sie durch die Einrichtung von Steuerbehörden (auch als Steuernummern bekannt), die Erstellung von Steuersätzen und optional die Gruppierung von Steuern. Am Ende haben Sie Steuersätze, die Sie auf Ihre Rechnungen und Ausgaben anwenden können.

## QUICK_PATH

app_url: https://app.fiskl.com/dashboard/settings/taxes/agencies

Für erfahrene Benutzer, die eine Auffrischung benötigen:

1. Gehen Sie zu **Einstellungen** > **Steuereinstellungen** > **Steuerbehörden**
2. Wählen Sie **Neue Steuerbehörde** und geben Sie den Namen der Behörde, das Land und die Währung ein
3. Wählen Sie **Erstellen**, um die Behörde zu erstellen
4. Wechseln Sie zur Registerkarte **Steuersätze**
5. Wählen Sie **Neuer Steuersatz** und geben Sie den Steuernamen, den Prozentsatz ein und weisen Sie ihn Ihrer Behörde zu
6. Wählen Sie **Erstellen**, um den Satz zu erstellen
7. Optional: Gehen Sie zur Registerkarte **Steuergruppen**, um mehrere Sätze zu kombinieren

## STEP_DETAIL

### Schritt 1: Steuereinstellungen öffnen

app_url: https://app.fiskl.com/dashboard/settings/taxes/agencies

Sie müssen zur Seite Steuereinstellungen navigieren, um zu beginnen.

- Wählen Sie das **Zahnradsymbol** unten links und dann **Steuerverwaltung**
- Die Seite Steuereinstellungen wird mit drei Registerkarten geöffnet: **Steuerbehörden**, **Steuersätze** und **Steuergruppen**

### Schritt 2: Steuerbehörde erstellen

app_url: https://app.fiskl.com/dashboard/settings/taxes/agencies

Eine Steuerbehörde stellt die Behörde dar, an die Sie Steuern zahlen, wie z. B. die HMRC oder das IRS.

- Wählen Sie die Registerkarte **Steuerbehörden**
- Wählen Sie **Neue Steuerbehörde**
- Geben Sie den Namen der Behörde ein (z. B. „HMRC" oder „IRS")
- Wählen Sie das Land und die Währung für diese Behörde
- Wählen Sie den Meldezeitraum, um benachrichtigt zu werden, wann Ihre Steuern fällig sind
- Wählen Sie **Erstellen**

:::tip
Wenn Sie in mehreren Ländern tätig sind, erstellen Sie eine separate Steuerbehörde für jede Gerichtsbarkeit. Zum Beispiel eine für britische Mehrwertsteuer in GBP und eine andere für französische Mehrwertsteuer in EUR.
:::

### Schritt 3: Hauptbuchwert bestätigen

app_url: https://app.fiskl.com/dashboard/accounting/chart-of-accounts

Nach dem Speichern erstellt Fiskl automatisch ein Verbindlichkeitskonto für diese Behörde.

- Gehen Sie zu **Buchhaltung** > **Kontenrahmen** und wählen Sie **Verbindlichkeiten** > **Umsatzsteuer zu zahlen**
- Das Hauptbuchwert hat denselben Namen wie Ihre Steuerbehörde
- Alle Steuertransaktionen, die mit dieser Behörde verknüpft sind, werden auf diesem Konto erfasst

### Schritt 4: Steuersatz hinzufügen

app_url: https://app.fiskl.com/dashboard/settings/taxes/rates

Jetzt, da Sie eine Behörde haben, können Sie Steuersätze erstellen.

- Wählen Sie die Registerkarte **Steuersätze**
- Wählen Sie **Neuer Steuersatz**
- Geben Sie den Steuernamen ein (z. B. „Standard-Mehrwertsteuer" oder „Umsatzsteuer")
- Geben Sie den Steuerprozentsatz ein
- Wählen Sie die **Steuerbehörde**, um diesen Satz zuzuweisen
- Wählen Sie, ob dies eine **Umsatz**- oder **Nicht-Umsatz**-Steuer ist
- Wählen Sie **Erstellen**

:::tip
Sie können mehrere Steuersätze einer Steuerbehörde zuweisen. Beispielsweise können ein Standardsatz von 20% und ein reduzierter Satz von 5% beide zu derselben Behörde gehören. Sie können einen Steuersatz nach seiner Erstellung nicht ändern. Wenn sich der Satz ändert, archivieren Sie den vorhandenen Satz und erstellen Sie einen neuen.
:::

### Schritt 5: Steuergruppe erstellen (optional)

app_url: https://app.fiskl.com/dashboard/settings/taxes/groups

Wenn Ihre Gerichtsbarkeit mehrere Steuern auf derselben Transaktion erfordert, können Sie diese gruppieren.

- Wählen Sie die Registerkarte **Steuergruppen**
- Wählen Sie **Neue Steuergruppe**
- Geben Sie einen Namen für die Gruppe ein (z. B. „BC-Umsatzsteuer" oder „Quebec GST+QST")
- Wählen Sie zwei oder mehr Steuersätze aus, die in die Gruppe aufgenommen werden sollen
- Wenn eine Steuer zusätzlich zu einer anderen berechnet werden soll, aktivieren Sie die Option **Staffelbar**
- Wählen Sie **Erstellen**

### Schritt 6: Steuersätze anwenden

Ihre Steuersätze und Gruppen sind jetzt in ganz Fiskl verfügbar.

- Wählen Sie beim Erstellen einer Rechnung oder Ausgabe den Steuersatz oder die Gruppe aus der Steuerliste auf jedem Zeilenposten
- Der korrekte Steuerbetrag wird basierend auf Ihren Einstellungen automatisch berechnet

## COMMON_FAILURES

### Steuerbehörde beim Hinzufügen eines neuen Satzes nicht zu finden

**Symptom:** Die Auswahlmöglichkeit **Steuerbehörde** ist leer, wenn Sie einen neuen Steuersatz erstellen.

**Ursache:** Sie haben noch keine Steuerbehörde erstellt. Steuersätze erfordern die Zuweisung zu einer Behörde.

**Behebung:**
1. Wählen Sie die Registerkarte **Steuerbehörden**
2. Wählen Sie **Neue Steuerbehörde** und erstellen Sie zunächst Ihre Behörde
3. Wechseln Sie zur Registerkarte **Steuersätze** und versuchen Sie es erneut

### Steuersatz erscheint nicht auf Rechnungen

**Symptom:** Beim Erstellen einer Rechnung wird der erstellte Steuersatz nicht in der Steuerliste angezeigt.

**Ursache:** Der Steuersatz ist möglicherweise nicht als Umsatzsteuer gekennzeichnet, oder er ist einer Behörde mit einer anderen Währung als der Rechnung zugewiesen.

**Behebung:**
1. Gehen Sie zu **Einstellungen** > **Steuereinstellungen** > **Steuersätze**
2. Wählen Sie den Steuersatz aus, um ihn zu bearbeiten
3. Bestätigen Sie, dass er auf **Umsatz**-Steuer (nicht Nicht-Umsatz) eingestellt ist
4. Bestätigen Sie, dass die zugewiesene Behördenwährung mit der Rechnungswährung übereinstimmt
5. Wählen Sie **Speichern**

### Steuersatz kann nicht geändert werden

**Symptom:** Das Steuerprozentsatz-Feld ist deaktiviert, wenn Sie einen vorhandenen Steuersatz bearbeiten.

**Ursache:** Steuersätze können nach ihrer Erstellung nicht geändert werden. Sie müssen den Satz archivieren und einen neuen erstellen.

**Behebung:**
1. Gehen Sie zu **Einstellungen** > **Steuereinstellungen** > **Steuersätze**
2. Archivieren Sie den Steuersatz
3. Erstellen Sie einen neuen Steuersatz mit dem aktualisierten Prozentsatz

### Staffelbare Steuer berechnet sich falsch

**Symptom:** Der Gesamtsteuerbetrag auf einer Transaktion stimmt nicht mit Ihrer erwarteten Staffelberechnung überein.

**Ursache:** Die Option **Staffelbar** ist möglicherweise nicht in der Steuergruppe aktiviert, oder die Steuern sind in der falschen Reihenfolge.

**Behebung:**
1. Gehen Sie zu **Einstellungen** > **Steuereinstellungen** > **Steuergruppen**
2. Wählen Sie die Gruppe aus, um sie zu bearbeiten
3. Bestätigen Sie, dass die Option **Staffelbar** aktiviert ist
4. Überprüfen Sie, dass die Steuern in der richtigen Reihenfolge angeordnet sind (die Basissteuer sollte zuerst erscheinen)
5. Wählen Sie **Speichern**

### Hauptbuchwert nach Behördenerstellung fehlend

**Symptom:** Sie können das Verbindlichkeitskonto für Ihre Steuerbehörde im Kontenrahmen nicht finden.

**Ursache:** Das Hauptbuchwert wird automatisch erstellt, kann aber möglicherweise nicht angezeigt werden, wenn die Seite nicht aktualisiert wurde.

**Behebung:**
1. Gehen Sie zu **Buchhaltung** > **Kontenrahmen**
2. Suchen Sie nach dem Namen Ihrer Steuerbehörde
3. Das Konto sollte unter **Verbindlichkeiten** angezeigt werden
4. Wenn immer noch fehlend, versuchen Sie, die Seite zu aktualisieren oder kontaktieren Sie den Support

## NEXT_STEPS

Jetzt, da Sie Ihre Steuersätze eingerichtet haben, können Sie:

- **Eine Rechnung erstellen** — Wenden Sie Ihre neuen Steuersätze beim Abrechnung von Kunden an. Siehe [Rechnungen erstellen](/invoicing/creating-invoices)
- **Ausgaben erfassen** — Weisen Sie Ihren Geschäftsausgaben Steuersätze zu. Siehe [Ausgaben-Übersicht](/expenses/overview)
- **Umsatzsteuerbericht ausführen** — Überprüfen Sie Ihre Steuerverpflichtungen über einen Datumsbereich. Siehe [Umsatzsteuerbericht](/reporting/sales-tax)
- **Ihren Kontenrahmen verwalten** — Überprüfen Sie die automatisch erstellten Steuerschuldkonten. Siehe [Kontenrahmen](/accounting/chart-of-accounts)
