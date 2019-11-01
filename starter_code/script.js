
window.onload = function () {


  const game = {
    title: 'APlicacion Del Coche',
    author: 'Alfonso E Imanol',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    cWidth: undefined,
    cHeight: undefined,
    car: undefined,
    obstacles: [],
    frames: 1,
    init() {
      this.canvasDom = document.getElementById('myCanvas')
      this.ctx = this.canvasDom.getContext('2d')
      this.setDimensions()
      this.car = new Car(this.ctx)
      this.setEventListeners()
      // this.drawControlledCAr()

      setInterval(() => {
        this.drawAll()

      }, 5)

    },
    setDimensions() {
      document.getElementsByTagName('body')[0].style.margin = 0
      this.canvasDom.setAttribute('height', window.innerHeight)
      this.cWidth = 500
      this.cHeight = window.innerHeight
      this.canvasDom.setAttribute('width', this.cWidth)

    },
    drawRoad() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, this.cWidth, this.cHeight)

      this.ctx.fillStyle = "grey"
      this.ctx.fillRect(50, 0, this.cWidth - 100, this.cHeight)



    },
    lines() {
      this.ctx.setLineDash([100, 0])          // ['tamaño del trazo', 'espacio entre trazos'
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 15
      this.ctx.beginPath()
      this.ctx.moveTo(this.cWidth - 70, 0)
      this.ctx.lineTo(this.cWidth - 70, this.cHeight)
      this.ctx.stroke()

      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 15
      this.ctx.beginPath()
      this.ctx.moveTo(70, 0)
      this.ctx.lineTo(70, this.cHeight)
      this.ctx.stroke()
    },
    dashLine() {

      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 10
      this.ctx.setLineDash([50, 50])          // ['tamaño del trazo', 'espacio entre trazos']
      this.ctx.beginPath()
      this.ctx.moveTo(this.cWidth / 2, 0)
      this.ctx.lineTo(this.cWidth / 2, this.cHeight)
      this.ctx.stroke()
    },
    drawAll() {
      this.drawRoad()
      this.lines()
      this.dashLine()
      this.manageObstacles()
      this.car.draw()
    },
    // drawControlledCAr() {
    //   this.car = new Car(this.ctx)
    //   setInterval(() => {
    //     this.clearScreen()
    //     this.drawRoad()
    //     this.dashLine()
    //     this.lines()
    //     this.car.draw()
    //   }, 10)
    // },

    clearScreen() {
      this.ctx.clearRect(0, 0, this.cWidth, this.cHeight)
    },
    setEventListeners() {
      document.onkeydown = e => {
        switch (e.keyCode) {
          case 37:
            console.log("iz")
            this.car.goLeft()
            break
          case 39:
            this.car.goRight()
            break
        }
      }
    },
    manageObstacles() {

      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].update()
      }

      this.frames += 1
      let largo = Math.floor(Math.random() * this.cWidth - 200) + 200
      let position = Math.floor(Math.random() * (this.cWidth - 100 - largo) + 100)
      if (this.frames % 250 === 0) {
        this.obstacles.push(new Obstacle(this.ctx, largo, 50, position, 0))
      }
    }
  }
  class Car {
    constructor(ctx) {
      this._ctx = ctx
      this._image = new Image()
      this._image.src = `./images/car.png`
      this._carPX = game.cWidth / 2 - 30
      this._carPY = game.cHeight - 150
      this._val = 8

    }
    draw() {
      this._ctx.drawImage(this._image, this._carPX, this._carPY, 60, 100)
    }

    goLeft() {
      this._carPX -= this._val
    }

    goRight() {
      this._carPX += this._val
    }

  }
  class Obstacle {
    constructor(ctx, width, height, x, y) {
      this._width = width;
      this._height = height;
      this._posX = x;
      this._posY = y;
      this._ctx = ctx;

      this._speedX = 0;
      this._speedY = 0;
    }

    update() {
      this._posY += 1
      this._ctx.fillStyle = 'brown'
      this._ctx.fillRect(this._posX, this._posY, this._width, this._height);
    }
  }





  document.getElementById('start-button').onclick = function () {
    game.init();

  };


}





