import express from 'express';
import bodyParser from 'body-parser';
import AlunoTurmaController from '../controllers/alunoTurmaController';

const alunoTurma = express.Router({mergeParams: true});

alunoTurma.use(bodyParser.json());

alunoTurma.route('/notaFinal')
  .patch(async function(req, res) {
      var params = req.params;
      res.send(await AlunoTurmaController.updateFinalGrade(req.body, params.id_turma, params.id_aluno));
  })

alunoTurma.route('/')
  .post(async function(req,res){
      res.send(await AlunoTurmaController.create(req.body));
  })
  .get(async function(req,res){
    res.send(await AlunoTurmaController.readAll());
  })

  .delete(async function(req,res){
      res.send(await AlunoTurmaController.delete(req.body));
  })
  .patch(async function(req,res){
      res.send(await AlunoTurmaController.update(req.body));
  })

export default alunoTurma;
