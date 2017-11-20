import express from 'express';
import bodyParser from 'body-parser';
import disciplinaRouter from "./disciplinaRouter";
import cursoRouter from "./cursoRouter";
import DepartamentoController from '../controllers/departamentoController';

const url = require('url');
const departamento = express.Router();

departamento.use(bodyParser.json());

departamento.use('/:id_departamento/disciplinas', disciplinaRouter);

departamento.use('/:id_departamento/cursos', cursoRouter);

departamento.route('/')
  .get(async function(req,res){
      var query = url.parse(req.url,true).query;
      res.send(await DepartamentoController.read(query.id_departamento));
  })

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
