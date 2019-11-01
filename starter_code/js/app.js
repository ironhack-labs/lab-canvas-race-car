window.onload = function () {





  const carGame = {
    title: 'Juego de no te choques',
    author: 'Dani Hita & Alejandro Alarcó',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    wWidth: undefined,
    wHeight: undefined,
    obstacles: [],
    frames: 1,

    init(id) {
      this.canvasDom = document.getElementById(id)
      this.ctx = this.canvasDom.getContext('2d')
      this.setDimensions()

      this.car = new Car(this.ctx, './images/Teo.png')
   
    },
    setDimensions() {
      this.canvasDom.setAttribute('height', 800)
      this.canvasDom.setAttribute('width', 400)
      this.wHeight = 800;
      this.wWidth = 400
      document.getElementById('myCanvas').style.background = '#008100'
    },

    drawRoad() {
      this.ctx.fillStyle = '#808080'
      this.ctx.fillRect(20, 0, 360, this.wHeight)

    },

    drawLeftLine() {
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 5
      this.ctx.setLineDash([0, 0])
      this.ctx.beginPath()
      this.ctx.moveTo(30, 0)
      this.ctx.lineTo(30, this.wHeight)
      this.ctx.stroke()

    },

    drawRightLine() {
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 5
      this.ctx.setLineDash([0,0])
      this.ctx.beginPath()
      this.ctx.moveTo(370, 0)
      this.ctx.lineTo(370, this.wHeight)
      this.ctx.stroke()

    },

    drawMiddleLine() {
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 3
      this.ctx.setLineDash([30, 15])
      this.ctx.beginPath()
      this.ctx.moveTo(200, 0)
      this.ctx.lineTo(200, this.wHeight)
      this.ctx.stroke()
    },

    clearScreen() {
      this.ctx.clearRect(0, 0, this.wWidth, this.wHeight)
    },

    start() {
      setInterval(() => {
        carGame.clearScreen()
        carGame.drawRoad()
        carGame.drawLeftLine()
        carGame.drawRightLine()
        carGame.drawMiddleLine()
        carGame.drawScoreBox()
        carGame.score()
        this.manageObstacles()
        this.car.drawCar()
      }, 10)
      
      carGame.setEventListner()
    },

    setEventListner() {
      document.onkeydown = e => {
        switch (e.keyCode){
          case 37:
            this.car.goLeft() 
            break
          case 39:
            this.car.goRight()
            break
        }
      }

    },

    updateGameArea() {
      this.clearScreen()
      this.manageObstacles()
    },

    manageObstacles() {
      let random = Math.floor(Math.random() * 300)
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].update()
      }

      this.frames += 1

      if (this.frames % 70 === 0) {
        this.obstacles.push(new Obstacle(this.ctx, random, 20, random, 0))
      }
      console.log(this.obstacles)

    },

    score() {
      let points = Math.floor(this.frames/60)
      //this.ctx.fillRect(230, 20, 120, 50)
      this.ctx.font = "18px sans-serif"
      //this.ctx.fillStyle = "black"
      this.ctx.fillText("Score: " + points,250, 50) 
    },

    drawScoreBox() {
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 40
      this.ctx.setLineDash([0, 0])
      this.ctx.beginPath()
      this.ctx.moveTo(230, 45)
      this.ctx.lineTo(350, 45)
      this.ctx.stroke()

    },

  

  }



  carGame.init('myCanvas')
  carGame.drawRoad()
  carGame.drawLeftLine()
  carGame.drawRightLine()
  carGame.drawMiddleLine()
  carGame.drawScoreBox()
  


  document.getElementById("start-button").onclick = function () {

    carGame.start()

  };



};



