"use strict";
import BD from "../BD";
import Aluno from "../modelos/Aluno";
import Avaliacao from "../modelos/Avaliacao";
import Curso from "../modelos/curso";
import Grade from "../modelos/Grade";
import CursoDAO from "./cursoDAO";
import GradeDAO from "./GradeDAO";

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
      aluno.setNome(retorno[0].nome);
      aluno.setId(retorno[0].id);
      aluno.setMatricula(retorno[0].matricula);
      aluno.setAtivo(retorno[0].ativo);
      aluno.setIngresso(retorno[0].ingresso);

      //criando o objeto curso de Aluno
      var tmpCurso= await BD.query("SELECT * FROM curso WHERE id='"+retorno[0].curso+"'");
      var cursoObj = new Curso();
      cursoObj.setCodigo(tmpCurso[0].codigo);
      cursoObj.setId(tmpCurso[0].id);
      cursoObj.setNome(tmpCurso[0].nome);
      cursoObj.setLimite_periodos(tmpCurso[0].limite_periodos);
      cursoObj.setTurno(tmpCurso[0].turno);
      cursoObj.setDepartamento_id(tmpCurso[0].departamento_id);
      aluno.setCurso(cursoObj);
      
      //criando o objeto grade de Aluno
      var tmpGrade= await BD.query("SELECT * FROM grade WHERE id='"+retorno[0].grade+"'");
      var gradeObj = new Grade();
      gradeObj.setId(tmpGrade[0].id);
      gradeObj.setInicio_vigencia(tmpGrade[0].inicio_vigencia);
      gradeObj.setDisponivel(tmpGrade[0].disponivel);
      gradeObj.setCurso(tmpGrade[0].curso);
      aluno.setGrade(gradeObj);
      
      return aluno;
    } catch (error) {
      return (error.message);
    }
  }

  static async readByMatricula(mat_aluno) {
    try {
      var retorno =  await BD.query("SELECT * FROM aluno WHERE matricula = " + mat_aluno);
        var alunoTemp = new Aluno();
        alunoTemp.setNome(retorno[0].nome);
        alunoTemp.setId(retorno[0].id);
        alunoTemp.setMatricula(retorno[0].matricula);
        alunoTemp.setAtivo(retorno[0].ativo);
        alunoTemp.setIngresso(retorno[0].ingresso);

      //criando o objeto curso de Aluno
      var tmpCurso= await BD.query("SELECT * FROM curso WHERE id='"+retorno[0].curso+"'");
      var cursoObj = new Curso();
      cursoObj.setCodigo(tmpCurso[0].codigo);
      cursoObj.setId(tmpCurso[0].id);
      cursoObj.setNome(tmpCurso[0].nome);
      cursoObj.setLimite_periodos(tmpCurso[0].limite_periodos);
      cursoObj.setTurno(tmpCurso[0].turno);
      cursoObj.setDepartamento_id(tmpCurso[0].departamento_id);
      alunoTemp.setCurso(cursoObj);
      
      //criando o objeto grade de Aluno
      var tmpGrade= await BD.query("SELECT * FROM grade WHERE id='"+retorno[0].grade+"'");
      var gradeObj = new Grade();
      gradeObj.setId(tmpGrade[0].id);
      gradeObj.setInicio_vigencia(tmpGrade[0].inicio_vigencia);
      gradeObj.setDisponivel(tmpGrade[0].disponivel);
      gradeObj.setCurso(tmpGrade[0].curso);
      alunoTemp.setGrade(gradeObj);
      
      return alunoTemp;
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

        //criando o objeto curso de Aluno
        var tmpCurso= await BD.query("SELECT * FROM curso WHERE id='"+result[i].curso+"'");
        var cursoObj = new Curso();
        cursoObj.setCodigo(tmpCurso[0].codigo);
        cursoObj.setId(tmpCurso[0].id);
        cursoObj.setNome(tmpCurso[0].nome);
        cursoObj.setLimite_periodos(tmpCurso[0].limite_periodos);
        cursoObj.setTurno(tmpCurso[0].turno);
        cursoObj.setDepartamento_id(tmpCurso[0].departamento_id);
        alunoTemp.setCurso(cursoObj);
      
        //criando o objeto grade de Aluno
        var tmpGrade= await BD.query("SELECT * FROM grade WHERE id='"+result[i].grade+"'");
        var gradeObj = new Grade();
        gradeObj.setId(tmpGrade[0].id);
        gradeObj.setInicio_vigencia(tmpGrade[0].inicio_vigencia);
        gradeObj.setDisponivel(tmpGrade[0].disponivel);
        gradeObj.setCurso(tmpGrade[0].curso);
        alunoTemp.setGrade(gradeObj);

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
        
        //criando o objeto curso de Aluno
        var tmpCurso= await BD.query("SELECT * FROM curso WHERE id='"+result[i].curso+"'");
        var cursoObj = new Curso();
        cursoObj.setCodigo(tmpCurso[0].codigo);
        cursoObj.setId(tmpCurso[0].id);
        cursoObj.setNome(tmpCurso[0].nome);
        cursoObj.setLimite_periodos(tmpCurso[0].limite_periodos);
        cursoObj.setTurno(tmpCurso[0].turno);
        cursoObj.setDepartamento_id(tmpCurso[0].departamento_id);
        alunoTemp.setCurso(cursoObj);
      
        //criando o objeto grade de Aluno
        var tmpGrade= await BD.query("SELECT * FROM grade WHERE id='"+result[i].grade+"'");
        var gradeObj = new Grade();
        gradeObj.setId(tmpGrade[0].id);
        gradeObj.setInicio_vigencia(tmpGrade[0].inicio_vigencia);
        gradeObj.setDisponivel(tmpGrade[0].disponivel);
        gradeObj.setCurso(tmpGrade[0].curso);
        alunoTemp.setGrade(gradeObj);

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
      var alunos= new Array();
  
        while(i<result.length){
        var alunoTemp= new Aluno();
        alunoTemp.setId(result[i].aluno);
        var resultAluno=await BD.buscar(alunoTemp);
  
        alunoTemp.setNome(resultAluno[0].nome);
        alunoTemp.setMatricula(resultAluno[0].matricula);
        alunoTemp.setAtivo(resultAluno[0].ativo);
        alunoTemp.setIngresso(resultAluno[0].ingresso);
        
        //criando o objeto curso de Aluno
        var tmpCurso= await BD.query("SELECT * FROM curso WHERE id='"+resultAluno[0].curso+"'");
        var cursoObj = new Curso();
        cursoObj.setCodigo(tmpCurso[0].codigo);
        cursoObj.setId(tmpCurso[0].id);
        cursoObj.setNome(tmpCurso[0].nome);
        cursoObj.setLimite_periodos(tmpCurso[0].limite_periodos);
        cursoObj.setTurno(tmpCurso[0].turno);
        cursoObj.setDepartamento_id(tmpCurso[0].departamento_id);
        alunoTemp.setCurso(cursoObj);
      
        //criando o objeto grade de Aluno
        var tmpGrade= await BD.query("SELECT * FROM grade WHERE id='"+resultAluno[0].grade+"'");
        var gradeObj = new Grade();
        gradeObj.setId(tmpGrade[0].id);
        gradeObj.setInicio_vigencia(tmpGrade[0].inicio_vigencia);
        gradeObj.setDisponivel(tmpGrade[0].disponivel);
        gradeObj.setCurso(tmpGrade[0].curso);
        alunoTemp.setGrade(gradeObj);
   
        alunos.push(alunoTemp);
        i++;
      }
      return alunos;
    } catch (error) {
      return error.message;
    }
  }
}
