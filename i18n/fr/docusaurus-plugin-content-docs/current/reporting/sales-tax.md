---
title: "Rapport de Taxe de Vente"
description: "Suivez et gérez les activités de taxe de vente avec les outils de reporting complets de Fiskl. Calculez les obligations fiscales, assurez la conformité et préparez des déclarations fiscales précises."
keywords: [ "rapport de taxe de vente", "conformité fiscale", "reporting fiscal", "reporting TVA", "gestion fiscale", "suivi de la taxe de vente" ]
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce guide explique comment utiliser le rapport de Taxe de Vente pour suivre vos activités fiscales, calculer les obligations et assurer
la conformité avec les autorités fiscales.

## Qu'est-ce que le Rapport de Taxe de Vente ?

Le rapport de Taxe de Vente fournit un aperçu complet des activités et obligations fiscales de votre entreprise en matière de taxe de vente. Ce
rapport vous aide à calculer la taxe de vente due aux autorités fiscales, à maintenir la conformité avec les réglementations et à prendre
des décisions financières éclairées basées sur des données fiscales précises.

## Accéder au Rapport

1. **Ouvrir la section Comptabilité**

   Cliquez sur **Comptabilité** dans la barre latérale gauche.

2. **Accéder aux Rapports**

   Sélectionnez **Rapports** dans le menu.

3. **Trouver le rapport de Taxe de Vente**

   Localisez le rapport de Taxe de Vente dans votre liste de rapports automatisés.

## Fonctionnement du Rapport

Le rapport est généré par Numéro de Taxe, également connu sous le nom d'Agence Fiscale. Chaque rapport affiche les données dans la devise de ce
Numéro de Taxe, avec une option pour afficher les conversions en devise de base en parallèle. Vous générez le rapport pour des périodes fiscales
spécifiques, et il inclut les soldes d'ouverture et de clôture pour cette période.

:::info[Méthode de Calcul de la Taxe]
Fiskl calcule la taxe de vente lorsque vous facturez un client ou recevez une facture fournisseur. Le montant de la taxe est enregistré dans le mois
où la facture est créée, indépendamment du moment où le paiement est reçu.
:::

## Configuration de Votre Rapport

### Sélectionner la Taxe et la Période

1. **Choisir votre Numéro de Taxe**

   Sélectionnez l'agence fiscale concernée dans le menu déroulant **Taxe**.

2. **Sélectionner une période de reporting**

   Choisissez une période telle que le dernier trimestre, le mois en cours ou une plage de dates personnalisée.

### Choisir Votre Type de Vue

Basculez entre les vues récapitulative et détaillée en utilisant le commutateur **Résumé/Détails** pour voir différents niveaux d'information.

:::tip[Filtres Sauvegardés]
Vos filtres appliqués sont mis en cache, vous permettant de revenir au même rapport filtré lors de visites ultérieures. Vous pouvez modifier
ces filtres à tout moment.
:::

## Comprendre les Vues du Rapport

<Tabs>
  <TabItem value="summaryView" label="Vue Résumé" default>

La vue résumé présente des montants agrégés pour toutes les sections du rapport. Utilisez l'icône d'engrenage pour personnaliser les colonnes et
afficher :

        - Taux de Taxe
        - Montant Brut
        - Montant Net
        - Montant de la Taxe
        - Montant Brut (devise de base)
        - Montant Net (devise de base)
        - Montant de la Taxe (devise de base)

      </TabItem>

      <TabItem value="detailedView" label="Vue Détaillée">

La vue détaillée affiche les informations au niveau des transactions. Les colonnes par défaut incluent :

      - Date
      - Numéro
      - Nom
      - Client/Fournisseur
      - Catégorie
      - Description
      - Taux de Taxe
      - Montant Brut
      - Montant Net
      - Montant de la Taxe

    </TabItem>

    <TabItem value="customColumns" label="Colonnes Personnalisées">

Personnalisez vos colonnes en utilisant l'icône d'engrenage pour ajouter :

        - Montant Brut (devise de base)
        - Montant Net (devise de base)
        - Montant de la Taxe (devise de base)
        - Taux de change

    </TabItem>

</Tabs>

## Personnalisation de Votre Rapport

Vous pouvez personnaliser la présentation du rapport en modifiant le titre, le sous-titre et en ajoutant des notes. Ces personnalisations sont
temporaires et seront incluses dans toute exportation ou téléchargement, mais elles ne sont pas enregistrées de façon permanente dans le rapport.

## Exportation de Votre Rapport

1. **Cliquer sur le bouton Exporter**

   Trouvez le bouton **Exporter** en haut à droite de l'écran.

2. **Choisir votre format d'exportation**

   Sélectionnez soit Google Sheets soit Excel comme destination d'exportation.

3. **Vérifier votre exportation**

   Le fichier exporté reflétera votre vue actuelle (Résumé ou Détaillée) et inclura tous les filtres que vous avez appliqués.

## Composants du Rapport

<details>
  <summary>Ce que le Rapport de Taxe de Vente inclut</summary>

Le rapport contient les sections suivantes :

- **Soldes d'Ouverture et de Clôture** : Obligation fiscale de début et de fin pour la période sélectionnée
- **Ventes** : Toutes les transactions de vente avec un client assigné qui incluent la taxe de vente
- **Achats** : Toutes les transactions d'achat avec un fournisseur assigné qui incluent la taxe récupérable
- **Autre** : Transactions manuelles associées à ce compte de taxe de vente
- **Taxe Totale** : Somme de la taxe des transactions de Ventes, Achats et Autres
- **Paiements** : Paiements de taxe que vous avez catégorisés avec ce compte de taxe de vente

</details>

## Avantages de l'Utilisation du Rapport de Taxe de Vente

Le rapport de Taxe de Vente vous aide à :

- Assurer la conformité avec les réglementations fiscales et les exigences de déclaration
- Soutenir la planification financière et la prise de décision avec des données fiscales précises
- Préparer votre entreprise aux audits potentiels avec une documentation organisée
- Améliorer l'efficacité opérationnelle en rationalisant les processus de reporting fiscal
- Obtenir des informations stratégiques sur les tendances des ventes et les obligations fiscales au fil du temps

En utilisant efficacement le rapport de Taxe de Vente, vous pouvez naviguer les exigences en matière de taxe de vente avec confiance, maintenir
la stabilité financière et prendre des décisions commerciales éclairées basées sur des informations fiscales précises.