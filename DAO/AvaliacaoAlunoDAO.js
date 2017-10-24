import BD from "../BD";
import AvaliacaoAluno from "../modelos/AvaliacaoAluno";

("use strict");

export default class AvaliacaoAlunoDAO {
  static async readAll() {
    return await BD.query("SELECT * FROM avaliacao_aluno");
  }

  static async readAllByAluno(alunoId) {
    return await BD.query(
      "SELECT * FROM avaliacao_aluno WHERE aluno_id='" + alunoId + "'"
    );
  }
  static async readAllByAvaliação(avaliaçãoId) {
    return await BD.query(
      "SELECT * FROM avaliacao_aluno WHERE avaliacao_id='" + avaliaçãoId + "'"
    );
  }
}
