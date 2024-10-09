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
    {
        question: "Now the source of energy! Which is the main energy source that you need in order to originate life?",
        options: [
            { text: "Geothermal gradient", correct: true },
            { text: "Solar energy", correct: false }
        ],
        image: "images/energy.png"
    },
    {
        question: "Now you have a stable atmosphere, geothermal gradients and so on. What do you need next?",
        options: [
            { text: "Solid rocks", correct: false },
            { text: "Porous rocks", correct: true }
        ],
        image: "images/molecole.png"
    },
    {
        question: "The main ingredients are ready! Which conditions are probably the best for the formation of prebiotic molecules?",
        options: [
            { text: "Warm water, moderate UV radiation", correct: true },
            { text: "Cold water, high UV radiation", correct: false }
        ],
        image: "images/fumarole.png"
    },
    {
        question: "The conditions are perfect (maybe)! Now we need the first molecule able to replicate with a degree of information. Which is..",
        options: [
            { text: "Protein", correct: false },
            { text: "DNA/RNA", correct: true }
        ],
        image: "images/dna.png"
    },
    {
        question: "Molecules, energy, warm waters. The primordial soup! Now macromoleculs are inside pores of rocks, we need something more biotic to confine them",
        options: [
            { text: "We produce vitamins", correct: false },
            { text: "We produce lipids", correct: true }
        ],
        image: "images/primordial_soup.png"
    },
    {
        question: "I need something more..",
        options: [
            { text: "U, Th, Xe, Ar, Sb", correct: false },
            { text: "Fe, Mo, Cu, Ni, W", correct: true }
        ],
        image: "images/miller_urey.png"
    },
    {
        question: "I forgot something probably fundamental!",
        options: [
            { text: "Strong magnetic field", correct: true },
            { text: "Weak magnetic field", correct: false }
        ],
        image: "images/nucleotides.png"
    },
    {
        question: "What can help me to keep me warm",
        options: [
            { text: "Presence of deeply shadowed cavities", correct: false },
            { text: "Albedo effect", correct: true }
        ],
        image: "images/rna.png"
    },
    {
        question: "On the bottom of my oceans something is mixing chemicals with the water! What is it?",
        options: [
            { text: "A big magmatic cauldron!", correct: false },
            { text: "Oh! An Hydrothermal Vent!", correct: true }
        ],
        image: "images/hydrothermal_vent.png"
    },
    {
        question: "In my primordial phase, Which gasses I need to host life?",
        options: [
            { text: "Oxygen, and Noble Gasses", correct: false },
            { text: "Methane, Ammonia and Hydrogen Sulfide", correct: true }
        ],
        image: "images/abiogenesis.png"
    },
    {
        question: "I think that I'm almost ready for life. Which life can I choose first?",
        options: [
            { text: "Eukaryotes", correct: false },
            { text: "Prokaryotes", correct: true }
        ],
        image: "images/rna_world.png"
    },
    {
        question: "Which type of chemical bond I required for the formation of complex organic molecules?",
        options: [
            { text: "Covalent bond", correct: true },
            { text: "Ionic bond", correct: false }
        ],
        image: "images/covalent_bond.png"
    },
    {
        question: "Some of you told me that I really need lipids. But Why?!",
        options: [
            { text: "They are able to produce essentials molecules for living organisms", correct: false },
            { text: "They model early cell membranes", correct: true }
        ],
        image: "images/liposome.png"
    },
    {
        question: "I really would like to have life on my surface! But sometime I miss of chemicals. Maybe my celestial friends can help me. But, Who?",
        options: [
            { text: "Comets and asteroids", correct: true },
            { text: "Moons and planets", correct: false }
        ],
        image: "images/panspermia.png"
    },
     {
        question: "I've heard that laboratories can create prebiotic molecules. A couple of scientists did this. Who are they?",
        options: [
            { text: "Miller and Urey", correct: true },
            { text: "Born and Oppenheimer", correct: false }
        ],
        image: "images/miller.png"
    },
    {
        question: "A planet friend of mine has already originated life. Seen from above, it looks purple. That's probably due to the earliest photosynthetic life on it. But why purple?",
        options: [
            { text: "Presence of porphyrin-based chlorophyll", correct: false },
            { text: "Presence of retinal-like molecules", correct: true }
        ],
        image: "images/purple.png"
    },
    {
        question: "I think we are almost ready, but I would like to use another source of energy that can provide the necessary energy for forming complex organic molecules.",
        options: [
            { text: "Lightnings", correct: true },
            { text: "Nuclear Energy", correct: false }
        ],
        image: "images/fulmini.png"
    },
    {
        question: "Other planets I've met are talking about their life and LUCA. But, who is LUCA?",
        options: [
            { text: "The creator of this wonderful game!", correct: true },
            { text: "The Last Universal Common Ancestor!", correct: true }
        ],
        image: "images/luca.png"
    }
    // You can add more questions here if you like
];

// 2. Variables to Keep Track of Game State
let score = 0; // Variable to track the score
let currentQuestion = 0; // Index of the current question

// 3. Calculate the Maximum Score
const maxScore = questions.length * 10; // Assuming 10 points per correct answer

// 4. Get References to HTML Elements
const backgroundMusic = document.getElementById('background-music');
const startButton = document.getElementById('start-button');

// 5. Function to Start the Game
function startGame() {
    // Avvia la musica di sottofondo
    backgroundMusic.play();

    // Nascondi il pulsante Start Game
    startButton.style.display = 'none';

    // Nascondi l'immagine "Insert Coin to Play"
    const insertCoin = document.getElementById('insert-coin');
    if (insertCoin) {
        insertCoin.style.display = 'none';
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
    } else {
        feedback = `<p class="feedback incorrect">Incorrect. Score: ${score}</p>`;
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
    let percentage = (score / maxScore) * 100;

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
}

// 11. Function to Restart the Game
function restartGame() {
    score = 0;
    currentQuestion = 0;

    // Mostra il pulsante Start Game
    startButton.style.display = 'inline-block';

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

    // Mostra l'immagine "Insert Coin to Play"
    const insertCoin = document.getElementById('insert-coin');
    if (insertCoin) {
        insertCoin.style.display = 'block';
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

// 12. Function to Show the Easter Egg Modal
function showEasterEgg() {
    const modal = document.getElementById('easterEggModal');
    modal.style.display = 'block';
}

// 13. Function to Close the Modal
function closeModal() {
    const modal = document.getElementById('easterEggModal');
    modal.style.display = 'none';
}

// 14. Event Listeners for Closing the Modal
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('easterEggModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
