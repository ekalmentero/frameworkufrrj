import express from 'express';
import bodyParser from 'body-parser';
import MaterialController from '../controllers/materialController';

const material = express.Router({mergeParams: true});

material.use(bodyParser.json());

material.get('/:id_material', async function(req,res){
    if (typeof(req.params.id_turma) != "undefined")
        res.send(await materialController.readByTurma(req.params.id_material, req.params.id_turma));
    else
        res.send(await materialController.read(req.params.id_material));
})

material.route('/')
  .get(async function(req,res){
    if (typeof(req.params.id_turma) != "undefined")
        res.send(await materialController.readAllByTurma(req.params.id_turma));
    else
        res.send(await materialController.readAll());
  })
  .post(async function(req,res){
      res.send(await MaterialController.create(req.body, req.params.id_conteudo));
  })
  .patch(async function(req,res){
    if (typeof(req.params.id_conteudo) != "undefined")
        res.send(await materialController.update(req.body, req.params.id_conteudo));
    else
        res.send(await materialController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await MaterialController.delete(req.body));
  });

export default material;
