
import Professor from "../modelos/Professor";
import BD from "../BD";

export default class ProfessorDAO{

  static async create(professor,id_departamento){
    try{
    /*var foreignKeys= [];
      foreignKeys.push(['departamento',id_departamento]);
      //var id= await BD.inserir(professor,foreignKeys);
      professor.setId(id);
      console.log(professor.getId);

      return professor;
*/
    return await BD.query("INSERT INTO professor SET matricula='"+professor.getMatricula+"',nome='"+professor.getNome+"',departamento='"+id_departamento+"'");
    }
    catch(error){
      error.message;
    }
  }

  static async read(professor){

    try{
      var result= await BD.buscar(professor);
      var professor= new Professor();
      professor.setId(result[0].id);
      professor.setNome(result[0].nome);
      professor.setMatricula(result[0].matricula);
      professor.setDepartamento(result[0].departamento);
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
