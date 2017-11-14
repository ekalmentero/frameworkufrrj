"use strict";
import Entidade from './entidade';

export default class Avaliacao extends Entidade {
  @Private id;
  @Private nome;
  @Private data;
  @Private descricao;
  
    constructor(){
      super();
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
}

