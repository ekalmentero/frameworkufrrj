import mysql from 'mysql';

const conexao = mysql.createConnection({
  host     : 'octoplus-mysqldbserver.mysql.database.azure.com',
  user     : 'octo_sqlservice@octoplus-mysqldbserver',
  password : 'FrameworkUFRRJ2017',
  database : 'db_frameworkufrrj'
});

conexao.connect(function(erro) {
    if(erro) console.error("Componente BD : ERRO CONEXAO BD"); else console.log("Componente BD : Conectado ao banco");
});

module.exports = conexao;
