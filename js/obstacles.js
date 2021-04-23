class Obstacle {
    constructor(ctx) {
        this.ctx = ctx; // defino el contexto (indicado en el constructor)

        this.h = 20; // altura
        this.w = Math.floor(Math.random() * 200); //anchura

        this.x = Math.floor(Math.random() * (this.ctx.canvas.width-this.w)); //posicion en el eje horizontal
        this.y = 0; //posicion en el eje vertical

        this.vy = 2;
    }

    draw() {
        this.ctx.fillStyle = 'red'//da color a lo que se pinta despues
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    move() {
        this.y += this.vy
    }

}