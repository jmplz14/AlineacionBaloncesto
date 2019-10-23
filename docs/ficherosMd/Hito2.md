## Documentación Hito 2
## Herramienta de construcción
Nuestra herramienta de construcción será [npm](https://www.npmjs.com/). La utilizamos para gestionar la descarga e instalación de las librerías necesarias para nuestro proyecto y la ejecución de los test.
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
        "jasmine": "^3.5.0",
        "jsdoc": "^3.6.3"
    },
    "dependencies": {
        "lodash": "^4.17.15"
    }
    }

</code>

Como se ve en el apartado de script, especificamos que ejecute los tests para todos los ficheros con extensión js que se encuentre en la carpeta test. Hemos añadido las dependencias para nuestra librería de de test(Jasmine) y para jsdoc que nos ayuda a documentar las clases.

## Instalación
Para la instalación se tendrá que ejecutar el siguiente comando:

<code>

    npm install
</code>

## Test
La ejecución de los test se realizarán con el siguiente comando:

<code>

    npm test
</code>

En nuestro caso tendremos los siguientes 10 tests:
- Comprueba que existe un equipo.
- Añadir correctamente un nuevo equipo.
- Comprueba que existe un partido.
- Añadir correctamente un nuevo partido.
- Existe un jugador en un equipo.
- Obtener correctamente los cambios de un partido.
- Obtener el número correcto de partidos como titular de un jugador.
- Obtener los partidos jugados por un jugador.
- Obtener la alineación titular del equipo local de un partido
- Obtener la alineación titular del equipo visitante de un partido.
 
## Clase
Para ver la información de las clases utilizadas se puede consultar [aquí](https://jmplz14.github.io/AlineacionBaloncesto/AlineacionBaloncesto.html).

## Integración Continua
Para la integración continua he utilizado [Travis CI](https://travis-ci.com/) y [Circle CI](https://circleci.com/). En ambos servicios utilizaremos la cuenta de github para registrarnos.

### Circle CI
Circle es un sistema basado en la nube y tiene un plan gratuito que nos permite usarlo sin problemas para esta práctica. Tiene una configuración muy sencilla mediante el fichero [config.yml](https://github.com/jmplz14/AlineacionBaloncesto/blob/master/.circleci/config.yml).

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

En nuestro caso usaremos la imagen con la versión de node 10.16.3 y realizaremos la instalación y los test. 

Una de las principales ventajas de Circle sobre Travis es el tiempo de ejecución. En los tests realizados Circle me ha tardado unos 10 segundos mientras que Travis tardó unos dos minutos.

### Travis CI
Es de los mas utilizados y con una mayor cantidad de documentación para ayudarnos a la hora de la configuración. Tiene un plan gratuito para proyectos de código abierto y también esta basado en la nube. 

En este caso el fichero de configuración es [travis.yml](https://github.com/jmplz14/AlineacionBaloncesto/blob/master/.travis.yml)
<code>

    language: node_js
    node_js:
    - 10.16.3
    script:
    - npm test
</code>

El fichero es mas sencillo que en Circle y solo especifico que se usará node y la versión 10.16.3. En el apartado de script especifico el comando para ejecutar los test.

