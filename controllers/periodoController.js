import Periodo from '../modelos/Periodo'
import PeriodoDAO from '../DAO/periodoDAO'

export default class PeriodoController{

  static async create(periodo){
      var periodoObj = new Periodo();
      periodoObj.parseEntidade(periodo);
      console.log(periodoObj.getNome);
      return await PeriodoDAO.create(periodoObj);
    }

    static async read(id){
      var p = new Periodo();
      p.setId(id);
      p.toString();
      console.log(p.getId);
      return await PeriodoDAO.read(p);
    }

    static async update(periodo){
      var periodoObj = new Periodo();
      periodoObj.parseEntidade(periodo);
      console.log(periodoObj.getNome);
      return await PeriodoDAO.update(periodoObj);
    }

    static async delete(periodo){
      var periodoObj = new Periodo();
      periodoObj.parseEntidade(periodo);
      return await PeriodoDAO.delete(periodoObj);
    }

    static async readAll(){
      return await PeriodoDAO.readAll()
    }
}
