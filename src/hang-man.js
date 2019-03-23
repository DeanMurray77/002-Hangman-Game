'use strict'

class HangManRound {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = guesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    get statusMessage() {
        if(this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`;
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`;
        } else {
            return 'Great work! You guessed the word'
        }
    }
    calculateStatus() {
        let tempGuessedLetters = this.guessedLetters.slice(0);
        tempGuessedLetters.push(' ');
    
        // Determine if the word has been completely guessed.
        let unguessedLetters = this.word.filter(function (letter) {
            return !tempGuessedLetters.includes(letter);
        })

        if(this.remainingGuesses <= 0) {
            this.status = 'failed';
        } else if(unguessedLetters.length === 0) {
                this.status = 'finished';``
        } else {
    
        }
    }
    get puzzle() {
        let clue = '';
        this.word.forEach(element => {
            if(this.guessedLetters.includes(element)) {
                clue += element;
            } else if(element === ' ') {
                clue += " ";
            } else {
                clue += '*';
            }
        });

        return clue;
    }
    guess(guess) {
        if(this.status !== 'playing') {
            return
        }
    
        const lowerCaseGuess = guess.toLowerCase();
        const newGuess = !this.guessedLetters.includes(lowerCaseGuess);
        const badGuess = !this.word.includes(lowerCaseGuess);
    
        if(newGuess) {
            this.guessedLetters.push(lowerCaseGuess);
            if(badGuess) {
                this.remainingGuesses -= 1;
            }
        }
    
        this.calculateStatus();
    }
}

export { HangManRound as default };