import express from 'express';
import bodyParser from 'body-parser';
import disciplina from "./disciplinaRouter"
import professor from "./professorRouter";
import DepartamentoController from '../controllers/departamentoController';

const departamento = express.Router();

departamento.use(bodyParser.json());

departamento.use('/:id_departamento/disciplinas',disciplina);
departamento.use('/:id_departamento/professor',professor);

departamento.get('/:id_departamento', async function(req,res){
    res.send(await DepartamentoController.read(req.params.id_departamento));
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
