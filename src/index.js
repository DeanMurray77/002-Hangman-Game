import HangManRound from './hang-man';
import { getPuzzle } from './requests';

let gameRound;
const elWord = document.querySelector('#puzzle');
const elStatus = document.querySelector('#guesses-remaining');
const elGuessedSoFar = document.querySelector('#guesses-so-far');
const elResetButton = document.querySelector('#reset-game');

const startGame = async() => {
    const puzzle = await getPuzzle(4);
    gameRound = new HangManRound(puzzle, 7);
    displayGameboard();
}

startGame();

elResetButton.addEventListener('click', startGame);

window.addEventListener('keypress', function(event) {
    const letter = String.fromCharCode(event.charCode);
    gameRound.guess(letter);

    displayGameboard();
})

function displayGameboard() {
    elWord.innerHTML = '';    
    elStatus.textContent = gameRound.statusMessage;
    elGuessedSoFar.textContent = 'Your guesses so far: ' + gameRound.guessedLetters;

    gameRound.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        elWord.appendChild(letterEl);
    });
}