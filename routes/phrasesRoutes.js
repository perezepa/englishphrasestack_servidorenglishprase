import express from "express";
const router = express.Router();

// Importar los controladores
import { agregarPhrases, obtenerPhrases, obtenerPhrase, editarPhrase, eliminarPhrase } from "../controllers/phrasesControlles.js";

// Peticiones CRUD
router.post("/", agregarPhrases); // Crea una nueva Phrase

router
  .get("/:id", obtenerPhrase) // Obtener una Phrase por su id
  .get("/", obtenerPhrases) // Obtener todas las Phrases
  .put("/:id/", editarPhrase) // Editar una Phrase por su id
  .delete("/:id/", eliminarPhrase); // Eliminar una Phrase por su id

export default router;