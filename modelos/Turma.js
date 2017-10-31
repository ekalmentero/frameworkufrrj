import BD.js


export default class Turma{

@Private codigo;
@Private vagas;
@Private id_disciplina;
@Private id_periodo;
@Private id_professor;
@Private periodo;
@Private id;

  constructor(){

  }

  get getCodigo(){
    return this.codigo;
  }

  get getVagas(){
    return this.vagas;

  }

  get getDisciplinaId(){
    return this.disciplina_id;
  }

  get getPeriodoId(){
    return this.periodo_id;
  }

  get getProfessorId(){
    return this.professor_id();
  }

  get getTurmaId(){
    return this.id;
  }

  set setCodigo(codigo){
    this.codigo=codigo;
  }

  set setVagas(vagas){
    this.vagas=vagas;
  }
  set setTurmaId(id){
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
