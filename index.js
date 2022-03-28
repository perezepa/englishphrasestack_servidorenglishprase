// Importar Express
// const express = require('express'); // Forma anterior con comand js
import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
// Importamos el Routing
import phrasesRoutes from './routes/phrasesRoutes.js';

const app = express();
// Procesar Información de tipo Json (Anteriormente se requeria instalar la dependencia de bodyparse, ya no)
app.use(express.json());

// Configurar variables de entorno
dotenv.config();

// Conectar a mongodb
conectarDB();

// Habilitar el Routing
app.use("/api/phrases/", phrasesRoutes); // El use soporta todos los verbos del CRUD

// Crear Puerto de la App
const PORT = process.env.PORT || 4000;

// Arrancar la App
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el Puerto ${PORT}`)
});
