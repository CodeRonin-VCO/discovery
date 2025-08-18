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
npm i --save express
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


