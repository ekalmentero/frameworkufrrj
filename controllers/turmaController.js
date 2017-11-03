import Turma from '../modelos/turma';
import Professor from '../modelos/professor';
import TurmaDAO from '../DAO/TurmaDAO';


export default class TurmaController{

  static async create(turma){
    var turmaObj= new Turma();
    turmaObj.parseEntidade(turma);
    return await TurmaDAO.create(turmaObj);
  }

  static async read(id){
    var turma= new Turma();

    turma.setId(id);
    return await TurmaDAO.read(turma);
  }

  static async update(turma){
    var turmaObj= new Turma();
    turmaObj.parseEntidade(turma);
    return await TurmaDAO.update(turmaObj);

  }

  static async delete(turma){
    var turmaObj= new Turma();
    turmaObj.parseEntidade(turma);
    return await TurmaDAO.delete(turmaObj);
  }

  static async readAll(){
    return await TurmaDAO.readAll()
  }

  static async listarTurmas(id){
    var professor= new Professor();
    professor.setId(id);
    //professor.setMatricula('haha');
    //console.log(professor.getMatricula());
    return await TurmaDAO.listarTurmaProfessores(professor);
  }

}
