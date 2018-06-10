import express from 'express';
import bodyParser from 'body-parser';
import aulaController from '../controller/aulaController';

const aula = express.Router();

aula.use(bodyParser.json());

aula.get('/:id', async function(req,res){
    res.send(await aulaController.read(req.params.id));
})

aula.route('/')
  .get(async function(req,res){
      res.send(await aulaController.readAll());
  })
  .post(async function(req,res){
      res.send(await aulaController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await aulaController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await aulaController.delete(req.body));
  });

export default aula;