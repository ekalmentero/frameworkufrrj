import Departamento from '../modelos/Departamento';
import DepartamentoDAO from '../DAO/DepartamentoDAO';
import Instituto from '../modelos/Instituto';

export default class DepartamentoController {
    
    static async create(dados_departamento){
        let departamento = new Departamento();
        departamento.fillFromObject(dados_departamento);
        let instituto = new Instituto();
        instituto.setId(dados_departamento.instituto);
        departamento.setInstituto(instituto);
        return await DepartamentoDAO.create(departamento);
    }

    static async read(id){
        var departamento = new Departamento();
        departamento.setId(id);
        return await DepartamentoDAO.read(departamento);
    }

    static async search(terms){
        let departamento = new Departamento();

        if(terms.nome !== undefined)
            departamento.setNome(terms.nome);

        if(terms.sigla !== undefined) 
            departamento.setSigla(terms.sigla);

        return await DepartamentoDAO.search(departamento);
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
