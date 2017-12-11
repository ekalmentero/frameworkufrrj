import Turma from '../modelos/turma';
import Professor from '../modelos/professor';
import Aluno from '../modelos/Aluno';
import TurmaDAO from '../DAO/TurmaDAO';


export default class TurmaController{

  static async create(turma,id_disciplina,periodo){
    var turmaObj= new Turma();
    //var turmaJson=JSON.stringify(turma);
    //turmaObj.codigo="AA";
    turmaObj.setCodigo(turma.codigo);
    turmaObj.setTurno(turma.turno);
    turmaObj.setVagas(turma.vagas);
    //console.log(turmaObj.codigo);
    return await TurmaDAO.create(turmaObj,id_disciplina,periodo);
  }

  static async read(id){
    var turma= new Turma();

    turma.id=id;
    return await TurmaDAO.read(turma);
  }

  static async update(turma){
    var turmaObj= new Turma();
    turmaObj.setCodigo(turma.codigo);
    turmaObj.setTurno(turma.turno);
    turmaObj.setVagas(turma.vagas);
    turmaObj.setId(turma.id);
    return await TurmaDAO.update(turmaObj);

  }

  static async delete(turma){
    var turmaObj= new Turma();
    turmaObj.setId(turma.id);
    return await TurmaDAO.delete(turmaObj);
  }

  static async readAll(){
    return await TurmaDAO.readAll()
  }

  static async listarTurmasProfessor(id_professor){
    //professor.setMatricula('haha');
    //console.log(professor.getMatricula());
    return await TurmaDAO.listarTurmasProfessor(id_professor);
  }

  static async listarTurmasAluno(id_aluno){
    return await TurmaDAO.listarTurmasAluno(id_aluno);
  }

  static async insertProfessorTurma(turma,id_professor){
    var turmaObj= new Turma();
    console.log(id_professor);
    turmaObj.setId(turma.id);
    console.log("entrou no if");
    return await TurmaDAO.insertProfessorTurma(turmaObj,id_professor);
  }

}
