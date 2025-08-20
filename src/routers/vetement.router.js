// Objectif ici: gérer les routes

import { Router } from "express";
import vetementController from "../controllers/vetement.controller.js";

const vetementRouter = Router();
// ---- Routes simples ----
// vetementRouter.get('/vetement/demo', vetementController.demo);
// vetementRouter.get('/vetement/salut', vetementController.exemple);
// ---- Ecriture sans répétition ----
vetementRouter
    .get('/demo', vetementController.demo)
    .get('/exemple', vetementController.exemple)

// ---- Deux routes différentes ----
vetementRouter
    .get('/detail/:id', vetementController.detail) // -> localhost:8080/vetement/detail/42
    .get('/d/:id', vetementController.detail)      // -> localhost:8080/vetement/d/42

// ---- Même routes mais avec segments optionnels ----
vetementRouter
    .get('/d{etail}/:id', vetementController.detail) // -> localhost:8080/vetement/detail/42

// ---- Routes avec plein de paramètres dans mon url ----
// localhost:8080/vetement/search?category=42&minPrice=50&maxPrice=100
vetementRouter
    .get("/search", vetementController.search)
export default vetementRouter;