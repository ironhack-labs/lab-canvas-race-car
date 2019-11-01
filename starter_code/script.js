window.onload = function () {

  const game = {

    title: 'Best car game Evah!',
    author: 'Paolo and Guillermo',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    wWidth: undefined,
    wHeight: undefined,
    car: undefined,
    obstacles: [],
    frames: 1,
    score: undefined,



    init(id) {
      this.canvasDom = document.getElementById(id)
      this.ctx = this.canvasDom.getContext('2d')
      this.setDimensions()
      this.setEventListeners()


    },

    setDimensions() {
      this.canvasDom.setAttribute('height', 500)
      this.canvasDom.setAttribute('width', 500)
      this.wWidth = ('height', 500)
      this.wHeight = ('width', 500)
    },


    drawGrass() {
      this.ctx.fillStyle = "green"
      this.ctx.fillRect(0, 0, 500, this.wHeight)
    },

    drawRoad() {
      this.ctx.fillStyle = "grey"
      this.ctx.fillRect(25, 0, 450, this.wHeight)
    },
    drawLine() {
      this.ctx.strokeStyle = 'white'
      this.ctx.beginPath()
      this.ctx.moveTo(50, 0)
      this.ctx.lineTo(50, 500)
      this.ctx.setLineDash([40, 0])
      this.ctx.lineWidth = 25
      this.ctx.stroke()
      this.ctx.strokeStyle = 'white'
      this.ctx.beginPath()
      this.ctx.moveTo(450, 0)
      this.ctx.lineTo(450, 500)
      this.ctx.setLineDash([40, 0])
      this.ctx.lineWidth = 25
      this.ctx.stroke()
    },
    drawStyleLine() {
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 12.5
      this.ctx.setLineDash([40, 40])
      this.ctx.beginPath()
      this.ctx.moveTo(243.75, 0)
      this.ctx.lineTo(243.75, 500)
      this.ctx.stroke()
    },
    score() {
      var points = Math.floor(this.frames / 5);
      this.ctx.font = "18px serif";
      this.ctx.fillStyle = "black";
      this.ctx.fillText("Score: " + points, 350, 50);
    },

    setEventListeners() {
      document.onkeydown = e => {
        switch (e.keyCode) {
          case 37:
            this.car.goLeft()
            break
          case 39:
            this.car.goRight()
            break
        }
      }

    },
    updateGameArea() {
      this.clearScreen()
      this.manageObstacles()
    },
    manageObstacles() {
      let random = Math.floor(Math.random() * 250)
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].update()
      }

      this.frames += 1

      if (this.frames % 40 === 0) {
        this.obstacles.push(new Obstacle(this.ctx, random, 10, random, 0))
      }
    },

    drawControlledCar(name) {
      this.car = new Car(this.ctx, name)
      setInterval(() => {
        this.clearScreen()
        game.drawGrass()
        game.drawRoad()
        game.drawLine()
        game.drawStyleLine()
        this.manageObstacles()
        game.score();
        this.car.draw()
      }, 30)
    },
    clearScreen() {
      this.ctx.clearRect(0, 0, this.wWidth, this.wHeight)
    }

  }

  document.getElementById("start-button").onclick = function () {

    game.init("myCanvas");

    game.drawControlledCar("car.png")

  };



  class Car {
    constructor(ctx, name) {
      this._ctx = ctx
      this._image = new Image()
      this._image.src = `images/${name}`
      this._posX = 220
      this._posY = 400
      this._vel = 25
    }


    draw() {
      this._ctx.drawImage(this._image, this._posX, this._posY, 50, 100)
    }

    goLeft() {
      this._posX >= 50 ? this._posX -= this._vel : null
    }

    goRight() {
      this._posX <= 390 ? this._posX += this._vel : null
    }
  }

}





