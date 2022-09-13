import { Words } from './Words.js'

const btnAgregar = document.getElementById('add');
const words = new Words();

btnAgregar.onclick = () => {
    let newWord = document.getElementById('word').value;
    addWord( newWord );
    window.location.href = '../index.html'
}

const addWord = ( newWord ) => {
    words.setWords( newWord );
}