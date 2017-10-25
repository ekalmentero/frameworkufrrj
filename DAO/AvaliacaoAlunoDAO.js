"use strict";
import BD from '../BD';
import AvaliacaoAluno from '../modelos/AvaliacaoAluno';

export default class AvaliacaoAlunoDAO{
  
    static async insertAvaliacaoAluno(avaliacaoAluno){
        try {
            var retorno = await BD.inserir(avaliacaoAluno);
            avaliacaoAluno.setAluno(retorno.aluno_id);//verificar se retorno pode ser um objeto com dois IDs
            avaliacaoAluno.setAvaliacao(retorno.avaliacao_id); //verificar se retorno pode ser um objeto com dois IDs
                return avaliacaoAluno;
        } catch (error) {
            return error.message;
        }

    }
    static async selectAvaliacaoAluno(avaliacaoId, alunoId){
        try {
            var avaliacaoAluno = new AvaliacaoAluno();
            avaliacaoAluno.setAvaliacao(avaliacaoId);
            avaliacaoAluno.setAluno(alunoId);
            
            var retorno = await BD.buscar(avaliacaoAluno);
                avaliacaoAluno.setNota(retorno.nota);  
            return avaliacaoAluno;
        } catch (error) {
            return error.message;
        }
    }

    static async selectAll(){
        return await BD.query("SELECT * FROM avaliacao_aluno");
   }


   static async updateAvaliacaoAluno(avaliacaoAluno){
        try {
            return await BD.update(avaliacaoAluno);
        } catch (error) {
            return error.message;
        }

    }
    static async deleteAvaliacaoAluno(avaliacaoAluno){
        try {
            return await BD.deletar(avaliacaoAluno);
        } catch (error) {
            return error.message;
        }
    }
}