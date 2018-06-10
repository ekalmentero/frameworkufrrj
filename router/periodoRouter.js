import express from 'express';
import bodyParser from 'body-parser';
import PeriodoController from '../controllers/periodoController';

const periodo = express.Router();

periodo.use(bodyParser.json());

periodo.get('/:id', async function(req,res){
    res.send(await PeriodoController.read(req.params.id));
})

periodo.route('/')
  .post(async function(req,res){
      res.send(await PeriodoController.create(req.body));
  })

  .patch(async function(req,res){
      res.send(await PeriodoController.update(req.body));
  })

  .delete(async function(req,res){
      res.send(await PeriodoController.delete(req.body));
  })

  .get(async function(req,res){
    res.send(await PeriodoController.readAll());
  })

export default periodo;
