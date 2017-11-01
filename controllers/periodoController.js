import Periodo from '../modelos/periodo'
import PeriodoDAO from '../DAO/periodoDAO'

export default class PeriodoController{

  static async create(periodo){
      var periodoObj = new Periodo();
      periodoObj.parseDisciplina(periodo);
      return await PeriodoDAO.create(periodoObj);
    }

    static async read(id){
      var periodo = new Periodo();
      periodo.setId(id);
      return await PeriodoDAO.read(periodo);
    }

    static async update(periodo){
      var periodoObj = new Periodo();
      periodoObj.parseDisciplina(periodo);
      return await PeriodoDAO.update(periodoObj);
    }

    static async delete(periodo){
      var periodoObj = new Periodo();
      periodoObj.parseDisciplina(periodo);
      return await PeriodoDAO.delete(periodoObj);
    }

    static async readAll(){
      return await PeriodoDAO.readAll()
    }
}
