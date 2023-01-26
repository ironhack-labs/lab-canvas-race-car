/** @type {HTMLCanvasElement} */


class Component{
    constructor(x, y, w, h, ctx){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.ctx = ctx
        this.speedX = 0
        this.speedY = 0
    }

    draw(){
        const newImg = new Image()
        newImg.src = '../images/car.png'
        this.ctx.drawImage(newImg, this.x, this.y, this.w, this.h)
    }

    newPosition(){
        this.x += this.speedX
        this.y += this.speedY
    }

    top(){
        return this.y
    }

    left(){
        return this.x
    }

    right(){
        return this.x + this.w
    }

    crashWith(enemy){
        return!(
            this.top() > enemy.bottom() ||
            this.right() < enemy.left() ||
            this.left() > enemy.right()
        )
    }
}

class Enemy extends Component{
    draw(){
        const newImg = new Image()
        newImg.src = '../images/arrows.png'
        this.ctx.drawImage(newImg, this.x, this.y, this.w, this.h)
    }
}