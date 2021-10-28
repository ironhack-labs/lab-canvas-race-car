window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    interactionApp.init();
  }
}

const interactionApp = {
  name: 'LAB Ironhack Canvas Game',
  description: 'Canvas app for basic shapes interaction',
  version: '1.0.0',
  author: 'Fernando Cardona',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
  car: undefined,
  obstacles: [],
  background:undefined,
  FPS: 50,
  framesCounter: 0,

  init() {
    this.setContext();
    this.setDimensions();
    this.setListeners();
    this.createCar();
    this.createObstacles();
    this.loadImage (); 

    this.start();
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasDOM.setAttribute("width", 500);
    this.canvasDOM.setAttribute("height", 700);
    this.canvasSize.width = window.innerWidth
    this.canvasSize.height = window.innerHeight
  },
  loadImage () {
    this.background = new Image();
    this.background.src = 'images/road.png';
  },

  insertImage() {
    this.ctx.drawImage(this.background, 0, 0, 500, 700)
  },


  start() {
    setInterval(() => {
      this.framesCounter++
      this.framesCounter % 40 === 0 ? console.log("createObstacles") : null
      this.framesCounter % 100 === 0 ? this.stop() : null

      this.clearScreen();
      this.insertImage();
      this.drawAll();
      this.moveAll();

      this.car.draw();
      //this.obstacles.draw();

    },1000 / this.FPS)
  },
  drawAll() {
    this.obstacles.forEach(obstacle => obstacle.draw())
  },
  moveAll() {
    this.obstacles.forEach(obstacle => obstacle.move())
  },

  createCar() {
   this.car = new Car(this.ctx, 250 - 50, 700 - 180, 100, 150, 15);
  },
  createObstacles() {
    this.obstacles.push(new Obstacle(this.ctx, 200, 0, this.canvasSize, 85, 115, 5));
    this.obstacles.push(new Obstacle(this.ctx, 300, 0, this.canvasSize, 85, 115, 3));
    this.obstacles.push(new Obstacle(this.ctx, 500, 00, this.canvasSize, 85, 115, 7));
  },
 
  setListeners() {
    document.onkeydown = e => {
      //console.log("La tecla: ", e.key)
      e.key === 'ArrowLeft' ? this.car.moveLeft() : null
      e.key === 'ArrowRight' ? this.car.moveRight() : null
    }
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
  },
  stop() {
    clearInterval(this.intervalId)
  }
}

class Car {
  constructor(ctx, posX, posY, width, height, speed) {
    this.ctx = ctx

    this.posX = posX
    this.posY = posY

    this.canvasSize = {width:500,height:700}

    this.width = width
    this.height = height

    this.speed = speed

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

  moveLeft(){
    this.posX -= this.speed
  }

  moveRight(){
    this.posX += this.speed
  }

  
}

class Obstacle {
  constructor(ctx, posX, posY, width, height, speed) {
    this.ctx = ctx

    this.posX = posX
    this.posY = posY

    this.canvasSize = {width:500,height:700}

    this.width = width
    this.height = height

    this.speed = speed

    this.image = undefined

    this.init()
  }

  init() {
    this.image = new Image()
    this.image.src = 'images/obstacle.png'
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  move() {
    if (this.posY + this.width > this.canvasSize.width || this.posY < 0) {
      this.turn();
    }
    this.posY += this.speed
  }

  turn() {
    this.speed = this.speed * -1
  }
}