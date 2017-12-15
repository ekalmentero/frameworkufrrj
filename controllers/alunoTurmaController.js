import AlunoTurma from '../modelos/alunoTurma';
import AlunoTurmaDAO from '../DAO/AlunoTurmaDAO';
export default class AlunoTurmaController {
    static async create(alunoTurmaJson){
        var alunoTurmaObj = new AlunoTurma();
        alunoTurmaObj.parseEntidade(alunoTurmaJson);
        return await AlunoTurmaDAO.create(alunoTurmaObj);
    }

    static async read(id){
        var alunoTurmaObj = new AlunoTurma();
        alunoTurmaObj.setId(id);
        return await AlunoTurmaDAO.read(alunoTurmaObj);
    }

    static async readAll(){
        return await AlunoTurmaDAO.readAll();
    }

    static async delete(alunoTurmaJson){
        var alunoTurmaObj = new AlunoTurma();
        alunoTurmaObj.parseEntidade(alunoTurmaJson);
        return await AlunoTurmaDAO.delete(alunoTurmaObj);
    }

    static async update(alunoTurmaJson){
        var alunoTurmaObj = new AlunoTurma();
        alunoTurmaObj.parseEntidade(alunoTurmaJson);
        return await AlunoTurmaDAO.update(alunoTurmaObj);
    }

    static async updateFinalGrade(alunoTurmaJson, idTurma, idAluno){
        var alunoTurmaObj = new AlunoTurma();
        alunoTurmaObj.nota_final = alunoTurmaJson.nota_final;
        return await AlunoTurmaDAO.updateFinalGrade(alunoTurmaObj, idTurma, idAluno);
    }


}
