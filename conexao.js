import mysql from 'mysql';

const conexao = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'ipbxsertel',
  password : '@ipbxsertel',
  database : 'db_frameworkufrrj'
});

conexao.connect(function(erro) {
    console.log(erro);
    if(erro) console.error("Componente BD : ERRO CONEXAO BD"); else console.log("Componente BD : Conectado ao banco");
});

module.exports = conexao;
