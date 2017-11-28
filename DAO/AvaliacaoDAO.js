"use strict";
import BD from "../BD";
import Avaliacao from "../modelos/Avaliacao";

export default class AvaliacaoDAO {
  static async create(avaliacao, id_turma) {
    try {
      var foreignKeys = [];
      foreignKeys.push(['turma', id_turma]);
      var retorno = await BD.inserir(avaliacao, foreignKeys);
      avaliacao.Id = retorno;

      return avaliacao;

    } catch (error) {
      return error.message;
    }
  }
  static async read(avaliacao) {
    try {
      var retorno = await BD.buscar(avaliacao);
      return retorno[0];
    } catch (error) {
      return error.message;
    }
  }

  static async readByTurma(id_avaliacao, id_turma){
    return await BD.query("SELECT * FROM avaliacao WHERE turma = " + id_turma + " AND id = " + id_avaliacao);
}

  static async readAll() {
    return await BD.query("SELECT * FROM avaliacao");
  }

  static async readAllByTurma(id_turma){
    return await BD.query("SELECT * FROM avaliacao WHERE turma = " + id_turma);
}

  static async update(avaliacao, id_turma) {
    try {
      if (typeof(id_turma) == "undefined")
        return await BD.update(avaliacao);
      else{
        var foreignKeys = [];
        foreignKeys.push(['turma', id_turma]);
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

  /*static async listarAvaliacoesTurma(id){
    try {
      var retorno = await BD.query("SELECT * FROM avaliacao WHERE turma = '"+id+"'");
      var i=0;
      var array = new Array();

      while(i<retorno.length){
        var avlTemp= new Avaliacao();
        avlTemp.Id(retorno[i].id);
        avlTemp.Nome(retorno[i].nome);
        avlTemp.Data(retorno[i].data);
        avlTemp.setDescricao(retorno[i].descricao);
        array.push(avlTemp);
        i++;
      }
      return array;
    } catch (error) {
      return error.message;
    }
  }*/

}
