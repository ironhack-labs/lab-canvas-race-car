// canvas
var canvas = document.getElementById("canvas")
var ctx  = canvas.getContext('2d')

// variables
var interval
var frames = 0
var images = {
  car: "images/car.png",
  obstacle_left: "images/obstacle_left.png",
  obstacle_right:"images/obstacle_right.png"
}
var road = []
var obstacles = []

// classes
function Board(){
  this.x = 0
  this.y = 0
  this.width = canvas.width
  this.height = canvas.height

  this.draw = function(){
    ctx.fillStyle = "gray"
    ctx.fillRect(0,0,400,800)
    ctx.fillStyle = "green"
    ctx.fillRect(0,0,30,800)
    ctx.fillRect(370,0,30,800)
    ctx.fillStyle = "white"
    ctx.fillRect(40,0,10,800)
    ctx.fillRect(350,0,10,800)

    // lines
    // var lineSpace = 80
    // var lineY = 0
    // ctx.fillStyle = "white"
    // for(var i = 0; i < 10; i++){
    //   ctx.fillRect(197,lineY,6,40)
    //   lineY += lineSpace
    // }
  }
  this.drawLines = function() {
    this.y++
    ctx.fillStyle = 'white'
    ctx.fillRect(197, this.y, 6, 40)
  }
  this.drawScore = function(){
    ctx.font = "bold 24px Avenir"
    ctx.fillText("Score: " + Math.floor(frames/60),60,50)
  }
}

function Car(){
  this.x = canvas.width / 2 - 40
  this.y = canvas.height / 2 + 100
  this.width = 79
  this.height = 159
  this.image = new Image()
  this.image.src = images.car

  this.draw = function(){
    this.boundaries()
    ctx.drawImage(this.image, this.x, this.y,this.width,this.height)
  }

  this.boundaries = function(){
    if(this.x < 30) this.x = 30
    if(this.x > 290) this.x = 290
  }

  this.isTouching = function(item){
    // tocando de frente -> this. y < item.y
    return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y);
  }
}

function Obstacle(width,position){
  // this.x = position === "left" ? 0 : canvas.width - width
  this.x = position === "left" ? 0 : width
  this.y = 0
  this.width = width
  this.height = 60
  this.image = new Image()
  this.image.src = position === "left" ? images.obstacle_left : images.obstacle_right
  this.draw = function(){
    this.y+=2
    ctx.drawImage(this.image, this.x, this.y,this.width,this.height)
  }
}

// instances
var board = new Board()
var car = new Car()

// main functions
function update(){
  frames++
  ctx.clearRect(0,0,canvas.width,canvas.height)
  board.draw()
  drawRoad()
  drawObstacles()
  car.draw()
  board.drawScore()
  checkCollition()
}

function gameOver(){
  clearInterval(interval)
  interval = null
  ctx.fillStyle = "red"
  ctx.font = "bold 40px Arial"
  ctx.fillText("GAME OVER",80,200)
  ctx.fillStyle = "black"
  ctx.font = "bold 40px Arial"
  ctx.fillText("Final score: " + Math.floor(frames/60),60,250)
  // ctx.fillText("Press 'enter' to restart",50,350)
}

// aux functions
function generateRoad() {
  if (frames % 100 === 0) {
    road.push(new Board())
  }
}

function drawRoad() {
  generateRoad()
  road.forEach(board => {
    board.drawLines()
  })
}

function generateObstacles() {
  if(frames % 250 === 0){
    var width = Math.floor(Math.random()*250)
    if(width % Math.floor(Math.random()*3) === 0){
      var position = "left"
    }
    obstacles.push(new Obstacle(width,position))
  }
}

function drawObstacles(){
  generateObstacles()
  obstacles.forEach(function(obstacle){
    obstacle.draw()
  })
}

function checkCollition(){
  for(var obstacle of obstacles){
    if(car.isTouching(obstacle)){
      gameOver()
    }
  }
}

// listeners
addEventListener('keydown', function(e){
  switch(e.keyCode){
    //ArrowLeft
    case 37:
      car.x -= 30
      break;
    //ArrowRight
    case 39:
      car.x += 30
      break;
  }
})

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    if(!interval) interval = setInterval(update,100/60)
  }
};
