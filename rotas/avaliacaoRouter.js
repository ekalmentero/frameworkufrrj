import express from 'express';
import bodyParser from 'body-parser';
import avaliacaoController from '../controllers/avaliacaoController';

const avaliacao = express.Router();

avaliacao.use(bodyParser.json());

avaliacao.get('/:id', async function(req,res){
    res.send(await avaliacaoController.read(req.params.id));
})

avaliacao.get('/listarAvaliacoesTurma/:id', async function(req, res){
    res.send(await avaliacaoController.listarAvaliacoesTurma(req.params.id));
})

avaliacao.route('/')
  .post(async function(req,res){
      res.send(await avaliacaoController.create(req.body));
  })
  .get(async function(req,res){
    res.send(await avaliacaoController.readAll());
  })
  .patch(async function(req,res){
      res.send(await avaliacaoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await avaliacaoController.delete(req.body));
  });

export default avaliacao;