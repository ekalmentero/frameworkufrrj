"use strict";
import BD from "../BD";
import Prerequisito from "../modelos/Prerequisito";


export default class PrerequisitoDAO {
  /* AS FUNÇÕES UPDADE, DELETE E CREATE NÃO FICAM AQUI, MAS EM DISCIPLINADAO (DAO CRIADO POR OUTRO ALUNO)
    static async updatePrerequisito(prerequisito){
        try {
            return await BD.update(prerequisito);
        } catch (error) {
            return error.message;
        }

    }
    static async deletePrerequisito(prerequisito){
        try {
            return await BD.deletar(prerequisito);
        } catch (error) {
            return error.message;
        }
    }*/
  static async readAll() {
    return await BD.query("SELECT * FROM prerequisito");
  }

  static async readAllByDisciplina(idDisciplina) {
    return await BD.query(
      "SELECT * FROM prerequisito WHERE id_disciplina='" + idDisciplina + "'"
    );
  }
  static async readAllByGrade(gradeId) {
    return await BD.query(
      "SELECT * FROM prerequisito WHERE grade_id='" + gradeId + "'"
    );
  }
}
