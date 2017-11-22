import Entidade from './entidade';

export default class Curso extends Entidade {

    @Private codigo;
    @Private id;
    @Private nome;
    @Private limite_periodos;
    @Private turno;
    @Private deleted;
    @Private departamento_id;

    constructor(){
        super();
    }

    get Id(){
        return this.id;
    }

    get Nome(){
        return this.nome;
    }

    get Limite_periodos(){
        return this.limite_periodos;
    }

    get Turno(){
        return this.turno;
    }

    get Codigo(){
        return this.codigo;
    }

    get Departamento_id(){
        return this.departamento_id;
    }

    get Deleted(){
        return this.deleted;
    }

    setId(id){
        this.id = id;
    }

    setNome(nome){
        if (typeof(nome) == "string") this.nome = nome;
    }

    setCodigo(codigo){
        if (typeof(codigo) == "string") this.codigo = codigo;
    }

    setLimite_periodos(limite_periodos){
        if (typeof(limite_periodos) == "number") this.limite_periodos = limite_periodos;
    }

    setTurno(turno){
        if (typeof(turno) == "string") this.turno = turno;
    }

    setDepartamento_id(departamento_id){
        if (typeof(departamento_id) == "number") this.departamento_id = departamento_id;
    }

    setDeleted(deleted){
        if (typeof(deleted) == "number") this.deleted = deleted;
    }
}
