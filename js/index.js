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
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },
  start() {
    setInterval(() => {
      this.clearScreen()
      this.ball.draw()
    }, 1000 / 50)
  },

  drawFilledRectangle() {
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.ctx.fillStyle = "grey"
    this.ctx.fillRect(50, 0, canvas.width - 100, canvas.height);

    this.ctx.fillStyle = "yellow"
    this.ctx.lineWidth = 2
    this.ctx.fillRect(70, 0, 15, canvas.height);

    this.ctx.fillStyle = "yellow"
    this.ctx.lineWidth = 2
    this.ctx.fillRect(415, 0, 15, canvas.height);

    this.ctx.strokeStyle = "yellow"
    this.ctx.beginPath();
    this.ctx.setLineDash([15, 15]);
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
    this.ctx.drawImage(this.image, 225, 600, 50, 100)
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