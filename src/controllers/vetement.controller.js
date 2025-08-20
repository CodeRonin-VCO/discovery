// Objectif: traitement des requêtes

const vetementController = {
    demo: (req, res) => {

        res.sendStatus(501)
    },
    exemple: (req, res) => {

        const data = {
            message: "Ceci est un exemple"
        }
        res.json(data);
    },
    detail: (req, res) => {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            res.status(400).send(`Message d'erreur !!!`);
            return;
        }

        res.send(`Détail de l'élément ${id}...`)
    },
    search : (req, res) => {
        console.log(req.query);
        console.log(req);
        
    }
};

export default vetementController;