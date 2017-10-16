import express from 'express';
const rotas = express.Router();

rotas.all('/', function(req, res) {
    res.send("TESTE");
})

export default rotas;
