// Datos de las zapatillas para el primer nivel
const shoesLevel1 = [
    { name: "Air Jordan 3 Retro SE Craft - Ivory", image: "/img/Air_Jordan_3_Retro_SE_Craft_Ivory.webp" },
    { name: "Air Jordan 4 Retro Bred Reimagined", image: "/img/Air_Jordan_4_Retro_Bred_Reimagined.webp" },
    { name: "Wmns Air Jordan 11 Retro Neapolitan", image: "/img/Wmns_Air_Jordan_11_Retro_Neapolitan.webp" }
];

// Datos de las zapatillas para el segundo nivel
const shoesLevel2 = [
    { name: "Nike Air Max 1 - Limeade", image: "/img/Nike_Air_Max_1_Limeade.webp" },
    { name: "Nike Dunk Low Community Garden", image: "/img/Nike_Dunk_Low_Community_Garden.webp" },
    { name: "Adidas Yeezy Boost 350 V2 Mono Ice", image: "/img/Adidas_Yeezy_Boost_350_V2_Mono_Ice.webp" }
];

// Unificar los datos de ambos niveles
const allShoes = [shoesLevel1, shoesLevel2];

// Elementos DOM
const shoeImage = document.getElementById("shoe-image");
const optionButtons = document.querySelectorAll(".option-button");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const scoreDisplay = document.getElementById("score");
const attemptsDisplay = document.getElementById("attempts");
const modal = document.getElementById("modal");
const nextLevelButton = document.getElementById("next-level-button");

let currentLevelIndex = 0; // Índice para seguir el progreso del jugador a través de los niveles
let currentShoeIndex = 0;
let score = 0;
let attempts = 0;

// Cargar el progreso del juego desde el almacenamiento local
if (localStorage.getItem("gameProgress")) {
    const progress = JSON.parse(localStorage.getItem("gameProgress"));
    currentLevelIndex = progress.levelIndex;
    currentShoeIndex = progress.shoeIndex;
    score = progress.score;
    attempts = progress.attempts;

    // Actualizar la visualización de los aciertos y los intentos fallidos
    scoreDisplay.textContent = score;
    attemptsDisplay.textContent = attempts;
}

// Event listeners para botones
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
optionButtons.forEach(button => button.addEventListener("click", handleOptionSelect));
nextLevelButton.addEventListener("click", nextLevel);

// Función para iniciar el juego
function startGame() {
    disableButton(startButton); // Desactivar el botón "Iniciar Juego"
    enableButton(resetButton); // Habilitar el botón "Resetear Partida"
    displayNextShoe(); // Mostrar la primera zapatilla del nivel actual
}

// Función para mostrar la siguiente zapatilla
function displayNextShoe() {
    const currentLevelShoes = allShoes[currentLevelIndex];
    if (currentShoeIndex < currentLevelShoes.length) {
        const currentShoe = currentLevelShoes[currentShoeIndex];
        shoeImage.src = currentShoe.image;

        // Colocar el nombre de la zapatilla correcta en un botón aleatorio
        const correctButtonIndex = Math.floor(Math.random() * optionButtons.length);
        optionButtons[correctButtonIndex].textContent = currentShoe.name;

        // Colocar nombres de otras zapatillas en los demás botones
        const otherShoes = currentLevelShoes.filter((shoe, index) => index !== currentShoeIndex);
        optionButtons.forEach((button, index) => {
            if (index !== correctButtonIndex) {
                const randomIndex = Math.floor(Math.random() * otherShoes.length);
                button.textContent = otherShoes[randomIndex].name;
                otherShoes.splice(randomIndex, 1);
            }
        });
    }
}

// Función para manejar la selección de opciones
function handleOptionSelect(event) {
    const selectedShoeName = event.target.textContent;
    const currentLevelShoes = allShoes[currentLevelIndex];
    const currentShoe = currentLevelShoes[currentShoeIndex];

    if (selectedShoeName === currentShoe.name) {
        score++;
        scoreDisplay.textContent = score;
    } else {
        attempts++;
        attemptsDisplay.textContent = attempts;
    }

    // Pasar a la siguiente zapatilla o finalizar el nivel si todas han sido mostradas
    if (currentShoeIndex < currentLevelShoes.length - 1) {
        currentShoeIndex++;
        displayNextShoe();
    } else {
        if (currentLevelIndex < allShoes.length - 1) {
            // Pasar al siguiente nivel
            currentLevelIndex++;
            currentShoeIndex = 0;
            displayNextShoe();
            showModal();
        } else {
            showModal();
        }
    }

    // Guardar el progreso del juego en el almacenamiento local
    saveProgress();
}

// Función para mostrar el modal
function showModal() {
    if (currentLevelIndex < allShoes.length - 1) {
        modal.querySelector(".modal-content p").textContent = "¡Felicidades! Has completado el nivel. ¡Pasas al siguiente nivel!";
    } else {
        modal.querySelector(".modal-content p").textContent = "¡Felicidades! Has completado todos los niveles.";
    }
    modal.style.display = "block";
}

// Función para guardar el progreso del juego en el almacenamiento local
function saveProgress() {
    const progress = {
        levelIndex: currentLevelIndex,
        shoeIndex: currentShoeIndex,
        score: score,
        attempts: attempts
    };
    localStorage.setItem("gameProgress", JSON.stringify(progress));
}

// Función para avanzar al siguiente nivel
function nextLevel() {
    // Aquí puedes implementar la lógica para avanzar al siguiente nivel
    location.reload(); // Recargar la página para reiniciar completamente el juego
}

// Función para restablecer la partida
function resetGame() {
    localStorage.removeItem("gameProgress"); // Limpiar el progreso guardado en el almacenamiento local
    location.reload(); // Recargar la página para reiniciar completamente el juego
}

// Función para desactivar un botón
function disableButton(button) {
    button.disabled = true;
}

// Función para activar un botón
function enableButton(button) {
    button.disabled = false;
}
