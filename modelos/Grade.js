"use strict";
export default class Grade{
  @Private id;
  @Private inicio_vigencia;
  @Private disponivel;
  @Private deleted;
  @Private curso_id;

    Constructor(id, inicio_vigencia, disponivel, deleted, curso_id){
        this.setId(id);
        this.setinicioVigencia(inicio_vigencia);
        this.setDisponivel(disponivel);
        this.setDeleted(deleted);
        this.setCurso(curso_id);
    }
     get getId() {
        return this.id;
      }
      
      get getinicioVigencia() {
        return this.inicio_vigencia;
      }
      get getdisponivel() {
        return this.disponivel;
      }

      get getDeleted() {
        return this.deleted;
      }
      get getCurso() {
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

