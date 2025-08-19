console.log('Discovery express');

// todo1: importer express
import express from "express";
import vetementRouter from "./routers/vetement.router.js";


//! Constantes
//// Solution basique \\\\
// const PORT = process.env.PORT; 
// const NODE_ENV = process.env.NODE_ENV;
//// Solution \\\\
const { PORT, NODE_ENV } = process.env;

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

// ! Ajouter le mécanisme de routing (via les objets "Router")
app.use('/vetement', vetementRouter);


// todo4: Démarrer le serveur
app.listen(PORT, (error) => {
    if (error) {
        console.log('Erreur lors du démarrage du serveur !'); // signaler l'erreur
        console.log(error); // voir quelle est l'erreur
        return; // Couper le code
    }

    console.log(`Le serveur web tourne sur le port ${PORT} (${NODE_ENV})`);
})

