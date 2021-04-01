const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

class Obstacle {
  constructor(){
    this.width = (Math.random()*ctx.canvas.width/2)
    this.height = 20
    this.x =  (Math.random()*ctx.canvas.width)
    this.y = 0
  }

  renderObs(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  moveObs(){
    this.y += 4
  }
}

class Car {
  constructor() {
    this.img = ''
    this.width = 45
    this.height = 90
    this.x = ctx.canvas.width / 2 - 25
    this.y = ctx.canvas.height - 110
  }
  
  renderImage() {
    this.img = new Image()
    this.img.src = 'images/car.png'
    this.img.onload = () => {
      this.drawSelf()
    }
  }
  
  drawSelf() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  
  moveRight() {
    this.x += 5
  }
  
  moveLeft() {
    this.x -= 5
  }
}

const car = new Car()
const obst = new Obstacle()

const checkForBoundries = () => {
  if (car.x > 400) {
    car.x = 400
  }
  if (car.x < 65) {
    car.x = 65
  }
}

const clearCanvas = () => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

const updateCanvas = () => {
  clearCanvas()
  checkForBoundries()
  drawCanvas()
  moveObs()
  requestAnimationFrame(updateCanvas)
}

//Draw

const drawCanvas = () => {
  ctx.drawImage(road, 0, 0, ctx.canvas.width, ctx.canvas.height)
  car.drawSelf()
}

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      console.log('left', car);
      break;
      case 39:
        car.moveRight();
        console.log('right', car);
        break;
      }
      updateCanvas();
    })
    
    const road = new Image()
    road.src = 'images/road.png'
    
    window.onload = () => {
      document.getElementById('start-button').onclick = () => {
        startGame();
      };
      
      function startGame() {
        ctx.drawImage(road, 0, 0, ctx.canvas.width, ctx.canvas.height)
        car.renderImage();
      }
    };
    updateCanvas()