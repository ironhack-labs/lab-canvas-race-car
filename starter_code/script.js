
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')

let interval
let frames = 0
let friction = 0.95
let keys = {}
let obstacleInterval
let obstacleList = []


  // Player
  class Car {
    constructor() {
      this.x = 250
      this.y= 400
      this.width= 30
      this.height= 60
      this.velX = 0
      this.image = new Image()
      this.image.src= './images/car.png'
      this.image.onload = this.draw
      this.draw = function() {
       ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
     }
    }
  }

class Obstacle{
  constructor(width=150, x=150){
    this.x= x
    this.y= 20
    this.width= width
    this.height= 30
  }
  draw(){
    this.y++
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Background {
  constructor(x, y, width, height, color){
    this.x= x
    this.y= y
    this.width= width
    this.height= height
    this.color = color
  }
  draw(){
    ctx.fillStyle=this.color
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

  // Main functions
  function startGame() {
    canvas.setAttribute('class','')
    interval = setInterval(updateGame, 1000/60)
    console.log('game is on!')
  }

  function updateGame() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    frames++
    drawTime()
    move()
    newObstacles()
    drawObstacles()
    green1.draw()
    green2.draw()
    // grey.draw()
    gameOver()
    car.draw()
  }

  function gameOver() {
    if(frames%1000===0){
      ctx.font = '30px sans';
      ctx.fillStyle = 'black'
      ctx.fillText("Your score is: " + Math.floor(frames/60),150,200)
      console.log("Game over")
    }
  }
 
  // Aux functions
function drawTime(){
    ctx.fillStyle="black"
    ctx.fillText(Math.floor(frames/60), 280,10)
} 
function move(){
  // Car
  car.x += car.velX
  car.velX *= friction // to slow down over time

  if(keys[39]){
    car.velX++
  }
  if(keys[37]){
    car.velX--
  }
}

function newObstacles() {
  if(frames%150===0){
    let randomWidth =  Math.floor(Math.random() * (200 - 20 + 1)) + 20
    let randomX =  Math.floor(Math.random() * (250 - 20 + 1)) + 20
    let o = new Obstacle(randomWidth,randomX)
    obstacleList.push(o)
    console.log(frames)
  }

}
function drawObstacles(){
  obstacleList.forEach(item=>{
    item.draw()
  })
}

// Listeners
addEventListener('keydown', e=>{
  if(e.keyCode === 32){
    startGame()
  }
  keys[e.keyCode] = true
})
addEventListener('keyup', e=> {
  keys[e.keyCode] = false
})

let car = new Car()
let grey = new Background(20,0,260,500,'grey')
let green1 = new Background(0,0,20,500,'green')
let green2 = new Background(280,0,20,500,'green')
