import express from 'express';
import bodyParser from 'body-parser';
import TurmaController from '../controllers/turmaController';

const turma= express.Router({mergeParams: true});

turma.use(bodyParser.json());

turma.get('/:id', async function(req,res){

    res.send(await TurmaController.read(req.params.id));
})


turma.route('/')
  .post(async function(req,res){
    res.send(await TurmaController.create(req.body,req.params.id_disciplina));
    //res.send(typeof(ProfessorController.create));
    //console.log("oi");
  })
  .patch(async function(req,res){
    if(typeof(req.params.id_professor)!= "undefined")
      res.send(await TurmaController.insertProfessorTurma(req.body,req.params.id_professor));
    else
      res.send(await TurmaController.update(req.body));
    //res.send("oi");
  })

  .delete(async function(req,res){
    res.send(await TurmaController.delete(req.body));
  })

  .get(async function(req,res){
    if(typeof(req.params.id_professor)!= "undefined")
      res.send(await TurmaController.listarTurmasProfessor(req.params.id_professor));
    if(typeof(req.params.id_aluno)!="undefined")
      res.send(await TurmaController.listarTurmasAluno(req.params.id_aluno));
    else
    res.send(await TurmaController.readAll());
  })

export default turma;
