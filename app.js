import express from 'express'
const app = express()

app.use(express.static(__dirname + '/recursos'))

import rotas from './rotas'
app.use(rotas)

import testes from './test'
rotas.use('/teste',testes)

import disciplinas from './rotas/disciplinaRouter'
rotas.use('/disciplinas',disciplinas)

import alunos from './rotas/alunoRouter'
rotas.use('/alunos',alunos)

app.listen(8080, function() {
    console.log("APP : INICIADO");
})
