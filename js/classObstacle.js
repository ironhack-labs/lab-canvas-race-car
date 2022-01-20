class Obstacle {
    constructor(ctx, posX, posY, width, height) {


        this.ctx = ctx
        this.objPos = { x: posX, y: posY }
        this.objSize = { w: width, h: height }

        this.draw()
    }


    draw() {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.objPos.x, this.objPos.y, this.objSize.w, this.objSize.h)



    }

    move() {
        this.objPos.y += 10


    }

    colision() {
        if (this.objPos.x < carApp.car.carPos.x + carApp.car.carSize.w &&
            this.objPos.x + this.objSize.w > carApp.car.carPos.x &&
            this.objPos.y < carApp.car.carPos.y + carApp.car.carSize.h &&
            this.objSize.h + this.objPos.y > carApp.car.carPos.y) {
            return true



        }
    }

}



// if (rect1.x < rect2.x + rect2.width &&
//   rect1.x + rect1.width > rect2.x &&
//   rect1.y < rect2.y + rect2.height &&
//   rect1.height + rect1.y > rect2.y) {
//   new alert('YOU ARE A LOOSER')
// }

// if (elm.objPos.x < this.car.carPosX + elm.objSize.w &&
//   elm.objPos.x + elm.objSize.w > this.car.carPos.x &&
//   elm.objPos.y < this.car.carPos.y + this.car.carSize.h &&
//   elm.objSize.h + elm.objPos.y > this.car.carPos.y) {
//   new alert('YOU ARE A LOOSER')
// }


