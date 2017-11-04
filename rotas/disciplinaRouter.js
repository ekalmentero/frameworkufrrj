import express from 'express';
import bodyParser from 'body-parser';
import DisciplinaController from '../controllers/disciplinaController';

const disciplina = express.Router({mergeParams: true});

disciplina.use(bodyParser.json());

disciplina.get('/:id_disciplina', async function(req,res){
    res.send(await DisciplinaController.read(req.params.id_disciplina));
})

disciplina.route('/')
  .get(async function(req,res){
      res.send(await DisciplinaController.readAll());
  })
  .post(async function(req,res){
      res.send(await DisciplinaController.create(req.body, req.params.id_departamento));
  })
  .patch(async function(req,res){
      if (typeof(req.params.id_departamento) == "undefined") 
        res.send(await DisciplinaController.update(req.body));
      else
        res.send(await DisciplinaController.update(req.body, req.params.id_departamento));
  })
  .delete(async function(req,res){
      res.send(await DisciplinaController.delete(req.body));
  });

export default disciplina;