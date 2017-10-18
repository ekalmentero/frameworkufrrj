"use strict";
export default class AvaliacaoAluno{
  
    Constructor(avaliacao_id, aluno_id, nota){
        this.avaliacao_id = avaliacao_id;
        this.aluno_id = aluno_id;
        this.nota = nota;
    }
     getAvaliacaoId() {
        return this.avaliacao_id;
      }
      
      getAlunoId() {
        return this.aluno_id;
      }
      getNota() {
        return this.nota;
      }
      
      seAvaliacaotId(avaliacao_id) {
        this.avaliacao_id = avaliacao_id;
      }
      setAlunoId(aluno_id) {
        this.aluno_id = aluno_id;
      }
      setNota(nota) {
        this.nota = nota;
      }

}

