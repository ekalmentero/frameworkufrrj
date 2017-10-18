import express from 'express';
import BD from '../BD';

const testes = express.Router();

//import Disciplina from '../modelos/disciplina';
// import Aluno from '../modelos/Aluno'

testes.all('/disciplina', function(req, res) {

    var tmp = new Disciplina(1,'1',1);
    tmp.nome = 5;
    res.send(tmp.toString());

})

testes.all('/aluno',function(req,res){
    var tmp = new Aluno(1,2,3,4,5,6);

    // tmp.nome = "Teastae";
    res.send(tmp.getNome().toString());
});

class Aluno{
    @Private nome;
    get getNome(){return this.nome}
    setNome(_nome){this.nome = _nome}
}

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
