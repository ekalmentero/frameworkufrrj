import express from 'express';
import bodyParser from 'body-parser';
import predioController from '../controllers/predioController';
import salaController from '../controllers/salaController';
import institutoController from '../controllers/institutoController';

const predio = express.Router({mergeParams: true});

predio.use(bodyParser.json());


predio.get('/:id', async function(req,res){
    res.send(await predioController.read(req.params.id));
})

predio.get('/:id/salas', async function(req,res){
    res.send(await salaController.readAllByPredioId(req.params.id));
})

predio.get('/:id/institutos', async function(req,res){
    res.send(await institutoController.readAllByPredioId(req.params.id));
})

predio.route('/')
  .get(async function(req,res){
      res.send(await predioController.search(req.query));
  })
  .post(async function(req,res){
      res.send(await predioController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await predioController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await predioController.delete(req.query));
  });

export default predio;