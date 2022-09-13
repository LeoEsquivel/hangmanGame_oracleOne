import { DrawMan } from './drawMan.js';
import { HangmanGame } from '../models/hangman.js'
import { Words } from '../models/Words.js'

//HTML Elements
const wordContainer = document.getElementById('word');
const lettersContainer = document.getElementById('letter-container');
const btnNewGame = document.getElementById('btnNewGame');
const btnSurrender = document.getElementById('btnSurrender');
const canvas = document.getElementById('canvas');

//Objects 
const words = new Words();
const hangman = new HangmanGame();
const drawMan = new DrawMan(canvas);

let word = ''

btnNewGame.onclick = () => {
    cleanAll();
    word = words.getWord().toUpperCase();

    hangman.setLetters( word );
    showChoosenWord( word );
}

const getKeyPressed = (e) => {
    if( !word ) { return }
    let result = hangman.commpareLetter( e.key );

    if ( !result ) {
        drawMan.draw( hangman.Mistakes );
    } else {
        updateDashes( result, e.key );
    }
    updatePressedKey( e.key.toUpperCase() );
}

const updatePressedKey = ( keyPressed ) => {
    for( let i=0; i < lettersContainer.children.length; i++) {
        if ( lettersContainer.children[i].innerHTML === keyPressed ) { return }
    }
    lettersContainer.innerHTML += `<kbd>${keyPressed.toUpperCase()}</kbd>`;

}

const updateDashes = ( result, keyPressed ) => {
    let dashes = document.getElementsByClassName('dashes');
    const { win, indices } = result;

    indices.forEach( index => {
        dashes[index].innerHTML = keyPressed;
    } );
    
    if ( win ) {
        alert('Ganaste');
    }
}

const showChoosenWord = ( choosenWord ) => {
    let displayItem = choosenWord.replace(/./g, '<span class="dashes">_</span>');
    wordContainer.innerHTML = displayItem;
}

const cleanAll = () => {
    hangman.resetAll();
    drawMan.cleanCanvas();
    // const context = canvas.getContext('2d');
    // context.clearRect(0, 0, canvas.width, canvas.height);
    wordContainer.innerHTML = "";
    lettersContainer.innerHTML = "";
    word = '';
}

window.addEventListener('keydown', getKeyPressed)
