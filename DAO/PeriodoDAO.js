import Periodo from "../modelos/Periodo";
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


static async read(x){

  try{
    var result= await BD.buscar(x);
    var periodoObj= new Periodo();
    periodoObj.setNome(result[0].nome);
    periodoObj.setDataInicio(result[0].data_inicio);
    periodoObj.setDataFim(result[0].data_fim);
    periodoObj.setId(result[0].id);
    return periodoObj;
  }
  catch(error){
    return error.message;
  }
}
  static async readAll(){
      return await BD.query("SELECT * FROM periodo");
  }

  static async update(periodo){

    try{
      return await BD.update(periodo);

    }
    catch(error){
      error.message;
    }
  }

  static async delete(periodo){

    try{
      return await BD.deletar(periodo);
    }
    catch(error){
      error.message;
    }
  }

}
