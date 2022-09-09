export class HangmanGame {

    #mistakes = 0;
    #keyPressed = [];
    #letters = [];

    constructor(){ }

    get Mistakes() {
        return this.#mistakes
    }

    setMistakes( value ) {
        this.#mistakes = value
    }

    get Letters() {
        return this.#letters;
    }

    setLetters( word ) {
        this.#letters = Array.from( word );
    }

    get keyPressed() {
        return this.#keyPressed;
    }

    setKeyPressed( keyPressed ) {
        this.#keyPressed.push( keyPressed );
    }

    resetAll(){
        this.#mistakes = 0;
        this.#letters = [];
        this.#keyPressed = [];
    }
    
}