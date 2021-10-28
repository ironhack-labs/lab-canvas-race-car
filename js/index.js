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
  background:undefined,

  init() {
    this.setContext()
    this.setDimensions()
    this.setListeners()
    this.createCar()
    this.loadImage () 
    this.start()
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
    this.background.src = '../images/road.png';
  },

  insertImage() {
    this.ctx.drawImage(this.background, 0, 0, 500, 700)
  },


  start() {
    setInterval(() => {
      this.clearScreen();
      this.insertImage();
      this.car.draw()
    }, 1000 / 70)
  },

  createCar() {
   this.car = new Car(this.ctx, 250 - 50, 700 - 180, 100, 150, 15)
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