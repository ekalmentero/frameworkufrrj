"use strict";

export default class Sala {

	constructor(id, predio, nome, deleted){
		this.id = id;
		this.predio = predio;
		this.nome = nome;
		this.deleted = deleted;
	}

	setId(id){
		this.id = id;
	}

	setPredio(predio){
		this.predio = predio;
	}

	setNome(nome){
		this.nome = nome;
	}

	setDeleted(deleted){
		this.deleted = deleted;
	}

	getId(){
		return this.id;
	}

	getPredio(){
		return this.predio;
	}


	getNome(){
		return this.nome;
	}

	getDeleted(){
		return this.deleted;
	}

}