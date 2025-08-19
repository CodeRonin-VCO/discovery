// Objectif ici: gérer les routes

import { Router } from "express";
import vetementController from "../controllers/vetement.controller.js";

const vetementRouter = Router();
// vetementRouter.get('/vetement/demo', vetementController.demo);
// vetementRouter.get('/vetement/salut', vetementController.exemple);
// ---- Ecriture sans répétition ----
vetementRouter
    .get('/demo', vetementController.demo)
    .get('/exemple', vetementController.exemple)

export default vetementRouter;