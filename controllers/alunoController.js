import Aluno from '../modelos/Aluno';
import AvaliacaoAluno from '../modelos/AvaliacaoAluno';
import AlunoDAO from '../DAO/AlunoDAO';
import AvaliacaoAlunoDAO from '../DAO/AvaliacaoAlunoDAO';
export default class AlunoController {
    static async create(aluno){
        var alunoObj = new Aluno();
        alunoObj.parseEntidade(aluno);
        return await AlunoDAO.create(alunoObj);
    }

    static async read(id){
        var aluno = new Aluno();
        aluno.setId(id);
        return await AlunoDAO.read(aluno);
    }

    static async readAll(){
        return await AlunoDAO.readAll();
    }

    static async update(aluno){
        var alunoObj = new Aluno();
        alunoObj.parseEntidade(aluno); 
        return await AlunoDAO.update(alunoObj);
    }

    static async delete(aluno){
        var alunoObj = new Aluno();
        alunoObj.parseEntidade(aluno);
        return await AlunoDAO.delete(alunoObj);
    }

    //como trabalhar com atribs do tipo obj no json??
    //Ainda não implementado no AlunoRouter
    static async createNota(avaliacaoAluno){ 
        var avaliacaoAlunoObj = new AvaliacaoAluno();
        avaliacaoAlunoObj.parseEntidade(avaliacaoAluno);
        return await AlunoDAO.createNota(avaliacaoAlunoObj);
    }
}