export default class Disciplina {
    @Private id;
    @Private nome;
    @Private codigo;
    @Private creditos;

    constructor(id, nome, codigo, creditos){
        this.setId(id);
        this.setNome(nome);
        this.setCodigo(codigo);
        this.setCreditos(creditos);
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
    
    get getCreditos(){
        return this.creditos;
    }

    setId(id){
        if (typeof(id) == "number") this.id = id;
    }

    setNome(nome){
        if (typeof(nome) == "string") this.nome = nome;
    }

    setCodigo(codigo){
        if (typeof(codigo) == "string") this.codigo = codigo;
    }

    setCreditos(creditos){
        if (typeof(creditos) == "number") this.creditos = creditos;
    }

    toString(){
        JSON.stringify(this);
    }
}
