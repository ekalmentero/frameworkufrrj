"use strict";
import Turma from './Turma';
import Entidade from './entidade';

export default class Avaliacao extends Entidade {
  @Private id;
  @Private nome;
  @Private data;
  @Private descricao;
  @Private turma = new Turma();
  
    constructor(){
      super();
    }

     get Id() {
        return this.id;
      }
      get Turma() {
        return this.turma;
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
      setTurma(turma) {
        this.turma = turma;
      }

}

