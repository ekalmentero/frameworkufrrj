import express from 'express';
import bodyParser from 'body-parser';
import institutoController from '../controllers/institutoController';
import departamentoController from '../controllers/departamentoController';

const instituto = express.Router();

instituto.use(bodyParser.json());

instituto.get('/:id', async function(req,res){
    res.send(await institutoController.read(req.params.id));
});

instituto.get('/:id/predios', async function(req,res){
    res.send(await predioController.readAllByInstitutoId(req.params.id));
});

instituto.get('/:id/departamentos', async function(req,res){
    res.send(await departamentoController.readAllByInstitutoId(req.params.id));
});

instituto.route('/')
  .get(async function(req,res){
      res.send(await institutoController.search(req.query));
  })
  .post(async function(req,res){
      res.send(await institutoController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await institutoController.update(req.body));
  })
  .delete(async function(req,res){
      res.send(await institutoController.delete(req.query));
  });

export default instituto;