"use strict";

export default class Instituto{

	@Private id;
	@Private sigla;
	@Private nome;
	@Private predios;

	constructor(){
		this.id = null;
		this.sigla = "";
		this.nome = "";
		this.departamentos = [];
		this.predios = [];
	}

	setPredios(predios){
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

	setDeleted(deleted){
		return this.deleted = deleted;
	}

	getDeleted(){
		return this.deleted;
	}

	getDepartamentos(){
		return this.departamentos;
	}

	setDepartamentos(deps){
		this.departamentos = deps;
	}

	fillFromObject(obj){

		if(obj.id !== undefined)
			this.setId(obj.id);

		if(obj.nome !== undefined)
			this.setNome(obj.nome);

		if(obj.sigla !== undefined)
        	this.setSigla(obj.sigla);

        if(obj.deleted !== undefined)
        	this.setDeleted(obj.deleted);

        if(obj.predios !== undefined && obj.predios.length > 1)
        	this.setPredios(obj.predios);

        if(obj.departamentos !== undefined && obj.departamentos.length > 1)
        	this.setDepartamentos(obj.departamentos);

        return this;
	}
}
