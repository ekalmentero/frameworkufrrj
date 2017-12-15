import express from 'express';
import bodyParser from 'body-parser';
import AlunoController from '../controllers/alunoController';
import alunoTurmaRouter from "./alunoTurmaRouter";

const aluno = express.Router({mergeParams: true});

aluno.use(bodyParser.json());

aluno.get('/:id', async function(req,res){
    res.send(await AlunoController.read(req.params.id));
})

aluno.use('/:id_aluno', alunoTurmaRouter);

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
