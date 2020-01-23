// COCHE
const car = {
    position: {
        x: undefined,
        y: undefined
    },
    size: {
        x: undefined,
        y: undefined
    },
    drawCar() {
        let car = new Image()
        car.src = `./images/car.png`
        car.onload = () => {
            return game.ctx.drawImage(car, this.position.x, this.position.y, this.size.x, this.size.y)
        }

    },
    moveCar() {
        document.onkeydown = (e) => {
            if (e.keyCode == 37 && car.position.x >= game.maple) {
                car.position.x -= 10
            }
            if (e.keyCode == 39 && car.position.x <= game.wSize.width - this.size.x - game.maple) {
                car.position.x += 10
            }
        }
    }
}