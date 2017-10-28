import mysql from 'mysql';

const conexao = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '20082014',
  database : 'db_frameworkufrrj'
});

conexao.connect(function(erro) {
    if(erro) console.error("Componente BD : ERRO CONEXAO BD"); else console.log("Componente BD : Conectado ao banco");
});

module.exports = conexao;
