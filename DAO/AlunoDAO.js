"use strict";
import BD from "../BD";
import Aluno from "../modelos/Aluno";

export default class AlunoDAO {
  
  static async create(aluno, id_curso, id_grade) {
    try {
      var foreignKeys=[];
      foreignKeys.push(['curso',id_curso]);
      foreignKeys.push(['grade',id_grade]);
      var retorno = await BD.inserir(aluno, foreignKeys);
      aluno.setId(retorno);
      return aluno;
    } catch (error) {
      return error.message;
    }
  }

  static async read(aluno) {
    try {
      var retorno = await BD.buscar(aluno);
      return retorno[0];
      /*aluno.setNome(retorno[0].nome);
      aluno.setId(retorno[0].id);
      aluno.setMatricula(retorno[0].matricula);
      aluno.setAtivo(retorno[0].ativo);
      aluno.setIngresso(retorno[0].ingresso);
      var tmpCurso = await CursoDAO.read(retorno[0].curso);
      aluno.setCurso(tmpCurso);
      var tmpGrade = await GradeDAO.read(retorno[0].grade);
      aluno.setGrade(tmpGrade);
      return aluno;*/
    } catch (error) {
      return error.message;
    }
  }

  static async readByCurso(id_aluno, id_curso) {
    return await BD.query("SELECT * FROM aluno WHERE id = " + id_aluno + " AND curso = " + id_curso);
  }

  static async readByMatricula(mat_aluno) {
    return await BD.query("SELECT * FROM aluno WHERE matricula = " + mat_aluno);
  }

  static async readAll() {
    return await BD.query("SELECT * FROM aluno");
  }

  static async readAllByCurso(id_curso) {
    return await BD.query("SELECT * FROM aluno WHERE curso = " + id_curso);
  }

  static async update(aluno, id_curso, id_grade) {
    try {
      if (typeof(id_curso) != "undefined" && typeof(id_grade) != "undefined"){
        var foreignKeys = [];
        foreignKeys.push(['curso',id_curso]);
        foreignKeys.push(['grade',id_grade]);
        return await BD.update(aluno, foreignKeys);
      }
      else if (typeof(id_curso) != "undefined" && typeof(id_grade) == "undefined"){
        var foreignKeys = [];
        foreignKeys.push(['curso',id_curso]);
        return await BD.update(aluno, foreignKeys);
      }
      else if (typeof(id_curso) == "undefined" && typeof(id_grade) != "undefined"){
        var foreignKeys = [];
        foreignKeys.push(['grade',id_grade]);
        return await BD.update(aluno, foreignKeys);
      }
      else 
        return await BD.update(aluno);
    } catch (error) {
      return error.message;
    }
  }

  static async delete(aluno) {
    try {
      return await BD.deletar(aluno);
    } catch (error) {
      return error.message;
    }
  }

  static async listarAlunosTurma(turma){
    var id=turma.getId();
    var i=0;
    var result=BD.query('SELECT aluno FROM aluno_turma WHERE turma='+id); 
    var array= new Array();

    while(i<result.length){
      var alunoTemp= new Aluno();
      alunoTemp.setId(result[i].aluno);
      var resultAluno=BD.buscar(alunoTemp); 
      alunoTemp.setNome(resultAluno[0].nome);
      alunoTemp.setMatricula(resultAluno[0].matricula);
      alunoTemp.setAtivo(resultAluno[0].ativo);
      alunoTemp.setIngresso(resultAluno[0].ingresso);
      array.push(alunoTemp);
      i++;
    }
    return array;
  }

  //CRUD QUE SAIU DE AVALICAOALUNODAO
  /*static async createNota(avaliacaoAluno){
    try {
      await BD.inserir(avaliacaoAluno);
    } catch (error) {
      return error.message;
    }
  }

  static async updateNota(avaliacaoAluno) {
    try {
      return await BD.update(avaliacaoAluno);
    } catch (error) {
      return error.message;
    }
  }
  
  static async deleteNota(avaliacaoAluno) {
    try {
      return await BD.deletar(avaliacaoAluno);
    } catch (error) {
      return error.message;
    }
  }*/
}
