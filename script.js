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
        question: "The conditions are perfect (maybe)! Now we need the first molecule able to replicate with a degree of information. Which is...",
        options: [
            { text: "Protein", correct: false },
            { text: "DNA/RNA", correct: true }
        ],
        image: "images/dna.png"
    },
    {
        question: "Molecules, energy, warm waters. The primordial soup! Now macromolecules are inside pores of rocks, we need something more biotic to confine them.",
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
        question: "What can help me to keep me warm?",
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
            { text: "Oh! A Hydrothermal Vent!", correct: true }
        ],
        image: "images/hydrothermal_vent.png"
    },
    {
        question: "In my primordial phase, which gases do I need to host life?",
        options: [
            { text: "Oxygen and Noble Gases", correct: false },
            { text: "Methane, Ammonia, and Hydrogen Sulfide", correct: true }
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
        question: "Which type of chemical bond do I require for the formation of complex organic molecules?",
        options: [
            { text: "Covalent bond", correct: true },
            { text: "Ionic bond", correct: false }
        ],
        image: "images/covalent_bond.png"
    },
    {
        question: "Some of you told me that I really need lipids. But why?!",
        options: [
            { text: "They are able to produce essential molecules for living organisms", correct: false },
            { text: "They model early cell membranes", correct: true }
        ],
        image: "images/liposome.png"
    },
    {
        question: "I really would like to have life on my surface! But sometimes I miss chemicals. Maybe my celestial friends can help me. But, who?",
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
            { text: "Born and Oppenheimer", correct: false } // Easter egg trigger
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
            { text: "Lightning", correct: true },
            { text: "Nuclear Energy", correct: false }
        ],
        image: "images/fulmini.png"
    },
    {
        question: "Other planets I've met are talking about their life and LUCA. But, who is LUCA?",
        options: [
            { text: "The creator of this wonderful game!", correct: true }, // Easter egg trigger
            { text: "The Last Universal Common Ancestor!", correct: true }
        ],
        image: "images/luca.png"
    }
    // Puoi aggiungere altre domande qui se lo desideri
];

// 2. Variables to Keep Track of Game State
let score = 0; // Variable to track the score
let currentQuestionIndex = 0; // Index of the current question

// 3. Get References to HTML Elements
const backgroundMusic = document.getElementById('background-music');
const startButton = document.getElementById('start-button');
const gameDiv = document.getElementById('game');

// 4. Function to Start the Game
function startGame() {
    // Play background music
    backgroundMusic.play();

    // Hide the Start Game button
    startButton.style.display = 'none';

    // Hide the "Insert Coin" image
    const insertCoin = document.getElementById('insert-coin');
    if (insertCoin) {
        insertCoin.style.display = 'none';
    }

    // Show the progress bar
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'block';
    }

    // Reset score and current question
    score = 0;
    currentQuestionIndex = 0;

    // Show the first question
    showQuestion();
}

// 5. Function to Show the Current Question
function showQuestion() {
    const questionObj = questions[currentQuestionIndex];

    // Build the question content
    let html = `
        <img src="${questionObj.image}" alt="Image">
        <p>${questionObj.question}</p>
    `;

    // Add answer options
    questionObj.options.forEach((option, index) => {
        // Add data attribute to identify the Easter egg trigger
        let dataAttribute = '';
        if (option.text === "The creator of this wonderful game!") {
            dataAttribute = 'data-easter-egg="true"';
        }
        html += `
            <button class="button" onclick="selectOption(${index})" ${dataAttribute}>
                ${option.text}
            </button>
        `;
    });

    gameDiv.innerHTML = html;

    // Update the progress bar
    updateProgressBar();
}

// 6. Function to Handle Option Selection
function selectOption(index) {
    const questionObj = questions[currentQuestionIndex];
    const option = questionObj.options[index];
    const selectedButton = gameDiv.querySelectorAll('.button')[index];
    const isEasterEgg = selectedButton.getAttribute('data-easter-egg') === 'true';

    if (isEasterEgg) {
        // Show the Easter Egg modal
        showEasterEgg();
    }

    // Check if the answer is correct
    if (option.correct) {
        score += 10;
        appendFeedback("Correct! Score: " + score, true);
    } else {
        appendFeedback("Incorrect. Score: " + score, false);
    }

    // Disable all buttons to prevent multiple answers
    const buttons = gameDiv.querySelectorAll('.button');
    buttons.forEach(button => button.disabled = true);

    // Move to the next question after a short delay
    currentQuestionIndex++;
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 2000); // 2-second delay
}

// 7. Function to Append Feedback
function appendFeedback(message, isCorrect) {
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    gameDiv.innerHTML += `
        <p class="feedback ${feedbackClass}">${message}</p>
    `;
}

// 8. Function to Update the Progress Bar
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = progressPercentage + '%';
}

// 9. Function to Show the Final Result
function showResults() {
    let message = '';
    let percentage = (score / (questions.length * 10)) * 100;

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
        message = `<h2>${percentage}% - You have water, but the atmosphere is unstable. Maybe it was the magnetic field?</h2>`;
    } else if (percentage >= 65) {
        message = `<h2>${percentage}% - Basic elements are present, same for an atmosphere and oceans, but conditions are harsh.</h2>`;
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
        <p>Final Score: ${score} out of ${questions.length * 10}</p>
        <button class="button" onclick="restartGame()">Play Again</button>
    `;

    // Hide the progress bar
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }

    // Stop the background music
    backgroundMusic.pause();
}

// 10. Function to Restart the Game
function restartGame() {
    score = 0;
    currentQuestionIndex = 0;

    // Show the Start Game button
    startButton.style.display = 'inline-block';

    // Reset the progress bar
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = '0%';
    }

    // Hide the progress bar container
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }

    // Show the "Insert Coin" image
    const insertCoin = document.getElementById('insert-coin');
    if (insertCoin) {
        insertCoin.style.display = 'block';
    }

    // Clear the game content
    if (gameDiv) {
        gameDiv.innerHTML = '';
    }

    // Stop and reset the background music
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }
}

// 11. Function to Show the Easter Egg Modal
function showEasterEgg() {
    const modal = document.getElementById('easterEggModal');
    modal.style.display = 'flex'; // Usa flex per centrare il contenuto
    document.body.classList.add('modal-open'); // Previene lo scroll del background
}

// 12. Function to Close the Modal
function closeModal() {
    const modal = document.getElementById('easterEggModal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Ripristina lo scroll del background
}

// 13. Event Listeners for Closing the Modal
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('easterEggModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});
