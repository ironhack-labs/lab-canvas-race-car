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
    
    start(id) {
        let count = 0


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
            if (count % 100 == 0) {
                this.createObstacles()
            }
            count += 1
        this.arrObstacles.forEach(e => {
                e.move()
                this.drawAll(e)
                this.colisionObstacles(e)



            });


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

        if ((car.posX + car.width) >= elm.posX &&
            car.posY <= (elm.posY + elm.height) &&
            car.posX <= (elm.posX + elm.width) &&
            (car.posY + car.height) >= elm.posY) {
            this.gameOver()
            alert("GAME OVER")
        }


    },

    gameOver() {
        clearInterval(this.time)
    },

    createObstacles() {
        let newObstacles = new obstacles()
        this.arrObstacles.push(newObstacles)
    }


}