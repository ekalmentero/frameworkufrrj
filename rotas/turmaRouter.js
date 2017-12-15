import express from 'express';
import bodyParser from 'body-parser';
import alunoRouter from "./alunoRouter";
import TurmaController from '../controllers/turmaController';

const turma = express.Router({mergeParams: true});

turma.use(bodyParser.json());

turma.get('/:id', async function(req,res){
  res.send(await TurmaController.read(req.params.id));
})

turma.use('/:id_turma/aluno', alunoRouter);

turma.route('/')
  .post(async function(req,res){
    res.send(await TurmaController.create(req.body));
    //res.send(typeof(ProfessorController.create));
    //console.log("oi");
  })
  .patch(async function(req,res){
    res.send(await TurmaController.update(req.body));
    //res.send("oi");
  })

  .delete(async function(req,res){
    res.send(await TurmaController.delete(req.body));
  })

  .get(async function(req,res){
    res.send(await TurmaController.readAll());
  })

export default turma;
