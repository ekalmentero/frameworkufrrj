import express from 'express';

const router = express.Router();

router.all('/', function(req, res) {
    res.send("TESTE");
})

import calendario from './calendarioRouter';
router.use('/calendario',calendario);

import disciplinas from './disciplinaRouter';
router.use('/disciplinas',disciplinas);

import curso from './cursoRouter';
router.use('/curso', curso);

import departamento from './departamentoRouter';
router.use('/departamento', departamento);

import professor from './professorRouter';
router.use('/professor',professor);

import periodo from './periodoRouter';
router.use('/periodo',periodo);

import turma from './turmaRouter';
router.use('/turma',turma);

import alunos from './alunoRouter';
router.use('/alunos',alunos);

import avaliacao from './avaliacaoRouter';
router.use('/avaliacao', avaliacao);

export default router;
