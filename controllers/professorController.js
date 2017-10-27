import Professor from '../modelos/professor';
import ProfessorDAO from '../DAO/ProfessorDAO';


export default class ProfessorController{

  static async create(professor){
    var professorObj= new Professor();
    professorObj.parseDisciplina(professor);
    return await ProfessorDAO.create(professorObj);
  }
}
