const car = {

    carWidth: 50,
    carHeight: 80,
    car: new Image(),
    vel: 25,
    posX: undefined,
    posY: 600 - 100,
    initCar() {
        this.posX = myGame.windowsSize.width / 2 - 30
        this.setEventKeyboard()
        this.car.src = './images/car.png'

    },
    drawCar(ctx) {
        ctx.drawImage(this.car, this.posX, this.posY, this.carWidth, this.carHeight)
    },
    moveCar(dir) {

        dir === 'right' && this.posX < myGame.windowsSize.width - 100 ? this.posX += this.vel : null
        dir === 'left' && this.posX > myGame.windowsSize.width - 350 ? this.posX -= this.vel : null
    },
    changeDirection() {
        this.vel *= -1
    },
    setEventKeyboard() {
        document.onkeyup = e => {
            e.keyCode == 37 ? this.moveCar('left') : null
            e.keyCode == 39 ? this.moveCar('right') : null

        }
    },
}