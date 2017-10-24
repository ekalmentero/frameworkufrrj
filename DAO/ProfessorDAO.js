
import Professor from "../modelos/Professor";
import BD from "../BD";

class ProfessorDAO{

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
      var professor= result[0];
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

  static async delete(professor){
    try{
      return await BD.deletar(professor);
    }
    catch(error){
      error.message;
    }
  }
}
