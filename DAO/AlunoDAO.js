"use strict";
import BD from '../BD';
import Aluno from '../modelos/Aluno';

export default class AlunoDAO{
  
    static async insertAluno(aluno){
        try {
            var retorno = await BD.inserir(aluno);
                aluno.setId(retorno);
                return aluno;
        } catch (error) {
            return error.message;
        }

    }
    static async selectAluno(alunoId){ 
        try {
            var tmpAluno = new Aluno();
            tmpAluno.setId(alunoId);

            var retorno = await BD.buscar(tmpAluno);
                tmpAluno.setNome(retorno.nome);
                tmpAluno.setId(retorno.alunoId);
                tmpAluno.setMatricula(retorno.matricula);
                tmpAluno.setAtivo(retorno.ativo);
                tmpAluno.setIngresso(retorno.ingresso);
                tmpAluno.setDeleted(retorno.deleted);
                tmpAluno.setDeleted(retorno.curso_id);
                tmpAluno.setDeleted(retorno.grade_id);
                
            return tmpAluno;
            
        } catch (error) {
            return error.message;
        }
    }

    static async selectAll(){
        return await BD.query("SELECT * FROM aluno");
   }


   static async updateAluno(aluno){
        try {
            return await BD.update(aluno);
        } catch (error) {
           return error.message;
        }

    }
    static async deleteAluno(aluno){ 
        try {
            return await BD.deletar(aluno);
        } catch (error) {
           return error.message;
        }
    }
}