"use strict";
import BD from './BD';
import Avaliacao from './modelos/Avaliacao';

export class AvaliacaoDao{
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
                tmpAvl.setAlunoId(retorno.alunoId);
                tmpAvl.setNota(retorno.nota);
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