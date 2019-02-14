function Game () {
    this.canvasDom = undefined
    this.ctx = undefined
    this.backgroundColor = "green"
    this.w = 300
    this.h = 500
    this.x = 75
    this.y = 400
    this.carW = 50
    this.carH = 100
    this.xSpeed = 10
    this.separatorY = this.h
    this.obstacles = []
}

Game.prototype.init = function (id) {
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext("2d")
    this._setDimensions()
    this._setColor()
    this._setListeners()
    this.senseOfSpeed()
    this.generateObstacles()
}

Game.prototype._setDimensions = function () {
    this.canvasDom.setAttribute("width",this.w)
    this.canvasDom.setAttribute("height",this.h)
}

Game.prototype._setColor = function () {
    this.canvasDom.style.backgroundColor = this.backgroundColor
}

Game.prototype._setListeners = function () {
    document.onkeydown = function(e) {
        switch (e.keyCode){
          case (37):
          this.move("l")
          break;
          case (39):
          this.move("r")
          break;
        }
    }.bind(this)
}

Game.prototype.draw = function () {
    this._drawRoad()
    this._drawBorders()
    this._drawLanesSeparator()
    this._drawCar()
}

Game.prototype._drawRoad = function () {
    this.ctx.fillStyle = "grey"
    this.ctx.fillRect(25,0,250,this.h)
}

Game.prototype._drawBorders = function () {
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(30,0,10,this.h)
    this.ctx.fillRect(this.w - 40,0,10,this.h)
}

Game.prototype._drawLanesSeparator = function () {
    this.ctx.beginPath()
    this.ctx.moveTo(150,this.separatorY)
    this.ctx.setLineDash([20,8])
    this.ctx.strokeStyle = "white"
    this.ctx.lineWidth = 5;
    this.ctx.lineTo(150,0)
    this.ctx.stroke()
}

Game.prototype._drawCar = function () {
    var img = new Image ()
    img.src = "images/car.png"
    
    img.onload = function () {
        this.ctx.drawImage(img,this.x,this.y,50,100)
    }.bind(this)
  
}

Game.prototype.move = function (dir) {
    if (this.x >= 35){
        if (dir === "l"){
            this.x -= this.xSpeed
        }
    }
    if (this.x <= 220){
        if (dir === "r"){
            this.x += this.xSpeed
        }
    }
    this._update()
}

Game.prototype._update = function() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.draw()
}

Game.prototype.senseOfSpeed = function() {
    setInterval (function () {

        this.separatorY += 2
        this.draw()
        for (var i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].move()
            this.obstacles[i].drawObstacle()
            if (this._detectCollisions(this.obstacles[i])){
                alert("Has chocado. You lose! Recarga la página para volver a empezar")
            }
        }

    }.bind(this), 60)
}

Game.prototype.generateObstacles = function () {

    setInterval (function () {
        var newObstacle = new Obstacle (0,0,this)
        newObstacle._randomizeCoordinates()
        this.obstacles.push(newObstacle)
    }.bind(this), 2000)

}


Game.prototype._detectCollisions = function (obstacle) {

    if(obstacle.y + obstacle.h >= 400 && obstacle.y + obstacle.h < this.h){
        return (this.x < (obstacle.x + obstacle.w)) && ((this.x + this.carW) > obstacle.x)
    }

}


