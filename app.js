import express from 'express'
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());

import rotas from './rotas'
app.use(rotas)

import calendario from './rotas/calendarioRouter'
rotas.use('/calendario',calendario)

import disciplinas from './rotas/disciplinaRouter'
rotas.use('/disciplinas',disciplinas)

import curso from './rotas/cursoRouter'
rotas.use('/curso', curso)

import departamento from './rotas/departamentoRouter'
rotas.use('/departamento', departamento)

import professor from './rotas/professorRouter'
rotas.use('/professor',professor)

import periodo from './rotas/periodoRouter'
rotas.use('/periodo',periodo)

import turma from './rotas/turmaRouter'
rotas.use('/turma',turma)

import alunos from './rotas/alunoRouter'
rotas.use('/alunos',alunos)

import avaliacao from './rotas/avaliacaoRouter'
rotas.use('/avaliacao', avaliacao)

app.listen(8080, function() {
    console.log("APP : INICIADO");
})
