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

  set  set Codigo(codigo){
    this.codigo=codigo;
  }

  set  set Vagas(vagas){
    this.vagas=vagas;
  }
  set  set Id(id){
    this.id=id;
  }
  set  set TurmaId(id){
    this.id=id;
  }

  set  set PeriodoId(id){
    this.id=id;
  }
  set  set ProfessorId(id){
    this.id=id;
  }

}
