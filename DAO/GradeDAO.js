"use strict";
import BD from './BD';
import Grade from './modelos/Grade';

export class GradeDAO{
    constructor(){

    }

    insertGrade(grade){
        try {
            BD.inserir(grade).then((retorno)=>{
                });
                return "Grade inserida!";
        } catch (error) {
            return error.message;
        }

    }
    selectGrade(id){
        try {
            var tmpGrade = new Grade();
            tmpGrade.setId(id);

            BD.buscar(tmpGrade).then((retorno)=>{
                tmpGrade.setinicioVigencia(retorno.inicio_vigencia);
                tmpGrade.setId(retorno.id);
                tmpGrade.setDisponivel(retorno.disponivel);
                tmpGrade.setDeleted(retorno.deleted);
                tmpGrade.setDeleted(retorno.curso_id);
                });
                return tmpGrade;
            
        } catch (error) {
            return error.message;
        }
    }
    updateGrade(Grade){
        try {
            BD.update(Grade).then((retorno)=>{
                });
                return "Grade Atualizada!";
        } catch (error) {
            return error.message;
        }

    }
    deleteGrade(Grade){
        try {
            BD.deletar(Grade).then((retorno)=>{
                });
                return "Grade deletada!";
        } catch (error) {
            return error.message;
        }
    }
}