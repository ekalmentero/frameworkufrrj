import express from 'express';
import AulaController from '../controllers/AulaController.js';
const rotas = express.Router();

/*mudar para post*/
rotas.get('/aula/store', AulaController.store)

export default rotas;
