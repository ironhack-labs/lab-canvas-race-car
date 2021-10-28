window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    carApp.init()
  }
};

const carApp = {
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
  obstacle: [],
  FPS: 50,

  init() {
    this.setContext()
    this.setDimensions()
    this.setListeners()
    this.createCar()
    this.createObstacle()

    this.start()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasDOM.setAttribute("width", 500)
    this.canvasDOM.setAttribute("height", 700)
    this.canvasSize.width = 500
    this.canvasSize.height = 700
  },

  start() {
    setInterval(() => {
      this.clearScreen();
      this.road();
      this.car.draw();
      this.drawAllObstacles();
      this.moveAllObstacles();
    }, 1000 / this.FPS)
  },

  drawAllObstacles() {
    this.obstacle.forEach(obstacles => obstacles.draw())

  },

  moveAllObstacles() {
    this.obstacle.forEach(obstacles => obstacles.move())

  },

  createCar() {
    this.car = new Car(this.ctx, this.canvasSize.width / 2 -50, 500, 70, 120)
  },

  createObstacle() {
    this.obstacle.push(new Obstacle(this.ctx, 50, 200, this.canvasSize, 150, 100, 3))
  },

  setListeners() {
    document.onkeydown = e => {
      console.log("La tecla: ", e.key)

      e.key === 'ArrowLeft' ? this.car.moveLeft() : null;
      e.key === 'ArrowRight' ? this.car.moveRight() : null;
    }
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
  },


  road() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 500, 700)
    
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(this.canvasSize.width / 2 -200, 0, 400, 700)
    
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.canvasSize.width / 2 - 180, 0, 20, 700)

    this.ctx.fillRect(this.canvasSize.width / 2 + 160, 0, 20, 700)

    this.ctx.fillRect(this.canvasSize.width / 2 -10, 0, 10, 40)

    this.ctx.fillRect(this.canvasSize.width / 2 - 10, 70, 10, 40)

    this.ctx.fillRect(this.canvasSize.width / 2 - 10, 140, 10, 40)

    this.ctx.fillRect(this.canvasSize.width / 2 - 10, 210, 10, 40)

    this.ctx.fillRect(this.canvasSize.width / 2 - 10, 280, 10, 40)

    this.ctx.fillRect(this.canvasSize.width / 2 - 10, 350, 10, 40)

    this.ctx.fillRect(this.canvasSize.width / 2 - 10, 420, 10, 40)

    this.ctx.fillRect(this.canvasSize.width / 2 - 10, 490, 10, 40)

    this.ctx.fillRect(this.canvasSize.width / 2 - 10, 560, 10, 40)

    this.ctx.fillRect(this.canvasSize.width / 2 - 10, 630, 10, 40)

    this.ctx.fillRect(this.canvasSize.width / 2 - 10, 700 , 10, 40)
  }



}

class Car {
  constructor(ctx, posX, posY, width, height) {

    this.ctx = ctx

    this.posX = posX
    this.posY = posY

    this.width = width
    this.height = height

    this.image = undefined

    this.init()
  }

  init() {
    this.image = new Image()
    this.image.src = '../images/car.png'
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  moveLeft() {
    this.posX -= 20
  }

  moveRight() {
    this.posX += 20
  }

}

class Obstacle {
  constructor(ctx, posX, posY, canvasSize, width, height, speed) {

    this.ctx = ctx
    
    this.posX = posX
    this.posY = posY

    this.canvasSize = canvasSize

    this.width = width
    this.height = height

    this.speed = speed
    

  }



  draw() {
    this.ctx.fillStyle = "red"
    this.ctx.fillRect(this.canvasSize.width / 2, 30, 100, 100)
  }

  move() {
    this.posY += this.speed
  }




}