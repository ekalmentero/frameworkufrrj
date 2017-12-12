"use strict";
import Entidade from './entidade';
import Aluno from './Aluno';
export default class Resultado extends Entidade{
  @Private nota;
  @Private aluno;
  @Private avaliacao;
  
    constructor(){
      super();
      this.nota=undefined;
      this.aluno=undefined;
      this.avaliacao=undefined;
    }
      get getNota() {
        return this.nota;
      }
      get getAluno() {
        return this.aluno;
      }
      get getAvaliacao() {
        return this.avaliacao;
      }
      
      setNota(nota) {
        this.nota = nota;
      }
      setAluno(aluno) {
        this.aluno = aluno;
      }
      setAvaliacao(avaliacao) {
        this.avaliacao = avaliacao;
      }

}
