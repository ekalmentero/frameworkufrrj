import express from 'express';
import bodyParser from 'body-parser';
import AlunoController from '../controllers/alunoController';
import turma from './turmaRouter';

const aluno = express.Router();

aluno.use(bodyParser.json());
aluno.use('/:id_aluno/turma',turma)

aluno.get('/:id', async function(req,res){
    res.send(await AlunoController.read(req.params.id));
})

aluno.route('/')
  .post(async function(req,res){
      res.send(await AlunoController.create(req.body));
  })
  .get(async function(req,res){
    res.send(await AlunoController.readAll());
  })
  .patch(async function(req,res){
      res.send(await AlunoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await AlunoController.delete(req.body));
  });

export default aluno;
