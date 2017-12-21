import express from 'express';
import bodyParser from 'body-parser';
import ConteudoController from '../controllers/conteudoController';

const conteudo = express.Router({mergeParams: true});

conteudo.use(bodyParser.json());

conteudo.get('/:id', async function(req,res){
    res.send(await ConteudoController.read(req.params.id));
})

conteudo.route('/')
  .get(async function(req,res){
      res.send(await ConteudoController.readAll());
  })
  .post(async function(req,res){
       res.send(await conteudoController.create(req.body, req.params.id_aula));
  })
  .patch(async function(req,res){
    if (typeof(req.params.id_aula) != "undefined")
        res.send(await conteudoController.update(req.body, req.params.id_aula));
    else
        res.send(await conteudoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await ConteudoController.delete(req.body));
  });

export default conteudo;
