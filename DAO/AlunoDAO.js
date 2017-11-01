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
      aluno.setId(retorno[0].alunoId);
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

  static async createNota(avaliacaoAluno){ //CRUD QUE SAIU DE AVALICAOALUNODAO
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
