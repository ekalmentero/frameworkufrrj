import express from 'express';
import bodyParser from 'body-parser';
import salaController from '../controllers/salaController';

const sala = express.Router();

sala.use(bodyParser.json());

sala.get('/:id', async function(req,res){
    res.send(await salaController.read(req.params.id));
})

sala.route('/')
  .get(async function(req,res){
      res.send(await salaController.readAll());
  })
  .post(async function(req,res){
      res.send(await salaController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await salaController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await salaController.delete(req.body));
  });

export default sala;