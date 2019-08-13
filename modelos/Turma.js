import Entidade from './entidade';

export default class Turma extends Entidade{

@Private codigo;
@Private vagas;
@Private disciplina;
@Private periodo;
@Private professor;
@Private periodo;
@Private id;

  constructor(){
    super();
  }

  get getCodigo(){
    return this.codigo;
  }

  get getVagas(){
    return this.vagas;

  }

  get getDisciplina(){
    return this.disciplina;
  }

  get getPeriodo(){
    return this.periodo;
  }

  get getProfessor(){
    return this.professor();
  }

  get getId(){
    return this.id;
  }

  set setCodigo(codigo){
    this.codigo=codigo;
  }

  set setVagas(vagas){
    this.vagas=vagas;
  }
  set setId(id){
    this.id=id;
  }
  set setTurmaId(id){
    this.id=id;
  }

  set setPeriodoId(id){
    this.id=id;
  }
  set setProfessorId(id){
    this.id=id;
  }

}
