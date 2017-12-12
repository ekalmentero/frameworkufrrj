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
      var result = await BD.buscar(avaliacao);
      if (result[0] != undefined && result[0].deleted == 0){
        avaliacao.setId(result[0].id);
        avaliacao.setNome(result[0].nome);
        avaliacao.setData(result[0].data);
        avaliacao.setDescricao(result[0].descricao);

        var retorno = await BD.query("SELECT * FROM turma WHERE id = " + result[0].turma );
        var turma= new Turma();
        turma.setId(retorno[0].id);
        turma.setTurno(retorno[0].turno);
        turma.setCodigo(retorno[0].codigo);
        turma.setVagas(retorno[0].vagas);
        turma.setDisciplina(retorno[0].disciplina);
        turma.setPeriodo(retorno[0].periodo);
        turma.setProfessor(retorno[0].professor);
        avaliacao.setTurma(turma);
        return avaliacao;
      } else{
        return "Avaliação não existente"
      }
    } catch (error) {
      return (error.message);
    }
  }

  static async readByTurma(id_avaliacao, id_turma){
    try {
    var result = await BD.query("SELECT * FROM avaliacao WHERE turma = " + id_turma + " AND id = " + id_avaliacao);
      if (result[0] != undefined && result[0].deleted == 0){
        var avaliacao = new Avaliacao();
        avaliacao.setId(result[0].id);
        avaliacao.setNome(result[0].nome);
        avaliacao.setData(result[0].data);
        avaliacao.setDescricao(result[0].descricao);
        avaliacao.setTurma(result[0].turma);

        var retorno = await BD.query("SELECT * FROM turma WHERE id = " + id_turma );
        var turma= new Turma();
        turma.setId(retorno[0].id);
        turma.setTurno(retorno[0].turno);
        turma.setCodigo(retorno[0].codigo);
        turma.setVagas(retorno[0].vagas);
        turma.setDisciplina(retorno[0].disciplina);
        turma.setPeriodo(retorno[0].periodo);
        turma.setProfessor(retorno[0].professor);
        avaliacao.setTurma(turma);
        return avaliacao;
      } else{
        return "Avaliação não existente"
      }
    } catch (error) {
      return (error.message);
    }
  }

  static async readAll() {
    try {
    var result = await BD.query("SELECT * FROM avaliacao");
    var avaliacoes = [];
    for (let object of result){
      if (object.deleted == 0){
        var avaliacao = new Avaliacao();
        avaliacao.setId(object.id);
        avaliacao.setNome(object.nome);
        avaliacao.setData(object.data);
        avaliacao.setDescricao(object.descricao);

        var retorno = await BD.query("SELECT * FROM turma WHERE id = " + object.turma );
        var turma= new Turma();
        turma.setId(retorno[0].id);
        turma.setTurno(retorno[0].turno);
        turma.setCodigo(retorno[0].codigo);
        turma.setVagas(retorno[0].vagas);
        turma.setDisciplina(retorno[0].disciplina);
        turma.setPeriodo(retorno[0].periodo);
        turma.setProfessor(retorno[0].professor);
        avaliacao.setTurma(turma);
        avaliacoes.push(avaliacao);
      }
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
      if (object.deleted == 0){
        var avaliacao = new Avaliacao();
        avaliacao.setId(object.id);
        avaliacao.setNome(object.nome);
        avaliacao.setData(object.data);
        avaliacao.setDescricao(object.descricao);

        var retorno = await BD.query("SELECT * FROM turma WHERE id = " + object.turma );
        var turma= new Turma();
        turma.setId(retorno[0].id);
        turma.setTurno(retorno[0].turno);
        turma.setCodigo(retorno[0].codigo);
        turma.setVagas(retorno[0].vagas);
        turma.setDisciplina(retorno[0].disciplina);
        turma.setPeriodo(retorno[0].periodo);
        turma.setProfessor(retorno[0].professor);
        avaliacao.setTurma(turma);
        avaliacoes.push(avaliacao);
      }
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

}
