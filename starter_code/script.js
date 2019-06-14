const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let frames = 0
let obstacles =[]
const images = {
 car: "./car."
}

// clases


class Score{
  constructor(){
    this.x = 50
   this.y = 650
   this.height = 30
   this.width = 60
   this.score=0
  }
  draw() {
    ctx.fillStyle = "white"
    ctx.fillText(`Score : ${this.score}`,this.x, this.y, this.width)
  }
}



class Car {
  constructor(x,y,img){
 this.x = x
 this.y = y
 this.width = 100
 this.height = 115
 this.img = new Image ()
 this.img.src = img
}
moveRight(){
  if(this.x > canvas.width - this.width -10) return
  this.x+= 10
}
moveLeft(){
  if(this.x === 0) return
  this.x+= 10
}
isTouching(obstacles) {
  return (
    this.x < obstacles.x + obstacles.width &&
    this.x + this.width > obstacles.x &&
    this.y < obstacles.y + obstacles.height &&
    this.y + this.height > obstacles.y
  )
}
}

class Obstacles{
  constructor (x, width){
    this.x = x
    this.y = 0
    this.width = width
  }
draw(){
 ctx.fillRect(this.x, this.y, this.width, 15)
 this.y++
}
}

function generateObstacles(){
let rndX = Math.random()* canvas.width -50
let rndWidth = Math.random()* canvas.width -rndX
obstacles.push(new Obstacles(rndX, -100, rndWidth))
}

function drawObstacles (){
 if (frames % 500 == 0){
   generateObstacles()
 }
obstacles.map(obstacle =>{
 obstacle.draw()
})
}
     draw () {
       ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
       ctx.fillRect(this.x, this.y, this.width, this.height)
     }
     
 }

 const carrito= new Car (140,535, images.car)

 function checkCollition(){
  obstacles.map(obstacle => {
   if(carrito.isTouching()){
     gameOver()
   }
  })
 }

function gameOver (){

}

 function update(){
   ctx.clearRect(0,0, canvas.width, canvas.height)
   frames++
   carrito.draw()
   createBoard()
   drawObstacles()
   checkCollition()
 }


l


function vX(){
  let valX = Math.floor(Math.random() * 175)
  if ( valor < 20){
      vX()
  }
  return valX
 }


 function widthX(){
  val = Math.floor(Math.random() * 145)
  if (valore > 125){
     return val
  }
  return 125
 }


function drawObstacles() {
 if (frames % 300 === 0) {
   generateObstacles()
 }
 obstacles.forEach(obstacle => {
   obstacle.draw()
 })
}

function checkCollition() {
 obstacles.map(obstacle => {
   if (carrito.isTouching(obstacle)) {
     gameOver()
   }
 })
}

function gameOver() {
 clearInterval(interval)
 interval = false
}

addEventListener('keydown', (e) => {
if(e.keyCode === 39) {
  carrito.moveRight()
 } else if(e.keyCode === 37) {
   carrito.moveLeft()
 }
})







window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    if(interval) return
    interval = setInterval(update,1000/120 );
  }
};
