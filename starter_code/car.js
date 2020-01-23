const car = {
    posX: 125,
    posY: 480,
    width: 50,
    height: 100,
    vel: 10,
    myCar: undefined,

    insertCar() {
        myCar = new Image()
        myCar.src = "./images/car.png"
        console.log(myCar)
    },

    drawCar() {

        game.ctx.drawImage(myCar, this.posX, this.posY, this.width, this.height)

    },


    moveCar(dir) {
        dir === "right" ? this.posX += this.vel : null
        dir === "left" ? this.posX -= this.vel : null

        game.ctx.drawImage(myCar, this.posX, this.posY, 50, 100)
    },

}