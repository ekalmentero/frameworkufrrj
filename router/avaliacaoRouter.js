import express from 'express';
import bodyParser from 'body-parser';
import avaliacaoController from '../controller/avaliacaoController';

const avaliacao = express.Router({mergeParams: true});

avaliacao.use(bodyParser.json());

avaliacao.get('/:id_avaliacao', async function(req, res){
      res.send(await avaliacaoController.read(req.params.id_avaliacao));
})

avaliacao.route('/')
    .get(async function(req, res){
        if (typeof(req.params.id_turma) != "undefined")
            res.send(await avaliacaoController.readAllByTurma(req.params.id_turma));
        else
            res.send(await avaliacaoController.readAll());
    })
    .post(async function(req,res){
        res.send(await avaliacaoController.create(req.body, req.params.id_turma));
    })
    .patch(async function(req,res){
        if (typeof(req.params.id_turma) != "undefined")
            res.send(await avaliacaoController.update(req.body, req.params.id_turma));
        else
            res.send(await avaliacaoController.update(req.body));
    })
    .delete(async function(req,res){
        res.send(await avaliacaoController.delete(req.body));
  });

export default avaliacao;
