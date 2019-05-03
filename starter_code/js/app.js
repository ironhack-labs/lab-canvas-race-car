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
    this.obstacles = []
    this.vel = 2
    this.setDimensions()
    this.setEventListeners()
    this.draw()
  },
  setDimensions: function () {
    this.canvasDom.setAttribute('width', this.winW)
    this.canvasDom.setAttribute('height', this.winH)
    this.canvasDom.style.backgroundColor = '#008100'
  },
  draw: function () {
    // console.log('entro en drawPlayer/app.js')
    // console.log('Jugador creado', this.player)
    this.obstacles.push(new Obstacle(this.ctx, this.winW, this.winH, this.vel))
    this.obstacles.push(new Obstacle(this.ctx, this.winW, this.winH, this.vel))
    this.obstacles.push(new Obstacle(this.ctx, this.winW, this.winH, this.vel))
    this.count = 0
    this.score = 0
    const start = setInterval(() => {
      //console.log(this.count)
      this.clear()
      this.road.drawRoad()


      this.player.drawPlayer()
      if (this.count % 100 == 0) {
        this.obstacles.push(new Obstacle(this.ctx, this.winW, this.winH, this.vel))

        console.log(this.obstacles)
        // this.obstacles.shift()
      }
      if (this.obstacles.length === 6) {
        this.obstacles.shift()
        this.score++
      }
      console.log(this.points)
      console.log('obstaculo Y', this.obstacles[0].posY)
      console.log('Player Y', this.player.initialPosY)
      this.count++;
      this.obstacles.forEach(obstacle => {
        obstacle.drawObstacle()
        obstacle.moveObstacle()
        // console.log(obstacle.posY)
        // if (obstacle.posY == this.player.initialPosY && obstacle.posX + obstacle.width == this.player.initialPosX) {
        //   alert('choque')
        // }
      })
    }, 1000 / 60)

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