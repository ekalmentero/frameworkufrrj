"use strict";

import Curso from "../modelos/Curso";
import BD from "../BD";

export default class CursoDAO {
    static async create(curso, idDepartamento){
        var foreignKeys = [];
        foreignKeys.push(['departamento', idDepartamento]);
        var id = await BD.inserir(curso, foreignKeys);
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

    static async readByDepartamento(idCurso, idDepartamento){
        return await BD.query("SELECT * FROM curso WHERE departamento = " + idDepartamento + " AND id = " + idCurso);
    }

    static async readAll(){
        return await BD.query("SELECT * FROM curso");
    }

    static async readAllByDepartamento(idDepartamento){
        return await BD.query("SELECT * FROM curso WHERE departamento = " + idDepartamento);
    }

    static async update(curso, idDepartamento){
        if (typeof(idDepartamento) == undefined)
              return await BD.update(curso);
        else {
              var foreignKeys = [];
              foreignKeys.push(['departamento', idDepartamento]);
              return await BD.update(curso, foreignKeys);
        }
    }

    static async delete(curso){
        return await BD.deletar(curso);
    }
}
