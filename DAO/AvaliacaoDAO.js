"use strict";
import BD from './BD';
import Avaliacao from './modelos/Avaliacao';

export class AvaliacaoDAO{
    constructor(){

    }

    insertAvaliacao(Avaliacao){
        try {
            BD.inserir(Avaliacao).then((retorno)=>{
                });
                return "Avaliação inserida!";
        } catch (error) {
            return error.message;
        }

    }
    selectAvaliacao(avaliacaoID){
        try {
            var tmpAvl = new Avaliacao();
            tmpAvl.setID(avaliacaoID);

            BD.buscar(tmpAvl).then((retorno)=>{
                tmpAvl.setID(retorno.id);
                tmpAvl.setNome(retorno.nome); 
                tmpAvl.setData(retorno.data);
                tmpAvl.setDescricao(retorno.descricao);
                tmpAvl.setDeleted(retorno.deleted);
                tmpAvl.setTurma(retorno.turma_id);
                });
            return tmpAvl;
        } catch (error) {
            return error.message;
        }
    }
    updateAvaliacao(Avaliacao){
        try {
            BD.update(Avaliacao).then((retorno)=>{
                });
                return "Avaliação atualizada!";
        } catch (error) {
            return error.message;
        }

    }
    deleteAvaliacao(Avaliacao){
        try {
            BD.deletar(Avaliacao).then((retorno)=>{
                });
                return "Avaliação deletada!";
        } catch (error) {
            return error.message;
        }
    }
}