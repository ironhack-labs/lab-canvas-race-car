//Canvas
var canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

//Variables
var interval 
var frames = 0
var images = {
  carrito: "images/car.png",
  obstacleL: "http://ku.90sjimg.com/element_pic/17/03/19/2ac65505a94939d4bcecb0358a4d3750.jpg",
  obstacleR: "http://ku.90sjimg.com/element_pic/17/03/19/2ac65505a94939d4bcecb0358a4d3750.jpg" 
}
var road= []
var obstacles = []

var board = new Board()
var car = new Car()

var lineSpace = 80
var lineY = 0
ctx.fillStyle ="white"
for(i=0;i<10;i++){
  ctx.fillRect(197, lineY, 6, 40)
  lineY += lineSpace
  }

//Clases
function Board(){
  this.x=0
  this.y=0
  this.width = canvas.width
  this.height= canvas.height

  this.draw = function(){
    ctx.fillStyle= "gray"
    ctx.fillRect(0,0,400,800)
    ctx.fillStyle="green"
    ctx.fillRect(0,0,30,800)
    ctx.fillRect(370,0,30,800)
    ctx.fillStyle= "white"
    ctx.fillRect(40,0,10,800)
    ctx.fillRect(350,0,10,800)
  } 

  this.drawLines = function(){
    this.y ++
    ctx.fillStyle = "white"
    ctx.fillRect(198, this.y, 6, 40)
  }

  this.drawScore = function(){
    ctx.font= "bold 24px Avenir"
    ctx.fillText("Score: " + Math.floor(frames/60),60,50)
  }
}


function Car(){
  this.x= (canvas.width / 2)-45
  this.y= (canvas.height / 2)+100
  this.width= 89
  this.height = 160
  this.image = new Image()
  this.image.src = images.carrito

  this.draw = function(){
    this.boundaries()
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  this.draw = function(){
    if(this.x <30) this.x = 30
    if(this.y >290) this.x = 290
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  this.isTouching = function(){
    return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y);
  }
}

function Obstacle(width, position){
  this.x = position === "left" ? 0 : width
  this.y =0
  this.width = width
  this.height = 60
  this.image = new Image()
  this.image.src= position === "left" ? images.obstacleL : images.obstacleR
  this.draw = function(){
    this.y +=2
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}

function update(){
  frames++
  ctx.clearRect(0,0,canvas.width, canvas.height)
  board.draw()
  drawRoad()
  drawObstacles()
  car.draw()
  board.drawScore()
  checkCollition()
}

//Auxiliares
function generateRoad(){
  if(frames % 100 ===0){
    road.push(new Board())
  }
}

function drawRoad(){
  generateRoad()
  road.forEach(board => {
    board.drawLines()
  })
}

function generateObstacles(){
  if(frames % 240 ===0){
    var width = Math.floor(Math.random()*250)
    if(width% Math.floor(Math.random()*3)===0){
      var position = "left"
    }
    obstacles.push(new Obstacle(width, position))
  }
}

function drawObstacles(){
  generateObstacles()
  obstacles.forEach(function(obstacle){
    obstacle.draw()
  })
}

function checkCollition(){
  for(var obstacle of obstacle){
    if(car.isTouching(obstacle)){
      gameOver()
    }
  }
}

//Listeners
addEventListener('keydown', function(e){
  switch(e.keyCode){
    case 37:
      car.x -= 30
      break
    case 39:
      car.x += 30
      break
  }
})

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    frames++
    board.draw()
    car.draw()
    if(interval) interval= setInterval(update, 100/60)
    drawRoad()
    drawObstacles()
    car.draw()
    board.drawScore()
    checkCollition()
  }

  function gameOver (){
    clearInterval(interval)
    interval=null
    ctx.fillStyle="red"
    ctx.font = "bold 40px Arial"
    ctx.fillText("Game Over, 80,200")
    ctx.fillStyle = "black"
    ctx.font = "bold 35px Arial"
    ctx.fillText("Final score: "+ Math.floor(frames/60), 60, 250)
  }
};