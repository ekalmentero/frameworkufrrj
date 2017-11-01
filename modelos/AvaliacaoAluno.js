"use strict";
import Avaliacao from './Avaliacao';
import Aluno from './Aluno';
import Entidade from './entidade';
export default class AvaliacaoAluno extends Entidade{
  @Private avaliacao = new Avaliacao();
  @Private aluno = new Aluno();
  @Private nota;
  
    constructor(){
      super();
    }

     get getAvaliacao() {
        return this.avaliacao;
      }
      
      get getAluno() {
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

