"use strict";
import Curso from './curso';
import Entidade from './entidade';

export default class Grade extends Entidade {
  @Private id;
  @Private inicio_vigencia;
  @Private disponivel;
  @Private curso;

    constructor(){
      super();
    }

      get Id() {
        return this.id;
      }

      get Inicio_vigencia() {
        return this.inicio_vigencia;
      }
      get Disponivel() {
        return this.disponivel;
      }
      get Curso() {
        return this.curso;
      }

      setId(id) {
        this.id = id;
      }
      setInicio_vigencia(inicio_vigencia) {
        this.inicio_vigencia = inicio_vigencia;
      }
      setDisponivel(disponivel) {
        this.disponivel = disponivel;
      }
      setCurso(curso) {
        this.curso = curso;
      }


}
