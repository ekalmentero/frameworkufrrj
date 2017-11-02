import Turma from "../modelos/Turma";
import ProfessorDAO from '../DAO/ProfessorDAO';
import disciplinaDAO from '../DAO/disciplinaDAO';
import PeriodoDAO from '../DAO/periodoDAO';
import BD from "../BD";


export class TurmaDAO{
  constructor(){

  }

  static async create(turma){
    try{
      var id= await BD.inserir(turma);
      turma.setId(id);
      return turma;
    }catch(error){
      error.message;
    }

  }

  static async read(turma){
    try{
      var result= await BD.buscar(turma);
      var turmaTemp= new Turma();
      turmaTemp.setCodigo(result[0].codigo);
      turmaTemp.setVagas(result[0].vagas);
      turmaTemp.setProfessor(ProfessorDAO.read(result[0].professor));
      turmaTemp.setPeriodo(PeridoDAO.read(result[0].periodo));
      turmaTemp.setDisciplina(DisciplinaDAO.read(result[0].disciplina));

      return turmaTemp;
    }
    catch(error){
      error.message;
    }
  }

  static async readAll(){
      return await BD.query("SELECT * FROM turma");
  }

  static async delete(turma){
    return await BD.deletar(turma);
  }

  static async update(turma){
    return await BD.buscar(turma);
  }
}
