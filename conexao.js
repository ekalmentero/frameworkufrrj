import mysql from 'mysql';

const conexao = mysql.createConnection({
  host     : 'localhost',
  user     : 'ipbxsertel',
  password : '@ipbxsertel',
  database : 'db_frameworkufrrj'
});

conexao.connect(function(erro) {
    if(erro) console.error("Componente BD : ERRO CONEXAO BD"); else console.log("Componente BD : Conectado ao banco");
});

module.exports = conexao;
