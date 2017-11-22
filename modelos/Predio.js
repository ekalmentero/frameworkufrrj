"use strict";

import Entidade from './entidade';

export default class Predio extends Entidade{
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

	get Institutos(){
		return this.institutos;
	}

	get Id(){
		return this.id;
	}

	get Sigla(){
		return this.sigla;
	}

	get Nome(){
		return this.nome;
	}

	get Lat(){
		return this.lat;
	}


	get Long(){
		return this.long;
	}

	get Deleted(){
		return this.deleted;
	}

}