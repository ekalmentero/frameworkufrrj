import Professor from '../modelos/professor';
import ProfessorDAO from '../DAO/ProfessorDAO';


export default class ProfessorController{

  static async create(professor){
    var professorObj= new Professor();
    professorObj.parseDisciplina(professor);
    return await ProfessorDAO.create(professorObj);
  }

  static async read(id){
    var professor= new Professor();

    professor.setId(id);
    return await ProfessorDAO.read(professor);
  }

  static async update(professor){
    var professorObj= new Professor();

    professorObj.parseDisciplina(professor);
    return await ProfessorDAO.update(professorObj);

  }

  static async delete(professor){
    var professorObj= new Professor();
    professorObj.parseDisciplina(professor);
    return await ProfessorDAO.delete(professorObj);
  }

  static async readAll(){
    return await ProfessorDAO.readAll()
  }

}
