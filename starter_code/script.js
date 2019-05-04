window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    RaceApp("mycanvas");
  };
}

const RaceApp = {
  version: '1.0',
  name: 'Race app',
  description: 'App de Coches en HTML5 Canvas',
  author: 'Anthony',
  canvasDom: undefined,
  ctx: undefined,
  // winW: 400,
  // winH: 900,
  car: undefined,
  canvasSizes: {
    w: 400,
    h: 800
  },

  init: function (id, imgUrl) {
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this.canvasSizes.w = 400
    this.canvasSizes.h = 800
    this.setDimensions()
    this.setHandlers()
    this.setEventListeners()
    this.drawControlledCar(imgUrl)
  },
  setDimensions: function () {
    this.canvasDom.setAttribute('width', this.canvasSizes.w)
    this.canvasDom.setAttribute('height', this.canvasSizes.h)

  },
  setHandlers: function () {
    window.onresize = () => this.setDimensions()
  },
  drawControlledCar: function (imgUrl) {
    this.car = new Car(this.ctx, imgUrl, this.canvasSizes)

    setInterval(() => {
      this.clear()
      this.car.drawCar()
    }, 20)
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvasSizes.w, this.canvasSizes.h)
  },
  setEventListeners: function () {
    document.onkeydown = e => {
      if (e.keyCode === 37) this.car.moveLeft()
      if (e.keyCode === 39) this.car.moveRight()
    }
  }
}



class Car {
  constructor(ctx, url, sizes) {

    this.img = new Image()
    this.img.src = url
    this.width = 159 * .38
    this.height = 358 * .38
    this.ctx = ctx
    this.canvasSizes = sizes

    this.posX = 0
    this.posY = 650
    this.velX = 20


  }
  drawCar() {

    this.ctx.fillStyle = "grey";

    this.ctx.fillRect(0, 0, 400, 800);

    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 30, 800);

    this.ctx.fillStyle = "green";
    this.ctx.fillRect(370, 0, 30, 800);

    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 12;
    this.ctx.setLineDash([80, 25]);
    this.ctx.beginPath();
    this.ctx.moveTo(200, 0);
    this.ctx.lineTo(200, 800);
    this.ctx.stroke();



    this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height)
  }

  moveLeft() {
    if (this.posX > 0) this.posX -= this.velX
  }

  moveRight() {
    if (this.posX < this.canvasSizes.w - this.width) this.posX += this.velX
  }


}
