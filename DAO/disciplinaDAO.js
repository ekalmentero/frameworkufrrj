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
        var result = await BD.buscar(disciplina);
        disciplina.parseEntidade(result[0]);
        return disciplina;
    }

    static async readAll(){
        var result = await BD.query("SELECT * FROM disciplina");
        var disciplinas = [];
        for (let object of result){
            var disciplina = new Disciplina();
            disciplina.parseEntidade(object);
            disciplinas.push(disciplina);
        } 
        return disciplinas;
    }

    static async readAllByDepartamento(id_departamento){
        var result = await BD.query("SELECT * FROM disciplina WHERE departamento = " + id_departamento);
        var disciplinas = [];
        for (let object of result){
            var disciplina = new Disciplina();
            disciplina.parseEntidade(object);
            disciplinas.push(disciplina);
        } 
        return disciplinas;
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