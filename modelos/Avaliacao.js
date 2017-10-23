"use strict";
export default class Avaliacao{
  @Private id;
  @Private nome;
  @Private data;
  @Private descricao;
  @Private deleted;
  @Private turma_id;
  
    Constructor(id, nome, data, descricao, deleted, turma_id){
        this.setId(id);
        this.setNome(nome);
        this.setData(data);
        this.setDescricao(descricao);
        this.setDeleted(deleted);
        this.setTurma(turma_id);
    }
     get getId() {
        return this.id;
      }
      
      get getNome() {
        return this.nome;
      }
      get getData() {
        return this.data;
      }
      get getDescricao() {
        return this.descricao;
      }
      get getDeleted() {
        return this.deleted;
      }
      get getTurma() {
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

