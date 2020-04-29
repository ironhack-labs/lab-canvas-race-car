class Obstacle {

    //La verdad es que no tengo ni idea de por qué se me ladean hacia la izquierda los obstáculos y por qué a veces ocupan más de lo que deberían,
    // cuando lo máximo que deberían ocupar son 100px

    constructor(ctx, car, canvasSize) {

        this.ctx = ctx

        this.obstacleWidth = Math.floor(Math.random() * 100)
        this.obstacleHeight = 50

        this.obstacleY = 50
        this.obstacleX = Math.floor(Math.random() * ((400 - (this.obstacleWidth + 70)) + (this.obstacleWidth + 70)))

        this.obstacle = undefined // Necesario?

        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
    }

    drawObstacle() {

        this.ctx.strokeStyle = "red"
        this.ctx.lineWidth = this.obstacleHeight
        this.ctx.beginPath()
        this.ctx.moveTo(this.obstacleX, this.obstacleY)
        this.ctx.lineTo(this.obstacleWidth, this.obstacleY)
        this.ctx.stroke()
    }

    moveObstacle() {
        this.obstacleY++
    }

    /// Si el Obstacle pasa fuera del canvan, sacarlo del array para ahorrar espacio en memoria y evitar un array de 10000 obstáculos
    isRemovable() {

        return !(this.obstacleY + this.obstacleHeight < this.canvasSize.height)
    }
}