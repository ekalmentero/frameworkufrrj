"use strict";

export default class Predio{

	constructor(){

		this.institutos = [];
		this.id = null;
		this.sigla = "";
		this.nome = "";
		this.lat = "";
		this.long = "";
		this.deleted = 0;
		this.salas = [];

	}

	setSalas(salas){
		this.salas = salas;
	}

	getSalas(){
		return this.salas;
	}

	setInstitutos(institutos){
		this.institutos = institutos;
	}

	setId(id){
		this.id = id;
	}

	setSigla(sigla){
		this.sigla = sigla;
	}

	setNome(nome){
		this.nome = nome;
	}

	setLat(lat){
		this.lat = lat;
	}

	setLong(long){
		this.long = long;
	}

	setDeleted(deleted){
		this.deleted = deleted;
	}

	getInstitutos(){
		return this.institutos;
	}

	getId(){
		return this.id;
	}

	getSigla(){
		return this.sigla;
	}

	getNome(){
		return this.nome;
	}

	getLat(){
		return this.lat;
	}


	getLong(){
		return this.long;
	}

	getDeleted(){
		return this.deleted;
	}

	fillFromObject(obj){
		console.log('obj', obj);
		if(obj.institutos !== undefined)
			this.setInstitutos(obj.institutos)
		
		if(obj.id !== undefined)
			this.setId(obj.id)
		
		if(obj.sigla !== undefined)
			this.setSigla(obj.sigla)
		
		if(obj.nome !== undefined)
			this.setNome(obj.nome)
		
		if(obj.lat !== undefined)
			this.setLat(obj.lat)
		
		if(obj.long !== undefined)
			this.setLong(obj.long)
		
		if(obj.deleted !== undefined)
			this.setDeleted(obj.deleted)
	}

}