import Entidade from './entidade';
import Departamento from './departamento';

export default class Curso extends Entidade {

    @Private codigo;
    @Private id;
    @Private nome;
    @Private limite_periodos;
    @Private turno;
    @Private deleted;
    @Private departamento_id;
    @Private departamento;

    constructor(){
        super();
        this.id = undefined;
        this.nome = undefined;
        this.limite_periodos = undefined;
        this.deleted = undefined;
        this.departamento_id = undefined;
        this.turno = undefined;
        this.departamento = new Departamento();
    }


    get getId(){
        return this.id;
    }

    get getNome(){
        return this.nome;
    }

    get getLimite_periodos(){
        return this.limite_periodos;
    }

    get getTurno(){
        return this.turno;
    }

    get getCodigo(){
        return this.codigo;
    }

    get getDepartamento_id(){
        return this.departamento_id;
    }

    get getDeleted(){
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
