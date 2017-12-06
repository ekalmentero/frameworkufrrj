"use strict";
import BD from "../BD";
import Aluno from "../modelos/Aluno";

export default class AlunoDAO {

  static async create(aluno, id_curso) {
    try {
      var foreignKeys=[];
      foreignKeys.push(['curso',id_curso]);
      //foreignKeys.push(['grade',aluno.grade]);
      //foreignKeys.push(['usuario',aluno.usuario]);
      var retorno = await BD.inserir(aluno, foreignKeys);
      aluno.setId(retorno);
      return aluno;
      //return await BD.query("INSERT INTO Aluno SET nome='"+aluno.nome+"',matricula='"+aluno.matricula+"',ativo='"+aluno.ativo+"',ingresso='"+aluno.ingresso+"',curso='"+id_curso+"',grade='"+aluno.grade+"',usuario='"+aluno.usuario+"'");
    } catch (error) {
      return error.message;
    }
  }

  static async read(aluno) {
    try {
      var retorno = await BD.buscar(aluno);
      //return retorno[0];
      aluno.setNome(retorno[0].nome);
      aluno.setId(retorno[0].id);
      aluno.setMatricula(retorno[0].matricula);
      aluno.setAtivo(retorno[0].ativo);
      aluno.setIngresso(retorno[0].ingresso);
      /*var tmpCurso = await CursoDAO.read(retorno[0].curso);
      aluno.setCurso(tmpCurso);
      var tmpGrade = await GradeDAO.read(retorno[0].grade);
      aluno.setGrade(tmpGrade);*/
      aluno.setCurso(retorno[0].curso);
      aluno.setGrade(retorno[0].grade);
      aluno.setUsuario(retorno[0].usuario);
      return aluno;
    } catch (error) {
      return (error.message);
    }
  }

  static async readByMatricula(mat_aluno) {
    try {
      var retorno =  await BD.query("SELECT * FROM aluno WHERE matricula = " + mat_aluno);
      var alunos = [];
        var alunoTemp = new Aluno();
        alunoTemp.setNome(retorno[0].nome);
        alunoTemp.setId(retorno[0].id);
        alunoTemp.setMatricula(retorno[0].matricula);
        alunoTemp.setAtivo(retorno[0].ativo);
        alunoTemp.setIngresso(retorno[0].ingresso);
        /*var tmpCurso = await CursoDAO.read(retorno[0].curso);
        alunoTemp.setCurso(tmpCurso);
        var tmpGrade = await GradeDAO.read(retorno[0].grade);
        alunoTemp.setGrade(tmpGrade);*/
        alunoTemp.setCurso(retorno[0].curso);
        alunoTemp.setGrade(retorno[0].grade);
        alunos.push(alunoTemp);
        return alunos;
    } catch (error) {
      return error.message;
    }
  }

  static async readAll() {
    try {
      var result =  await BD.query("SELECT * FROM aluno where deleted = 0");
      var alunos = [];
      var i = 0;
      while(i<result.length){
        var alunoTemp = new Aluno();
        alunoTemp.setNome(result[i].nome);
        alunoTemp.setId(result[i].id);
        alunoTemp.setMatricula(result[i].matricula);
        alunoTemp.setAtivo(result[i].ativo);
        alunoTemp.setIngresso(result[i].ingresso);
        /*var tmpCurso = await CursoDAO.read(result[i].curso);
        alunoTemp.setCurso(tmpCurso);
        var tmpGrade = await GradeDAO.read(result[i].grade);
        alunoTemp.setGrade(tmpGrade);*/
        alunoTemp.setCurso(result[i].curso);
        alunoTemp.setGrade(result[i].grade);
        alunoTemp.setUsuario(result[i].usuario);
        alunos.push(alunoTemp);
        i++;
      }
      return alunos;
    } catch (error) {
      return error.message;
    }  
  }

  static async readAllByCurso(id_curso) {
    try {
      var result = await BD.query("SELECT * FROM aluno WHERE curso = " + id_curso);
      var alunos = [];
      var i = 0;
      while(i<result.length){
        var alunoTemp = new Aluno();
        alunoTemp.setNome(result[i].nome);
        alunoTemp.setId(result[i].id);
        alunoTemp.setMatricula(result[i].matricula);
        alunoTemp.setAtivo(result[i].ativo);
        alunoTemp.setIngresso(result[i].ingresso);
        /*var tmpCurso = await CursoDAO.read(result[i].curso);
        alunoTemp.setCurso(tmpCurso);
        var tmpGrade = await GradeDAO.read(result[i].grade);
        alunoTemp.setGrade(tmpGrade);*/
        alunoTemp.setCurso(result[i].curso);
        alunoTemp.setGrade(result[i].grade);
        alunoTemp.setUsuario(result[i].usuario);
        alunos.push(alunoTemp);
        i++;
      }
      return alunos;
    } catch (error) {
      return error.message;
    } 
  }

  static async update(aluno, id_curso) {
    try {
      if (typeof(id_curso) != "undefined"){
        var foreignKeys = [];
        foreignKeys.push(['curso',id_curso]);
        //foreignKeys.push(['grade',aluno.getGrade()]);
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

  static async listarAlunosTurma(id){
    try {
      var i=0;
      var result= await BD.query("SELECT aluno FROM aluno_turma WHERE turma="+id);
      var array= new Array();
  
        while(i<result.length){
        var alunoTemp= new Aluno();
        alunoTemp.setId(result[i].aluno);
        var resultAluno=await BD.buscar(alunoTemp);
  
        alunoTemp.setNome(resultAluno[0].nome);
        alunoTemp.setMatricula(resultAluno[0].matricula);
        alunoTemp.setAtivo(resultAluno[0].ativo);
        alunoTemp.setIngresso(resultAluno[0].ingresso);
        /*var tmpCurso = await CursoDAO.read(resultAluno[0].curso);
        alunoTemp.setCurso(tmpCurso);
        var tmpGrade = await GradeDAO.read(resultAluno[0].grade);
        alunoTemp.setGrade(tmpGrade);*/
        alunoTemp.setCurso(resultAluno[0].curso);
        alunoTemp.setGrade(resultAluno[0].grade);
        alunoTemp.setUsuario(resultAluno[0].usuario);
  
  
        array.push(resultAluno[0]);
        i++;
      }
      return array;
    } catch (error) {
      return error.message;
    }
  }
}
