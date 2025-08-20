# Introduction à ExpressJS

Premières remarques : 

- On pourrait tout faire en NodeJS mais plus long et complexe ==> ExpressJS
- Il existe plusieurs framework sur NodeJS.
- but: définir une API qu'on va pouvoir utiliser.

## Installation
Configurer nodeJS pour un nouveau projet et (optionnel) mettre à jour la version de node
```
npm init
npm i -g npm
```

Configurer Express JS
```
npm i express
```

## Configurer le fichier "package.json"

script
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node --watch src/app.js",
    "start": "node src/app.js"
  }
```

## Mettre en place le serveur

TODO:

- importer express
- Initialiser l'application
- Ajouter une route "hello"
- Démarrer le serveur


## Variables d'environnement (.env)
Permet de créer des constantes d'environnement qui peuvent être définies :

- Fichier .env (doit être lié au projet)
- (Local) Variables d'env du système OS
- (Hébergeurs) Variables d'env injectées

### Lier le fichier et l'application

- Utiliser un package "dotenv"
- Utiliser l'argument "--env-file=..."


## Routing
Mise en place du routing:
- Basique: directement depuis la variable "app" de express
- Avancé: via un objet "Router"

### Paramètres récupérables depuis l'objet "req"
  - req.params → sement dynamique de la route (":id")
  - req.query → SearchParams de la requête (clef valeur → "?category=42&minPrice=50&maxPrice=100")
  - req.body → le corps de la requête (JSON, XML, Données brutes) d'une requête de type "POST, "PUT", ou "PATCH"
  __ATTENTION !!! Ce dernier point nécessite une configuration (vu plus tard)__



<br><br><br><br>

# Suppléments

Un port est un chemin d'accès/ une porte d'entrée au pc de l'utilisateur.

Pour rajouter un fichier .gitignore déjà paramétré (pour éviter que les fichiers .env soient transférés sur gitHub)
```
ctrl shift p
```
```
add gitignore
```
```
node
```

