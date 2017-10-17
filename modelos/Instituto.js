"use strict";

export default class Instituto {

	constructor(id, sigla, nome, predios){
		this.id = id;
		this.sigla = sigla;
		this.nome = nome;
		this.predios = predios;
	}

	setPredios(sigla){
		this.predios = predios;
	}

	getPredios(){
		return this.predios;
	}

	setSigla(sigla){
		this.sigla = sigla;
	}

	getSigla(){
		return this.sigla;
	}

	setNome(nome){
		this.nome = nome;
	}

	getNome(){
		return this.nome;
	}

	setId(id){
		this.id = id;
	}

	getId(){
		return this.id;
	}

}