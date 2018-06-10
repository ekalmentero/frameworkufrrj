import express from 'express';
import bodyParser from 'body-parser';
import institutoController from '../controllers/institutoController';

const instituto = express.Router();

instituto.use(bodyParser.json());

instituto.get('/:id', async function(req,res){
    res.send(await institutoController.read(req.params.id));
})

instituto.route('/')
  .get(async function(req,res){
      res.send(await institutoController.readAll());
  })
  .post(async function(req,res){
      res.send(await institutoController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await institutoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await institutoController.delete(req.body));
  });

export default instituto;