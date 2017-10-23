"use strict";
export default class AvaliacaoAluno{
  @Private avaliacao_id;
  @Private aluno_id;
  @Private nota;
  
    Constructor(avaliacao_id, aluno_id, nota){
        this.seAvaliacao(avaliacao_id);
        this.setAluno(aluno_id);
        this.setNota(nota);
    }
     get getAvaliacao() {
        return this.avaliacao_id;
      }
      
      get getAluno() {
        return this.aluno_id;
      }
      get getNota() {
        return this.nota;
      }
      
      setAvaliacao(avaliacao_id) {
        this.avaliacao_id = avaliacao_id;
      }
      setAluno(aluno_id) {
        this.aluno_id = aluno_id;
      }
      setNota(nota) {
        this.nota = nota;
      }

}

