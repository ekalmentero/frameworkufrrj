import express from 'express';
import bodyParser from 'body-parser';
import PresencaController from '../controllers/presencaController';

const presenca = express.Router();

presenca.use(bodyParser.json());

/*
--Exemplo readByAula--
presenca.get('/:id_aula', async function(req,res){
    res.send(await PresencaController.read(req.params.id_aula));
})
--To do--
*/

presenca.route('/')
  .get(async function(req,res){
      res.send(await PresencaController.readAll());
  })
  .post(async function(req,res){
      res.send(await PresencaController.create(req.body));
  })
  .patch(async function(req,res){
      res.send(await PresencaController.update(req.body));
  });

export default presenca;