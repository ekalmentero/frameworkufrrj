"use strict";

export default class Predio {
	@Private id;
	@Private nome;
	@Private sigla;
	@Private lat;
	@Private long;
	@Private deleted;
	@Private institutos;

	constructor(id, nome, sigla, lat, long, deleted, institutos){
		this.setInstitutos(institutos);
		this.setId(id);
		this.setSigla(sigla);
		this.setNome(nome);
		this.setLat(lat);
		this.setLong(long);
		this.setDeleted(deleted);
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

	get getInstitutos(){
		return this.institutos;
	}

	get getId(){
		return this.id;
	}

	get getSigla(){
		return this.sigla;
	}

	get getNome(){
		return this.nome;
	}

	get getLat(){
		return this.lat;
	}


	get getLong(){
		return this.long;
	}

	get getDeleted(){
		return this.deleted;
	}

}