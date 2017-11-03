import Entidade from './entidade';
import Disciplina from './disciplina';
import Professor from './Professor';
import Periodo from './Periodo';

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

  setDisciplina(disciplina){
    this.disciplina.setNome(disciplina.getNome());
    this.disciplina.setCodigo(disciplina.getCodigo());
    this.disciplina.setCreditos(disciplina.getCreditos());
    this.disciplina.setLivre_escolha(disciplina.getLivre_escolha());

  }

  setPeriodo(periodo){
    this.periodo=periodo;
  }
  setProfessor(professor){
    this.professor=professor;
  }

}
