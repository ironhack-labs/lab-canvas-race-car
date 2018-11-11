// canvas
var canvas = document.getElementById("canvas")
var ctx  = canvas.getContext('2d')

// variables


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

// instances
var board = new Board()

// main functions

// aux functions

// listeners

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    board.draw()
  }
};
