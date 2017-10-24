import BD from "../BD";
import Grade from "../modelos/Grade";

("use strict");

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
  static async read(gradeId) {
    try {
      var grade = new Grade();
      grade.setId(gradeId);

      var retorno = await BD.buscar(grade);
      grade.setinicio_vigencia(retorno.inicio_vigencia);
      grade.setId(retorno.id);
      grade.setDisponivel(retorno.disponivel);
      grade.setCurso(retorno.curso);
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
