
import Professor from "../modelos/Professor";
import BD from "../BD";

export default class ProfessorDAO{

  static async create(professor){
    try{
      var id= await BD.inserir(professor);
      professor.setId(id);
      return professor;
    }
    catch(error){
      error.message;
    }
  }

  static async read(professor){

    try{
      var result= await BD.select(professor);
      var professor= new Professor();
      professor.setId(result[0].id);
      professor.setNome(result[0].nome);
      professor.setMatricula(result[0].matricula);
      return professor;
    }
    catch(error){
      error.message;
    }
  }
  static async readAll(){
      return await BD.query("SELECT * FROM professor");
  }

  static async update(professor){

    try{
      return await BD.select(professor);
    }
    catch(erorr){
      error.message;
    }
  }

  static async delete(id){
    try{
      return await BD.deletar(id);
    }
    catch(error){
      error.message;
    }
  }
}
