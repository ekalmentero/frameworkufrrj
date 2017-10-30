import Presenca from '../modelos/presenca';
import PresencaDAO from '../DAO/presencaDAO';
//import AulaController from 'aulaController'; --To do-- 
//import AlunoController from 'alunoController'; --To do-- 
//import TipoPresencaController from 'tipoPresencaController'; --To do-- 

export default class PresencaController {
    static async create(presenca){
        var presencaObj = new Presenca();
        presencaObj.parseEntidade(presenca);
        return await PresencaDAO.create(presencaObj);
    }

    /*
    --Exemplo readByAula--
    static async read(id){
        var presenca = new Presenca();
        presenca.setAula_id(id_aula);
        return await PresencaDAO.read(presenca);
        presenca = PresencaDAO.read(presenca);
        presenca.setAula_id(await AulaController.read(presenca.getAula));
        presenca.setAluno_id(await AulaController.read(presenca.getAluno));
        presenca.setTipo_presenca_id(await AulaController.read(presenca.getTipo_presenca));
        return presenca;
    }
    --To do--
    */

    static async readAll(){
        return await PresencaDAO.readAll();
    }

    static async update(presenca){
        var presencaObj = new Presenca();
        presencaObj.parseEntidade(presenca); 
        return await PresencaDAO.update(presencaObj);
    }
}