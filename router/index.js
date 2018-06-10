import express from 'express';

const router = express.Router();

router.all('/', function(req, res) {
    res.send("UFRRJ API v0.1 by Curso de Sistemas de Informação UFRRJ (http://cursos.ufrrj.br/grad/sistemas/)");
})

import calendario from './calendarioRouter';
router.use('/calendarios',calendario);

import disciplinas from './disciplinaRouter';
router.use('/disciplinas',disciplinas);

import curso from './cursoRouter';
router.use('/cursos', curso);

import departamento from './departamentoRouter';
router.use('/departamentos', departamento);

import professor from './professorRouter';
router.use('/professores',professor);

import periodo from './periodoRouter';
router.use('/periodos',periodo);

import turma from './turmaRouter';
router.use('/turmas',turma);

import alunos from './alunoRouter';
router.use('/alunos',alunos);

import avaliacao from './avaliacaoRouter';
router.use('/avaliacoes', avaliacao);

export default router;
