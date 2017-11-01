import Entidade from './entidade';

export default class Curso extends Entidade {
    @Private id;
    @Private nome;
    @Private codigo;
    @Private limite_periodos;
    @Private turno;
    @Private departamento;

    constructor(){
        super();
        departamento = new Departamento();
    } 

    get getId(){
        return this.id; 
    }

    get getNome(){
        return this.nome; 
    }
    
    get getCodigo(){
        return this.codigo; 
    }
    
    get getLimite_periodos(){
        return this.limite_periodos;
    }

    get getTurno(){
        return this.turno;
    }
    
    get getDepartamento(){
        return this.departamento;
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
        if (
            turno == "matutino" || 
            turno == "vespertino" || 
            turno == "noturno" || 
            turno == "integral"
        ) 
            this.turno = turno;
    }
    
    setDepartamento(departamento){
        this.departamento = departamento;
    }
}
