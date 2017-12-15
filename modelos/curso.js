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

    set Id(id){
        this.id = id;
    }

    set Nome(nome){
        if (typeof(nome) == "string") this.nome = nome;
    }

    set Codigo(codigo){
        if (typeof(codigo) == "string") this.codigo = codigo;
    }

    set Limite_periodos(limite_periodos){
        if (typeof(limite_periodos) == "number") this.limite_periodos = limite_periodos;
    }

    set Turno(turno){
        if (typeof(turno) == "string") this.turno = turno;
    }

    set Departamento_id(departamento_id){
        if (typeof(departamento_id) == "number") this.departamento_id = departamento_id;
    }

    set Deleted(deleted){
        if (typeof(deleted) == "number") this.deleted = deleted;
    }
}
