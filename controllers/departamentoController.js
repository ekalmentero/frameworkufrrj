import Departamento from '../modelos/departamento';
import DepartamentoDAO from '../DAO/departamentoDAO';

export default class DepartamentoController {
    static async create(departamento){
        var departamentoObj = new Departamento();
        departamentoObj.parseEntidade(departamento);
        return await DepartamentoDAO.create(departamentoObj);
    }

    static async read(id){
        var departamento = new Departamento();
        departamento.setId(id);
        return await DepartamentoDAO.read(departamento);
    }

    static async update(departamento){
        var departamentoObj = new Departamento();
        departamentoObj.parseEntidade(departamento);
        return await DepartamentoDAO.update(departamentoObj);
    }

    static async delete(departamento){
        var departamentoObj = new Departamento();
        departamentoObj.parseEntidade(departamento);
        return await DepartamentoDAO.delete(departamentoObj);
    }
}
