import express from 'express';
const testes = express.Router();

import Instituto from '../modelos/instituto';
import InstitutoDAO from '../DAO/institutoDAO';
import Disciplina from '../modelos/disciplina';
import DisciplinaDAO from '../DAO/disciplinaDAO';

testes.all('/instituto',function(req,res){
    var tmp = new Instituto();
    tmp.setNome("Instituto de Ciencias Humanas e Sociais")
    tmp.setSigla("ICHS")

    var retorno = async () => {
        res.send(await InstitutoDAO.incluir(tmp));
    }

    retorno();

})

testes.all('/disciplina',async function(req,res){
    let disciplina = new Disciplina("","Disciplina Teste","AA000",4);
    res.send(await DisciplinaDAO.create(disciplina));
})

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
