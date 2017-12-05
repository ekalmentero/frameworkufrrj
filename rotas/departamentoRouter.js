import express from 'express';
import bodyParser from 'body-parser';
import disciplinaRouter from "./disciplinaRouter";
import cursoRouter from "./cursoRouter";
import DepartamentoController from '../controllers/departamentoController';


const departamento = express.Router();

departamento.use(bodyParser.json());

/*
 * Comentei essas requests, para poder usar o search

departamento.use('/:id_departamento/disciplinas', disciplinaRouter);

departamento.use('/:id_departamento/cursos', cursoRouter);

departamento.get('/:id_departamento', async function(req,res){
    res.send(await DepartamentoController.read(req.params.id_departamento));
})
*/

departamento.get('/search', async function(req,res){
    res.send(await DepartamentoController.search(req.query));
})

departamento.route('/')
  .post(async function(req,res){
      res.send(await DepartamentoController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await DepartamentoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await DepartamentoController.delete(req.body));
  });

export default departamento;
