"use strict";

export default class Sala {

	constructor(){
		//
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