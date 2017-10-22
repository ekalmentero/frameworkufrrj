"use strict";

export default class Disciplina {
    @Private id;
    @Private nome;
    @Private codigo;

    constructor(id, nome, codigo){
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
    } 

    get getId(){
        return this.id + " teste id"; 
    }

    get getNome(){
        return this.id + " teste nome"; 
    }
    
    get getCodigo(){
        return this.codigo + " teste codigo"; 
    }
    
    setId(id){
        if (typeof(id) != "number") this.id = id;
    }

    setNome(nome){
        if (typeof(nome) != "string") this.nome = nome;
    }

    setCodigo(_codigo){
        if (typeof(codigo) != "number") this.codigo = codigo;
    }

    toString(){
        console.log(JSON.stringify(this));
    }
}
