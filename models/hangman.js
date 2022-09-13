export class HangmanGame {

    #mistakes = 0;
    #hits2win = 0;
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
        this.#hits2win = this.#letters.length;
    }

    get keyPressed() {
        return this.#keyPressed;
    }

    setKeyPressed( keyPressed ) {
        this.#keyPressed.push( keyPressed.toUpperCase() );
    }

    commpareLetter( keyPressed ) {
        
        keyPressed = keyPressed.toUpperCase();
        //Si la letra ya a sido presionada
        if( this.#keyPressed.includes( keyPressed )){
            return
        }

        
        this.setKeyPressed( keyPressed );
        //Si la letra no esta en la palabra
        if( !this.#letters.includes( keyPressed ) ) {
            this.#mistakes++;
            return
        }
        
        let indices = [];
        this.#letters.forEach( ( letter, index ) => {
            if( letter === keyPressed ) { 
                indices.push( index ); 
                this.#hits2win--;
            }
        } );

        if( this.#hits2win === 0 ) {
            return {
                win: true,
                indices
            }
        }

        return {
            win: false,
            indices
        }
    }

    resetAll(){
        this.#hits2win = 0;
        this.#mistakes = 0;
        this.#letters = [];
        this.#keyPressed = [];
    }
    
}