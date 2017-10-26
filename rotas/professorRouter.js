import express from 'express';
import bodyParser from 'body-parser';
import ProfessorController from '../controllers/professorController';

const professor= express.Router();

professor.use(bodyParser.json());

professor.route('/')
  .post(async function(req,res){
    //res.send(await ProfessorController.create(req.body));
    res.send(typeof(ProfessorController.create);
    //console.log("oi");
  })

export default professor;
