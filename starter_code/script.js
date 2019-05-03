window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    // captura el container de canvas
    const gameBoard = document.getElementById('game-board')
    // Inicializa el canvas
    carApp.init('mycanvas')
    // Dibujamos la carretera
    carApp.drawRoad()
    // creamos clase de coche
    carApp.createCar('images/car.png')
    // Dibujamos los objetos
    carApp.drawApp()

  }
};



// Objeto de la App

const carApp = {

  version: '1.0',
  name: 'driving App',
  description: 'App para realizar un juego de conduccion en HTML5 Canvas',
  author: 'Juan Perez',
  canvasDom: undefined,
  ctx: undefined,
  winW: 600,
  winH: 600,
  car: undefined,
  obstaclesArray: [],
  timePushObstacles: 0,
  velRoad: 0,


  init: function (id) {
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this.setDimensions()
    this.setEventListeners()
  },

  setDimensions: function () {
    this.canvasDom.setAttribute('width', this.winW)
    this.canvasDom.setAttribute('height', this.winH)
  },


  createCar: function (url) {
    this.car = new Car(this.ctx, url, this.winW, this.winH)

  },


  createObstacle: function () {
    // this.obstacle = new Obstacles(this.ctx, this.winW, this.winH)
    return new Obstacles(this.ctx, this.winW, this.winH)

  },


  drawApp: function () {

    setInterval(() => {

      // Limpio el canvas
      this.clear()
      // Dibujo la carretera
      carApp.drawRoad()
      // Dibujo el coche
      this.car.draw()

      // Introduzco nueva clase de Obstaculos en el array cada X segundos
      if (this.timePushObstacles > 200) {
        this.obstaclesArray.push(this.createObstacle())
        this.timePushObstacles = 0
      }
      // Dibujo los obstaculos
      this.obstaclesArray.forEach(obstacle => {
        obstacle.draw()
      })
      this.timePushObstacles++

    }, 5)

  },


  drawRoad: function () {

    // fondo carretera
    this.canvasDom.style.background = "gray"

    // Dibujo rectangulos 
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, 50, this.winH)
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.winW - 50, 0, 50, this.winH)

    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(60, 0, 10, this.winH)
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.winW - 70, 0, 10, this.winH)

    // Dibuja linea central
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 5
    this.ctx.setLineDash([25, 20])

    this.ctx.beginPath()
    this.ctx.moveTo(this.winH / 2, 0)
    this.ctx.lineTo(this.winH / 2, this.winH)
    this.ctx.stroke()

    // Velocidad linea
    this.velRoad--
    // Movimiento de la linea
    this.ctx.lineDashOffset = this.velRoad;

  },



  clear: function () {
    this.ctx.clearRect(0, 0, this.winW, this.winH)
  },

  setEventListeners: function () {
    document.onkeyup = e => {
      if (e.keyCode === 37) this.car.moveLeft()
      if (e.keyCode === 39) this.car.moveRight()
    }
  }

}



// Clase de coche

class Car {
  constructor(ctx, url, winW, winH) {
    this.ctx = ctx

    this.img = new Image()
    this.img.src = url
    this.winW = winW
    this.winH = winH

    this.carWidth = 100
    this.carHeight = 150
    this.posX = this.winW / 2 - this.carWidth / 2
    this.posY = 400
    this.vel = 10
  }

  draw() {
    this.ctx.drawImage(this.img, this.posX, this.posY, this.carWidth, this.carHeight)
  }

  moveLeft() {
    if (this.posX > 0) this.posX -= this.vel
  }

  moveRight() {
    if (this.posX < this.winW - this.carWidth) this.posX += this.vel
  }

}


// Clase de obstaculos

class Obstacles {

  constructor(ctx, winW, winH) {
    this.ctx = ctx
    this.winW = winW
    this.winH = winH

    // this.posX = this.getRandomInt(50, 100)
    this.posX = this.getRandomInt(90, 290)
    this.posY = 0
    // this.obstacleWidth = this.getRandomInt(0, 200)
    this.obstacleWidth = this.getRandomInt(100, 230)
    this.obstacleHeight = 30
    this.vel = 1
  }

  draw() {
    this.ctx.fillStyle = 'red';
    // this.ctx.fillRect(this.posX, 0, 50, this.winH)
    this.ctx.fillRect(this.posX, this.posY, this.obstacleWidth, 30)
    // Actualiza la posicion vertical
    this.posY += this.vel
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min
  }

}











