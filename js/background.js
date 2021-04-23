class Background {
    constructor(ctx) {
        this.ctx = ctx; // defino el contexto (indicado en el constructor)

        this.x = 0; //posicion en el eje horizontal
        this.y = 0; //posicion en el eje vertical

        this.h = this.ctx.canvas.height; // altura
        this.w = this.ctx.canvas.width; //anchura

        this.img = new Image(); //creo una nueva imagen
        this.img.src = "./images/road.png"; //indico la "source" de la nueva imagen
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

}

