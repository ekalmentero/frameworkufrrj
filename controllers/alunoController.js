import Aluno from '../modelos/Aluno';
import AlunoDAO from '../DAO/AlunoDAO';

export default class AlunoController {
    static async create(aluno){
        var alunoObj = new Aluno();
        alunoObj.parseAluno(aluno);
        return await AlunoDAO.create(alunoObj);
    }

    static async read(id){
        var aluno = new Aluno();
        aluno.setId(id);
        return await AlunoDAO.read(aluno);
    }

    static async update(aluno){
        var alunoObj = new Aluno();
        alunoObj.parseAluno(aluno); 
        retuAluno.update(alunoObj);
    }

    static async delete(aluno){
        var alunoObj = new Aluno();
        alunoObj.parseAluno(aluno);
        retuAluno.delete(alunoObj);
    }
}