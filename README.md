[![Build Status](https://travis-ci.org/jmplz14/AlineacionBaloncesto.svg?branch=master)](https://travis-ci.org/jmplz14/AlineacionBaloncesto)
[![CircleCI](https://circleci.com/gh/jmplz14/AlineacionBaloncesto.svg?style=svg)](https://circleci.com/gh/jmplz14/AlineacionBaloncesto)
# AlineacionBaloncesto
## Descripción
El objetivo de mi proyecto sera registrar las alineaciones en un partido de baloncesto y los equipos que participan. Sera utilizada para poder consultar los partidos y equipos. Ademas también podremos obtener los partidos jugados por un jugador y el numero de veces que fue titular.

## Implementación
- Lenguaje: Como lenguaje se usara javascript, concretamente usare nodejs, puesto que es muy bueno para microservicios. Esto se debe al uso de módulos muy pequeños para cada característica, siendo muy liviano.

- En este caso para la integración continua usare [travis](https://travis-ci.org/) al ser uno de los mas populares y con mas documentación.

- Para la infraestructura de la aplicación web vamos a usar [Expres.js](https://expressjs.com/es/) por ser muy rápida y flexible al usarla con nodejs

- Para la base de datos usaremos [mongoDB](https://www.mongodb.com/es) que es relacional y ya la utilicé en otras asignaturas de la universidad. 

- Servicio de Logs: En principio pensé en el uso de la siguiente librería [express-logger-unique-req-id](https://www.npmjs.com/package/express-logger-unique-req-id), tiene una configuración muy sencilla  y nos haría gran parte del trabajo. Usa [Winston](https://www.npmjs.com/package/winston) por debajo con lo que podríamos modificar la configuración. Pero optare por utilizar directamente Winston para adaptarlo mejor a mi proyecto y aprender a usarlo. Ademas Winston tiene mucha documentación de ayuda que me puede hacer falta. 

- Test: De los tres dados en la teoría de la asignatura usare [Jasmine](https://jasmine.github.io/).



## Documentación 
## Herramienta de construcción
Nuestra herramienta de construcción sera [npm](https://www.npmjs.com/). La utlizamos para gestinar tanto para descargar e instalar las librerias necesarias para nuestro proyecto en el fichero y para la ejecución de los test. 
<code>

    {
    "name": "alineacionbaloncesto",
    "version": "1.0.0",
    "description": "Proyecto para la asignatura IV",
    "main": "app.js",
    "scripts": {
        "test": "jasmine test/*.js"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/jmplz14/AlineacionBaloncesto.git"
    },
    "author": "jmplz14",
    "license": "GPL-3.0",
    "bugs": {
        "url": "https://github.com/jmplz14/AlineacionBaloncesto/issues"
    },
    "homepage": "https://github.com/jmplz14/AlineacionBaloncesto#readme",
    "devDependencies": {
        "jasmine": "^3.5.0"
    },
    "dependencies": {
        "lodash": "^4.17.15"
    }
    }
</code>

Como se ve en el apartado de script, especificamos que ejecute para los test todos los ficheros con extensión js que se encuentre en la carpeta test. Hemos añadido la dependencias para nuestra liberia de de test(Jasmine) y una mas para lodash que utilizo para la búsqueda en un json.

## Instalación
Para la instalación se tendrá que ejecutar el siguiente comando:

<code>npm install</code>

## Test
La ejecución de los test se realizaran con el siguiente comando:

<code>npm test</code>

En nuestro caso tendremos 10 test:
- Comprueba que se encuentre la información de un equipo correctamente.
- Añadir correctamente un nuevo equipo.
- Comprueba que se encuentre la información de un partido correctamente.
- Añadir correctamente un nuevo partido.
- Existe un jugador en un equipo.
- Obtener correctamente los cambios de un partido.
- Obtener el numero correcto de partidos como titulares de un jugador.
- Obtener los partido jugados por un jugador
- Obtener la alineación titular del equipo local de un partido
- Obtener la alineación titular del equipo visitante de un partido.
 

## Integración Continua
Para la integración continua he utilizado [Travis CI](https://travis-ci.com/) y [Circle CI](https://circleci.com/). En ambos servicios utilizaremos la cuenta de github para registrarnos.

### Circle CI
Circle es un sistema basado en la nube y tiene un plan gratuito que nos permite usarlo sin problemas para esta practica. Tiene una configuración muy sencilla mediante el fichero [config.yml](https://github.com/jmplz14/AlineacionBaloncesto/blob/master/.circleci/config.yml).

<code>
    
    version: 2.1
    jobs:
        build:
            docker:
            - image: circleci/node:10.16.3
            steps:
            - checkout
            - run:
                name: Instalar dependencias
                command: npm install 
            - run:
                name: Correr test
                command: npm test
</code>

En nuestro caso usaremos la imagen con la version de node 10.16.3 y realizaremos la instalación y lanzar los test. 

Una de las principales ventajas de Circle sobre Travis es el tiempo de ejecución. En los test realizado Circle me ha tarado unos 10 segundos mientras Travis tardo unos dos minutos.

### Travis CI
Es de los mas utilizados y con una mayor cantidad de documentación para ayudarnos a la hora de la configuración. Tiene un plan gratuito par a proyectos de código abierto. 

En este caso el fichero de configuracion es [travis.yml](https://github.com/jmplz14/AlineacionBaloncesto/blob/master/.travis.yml)
<code>

    language: node_js
    node_js:
    - 10.16.3
    script:
    - npm test
</code>

En este caso el fichero es mas sencillo y solo especifico que se usara node y la versión 10.16.3 y el comando para ejecutar test. 

