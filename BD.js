import mysql from 'mysql';

//import Aluno from 'modelos/aluno';

const conexao = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'db_frameworkufrrj' //ALTERAR NÉ
});

conexao.connect(function(erro) {
    if(erro) console.error("Componente BD : ERRO CONEXAO BD"); else console.log("Componente BD : Conectado ao banco");
});

let tabelas = { // Exemplo
    'Aluno' : "aluno",
    'Professor' : "tbl_professor"
};

export default class BD {

    static query(query){
        return new Promise(
            function(resolve,reject){
                conexao.query(query, function (erro, retorno, colunas) {
                    if (erro) throw erro;
                    resolve(retorno);
                });
            }
        );
    }

    static inserir(obj){
        var tabela = tabelas[obj.constructor.name];
        var query = "INSERT INTO " + tabela + " SET ";

        var tmp = "";
        for(let propriedade of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))){
            if(propriedade == "constructor") continue;
            if(typeof(obj[propriedade]) == 'function') continue;

            if(typeof(obj[propriedade]) == "string") tmp = "'"; else tmp = "";
            query += propriedade.replace("get","").toLowerCase() + " = " + tmp + obj[propriedade] + tmp + ",";
        }
        query = query.slice(0,-1);

        console.log(query);

        return new Promise(
            function(resolve,reject){
                conexao.query(query, function (erro, retorno, colunas) {
                    if (erro) reject(erro); else resolve(true);
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
            if(typeof(obj[propriedade]) == 'function') continue;

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

    static update(obj){
        var tabela = tabelas[obj.constructor.name];
        var query = "UPDATE " + tabela + " SET ";

        var filtros = [];

        var tmp = new obj.constructor;

        for(let propriedade of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))){
            if(propriedade == "constructor") continue;
            if(typeof(obj[propriedade]) == 'function') continue;

            if(obj[propriedade] != tmp[propriedade] && propriedade != "getId"){
                query += propriedade.replace("get","").toLowerCase() + "=" + obj[propriedade] + ",";
            }
        }

        query = query.slice(0,-1);

        query += " WHERE id=" + obj["getId"];

        return new Promise(
            function(resolve,reject){
                conexao.query(query, function (erro, retorno, colunas) {
                    if (erro) reject(erro);
                    resolve(true);
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
            if(typeof(obj[propriedade]) == 'function') continue;

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
                conexao.query(query, function (erro, retorno, colunas) {
                    if (erro) reject(erro);
                    resolve(true);
                });
            }
        );
    }
}
