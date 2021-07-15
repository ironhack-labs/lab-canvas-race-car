window.onload = () => {
  document.getElementById("start-button").addEventListener('click', startGame)
  };

//canvas and the background
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const roadImg = document.getElementById('road')
let road = roadImg.getContext('2d')

//road
class Road{
  constructor(){
    this.x = 0
    this.y = 0
    this.width=roadImg.width
    this.height=roadImg.height
    this.img = new Image()
    this.img.src = "../images/road.png"
    this.speed=-1
  }
  move() {
    this.y += this.speed;
    this.y %= roadImg.height;
  }
  draw() {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + this.img.height);
    } else {
      ctx.drawImage(this.img, 0, this.y - roadImg.height);
    }
  }
};

let road = new Road()

//car
class Car{
  constructor(x,y,){
    this.x = x
    this.y = y
    this.width=50
    this.height=90
    this.speedX=0
    this.img=new Image()
    this.img.src="../images/car.png"
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveLeft(){
    this.x -= 10
  }
  moveRight(){
    this.x += 10
  }
  }

let car = new Car(30,400)

//control
document.onkeydown = function(e){
  if (e.key === "ArrowLeft"){
    car.moveLeft()
  }
  else if (e.key === "ArrowRight"){
    car.moveRight()
  }
  }

  //obstacles
  let obstacles = []
  class Obstacle {
    constructor(){
      this.x = Math.floor(Math.random()*300)
      this.y = 0
      this.width = Math.floor(Math.random()*60)
      this.height = Math.floor(Math.random()*80)
      this.color='red'
    }
    draw(){
      ctx.fillRect(this.x, this.y, this.width, this.height, this.color)
    }
  }
  let obstacle = new Obstacle()

  let frames = 0
  let updateObstacles = function(){
    if (frames % 120 === 0) {
      obstacles.push(obstacle)
      for (let i=0; i<obstacles.length;i++){
        obstacles[i].y += 1
        obstacles[i].draw()
      }
    }
  }

//clear
let clearCanvas = function(){
  ctx.clearRect(0,0,500,700)
}

//crash check

//start the game
function startGame() {
  setInterval(() => {
    clearCanvas()
    road.move()
    road.draw()
    car.draw()
    updateObstacles()
    frames++
  },20)
}
