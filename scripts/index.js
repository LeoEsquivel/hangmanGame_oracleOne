import { Words } from './Words.js'

const wordContainer = document.getElementById('word');
const lettersContainer = document.getElementById('letter-container');
const btnNewGame = document.getElementById('btnNewGame');
const btnSurrender = document.getElementById('btnSurrender');
const canvas = document.getElementById('canvas');

const words = new Words();

let mistakes = 0;

btnNewGame.onclick = () => {
    cleanAll();
    let word = words.getWord().toUpperCase();
    showChoosenWord( word );
}

const showChoosenWord = ( choosenWord ) => {
    let displayItem = choosenWord.replace(/./g, '<span class="dashes">_</span>');
    wordContainer.innerHTML = displayItem;
}

const cleanAll = () => {
    wordContainer.innerHTML = "";
    lettersContainer.innerHTML = "";

}
