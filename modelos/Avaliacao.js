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

      get Id() {
        return this.id;
      }
      get Nome() {
        return this.nome;
      }
      get Data() {
        return this.data;
      }
      get Descricao() {
        return this.descricao;
      }

      set Id(id) {
        this.id = id;
      }
      set Nome(nome) {
        this.nome = nome;
      }
      set Data(data) {
        this.data = data;
      }
      set Descricao(descricao) {
        this.descricao = descricao;
      }
}
