const fs = require('fs')

class Partido {

	constructor(id, local, titularesLocales, visitante, titularesVisitantes, numCuartos, listaCambios ) {
		this.id = id;
		this.local = local;
		this.titularesLocales = titularesLocales;
		this.visitante = visitante;
		this.titularesVisitantes = titularesVisitantes;
		this.numCuartos = numCuartos;
		this.listaCambios = listaCambios;

	}


}

module.exports = Partido;