import Aluno from '../modelos/Aluno';
import AlunoDAO from '../DAO/AlunoDAO';
import Turma from '../modelos/Turma';
import AvaliacaoAluno from '../modelos/AvaliacaoAluno';

export default class AlunoController {
    static async create(aluno, id_curso, id_grade){
        var alunoObj = new Aluno();
        alunoObj.parseEntidade(aluno);
        return await AlunoDAO.create(alunoObj, id_curso, id_grade);
    }

    static async read(id){
        var aluno = new Aluno();
        aluno.setId(id);
        return await AlunoDAO.read(aluno);
    }

    static async readByCurso(id_aluno, id_curso){
        return await alunoDAO.readByCurso(id_aluno, id_curso);
    }

    static async readByMatricula(mat_aluno){
        return await alunoDAO.readByMatricula(mat_aluno);
    }

    static async readAll(){
        return await AlunoDAO.readAll();
    }

    static async readAllByCurso(id_curso){
        return await alunoDAO.readAllByCurso(id_curso);
    }

    static async update(aluno, id_curso, id_grade){
        var alunoObj = new Aluno();
        alunoObj.parseEntidade(aluno); 
        if (typeof(id_curso) == "undefined" && typeof(id_grade) == "undefined")
            return await AlunoDAO.update(alunoObj);
        else if (typeof(id_curso) != "undefined" && typeof(id_grade) == "undefined")
            return await AlunoDAO.update(alunoObj, id_curso);
        else if (typeof(id_curso) == "undefined" && typeof(id_grade) != "undefined")
            return await AlunoDAO.update(alunoObj, id_grade);
        else
            return await AlunoDAO.update(alunoObj, id_curso, id_grade);

    }

    static async delete(aluno){
        var alunoObj = new Aluno();
        alunoObj.parseEntidade(aluno);
        return await AlunoDAO.delete(alunoObj);
    }

    static async listarAlunosTurma(id){
        var turma = new Turma();
        turma.setId(id);
        return await AlunoDAO.listarAlunosTurma(turma);
    }

    /*como trabalhar com atribs do tipo obj no json??
    Ainda não implementado no AlunoRouter
    static async createNota(avaliacaoAluno){ 
        var avaliacaoAlunoObj = new AvaliacaoAluno();
        avaliacaoAlunoObj.parseEntidade(avaliacaoAluno);
        return await AlunoDAO.createNota(avaliacaoAlunoObj);
    }*/
}