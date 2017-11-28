import express from 'express';
import bodyParser from 'body-parser';
import resultadoController from '../controllers/resultadoController';

const resultado = express.Router({mergeParams: true});

resultado.use(bodyParser.json());

/*resultado.get('/:id_resultado', async function(req,res){ sem necessidade de ler um único resultado. readAllByAvaliacao é mais utilizado
    if (typeof(req.params.id_avaliacao) != "undefined")
        res.send(await resultadoController.readByAvaliacao(req.params.id_resultado, req.params.id_avaliacao));
    else
        res.send(await resultadoController.read(req.params.id_resultado));
})*/ 

resultado.route('/')
  .post(async function(req,res){
      res.send(await resultadoController.create(req.body, req.params.id_avaliacao));
  })
  .get(async function(req,res){
    if (typeof(req.params.id_avaliacao) != "undefined")
        res.send(await resultadoController.readAllByAvaliacao(req.params.id_avaliacao));
    else if (typeof(req.params.id_aluno) != "undefined")
        res.send(await resultadoController.readAllByAluno(req.params.id_aluno));
    else
        res.send(await resultadoController.readAll());
  })
  .patch(async function(req,res){
    if (typeof(req.params.id_avaliacao) != "undefined")
        res.send(await resultadoController.update(req.body, req.params.id_avaliacao));
    else
        //res.send(await resultadoController.update(req.body));
        res.sendStatus(403);
  });
  /*.delete(async function(req,res){ sem necessidade de deletar nota, apenas atualizar
      res.send(await resultadoController.delete(req.body));
  });*/

export default resultado;
