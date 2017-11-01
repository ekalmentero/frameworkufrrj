import express from 'express';
import bodyParser from 'body-parser';
import DisciplinaController from '../controllers/disciplinaController';

const disciplina = express.Router();

disciplina.use(bodyParser.json());

disciplina.get('/:id', async function(req,res){
    res.send(await DisciplinaController.read(req.params.id));
})

disciplina.route('/')
  .get(async function(req,res){
      res.send(await DisciplinaController.readAll());
  })
  .post(async function(req,res){
      res.send(await DisciplinaController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await DisciplinaController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await DisciplinaController.delete(req.body));
  });

export default disciplina;