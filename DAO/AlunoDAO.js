"use strict";
import BD from "../BD";
import CursoDAO from './cursoDAO';
import GradeDAO from './GradeDAO';
import Aluno from "../modelos/Aluno";
import Avaliacao from "../modelos/Avaliacao";
import AvaliacaoAluno from "../modelos/AvaliacaoAluno";

export default class AlunoDAO {
  
  static async create(aluno) {
    try {
      var retorno = await BD.inserir(aluno);
      aluno.setId(retorno);
      return aluno;
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

      var tmpCurso = await CursoDAO.read(retorno[0].curso);
      aluno.setCurso(tmpCurso);
      
      var tmpGrade = await GradeDAO.read(retorno[0].grade);
      aluno.setGrade(tmpGrade);
      return aluno;
    } catch (error) {
      return error.message;
    }
  }

  static async readAll() {
    return await BD.query("SELECT * FROM aluno");
  }

  static async update(aluno) {
    try {
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
    var id=turma.getId; //pega o id da turma que vem do controller
    var i=0;
    var result=BD.query('SELECT aluno FROM aluno_turma WHERE turma='+id); 
    var array= new Array();

    while(i<result.length){
      var alunoTemp= new Aluno(); //variável temp de turma
      alunoTemp.setId(result[i].aluno); //faz a busca do aluno usando os ids da busca da linha 83, usando o i para navegar pelas posições
      var resultAluno=BD.buscar(alunoTemp); //faz a busca
      alunoTemp.setNome(resultAluno[0].nome); //instancia o objeto
      alunoTemp.setMatricula(resultAluno[0].matricula);
      alunoTemp.setAtivo(resultAluno[0].ativo);
      alunoTemp.setIngresso(resultAluno[0].ingresso);
      alunoTemp.setCurso(CursoDAO.read(resultAluno[0].curso));
      alunoTemp.setGrade(GradeDAO.read(resultAluno[0].grade));
      array.push(alunoTemp); //joga no array
      i++;
    }
    return array;
  }

  //CRUD QUE SAIU DE AVALICAOALUNODAO
  static async createNota(avaliacaoAluno){
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
  }
}
