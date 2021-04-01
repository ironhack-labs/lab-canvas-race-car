const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

class Car {
  constructor(){
    this.img = new Image()
    this.img.src='images/car.png'
    this.width = this.img.naturalWidth*0.5
    this.height = this.img.naturalHeight*0.5
    this.bottomMargin = 5
    this.pos = [canvas.width*0.5-this.width*0.5, canvas.height-this.height-this.bottomMargin]
  }
  drawCar(){
    ctx.drawImage(this.img, this.pos[0], this.pos[1], this.width, this.height)
  }
}

const car = new Car()

class Game {
  constructor(){
    this.bgImg = new Image()
    this.bgImg.src = 'images/road.png'
    this.width = this.bgImg.naturalWidth*0.5
    this.height = this.bgImg.naturalHeight*0.5
    this.bgPosY = 0
    this.speed = 2
  }
  
  startGame() {
    console.log('starting game')
    this.updateGame()
  }
  
  updateGame(){
    console.log('updating')
    this.updateBg()
    this.drawBackground()
    car.drawCar()
    window.requestAnimationFrame(()=>this.updateGame())
  }
  
  drawBackground(){
    if (this.bgPosY > canvas.height) {
      console.log('reseting y')
      this.bgPosY = 0
    }
    ctx.drawImage(this.bgImg, 0, this.bgPosY, canvas.width, canvas.height)
    ctx.drawImage(this.bgImg, 0, this.bgPosY-canvas.height, canvas.width, canvas.height)
  }
  
  updateBg(){
    console.log('updating bg')
    this.bgPosY += this.speed
    console.log('new pos:', this.bgPosY)
  }
}

const game = new Game()

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.startGame();
  };
};

document.addEventListener('keydown', (event)=>{
  car.direction = {
    a: 'left',
    d: 'right'
  }[event.key]
})