"use strict";
import Turma from './Turma';
export default class Avaliacao{
  @Private id;
  @Private nome;
  @Private data;
  @Private descricao;
  //@Private turma_id;
  @Private turma = new Turma();
  
    Constructor(){
    }

     get getId() {
        return this.id;
      }
      get getTurma_id() {
        return this.turma;
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

