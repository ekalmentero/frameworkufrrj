"use strict";
import BD from "../BD";
import TumarDAO from './TurmaDAO';
import AlunoDAO from './AlunoDAO';
import ConceitoDAO from './conceitoDAO';

export default class AlunoTurmaDAO {

  static async create(alunoTurma) {
    try {
      foreignKeys = [];
      if (alunoTurma.turma != undefined){
        foreignKeys.push(['turma', alunoTurma.turma]);
      }

      if (alunoTurma.aluno != undefined){
        foreignKeys.push(['aluno', alunoTurma.aluno]);
      }

      if (alunoTurma.conceito != undefined){
        foreignKeys.push(['conceito', alunoTurma.conceito]);
      }

      var retorno = await BD.inserir(alunoTurma, foreignKeys);
      alunoTurma.setId(retorno);
      return alunoTurma;
    } catch (error) {
      return error.message;
    }
  }

  static async read(alunoTurma) {
    try {
      var retorno = await BD.buscar(alunoTurma);
      alunoTurma.setNotaFinal(retorno[0].nota_final);

      var tmpAluno = await AlunoDAO.read(retorno[0].aluno);
      alunoTurma.setAluno(tmpAluno);

      var tmpTurma = await TurmaDAO.read(retorno[0].turma);
      alunoTurma.setTurma(tmpTurma);

      var tmpConceito = await ConceitoDAO.read(retorno[0].conceito);
      alunoTurma.setConceito(tmpConceito);

      return alunoTurma;
    } catch (error) {
      return error.message;
    }
  }

  static async readAll() {
    return await BD.query("SELECT * FROM aluno_turma");
  }

  static async update(alunoTurma, idAluno = undefined, idConceito = undefined, idTurma = undefined){
      try {
          foreignKeys = [];

          if (typeof(idAluno) != undefined)
            foreignKeys.push(['aluno', idAluno]);

          if (typeof(idConceito) != undefined)
            foreignKeys.push(['conceito', idConceito]);

          if (typeof(idTurma) != undefined)
            foreignKeys.push(['turma', idTurma]);

          return await BD.update(alunoTurma, foreignKeys);
      } catch (error) {
        return error.message;
      }
  }
}
