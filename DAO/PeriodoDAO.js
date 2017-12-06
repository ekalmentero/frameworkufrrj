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


static async read(periodo){

  try{
    var result= await BD.buscar(periodo);
    var periodoObj= new Periodo();
    periodoObj.setNome(result[0].nome);
    periodoObj.setData_inicio(result[0].data_inicio);
    periodoObj.setData_fim(result[0].data_fim);
    periodoObj.setId(result[0].id);

    return periodoObj;
  }
  catch(error){
    return error.message;
  }
}
  static async readAll(){
      var result= await BD.query("SELECT * FROM periodo WHERE deleted=0");
      var periodos=[];
      for(let object of result){
        var periodo= new Periodo();
        periodo.parseEntidade(object);
        periodos.push(periodo);
      }
      return periodos;
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
