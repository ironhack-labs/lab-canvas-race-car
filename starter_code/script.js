window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();

  };
}

function startGame() {
  ControlsApp.init("mycanvas")
}

const ControlsApp = {

  canvasDom: undefined,
  ctx: undefined,
  winH: window.innerHeight,
  winW: window.innerWidth,

  init: function (id) {
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    // this.setDimensions()
    // this.setHandlers()
    // this.setEventListeners()
    this.drawGreen()
    this.drawRoad()
    this.drawLine()
    this.vehicle = new Vehicle(this.ctx, "images/car.png", this.winW, this.winH)
    this.drawControlledVehicle()
    // this.interval = setInterval(updateGameArea, 20);
  },

  drawGreen: function () {
    this.ctx.fillStyle = 'green' // cambia los colores de relleno
    this.ctx.fillRect(0, 0, 400, this.winH)

  },

  drawRoad: function () {
    this.ctx.fillStyle = 'grey' // cambia los colores de relleno
    this.ctx.fillRect(30, 0, 340, this.winH)

  },
  drawLine: function () {
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 7

    // start the path
    this.ctx.beginPath()
    // starting position is x=50, y=50
    this.ctx.moveTo(50, 0)
    // draw the line that has final coordinates x=250, y=50
    this.ctx.lineTo(50, this.winH)
    // .stroke() executes the drawing
    this.ctx.stroke()
    // close the path
    this.ctx.closePath();

    //ahora la discontínua
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([20, 10])

    this.ctx.beginPath()
    this.ctx.moveTo(200, 0)
    this.ctx.lineTo(200, this.winH)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.setLineDash([0, 0])
    // la linea derecha
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 7

    // start the path
    this.ctx.beginPath()
    // starting position is x=50, y=50
    this.ctx.moveTo(350, 0)
    // draw the line that has final coordinates x=250, y=50
    this.ctx.lineTo(350, this.winH)
    // .stroke() executes the drawing
    this.ctx.stroke()
    // close the path
    this.ctx.closePath()
  },

  drawControlledVehicle: function (url) {
    this.vehicle.draw()

    // setInterval(() => {
    //   this.clear()
    //   this.vehicle.draw()
    // }, 5)
  },
  // clear: function () {
  //   this.ctx.clearRect(0, 550, this.winW, this.winH)
  // },
  setEventListeners: function () {
    document.onkeyup = e => {
      if (e.keyCode === 37) this.vehicle.moveLeft()
      if (e.keyCode === 39) this.vehicle.moveRight()
    }
  }
}




class Vehicle {
  constructor(ctx, url, winW, winH) {
    this.ctx = ctx
    this.img = new Image()
    this.img.src = url
    this.winW = winW
    this.winH = winH
    this.posX = 0
    this.vel = 5
    this.vehicleWidth = 60
  }

  draw() {
    this.img.onload = () => {
      this.ctx.drawImage(this.img, 170, 550, 60, 110);
    }
  }
  moveLeft() {
    if (this.posX > 0) this.posX -= this.vel
  }

  moveRight() {
    if (this.posX < this.winW - this.vehicleWidth) this.posX += this.vel
  }
}

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.posX = x;
    this.posY = y;
  }

  update() {
    var ctx = this.ctx;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}