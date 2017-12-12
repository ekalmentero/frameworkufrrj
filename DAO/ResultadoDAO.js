import BD from "../BD";
import Resultado from "../modelos/Resultado";
import Aluno from "../modelos/Aluno";
import Avaliacao from "../modelos/Avaliacao";
import AlunoDAO from "./AlunoDAO";
import AvaliacaoDAO from "./AvaliacaoDAO";
("use strict");

export default class ResultadoDAO {
  static async create(resultado, id_avaliacao) { //Serviço: Inserir nota para uma avaliação
    try {
      await BD.query(
        "INSERT INTO avaliacao_aluno SET avaliacao = "+id_avaliacao+", aluno = "+resultado.aluno+", nota = "+resultado.nota
      );
      var resultadoTemp = new Resultado();
      resultadoTemp.setNota(resultado.nota);
      resultadoTemp.setAluno(resultado.aluno);
      resultadoTemp.setAvaliacao(id_avaliacao);
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
        resultadoTemp.setNota(result[i].nota);

        //criando o obj aluno
        var tmpAluno= await BD.query("SELECT * FROM aluno WHERE id='"+result[i].aluno+"'");
        var alunoObj = new Aluno();
        alunoObj.setId(tmpAluno[0].id);
        alunoObj.setNome(tmpAluno[0].nome);
        alunoObj.setMatricula(tmpAluno[0].matricula);
        alunoObj.setAtivo(tmpAluno[0].ativo);
        alunoObj.setIngresso(tmpAluno[0].ingresso);
        alunoObj.setCurso(tmpAluno[0].curso);
        resultadoTemp.setAluno(alunoObj);

        //criando o obj avaliacao
        var tmpAvaliacao= await BD.query("SELECT * FROM avaliacao WHERE id='"+result[i].avaliacao+"'");
        var avaliacaoObj = new Avaliacao();
        avaliacaoObj.setId(tmpAvaliacao[0].id);
        avaliacaoObj.setNome(tmpAvaliacao[0].nome);
        avaliacaoObj.setData(tmpAvaliacao[0].data);
        avaliacaoObj.setDescricao(tmpAvaliacao[0].descricao);
        avaliacaoObj.setTurma(tmpAvaliacao[0].turma);
        resultadoTemp.setAvaliacao(avaliacaoObj);

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
        resultadoTemp.setNota(result[i].nota);
        
        //criando o obj aluno
        var tmpAluno= await BD.query("SELECT * FROM aluno WHERE id='"+result[i].aluno+"'");
        var alunoObj = new Aluno();
        alunoObj.setId(tmpAluno[0].id);
        alunoObj.setNome(tmpAluno[0].nome);
        alunoObj.setMatricula(tmpAluno[0].matricula);
        alunoObj.setAtivo(tmpAluno[0].ativo);
        alunoObj.setIngresso(tmpAluno[0].ingresso);
        alunoObj.setCurso(tmpAluno[0].curso);
        resultadoTemp.setAluno(alunoObj);

        //criando o obj avaliacao
        var tmpAvaliacao= await BD.query("SELECT * FROM avaliacao WHERE id='"+result[i].avaliacao+"'");
        var avaliacaoObj = new Avaliacao();
        avaliacaoObj.setId(tmpAvaliacao[0].id);
        avaliacaoObj.setNome(tmpAvaliacao[0].nome);
        avaliacaoObj.setData(tmpAvaliacao[0].data);
        avaliacaoObj.setDescricao(tmpAvaliacao[0].descricao);
        avaliacaoObj.setTurma(tmpAvaliacao[0].turma);
        resultadoTemp.setAvaliacao(avaliacaoObj);

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
        resultadoTemp.setNota(result[i].nota);

        //criando o obj aluno
        var tmpAluno= await BD.query("SELECT * FROM aluno WHERE id='"+result[i].aluno+"'");
        var alunoObj = new Aluno();
        alunoObj.setId(tmpAluno[0].id);
        alunoObj.setNome(tmpAluno[0].nome);
        alunoObj.setMatricula(tmpAluno[0].matricula);
        alunoObj.setAtivo(tmpAluno[0].ativo);
        alunoObj.setIngresso(tmpAluno[0].ingresso);
        alunoObj.setCurso(tmpAluno[0].curso);
        resultadoTemp.setAluno(alunoObj);

        //criando o obj avaliacao
        var tmpAvaliacao= await BD.query("SELECT * FROM avaliacao WHERE id='"+result[i].avaliacao+"'");
        var avaliacaoObj = new Avaliacao();
        avaliacaoObj.setId(tmpAvaliacao[0].id);
        avaliacaoObj.setNome(tmpAvaliacao[0].nome);
        avaliacaoObj.setData(tmpAvaliacao[0].data);
        avaliacaoObj.setDescricao(tmpAvaliacao[0].descricao);
        avaliacaoObj.setTurma(tmpAvaliacao[0].turma);
        resultadoTemp.setAvaliacao(avaliacaoObj);

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
      return true;
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
