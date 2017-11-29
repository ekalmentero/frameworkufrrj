import BD from "../BD";
import Resultado from "../modelos/Resultado";

("use strict");

export default class ResultadoDAO {
  static async create(resultado, id_avaliacao) { //Serviço: Inserir nota para uma avaliação
    try {
      await BD.query(
        "INSERT INTO avaliacao_aluno SET avaliacao = "+id_avaliacao+", aluno = "+resultado.aluno+", nota = "+resultado.nota
      );
    } catch (error) {
      return error.message;
    }
  }

  static async readAll() {
    return await BD.query("SELECT * FROM avaliacao_aluno");
  }

  static async readAllByAluno(id_aluno) {
    return await BD.query(
      "SELECT * FROM avaliacao_aluno WHERE aluno = " + id_aluno
    );
  }
  
  static async readAllByAvaliacao(id_avaliacao) { //Serviço: Listar notas de uma avaliação
    return await BD.query(
      "SELECT * FROM avaliacao_aluno WHERE avaliacao = " + id_avaliacao
    );
  }

  static async update(resultado, id_avaliacao) {
    try {
      await BD.query(
        "UPDATE avaliacao_aluno SET nota = "+resultado.nota+" WHERE avaliacao="+id_avaliacao+" AND aluno="+resultado.aluno
      );
    } catch (error) {
      return error.message;
    }
  }

  /*static async delete(avaliacaoAluno) {
    try {
      return await BD.deletar(avaliacaoAluno);
    } catch (error) {
      return error.message;
    }
  }*/
}
