import BD from "../BD";
import Resultado from "../modelos/Resultado";

("use strict");

export default class ResultadoDAO {
  static async create(resultado, id_avaliacao) { //Serviço: Inserir nota para uma avaliação
    try {
      await BD.query(
        "INSERT INTO avaliacao_aluno SET avaliacao = "+id_avaliacao+", aluno = "+resultado.aluno+", nota = "+resultado.nota
      );
      var resultadoTemp = new Resultado();
      resultadoTemp.setAvaliacao(id_avaliacao);
      resultadoTemp.setAluno(resultado.aluno);
      resultadoTemp.setNota(resultado.nota);
      return resultadoTemp;
    } catch (error) {
      return error.message;
    }
  }

  static async readAll() {
    try {
      var result = await BD.query("SELECT * FROM avaliacao_aluno");
      var Resultados = [];
      var i = 0;
      while(i<result.length){
        var resultadoTemp = new Resultado();
        resultadoTemp.setAvaliacao(result[i].avaliacao);
        resultadoTemp.setNota(result[i].nota);
        resultadoTemp.setAluno(result[i].aluno);
        Resultados.push(resultadoTemp);
        i++;
      }
      return Resultados;
    } catch (error) {
      return error.message;
    }  
  }

  static async readAllByAluno(id_aluno) {
    try {
      var result = await BD.query("SELECT * FROM avaliacao_aluno WHERE aluno = " + id_aluno);
      var Resultados = [];
      var i = 0;
      while(i<result.length){
        var resultadoTemp = new Resultado();
        resultadoTemp.setAvaliacao(result[i].avaliacao);
        resultadoTemp.setNota(result[i].nota);
        resultadoTemp.setAluno(result[i].aluno);
        Resultados.push(resultadoTemp);
        i++;
      }
      return Resultados;
    } catch (error) {
      return error.message;
    }
  }
  
  static async readAllByAvaliacao(id_avaliacao) { //Serviço: Listar notas de uma avaliação
    try {
      var result = await BD.query("SELECT * FROM avaliacao_aluno WHERE avaliacao = " + id_avaliacao);
      var Resultados = [];
      var i = 0;
      while(i<result.length){
        var resultadoTemp = new Resultado();
        resultadoTemp.setAvaliacao(result[i].avaliacao);
        resultadoTemp.setNota(result[i].nota);
        resultadoTemp.setAluno(result[i].aluno);
        Resultados.push(resultadoTemp);
        i++;
      }
      return Resultados;
    } catch (error) {
      return error.message;
    }
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
