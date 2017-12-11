import Professor from '../modelos/professor';
import ProfessorDAO from '../DAO/ProfessorDAO';


export default class ProfessorController{

  static async create(professor, id_departamento){
    var professorObj= new Professor();
    professorObj.setNome(professor.nome);
    professorObj.setMatricula(professor.matricula);
    professorObj.setDepartamento(id_departamento);
    var id_usuario=professor.usuario;

    return await ProfessorDAO.create(professorObj,id_departamento,id_usuario);
  }

  static async read(id){

    var professor= new Professor();

    professor.setId(id);
    return await ProfessorDAO.read(professor);
  }

  static async update(professor){
    var professorObj= new Professor();
    professorObj.setNome(professor.nome);
    professorObj.setMatricula(professor.matricula);
    professorObj.setId(professor.id);
    professorObj.setDepartamento(professor.departamento);

    return await ProfessorDAO.update(professorObj);

  }

  static async delete(professor){
    var professorObj= new Professor();
    professorObj.setId(professor.id);
    return await ProfessorDAO.delete(professorObj);
  }

  static async readAll(){
    return await ProfessorDAO.readAll()
  }

}
