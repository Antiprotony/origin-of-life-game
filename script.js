// script.js

// 1. Game Questions
const questions = [
    {
        question: "You are a young planet forming in the habitable zone. What do you do first?",
        options: [
            { text: "Create an ocean", correct: false },
            { text: "Create an atmosphere", correct: true }
        ],
        image: "images/planet.png"
    },
    {
        question: "You have created an atmosphere and then an ocean. Which chemical elements are mostly required on lands and waters?",
        options: [
            { text: "Ca, K, Sc, As, Au", correct: false },
            { text: "C, N, O, P, S, H", correct: true }
        ],
        image: "images/elements.png"
    },
    // ... (altre domande)
    {
        question: "I really would like to have life on my surface! But sometimes I miss chemicals. Maybe my celestial friends can help me. But, Who?",
        options: [
            { text: "Comets and asteroids", correct: true },
            { text: "Moons and planets", correct: false }
        ],
        image: "images/panspermia.png"
    }
    // Puoi aggiungere altre domande qui se lo desideri
];

// 2. Variabili per Tenere Traccia dello Stato del Gioco
let score = 0; // Variabile per tenere traccia del punteggio
let currentQuestion = 0; // Indice della domanda corrente

// 3. Calcola il Punteggio Massimo
const maxScore = questions.length * 10; // Supponendo 10 punti per risposta corretta

// 4. Riferimenti agli Elementi HTML
const backgroundMusic = document.getElementById('background-music');
const startImage = document.getElementById('start-image');
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');

// 5. Funzione per Avviare il Gioco
function startGame() {
    // Avvia la musica di sottofondo
    backgroundMusic.play();

    // Nascondi l'immagine "Insert Coin to Play" e il testo
    startImage.style.display = 'none';
    const insertCoinText = document.querySelector('.insert-coin-text');
    if (insertCoinText) {
        insertCoinText.style.display = 'none';
    }

    // Mostra la barra di progressione
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'block';
    }

    // Reimposta il punteggio e la domanda corrente
    score = 0;
    currentQuestion = 0;

    // Mostra la prima domanda
    showQuestion();
}

// 6. Funzione per Mostrare la Domanda Corrente
function showQuestion() {
    const gameDiv = document.getElementById('game');
    const questionObj = questions[currentQuestion];

    // Costruisci il contenuto della domanda
    let html = `
        <img src="${questionObj.image}" alt="Image">
        <p>${questionObj.question}</p>
    `;

    // Aggiungi le opzioni di risposta
    questionObj.options.forEach((option, index) => {
        html += `
            <button class="button" onclick="selectOption(${index})">
                ${option.text}
            </button>
        `;
    });

    gameDiv.innerHTML = html;

    // Aggiorna la barra di progressione
    updateProgressBar();
}

// 7. Funzione per Gestire la Selezione delle Opzioni
function selectOption(index) {
    const questionObj = questions[currentQuestion];
    const option = questionObj.options[index];

    // Controlla se la risposta è corretta
    let feedback = '';
    if (option.correct) {
        score += 10;
        feedback = `<p class="feedback correct">Correct! Score: ${score}</p>`;
        if (correctSound) correctSound.play();
    } else {
        feedback = `<p class="feedback incorrect">Incorrect. Score: ${score}</p>`;
        if (incorrectSound) incorrectSound.play();
    }

    // Mostra il feedback
    const gameDiv = document.getElementById('game');
    gameDiv.innerHTML += feedback;

    // Disabilita i pulsanti per prevenire risposte multiple
    const buttons = document.querySelectorAll('#game .button');
    buttons.forEach(button => button.disabled = true);

    // Passa alla domanda successiva dopo un breve ritardo
    currentQuestion++;

    setTimeout(() => {
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 2000); // Attende 2 secondi
}

// 8. Funzione per Aggiornare la Barra di Progressione
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const totalQuestions = questions.length;
    const progressPercentage = ((currentQuestion) / totalQuestions) * 100;
    progressBar.style.width = progressPercentage + '%';
}

// 10. Funzione per Mostrare il Risultato Finale
function showResults() {
    const gameDiv = document.getElementById('game');
    let message = '';
    let percentage = Math.round((score / maxScore) * 100);

    if (percentage === 100) {
        message = `<h2>${percentage}% - You have achieved stable life, and your planet will flourish!</h2>`;
    } else if (percentage >= 95) {
        message = `<h2>${percentage}% - You have obtained life, but be careful, it could go extinct.</h2>`;
    } else if (percentage >= 90) {
        message = `<h2>${percentage}% - Life is on the verge of forming, but one false step and you could lose it.</h2>`;
    } else if (percentage >= 85) {
        message = `<h2>${percentage}% - Life is nearly formed, but the planet is not yet stable.</h2>`;
    } else if (percentage >= 80) {
        message = `<h2>${percentage}% - You have essential ingredients, something like a cell, but more is needed for life.</h2>`;
    } else if (percentage >= 75) {
        message = `<h2>${percentage}% - The planet is shaping up, water is warm, rocks are ready, but key components are missing.</h2>`;
    } else if (percentage >= 70) {
        message = `<h2>${percentage}% - You have water, but the atmosphere is unstable. Maybe was the magnetic field?</h2>`;
    } else if (percentage >= 65) {
        message = `<h2>${percentage}% - Basic elements are present, same for an atmosphere and an oceans, but conditions are harsh.</h2>`;
    } else if (percentage >= 60) {
        message = `<h2>${percentage}% - Volcanic activity dominates; life is unlikely.</h2>`;
    } else if (percentage >= 55) {
        message = `<h2>${percentage}% - The planet is too cold; life cannot thrive.</h2>`;
    } else if (percentage >= 50) {
        message = `<h2>${percentage}% - You were halfway there, but something went wrong.</h2>`;
    } else if (percentage >= 45) {
        message = `<h2>${percentage}% - The atmosphere is toxic, unsuitable for life.</h2>`;
    } else if (percentage >= 40) {
        message = `<h2>${percentage}% - Severe storms prevent the development of life.</h2>`;
    } else if (percentage >= 35) {
        message = `<h2>${percentage}% - Radiation levels are too high; life cannot form.</h2>`;
    } else if (percentage >= 30) {
        message = `<h2>${percentage}% - The planet lacks essential chemicals for life.</h2>`;
    } else if (percentage >= 25) {
        message = `<h2>${percentage}% - The planet is barren and lifeless.</h2>`;
    } else if (percentage >= 20) {
        message = `<h2>${percentage}% - You have a planet, but it's missing almost everything.</h2>`;
    } else if (percentage >= 15) {
        message = `<h2>${percentage}% - Just a rocky mass floating in space.</h2>`;
    } else if (percentage >= 10) {
        message = `<h2>${percentage}% - A lifeless rock with no atmosphere or water.</h2>`;
    } else if (percentage >= 5) {
        message = `<h2>${percentage}% - A failed attempt at planet formation.</h2>`;
    } else {
        message = `<h2>${percentage}% - I'm sorry, but maybe you need to start over.</h2>`;
    }

    gameDiv.innerHTML = `
        ${message}
        <p>Final Score: ${score} out of ${maxScore}</p>
        <button class="button" onclick="restartGame()">Play Again</button>
    `;

    // Nascondi la barra di progressione
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }

    // Ferma la musica di sottofondo
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

// 11. Funzione per Riavviare il Gioco
function restartGame() {
    score = 0;
    currentQuestion = 0;

    // Mostra l'immagine "Insert Coin to Play" e il testo
    const startImage = document.getElementById('start-image');
    if (startImage) {
        startImage.style.display = 'block';
    }

    const insertCoinText = document.querySelector('.insert-coin-text');
    if (insertCoinText) {
        insertCoinText.style.display = 'block';
    }

    // Reimposta la barra di progressione
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = '0%';
    }

    // Nascondi il contenitore della barra di progressione
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }

    // Pulisci il contenuto del gioco
    const gameDiv = document.getElementById('game');
    if (gameDiv) {
        gameDiv.innerHTML = '';
    }

    // Ferma e resetta la musica di sottofondo
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }
}
