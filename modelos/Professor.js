import Entidade from './entidade';
import Departamento from './departamento';



export default class Professor extends Entidade {
  @Private id;
  @Private nome;
  @Private matricula;
  @Private departamento= new Departamento();

  constructor() {
    super();
    this.nome=undefined;
    this.matricula=undefined;
    this.id=undefined;
    this.departamento= new Departamento();
  }

  get getNome(){
    return this.nome;
  }

  get getMatricula(){
    return this.matricula;
  }

  get getId(){
    return this.id;
  }

  get getDepartamento(){
    return this.departamento;
  }

  setNome(nome){
    this.nome=nome;
  }

  setMatricula(matricula){
    this.matricula=matricula;
  }

  setId(id){
    this.id=id;
  }

  setDepartamento(departamento){
    this.departamento=departamento;
  }
}
