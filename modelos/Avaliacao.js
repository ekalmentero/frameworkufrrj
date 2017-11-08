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

     get getId() {
        return this.id;
      }
      get getTurma() {
        return this.turma.toString();
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
      setTurma(turma) {
        this.turma = turma;
      }

}

