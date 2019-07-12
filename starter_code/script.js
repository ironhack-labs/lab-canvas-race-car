window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    Game.init("canvas")

  }
  let Game = {
    canvas: undefined,
    ctx: undefined,
    car: undefined,
    obstacles: [],

    init: function (id) {
      this.canvas = document.getElementById(id)
      this.ctx = this.canvas.getContext("2d")
      this.canvas.width = window.innerWidth * -.96
      this.canvas.height = window.innerHeight * .96
      this.drawFilledSquares()
      this.drawStyleLine()
      this.interval()
      this.car = new Car(this.ctx, 'images/car.png')
      this.setEventListeners()
      this.obs = new Obj(this.ctx, 10, 10, "red", 30, 30)
      this.generateObstacles()
      this.clearObstacles()
    },
    drawFilledSquares: function () {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(20, 0, this.canvas.width - 40, this.canvas.height)
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(25, 0, this.canvas.width - 50, this.canvas.height)
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(30, 0, this.canvas.width - 60, this.canvas.height)
    },
    drawStyleLine: function () {
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 5
      this.ctx.setLineDash([30, 30])
      this.ctx.beginPath()
      this.ctx.moveTo(this.canvas.width / 2, 0)
      this.ctx.lineTo(this.canvas.width / 2, this.canvas.height)
      this.ctx.stroke()
      this.ctx.fill()
      this.ctx.closePath()
    },
    interval: function () {
      setInterval(() => {
        this.clearScreen()
        this.drawFilledSquares()
        this.drawStyleLine()
        this.car.draw()
        this.obstacles.forEach(obstacles => obstacles.draw())
        this.obstacles.forEach(obstacles => obstacles.moveObstacle())

        //this.obs.draw()
      }, 5)
    },
    clearScreen: function () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    setEventListeners: function () {

      document.onkeydown = e => {
        e.keyCode === 37 ? this.car.goLeft() : null
        e.keyCode === 39 ? this.car.goRight() : null
      }
    },
    generateObstacles: function () {
      console.log("se genera obstaculo")
      this.obstacles.push(new Obj(this.ctx, 10, 10, "red", 30, Math.floor(Math.random() * 100 + 200)))
    },
    clearObstacles: function () {
      this.obstacles.forEach((obs, idx) => {
        if (obs.x < 0) { this.obstacles.splice(idx, 1) }  //Limpiamos los obstaculos iterando sobre ellos.
      })
    },


  }


};








