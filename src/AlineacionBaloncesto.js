const Equipo = require("./Equipos");
const Jugador = require("./Jugadores")
const Partido = require("./Partidos")
const Cambio = require("./Cambios")
const fs = require('fs');

const filter = require('lodash');
const fileContents = fs.readFileSync('src/db/Partidos.json', 'utf8')
const data1 = JSON.parse(fileContents);

const fileContents2 = fs.readFileSync('src/db/Plantillas.json', 'utf8')
const data2 = JSON.parse(fileContents2);

/**
  * @class AlineacionBaloncesto
  * @description Se utiliza para añadir y buscar equipos y partidos. Ademas también nos dará información sobre partidos jugados por los jugadores.
*/
class AlineacionBaloncesto {
    
    constructor() { 
      //Las uso como base de datos hasta que las implementemos
      this.Plantillas = data2;
      this.Enfrentamientos = data1;
    }


    /**
    * @description Devuelve un equipo mediante su identificador.
    * @param {String} identificador Id del equipo a devolver.
    * @return {Equipo} Devuelve el equipo.
    */
    getEquipo(identificador){
        var datos_equipo = filter.filter(this.Plantillas["equipos"], x => x.id === identificador)
        var equipo = -1;

        if( datos_equipo.length == 1){
          var nombre = datos_equipo[0].equipo;
          var jugadores = [];
          var array_jugadores = datos_equipo[0].jugadores;

          for (var x in array_jugadores){
            var jugador = new Jugador(array_jugadores[x].nombre, array_jugadores[x].dorsal);
            jugadores.push(jugador);
          }
          
          equipo = new Equipo(identificador, nombre, jugadores);
        }
        
        
        return equipo;
    }

    /**
    * @description Añade un nuevo equipo a nuestra base de equipos.
    * @param {Equipo} equipo Se trata de un elemento de la clase equipo con la información del nuevo equipo.
    */
    setEquipo(equipo){ 

      var datos = filter.filter(this.Plantillas["equipos"], x => x.id === equipo.id)
      if(datos.length == 0 && equipo instanceof Equipo){


        var json_equipo = JSON.stringify(equipo);
        json_equipo = JSON.parse(json_equipo);
        this.Plantillas["equipos"].push(json_equipo);


      }

      
    }

    /**
    * @description Devuelve un partido mediante su identificador.
    * @param {String} identificador Id del partido a devolver.
    * @return {Partido} Devuelve el partido.
    */
    getPartido(identificador){
      var datos_partido = filter.filter(this.Enfrentamientos["partidos"], x => x.id === identificador)
      var partido = -1

      if(datos_partido.length == 1){
        var identificador = datos_partido[0].id;
        var local = datos_partido[0].local;
        var visitante = datos_partido[0].visitante;
        var titularesLocales = datos_partido[0].titularesLocales;
        var titularesVisitante = datos_partido[0].titularesVisitantes;
        var num_cuartos = datos_partido[0].numCuartos;
        var array_cambios = datos_partido[0].cambios;

        var cambios = []
        for (var x in array_cambios){
          var actual = array_cambios[x];
          var cambio_actual = new Cambio(actual.equipo, actual.cambiado, actual.sustituto, actual.minuto, actual.cuarto);
          cambios.push(cambio_actual);
        }

        
        partido = new Partido(identificador,local,titularesLocales,visitante,titularesVisitante,num_cuartos,cambios)
      }
      return partido
    }

    /** 
    * @description Añade un nuevo partido a nuestra base de partidos.
    * @param {Partido} partido Se trata de un elemento de la clase partido con la información del nuevo partido.
    */
    setPartido(partido){
      var datos = filter.filter(this.Enfrentamientos["partidos"], x => x.id === partido.id)
      if(datos.length == 0 && partido instanceof Partido){
        var json_partido = JSON.stringify(partido);
        json_partido = JSON.parse(json_partido);
        this.Enfrentamientos["partidos"].push(json_partido);
      }
    }

    /**
    * @description Se utiliza para saber si un equipo tiene un jugador con un cierto dorsal.
    * @param {String} idEquipo Id del equipo al que tiene que pertenecer el jugador.
    * @param {Int} dorsal Dorsal del jugador buscado.
    * @return {Boolean} True si existe el jugador y false en caso de no existir.
    */
    existeJugador(idEquipo, dorsal){
      var encontrado = false;
      var equipo = this.getEquipo(idEquipo);

      if (equipo != -1){

        var buscado = equipo.jugadores.find(function(jugador) {
          
          return jugador.dorsal == dorsal;
        });

        if (buscado instanceof Jugador){
          encontrado = true
        }
      }

      return encontrado;
    }

    /**
    * @description Se utiliza para obtener los cambios de un jugador dentro de un array de cambios.
    * @param {String} equipo Será un string que contendrá "l" si es del equipo local y "v" si es el visitante.
    * @param {Int} dorsal Dorsal del jugador buscado.
    * @param {Array.<Cambio>} cambios Lista de los cambios en los que buscaremos.
    * @return {Array.<Cambio>} Lista de cambios en los que participa el jugador buscado.
    */    
    obtenerCambios(equipo,dorsal,cambios){
      var datos = [];
      for(var k in cambios) {
        if(cambios[k].equipo == equipo && (cambios[k].cambiado == dorsal || cambios[k].sustituto == dorsal)){
          datos.push(cambios[k])
        }
      }

      return datos;
    }

    /**
    * @description Se utiliza para obtener la lista de titulares de un partido.
    * @param {String} equipo Será un string que contendrá "l" si es del equipo local y "v" si es el visitante.
    * @param {Partido} partido Partido del que obtendremos la lista de titulares.
    * @return {Array.<Int>} Dorsales de los cinco titulares.
    */ 
    obtenerTitulares(equipo,partido){
      var datos = [];
      if (equipo == "l"){
        datos = partido.titularesLocales;
      }else if(equipo == "v"){
        datos = partido.titularesVisitantes;
      }

      return datos;
    }
    
    /**
    * @description Devuelve una lista con los códigos de los partidos jugados por un jugador.
    * @param {String} idEquipo Id del equipo al que pertenecer el jugador.
    * @param {Int} dorsal Dorsal del jugador buscado.
    * @return {Array.<String>} Lista de identificadores de los partidos jugados por el jugador.
    */ 
    obtenerPartidosJugados(idEquipo,dorsal){
      var partidosJugados = -1
      if(this.existeJugador(idEquipo,dorsal)){
        partidosJugados = []

        for(var k in this.Enfrentamientos["partidos"]) {
          var partido = this.Enfrentamientos["partidos"][k];
          var equipo = "";

          if(partido.local == idEquipo){
            equipo = "l"
          }else if(partido.visitante == idEquipo){
            equipo = "v"
          }

          
          var cambios = this.obtenerCambios(equipo,dorsal,partido.cambios)
          var titulares  = this.obtenerTitulares(equipo,partido)

          if(titulares.length > 0){
            
            var esTitular = titulares.find(function(jugador) {
          
              return jugador == dorsal;
            });
            if(esTitular || cambios.length > 0){
              
              partidosJugados.push(this.getPartido(partido.id))
            }
            
          }
          
          
        }

      }

      return partidosJugados
    }

    /**
    * @description Devuelve el número de veces que el jugador ha sido titular.
    * @param {String} idEquipo Id del equipo al que pertenecer el jugador.
    * @param {Int} dorsal Dorsal del jugador buscado.
    * @return {Int} Número de veces que ha sido titular.
    */
    obtenerNumTitularidades(idEquipo,dorsal){
      var partidos = this.obtenerPartidosJugados(idEquipo,dorsal);
      var numPartidos = -1
      if(partidos != -1){
        numPartidos = 0;
        for (var x in partidos){
          var esTitular = false;
          if(idEquipo == partidos[x].local){
            var esTitular = partidos[x].titularesLocales.find(function(jugador) {
          
              return jugador == dorsal;
            });
          }
          if(idEquipo == partidos[x].visitante){
            var esTitular = partidos[x].titularesVisitantes.find(function(jugador) {
          
              return jugador == dorsal;
            });
          }
          if(esTitular){
            numPartidos++
          }
        }
      }
        
      
      

      return numPartidos
    }

  

}


module.exports = AlineacionBaloncesto;