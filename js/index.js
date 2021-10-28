window.onload = () => { 
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  


const fastAndFurious = {
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
  car: undefined,
  FPS: 60,

  init() {
    this.setContext()
    this.setDimensions()
    this.createCar()
    this.drawCar()
    this.setListeners()
    this.start()
    this.drawRoad()
    this.drawObstacles()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasSize.width = 500
    this.canvasSize.height = 700
  },

  drawRoad() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 500, 700)
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(50, 0, 400, 700)
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(60, 0, 10, 700)
    this.ctx.fillRect(430, 0, 10, 700)
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 5
    this.ctx.setLineDash([25, 45]);
    this.ctx.moveTo(250, 35);
    this.ctx.lineTo(250, 700);
    this.ctx.stroke();
  },

  drawObstacles() {
    this.ctx.fillStyle = "darkred";
    this.ctx.fillRect(100, 180, 200, 40)
    this.ctx.fillStyle = "darkred";
    this.ctx.fillRect(300, 30, 350, 40)
    this.ctx.fillStyle = "darkred";
    this.ctx.fillRect(300, 350, 350, 40)
    this.ctx.fillStyle = "darkred";
    this.ctx.fillRect(0, 200, 280, 40)
    this.ctx.fillStyle = "darkred";
    this.ctx.fillRect(0, 510, 280, 40)
  },
  drawAll() {
    this.obstacle.forEach(obstacle => obstacle.draw())
  },

  moveAll() {
    this.obstacle.forEach(obstacle=> obstacle.move())
  },

  createobstacle() {
    this.obstacle.push(new Obstacle(this.ctx, 0, 20, this.canvasSize, 200, 200, 5))
    this.obstacle.push(new Obstacle(this.ctx, 0, 200, this.canvasSize, 100, 100, 3))
    this.obstacle.push(new Obstacle(this.ctx, 0, 400, this.canvasSize, 400, 400, 7))
  },
  
  createCar() {
    this.car = new Car(this.ctx, 225, 600, 50, 80)
  },
  
  drawCar() {
    const imageCar = new Image()
    imageCar.src = 'images/car.png'
    imageCar.onload = () => this.ctx.drawImage(imageCar, 225, 600, 50, 80)
  },

  setListeners() {
    document.onkeydown = e => {
      console.log("La tecla: ", e.key)
         if (e.key === 'ArrowLeft') {
           this.car.moveLeft()
       }
         if (e.key === 'ArrowRight') {
           this.car.moveRight()
      }
    }
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
  },

  start() {
    setInterval(() => {
      this.clearScreen()
      this.drawRoad()
      this.car.draw()
      this.drawObstacles()
    }, 1000 / 60)
  },
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
    this.image.src = 'images/car.png'
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }
  

  moveLeft() {
    if (this.posX > 50) {
      this.posX -= 15
  
    }
  }

  moveRight() {
    if (this.posX < 400) {
    this.posX += 15

  }
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

    this.image = undefined
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  move() {
    this.posY += this.speed
  }

}
function startGame() {
  fastAndFurious.init()
  fastAndFurious.drawRoad()
  
  

};
};