var conexao = require('./conexao.js')
//let tabelas = require('./tabelas.js')

let tabelas = { // Exemplo
    'Aluno' : "aluno",
    'Avaliacao' : "avaliacao",
    'Grade' : "grade",
    'Resultado' : "avaliacao_aluno",
    'Prerequisito' : "prerequisito",
    'Instituto' : "instituto",
    'Professor' : "professor",
    'Disciplina' : "disciplina",
    'Turma' : "turma",
    'Periodo' : "periodo"
};

export default class BD {

    static query(query){
        return new Promise(
            function(resolve,reject){
                conexao.query(query, function (erro, retorno, colunas) {
                    if (erro) {reject(erro); throw erro;}
                    resolve(retorno);
                });
            }
        );
    }

    static inserir(obj, chavesEstrangeiras){
        var tabela = tabelas[obj.constructor.name];
        var query = "INSERT INTO " + tabela + " SET ";

        if (typeof(chavesEstrangeiras) != "undefined"){
            for(var i = 0;i<chavesEstrangeiras.length;i++){
                query += chavesEstrangeiras[i][0] + " = " + chavesEstrangeiras[i][1] + ",";
            }
        }

        var tmp = "";
        for(let propriedade of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))){
            if(propriedade == "constructor") continue;
            if(typeof(obj[propriedade]) == 'function' || obj[propriedade] == undefined) continue;
            if(propriedade == "getId") continue;

            if(typeof(obj[propriedade]) == "object") continue;

            if(typeof(obj[propriedade]) == "string") tmp = "'"; else tmp = "";
            query += propriedade.replace("get","").toLowerCase() + " = " + tmp + obj[propriedade] + tmp + ",";
        }
        query = query.slice(0,-1);
        
        return new Promise(
            function(resolve,reject){
                conexao.query(query, function (erro, retorno, colunas) {
                    if (erro) reject(erro); else {
                        BD.query("SELECT LAST_INSERT_ID() AS lid").then((r)=>{
                            resolve(r[0].lid);
                        }).catch((erro)=>{reject(erro); throw erro;});
                    }
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
            if(typeof(obj[propriedade]) == "object") continue;

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
                    if (erro) { reject(erro); throw erro; }
                    resolve(retorno);
                });
            }
        );
    }

    static update(obj, chavesEstrangeiras){
        var tabela = tabelas[obj.constructor.name];
        var query = "UPDATE " + tabela + " SET ";

        var filtros = [];

        var tmp = new obj.constructor;

        if (typeof(chavesEstrangeiras) != "undefined"){
            for(var i = 0;i<chavesEstrangeiras.length;i++){
                query += chavesEstrangeiras[i][0] + " = " + chavesEstrangeiras[i][1] + ",";
            }
        }

        for(let propriedade of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))){
            if(propriedade == "constructor") continue;
            if(typeof(obj[propriedade]) == 'function' || obj[propriedade] == undefined) continue;
            if(propriedade == "getId") continue;
            if(typeof(obj[propriedade]) == "object") continue;

            var tmp;
            if(obj[propriedade] != tmp[propriedade]){
                if(typeof(obj[propriedade]) == "string") tmp = "'"; else tmp = "";
                query += propriedade.replace("get","").toLowerCase() + "=" + tmp + obj[propriedade] + tmp + ",";
            }
        }

        query = query.slice(0,-1);

        query += " WHERE id=" + obj["getId"];

        return new Promise(
            function(resolve,reject){
                conexao.query(query, function (erro, retorno, colunas) {
                    if (erro) { reject(erro); throw erro; }
                    resolve(true);
                });
            }
        );
    }

    static deletar(obj){
        var tabela = tabelas[obj.constructor.name];
        var query = "UPDATE " + tabela + " SET deleted=1 WHERE ";

        var filtros = [];

        var tmp = new obj.constructor;

        for(let propriedade of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))){
            if(typeof(obj[propriedade]) == 'function' || obj[propriedade] == undefined) continue;
            //if(propriedade == "getId") continue;
            if(typeof(obj[propriedade]) == "object") continue;

            if(obj[propriedade] != tmp[propriedade]){
                filtros.push([propriedade,obj[propriedade]]);
            }
        }

        var tmp;
        for(var i = 0;i<filtros.length;i++){
            if(typeof(filtros[i][1]) == "string") tmp = "'"; else tmp = "";
            if(i > 0) query += " AND ";
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
