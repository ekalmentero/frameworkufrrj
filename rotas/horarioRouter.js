import express from 'express';
import bodyParser from 'body-parser';
import horarioController from '../controllers/horarioController';

const horario = express.Router({mergeParams: true});

horario.use(bodyParser.json());

horario.get('/:id_horario', async function(req,res){
    if (typeof(req.params.id_turma) != "undefined")
        res.send(403);
    else
        res.send(await horarioController.read(req.params.id_horario));
})

horario.route('/')
    .get(async function(req,res){
        if (typeof(req.params.id_turma) != "undefined")
            res.send(await horarioController.readAllByTurma(req.params.id_turma));
        else
            res.send(await horarioController.readAll());
    })
    .post(async function(req,res){
        res.send(await horarioController.create(req.body));
    })
    .patch(async function(req,res){
        res.send(await horarioController.update(req.body));
    })
    .delete(async function(req,res){
        res.send(await horarioController.delete(req.body));
    });

export default horario;