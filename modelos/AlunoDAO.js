"use strict";
import BD from './BD';
import Aluno from './modelos/Aluno';

export class AlunoDao{
    constructor(){

    }

    insertAluno(aluno){ //OK
        try {
            BD.inserir(aluno).then((retorno)=>{
                return "Inserido";
                })
        } catch (error) {
            return error.message;
        }

    }
    selectAluno(id){ //OK
        try {
            var tmpAluno = new Aluno();
            tmpAluno.setId(id);

            BD.buscar(tmpAluno).then((retorno)=>{
                tmpAluno.setNome(retorno.nome);
                //tmpAluno.setId(retorno.id);
                tmpAluno.setMatricula(retorno.matricula);
                tmpAluno.setAtivo(retorno.ativo);
                tmpAluno.setIngresso(retorno.ingresso);
                tmpAluno.setDeleted(retorno.deleted);

                })
            return tmpAluno;
            
        } catch (error) {
            return error.message;
        }
    }
    updateAluno(aluno){
        var bd = new BD;
        try {
            bd.update(aluno)
        } catch (error) {
           return error.message;
        }

    }
    deleteAluno(aluno){ //OK
        try {
            BD.deletar(aluno).then((retorno)=>{
                return "Aluno "+retorno.nome+" deletado!";
                })
        } catch (error) {
           return error.message;
        }
    }
}