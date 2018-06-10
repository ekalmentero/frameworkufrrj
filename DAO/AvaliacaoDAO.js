"use strict";
import BD from "../BD";
import Avaliacao from "../model/Avaliacao";
import TurmaDAO from "./TurmaDAO";

export default class AvaliacaoDAO {
  static async create(avaliacao, idTurma) {
    try {
      var foreignKeys = [];
      foreignKeys.push(['turma', idTurma]);

      var retorno = await BD.inserir(avaliacao);
      avaliacao.setId(retorno);

      return avaliacao;

    } catch (error) {
      return error.message;
    }
  }
  static async read(avaliacao) {
    try {
      var retorno = await BD.buscar(avaliacao);
      avaliacao.setId(retorno[0].id);
      avaliacao.setNome(retorno[0].nome);
      avaliacao.setData(retorno[0].data);
      avaliacao.setDescricao(retorno[0].descricao);

      var tmpTurma = await TurmaDAO.read(retorno[0].turma);
      avaliacao.setTurma(tmpTurma);

      return avaliacao;
    } catch (error) {
      return error.message;
    }
  }

  static async readAll() {
    return await BD.query("SELECT * FROM avaliacao");
  }

  static async update(avaliacao, idTurma) {
    try {
      if (typeof(idTurma) == undefined)
            return await BD.update(avaliacao);
      else {
            var foreignKeys = [];
            foreignKeys.push(['turma', idTurma]);
            return await BD.update(avaliacao, foreignKeys);
      }
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
