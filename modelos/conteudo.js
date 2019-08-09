"use strict";

export default class Conteudo {

	@Private id;
	@Private nome;
	@Private aula;

	constructor(id, nome, aula){
		this.set Id(id);
		this.set Nome(nome);
		this.set Aula(aula)
	}

	get Id(){
		return this.id;
	}

	set Id(id){
		this.id = id;
	}

	get Aula(){
		return this.aula;
	}

	set Aula(aula){
		this.aula = aula;
	}

	get Nome(){
		return this.nome;
	}

	set Nome(nome){
		this.nome = nome;
	}

}