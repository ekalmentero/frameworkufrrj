
import Professor from "../modelos/Professor";
import BD from "../BD";

export default class ProfessorDAO{

  static async create(professor,id_departamento){
    try{
      var foreignKeys= [];
      //foreignKeys.push(['departamento',id_departamento]);
      var id= await BD.inserir(professor);
      professor.id=id;
      console.log(professor.getId);
      return professor;

    }
    catch(error){
      error.message;
    }
  }

  static async read(professor){

    try{
      var result= await BD.buscar(professor);
      var professor= new Professor();
      professor.id=result[0].id;
      professor.nome=result[0].nome;
      professor.matricula=result[0].matricula;
      professor.departamento.parseEntidade(result[0].departamento);
      return professor;
    }
    catch(error){
      error.message;
    }
  }
  static async readAll(){
      return await BD.query("SELECT * FROM professor WHERE deleted=0");
  }

  static async update(professor){
      //console.log("oi");
      var result=await BD.update(professor);
      return result;



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
