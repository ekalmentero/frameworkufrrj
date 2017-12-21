"use strict";
import Aluno from './Aluno';
import Turma from './Turma';
import Entidade from './entidade';

export default class Conceito extends Entidade{
  @Private id;
  @Private tipo;

  constructor(){
      super();
      this.id = undefined;
      this.tipo = undefined;
  }
     get getId() {
        return this.id;
      }
      get getTipo() {
        return this.tipo;
      }

      setId(id) {
        this.id = id;
      }

      setTipo(tipo) {
        this.tipo = tipo;
      }

    }