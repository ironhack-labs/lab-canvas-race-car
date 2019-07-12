class Car {
    constructor(ctx, url) {
        this._ctx = ctx
        this._img = new Image()
        this._img.src = url
        this._carWidth = 50
        this._carHeigth = 100
        this._posX = 125
        this._posY = 540
        this._vel = 10
    }
    draw() {
        this._ctx.drawImage(this._img, this._posX, this._posY, this._carWidth, this._carHeigth);
    }
    goLeft() {
        this._posX -= this._vel
    }
    goRight() {
        this._posX += this._vel
    }

}



class Obj {
    constructor(ctx, x, y, color, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(this.ctx)
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    moveObstacle() {
        this.y += 20
    }

}