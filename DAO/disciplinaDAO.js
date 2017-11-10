"use strict";

import Disciplina from "../modelos/disciplina";
import BD from "../bd";

export default class DisciplinaDAO {
    static async create(disciplina, id_departamento){
        var foreignKeys = [];
        foreignKeys.push(['departamento', id_departamento]);
        var id = await BD.inserir(disciplina, foreignKeys);
        disciplina.setId(id);
        return disciplina;
    }

    static async read(disciplina){
        var result =  await BD.buscar(disciplina);
        return result[0];
    }
    
    static async readByDepartamento(id_disciplina, id_departamento){
        return await BD.query("SELECT * FROM disciplina WHERE departamento = " + id_departamento + " AND id = " + id_disciplina);
    }

    static async readAll(){
        return await BD.query("SELECT * FROM disciplina");
    }

    static async readAllByDepartamento(id_departamento){
        return await BD.query("SELECT * FROM disciplina WHERE departamento = " + id_departamento);
    }

    static async update(disciplina, id_departamento){
        if (typeof(id_departamento) == "undefined")
            return await BD.update(disciplina);
        else{
            var foreignKeys = [];
            foreignKeys.push(['departamento', id_departamento]);
            return await BD.update(disciplina, foreignKeys);
        }
    }
    
    static async delete(disciplina){
        return await BD.deletar(disciplina);
    }
}