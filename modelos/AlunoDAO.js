"use strict";
import BD from './BD';
import Aluno from './modelos/Aluno';

export class AlunoDao{
    constructor(){

    }

    insertAluno(aluno){
        try {
            BD.inserir(aluno).then((retorno)=>{
                });
                return "Aluno "+retorno.nome+" inserido!";
        } catch (error) {
            return error.message;
        }

    }
    selectAluno(id){ 
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
                });
            return tmpAluno;
            
        } catch (error) {
            return error.message;
        }
    }
    updateAluno(aluno){
        try {
            bd.update(aluno)
            BD.update(aluno).then((retorno)=>{
                });
                return "Aluno "+retorno.nome+" Atualizado!";
        } catch (error) {
           return error.message;
        }

    }
    deleteAluno(aluno){ 
        try {
            BD.deletar(aluno).then((retorno)=>{
                });
                return "Aluno "+retorno.nome+" deletado!";
        } catch (error) {
           return error.message;
        }
    }
}