import express from 'express';
const testes = express.Router();

import Instituto from '../modelos/instituto';
import InstitutoDAO from '../DAO/institutoDAO';
import Disciplina from '../modelos/disciplina';
import DisciplinaDAO from '../DAO/disciplinaDAO';

testes.get('/instituto/:sigla',async function(req,res){
    var tmp = new Instituto();
    tmp.setSigla(req.params.sigla);
    var ret = await InstitutoDAO.buscar(tmp);
    res.send(ret);
})

//testes de Disciplina

testes.route('/disciplina')
  .get(async function(req,res){
    let disciplina = new Disciplina();
    disciplina.setNome("Disciplina Teste");
    disciplina = await DisciplinaDAO.read(disciplina);
    res.send(disciplina.toString());
  })
  .post(async function(req,res){
    let disciplina = new Disciplina("","Disciplina Teste 3","CC000",6);
    res.send(await DisciplinaDAO.create(disciplina));
  })
  .patch(async function(req,res){
    let disciplina = new Disciplina();
    disciplina.setId(1);
    disciplina.setCreditos(4);
    res.send(await DisciplinaDAO.update(disciplina));
  })
  .delete(async function(req,res){
    let disciplina = new Disciplina();
    disciplina.setId(1);
    res.send(await DisciplinaDAO.delete(disciplina));
  });

testes.all("/:unidade",function(req,res){
  var Instituto = require('../modelos/instituto.js');
  var tmp = req.params.unidade.charAt(0).toUpperCase() + req.params.unidade.slice(1);
  var html = "<h3>Testando :</h3> " + tmp + "<br>";
  var inst = eval("new " + tmp + "()");

  html += "<h3>Instancia de " + tmp + " criada :</h3> " + inst + "<br><br><hr>";

  inst.setId(1);
  BD.buscar(inst).then((retorno)=>{
    if(retorno == "") retorno = "{}";
    html += "<h4 style='color:green;'>Busca " + tmp + "{id:1}</h3>" + retorno;
  }).catch((erro)=>{
    html += "<h4 style='color:red;'>Testando busca " + tmp + "{id:1}</h3>" + "ERRO { " + erro + " }";
  });

  inst.setId(123);
  BD.inserir(inst).then((retorno)=>{
    html += "<h4 style='color:green;'>Inserir " + tmp + "{id:'123'}</h3><br>" + retorno;
  }).catch((erro)=>{
    html += "<h4 style='color:red;'>Testando inserção " + tmp + "{id:'123'}</h3><br>" + "ERRO { " + erro + " }";
  });

  setTimeout(function(){res.send(html);},500);

});

testes.all('/bd',function(req,res){
  var tmp = new Aluno();
    tmp.setNome("Bruno");

    BD.inserir(tmp).then((retorno)=>{
      res.send(retorno);
    }).catch((erro)=>{
      res.send(erro);
    })
});

export default testes;
