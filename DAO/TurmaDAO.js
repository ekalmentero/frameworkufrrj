import Professor from "../modelos/Turma";
import BD from "../BD";


class TurmaDAO{
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
      var result= await BD.select(turma);
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

  static async delete(turma){
    return await BD.deletar(turma);
  }

  static async update(turma){
    return await BD.select(turma);
  }
