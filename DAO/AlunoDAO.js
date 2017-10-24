import BD from "../BD";
import Aluno from "../modelos/Aluno";
import AvaliacaoAluno from "../modelos/AvaliacaoAluno";
("use strict");
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
  static async createAvaliacao(avaliacao, aluno, nota) {
    //CRUD QUE SAIU DE AVALICAOALUNODAO
    try {
      var tmpAvl = new AvaliacaoAluno();
      tmpAvl.setAvaliacao(avaliacao);
      tmpAvl.setAluno(aluno);
      tmpAvl.setNota(nota);
      BD.inserir(tmpAvl);
    } catch (error) {
      return error.message;
    }
  }

  static async updateAvaliacao(avaliacaoAluno) {
    try {
      return await BD.update(avaliacaoAluno);
    } catch (error) {
      return error.message;
    }
  }
  static async deleteAvaliacao(avaliacaoAluno) {
    try {
      return await BD.deletar(avaliacaoAluno);
    } catch (error) {
      return error.message;
    }
  }

  static async read(alunoId) {
    try {
      var tmpAluno = new Aluno();
      tmpAluno.setId(alunoId);

      var retorno = await BD.buscar(tmpAluno);
      tmpAluno.setNome(retorno.nome);
      tmpAluno.setId(retorno.alunoId);
      tmpAluno.setMatricula(retorno.matricula);
      tmpAluno.setAtivo(retorno.ativo);
      tmpAluno.setIngresso(retorno.ingresso);
      tmpAluno.setCurso(retorno.curso);
      tmpAluno.setGrade(retorno.grade);
      return tmpAluno;
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
}
