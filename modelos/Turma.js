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

  get Codigo(){
    return this.codigo;
  }

  get Vagas(){
    return this.vagas;

  }

  get Disciplina(){
    return this.disciplina;
  }

  get Periodo(){
    return this.periodo;
  }

  get Professor(){
    return this.professor();
  }

  get Id(){
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
