"use strict";
import Entidade from './entidade';
export default class Resultado extends Entidade{
  @Private nota;
  @Private aluno;
  
    constructor(){
      super();
    }
      get getNota() {
        return this.nota;
      }
      get getAluno() {
        return this.aluno;
      }
      
      setNota(nota) {
        this.nota = nota;
      }
      setAluno(aluno) {
        this.aluno = aluno;
      }

}
