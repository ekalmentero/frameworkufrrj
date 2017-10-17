"use strict";

export default class Predio {

	constructor(id, nome, sigla, lat, long, deleted, institutos){
		this.id = id;
		this.nome = nome;
		this.sigla = sigla;
		this.lat = lat;
		this.long = long;
		this.deleted = deleted;
		this.institutos = institutos;
	}

	setInstitutos(institutos){
		this.institutos = institutos;
	}

	getInstitutos(){
		return this.institutos;
	}

	setId(id){
		this.id = id;
	}

	setSigla(sigla){
		this.sigla = sigla;
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

}