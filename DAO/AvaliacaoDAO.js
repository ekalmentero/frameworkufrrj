import BD from "../BD";
import Avaliacao from "../modelos/Avaliacao";

("use strict");

export default class AvaliacaoDAO {
  static async create(avaliacao) {
    try {
      var retorno = await BD.inserir(avaliacao);
      avaliacao.setId(retorno);
      return avaliacao;
    } catch (error) {
      return error.message;
    }
  }
  static async read(avaliacaoId) {
    try {
      var avaliacao = new Avaliacao();
      avaliacao.setId(avaliacaoId);

      var retorno = await BD.buscar(avaliacao);
      avaliacao.setId(retorno.id);
      avaliacao.setNome(retorno.nome);
      avaliacao.setData(retorno.data);
      avaliacao.setDescricao(retorno.descricao);
      avaliacao.setTurma(retorno.turma);

      return avaliacao;
    } catch (error) {
      return error.message;
    }
  }

  static async readAll() {
    return await BD.query("SELECT * FROM avaliacao");
  }

  static async update(avaliacao) {
    try {
      return await BD.update(avaliacao);
    } catch (error) {
      return error.message;
    }
  }
  static async delete(avaliacao) {
    try {
      return await BD.deletar(avaliacao);
    } catch (error) {
      return error.message;
    }
  }
}
