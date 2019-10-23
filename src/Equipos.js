const fs = require('fs')
/**
  * @class Equipo
  * @description Se usa para almacenar la información de un equipo.
*/
class Equipo {
        /**
         * Crear equipo.
         * @param {String} id Identificador del equipo.
         * @param {String} equipo Nombre del equipo.
         * @param {Array.<Jugador>}  jugadores Array con los jugadores que pertenecen al equipo.
         */
	constructor(id, equipo, jugadores) {
        this.id = id;
        this.equipo = equipo;
        this.jugadores = jugadores;
	}


}
module.exports = Equipo;