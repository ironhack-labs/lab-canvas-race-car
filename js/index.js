const carGame = {
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
  image: undefined,

  init() {
    this.setContext()
    this.drawFilledRectangle()
    this.imageInit()
    this.drawCar()
    this.start()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  start() {
    setInterval(() => {
      this.clearScreen()
      this.image.draw()
    }, 1000 / 50)


  },
  drawFilledRectangle() {
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.ctx.fillStyle = "grey"
    this.ctx.fillRect(50, 0, canvas.width - 100, canvas.height);

    this.ctx.fillStyle = "white"
    this.ctx.lineWidth = 2
    this.ctx.fillRect(70, 0, 15, canvas.height);

    this.ctx.fillStyle = "white"
    this.ctx.lineWidth = 2
    this.ctx.fillRect(415, 0, 15, canvas.height);

    this.ctx.strokeStyle = "white"
    this.ctx.beginPath();
    this.ctx.setLineDash([10, 20]);
    this.ctx.moveTo(245, 0);
    this.ctx.lineTo(245, canvas.height);
    this.ctx.stroke();

  },

  imageInit() {
    this.image = new Image()
    this.image.src = "../images/car.png"
    //console.log(this.image, this.image.src);
  },

  drawCar() {
    this.ctx.drawImage(this.image, 300, 600, 50, 100)
    // this.ctx.drawImage(this.image, 0, 0, 250, 350)

  },

}







class car {
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
    this.image.src = "image/car.png"
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  moveLeft() {
    console.log("Muevo a la izquierda", this.posX)
    this.posX -= 20
  }

  moveRight() {
    console.log("Muevo a la derecha", this.posX)
    this.posX += 20
  }
}













window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };



  function startGame() {//todo lo que sea del juego va dentro de esta funcion

    carGame.init()
  }

};
