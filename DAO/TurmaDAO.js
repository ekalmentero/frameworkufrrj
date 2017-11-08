import Turma from "../modelos/Turma";
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
      var tmpturma = new Turma();
      tmpturma.setId(result[0].id);
      tmpturma.setCodigo(result[0].codigo);
      tmpturma.setVagas(result[0].vagas);
      tmpturma.setDisciplina(result[0].disciplina);
      tmpturma.setPeriodo(result[0].periodo);
      tmpturma.setProfessor(result[0].professor);


      return tmpturma;
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