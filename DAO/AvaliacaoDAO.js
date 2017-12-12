"use strict";
import BD from "../BD";
import Avaliacao from "../modelos/Avaliacao";
import Turma from "../modelos/Turma";
import TurmaDAO from "./TurmaDAO";

export default class AvaliacaoDAO {
  static async create(avaliacao, id_turma) {
    try {
      var foreignKeys = [];
      foreignKeys.push(['turma', id_turma]);
      var retorno = await BD.inserir(avaliacao, foreignKeys);
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
      avaliacao.setTurma(retorno[0].turma);
      return avaliacao;
    } catch (error) {
      return (error.message);
    }
  }

  static async readByTurma(id_avaliacao, id_turma){
    try {
    var result = await BD.query("SELECT * FROM avaliacao WHERE turma = " + id_turma + " AND id = " + id_avaliacao);
        var avaliacao = new Avaliacao();
        avaliacao.setId(result[0].id);
        avaliacao.setNome(result[0].nome);
        avaliacao.setData(result[0].data);
        avaliacao.setDescricao(result[0].descricao);
        avaliacao.setTurma(result[0].turma);
    return avaliacao;
    } catch (error) {
      return (error.message);
    }
  }

  static async readAll() {
    try {
    var result = await BD.query("SELECT * FROM avaliacao");
    var avaliacoes = [];
    for (let object of result){
        var avaliacao = new Avaliacao();
        avaliacao.setId(object.id);
        avaliacao.setNome(object.nome);
        avaliacao.setData(object.data);
        avaliacao.setDescricao(object.descricao);
        avaliacao.setTurma(object.turma);
        avaliacoes.push(avaliacao);
    }
    return avaliacoes;
    } catch (error) {
      return (error.message);
    }
  }

  static async readAllByTurma(id_turma){
    try {
    var result = await BD.query("SELECT * FROM avaliacao WHERE turma = " + id_turma);
    var avaliacoes = [];
    for (let object of result){
        var avaliacao = new Avaliacao();
        avaliacao.setId(object.id);
        avaliacao.setNome(object.nome);
        avaliacao.setData(object.data);
        avaliacao.setDescricao(object.descricao);
        avaliacao.setTurma(object.turma);
        avaliacoes.push(avaliacao);
    }
    return avaliacoes;
    } catch (error) {
      return (error.message);
    }
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
