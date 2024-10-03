// script.js

// 1. Game Questions
const questions = [
    {
        question: "You are a young planet forming. What do you do first?",
        options: [
            { text: "Form the oceans", correct: false },
            { text: "Create an atmosphere", correct: true }
        ],
        image: "images/planet.png"
    },
    {
        question: "Which chemical elements are mostly required on your surface and oceans?",
        options: [
            { text: "Au, Pt, Ag, Ar, Kr", correct: false },
            { text: "C, N, O, P, S, H", correct: true }
        ],
        image: "images/elements.png"
    },
    {
        question: "Which is the main energy source in the origin of life?",
        options: [
            { text: "Geothermal gradient", correct: true },
            { text: "Solar energy", correct: false }
        ],
        image: "images/energy.png"
    },
    {
        question: "Which molecules are fundamental for a primordial cell?",
        options: [
            { text: "Vitamins and inorganic compounds", correct: false },
            { text: "Proteins and nucleic acids", correct: true }
        ],
        image: "images/molecole.png"
    },
    {
        question: "Which conditions favor the formation of the prebiotic molecules?",
        options: [
            { text: "Warm water, moderate UV radiation, presence of biometals", correct: true },
            { text: "Cold water, high UV radiation, absence of biometals", correct: false }
        ],
        image: "images/fumarole.png"
    },
    {
        question: "Now we have macromolecules, how can we carry information?",
        options: [
            { text: "Thanks to the surrounding rocks", correct: false },
            { text: "Through DNA/RNA combination", correct: true }
        ],
        image: "images/dna.png"
    },
    {
        question: "What was the primordial soup hypothesis proposed by Oparin and Haldane?",
        options: [
            { text: "Life originated from outer space", correct: false },
            { text: "Life began in a warm pond with a mix of chemicals", correct: true }
        ],
        image: "images/primordial_soup.png"
    },
    {
        question: "Which experiment demonstrated the synthesis of organic compounds from inorganic precursors?",
        options: [
            { text: "Gregor Mendel's pea plant experiments", correct: false },
            { text: "Miller-Urey experiment", correct: true }
        ],
        image: "images/miller_urey.png"
    },
    {
        question: "What are the building blocks of nucleic acids crucial for life?",
        options: [
            { text: "Nucleotides", correct: true },
            { text: "Lipids", correct: false }
        ],
        image: "images/nucleotides.png"
    },
    {
        question: "Which molecule is believed to have been the first genetic material?",
        options: [
            { text: "DNA", correct: false },
            { text: "RNA", correct: true }
        ],
        image: "images/rna.png"
    },
    {
        question: "What theory suggests that life may have begun at hydrothermal vents in the ocean floor?",
        options: [
            { text: "Panspermia theory", correct: false },
            { text: "Deep-sea vent theory", correct: true }
        ],
        image: "images/hydrothermal_vent.png"
    },
    {
        question: "Which process describes the formation of complex molecules from simpler ones in early Earth's conditions?",
        options: [
            { text: "Photosynthesis", correct: false },
            { text: "Abiogenesis", correct: true }
        ],
        image: "images/abiogenesis.png"
    },
    {
        question: "What term describes the hypothetical RNA-based life forms that may have preceded cellular life?",
        options: [
            { text: "Gaia hypothesis", correct: false },
            { text: "RNA world hypothesis", correct: true }
        ],
        image: "images/rna_world.png"
    },
    {
        question: "Which type of chemical bond is essential for the formation of complex organic molecules?",
        options: [
            { text: "Covalent bonds", correct: true },
            { text: "Ionic bonds", correct: false }
        ],
        image: "images/covalent_bond.png"
    },
    {
        question: "What is the significance of liposomes in the origin of life studies?",
        options: [
            { text: "They are evidence of extraterrestrial life", correct: false },
            { text: "They model early cell membranes", correct: true }
        ],
        image: "images/liposome.png"
    },
    {
        question: "Which theory suggests that life was brought to Earth from elsewhere in the universe?",
        options: [
            { text: "Panspermia theory", correct: true },
            { text: "Endosymbiotic theory", correct: false }
        ],
        image: "images/panspermia.png"
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
    // Start the background music
    backgroundMusic.play();

    // Hide the Start Game button
    startButton.style.display = 'none';

    // Show the first question
    showQuestion();
}

// 6. Function to Show the Current Question
function showQuestion() {
    const gameDiv = document.getElementById('game');
    const questionObj = questions[currentQuestion];

    // Build the question content
    let html = `
        <img src="${questionObj.image}" alt="Image">
        <p>${questionObj.question}</p>
    `;

    // Add answer options
    questionObj.options.forEach((option, index) => {
        html += `
            <button class="button" onclick="selectOption(${index})">
                ${option.text}
            </button>
        `;
    });

    gameDiv.innerHTML = html;
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

    // Disable buttons to prevent multiple answers
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.disabled = true);

    // Move to the next question after a short delay
    currentQuestion++;

    setTimeout(() => {
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 2000); // Wait 2 seconds
}

// 8. Function to Show the Final Results
function showResults() {
    const gameDiv = document.getElementById('game');
    let message = '';
    let percentage = (score / maxScore) * 100;

    if (score === maxScore) {
        message = `<h2>Congratulations, you have created life!</h2>`;
    } else if (percentage >= 80) {
        message = `<h2>Great job! You're almost there.</h2>`;
    } else {
        message = `<h2>Unfortunately, you did not create life. Try again!</h2>`;
    }

    gameDiv.innerHTML = `
        ${message}
        <p>Final Score: ${score} out of ${maxScore}</p>
        <button class="button" onclick="restartGame()">Play Again</button>
    `;
}

// 9. Function to Restart the Game
function restartGame() {
    score = 0;
    currentQuestion = 0;
    startButton.style.display = 'inline-block';
    document.getElementById('game').innerHTML = '';
}

// Note: Mute Music functionality has been removed as per your request.
