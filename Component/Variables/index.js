// pedir al usuario que elija una opcionn
let eleccion = prompt("Elige tu aventura: \n1. Aventura en el bosque \n2. Viaje espacial \n3. Exploración submarina");

// aventura en el bosque
if (eleccion === "1") {
    alert("Te has adentrado en un bosque misterioso. A tu alrededor, los árboles susurran secretos antiguos.");
    let accionBosque = prompt("¿Qué decides hacer? \n1. Seguir el sendero \n2. Acampar aquí \n3. Explorar fuera del sendero");

    if (accionBosque === "1") {
        let accionClaro = prompt("El zorro parece amistoso y tiene algo en la boca. ¿Qué haces? \n1. Acercarte al zorro \n2. Ignorarlo y continuar");

        if (accionClaro === "1") {
            alert("Te acercas y el zorro suelta un mapa antiguo. Este te lleva a un tesoro escondido en el bosque. ¡Has encontrado un gran tesoro!");
        } else if (accionClaro === "2") {
            alert("Ignoras al zorro y continúas tu camino, disfrutando de la belleza natural del bosque. A veces, la verdadera aventura es simplemente explorar.");
        }

    } else if (accionBosque === "2") {
        let accionNoche = prompt("Escuchas pasos. ¿Qué haces? \n1. Salir a investigar \n2. Quedarte en la tienda");

        if (accionNoche === "1") {
            alert("Sales y descubres un grupo de ciervos. Es un momento mágico que te llena de paz. Una experiencia inolvidable en la naturaleza.");
        } else if (accionNoche === "2") {
            alert("Te quedas dentro, y al amanecer encuentras huellas de animales alrededor de tu carpa. Fue una noche segura, pero te preguntas qué habrías visto.");
        }

    } else if (accionBosque === "3") {
        let accionCueva = prompt("Entras a la cueva. Hay dos caminos. ¿Cuál eliges? \n1. El camino de la izquierda \n2. El camino de la derecha");

        if (accionCueva === "1") {
            alert("El camino te lleva a una cámara llena de diamantes brillantes. Es un descubrimiento increíble y sales del bosque lleno en conocimientos geológicos.");
        } else if (accionCueva === "2") {
            alert("Este camino te lleva a una salida secreta del bosque con vistas espectaculares. Te sientes rejuvenecido por esta aventura única.");
        }
    }

// viaje espacial
} else if (eleccion === "2") {
    alert("Estás a bordo de una nave espacial, orbitando un planeta desconocido.");
    let accionEspacio = prompt("¿Cuál será tu siguiente acción? \n1. Aterrizar en el planeta \n2. Explorar el espacio \n3. Contactar con la base");

    if (accionEspacio === "1") {
        let accionPlaneta = prompt("Los alienígenas te reciben. ¿Cómo reaccionas? \n1. Intentar comunicarte \n2. Regresar a la nave");

        if (accionPlaneta === "1") {
            alert("Logras comunicarte. Los alienígenas te muestran su avanzada tecnología y te ofrecen conocimientos que cambian la ciencia humana para siempre.");
        } else if (accionPlaneta === "2") {
            alert("Regresas a la nave y vuelves a la Tierra. Informas de tu descubrimiento, que se convierte en el inicio de una nueva era de exploración.");
        }

    } else if (accionEspacio === "2") {
        let accionNave = prompt("Investigas la nave. Encuentras un artefacto. ¿Qué haces con él? \n1. Llevarlo \n2. Dejarlo");

        if (accionNave === "1") {
            alert("El artefacto resulta ser una fuente de energía inagotable. Cambia el curso de la historia humana, llevando a una era de prosperidad.");
        } else if (accionNave === "2") {
            alert("Decides que es mejor no interferir. Reportas el hallazgo y te conviertes en un respetado explorador espacial, inspirando a futuras generaciones.");
        }

    } else if (accionEspacio === "3") {
        alert("Respondes a la señal de auxilio. Rescatas a una tripulación perdida, ganando fama como héroe. Tus acciones inspiran películas y libros.");
    }

// exploración submarina
} else if (eleccion === "3") {
    alert("Has sumergido en las profundidades del océano. Las criaturas marinas te rodean.");
    let accionSubmarina = prompt("¿Qué decides hacer? \n1. Investigar un arrecife cercano \n2. Bajar a una fosa abisal \n3. Seguir a un grupo de delfines");

    if (accionSubmarina === "1") {
        alert("Al investigar el tesoro, descubres artefactos de civilizaciones antiguas. Tu descubrimiento reescribe la historia del comercio marítimo antiguo.");
    } else if (accionSubmarina === "2") {
        alert("La ciudad submarina resulta ser un ecosistema único con nuevas especies. Tu descubrimiento aporta valiosa información sobre la biodiversidad marina.");
    } else if (accionSubmarina === "3") {
        alert("Siguiendo a los delfines, descubres una serie de cuevas submarinas con artefactos arqueológicos. Tu hallazgo aporta luz sobre antiguas civilizaciones marítimas.");
    }

} else {
    alert("No has elegido una opción válida. Tu aventura no ha comenzado aún.");
}