import Turma from "../model/Turma";
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
      var turma= result[0];

      return turma;
    }
    catch(error){
      error.message;
    }
  }

  static async readAll(){
      return await BD.query("SELECT * FROM turma");
  }

  static async readAllByProfessor(id_professor){
      return await BD.query("SELECT t.id, t.turno, t.codigo, t.vagas, d.nome as disciplina, p.nome as periodo, z.nome as professor FROM turma t JOIN periodo p ON t.periodo = p.id JOIN disciplina d ON t.disciplina = d.id JOIN professor z ON t.professor = z.id WHERE t.professor = " + id_professor);
      var turmas = [];
      for (let object of result){
          var turma = new Turma();
          turma.parseEntidade(object);
          turmas.push(turma);
      } 
      return turmas;
  }

  static async delete(turma){
    return await BD.deletar(turma);
  }

  static async update(turma){
    return await BD.buscar(turma);
  }
}