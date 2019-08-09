import express from 'express';
import bodyParser from 'body-parser';
import CursoController from '../controllers/cursoController';

const curso = express.Router({mergeParams: true});

curso.use(bodyParser.json());

curso.get('/:id_curso', async function(req, res){
  if (typeof(req.params.id_curso) != "undefined")
      res.send(await CursoController.readByDepartamento(req.params.id_curso, req.params.id_departamento));
  else
      res.send(await CursoController.read(req.params.id_curso));
})

curso.route('/')
    .get(async function(req, res){
        if (typeof(req.params.id_departamento) != "undefined")
            res.send(await CursoController.readAllByDepartamento(req.params.id_departamento));
        else
            res.send(await CursoController.readAll());
    })
    .post(async function(req,res){
        res.send(await CursoController.create(req.body, req.params.id_departamento));
    })
    .patch(async function(req,res){
        if (typeof(req.params.id_departamento) != "undefined")
            res.send(await CursoController.update(req.body, req.params.id_departamento));
        else
            res.send(await CursoController.update(req.body));
    })
    .delete(async function(req,res){
        res.send(await CursoController.delete(req.body));
  });

export default curso;
