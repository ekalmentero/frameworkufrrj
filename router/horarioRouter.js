import express from 'express';
import bodyParser from 'body-parser';
import horarioController from '../controllers/horarioController';

const horario = express.Router();

horario.use(bodyParser.json());

horario.get('/:id', async function(req,res){
    res.send(await horarioController.read(req.params.id));
})

horario.route('/')
  .get(async function(req,res){
      res.send(await horarioController.readAll());
  })
  .post(async function(req,res){
      res.send(await horarioController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await horarioController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await horarioController.delete(req.body));
  });

export default horario;