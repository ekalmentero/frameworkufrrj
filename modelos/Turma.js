import Entidade from './entidade';
import Disciplina from './disciplina';
import Professor from './Professor';
import Periodo from './Periodo';

export default class Turma extends Entidade{

@Private codigo;
@Private turno;
@Private vagas;
@Private disciplina;
@Private professor;
@Private periodo;
@Private id;

  constructor(){
    super();
    this.codigo=undefined;
    this.turno=undefined;
    this.vagas=undefined;
    this.disciplina=undefined;
    this.professor=undefined;
    this.periodo=undefined;
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
    return this.disciplina;
  }

  get getPeriodo(){
    return this.periodo;
  }

  get getProfessor(){
    return this.professor;
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
  setTurma(turma){
    this.turma=turma;
  }

  setTurno(turno){
    this.turno=turno;
  }

  setDisciplina(disciplina){
    this.disciplina=disciplina;

  }

  setPeriodo(periodo){
    this.periodo=periodo;
  }

  setProfessor(professor){
    this.professor=professor;
  }


}
