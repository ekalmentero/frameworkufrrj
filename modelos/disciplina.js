"use strict";

export default class Disciplina {
    
    constructor(_id, _nome, _codigo){
        this.id = _id;
        this.nome = _nome;
        this.codigo = _codigo;
    }

    @Private id;
    @Private nome;
    @Private codigo; 

    get id(){
        return this.id + " teste id"; 
    }

    set id(_id){
        if (typeof(_id) != "number") this.id = _id;
    }

    get getNome(){
        return this.id + " teste nome"; 
    }

    set nome(_nome){
        if (typeof(_nome) != "string") this.nome = _nome;
    }

    get codigo(){
        return this.codigo + " teste codigo"; 
    }

    set codigo(_codigo){
        if (typeof(_codigo) != "number") this.codigo = _codigo;
    }

    toString(){
        console.log(JSON.stringify(this));
    }
}
