"use strict";

import Disciplina from "../modelos/disciplina";
import BD from "../bd";

export default class DisciplinaDAO {
    static async create(disciplina){
        var id = await BD.inserir(disciplina);
        disciplina.setId(id);
        return disciplina;
    }

    static async read(disciplina){
        var result =  await BD.buscar(disciplina);
        disciplina.setId(result[0].id);
        disciplina.setNome(result[0].nome);
        disciplina.setCodigo(result[0].codigo);
        disciplina.setCreditos(result[0].creditos);
        return disciplina;
    }

    static async readAll(){
        return await BD.query("SELECT * FROM disciplina");
    }

    static async update(disciplina){
        return await BD.update(disciplina);
    }
    
    static async delete(disciplina){
        return await BD.deletar(disciplina);
    }
}