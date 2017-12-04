"use strict";

import Disciplina from "../modelos/Disciplina";
import BD from "../BD";

export default class DisciplinaDAO {
    static async create(disciplina){
        var id = await BD.inserir(disciplina);
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

    static async update(disciplina){
        return await BD.update(disciplina);
    }
    
    static async delete(disciplina){
        return await BD.deletar(disciplina);
    }
}