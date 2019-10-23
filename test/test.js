const AlineacionBaloncesto = require("../src/AlineacionBaloncesto");
const Jugador = require("../src/Jugadores")
const Equipo = require("../src/Equipos")
const Cambio = require("../src/Cambios")
const Partido = require("../src/Partidos")
const servicio = new AlineacionBaloncesto()
const fs = require("fs");


describe("Buscar equipo E001", function() {
  var equipo;

  it("Tiene que devolver el equipo con id E001", function() {
    equipo = servicio.getEquipo("E001");
    expect(equipo.id).toBe("E001");
  });
});

describe("Añadir equipo con id E003", function() {
  var equipo;
  var jugadores = [];

  it("Se crea el equipo con id E003", function() {
    var jugador = new Jugador("Juan",7)
    jugadores.push(jugador)
    jugador = new Jugador("María",5)
    jugadores.push(jugador)
    jugador = new Jugador("Luis",6)
    jugadores.push(jugador)
    jugador = new Jugador("Jesús",13)
    jugadores.push(jugador)
    jugador = new Jugador("Marta",8)
    jugadores.push(jugador)
    
    equipo = new Equipo("E003","UGR",jugadores)

    //equipo = servicio.getPartido("P001");
    servicio.setEquipo(equipo)
    equipo = servicio.getEquipo("E003")
    expect(equipo.id).toBe("E003");
  });
});

describe("Buscar partido con id P001", function() {
  var partido;

  it("Devuelve el partido con id P001", function() {
    partido = servicio.getPartido("P001");
    expect(partido.id).toBe("P001");
  });
});

describe("Añadir partido con id P003", function() {
  var partido;
  var cambios = [];

  it("Se crea un nuevo partido con id P003", function() {
    var cambio = new Cambio("l",7,17,"5:33",3)
    cambios.push(cambio)
    cambio = new Cambio("v",2,22,"5:33",3)
    cambios.push(cambio)
    var titularesLocales = [7,23,20,5,14]
    var titularesVisitantes = [2,6,12,14,15]
  
    
    partido = new Partido("P003","E001",titularesLocales,"E002",titularesVisitantes,4,cambios)

    //equipo = servicio.getPartido("P001");
    servicio.setPartido(partido)
    partido = servicio.getPartido("P003")
    expect(partido.id).toBe("P003");
  });
});

describe("Existe un jugador el el equipo E001 con dorsal 7", function() {
  it("Se devuelve true si existe el jugador", function() {

    expect(servicio.existeJugador("E001",7)).toBe(true);
  });
});

describe("Obtiene los cambios del partido P001 del jugador del equipo E001 con dorsal 7", function() {
  it("Se devuelve un array con los cambios (En este caso 1)", function() {
    var partido = servicio.getPartido("P001");
    
    expect(servicio.obtenerCambios("l",7,partido.listaCambios).length).toBe(1);
  });
});

describe("Obtener el número de titularidades del jugado con dorsal 7 del equipo E001", function() {
  it("Se devuelve el número de titularidades(En este caso 1)", function() {
    
    expect(servicio.obtenerNumTitularidades("E002",21)).toBe(2);
  });
});

describe("Obtener el número de partidos jugados del jugador con dorsal 7 del equipo E001", function() {
  it("Se devuelve un array con los códigos de los partidos jugados(P001 y P002)", function() {
    var partidos_jugados = servicio.obtenerPartidosJugados("E002",21)
    expect([partidos_jugados[0].id,partidos_jugados[1].id].toString).toBe(["P001","P002"].toString);
  });
});

describe("Obtener el equipo titular de los locales en el partido P001", function() {
  it("Se devuelve el array de titulares([7,23,20,5,14])", function() {
    var partido = servicio.getPartido("P001")

    expect(servicio.obtenerTitulares("l",partido)).toBe(partido.titularesLocales);
  });
});

describe("Obtener el equipo titular de los visitantes en el partido P001", function() {
  it("Se devuelve el array de titulares([2,6,12,14,21])", function() {
    var partido = servicio.getPartido("P001")

    expect(servicio.obtenerTitulares("v",partido)).toBe(partido.titularesVisitantes);
  });
});


