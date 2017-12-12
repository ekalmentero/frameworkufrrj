"use strict";
import Entidade from './entidade';
import Turma from './Turma';

export default class Avaliacao extends Entidade {
  @Private id;
  @Private nome;
  @Private data;
  @Private descricao;
  @Private turma;

    constructor(){
      super();
      this.id=undefined;
      this.nome=undefined;
      this.data=undefined;
      this.descricao=undefined;
      this.turma=[];
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
      get getTurma() {
        return this.turma;
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
