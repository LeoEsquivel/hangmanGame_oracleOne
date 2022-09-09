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
        this.#keyPressed.push( keyPressed.toUpperCase() );
    }

    commpareLetter( keyPressed ) {
        
        keyPressed = keyPressed.toUpperCase();
        if( this.#keyPressed.includes( keyPressed )){
            return false
        }

        this.setKeyPressed( keyPressed );
        if( !this.#letters.includes( keyPressed ) ) {
            this.#mistakes++;
            return
        }
        
        let indexs = [];
        this.#letters.forEach( ( letter, index ) => {
            if( letter === keyPressed ) { indexs.push( index ); }
        } );
        return indexs
    }



    resetAll(){
        this.#mistakes = 0;
        this.#letters = [];
        this.#keyPressed = [];
    }
    
}