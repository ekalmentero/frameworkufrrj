"use strict";
import BD from './BD';
import AvaliacaoAluno from './modelos/AvaliacaoAluno';

export class AvaliacaoAlunoDAO{
    constructor(){

    }

    insertAvaliacaoAluno(AvaliacaoAluno){
        try {
            BD.inserir(AvaliacaoAluno).then((retorno)=>{
                });
                return "Tabela inserida!";
        } catch (error) {
            return error.message;
        }

    }
    selectAvaliacaoAluno(avaliacao_id, aluno_id){
        try {
            var tmpAvl_A = new AvaliacaoAluno();
            tmpAvl_A.setAvaliacaoId(avaliacao_id);
            tmpAvl_A.setAlunoId(aluno_id);
            
            BD.buscar(tmpAvl_A).then((retorno)=>{
                tmpAvl_A.setNota(retorno.nota);  
                });
            return tmpAvl_A;
        } catch (error) {
            return error.message;
        }
    }
    updateAvaliacaoAluno(AvaliacaoAluno){
        try {
            BD.update(AvaliacaoAluno).then((retorno)=>{
                });
                return "Tabela atualizada!";
        } catch (error) {
            return error.message;
        }

    }
    deleteAvaliacaoAluno(AvaliacaoAluno){
        try {
            BD.deletar(AvaliacaoAluno).then((retorno)=>{
                });
                return "Tabela deletada!";
        } catch (error) {
            return error.message;
        }
    }
}