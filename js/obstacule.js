class Obstacule {
    constructor(ctx, canvasSize, posY) {
        this.ctx = ctx,
            this.canvasSize = canvasSize
        this.obstaculeSpects = {
            //size: { w: size, h: size },
            pos: { x: 90, y: posY }
        }
        this.draw()
    }
    init() {
        this.draw()
    }
    draw() {
        console.log("dibujo el cuadrado")

        this.move()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(90, this.obstaculeSpects.pos.y, 140, 20)
        this.ctx.fillRect(270, this.obstaculeSpects.pos.y, 140, 20)
    }
    move() {
        this.obstaculeSpects.pos.y += 10
    }

}