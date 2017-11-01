"use strict";

export default class Conteudo {

	@Private id;
	@Private nome;
	@Private aula;

	constructor(id, nome, aula){
		this.SetId(id);
		this.SetNome(nome);
		this.SetAula(aula)
	}

	get getId(){
		return this.id;
	}

	setId(id){
		this.id = id;
	}

	get getAula(){
		return this.aula;
	}

	setAula(aula){
		this.aula = aula;
	}

	get getNome(){
		return this.nome;
	}

	setNome(nome){
		this.nome = nome;
	}

}