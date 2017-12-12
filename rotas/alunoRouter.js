import express from 'express';
import bodyParser from 'body-parser';
import resultadoRouter from "./resultadoRouter";
import AlunoController from '../controllers/alunoController';

const aluno = express.Router({mergeParams: true});

aluno.use(bodyParser.json());

aluno.use('/:id_aluno/resultados', resultadoRouter);

aluno.get('/:id_aluno', async function(req,res){

    if (typeof(req.params.id_curso) != "undefined")
        //res.send(await AlunoController.readByCurso(req.params.id_aluno, req.params.id_curso));
        res.send(403);
    else if (((req.params.id_aluno).length) < 10)
       res.send(await AlunoController.read(req.params.id_aluno)); //Serviço: Buscar aluno por id
    else
        res.send(await AlunoController.readByMatricula(req.params.id_aluno)); //Serviço: Buscar aluno por matrícula*/
})

/*aluno.get('/listarAlunosTurma/:id_turma',async function (req, res){ //Serviço: Listar alunos de uma turma
    res.send(await AlunoController.listarAlunosTurma(req.params.id_turma));
  })*/

aluno.route('/')
  .post(async function(req,res){
      res.send(await AlunoController.create(req.body, req.params.id_curso));
  })
  .get(async function(req,res){
    if (typeof(req.params.id_curso) != "undefined")
        res.send(await AlunoController.readAllByCurso(req.params.id_curso));
    else if(typeof(req.params.id_turma)!="undefined")
        res.send(await AlunoController.listarAlunosTurma(req.params.id_turma));//Serviço: Listar alunos de uma turma
    else
        res.send(await AlunoController.readAll());
  })
  .patch(async function(req,res){
    if (typeof(req.params.id_curso) != "undefined")
        res.send(await AlunoController.update(req.body, req.params.id_curso));
    else
        res.send(await AlunoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await AlunoController.delete(req.body));
  });

export default aluno;
