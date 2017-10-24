"use strict";

export default class Sala {

	@Private id;
	@Private predio;
	@Private nome;
	@Private deleted;

	constructor(id, predio, nome, deleted){
		this.setId(id);
		this.setPredio(predio);
		this.setNome(nome);
		this.setDeleted(deleted);
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

	get etId(){
		return this.id;
	}

	get getPredio(){
		return this.predio;
	}

	get getNome(){
		return this.nome;
	}

	get getDeleted(){
		return this.deleted;
	}

}