import express from 'express';
import bodyParser from 'body-parser';
import CursoController from '../controllers/cursoController';

const curso = express.Router();

curso.use(bodyParser.json());

curso.get('/:id', async function(req,res){
    res.send(await CursoController.read(req.params.id));
})

curso.route('/')
  .post(async function(req,res){
      res.send(await CursoController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await CursoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await CursoController.delete(req.body));
  });

export default curso;
