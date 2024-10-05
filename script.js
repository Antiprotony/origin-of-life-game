// script.js

// 1. Game Questions
const questions = [
    // ... (le tue domande esistenti)
];

// 2. Variables to Keep Track of Game State
let score = 0; // Variable to track the score
let currentQuestion = 0; // Index of the current question

// 3. Calculate the Maximum Score
const maxScore = questions.length * 10; // Assuming 10 points per correct answer

// 4. Get References to HTML Elements
const backgroundMusic = document.getElementById('background-music');
const startImage = document.getElementById('start-image');
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');

// 5. Function to Start the Game
function startGame() {
    // Avvia la musica di sottofondo
    backgroundMusic.play();

    // Nascondi l'immagine "Insert Coin to Play"
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

    // Aggiorna il punteggio visualizzato
    updateScoreDisplay();

    // Mostra la prima domanda
    showQuestion();
}

// 6. Function to Show the Current Question
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

// 7. Function to Handle Option Selection
function selectOption(index) {
    const questionObj = questions[currentQuestion];
    const option = questionObj.options[index];

    // Check if the answer is correct
    let feedback = '';
    if (option.correct) {
        score += 10;
        feedback = `<p class="feedback correct">Correct! Score: ${score}</p>`;
        if (correctSound) correctSound.play();
    } else {
        feedback = `<p class="feedback incorrect">Incorrect. Score: ${score}</p>`;
        if (incorrectSound) incorrectSound.play();
    }

    // Display feedback
    const gameDiv = document.getElementById('game');
    gameDiv.innerHTML += feedback;

    // Disabilita i pulsanti per evitare risposte multiple
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
    }, 2000); // Attendi 2 secondi
}

// 8. Function to Update the Progress Bar
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const totalQuestions = questions.length;
    const progressPercentage = ((currentQuestion) / totalQuestions) * 100;
    progressBar.style.width = progressPercentage + '%';
}

// 9. Function to Update the Score Display
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = 'Score: ' + score;
    }
}

// 10. Function to Show the Final Result
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

// 11. Function to Restart the Game
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
