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
    this.turnSpeed = 4
    this.direction = ''
    const grassWidth = 30

  }

  drawCar(){
    this.moveCar(this.direction)
    ctx.drawImage(this.img, this.pos[0], this.pos[1], this.width, this.height)
  }
  
  moveCar(direction){
    if (direction === 'left') {
      if (this.pos[0]-this.turnSpeed < this.grassWidth){
        this.pos[0] = this.grassWidth
      } else {
        this.pos[0] -= this.turnSpeed
      }
    } else if (direction === 'right') {
      if (this.pos[0]+this.width+this.turnSpeed > canvas.width-this.grassWidth){
        this.pos[0] = canvas.width-this.grassWidth-this.width
      } else {
        this.pos[0] += this.turnSpeed
      }
    }
  }
}

const car = new Car()

class Obstacle{
  constructor(){
    this.img = new Image()
    this.img.src = 'images/obstacle.png'
    this.width = this.img.naturalWidth*0.5
    this.height = this.img.naturalHeight*0.5
    this.pos = [0, -this.height]
  }

  generatePos(){
    this.pos[0] = Math.floor((Math.random())*(canvas.width-this.width))
  }
}

class Game {
  constructor(){
    this.pauseSound = new Audio('audio/pause.mp3');
    this.bgImg = new Image()
    this.bgImg.src = 'images/road.png'
    this.width = this.bgImg.naturalWidth*0.5
    this.height = this.bgImg.naturalHeight*0.5
    this.bgPosY = 0
    this.speed = 2
    this.obstacles = []
    this.newObject = true
    this.pause = false
    this.gameOver = false
    this.score = 0
    this.obstacleGenerationRate = 2000
  }
  
  startGame(){
    this.updateGame()
  }
  
  updateGame(){
    this.displayScore()
    if (this.gameOver){
      this.showGameOver()
    } else if (this.pause){
      this.showPause()
    } else {
      this.updateBg()
      this.drawBackground()
      car.drawCar()
      this.generateObstacle()
      this.drawObstacles()
      window.requestAnimationFrame(()=>this.updateGame())
    }
  }

  showPause(){
    ctx.font = "900 50px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Pause", canvas.width/2, canvas.height/2);
  }

  showGameOver(){
    ctx.font = "900 50px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("You Crashed!", canvas.width/2, canvas.height/2-70);
    ctx.fillText(`Your score is: ${this.score}`, canvas.width/2, canvas.height/2);
    ctx.fillText("Game Over", canvas.width/2, canvas.height/2+70);
  }

  drawBackground(){
    if (this.bgPosY > canvas.height) {
      this.bgPosY = 0
    }
    ctx.drawImage(this.bgImg, 0, this.bgPosY, canvas.width, canvas.height)
    ctx.drawImage(this.bgImg, 0, this.bgPosY-canvas.height, canvas.width, canvas.height)
  }
  
  updateBg(){
    this.bgPosY += this.speed
  }

  generateObstacle(){
    if (this.newObject){
      const timeInterval = Math.floor((Math.random()+1)*this.obstacleGenerationRate)
      setTimeout(()=>{
        const obstacle = new Obstacle()
        obstacle.generatePos()
        this.obstacles.push(obstacle)
        this.newObject = true
      }, timeInterval)
      this.newObject = false
    }
  }

  drawObstacles(){
    if (this.obstacles.length > 0){
      this.obstacles.forEach(obstacle=>{
        ctx.drawImage(obstacle.img, obstacle.pos[0], obstacle.pos[1], obstacle.width, obstacle.height)
        obstacle.pos[1] += this.speed
        this.checkCollision(obstacle)
        this.checkPassedObstacle(obstacle)
      })
    }
  }
  
  checkCollision(obs){
    if (car.pos[0] > obs.pos[0] && car.pos[0] < obs.pos[0]+obs.width){
      if (car.pos[1] < obs.pos[1]){
        this.gameOver = true
      }
    }
    if (car.pos[0]+car.width > obs.pos[0] && car.pos[0]+car.width < obs.width){
      if (car.pos[1] < obs.pos[1]){
        this.gameOver = true
      }
    }
    if (car.pos[0] < car.grassWidth || car.pos[0]+car.width > canvas.width-car.grassWidth){
      this.gameOver = true
    }
  }

  checkPassedObstacle(obs){
    if (obs.pos[1] > canvas.height){
      this.score++
      this.obstacles.splice(this.obstacles.indexOf(obs), 1)
    }
  }

  displayScore(){
    document.getElementById('score').innerText = `SCORE: ${game.score}`
  }
}

const game = new Game()

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.startGame();
    document.getElementById('start-button').innerText = 'Make it harder!'
  };
};

const checkEvents = ()=>{
  document.addEventListener('keydown', (event)=>{
    car.direction = {
      a: 'left',
      d: 'right'
    }[event.key]
  })
  document.addEventListener('keyup', ()=>{
    car.direction = ''
  })
  document.addEventListener('keydown', (event)=>{
    if (event.key === 'p' || event.code === 'Space') {
      if (!game.pause){game.pauseSound.play()}
      game.pause = !game.pause
      game.updateGame()
    }
  })
}

checkEvents()
