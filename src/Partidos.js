const fs = require('fs')
/**
  * @class Partido
  * @description Se usa para almacenar la información de un partido.
*/
class Partido {
	/**
         * Crear partido.
         * @param {String} id Identificador del partido.
         * @param {String}  local Identificador del equipo local.
		 * @param {Array.<Int>} titularesLocales Lista de los dorsales del equipo titular para los locales.
		 * @param {String}  visitante Identificador del equipo visitante.
		 * @param {Array.<Int>} titularesVisitantes Lista de los dorsales del equipo titular para los visitantes.
		 * @param {Int} numCuartos Total de cuartos que tiene el partido.
		 * @param {Array.<Cambio>} listaCambios Lista con todos los cambios realizados en el partido.  
         */
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