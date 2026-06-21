---
title: Wie Fiskl die Abstimmung von Konten durchführt
sidebar_position: 13
description: "Erfahren Sie, wie die automatisierte Abstimmungsfunktion von Fiskl die Bankkontoauszugsabstimmung mit Massen-Transaktionsverarbeitung und intelligenter Fehlererkennung optimiert."
keywords: ["Fiskl reconciliation automation", "bulk transaction matching", "automated bank reconciliation", "transaction verification Fiskl"]
slug: /core-features/accounting/journal-entries/guides/how-fiskl-handles-reconciliation
toc_min_heading_level: 2
toc_max_heading_level: 4 
tags: 
  - Accounting 
  - Reconciliation 
  - Automation
---

Die Abstimmungsfunktion von Fiskl ermöglicht es Ihnen, Ihre Kontoauszüge schnell mit Ihren erfassten Transaktionen zu vergleichen, um Übereinstimmungen leicht zu identifizieren und Abweichungen zu beheben.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
  <iframe
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
    src="https://demo.fiskl.com/e/cmdhdov1h000004l7eugt0vgw/tour"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowtransparency="true"
  ></iframe>
</div>

## Arten von Abstimmungsszenarios

Sie werden typischerweise auf zwei Abstimmungsszenarios stoßen:
1. **Perfekte Übereinstimmung:** Ihr Kontoauszugssaldo stimmt genau mit Ihrem Fiskl-Kontosaldo überein
2. **Abweichungen vorhanden:** Es bestehen Unterschiede zwischen Ihrem Kontoauszug und den Fiskl-Datensätzen, die untersucht und behoben werden müssen
