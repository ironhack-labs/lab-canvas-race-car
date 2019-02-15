window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    var app = new StartGame()
    app.fondo()
    app.lineaDiscontinua()
    app.coche()
    app._setListeners()
  }

  function StartGame() {
    this.app = document.getElementById('canvasId');
    this.ctx = this.app.getContext('2d')
    this.x = 150

  }

  StartGame.prototype.fondo = function () {
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0, 0, 400, 700)
    this.ctx.fillStyle = "gray"
    this.ctx.fillRect(50, 0, 300, 700)
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(60, 0, 10, 700)
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(330, 0, 10, 700)
    this.ctx.fillStyle = "white"
  }

  StartGame.prototype.lineaDiscontinua = function () {
    this.ctx.beginPath()
    this.ctx.lineWidth = 8
    this.ctx.strokeStyle = 'white'
    this.ctx.setLineDash([30, 20])
    this.ctx.moveTo(200, 0)
    this.ctx.lineTo(200, 700)
    this.ctx.stroke()
  }

  StartGame.prototype.coche = function (url) {
    var img = new Image()
    img.src = "./images/car.png"
    img.onload = function () {
      this.ctx.drawImage(img, this.x, 580, 90, 90)
    }.bind(this)
  }

StartGame.prototype.moverLeft = function () {
  this.x -= 5
}
StartGame.prototype.moverRight = function () {
  this.x += 5
}
StartGame.prototype._setListeners = function () {
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case (37):
      this.moverLeft()
        break;
      case (39):
        this.moverRight()
        break;
    }
    this._refrescar()
  }.bind(this)
}
StartGame.prototype._refrescar = function () {
  this.ctx.clearRect(0,0,400,700)
  this.fondo()
  this.lineaDiscontinua()
  this.coche()
}
}