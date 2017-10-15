import mysql from 'mysql';

let conexao = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : '',
  database : ''
});

conexao.connect();

let tabelas = { // Exemplo
    Aluno : "tbl_aluno"
    Professor : "tbl_professor"
};

export default class BD {

    //===| PROMISE |===//
    query(sql){
        // new Promise()
        mysql.query(sql,)
    }

    //===| CALLBACK |===//
    query(sql,callback){
        mysql.query(sql, function (erro, retorno, colunas) {
            if (erro) throw erro;
            callback(retorno);
        });
    }

    inserir(obj){
        var tabela = tabelas[obj];

        var query = "INSERT INTO " + tabela;

        for(let propriedade in obj){
            query += " SET " + propriedade + " = " obj.propriedade;
        }
    }

    buscar(obj){
        var tabela = tabelas[obj];

        var query = "SELECT * FROM " + tabela +

        for(let propriedade in obj){

        }
    }

    deletar(obj){

    }

}
