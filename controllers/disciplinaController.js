import Disciplina from '../modelos/disciplina';
import DisciplinaDAO from '../DAO/disciplinaDAO';

export default class DisciplinaController {
    static async create(disciplina){
        var disciplinaObj = new Disciplina();
        disciplinaObj.parseDisciplina(disciplina);
        return await DisciplinaDAO.create(disciplinaObj);
    }

    static async read(id){
        var disciplina = new Disciplina();
        disciplina.setId(id);
        return await DisciplinaDAO.read(disciplina);
    }

    static async update(disciplina){
        var disciplinaObj = new Disciplina();
        disciplinaObj.parseDisciplina(disciplina); 
        return await DisciplinaDAO.update(disciplinaObj);
    }

    static async delete(disciplina){
        var disciplinaObj = new Disciplina();
        disciplinaObj.parseDisciplina(disciplina);
        return await DisciplinaDAO.delete(disciplinaObj);
    }
}