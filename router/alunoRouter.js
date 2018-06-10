import express from 'express';
import bodyParser from 'body-parser';
import AlunoController from '../controller/alunoController';

const aluno = express.Router({mergeParams: true});

aluno.use(bodyParser.json());

aluno.get('/:id', async function(req,res){
    res.send(await AlunoController.read(req.params.id));
})

aluno.route('/')
  .get(async function(req,res){
    if (typeof(req.params.id_turma) != "undefined"){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.send(await AlunoController.readAllByTurma(req.params.id_turma));
    }
    else
      res.send(404);
  })
  .post(async function(req,res){
      res.send(await AlunoController.create(req.body));
  })
  .get(async function(req,res){
    res.send(await AlunoController.readAll());
  })
  .patch(async function(req,res){
      res.send(await AlunoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await AlunoController.delete(req.body));
  });

export default aluno;