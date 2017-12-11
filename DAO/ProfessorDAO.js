
import Professor from "../modelos/Professor";
import Departamento from "../modelos/departamento";
import DepartamentoDAO from "./departamentoDAO";
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
    var result= await BD.query("INSERT INTO professor SET matricula='"+professor.getMatricula+"',nome='"+professor.getNome+"',departamento='"+id_departamento+"',usuario='"+id_usuario+"'");
    professor.setId(result.insertId);
    console.log(professor.getId);
    return professor;
    }
    catch(error){
      error.message;
    }
  }

  static async read(professor){

    try{
      //console.log(professor.getId);
      var result= await BD.query("SELECT * FROM professor WHERE id='"+professor.getId+"'");
      //var result= await BD.buscar(professor);
      //console.log(result);
      var professorObj= new Professor();
      var departamentoObj= new Departamento();
      var resultDepartamento= await BD.query("SELECT * FROM departamento WHERE id='"+result[0].departamento+"'");
      //console.log(resultDepartamento);

      //instanciando obj departamento da consulta
      departamentoObj.setNome(resultDepartamento[0].nome);
      departamentoObj.setSigla(resultDepartamento[0].sigla);
      departamentoObj.setInstituto_id(resultDepartamento[0].instituto);
      departamentoObj.setId(resultDepartamento[0].id);
      //instanciando obj departamento da consulta

      professorObj.setNome(result[0].nome);
      professorObj.setMatricula(result[0].matricula);
      professorObj.setDepartamento(departamentoObj);
      professorObj.setId(result[0].id);

      console.log(professorObj.getDepartamento);
      //console.log(professor);
      return professorObj;

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
      console.log(result);
      //console.log(professores[3].getId);
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

    return await BD.query("UPDATE professor SET deleted=1 wHERE id='"+professor.getId+"'");
    }
    catch(error){
      error.message;
    }
  }
}
