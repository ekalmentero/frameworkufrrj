import express from 'express';
import bodyParser from 'body-parser';
import MaterialController from '../controllers/materialController';

const material = express.Router();

material.use(bodyParser.json());

material.get('/:id', async function(req,res){
    res.send(await MaterialController.read(req.params.id));
})

material.route('/')
  .get(async function(req,res){
      res.send(await MaterialController.readAll());
  })
  .post(async function(req,res){
      res.send(await MaterialController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await MaterialController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await MaterialController.delete(req.body));
  });

export default material;
