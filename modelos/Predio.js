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
		this.set Institutos(institutos);
		this.set Id(id);
		this.set Sigla(sigla);
		this.set Nome(nome);
		this.set Lat(lat);
		this.set Long(long);
		this.set Deleted(deleted);
	}

	set Institutos(institutos){
		this.institutos = institutos;
	}

	set Id(id){
		this.id = id;
	}

	set Sigla(sigla){
		this.sigla = sigla;
	}

	set Nome(nome){
		this.nome = nome;
	}

	set Lat(lat){
		this.lat = lat;
	}

	set Long(long){
		this.long = long;
	}

	set Deleted(deleted){
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