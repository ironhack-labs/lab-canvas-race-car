// canvas
var canvas = document.getElementById("canvas")
var ctx  = canvas.getContext('2d')

// variables
var images = {
  car: "./images/car.png"
}

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
    var lineSpace = 80
    var lineY = 0
    ctx.fillStyle = "white"
    for(var i = 0; i < 10; i++){
      ctx.fillRect(197,lineY,6,40)
      lineY += lineSpace
    }
  }
}

function Car(){
  this.x = canvas.width / 2 - 40
  this.y = canvas.height / 2
  this.width = 79
  this.height = 159
  this.image = new Image()
  this.image.src = images.car

  this.draw = function(){
    ctx.drawImage(this.image, this.x, this.y,this.width,this.height)
  }
}

// instances
var board = new Board()
var car = new Car()

// main functions

// aux functions

// listeners

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    board.draw()
    car.draw()
  }
};
