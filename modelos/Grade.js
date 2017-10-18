"use strict";
export default class Grade{

    Constructor(id, inicio_vigencia, disponivel, deleted, curso_id){
        this.id = id;
        this.inicio_vigencia = inicio_vigencia;
        this.disponivel = disponivel;
        this.deleted = deleted;
        this.curso_id = curso_id;
    }
     getId() {
        return this.id;
      }
      
      getinicioVigencia() {
        return this.inicio_vigencia;
      }
      getdisponivel() {
        return this.disponivel;
      }

      getDeleted() {
        return this.deleted;
      }
      getCurso() {
        return this.curso_id;
      }
      
      setId(id) {
        this.id = id;
      }
      setinicioVigencia(inicio_vigencia) {
        this.inicio_vigencia = inicio_vigencia;
      }
      setDisponivel(disponivel) {
        this.disponivel = disponivel;
      }
      setDeleted(deleted) {
        this.deleted = deleted;
      }
      setCurso(curso_id) {
        this.curso_id = curso_id;
      }
      

}

