"use strict";
export class Avaliacao{
  
    Constructor(id, nome, data, descricao, deleted){
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.descricao = descricao;
        this.deleted = deleted;
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

}

