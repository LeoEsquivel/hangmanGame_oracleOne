export class DrawMan {

    #canvas
    #context;

    constructor( canvas ) {
        this.#canvas = canvas;
        this.#context = canvas.getContext('2d');

        this.#context.strokeStyle = '#000000';
        this.#context.lineWidth = 2;
        this.drawGarrow();
    }

    cleanCanvas() {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.drawGarrow();
    }

    drawGarrow() {
        this.#drawLine(10, 130, 130, 130);
        this.#drawLine(10, 10, 10, 131);
        this.#drawLine(10, 10, 70, 10);
        this.#drawLine(70, 10, 70, 20);
    }

    #drawLine( fromX, fromY, toX, toY ) {
        this.#context.moveTo(fromX, fromY);
        this.#context.lineTo(toX, toY);
        this.#context.stroke();
    }

    #drawHead() {
        this.#context.beginPath();
        this.#context.arc(70, 30, 10, 0, Math.PI * 2, true );
        this.#context.stroke();
    }

    #drawBody() {
        this.#drawLine(70, 40, 70, 80);
    }

    #drawLeftArm() {
        this.#drawLine(70, 50, 50, 70);
    }

    #drawRightArm() {
        this.#drawLine(70, 50, 90, 70);
    }

    #drawLeftLeg() {
        this.#drawLine(70, 80, 50, 110);
    }

    #drawRightLeg() {
        this.#drawLine(70, 80, 90, 110);
    }

    draw( value ) {
        switch( value ) {
        case 1: 
            this.#drawHead();
            break;
        case 2:
            this.#drawBody();
            break;
        case 3:
            this.#drawLeftArm();
            break;
        case 4:
            this.#drawRightArm();
            break;
        case 5:
            this.#drawLeftLeg();
            break
        case 6:
            this.#drawRightLeg();
            break;
        }
        // this.#drawMan[value];
    }

}