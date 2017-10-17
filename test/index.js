import express from 'express';
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

export default testes;
