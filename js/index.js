

const raceGame = {
  
  name: 'Race Car Game',
  author: 'Belén Olías Ericsson',
  version: '1.0.0',
  license: undefined,
  description: 'Canvas game with basic forms and collisions',
  canvasId: undefined,
  ctx: undefined,
  canvasSize: {
    w: undefined,
    h: undefined
  },
  frames: 0,
  score: 0,
  

  init(id) {
    
    this.canvasId = id
    this.ctx = document.getElementById(this.canvasId).getContext('2d')
    this.setDimensions()
    this.setEvent()
    this.image = new Image
    this.image.src = '/images/car.png'
  },

  setDimensions() {
     
    document.getElementById(this.canvasId).setAttribute('width', (window.innerWidth/3))
    document.getElementById(this.canvasId).setAttribute('height', window.innerHeight)
    this.canvasSize = {
      w: window.innerWidth / 3,
      h: window.innerHeight
    }
  },

  
  drawRoad() {

    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(10, 10, 365, 650)
    
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(35, 10, 315, 650)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(45, 0, 15, 660)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(325, 0, 15, 660)
    
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = "white"
    this.ctx.setLineDash([25, 40])
    this.ctx.beginPath()
    this.ctx.moveTo(190, 0)
    this.ctx.lineTo(190, 660)
    this.ctx.stroke()

  },

  drawScore() {
    this.ctx.fillText('Score '+this.score, 25, 40)
    this.ctx.font = '20px sans-serif'
  },

  
  clearScreen() {

    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },

  collisionDetection() {
    if (obsPos.x < carPos.x + carWeight &&
      obsPos.x + carWeight > carPos.x &&
      obsPos.y < carPos.y + carHeigth &&
      obsHeigth + obsPos.y > carPos.y) {
      alert('Collision detected!')
      }
  },

  

  drawCar() {

    this.car = new Car(this.ctx, 135, 530, 100, 100, this.canvasSize, '/images/car.png')
    this.car.draw()
    
    const obstacle1 = new Obstacle(this.ctx, 150, 10, 50, 50, this.canvasSize, 2.7, '/images/ladrillo.png')
    const obstacle2 = new Obstacle(this.ctx, 240, 10, 50, 50, this.canvasSize, 5, '/images/ladrillo.png')
    const obstacle3 = new Obstacle(this.ctx, 290, 10, 50, 50, this.canvasSize, 3.8, '/images/ladrillo.png')
    const obstacle4 = new Obstacle(this.ctx, 60, 10, 50, 50, this.canvasSize, 4.2, '/images/ladrillo.png')

    const obstacles = [obstacle1, obstacle2, obstacle3, obstacle4]

    obstacles.forEach(elm => elm.drawObs())
    
    setInterval(() => {
      this.frames++
      this.clearScreen()
      this.drawRoad()
      this.drawScore()
      this.score++
      this.car.draw()
      obstacles.forEach(elm => elm.drawObs())
      this.collisionDetection()
    }, 50)

  },

  setEvent() {
    window.onresize = () => this.setDimensions()
    
    window.onload = () => {
      document.getElementById('start-button').onclick = () => {
        this.drawCar()
      }
    }

     document.onkeydown = e => {
       e.keyCode === 37 ? this.car.moveCar('left') : null
       e.keyCode === 39 ? this.car.moveCar('right') : null
     }

  },
}

class Car {
   
  constructor(ctx, carPosX, carPosY, carWeight, carHeigth, canvasSize, imageName) {
    this.ctx = ctx
    this.carPos = {
        x: carPosX,
        y: carPosY
    }
    this.carSize = {
      w: carWeight,
      h: carHeigth
    }
    this.image = undefined
    this.imageName = imageName
    this.canvasSize = canvasSize
    this.init()
  }

  init() {
    this.image = new Image()
    this.image.src = '/images/car.png'
  }

  draw() {
    this.ctx.drawImage(this.image, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    this.moveCar()

  }

  moveCar(dir) {

    dir === 'left' ? this.carPos.x -= 5 : null
    dir === 'right' ? this.carPos.x += 5 : null

    this.carPos.x >= 320 - this.carSize.w ? this.carPos.x -= 5 : null
    this.carPos.x <= 165 - this.carSize.w ? this.carPos.x += 5 : null
     
  }

}


class Obstacle {

  constructor(ctx, obsPosX, obsPosY, obsWeight, obsHeigth, canvasSize, speed, imageName) {
    this.ctx = ctx
    this.obsPos = {
      x: obsPosX,
      y: obsPosY
    }
    this.obsSize = {
      w: obsWeight,
      h: obsHeigth
    }
    this.speed = speed
    this.image = undefined
    this.imageName = imageName
    this.canvasSize = canvasSize
    this.init()
  }

  init() {
    this.image = new Image()
    this.image.src = '/images/ladrillo.png'
  }

  drawObs() {
   
    this.moveObstacle()
    this.ctx.drawImage(this.image, this.obsPos.x, this.obsPos.y, this.obsSize.w, this.obsSize.h)

  }

  moveObstacle() {

    if (this.obsPos.y < 700) {
      this.obsPos.y += this.speed
    } else {
      this.obsPos.y = 0
    }

  }

}