const RaceCarApp = {
  version: '1.0',
  name: 'Race Car app',
  description: 'App de carrera de obstáculos en coche en  HTML5 Canvas',
  author: 'Leti',
  canvasDom: undefined,
  ctx: undefined,
  winW: 600,
  winH: window.innerHeight,
  road: undefined,
  init: function (id) {
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this.setDimensions()
    this.setHandlers()
  },
  setDimensions: function () {
    this.canvasDom.setAttribute('width', this.winW)
    this.canvasDom.setAttribute('height', this.winH)
    this.canvasDom.style.backgroundColor = '#008100'
  },
  setHandlers: function () {
    window.onresize = () => this.setDimensions()
  },
  drawRoad: function () {
    console.log('entro en drawRoad')
    this.road = new Road(this.ctx, this.winW, this.winH)
  }


}