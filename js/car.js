class Car {
    constructor(ctx) {
        this.ctx = ctx; // defino el contexto (indicado en el constructor)

        this.h = 100; // altura
        this.w = 50; //anchura

        this.x = (this.ctx.canvas.width - this.w) / 2; //posicion en el eje horizontal
        this.y = this.ctx.canvas.height - this.h; //posicion en el eje vertical

        this.vx = 0; //velocidad en el eje horizontal 

        this.img = new Image(); //creo una nueva imagen
        this.img.src = "./images/car.png"; //indico la "source" de la nueva imagen
    }

    draw() {
        this.ctx.drawImage( //llamo el metodo drawImage
            this.img, //indico de que imagen estamos hablando
            this.x, //posicion en el eje horizontal
            this.y, //posicion en el eje vertical
            this.w, // anchura
            this.h //altura
        )
    }

    move() {
        this.x += this.vx
    }

    onKeyEvent(event) {
        if (event.type === 'keydown') {
            switch (event.keyCode) {
                case KEY_LEFT:
                    if (this.x >= 0) {
                        this.vx = -10
                    } else {
                        this.vx = 0
                    }
                    break;
                case KEY_RIGHT:
                    if (this.x < this.ctx.canvas.width - this.w) {
                        this.vx = 10
                    } else {
                        this.vx = 0
                    }
            }
        } else {
            switch (event.keyCode) {
                case KEY_RIGHT:
                    this.vx = 0
                    break;
                case KEY_LEFT:
                    this.vx = 0
                    break;
            }
        }
    }

}