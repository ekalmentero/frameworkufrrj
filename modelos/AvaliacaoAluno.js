"use strict";
import Avaliacao from './Avaliacao';
import Aluno from './Aluno';
export default class AvaliacaoAluno{
  //@Private avaliacao_id;
  @Private avaliacao = new Avaliacao();
  //@Private aluno_id;
  @Private aluno = new Aluno();
  @Private nota;
  
    Constructor(){
    }

     get getAvaliacao_id() {
        return this.avaliacao;
      }
      
      get getAluno_id() {
        return this.aluno;
      }
      get getNota() {
        return this.nota;
      }
      
      setAvaliacao(avaliacao) {
        this.avaliacao = avaliacao;
      }
      setAluno(aluno) {
        this.aluno = aluno;
      }
      setNota(nota) {
        this.nota = nota;
      }

}

