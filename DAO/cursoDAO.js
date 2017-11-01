"use strict";

import Curso from "../modelos/curso";
import BD from "../bd";

export default class CursoDAO {
    static async create(curso){
        var id = await BD.inserir(curso);
        curso.setId(id);
        return curso;
    }

    static async read(curso){
        var result =  await BD.buscar(curso);

        curso.setId(result[0].id);
        curso.setNome(result[0].nome);
        curso.setCodigo(result[0].codigo);
        curso.setTurno(result[0].turno);
        curso.setDeleted(result[0].deleted);
        curso.setDepartamento_id(result[0].departamento_id);
        curso.setLimite_periodos(result[0].limite_periodos);

        return curso;
    }

    static async readAll(){
        return await BD.query("SELECT * FROM curso");
    }

    static async update(curso){
        return await BD.update(curso);
    }

    static async delete(curso){
        return await BD.deletar(curso);
    }
}
