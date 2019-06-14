const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
let frames = 0
let obstacles =[]
let interval  
const images = {
  car: "https://c7.uihere.com/files/219/821/71/2017-audi-s3-car-audi-a3-vehicle-car-top-thumb.jpg" 
}

// clases

class Score{
  constructor(){
  this.x = 50
  this.y = 650
  this.height= 20
  this.width = 50
  this.score = 0
  }
draw(){
  ctx.fillStyle = "white"
  ctx.fillText(`Score : ${this.score}`,this.x, this.y, this.width)
}}


class Obstacle{
      constructor (x, width){
        this.x = x
        this.y = 0
        this.width = width
      }
    draw(){
      ctx.fillRect(this.x, this.y, this.width, 15)
   this.y++
    }}  

  class Car {
    constructor(x,y,img){
   this.x = x
   this.y = y
   this.width = 50
   this.height = 105   
   this.img = new Image () 
   this.img.src = img
}
      draw () {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      }
      moveRight() {
        if (this.x > canvas.width - this.width - 45) return
        this.x+= 10
      }
      moveLeft() {
        if (this.x  === 40) return
        this.x-= 10
      }
     
      isTouching(obstacles) {
        return (
            this.x < obstacles.x + obstacles.width &&
            this.x + this.width > obstacles.x &&
            this.y < obstacles.y +obstacles.height &&
            this.y + this.height > obstacles.y
        )
      }
     }

//instancias
  const carrito= new Car (140,535, images.car)
  const  score = new Score ()
 


  //funciones 
  



 function Marcador(){
   let valor = 0
   for ( let i =0 ; i<obstacles.length;i++){
     if(obstacles[i].y>700){
       valor++
      }
    }
    return valor
  }
  
  function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  createBoard()
  carrito.draw()
  drawObstacles()
  checkCollition()
  score.draw()
  let points= Marcador()
  score.score= points
  }

  function createBoard (){ 
    ctx.beginPath()
    ctx.fillStyle = 'green'
    ctx.fillRect(0,0, 25, 650)
    ctx.closePath()
    
    ctx.beginPath()
    ctx.fillStyle = 'green'
    ctx.fillRect(355,0, 25, 650)
    ctx.closePath()
    
    ctx.beginPath()
    ctx.fillStyle = 'grey'
    ctx.fillRect(25,0, 330, 650)
    ctx.closePath()
    
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.fillRect(33,0, 7, 650)
    ctx.closePath()
    
    ctx.fillStyle = 'white'
    ctx.fillRect(340,0, 7, 650)
    ctx.closePath()
    

    //  for(let i= 20;i<650;i+20){
    // ctx.beginPath()
    //   ctx.fillStyle = 'white'
    // ctx.fillRect(186, i, 8, 40)
    // ctx.closePath()
    // }
  }

function rndX(){
  let val = Math.floor(Math.random() * 190)
  if ( val < 45){
    rndX()
  }
  return val
 }

 function wX(){
  val = Math.floor(Math.random() * 155)
  if (val > 155){
     return val
  }
  return 155
 }
  function generateObstacles() {
    obstacles.push(new Obstacle (rndX(),wX()))
   }
   
   function drawObstacles() {
    if (frames % 200 === 0) {
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
//listeners  
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
   
  
 S