import express from 'express';
import bodyParser from 'body-parser';
import avaliacaoController from '../controllers/avaliacaoController';

const avaliacao = express.Router({mergeParams: true});
const url = require('url');

avaliacao.use(bodyParser.json());

avaliacao.get('/:id_avaliacao', async function(req, res){
      res.send(await avaliacaoController.read(req.params.id_avaliacao));
})

avaliacao.route('/')
    .get(async function(req, res){
        var query = url.parse(req.url,true).query;
        if (typeof(query.id_turma) != "undefined")
            res.send(await avaliacaoController.readAllByTurma(query.id_turma));
        else
            res.send(await avaliacaoController.readAll());
    })
    .post(async function(req, res){
        res.send(await avaliacaoController.create(req.body, req.body.id_turma));
    })
    .patch(async function(req,res){
        if (typeof(req.body.id_turma) != "undefined")
            res.send(await avaliacaoController.update(req.body, req.body.id_turma));
        else
            res.send(await avaliacaoController.update(req.body));
    })
    .delete(async function(req,res){
        res.send(await avaliacaoController.delete(req.body));
  });

export default avaliacao;
