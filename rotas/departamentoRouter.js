import express from 'express';
import bodyParser from 'body-parser';
import DepartamentoController from '../controllers/departamentoController';

const departamento = express.Router();

departamento.use(bodyParser.json());

departamento.get('/:id', async function(req,res){
    res.send(await DepartamentoController.read(req.params.id));
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
