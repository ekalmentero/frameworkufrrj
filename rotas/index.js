import express from 'express';
const rotas = express.Router();

rotas.all('/', function(req, res) {
    res.send('Teste');
})

export default rotas;
