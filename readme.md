## Consigne d'installation

Il faut avoir la version 16 ou supérieure de npm

Si les packages node ne sont pas déjà présent, allez dans app/ et installer les packages avec
	npm install

## Consigne de lancement

Pour lancer l'application react, allez dans le dossier app et executez : npm start

Pour les tests : npm test


Pour lancer l'api django, allez dans django_rest_api/ puis api/ et executez : py manage.py runserver

Pour les tests : py tests.py


## architecture

### dossier mockup

Contient les maquettes des différentes pages

### app

Contient le frontend en react de l'application.

Aussi, selon le système d'exploitation, il faut modifier dans package.json pour la commande start avec celles indiqué ci-dessous

## start command
    "start": "react-scripts start",

## start command on linux
    "start": "react-scripts --openssl-legacy-provider start",

### django_rest_api

Contient le backend en django