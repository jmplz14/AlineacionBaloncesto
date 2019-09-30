# AlineacionBaloncesto
## Descripción

Se pedira mediante un formulario web las siguientes datos:
- Nombre de cada jugador (5 jugadores).
- Posicion de cada jugar (Alero, pivot, base...).
- Lista de correos electronicos a los que enviar la image.

Con estos datos nuestro micro servicio se encargara de realizar una imagen en la que cada jugador aparezca en la posicion correspondiente de la alineacion. Esta imagen sera envida a la lista de correo que se pedira en el formulacion web. De esta forma se podra enviar la alineacion de un equipo de baloncesto a todos la parte tecnica del equipo.  
## Implementación 
Para la implementación usaremos python y la librería pillow que nos permitirá crear la imagen de la alineación y meter los nombres de los jugadores. Aparte la imagen sera enviada al correo dado por el usuario mediante otra libreria de python llamada smtplib.

