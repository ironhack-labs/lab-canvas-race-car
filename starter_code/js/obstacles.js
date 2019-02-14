function Obstacle (x,y,game) {
    this.x = x
    this.y = 0
    this.w = 50
    this.h = 20
    this.ySpeed = 4
    this.game = game
    this.canvas = game.canvasDom
    this.canvasCtx = this.canvas.getContext("2d")
}

Obstacle.prototype.drawObstacle = function() {
    this.canvasCtx.fillStyle = "brown"
    this.canvasCtx.fillRect(this.x,this.y,this.w,this.h)
}

Obstacle.prototype._randomizeCoordinates = function () {
    this.x = Math.floor(Math.random() * (170 - 35) + 35)
}

Obstacle.prototype.move = function() {
    this.y += this.ySpeed
}