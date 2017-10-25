import mysql from 'mysql';

//import Aluno from 'modelos/aluno';

const conexao = mysql.createConnection({
  host     : 'localhost',
  user     : 'ipbxsertel',
  password : '@ipbxsertel',
  database : 'bmg' //ALTERAR NÉ
});

conexao.connect();

let tabelas = { // Exemplo
    'Aluno' : "tbl_aluno",
    'Professor' : "tbl_professor"
};

//EXEMPLO DE modelos
class Aluno{
    constructor(){
        //...
    }

    @Private nome = "Bruno";
    @Private dtNasc = 1996;

    get getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    get getIdade(){
        return 2017 - this.dtNasc;
    }

    inserirNota(){
      //...
    }

}

// as funções retornam uma Promise
// pra utilizar o código no DAO:
//
// import BD from './BD'
//
// [..]
//
// BD.query("").then((retorno)=>{
//     retorno = retorno direto do banco de dados
//     (false se query der erro)
// })

export default class BD {

    static query(sql){
        return new Promise(
            function(resolve,reject){
                conexao.query(sql, function (erro, retorno, colunas) {
                    if (erro) throw erro;
                    resolve(retorno);
                });
            }
        );
    }

    static inserir(obj){
        var tabela = tabelas[obj.constructor.name];
        var query = "INSERT INTO " + tabela;

        var tmp = "";
        for(let propriedade of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))){
            if(propriedade == "constructor") continue;
            if(typeof(a[propriedade]) == 'function') continue;

            if(typeof(filtros[i][1]) == "string") tmp = "'"; else tmp = "";
            query += " SET " + filtros[i][0].replace("get","").toLowerCase() + " = " + tmp + filtros[i][1] + tmp;
        }

        return new Promise(
            function(resolve,reject){
                conexao.query(sql, function (erro, retorno, colunas) {
                    if (erro) resolve(false);
                    resolve(true);
                });
            }
        );
    }

    static buscar(obj){
        var tabela = tabelas[obj.constructor.name];
        var query = "SELECT * FROM " + tabela;

        var tmp = new obj.constructor;

        var filtros = [];

        for(let propriedade of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))){
            if(propriedade == "constructor") continue;
            if(typeof(a[propriedade]) == 'function') continue;

            if(obj[propriedade] != tmp[propriedade]){
                filtros.push([propriedade,obj[propriedade]]);
            }
        }

        if(filtros.length > 0) query += " WHERE";
        var tmp;
        for(var i = 0;i<filtros.length;i++){
            if(typeof(filtros[i][1]) == "string") tmp = "'"; else tmp = "";
            query += " " + filtros[i][0].replace("get","").toLowerCase() + " = " + tmp + filtros[i][1] + tmp;
        }

        return new Promise(
            function(resolve,reject){
                conexao.query(query, function (erro, retorno, colunas) {
                    if (erro) reject(erro);
                    resolve(retorno);
                });
            }
        );
    }

    static deletar(obj){
        var tabela = tabelas[obj.constructor.name];
        var query = "DELETE FROM " + tabela + " WHERE ";

        var filtros = [];

        var tmp = new obj.constructor;

        for(let propriedade of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))){
            if(propriedade == "constructor") continue;
            if(typeof(a[propriedade]) == 'function') continue;

            if(obj[propriedade] != tmp[propriedade]){
                filtros.push([propriedade,obj[propriedade]]);
            }
        }

        var tmp;
        for(var i = 0;i<filtros.length;i++){
            if(typeof(filtros[i][1]) == "string") tmp = "'"; else tmp = "";
            if(i > 0) query += "AND";
            query += filtros[i][0].replace("get","").toLowerCase() + " = " + tmp + filtros[i][1] + tmp + " ";
        }

        return new Promise(
            function(resolve,reject){
                conexao.query(sql, function (erro, retorno, colunas) {
                    if (erro) resolve(false);
                    resolve(true);
                });
            }
        );
    }

}
