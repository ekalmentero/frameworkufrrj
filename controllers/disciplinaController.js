import Disciplina from '../modelos/disciplina';
import DisciplinaDAO from '../DAO/disciplinaDAO';

export default class DisciplinaController {
    static async create(disciplina, id_departamento){
        var disciplinaObj = new Disciplina();
        disciplinaObj.parseEntidade(disciplina);
        return await DisciplinaDAO.create(disciplinaObj, id_departamento);
    }

    static async read(id){
        var disciplina = new Disciplina();
        disciplina.setId(id);
        return await DisciplinaDAO.read(disciplina);
    }

    static async readAll(){
        return await DisciplinaDAO.readAll();
    }

    static async update(disciplina, id_departamento){
        var disciplinaObj = new Disciplina();
        disciplinaObj.parseEntidade(disciplina);
        if (typeof(id_departamento) == "undefined") 
            return await DisciplinaDAO.update(disciplinaObj);
        else 
            return await DisciplinaDAO.update(disciplinaObj, id_departamento);
    }

    static async delete(disciplina){
        var disciplinaObj = new Disciplina();
        disciplinaObj.parseEntidade(disciplina);
        return await DisciplinaDAO.delete(disciplinaObj);
    }
}
