import Entidade from './entidade';

export default class Turma extends Entidade{

@Private codigo;
@Private vagas;
@Private disciplina= new Disciplina();
@Private professor= new Professor();
@Private periodo= new Periodo();
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

  setCodigo(codigo){
    this.codigo=codigo;
  }

  setVagas(vagas){
    this.vagas=vagas;
  }
  setId(id){
    this.id=id;
  }
  setTurmaId(turma){
    this.turma=turma;
  }

  setPeriodoId(periodo){
    this.periodo=periodo;
  }
  setProfessorId(professor){
    this.professor=professor;
  }

}
