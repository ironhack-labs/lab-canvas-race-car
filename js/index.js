window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    raceCarApp.init('canvas')
  }
};

const raceCarApp = {
  name: "Canvas Car Race",
  author: "David Diaz",
  version: '1.0.0',
  license: undefined,
  description: "Game Racer Car in Canvas",
  canvasId : undefined,
  ctx: undefined,
  car: undefined,
  obstacle: undefined,
  score: 0,
  frames: 0,
  random1: (Math.floor(Math.random() * (50 - 200) + 200)),
  random2: (Math.floor(Math.random() * (150 - 250) + 250)),
  obstaclesDensity: 20,
  canvasSize: {
    w: undefined,
    h: undefined
  },
  canvasEjes: {
    x: 50,
    y:undefined
  },

  init(id) {
    this.canvasId = id
    this.ctx = document.getElementById(this.canvasId).getContext('2d')
    this.setDimension()
    this.setEventHandlers()
    this.setEventListener()
    this.drawRoadGrass()
    this.drawLineWhite()
    this.drawDiscontinueLines()
    this.drawCar('car.png')
    
  },
  
  setDimension() {
    document.getElementById(this.canvasId).setAttribute('width', 500)
    document.getElementById(this.canvasId).setAttribute('height', 700)
    this.canvasSize = {
      w: 500,
      h:700
    }
  },

  setEventHandlers() {
    window.onresize = () => this.setDimension()
  },

  drawRoadGrass() {
    this.ctx.fillStyle = '#26AC02'
    this.ctx.fillRect(0, 0, 30, this.canvasSize.h)
    this.ctx.fillRect(470,0,30,this.canvasSize.h)    
  },
  drawLineWhite() {
    this.ctx.fillStyle = '#FFFFFF'
    this.ctx.fillRect(40, 0, 10, this.canvasSize.h)
    this.ctx.fillRect(450, 0, 10, this.canvasSize.h)  
  },
  drawDiscontinueLines() {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.setLineDash([40, 80])
    this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
    this.ctx.lineTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
    this.ctx.closePath()
    this.ctx.stroke()
  },

  generateObstacle() {
    this.obstacle = new Obstacles(this.ctx, this.canvasSize, )
   
      // this.ctx.fillStyle = '#DC4040'
      // this.ctx.fillRect(50, 10, 200, 40)
      // this.ctx.canvasEjes.y += 15
    

  },

  drawCar(imageName) {
    this.car = new Car(this.ctx, this.canvasSize.w / 2 - 50, this.canvasSize.h - 110, 100, 100, this.canvasSize, imageName)
    setInterval(() => {
      this.score++
      this.frames++
      this.frames % this.obstaclesDensity === 0 ? this.generateObstacle() : null
      this.clearScream()
      //this.generateObstacle()
      this.drawRoadGrass()
      this.drawLineWhite()
      this.drawDiscontinueLines()
      this.car.draw()
      
    }, 50)
  },


  setEventListener() {
    document.onkeydown = e => {
      e.keyCode === 37 ? this.car.move('left') : null
      e.keyCode === 39 ? this.car.move('right') : null
    }
  },
  clearScream() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  }


  
}

class Car {
  constructor(ctx, posX, posY, carW, carH, canvasSize, imageName) {
    this.ctx = ctx
    this.carPos = {
      x: posX,
      y: posY
    }
    this.carSize = {
      w: carW,
      h: carH
    }
    this.canvasSize = canvasSize
    this.imageName = imageName
    this.imageInstance = undefined
    this.init()
  }

  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = `images/${this.imageName}`
  }

  draw() {
    this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  move(dir) {
    dir === 'left' ? this.carPos.x -= 15 : null
    dir === 'right' ? this.carPos.x += 15 : null
    if (this.carPos.x <= 30 || this.carPos.x >= 380) {
      this.totalScore = raceCarApp.score / 4
      alert(`FIN DEL JUEGO. \n SCORE: ${this.totalScore}`)
      document.location.reload()
    }
  }
}

class Obstacles {
  constructor(ctx, canvasSize) {
    this.ctx = ctx
    this.obstaclePos = {
      x: (Math.floor(Math.random() * (50 - 200) + 200)),
      y: 0
    }
    this.obstacleSize = {
      w: (Math.floor(Math.random() * (150 - 250) + 250)),
      h: 40
    }
    this.canvasSize = canvasSize
    this.speed = 10
    this.init()
  }
  init() {
    //this.obstacleInstance = new Obstacles()
  }

  draw() {
    // this.moveObstacle()
    this.ctx.fillStyle = '#DC4040'
    this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
  }
  moveObstacle() {
    if (this.obstaclePos.y <= 0 ) {
      this.obstaclePos.y += this.speed
    } 
    

  }


}




