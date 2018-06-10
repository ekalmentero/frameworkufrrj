import express from 'express';
import bodyParser from 'body-parser';
import turmaRouter from './turmaRouter';
import ProfessorController from '../controllers/professorController';

const professor= express.Router();

professor.use(bodyParser.json());

professor.use('/:id_professor/turmas', turmaRouter);

professor.get('/:id', async function(req,res){
  res.send(await ProfessorController.read(req.params.id));
})

professor.route('/')
  .post(async function(req,res){
    res.send(await ProfessorController.create(req.body));
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
