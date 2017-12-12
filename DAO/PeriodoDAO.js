import Professor from "../modelos/Periodo";
import BD from "../BD";


export default class PeriodoDAO{


  constructor(){

  }

  static async create(periodo){
    try{
      var id= await BD.inserir(periodo);
      periodo.setId(id);
      return periodo;
    }
    catch(error){
      return error.message;
    }
  }


static async read(periodo){

  try{
    var result= await BD.buscar(perido);
    periodo= result[0];
    return periodo;
  }
  catch(error){
    return error.message;
  }
}
  static async readAll(){
    var result= await BD.query("SELECT * FROM periodo");
      console.log(result);
      return result;
  }

  static async update(periodo){

    try{
      return await BD.buscar(periodo);

    }
    catch(error){
      error.message;
    }
  }

  static async delete(periodo){

    try{
      return await BD.deletar(perido);
    }
    catch(error){
      error.message;
    }
  }

}
