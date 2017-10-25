import express from 'express'
import test from './test/aula/aula.js';

const app = express()

app.use(express.static(__dirname + '/recursos'))

import rotas from './rotas'
app.use(rotas)

import testes from './test'
rotas.use('/teste', test.test)

app.listen(8080, function() {
    console.log("INICIADO");
})
