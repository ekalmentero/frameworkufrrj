import Entidade from './entidade';
import Disciplina from './disciplina';
import Professor from './Professor';
import Periodo from './Periodo';

export default class Turma extends Entidade{

@Private codigo;
@Private turno;
@Private vagas;
@Private disciplina= new Disciplina();
@Private professor= new Professor();
@Private periodo= new Periodo();
@Private id;

  constructor(){
    super();
    this.codigo=undefined;
    this.turno=undefined;
    this.vagas=undefined;
    this.disciplina= new Disciplina();
    this.professor= new Professor();
    this.periodo= new Periodo();
  }

  get getCodigo(){
    return this.codigo;
  }

  get getVagas(){
    return this.vagas;

  }

  get getTurno(){
    return this.turno;
  }

  get getDisciplina(){
    return this.disciplina.toString();
  }

  get getPeriodo(){
    return this.periodo.toString();
  }

  get getProfessor(){
    return this.professor.toString();
  }

  get getId(){
    return this.id;
  }

  set codigo(codigo){
    this.codigo=codigo;
  }

  set vagas(vagas){
    this.vagas=vagas;
  }
  set id(id){
    this.id=id;
  }
  set turma(turma){
    this.turma=turma;
  }

  set turno(turno){
    this.turno=turno;
  }

  set disciplina(disciplina){
    this.disciplina=disciplina;

  }

  set periodo(periodo){
    this.periodo=periodo;
  }

  set professor(professor){
    this.professor=professor;
  }


}
