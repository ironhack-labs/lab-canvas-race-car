window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {


    road.init('canvas')



  }





};

const road = {

  canvasNode: undefined,
  ctx: undefined,
  gameSize: { w: 500, h: 700 },
  framesIndex: 0,
  car: undefined,
  box: [],

  init(canvasID) {
    this.canvasNode = document.querySelector(`#${canvasID}`)
    this.ctx = this.canvasNode.getContext('2d')
    console.log('EL CONTEXTO:', this.ctx)

    // this.draw();
    this.createCar()
    this.setEventListeners()
    this.start()

  },
  draw() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(25, 0, 450, this.gameSize.h)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(50, 0, 400, this.gameSize.h)

    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(75, 0, 350, this.gameSize.h)

    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.setLineDash([40, 20])      // <--
    this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()

  },
  createCar() {
    console.log('hola')
    this.car = new Car(this.ctx, this.gameSize, 100, 500, 100, 120, 50);
    // car1.draw()
  },

  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
      // this.createBox()
      this.framesIndex++      // <- ayudita
    }, 50)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  setEventListeners() {
    document.onkeyup = event => {
      const { key } = event
      if (key === 'ArrowLeft') {
        this.car.moveLeft()
      }
      if (key === 'ArrowRight') {
        this.car.moveRight()
      }
    }
  },



  createBox() {

    let rand=Math.floor(Math.random() * (this.gameSize.w -100)) + this.gameSize.w ;
    this.box.push(
      new Box(this.ctx, this.gameSize, 170, this.framesIndex*1, 100, -10, 1, "red"),
      new Box(this.ctx, this.gameSize, 175, this.framesIndex*2, 250, -20, 1, "blue"),
      new Box(this.ctx, this.gameSize, 90, this.framesIndex*3, 170, -30, 1, "green"),
      new Box(this.ctx, this.gameSize, 100, this.framesIndex*4, 200, -40, 1, "orange"),

    )
  },
  drawAll() {
    // this.clearAll()

    this.draw();
    this.car.draw()
    this.createBox()
    // this.box.forEach(eachBox => this.box.draw())

    // if (this.framesIndex % 30 === 0)      // <- ayudita :3;

    // this .box.forEach(eachCamel => box.draw())

  },




}
