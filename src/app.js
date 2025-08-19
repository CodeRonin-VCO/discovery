console.log('Discovery express');

// todo1: importer express
import express from "express";

//! Constantes
const PORT = 8080; 

// todo2: Initialiser l'application
const app = express();

// todo3: Ajouter une route "hello"
app.get("/coucou", (req, res) => {


    //// Solution basique \\\\
    // res.write('Bonjour');
    // res.end();

    //// Solution \\\\
    res.send('Bonjour, bienvenue sur ton premier serveur localhost !');
});

// todo4: Démarrer le serveur
app.listen(PORT, (error) => {
    if (error) {
        console.log('Erreur lors du démarrage du serveur !'); // signaler l'erreur
        console.log(error); // voir quelle est l'erreur
        return; // Couper le code
    }

    console.log(`Le serveur web tourne sur le port ${PORT}`);
})

