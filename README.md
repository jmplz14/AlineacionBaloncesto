# AlineacionBaloncesto
## Descripción

Se pedira mediante un formulario web las siguientes datos:
- Nombre de cada jugador (5 jugadores).
- Posicion de cada jugar (Alero, pivot, base...).
- Lista de correos electronicos a los que enviar la image.

Con estos datos nuestro micro servicio se encargara de realizar una imagen en la que cada jugador aparezca en la posicion correspondiente de la alineacion. Esta imagen sera envida a la lista de correo que se pedira en el formulacion web. De esta forma se podra enviar la alineacion de un equipo de baloncesto a todos la parte tecnica del equipo.  
## Implementación 
- Lenguaje: Para la implementación usaremos python y la librería pillow que nos permitirá crear la imagen de la alineación y meter los nombres de los jugadores. Aparte la imagen sera enviada al correo dado por el usuario mediante otra libreria de python llamada smtplib.


- Integración continua: En este caso usare travis al ser uno de los mas populares.
- Entorno virtual: En este caso utilizare (pipenv)[https://pipenv-es.readthedocs.io/es/latest/] al tener bastante documentación que me ayudara a la hora de aprender a utilizarlo.
- Test: Para los test usare pytest explicado en el temario al parecerme muy sencillo de usar.

El resto de apartados aun no he decido cual utilizare por falta de conocimientos de su uso. Tendré que ir mirandolo en las siguientes semanas.

