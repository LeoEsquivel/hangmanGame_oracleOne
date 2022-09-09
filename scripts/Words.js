export class Words {

    #words = [
        'Perro',
        'Gato',
        'Pajaro',
        'Tortuga'
    ]

    constructor() {}

    getWord() {
        return this.#words[ Math.floor( Math.random() * this.#words.length ) ];
    }

    setWords( word ) {
        if( !word ) {
            return 'No se ha ingresado una palabra.'
        }
        this.#words.push( word.toUppercase() );
    }

}