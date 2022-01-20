class Obstacle {
    constructor(ctx) {
        this.ctx = ctx
        this.obstaclePos = { x: undefined, y: 0 }
        this.obstacleSize = { w: undefined, h: 20 }

        this.init()
    }

    init() {
        // inicializarlo
        this.randomWidth()
        this.randomPosX()
        this.draw()
        this.move()
    }

    randomWidth() {
        // calcular un ancho random
        const width = Math.floor(Math.random() * (200 - 60)) + 60;
        this.obstacleSize.w = width
    }

    randomPosX() {
        // calcular posición random eje x
        const posX = Math.floor(Math.random() * (400 - 0)) + 0;
        this.obstaclePos.x = posX
    }

    draw() {
        // dibujarse
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    move() {
        // moverse
        this.obstaclePos.y += 10

    }

}