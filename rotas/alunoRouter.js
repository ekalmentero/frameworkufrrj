import express from 'express';
import bodyParser from 'body-parser';
import AlunoController from '../controllers/alunoController';

const aluno = express.Router({mergeParams: true});

aluno.use(bodyParser.json());

aluno.get('/:id_aluno', async function(req,res){
    res.send(await AlunoController.read(req.params.id));
})

aluno.get('/listarAlunosTurma/:id_turma',async function (req, res){
    res.send(await AlunoController.listarAlunosTurma(req.params.id));
  })

aluno.route('/')
  .post(async function(req,res){
      res.send(await AlunoController.create(req.body, req.params.id_curso, req.params.id_grade));
  })
  .get(async function(req,res){
    res.send(await AlunoController.readAll());
  })
  .patch(async function(req,res){
    if (typeof(req.params.id_curso) != "undefined" && typeof(req.params.id_grade) != "undefined") 
        res.send(await DisciplinaController.update(req.body, req.params.id_curso, req.params.id_grade));
    else
        res.send(await AlunoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await AlunoController.delete(req.body));
  });

export default aluno;