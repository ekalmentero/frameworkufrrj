"use strict";
export default class Avaliacao{
  
    Constructor(id, nome, data, descricao, deleted, turma_id){
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.descricao = descricao;
        this.deleted = deleted;
        this.turma_id = turma_id;
    }
     getId() {
        return this.id;
      }
      
      getNome() {
        return this.nome;
      }
      getData() {
        return this.data;
      }
      getDescricao() {
        return this.descricao;
      }
      getDeleted() {
        return this.deleted;
      }
      getTurma() {
        return this.turma_id;
      }
      
      setId(id) {
        this.id = id;
      }
      setNome(nome) {
        this.nome = nome;
      }
      setData(data) {
        this.data = data;
      }
      setDescricao(descricao) {
        this.descricao = descricao;
      }
      setDeleted(deleted) {
        this.deleted = deleted;
      }
      setTurma(turma_id) {
        this.turma_id = turma_id;
      }

}

