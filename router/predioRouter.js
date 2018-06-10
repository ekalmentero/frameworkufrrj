import express from 'express';
import bodyParser from 'body-parser';
import predioController from '../controller/predioController';

const predio = express.Router();

predio.use(bodyParser.json());

predio.get('/:id', async function(req,res){
    res.send(await predioController.read(req.params.id));
})

predio.route('/')
  .get(async function(req,res){
      res.send(await predioController.readAll());
  })
  .post(async function(req,res){
      res.send(await predioController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await predioController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await predioController.delete(req.body));
  });

export default predio;