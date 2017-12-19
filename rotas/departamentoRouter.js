import express from 'express';
import bodyParser from 'body-parser';
import disciplinaRouter from "./disciplinaRouter";
import DepartamentoController from '../controllers/departamentoController';

const departamento = express.Router();

departamento.use(bodyParser.json());

/*departamento.use('/:id_departamento/disciplinas', disciplinaRouter);

departamento.use('/:id_departamento/cursos', cursoRouter);

departamento.use('/:id_departamento/cursos', cursoRouter);*/


departamento.get('/:id_departamento', async function(req,res){
    res.send(await DepartamentoController.read(req.params.id_departamento));
})

departamento.route('/')
  .get(async function(req,res){
      res.send(await DepartamentoController.search(req.query));
  })
  .post(async function(req,res){
      res.send(await DepartamentoController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await DepartamentoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await DepartamentoController.delete(req.query));
  });

export default departamento;
