# Cahier des charges

## Presentation Application

Ephemerate est une application permettant de visionner et publier des posts contenant uniquement un titre et une image. Le site est à une portée international et doit avoir une interface en anglais. 

## Description Technique

Le frontend de l'application doit utiliser la technologie React.js
Le backend doit utiliser le framework Python Django et respecter le standard API REST pour les requêtes.
L'application doit fonctionner à 100% sur les navigateurs modernes (Firefox, Edge, Chrome, Safari, Brave, etc...).
L'application doit être une Single Page Application (SPA).

## Description Graphique

### Page Principale

La page principale est séparé en 3 composants distinct :
* Un Header en haut de la page qui affiche le logo et le titre à gauche et le bouton connexion/login à droite
* Un feed à scroll infini qui affiche tous les posts centré au milieu de la page.
* Un formulaire pour créer un post avec un champs pour l'url de l'image, un champs pour le titre et un bouton pour envoyer la requête. Ce formulaire est placé au dessus du feed et est centré au milieu de la page.

### Popup de Connexion

Le popup de connexion s'affiche lorsque l'on clique sur le bouton connexion.


### Theme couleur

Les couleurs doivent être dans un thème pastel provencal (lavande, orange, jaune, etc...). Les couleurs en elle même sont libre.



## Users Case

### Visionner le feed

L'utilisateur arrive sur le site et scroll.

### Poster

L'utilisateur arrive sur le site. Clique sur le bouton login, remplie ses identifiants et clique sur login. Remplie les champs du formulaire (url img et titre) et clique sur le bouton send.

### Créer un compte

L'utilisateur clique sur login, puis l'hyperlien "create new account" qui va modifier le formulaire du popup, remplie les champs username et password puis clique sur le bouton "create". Il revient sur la page principale connecté avec un popup qui l'avertie que son compte a été créé.


## Versionning

Github sera utilisé pour héberger le code source du site et gérer le versionning.