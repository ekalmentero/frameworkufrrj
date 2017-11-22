"use strict";

import Entidade from './entidade';

export default class Sala extends Entidade{

	@Private id;
	@Private predio;
	@Private nome;
	@Private deleted;

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

	get etId(){
		return this.id;
	}

	get Predio(){
		return this.predio;
	}

	get Nome(){
		return this.nome;
	}

	get Deleted(){
		return this.deleted;
	}

}