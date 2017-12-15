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

     get Avaliacao() {
        return this.avaliacao;
      }

      get Aluno() {
        return this.aluno;
      }
      get Nota() {
        return this.nota;
      }
      
      set Avaliacao(avaliacao) {
        this.avaliacao = avaliacao;
      }
      set Aluno(aluno) {
        this.aluno = aluno;
      }
      set Nota(nota) {
        this.nota = nota;
      }

}
