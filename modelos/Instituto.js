"use strict";

export default class Instituto {

	@Private id;
	@Private siga;
	@Private nome;
	@Private predios;

	constructor(id, sigla, nome, predios){
		this.setId(id);
		this.setSigla(siga);
		this.setNome(nome);
		this.setPredios(predios);
	}

	setPredios(sigla){
		this.predios = predios;
	}

	get getPredios(){
		return this.predios;
	}

	setSigla(sigla){
		this.sigla = sigla;
	}

	get getSigla(){
		return this.sigla;
	}

	setNome(nome){
		this.nome = nome;
	}

	get getNome(){
		return this.nome;
	}

	setId(id){
		this.id = id;
	}

	get getId(){
		return this.id;
	}

}