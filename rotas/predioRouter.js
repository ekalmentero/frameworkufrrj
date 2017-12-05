import express from 'express';
import bodyParser from 'body-parser';
import predioController from '../controllers/predioController';

const predio = express.Router();

predio.use(bodyParser.json());


/*
 * Comentei esta função para poder usar a função de busca

predio.get('/:id', async function(req,res){
    res.send(await predioController.read(req.params.id));
})
*/

predio.get('/search', async function(req,res){
    res.send(await predioController.search(req.query));
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