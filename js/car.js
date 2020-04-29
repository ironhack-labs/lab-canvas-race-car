class Car {

    constructor(ctx, canvasSize) {

        this.ctx = ctx

        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }

        this.posX = (this.canvasSize.width / 2) - 29 //Deberia ser 30, pero no sé por qué sale descentrado :(
        this.posY = this.canvasSize.height - 200

        this.car = undefined
        this.carWidth = 50
        this.carHeight = 100

        this.vel = 10
    }

    init() {
        this.car = new Image()
        this.car.src = "images/car.png"
        this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carWidth, this.carHeight)
    }

    drawCar() {
        this.ctx.drawImage(this.car, this.posX, this.posY, 50, 100)
    }

    move(direction) {

        if (this.checkCollisionRoad(direction)) {
            direction === "right" ? this.posX += 10 : this.posX -= 10

        }

    }

    checkCollisionRoad(direction) {

        return direction === "right" ? this.posX + this.carWidth < 450 : this.posX > 50

    }

    hasCrashed(obstacle) {

        console.log("CAR POSITION lolo: ")
        console.log("{xL - yT}: ", "{", this.posX, " - ", this.posY, "} | ", "{xR - yT}:", "{", this.posX + this.carWidth, " - ", this.posY, "}")
        console.log("{xL - yB}: ", "{", this.posX, " - ", this.posY + this.carHeight, "} | ", "{xR - yB}:", "{", this.posX + this.carWidth, " - ", this.posY + this.carHeight, "}")
        console.log("OBSTACLE POSITION lala: ")
        console.log("{xL - yT}: ", "{", obstacle.obstacleX, " - ", obstacle.obstacleY, "} | ", "{xR - yT}:", "{", obstacle.obstacleX + obstacle.obstacleWidth, " - ", obstacle.obstacleY, "}")
        console.log("{xL - yB}: ", "{", obstacle.obstacleX, " - ", obstacle.obstacleY + obstacle.obstacleHeight, "} | ", "{xR - yB}:", "{", obstacle.obstacleX + obstacle.obstacleWidth, " - ", obstacle.obstacleY + obstacle.obstacleHeight, "}")
        console.log("OBSTACLE WIDTH: ", obstacle.obstacleWidth)
        console.log("OBSTACLE HEIGHT: ", obstacle.obstacleHeight)

        if (this.posX + this.carWidth > obstacle.obstacleX && // Left
            this.posX < obstacle.obstacleX + obstacle.obstacleWidth && // Right
            this.posY + this.carHeight > obstacle.obstacleY && // Top
            this.posY < obstacle.obstacleY + obstacle.obstacleHeight // Bot
        ) {
            console.log("OBSTACLE", obstacle, " has collisioned with Car at X: ", this.posX, " Y: ", this.posY)
            return true
        }




    }


}