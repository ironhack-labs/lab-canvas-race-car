function CarApp() {
    this.version = '1.0'
    this.name = 'CarApp'
    this.canvasDOM = undefined
    this.ctx = undefined
    this.w = undefined
    this.h = undefined
    this.posX = 200
    this.img = undefined
    this.frames = 0
    this.myObstacles = []
    this.minHeight = -1500
    this.maxHeight = 1500
    this.myInterval = undefined
}

CarApp.prototype.init = function(id) {
    this.canvasDOM = document.getElementById(id)
    this.ctx = this.canvasDOM.getContext('2d')
    this._setDimensions()
    this._setListeners()
    this._update()
}

CarApp.prototype._setDimensions = function() {
    this.canvasDOM.setAttribute('width', 500)
    this.canvasDOM.setAttribute('height', 700)
    this.w = 500
    this.h = 700
}

CarApp.prototype._setListeners = function() {
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 39:
                this._moveRight()
                break
            case 37:
                this._moveLeft()
                break
        }
    }.bind(this)
}

CarApp.prototype.fillingRects = function(color, xStart, yStart, xEnd, yEnd) {
    this.ctx.fillStyle = color
    this.ctx.fillRect(xStart, yStart, xEnd, yEnd)
}

CarApp.prototype.fillingObstacles = function Component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

CarApp.prototype.lineWay = function() {
    this.ctx.beginPath()
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.setLineDash([40, 40])
    this.ctx.moveTo(this.w / 2, this.minHeight)
    this.ctx.lineTo(this.w / 2, this.maxHeight)
    this.ctx.stroke()

}

CarApp.prototype.drawHighway = function() {
    var colors = ['green', 'grey', 'white', 'grey']
    var xStartArray = [0, 40, 50, 60]
    var yStartArray = [0, 0, 0, 0]
    var xEndArray = [this.w, this.w - 80, this.w - 100, this.w - 120]
    var yEndArray = [this.h, this.h, this.h, this.h]

    for (let i = 0; i < colors.length; i++) {
        this.fillingRects(colors[i], xStartArray[i], yStartArray[i], xEndArray[i], yEndArray[i])
    }
}

CarApp.prototype._moveLeft = function() {
    if (this.posX > 0) this.posX -= 20
}

CarApp.prototype._moveRight = function() {
    if (this.posX < this.w - 100) this.posX += 20
}

CarApp.prototype.randomNumber = function(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

CarApp.prototype.createObstacles = function() {
    for (i = 0; i < 5; i++) {
        this.myObstacles.push([this.randomNumber(0, 400), this.randomNumber(-2400, -1500)])
    }
    for (i = 0; i < 5; i++) {
        this.img = new Image() // Create new img element
        this.img.src = './images/ironhack.png' // Set source path
        this.ctx.drawImage(this.img, this.myObstacles[i][0], this.myObstacles[i][1] + this.maxHeight, 50, 50)
    }
}

CarApp.prototype.createCar = function() {
    this.img = new Image() // Create new img element
    this.img.src = './images/carChulo.png' // Set source path
    this.ctx.drawImage(this.img, this.posX, this.h - 200, 100, 188)
}

CarApp.prototype.crash = function() {
    if (this.myObstacles.length != 0) {
        for (i = 0; i < 5; i++) {
            if (((this.myObstacles[i][1] + this.maxHeight) === this.h - 200) &&
                (((this.myObstacles[i][0]) <= (this.posX + 100)) &&
                    ((this.myObstacles[i][0]) + 50) >= (this.posX))) this.stop()
        }
    }
}

CarApp.prototype.stop = function() {
    clearInterval(this.myInterval)
    alert('emosio engañaos!')
}

CarApp.prototype._update = function() {

    myInterval = setInterval(function() {
        this.ctx.clearRect(0, 0, this.w, this.h)
        this.drawHighway()
        this.lineWay()

        this.createObstacles()
        this.frames++;
        this.minHeight++;
        this.maxHeight++;
        if (this.minHeight === 20) this.minHeight = -1500
        if (this.maxHeight === 3020) {
            this.maxHeight = 1500
            this.myObstacles = []
        }
        this.crash()
        this.createCar()
    }.bind(this), 5)
}