const RaceCarApp = {
  version: '1.0',
  name: 'Race Car app',
  description: 'App de carrera de obstáculos en coche en  HTML5 Canvas',
  author: 'Leti',
  winW: 600,
  winH: window.innerHeight,

  init: function (id) {
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this.road = new Road(this.ctx, this.winW, this.winH)
    this.player = new Player(this.ctx, this.winW, this.winH)
    this.setDimensions()
    this.setHandlers()
    this.setEventListeners()
    this.draw()
  },
  setDimensions: function () {
    this.canvasDom.setAttribute('width', this.winW)
    this.canvasDom.setAttribute('height', this.winH)
    this.canvasDom.style.backgroundColor = '#008100'
  },
  setHandlers: function () {
    window.onresize = () => this.setDimensions()
  },
  draw: function () {
    // console.log('entro en drawPlayer/app.js')
    // console.log('Jugador creado', this.player)

    setInterval(() => {
      this.clear()
      this.road.drawRoad()
      this.player.drawPlayer()
    }, 400)
    /* setInterval(() => {
      this.player.drawPlayer()
    }, 50) */
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.winW, this.winH)
  },
  setEventListeners: function () {
    document.onkeyup = e => {
      console.log(e)
      if (e.keyCode === 37) this.player.moveLeft()
      if (e.keyCode === 39) this.player.moveRight()
    }
  }


}