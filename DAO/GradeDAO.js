"use strict";
import BD from "../BD";
import Grade from "../model/Grade";
import CursoDAO from "./cursoDAO";

export default class GradeDAO {
  static async create(grade) {
    try {
      var retorno = await BD.inserir(grade);
      grade.setId(retorno);
      return grade;
    } catch (error) {
      return error.message;
    }
  }
  static async read(grade) {
    try {
      var retorno = await BD.buscar(grade);
      grade.setinicio_vigencia(retorno[0].inicio_vigencia);
      grade.setId(retorno[0].id);
      grade.setDisponivel(retorno[0].disponivel);

      var tmpCurso = await CursoDAO.read(retorno[0].curso);
      grade.setCurso(tmpCurso);
      return grade;
    } catch (error) {
      return error.message;
    }
  }

  static async readAll() {
    return await BD.query("SELECT * FROM grade");
  }

  static async update(grade) {
    try {
      return await BD.update(grade);
    } catch (error) {
      return error.message;
    }
  }
  static async delete(grade) {
    try {
      return await BD.deletar(grade);
    } catch (error) {
      return error.message;
    }
  }
}
