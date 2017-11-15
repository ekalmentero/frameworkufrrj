import express from 'express';
import bodyParser from 'body-parser';
import ProfessorController from '../controllers/professorController';
import turma from './turmaRouter';

const professor= express.Router({mergeParams: true});

professor.use(bodyParser.json());

professor.use('/:id_professor/turma',turma);

professor.get('/:id', async function(req,res){
  res.send(await ProfessorController.read(req.params.id));
})

professor.route('/')
  .post(async function(req,res){
    res.send(await ProfessorController.create(req.body, req.params.id_departamento));
    //res.send(typeof(ProfessorController.create));
    //console.log("oi");
  })
  .patch(async function(req,res){
    res.send(await ProfessorController.update(req.body));
    //res.send("oi");
  })

  .delete(async function(req,res){
    res.send(await ProfessorController.delete(req.body));
  })

  .get(async function(req,res){
    res.send(await ProfessorController.readAll());
  })

export default professor;
