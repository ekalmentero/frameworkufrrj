import Aluno from '../modelos/Aluno';
import AlunoDAO from '../DAO/AlunoDAO';
import Turma from '../modelos/Turma';

export default class AlunoController {
    static async create(aluno, id_curso){
        var alunoObj = new Aluno();
        alunoObj.setNome(aluno.nome);
        alunoObj.setMatricula(aluno.matricula);
        alunoObj.setAtivo(aluno.ativo);
        alunoObj.setIngresso(aluno.ingresso);
        alunoObj.setGrade(aluno.grade);
        alunoObj.setUsuario(aluno.usuario);
        return await AlunoDAO.create(alunoObj, id_curso);
    }

    static async read(id){
        var aluno = new Aluno();
        aluno.setId(id);
        return await AlunoDAO.read(aluno);
    }

    /*static async readByCurso(id_aluno, id_curso){
        return await AlunoDAO.readByCurso(id_aluno, id_curso);
    }*/

    static async readByMatricula(mat_aluno){
        return await AlunoDAO.readByMatricula(mat_aluno);
    }

    static async readAll(){
        return await AlunoDAO.readAll();
    }

    static async readAllByCurso(id_curso){
        return await AlunoDAO.readAllByCurso(id_curso);
    }

    static async update(aluno, id_curso){
        var alunoObj = new Aluno();
        alunoObj.setId(aluno.id);
        alunoObj.setNome(aluno.nome);
        alunoObj.setMatricula(aluno.matricula);
        alunoObj.setAtivo(aluno.ativo);
        alunoObj.setIngresso(aluno.ingresso);
        alunoObj.setGrade(aluno.grade);
        alunoObj.setUsuario(aluno.usuario);
        if (typeof(id_curso) != "undefined")
            return await AlunoDAO.update(alunoObj, id_curso);
        else
            return await AlunoDAO.update(alunoObj);

    }

    static async delete(aluno){
        var alunoObj = new Aluno();
        //alunoObj.parseEntidade(aluno);
        alunoObj.setId(aluno.id);
        /*alunoObj.setNome(aluno.nome);
        alunoObj.setMatricula(aluno.matricula);
        alunoObj.setAtivo(aluno.ativo);
        alunoObj.setIngresso(aluno.ingresso);
        alunoObj.setGrade(aluno.grade);
        alunoObj.setUsuario(aluno.usuario);*/
        return await AlunoDAO.delete(alunoObj);
    }

    static async listarAlunosTurma(id){
      return await AlunoDAO.listarAlunosTurma(id);
    }

}
