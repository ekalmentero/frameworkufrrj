import express from 'express'
const app = express()

app.use(express.static(__dirname + '/recursos'))

import rotas from './rotas'
app.use(rotas)

import testes from './test'
rotas.use('/teste',testes)

import disciplinas from './rotas/disciplinaRouter'
rotas.use('/disciplinas',disciplinas)

import professor from './rotas/professorRouter'
rotas.use('/professor',professor)

import periodo from './rotas/periodoRouter'
rotas.use('/periodo',periodo)

app.listen(8080, function() {
    console.log("APP : INICIADO");
})
