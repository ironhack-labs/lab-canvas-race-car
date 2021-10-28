window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    roadCarGame.init();

  }



}

const roadCarGame = {
  name: 'Race App',
  description: 'Canvas app for basic shapes interaction',
  version: '1.0.0',
  author: 'Iñigo',
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
  car: undefined,
  background:undefined,
  obstacles: undefined,

  init() {
    this.setContext()
    this.setDimensions()
    this.setListeners();
  
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasDOM.setAttribute("width", 500)
    this.canvasDOM.setAttribute("height", 700)
    this.canvasSize.width = window.innerWidth
    this.canvasSize.height = window.innerHeight
  },
  loadImage () {
    this.background = new Image()
    this.background.src = '../images/road.png';
  },

  insertImage() {
    this.ctx.drawImage(this.background, 0, 0, 500, 700)
  },


  start() {
    setInterval(() => {
      this.clearScreen()
      this.insertImage()
      this.car.draw()
    }, 1000 / 70)
  },

  createCar() {
   this.car = new Car(this.ctx, 250 - 50, 700 - 180, 100, 150, 15)
  },

  createObstacle() {
    this.randomPositionX = Math.floor(Math.random() * 250 + 100);
    this.randomWidth = Math.floor(Math.random() * 250 + 100);
    this.randomHeight = Math.floor(Math.random() * 20 + 25);
    this.randomSpeed = Math.floor(Math.random() * 10 + 2);
    this.obtaclesArray.push(
      new Obstacles(
        this.ctx,
        this.randomPositionX,
        20,
        this.randomWidth,
        this.randomHeight,
        this.randomSpeed
      )
    );
  },


  setListeners() {
    document.onkeydown = e => {
      console.log("La tecla: ", e.key)
      e.key === 'ArrowLeft' ? this.car.moveLeft() : null
      e.key === 'ArrowRight' ? this.car.moveRight() : null
    }
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
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
    this.image.src = '../images/car.png'
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

class Obstacles {
  constructor(ctx, posX, posY, width, height, speed) {
    this.ctx = ctx
    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height
    this.speed = speed
    this.canvasSize = { heigth: 700 }
    this.init()
  }

  init() {
    this.draw()
  }

  draw() {
    this.ctx.fillStyle = "red"
    this.ctx.fillRect(
      this.posX,
      this.posY,
      this.width,
      this.height,
      this.speed,
    );
  }


}