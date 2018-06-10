import express from 'express';
import bodyParser from 'body-parser';
import ConteudoController from '../controller/conteudoController';

const conteudo = express.Router();

conteudo.use(bodyParser.json());

conteudo.get('/:id', async function(req,res){
    res.send(await ConteudoController.read(req.params.id));
})

conteudo.route('/')
  .get(async function(req,res){
      res.send(await ConteudoController.readAll());
  })
  .post(async function(req,res){
      res.send(await ConteudoController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await ConteudoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await ConteudoController.delete(req.body));
  });

export default conteudo;
