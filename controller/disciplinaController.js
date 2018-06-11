import Disciplina from '../model/disciplina';
import DisciplinaDAO from '../DAO/disciplinaDAO';

export default class DisciplinaController {
    static async create(disciplina, id_departamento){
        var disciplinaObj = new Disciplina();
        disciplinaObj.parseEntidade(disciplina);
        disciplinaObj.setDepartamento(id_departamento);
        return await DisciplinaDAO.create(disciplinaObj);
    }

    static async read(id_disciplina){
        var disciplina = new Disciplina();
        disciplina.setId(id_disciplina);
        return await DisciplinaDAO.read(disciplina);
    }

    static async readAll(){
        return await DisciplinaDAO.readAll();
    }
    
    static async readAllByDepartamento(id_departamento){
        return await DisciplinaDAO.readAllByDepartamento(id_departamento);
    }

    static async update(disciplina, id_departamento){
        var disciplinaObj = new Disciplina();
        disciplinaObj.parseEntidade(disciplina);
        if (typeof(id_departamento) != "undefined") 
            disciplinaObj.setDepartamento(id_departamento);
        return await DisciplinaDAO.update(disciplinaObj);
    }

    static async delete(disciplina, mode){
        var disciplinaObj = new Disciplina();
        disciplinaObj.parseEntidade(disciplina);
        if (mode == "soft")
            return await DisciplinaDAO.softDelete(disciplinaObj);
        else if (mode == "hard")
            return await DisciplinaDAO.hardDelete(disciplinaObj);
        else
            return 403;
    }
}
