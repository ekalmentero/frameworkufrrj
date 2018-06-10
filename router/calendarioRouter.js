import express from 'express';
const calendario = express.Router();

calendario.get('/:id', async function(req,res){
})

calendario.route('/')
  .get(async function(req,res){
      res.json({status: "OK",datas:{
        '2017-11-26' : {
            titulo: "ENADE -.-",
            descricao: "Whatever",
            marked: true,
            selected: true
        }
      }});
  })
  .post(async function(req,res){
  })
  .patch(async function(req,res){
  })
  .delete(async function(req,res){
  });

export default calendario;
