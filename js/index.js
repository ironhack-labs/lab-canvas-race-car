
  document.getElementById('start-button').onclick = () => {
    gameStatus = "playing"
    startGame(); 
  }
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d") 

const imgroad = new Image()
imgroad.src = "./images/road.png"

const imgcar = new Image()
imgcar.src = "./images/car.png"

const obstacles = []

let score = 1000;
let gameStatus = "playing"

function startGame(){
  
  update()
}

class Car {
  constructor(){
    this.x = 220,
    this.y = 500,
    this.w = 60,
    this.h = 120,
    this.speed = 30,
    this.img = imgcar
  }
  draw(){
    ctx.drawImage (this.img,this.x,this.y,this.w, this.h)
  }
  moveLeft(){
    if(this.x < 1){
      return
    }
    this.x -= this.speed
  }
  moveRight(){
     if(this.x > canvas.width - this.h -1){
       return
     }
     this.x += this.speed
  }
  
}

const newCar = new Car


document.addEventListener("keydown", (eve) => {
  console.log(eve)
  if(eve.keyCode === 37){
    newCar.moveLeft()
  } else if (eve.keyCode === 39){
    newCar.moveRight()
  }
})

const changeText = () => {
  ctx.fillText("More Speed", 15, canvas.height / 2 + 35)
}


const drawScore = () => {
  ctx.fillStyle = "black"
  ctx.font = "20px Arial"
  ctx.fillText(score, canvas.width / 2 , canvas.height/2)

}

const update = () => {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  drawScore()
  
  if (gameStatus === "finished") {
    return
  }

  ctx.drawImage(imgroad, 0, 0, 500, 700);
  newCar.draw()
  score++
  obstacles.forEach(obstacle => {
    if (obstacle.y < canvas.height) {
      obstacle.draw()
      if (checkCollitions(obstacle, newCar)) {
        gameStatus = "finished"
  
      }
    }
  })

  requestAnimationFrame(update)
}

class Obstacles {
  constructor(){
    this.x = Math.floor(Math.random() * 300),
    this.y = 0,
    this.w = Math.floor(Math.random() * 200) + 100,
    this.h = 40,
    this.speed2 = 5,
    this.color = "brown"
    this.isMoving = true
  }
  draw(){
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.w, this.h)
      this.obstacleMoves()
    }
  
  obstacleMoves(){
    this.y+= this.speed2  
  }

  conditionMoves(){
    if(this.x<0){
       this.directionX = "right"
    } else if (this.x > canvas.width -this.w){
        this.directionX = "left"
    }
  }
  contains(b){
    return (this.x < b.x + b.w) &&
      (this.x + this.w > b.x) &&
      (this.y < b.y + b.h) &&
      (this.y + this.h > b.y)
  }
}

let time = 2000

setInterval(() => {
  const obstacle = new Obstacles()
  obstacles.push(obstacle)
},(time))

const checkCollitions = (t,s) => {
  return t.contains(s)
  //}
}