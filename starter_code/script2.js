var myObstacles = [];

function startGame () {

}

var myGame = {
  canvas : document.getElementById("start-button").onclick(),
  start : function() {
    this.context = this.canvas.getContext("2d");
    }
  }

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y; 
}

