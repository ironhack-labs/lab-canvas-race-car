window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

const app = {
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: 500, height: 700 },

  initGame() {
    this.setContext()
    this.drawFilledRectangle()
    this.drawRegularLines()
    this.drawDashLines()
    this.insertImage()
    this.setListeners()

  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  drawFilledRectangle() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(100, 30, 280, 500)

    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(120, 30, 240, 500)
  },

  drawRegularLines() {
    this.ctx.beginPath()
    this.ctx.moveTo(125, 30);
    this.ctx.lineTo(125, 530);
    this.ctx.stroke();
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 6
    this.ctx.closePath()

    this.ctx.beginPath()
    this.ctx.moveTo(355, 30);
    this.ctx.lineTo(355, 530);
    this.ctx.stroke();
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 6
    this.ctx.closePath();
  },

  drawDashLines() {
    this.ctx.beginPath();
    this.ctx.setLineDash([]);
    this.ctx.moveTo(240, 30);
    this.ctx.lineTo(240, 530);
    this.ctx.stroke();
    this.ctx.strokeStyle = 'white'
    this.ctx.closePath()
  },
  insertImage() {
    const imageInstance = new Image()
    imageInstance.src = './images/car.png'
    imageInstance.onload = () => this.ctx.drawImage(imageInstance, 220, 250, 50, 110)
  },
  setListeners() {
    document.onkeydown = e => {
      // console.log("La tecla: ", e.key)
      if (e.key === 'ArrowLeft') {
        this.car.moveLeft()
      }
      if (e.key === 'ArrowRight') {
        this.car.moveRight()
      }
    }
  },

}


function startGame() {
  app.initGame()




}
