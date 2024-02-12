  // Puntuaciones de cada aventura
  let puntuaciones = {
    bosque: 0,
    espacio: 0,
    submarina: 0
};

// Función para mostrar un modal
function mostrarModal(idModal) {
    let modal = document.getElementById(idModal + '_modal');
    modal.style.display = "block";
}

// Función para cerrar un modal
function cerrarModal(idModal) {
    let modal = document.getElementById(idModal + '_modal');
    modal.style.display = "none";
}

// Función para manejar la elección de opciones dentro de los modales
function elegirOpcion(modal, opcion) {
    let accion;
    let puntos;

    switch (modal) {
        case 'bosque':
            switch (opcion) {
                case 'seguir':
                    accion = "Siguiendo el sendero, encuentras un mapa antiguo dejado por un zorro. Te lleva a un tesoro escondido en el bosque.";
                    puntos = 10;
                    mostrarModal('bosque_continuacion');
                    break;
                case 'acampar':
                    accion = "Decides acampar aquí y pasas una noche segura, pero te preguntas qué habrías descubierto si hubieras explorado más.";
                    puntos = 5;
                    mostrarModal('bosque_continuacion');
                    break;
                case 'explorar':
                    accion = "Sales del sendero y te adentras en una cueva. Encuentras una salida secreta del bosque con vistas espectaculares.";
                    puntos = 15;
                    mostrarModal('bosque_continuacion');
                    break;
            }
            break;
        case 'espacio':
            switch (opcion) {
                case 'aterrizar':
                    accion = "Aterrizas en un planeta desconocido y te encuentras con una civilización alienígena amistosa.";
                    puntos = 20;
                    mostrarModal('espacio_continuacion');
                    break;
                case 'explorar':
                    accion = "Decides explorar el espacio y descubres un agujero de gusano que te lleva a una nueva galaxia.";
                    puntos = 25;
                    mostrarModal('espacio_continuacion');
                    break;
                case 'contactar':
                    accion = "Contactas con la base y recibes instrucciones para regresar a la Tierra.";
                    puntos = 15;
                    mostrarModal('espacio_continuacion');
                    break;
            }
            break;
        case 'submarina':
            switch (opcion) {
                case 'arrecife':
                    accion = "Investigas un arrecife cercano y descubres una especie marina desconocida.";
                    puntos = 10;
                    mostrarModal('submarina_continuacion');
                    break;
                case 'fosab':
                    accion = "Bajas a una fosa abisal y encuentras restos de una antigua civilización submarina.";
                    puntos = 20;
                    mostrarModal('submarina_continuacion');
                    break;
                case 'delfines':
                    accion = "Sigues a un grupo de delfines y descubres una cueva submarina secreta.";
                    puntos = 15;
                    mostrarModal('submarina_continuacion');
                    break;
            }
            break;
    }

    // Actualiza el contenido del elemento 'resultado' con la acción elegida
    document.getElementById('resultado').textContent = accion;

    // Suma los puntos correspondientes a la aventura
    puntuaciones[modal] += puntos;

    // Muestra la puntuación total
    mostrarPuntuacionTotal();

    cerrarModal(modal);
}

// Función para manejar la continuación de la historia
function elegirContinuacion(modal, opcion) {
    let accion;
    let puntos;

    switch (modal) {
        case 'bosque':
            switch (opcion) {
                case 'mapa':
                    accion = "Estudiando el mapa, descubres la ubicación exacta del tesoro y te diriges hacia allí.";
                    puntos = 30;
                    break;
                case 'descansar':
                    accion = "Te sientes renovado después de un buen descanso. Decides continuar tu aventura con energías renovadas.";
                    puntos = 15;
                    break;
                case 'caminar':
                    accion = "Caminando por el bosque, encuentras huellas que te llevan a un lugar misterioso.";
                    puntos = 25;
                    break;
            }
            break;
        case 'espacio':
            switch (opcion) {
                case 'descubrimiento':
                    accion = "Investigando el extraño objeto, descubres tecnología avanzada que puede ayudarte en tu viaje.";
                    puntos = 35;
                    break;
                case 'explorar_planeta':
                    accion = "Explorando el planeta, te encuentras con criaturas fascinantes y paisajes impresionantes.";
                    puntos = 40;
                    break;
                case 'regresar':
                    accion = "Decides regresar a la nave para planificar tu siguiente movimiento.";
                    puntos = 20;
                    break;
            }
            break;
        case 'submarina':
            switch (opcion) {
                case 'peces':
                    accion = "Observando la fauna marina, descubres una especie única que nunca antes habías visto.";
                    puntos = 25;
                    break;
                case 'cueva':
                    accion = "Explorando la cueva submarina, encuentras artefactos antiguos que cuentan historias perdidas.";
                    puntos = 30;
                    break;
                case 'superficie':
                    accion = "Decides regresar a la superficie y compartir tus descubrimientos con el mundo.";
                    puntos = 15;
                    break;
            }
            break;
    }

    // Actualiza el contenido del elemento 'resultado' con la acción elegida
    document.getElementById('resultado').textContent = accion;

    // Suma los puntos correspondientes a la aventura
    puntuaciones[modal] += puntos;

    // Muestra la puntuación total
    mostrarPuntuacionTotal();

    cerrarModal(modal + '_continuacion');
}

// Función para mostrar la puntuación total
function mostrarPuntuacionTotal() {
    let puntuacionTotal = puntuaciones.bosque + puntuaciones.espacio + puntuaciones.submarina;
    document.getElementById('puntuacion_total').textContent = "Puntuación Total: " + puntuacionTotal;
}

// Función para resetear las puntuaciones
function resetearPuntuaciones() {
    puntuaciones = {
        bosque: 0,
        espacio: 0,
        submarina: 0
    };
    mostrarPuntuacionTotal();
}