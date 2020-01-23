const game = {
    name: 'Race Car',
    description: 'Game "Race Car" funny',
    author: 'Luz y Ales',
    license: undefined,
    version: '1.0',
    canvas: undefined,
    ctx: undefined,
    wSize: {
        width: 300,
        height: 600
    },
    time: undefined,

    start(id) {


        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext("2d")
        this.setDimension()
        car.insertCar()
        this.setEventListeners()
        background.drawRoad()
        background.drawGreen()
        background.drawLine()
        background.drawDashline()
        obstacles.DrawObstacles()
        this.time = setInterval(() => {
            this.drawAll()
            obstacles.move()
            this.colisionObstacles()

        }, 100) //1000/60 para quitar el efecto

    },


    setDimension() {
        this.canvas.width = this.wSize.width
        this.canvas.height = this.wSize.height


    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode == 37 && car.posX >= 30 ? car.moveCar("left") : null
            e.keyCode == 39 && car.posX <= 220 ? car.moveCar("right") : null
        }
    },

    clear() {

        this.ctx.clearRect(0, 0, this.wSize.width, this.wSize.height)

    },

    drawAll() {

        // car.drawCar()
        this.clear()
        background.drawRoad()
        background.drawGreen()
        background.drawLine()
        background.drawDashline()
        car.drawCar()
        obstacles.DrawObstacles()

    },

    colisionObstacles() {

        if ((car.posX + car.width) >= obstacles.posX &&
            car.posY <= (obstacles.posY + obstacles.height) &&
            car.posX <= (obstacles.posX + obstacles.width) &&
            (car.posY + car.height) >= obstacles.posY) {
            this.gameOver()
            alert("GAME OVER")
        }


    },

    gameOver() {
        clearInterval(this.time)
    }


}