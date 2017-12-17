import Turma from '../modelos/turma';
import TurmaDAO from '../DAO/TurmaDAO';


export default class ProfessorController{

  static async create(turma){
    var turmaObj= new Turma();
    turmaObj.parseDisciplina(turma);
    return await TurmaDAO.create(turmaObj);
  }
  
  static async readAllByProfessor(id_professor){
      return await TurmaDAO.readAllByProfessor(id_professor);
  }

  static async read(id){
    var turma= new Turma();

    turma.setId(id);
    return await TurmaDAO.read(turma);
  }

  static async update(turma){
    var turmaObj= new Turma();

    turmaObj.parseDisciplina(turma);
    return await TurmaController.update(turmaObj);

  }

  static async delete(turma){
    var turmaObj= new Turma();
    turmaObj.parseDisciplina(turma);
    return await TurmaController.delete(turmaObj);
  }

  static async readAll(){
    return await TurmaDAO.readAll()
  }

}
