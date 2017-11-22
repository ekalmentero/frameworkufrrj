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

	get Id(){
		return this.id;
	}

	setId(id){
		this.id = id;
	}

	get Aula(){
		return this.aula;
	}

	setAula(aula){
		this.aula = aula;
	}

	get Nome(){
		return this.nome;
	}

	setNome(nome){
		this.nome = nome;
	}

}