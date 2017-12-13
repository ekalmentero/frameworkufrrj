"use strict";

export default class Sala {

	constructor(){
		this.id = null;
		this.predio = null;
		this.nome = "";
		this.deleted =0;
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

	fillFromObject(obj){
		if(obj.id !== undefined)
			this.setId(obj.id);

		if(obj.nome !== undefined)
			this.setNome(obj.nome);

		if(obj.predio !== undefined)
			this.setPredio(obj.predio);

		if(obj.deleted !== undefined)
			this.setDeleted(obj.deleted);
	}

}