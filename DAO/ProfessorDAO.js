
import Professor from "../modelos/Professor";
import Departamento from "./departamentoDAO";
import BD from "../BD";

export default class ProfessorDAO{

  static async create(professor,id_departamento, id_usuario){
    try{
    /*var foreignKeys= [];
      foreignKeys.push(['departamento',id_departamento]);
      //var id= await BD.inserir(professor,foreignKeys);
      professor.setId(id);
      console.log(professor.getId);

      return professor;
*/
    return await BD.query("INSERT INTO professor SET matricula='"+professor.getMatricula+"',nome='"+professor.getNome+"',departamento='"+id_departamento+"',usuario='"+id_usuario+"'");
    }
    catch(error){
      error.message;
    }
  }

  static async read(professor){

    try{
      console.log(professor.getId);
      //var result= BD.query("SELECT * FROM professor WHERE id='"+professor.getId+"'");
      var result= BD.buscar(professor);
      var professorObj= new Professor();
      professorObj.setId(result[0].id);
      professorObj.setNome(result[0].nome);
      professorObj.setMatricula(result[0].matricula);
      professorObj.setDepartamento(result[0].departamento);
      //console.log(professor.getId);
      return result;

    }
    catch(error){
      error.message;
    }
  }
  static async readAll(){

      var result= await BD.query("SELECT * FROM professor WHERE deleted=0");
      var professores=[];
      for(let object of result){
        var professor= new Professor();
        professor.setId(object.id);
        professor.setNome(object.nome);
        professor.setMatricula(object.matricula);
        professor.setDepartamento(object.departamento);
        professores.push(professor);
      }
      return professores;
  }

  static async update(professor){
      //console.log("oi");
      var result=await BD.update(professor);
      return result;



  }

  static async delete(professor){
    try{
      //return await BD.deletar(professor);

      BD.query("UPDATE professor SET deleted=1");
    }
    catch(error){
      error.message;
    }
  }
}
