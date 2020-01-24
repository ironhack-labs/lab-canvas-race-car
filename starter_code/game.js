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
    arrObstacles: [],
    count: 0,

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

        this.time = setInterval(() => {
            if (this.count % 100 == 0) {
                this.createObstacles()
            }
            this.score()
            this.count += 1
            background.moveLine()
            this.arrObstacles.forEach(e => {
                e.move()
                this.drawAll(e)
                this.colisionObstacles(e)


            });


        }, 1000 / 60) //1000/60 para quitar el efecto

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

    drawAll(elm) {
        // car.drawCar()

        this.clear()
        background.drawRoad()
        background.drawGreen()
        background.drawLine()
        background.drawDashline()
        car.drawCar()
        elm.DrawObstacles()
    },

    colisionObstacles(elm) {

        if ((car.posX + car.width) >= elm._posX &&
            car.posY <= (elm._posY + elm._height) &&
            car.posX <= (elm._posX + elm._width) &&
            (car.posY + car.height) >= elm._posY) {
            this.gameOver()
            alert(`GAME OVER. Conseguistes ${this.count} puntos`)
        }


    },

    gameOver() {
        clearInterval(this.time)
    },

    createObstacles() {
        let newObstacles = new obstacles()
        this.arrObstacles.push(newObstacles)
    },

    score() {
        document.querySelector('#score').innerText = this.count
    }

}