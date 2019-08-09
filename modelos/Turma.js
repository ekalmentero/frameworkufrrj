import Entidade from './entidade';

export default class Turma extends Entidade{

@Private codigo;
@Private vagas;
@Private disciplina;
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

  set Codigo(codigo){
    this.codigo=codigo;
  }

  set Vagas(vagas){
    this.vagas=vagas;
  }
  set Id(id){
    this.id=id;
  }
  set TurmaId(id){
    this.id=id;
  }

  set PeriodoId(id){
    this.id=id;
  }
  set ProfessorId(id){
    this.id=id;
  }

}
