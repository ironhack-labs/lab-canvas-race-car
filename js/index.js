window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame.init('canvas')
  };

  const startGame = {
    name: 'Canvas Race Car',
    author: 'Dayan Rojas',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
      height: 700,
      width: 500
    },
    frames: 0,
    car: undefined,
    interval: undefined,
    obstacles: [],
    score: undefined,
    init(id) {
      this.canvasDom = document.getElementById(id)
      this.canvasDom.width = this.canvasSize.width
      this.canvasDom.height = this.canvasSize.height
      this.ctx = this.canvasDom.getContext('2d')
      this.car = new Car(this.ctx, 240, 590, 60, 100, this.canvasSize)
      //this.obstacle = new Obstacle(this.ctx, 320, 20, '#890000', 100, 30)

      this.setEventListeners()
      this.interval = setInterval(() => {
        this.clearScreen()
        this.drawBackground()
        this.car.draw()
        this.updateObstacles()
        this.score()
        this.craswhith(this.car, this.obstacles)
        this.obstacles.forEach(elm => {
          this.craswhith(this.car, elm) ? this.stop() : null
        })
      }, 50)

    },
    drawBackground() {
      this.ctx.fillStyle = '#1c8200'
      this.ctx.fillRect(0, 0, 500, 700)
      this.ctx.fillStyle = '#808080'
      this.ctx.fillRect(40, 0, 420, 700)
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(60, 0, 20, 700)
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(420, 0, 20, 700)
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 8
      this.ctx.setLineDash([30, 30])
      this.ctx.beginPath()
      this.ctx.moveTo(250, 700)
      this.ctx.lineTo(250, 10)
      this.ctx.stroke()
    },
    clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },
    setEventListeners() {
      document.onkeydown = e => {
        e.keyCode === 37 ? this.car.move('right') : null
        e.keyCode === 39 ? this.car.move('left') : null
      }
    },
    updateObstacles() {
      this.frames += 1;
      if (this.frames % 80 === 0) {
        let y = 0;
        let minWidth = 50;
        let maxWidth = 100;
        let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
        let minGap = 80;
        let maxGap = 320;
        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        this.obstacles.push(new Obstacle(this.ctx, width, 30, '#890000', gap, y));
        console.log(this.obstacles)
      }
      for (i = 0; i < this.obstacles.length; i += 1) {
        this.obstacles[i].y += 3;
        this.obstacles[i].drawObstacle();
      }
    },
    stop() {
      //document.location.reload();
      clearInterval(this.interval);
      this.ctx.fillStyle = 'black'
      this.ctx.fillRect(0, 0, 500, 200)
      this.ctx.font = "50px serif";
      this.ctx.fillStyle = "red";
      this.ctx.fillText("Game Over", 120, 95);
    },

    craswhith(car, obstacle) {
      if (car.x < obstacle.x + obstacle.width &&
        car.x + car.width > obstacle.x &&
        car.y < obstacle.y + obstacle.height &&
        car.y + car.height > obstacle.y) {
        console.log("hey")
        stop()
        return true
      }

    },
    score() {
      let points = Math.floor(this.frames / 5);
      this.ctx.font = "28px serif";
      this.ctx.fillStyle = "white";
      this.ctx.fillText("Score: " + points, 100, 550);
    }
  }


  class Car {
    constructor(ctx, x, y, width, height) {
      this.ctx = ctx
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.vel = 20
      this.car = undefined
    }
    draw() {
      this.car = new Image()
      this.car.src = "images/car.png"
      this.car.onload = () => { this.ctx.drawImage(this.car, this.x, this.y, this.width, this.height) }
    }
    move(dir) {
      if (this.x <= 60) {
        this.x = 60
      }
      if (this.x >= 375) {
        this.x = 375
      }
      dir === 'left' ? this.x += this.vel : null
      dir === 'right' ? this.x -= this.vel : null
    }

  }



  class Obstacle {
    constructor(ctx, width, height, color, x, y) {
      this.ctx = ctx
      this.width = width
      this.height = height
      this.color = color
      this.x = x
      this.y = y
      this.speedX = 0;
      this.speedY = 0;
    }
    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    drawObstacle() {
      let ctx = startGame.ctx
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }

  }

}

