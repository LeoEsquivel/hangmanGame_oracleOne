import { HangmanGame } from './hangman.js'
import { Words } from './Words.js'

//HTML Elements
const wordContainer = document.getElementById('word');
const lettersContainer = document.getElementById('letter-container');
const btnNewGame = document.getElementById('btnNewGame');
const btnSurrender = document.getElementById('btnSurrender');
const canvas = document.getElementById('canvas');

//Objects 
const words = new Words();
const hangman = new HangmanGame();

let word = ''

btnNewGame.onclick = () => {
    cleanAll();
    word = words.getWord().toUpperCase();

    hangman.setLetters( word );
    showChoosenWord( word );
}

const getKeyPressed = (e) => {
    if( !word ) { return }
    hangman.commpareLetter( e.key );
}

const showChoosenWord = ( choosenWord ) => {
    let displayItem = choosenWord.replace(/./g, '<span class="dashes">_</span>');
    wordContainer.innerHTML = displayItem;
}

const cleanAll = () => {
    wordContainer.innerHTML = "";
    lettersContainer.innerHTML = "";
    word = '';
}

window.addEventListener('keydown', getKeyPressed)
