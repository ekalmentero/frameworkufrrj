import Professor from '../modelos/professor';
import ProfessorDAO from '../DAO/ProfessorDAO';


export default class ProfessorController{

  static async create(professor, id_departamento){
    var professorObj= new Professor();
    professorObj.parseEntidade(professor);
    professorObj.departamento.id=id_departamento;
    return await ProfessorDAO.create(professorObj,id_departamento);
  }

  static async read(id){
    var professor= new Professor();

    professor.Id=id;
    return await ProfessorDAO.read(professor);
  }

  static async update(professor){
    var professorObj= new Professor();

    professorObj.parseEntidade(professor);
    return await ProfessorDAO.update(professorObj);

  }

  static async delete(professor){
    var professorObj= new Professor();
    professorObj.parseEntidade(professor);
    return await ProfessorDAO.delete(professorObj);
  }

  static async readAll(){
    return await ProfessorDAO.readAll()
  }

}
