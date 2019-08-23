//VARIABLES
const myObstacles = []
let frames = 0
let interval
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const button = document.querySelector('button')


//CLASSES

class Car {
  constructor (x, y, width, height, color) {
    this.x = x
    this.y = y
    this.speedX = 0
    this.speedY = 0
    this.width = width
    this.height = height
    this.color = color
    this.img = new Image()
    this.img.src = './images/car.png'
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    } 
  }
  
drawCar(){
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}
drawObstacle(){
  ctx.fillStyle = 'white'
  ctx.fillRect(this.x,this.y, this.width, this.height)
}
newPos(){
  this.x += this.speedX
  this.y += this.speedY
}
top() {
  return this.y
}
bottom() {
  return this.y + this.height
}
left() {
  return this.x
}
right() {
  return this.x + this.width
}
moveRight(){
  this.x += 20
}
moveLeft(){
  this.x -= 20
}
crashWith(walls){
 return !(
   this.bottom() <  walls.top() ||
   this.top() > walls.bottom() ||
   this.right() < walls.left() ||
   this.left() > walls.right() 
 )
}
}
class Obstacle {
  constructor (x, y, width, height, color) {
    this.x = x
    this.y = y
    this.speedX = 0
    this.speedY = 0
    this.width = width
    this.height = height
    this.color = color
  
}
drawObstacle(){
  ctx.fillStyle = this.color
  ctx.fillRect(this.x,this.y, this.width, this.height)
}
top() {
  return this.y
}
bottom() {
  return this.y + this.height
}
left() {
  return this.x
}
right() {
  return this.x + this.width
}
}

let walls = new Obstacle(10, 10, 50, 20, 'white') 
let player = new Car(130, 120, 40, 25, 'blue')

//HELPER FUNCTIONS
 const startGame = () => {
  interval = setInterval(updateCanvas, 20)
 }
 const stopGame = () => {
   clearInterval(interval)
   interval = null
 }
 
 const clearCanvas = () => {
   ctx.clearRect(0,0, canvas.width, canvas.height)
 }

 const dontGoOut = () => {
   if (player.x >= canvas.width - 25) {
     player.x = canvas.width - 50
   }else if (player.x <= 25 ) {
     player.x = 50
   }
 }

 function updateObstacles(){
 if(frames % 120 ===0){
 let y = canvas.height
 let minWidth = canvas.width *0.2
 let maxWidth = canvas.width * 0.8
 let width = Math.floor((Math.random()* maxWidth-minWidth)+1)
 let gap = Math.floor((Math.random()* canvas.width))
 myObstacles.push(new Car(gap, 0, 60, 10, 'white'))

 }
}//
function drawObstacles(){
  myObstacles.forEach(obstacle => {
      obstacle.y +=1
      obstacle.drawObstacle()

    })
  }
 
 function updateCanvas() {
  frames += 1
  clearCanvas()
  drawBoard()
  dontGoOut()
  player.newPos()
  player.drawCar()
  drawObstacles()
  updateObstacles()
 
  
  
}

 const drawBoard = () => {
   ctx.fillStyle = '#008100'
   ctx.fillRect(0, 0, canvas.width, canvas.height)
   ctx.fillStyle = "#808080"
   ctx.fillRect(25, 0, canvas.width - 50, canvas.height)
   ctx.fillStyle = '#ffffff'
   ctx.fillRect(40,0, canvas.width - 80, canvas.height)
   ctx.fillStyle = "#808080"
   ctx.fillRect(50, 0, canvas.width - 100, canvas.height)
   ctx.setLineDash([5, 3]);/dashes are 5px and spaces are 3px/
   ctx.beginPath();
   ctx.strokeStyle = '#ffffff'
   ctx.lineWidth = 4
    ctx.moveTo(150,0);
    ctx.lineTo(150, 500);
    ctx.stroke();
 }
 updateCanvas()


//EVENT HANDLERS

document.onkeydown = e => {
  console.log(e)
  switch(e.keyCode){
    case 37:
        player.speedX -=1
        break
    case 39: 
        player.speedX +=1
        break
  }
}

document.onkeyup = e => {
  player.speedX = 0
  player.speedY = 0
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
//START GAME WITH BUTTON
window.onclick = () => {

}
