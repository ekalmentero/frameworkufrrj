"use strict";
import BD from "../BD";
import TurmaDAO from './cursoDAO';
import Aula from "../modelos/Aula";
import Turma from "../modelos/Turma";

export default class AulaDAO {
  
  static async create(aula) {
    try {
      var foreignKeys=[];
      foreignKeys.push(['turma',id_turma]);
      var retorno = await BD.inserir(aula, foreignKeys);
      aula.setId(retorno);
      return aluno;
    } catch (error) {
      return error.message;
    }
  }

  static async read(aula) {
    try {
      var retorno = await BD.buscar(aula);
      return retorno[0];
    } catch (error) {
      return error.message;
    }
  }

  static async readByCurso(id_aula, id_turma) {
    return await BD.query("SELECT * FROM aula WHERE id = " + id_aula + " AND turma = " + id_turma);
  }

  static async readAll() {
    return await BD.query("SELECT * FROM aula");
  }

  static async update(aula, id_turma) {
    try {
      if (typeof(id_turma) != "undefined"){
        var foreignKeys = [];
        foreignKeys.push(['turma',id_turma]);
        return await BD.update(aula, foreignKeys);
      }
      else 
        return await BD.update(aula);
    } catch (error) {
      return error.message;
    }
  }


  static async delete(aula) {
    try {
      return await BD.deletar(aula);
    } catch (error) {
      return error.message;
    }
  }

}
