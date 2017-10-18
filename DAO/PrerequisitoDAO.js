"use strict";
import BD from './BD';
import Prerequisito from './modelos/Prerequisito';

export class PrerequisitoDAO{
    constructor(){

    }

    insertPrerequisito(Prerequisito){
        try {
            BD.inserir(Prerequisito).then((retorno)=>{
                });
                return "Prerequisito inserido!";
        } catch (error) {
            return error.message;
        }

    }
    selectPrerequisito(id_disciplina, id_requisito){
        try {
            var tmpPrerequisito = new Prerequisito();
            tmpPrerequisito.setIdDisciplina(id_disciplina);
            tmpPrerequisito.setIdRequisito(id_requisito);

            BD.buscar(tmpPrerequisito).then((retorno)=>{
                tmpPrerequisito.setIdDisciplina(retorno.id_disciplina);
                tmpPrerequisito.setIdRequisito(retorno.id_requisito); 
                tmpPrerequisito.setGradeId(retorno.grade_id);
                });
            return tmpPrerequisito;
        } catch (error) {
            return error.message;
        }
    }
    updatePrerequisito(Prerequisito){
        try {
            BD.update(Prerequisito).then((retorno)=>{
                });
                return "Prerequisito atualizada!";
        } catch (error) {
            return error.message;
        }

    }
    deletePrerequisito(Prerequisito){
        try {
            BD.deletar(Prerequisito).then((retorno)=>{
                });
                return "Prerequisito deletada!";
        } catch (error) {
            return error.message;
        }
    }
}