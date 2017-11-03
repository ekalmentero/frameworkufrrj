import Turma from "../modelos/Turma";
import Professor from "../modelos/Professor";
import Periodo from '../modelos/Periodo';
import Disciplina from '../modelos/disciplina';
import ProfessorDAO from '../DAO/ProfessorDAO';
import DisciplinaDAO from '../DAO/disciplinaDAO';
import PeriodoDAO from '../DAO/PeriodoDAO';
import BD from "../BD";


export default class TurmaDAO{
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
    return await BD.update(turma);
  }

  static async listarProfessores(professor){
    var id= professor.getId;
    var result = await BD.query('SELECT * FROM turma WHERE professor=?',id);
    var array= new Array();
    var i=0;

    while(i<result.lenght){
      var turmaTemp= new Turma();
      turmaTemp.setCodigo(result[i].codigo);
      turmaTemp.setVagas(result[i].vagas);
      turmaTemp.setProfessor(ProfessorDAO.read(result[i].professor));
      turmaTemp.setPeriodo(PeridoDAO.read(result[i].periodo));
      turmaTemp.setDisciplina(DisciplinaDAO.read(result[i].disciplina));
      array.push(turmaTemp);
      i++;

    }
    return array;
  }
}
