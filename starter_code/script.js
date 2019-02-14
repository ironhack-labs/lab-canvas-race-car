window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        var canvas = new StartGame();
        canvas._init('canvasID')

        setInterval(function() {
            canvas.drawGreenFilledSquare()
            canvas.drawGreyFilledSquare()
            canvas.drawWhiteLeftFilledSquare()
            canvas.drawWhiteRightFilledSquare()
            canvas.drawRect()
            canvas.carImage('./images/car.png')
            canvas.drawObstaclesSquare()
        }, 50)

    }
}

//          Preparation

function StartGame() {
    this.version = '1.0'
    this.name = 'Car Obstacles'
    this.canvasDom = undefined
    this.ctx = undefined
    this.w = undefined
    this.h = undefined
    this.posX = 172.5
    this.dir = 1
}

StartGame.prototype._init = function(id) {
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this._setDimensions()
    this._setHandlers()
    this._setListeners()
    this._update()
}

StartGame.prototype._setDimensions = function() {
    var windowWidth = window.innerWidth
    var windowHeight = window.innerHeight

    this.canvasDom.setAttribute('width', 400)
    this.canvasDom.setAttribute('height', 600)

    this.w = windowWidth
    this.h = windowHeight
}

StartGame.prototype._setHandlers = function() {
    window.onresize = function() {
        this._setDimensions()
    }.bind(this)
}

//          Highway

StartGame.prototype.drawGreenFilledSquare = function() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 400, 600)

    console.log('entra verde')
}

StartGame.prototype.drawGreyFilledSquare = function() {
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(40, 0, 320, 600)

    console.log('entra gris')
}

StartGame.prototype.drawWhiteLeftFilledSquare = function() {
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(50, 0, 10, 600)

    console.log('entra blanco izquierda')
}

StartGame.prototype.drawWhiteRightFilledSquare = function() {
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(340, 0, 10, 600)

    console.log('entra blanco derecha')
}

StartGame.prototype.drawRect = function() {
    this.ctx.beginPath()
    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = 'white'
    this.ctx.setLineDash([40, 30])
    this.ctx.moveTo(200, 0)
    this.ctx.lineTo(200, 600)
    this.ctx.stroke()

    console.log('linea')
}

StartGame.prototype.carImage = function(url) {
    var img = new Image(); // Create new img element
    img.src = url; // Set source path


    this.ctx.drawImage(img, this.posX, 500, 55, 90)
        // this.posX

}

StartGame.prototype.drawObstaclesSquare = function() {
    this.ctx.fillStyle = 'brown'
    this.ctx.fillRect(245, 430, 90, 25)
    this.ctx.fillRect(80, 230, 90, 25)
    this.ctx.fillRect(245, 30, 90, 25)

    console.log('obstaculos')
}

//          Controls

StartGame.prototype._setListeners = function() {

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 39:
                this._moveRight()
                break;
            case 37:
                this._moveLeft()
                break;
        }
    }.bind(this)
}

StartGame.prototype._moveLeft = function() {
    this.posX -= 15
    this._update()
}

StartGame.prototype._moveRight = function() {
    this.posX += 15
    this._update()
}

StartGame.prototype._update = function() {
    // this.ctx.clearRect(100, 100, 100, 100)
    // this.ctx.fillRect(0, 0, 0, 0)
}