---
title: Verwaltung von Rückerstattungen
description: Erfahren Sie, wie Sie mit dem Buchhaltungssystem von Fiskl Erstattungen für geschäftliche Ausgaben erfassen und verarbeiten, die aus persönlichen Mitteln bezahlt wurden.
keywords: ["reimbursements", "expense reimbursement", "personal expenses", "liability accounts", "accounting entries"]
sidebar_position: 5
---

# Verwaltung von Rückerstattungen

Diese Anleitung erklärt, wie Sie Rückerstattungen für Geschäftsausgaben erfassen und verarbeiten, die mit persönlichen Mitteln bezahlt wurden. Fiskl bietet zwei Methoden, je nachdem, ob Sie direkte Buchungseinträge oder Ausgabeformulare bevorzugen.

## Warum sollten Sie Rückerstattungen ordnungsgemäß nachverfolgen

Wenn Sie Geschäftsausgaben mit persönlichen Mitteln bezahlen, schuldet Ihnen Ihr Unternehmen Geld. Eine ordnungsgemäße Verfolgung von Rückerstattungen gewährleistet genaue Finanzunterlagen, klare Audit-Trails und ordnungsgemäße Steuerdokumentation.

**Wichtigste Vorteile:**
- Erhält die Trennung zwischen persönlichen und geschäftlichen Transaktionen
- Handhabt zeitliche Unterschiede zwischen Ausgabe und Rückerstattung
- Bietet ordnungsgemäße Dokumentation für Steuerzwecke
- Gewährleistet genaue Abstimmung

## Bevor Sie beginnen

Navigieren Sie zu **Buchhaltung** > **Kontenrahmen** und überprüfen Sie, ob Sie diese Konten haben:

**Erforderlich für beide Methoden:**
- **Rückerstattbar** (Verbindlichkeiten > Sonstige kurzfristige Verbindlichkeiten)

**Nur für Methode 2 erforderlich:**
- **Persönliche Karte** (Vermögen > Zahlungsmittel und Zahlungsmitteläquivalente, Typ: Bargeld in Kasse)

Wenn diese Konten nicht vorhanden sind, erstellen Sie sie, bevor Sie fortfahren.

---

## Methode 1: Direkter Buchungseintrag

Verwenden Sie diese Methode, wenn Sie Ausgaben direkt im Buchhaltungssystem erfassen möchten, ohne das Ausgabeformular zu verwenden.

### Erfassen Sie die Ausgabe

1. Gehen Sie zu **Buchhaltung** > **Kontenrahmen**
2. Wählen Sie das Konto **Rückerstattbar**
3. Wählen Sie **Neue Transaktion**
4. Erstellen Sie eine IN-Transaktion mit einem positiven Betrag
5. Wählen Sie die Ausgabenkategorie (z. B. Reisen oder Bürobedarf)
6. Wählen Sie **Speichern**

Das System erstellt diese Hauptbucheinträge:
- **Sollseite:** Reisekosten (oder Ihre gewählte Kategorie)
- **Habenseite:** Rückerstattbar (Verbindlichkeit)

Dies erfasst, dass Sie persönliches Geld für eine Geschäftsausgabe ausgegeben haben und das Unternehmen Ihnen nun Geld schuldet.

### Verarbeiten Sie die Rückerstattungszahlung

Wenn das Unternehmen Sie zurückzahlt:

1. Gehen Sie zu Ihren **Bankkontotransaktionen**
2. Wählen Sie **Neue Transaktion**
3. Erstellen Sie eine OUT-Transaktion für den Rückerstattungsbetrag
4. Wählen Sie **Rückerstattbar** als Kategorie
5. Wählen Sie **Speichern**

Das System erstellt diese Hauptbucheinträge:
- **Sollseite:** Rückerstattbar (Verbindlichkeit)
- **Habenseite:** Bankkonto

Dies begleicht die Verbindlichkeit und verringert Ihren Kontostand.

---

## Methode 2: Verwendung von Ausgabeformularen

Verwenden Sie diese Methode, wenn Sie Ausgaben über das Ausgabenverwaltungssystem von Fiskl nachverfolgen möchten, bevor Sie die Rückerstattung verarbeiten.

### Schritt 1: Erfassen Sie die Ausgabe

1. Gehen Sie zu **Ausgaben**
2. Wählen Sie **Neue Ausgabe** oder wählen Sie eine vorhandene Ausgabe
3. Geben Sie die Ausgabendetails ein
4. Wählen Sie die Ausgabenkategorie (z. B. Reisen)
5. Aktivieren Sie das Kontrollkästchen **Bargeld bezahlt**
6. Wählen Sie **Persönliche Karte** aus dem Dropdown
7. Wählen Sie **Speichern**

Das System erstellt diese Hauptbucheinträge:
- **Sollseite:** Reisekosten (oder Ihre gewählte Kategorie)
- **Habenseite:** Persönliche Karte (Vermögen)

Dies erfasst, dass Sie persönliches Geld für eine Geschäftsausgabe ausgegeben haben.

### Schritt 2: Erstellen Sie den Rückerstattungsdatensatz

Nach dem Erfassen der Ausgabe:

1. Gehen Sie zu **Buchhaltung** > **Kontenrahmen**
2. Wählen Sie das Konto **Persönliche Karte**
3. Wählen Sie **Neue Transaktion**
4. Erstellen Sie eine Sollseite-Transaktion (positiver Betrag) für den Ausgabenbetrag
5. Wählen Sie **Rückerstattbar** als Kategorie
6. Wählen Sie **Speichern**

Das System erstellt diese Hauptbucheinträge:
- **Sollseite:** Persönliche Karte (Vermögen)
- **Habenseite:** Rückerstattbar (Verbindlichkeit)

Dies erzeugt die Verbindlichkeit, die zeigt, dass das Unternehmen Ihnen nun Geld schuldet.

### Schritt 3: Verarbeiten Sie die Rückerstattungszahlung

Wenn das Unternehmen Sie zurückzahlt:

1. Gehen Sie zu Ihren **Bankkontotransaktionen**
2. Wählen Sie **Neue Transaktion**
3. Erstellen Sie eine OUT-Transaktion für den Rückerstattungsbetrag
4. Wählen Sie **Rückerstattbar** als Kategorie
5. Wählen Sie **Speichern**

Das System erstellt diese Hauptbucheinträge:
- **Sollseite:** Rückerstattbar (Verbindlichkeit)
- **Habenseite:** Bankkonto

Dies begleicht die Verbindlichkeit und verringert Ihren Kontostand.

---

## Wählen Sie die richtige Methode

**Verwenden Sie Methode 1 (Direkter Buchungseintrag), wenn:**
- Sie schnelle, einfache Einträge wünschen
- Sie keine detaillierte Ausgabenverfolgung benötigen
- Sie sich wohl fühlen, direkt mit Hauptbuchkonten zu arbeiten

**Verwenden Sie Methode 2 (Ausgabeformulare), wenn:**
- Sie Ausgaben vor der Rückerstattung separat nachverfolgen möchten
- Sie detaillierte Ausgabendatensätze für Berichte benötigen
- Sie den Ausgabenverwaltungs-Workflow bevorzugen

Beide Methoden erzeugen genaue Buchhaltungsunterlagen. Wählen Sie basierend auf Ihrer Workflowvorliebe.

---

## Was passiert mit Ihren Konten

### Während des Vorgangs

**Rückerstattbar-Konto:**
- Beginnt bei Null
- Erhöht sich, wenn Sie Ausgaben erfassen (Unternehmen schuldet Ihnen)
- Verringert sich, wenn das Unternehmen Sie zurückzahlt
- Kehrt zu Null zurück, wenn vollständig erstattet

**Persönliche Karte-Konto (nur Methode 2):**
- Verfolgt persönliche Gelder, die für Geschäfte ausgegeben wurden
- Erhöht sich, wenn Sie Ausgaben erfassen
- Verringert sich, wenn Sie Rückerstattungsdatensätze erstellen

**Bankkonto:**
- Verringert sich, wenn das Unternehmen die Rückerstattung zahlt
- Spiegelt tatsächliche Barausgaben des Unternehmens wider

### Nach der Rückerstattung

Ihre Jahresabschlüsse zeigen:
- Ausgabenkategorien spiegeln wahre Geschäftskosten wider
- Verbindlichkeitskonten kehren zu Null zurück
- Kontostand spiegelt Rückerstattungszahlungen wider
- Klarer Audit-Trail von Ausgabe bis Zahlung

---

## Häufige Probleme

<details>
  <summary>Der Kontostand des Rückerstattbar-Kontos scheint falsch zu sein</summary>

Überprüfen Sie, ob Sie alle Schritte abgeschlossen haben:
1. Überprüfen Sie, ob die Ausgabe mit Rückerstattbar als Kategorie erfasst wurde
2. Bestätigen Sie, dass die Rückerstattungszahlung gegen Rückerstattbar erfasst wurde
3. Überprüfen Sie, ob die Beträge zwischen Ausgabe und Zahlung übereinstimmen

Wenn die Beträge nicht übereinstimmen, können Sie Teilrückerstattungen haben. Der verbleibende Kontostand zeigt, was noch geschuldet ist.
</details>

<details>
  <summary>Ich habe einen Fehler im Ausgabenbetrag gemacht</summary>

Sie können Transaktionen bearbeiten oder löschen:
1. Gehen Sie zu dem Konto, in dem Sie die Transaktion erfasst haben
2. Suchen Sie die Transaktion in der Liste
3. Wählen Sie die Transaktion aus, um sie zu bearbeiten oder zu löschen
4. Nehmen Sie Ihre Korrektionen vor
5. Wählen Sie **Speichern**

Wenn die Ausgabe bereits erstattet wurde, müssen Sie möglicherweise sowohl den ursprünglichen Eintrag als auch die Rückerstattungszahlung anpassen.
</details>

<details>
  <summary>Kann ich mehrere Ausgaben auf einmal erstatten?</summary>

Ja. Bei der Verarbeitung der Rückerstattungszahlung:
1. Berechnen Sie den Gesamtbetrag, der über alle nicht erstatteten Ausgaben hinweg fällig ist
2. Erstellen Sie eine einzelne Rückerstattungszahlung für den Gesamtbetrag
3. Fügen Sie eine Notiz oder Beschreibung hinzu, die angibt, welche Ausgaben enthalten sind

Der Kontostand des Rückerstattbar-Kontos wird angezeigt, wenn alle Ausgaben erstattet werden.
</details>

---

## Verwandte Themen

- [Kontenrahmen](/accounting/chart-of-accounts) - Erfahren Sie mehr über Kontotypen und Einrichtung
- [Manuelle Transaktionen](/accounting/journal-entries/overview) - Buchungseinträge verstehen
- [Ausgabenverwaltung](/expenses/overview) - Vollständiger Leitfaden zur Ausgabenverfolgung
