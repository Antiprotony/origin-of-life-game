// script.js

// 1. Domande del Gioco
const questions = [
    {
        question: "Sei un giovane pianeta che si sta formando nella zona abitabile. Cosa fai per primo?",
        options: [
            { text: "Creare un oceano", correct: false },
            { text: "Creare un'atmosfera", correct: true }
        ],
        image: "images/planet.png"
    },
    // ... [Altre domande qui]
    {
        question: "Altri pianeti che ho incontrato parlano della loro vita e di LUCA. Ma chi è LUCA?",
        options: [
            { text: "The creator of this wonderful game!", correct: false }, // Trigger dell'Easter Egg
            { text: "The Last Universal Common Ancestor!", correct: true }
        ],
        image: "images/luca.png"
    }
    // Assicurati che tutte le domande siano uniche
];

// 2. Variabili per lo stato del gioco
let score = 0; // Punteggio
let currentQuestionIndex = 0; // Indice della domanda corrente

// 3. Riferimenti agli elementi HTML
const backgroundMusic = document.getElementById('background-music');
const startButton = document.getElementById('start-button');
const gameDiv = document.getElementById('game');

// 4. Funzione per avviare il gioco
function startGame() {
    // Avvia la musica di sottofondo
    backgroundMusic.play();

    // Nascondi il pulsante Start Game
    startButton.style.display = 'none';

    // Nascondi l'immagine "Insert Coin"
    const insertCoin = document.getElementById('insert-coin');
    if (insertCoin) {
        insertCoin.style.display = 'none';
    }

    // Mostra la barra di progressione
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'block';
    }

    // Reimposta punteggio e indice della domanda
    score = 0;
    currentQuestionIndex = 0;

    // Mostra la prima domanda
    showQuestion();
}

// 5. Funzione per mostrare la domanda corrente
function showQuestion() {
    const questionObj = questions[currentQuestionIndex];

    // Costruisci il contenuto della domanda
    let html = `
        <img src="${questionObj.image}" alt="Image">
        <p>${questionObj.question}</p>
    `;

    // Aggiungi le opzioni di risposta
    questionObj.options.forEach((option, index) => {
        // Aggiungi un attributo data per identificare l'Easter Egg
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

    // Aggiorna la barra di progressione
    updateProgressBar();
}

// 6. Funzione per gestire la selezione di un'opzione
function selectOption(index) {
    const questionObj = questions[currentQuestionIndex];
    const option = questionObj.options[index];
    const selectedButton = gameDiv.querySelectorAll('.button')[index];
    const isEasterEgg = selectedButton.getAttribute('data-easter-egg') === 'true';

    if (isEasterEgg) {
        // Mostra il modal dell'Easter Egg
        showEasterEgg();
    }

    // Verifica se la risposta è corretta
    if (option.correct) {
        score += 10;
        appendFeedback("Corretto! Punteggio: " + score, true);
    } else {
        appendFeedback("Errato. Punteggio: " + score, false);
    }

    // Disabilita tutti i pulsanti per evitare risposte multiple
    const buttons = gameDiv.querySelectorAll('.button');
    buttons.forEach(button => button.disabled = true);

    // Passa alla domanda successiva dopo un breve ritardo
    currentQuestionIndex++;
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 2000); // Ritardo di 2 secondi
}

// 7. Funzione per aggiungere il feedback
function appendFeedback(message, isCorrect) {
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    gameDiv.innerHTML += `
        <p class="feedback ${feedbackClass}">${message}</p>
    `;
}

// 8. Funzione per aggiornare la barra di progressione
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = progressPercentage + '%';
}

// 9. Funzione per mostrare il risultato finale
function showResults() {
    let message = '';
    let percentage = (score / (questions.length * 10)) * 100;

    if (percentage === 100) {
        message = `<h2>${percentage}% - Hai raggiunto una vita stabile, e il tuo pianeta fiorirà!</h2>`;
    } else if (percentage >= 95) {
        message = `<h2>${percentage}% - Hai ottenuto la vita, ma fai attenzione, potrebbe estinguersi.</h2>`;
    } else if (percentage >= 90) {
        message = `<h2>${percentage}% - La vita è sul punto di formarsi, ma un passo falso e potresti perderla.</h2>`;
    } else if (percentage >= 85) {
        message = `<h2>${percentage}% - La vita è quasi formata, ma il pianeta non è ancora stabile.</h2>`;
    } else if (percentage >= 80) {
        message = `<h2>${percentage}% - Hai ingredienti essenziali, qualcosa come una cellula, ma serve di più per la vita.</h2>`;
    } else if (percentage >= 75) {
        message = `<h2>${percentage}% - Il pianeta si sta formando, l'acqua è calda, le rocce sono pronte, ma mancano componenti chiave.</h2>`;
    } else if (percentage >= 70) {
        message = `<h2>${percentage}% - Hai acqua, ma l'atmosfera è instabile. Forse è stato il campo magnetico?</h2>`;
    } else if (percentage >= 65) {
        message = `<h2>${percentage}% - Gli elementi base sono presenti, lo stesso per un'atmosfera e oceani, ma le condizioni sono dure.</h2>`;
    } else if (percentage >= 60) {
        message = `<h2>${percentage}% - L'attività vulcanica domina; la vita è improbabile.</h2>`;
    } else if (percentage >= 55) {
        message = `<h2>${percentage}% - Il pianeta è troppo freddo; la vita non può prosperare.</h2>`;
    } else if (percentage >= 50) {
        message = `<h2>${percentage}% - Sei a metà strada, ma qualcosa è andato storto.</h2>`;
    } else if (percentage >= 45) {
        message = `<h2>${percentage}% - L'atmosfera è tossica, inadatta alla vita.</h2>`;
    } else if (percentage >= 40) {
        message = `<h2>${percentage}% - Tempeste severe impediscono lo sviluppo della vita.</h2>`;
    } else if (percentage >= 35) {
        message = `<h2>${percentage}% - I livelli di radiazioni sono troppo alti; la vita non può formarsi.</h2>`;
    } else if (percentage >= 30) {
        message = `<h2>${percentage}% - Il pianeta manca di sostanze chimiche essenziali per la vita.</h2>`;
    } else if (percentage >= 25) {
        message = `<h2>${percentage}% - Il pianeta è arido e privo di vita.</h2>`;
    } else if (percentage >= 20) {
        message = `<h2>${percentage}% - Hai un pianeta, ma manca quasi tutto.</h2>`;
    } else if (percentage >= 15) {
        message = `<h2>${percentage}% - Solo una massa rocciosa che fluttua nello spazio.</h2>`;
    } else if (percentage >= 10) {
        message = `<h2>${percentage}% - Una roccia senza vita con nessuna atmosfera o acqua.</h2>`;
    } else if (percentage >= 5) {
        message = `<h2>${percentage}% - Un tentativo fallito di formazione planetaria.</h2>`;
    } else {
        message = `<h2>${percentage}% - Mi dispiace, forse devi ricominciare.</h2>`;
    }

    gameDiv.innerHTML = `
        ${message}
        <p>Final Score: ${score} su ${questions.length * 10}</p>
        <button class="button" onclick="restartGame()">Play Again</button>
    `;

    // Nascondi la barra di progressione
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }

    // Ferma la musica di sottofondo
    backgroundMusic.pause();
}

// 10. Funzione per riavviare il gioco
function restartGame() {
    score = 0;
    currentQuestionIndex = 0;

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

    // Mostra l'immagine "Insert Coin"
    const insertCoin = document.getElementById('insert-coin');
    if (insertCoin) {
        insertCoin.style.display = 'block';
    }

    // Pulisci il contenuto del gioco
    if (gameDiv) {
        gameDiv.innerHTML = '';
    }

    // Ferma e resetta la musica di sottofondo
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }
}

// 11. Funzione per mostrare il modal dell'Easter Egg
function showEasterEgg() {
    const modal = document.getElementById('easterEggModal');
    modal.style.display = 'flex'; // Usa flex per centrare il contenuto
    document.body.classList.add('modal-open'); // Previene lo scroll del background
}

// 12. Funzione per chiudere il modal
function closeModal() {
    const modal = document.getElementById('easterEggModal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Ripristina lo scroll del background
}

// 13. Event Listener per chiudere il modal
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);

    // Chiudi il modal cliccando fuori dal contenuto
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('easterEggModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});
