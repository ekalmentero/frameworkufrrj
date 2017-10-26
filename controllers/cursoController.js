import Curso from '../modelos/curso';
import CursoDAO from '../DAO/cursoDAO';

export default class CursoController {
    static async create(curso){
        var cursoObj = new Curso();
        cursoObj.populatinDataFromJson(curso);
        return await CursoDAO.create(cursoObj);
    }

    static async read(id){
        var curso = new Curso();
        curso.setId(id);
        return await CursoDAO.read(curso);
    }

    static async update(curso){
        var cursoObj = new Curso();
        cursoObj.populatinDataFromJson(curso);
        return await CursoDAO.update(cursoObj);
    }

    static async delete(curso){
        var cursoObj = new Curso();
        cursoObj.populatinDataFromJson(curso);
        return await CursoDAO.delete(cursoObj);
    }
}
