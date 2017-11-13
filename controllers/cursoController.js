import Curso from '../modelos/curso';
import CursoDAO from '../DAO/cursoDAO';

export default class CursoController {
    static async create(curso, idDepartamento = undefined){
        var cursoObj = new Curso();
        cursoObj.parseEntidade(curso);
        return await CursoDAO.create(cursoObj, idDepartamento);
    }

    static async read(idCurso){
        var curso = new Curso();
        curso.setId(idCurso);
        return await CursoDAO.read(curso);
    }

    static async update(curso, idDepartamento = undefined){
        var cursoObj = new Curso();
        cursoObj.parseEntidade(curso);
        return await CursoDAO.update(cursoObj, idDepartamento);
    }

    static async delete(curso){
        var cursoObj = new Curso();
        cursoObj.parseEntidade(curso);
        return await CursoDAO.delete(cursoObj);
    }

    static async readAllByDepartamento(idDepartamento){
        return await cursoDAO.readAllByDepartamento(idDepartamento);
    }

    static async readByDepartamento(idCurso, idDepartamento){
        return await cursoDAO.readByDepartamento(idCurso, idDepartamento);
    }
}
