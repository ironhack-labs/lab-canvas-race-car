var initailScreen = document.querySelector(".game-intro")
var firstCanvas = document.querySelector("#inital-canvas")

window.onload = function() {
  initialCanvas(firstCanvas)
  document.getElementById("start-button").onclick = function() {
    initailScreen.classList.add("hide")
    firstCanvas.classList.add("hide")
    startGame();
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        moveLeft();
        break;
      case 39:
        moveRight();
        break;
    }
  }
    
  document.onkeyup = function(e) {
    stopMove();
  }
    
};

function startGame() {
  myGameArea.start();
}



var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function(){
    this.canvas.width = 1200;
    this.canvas.height = 800;
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 170, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(170, 0, 34, 800);
    this.context.fillStyle = 'white';
    this.context.fillRect(204, 0, 50, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(254, 0, 692, 800);
    this.context.fillStyle = 'white';
    this.context.fillRect(946, 0, 50, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(996, 0, 34, 800);
    this.context.fillStyle = 'green';
    this.context.fillRect(1030, 0, 170, 800);
    /*var midLines = 0
    while(midLines < 800){
      this.context.fillStyle = 'white';
      this.context.fillRect(399, midLines, 2, 30);
      this.context += 50 
    }*/
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}


function component(width, height, color, x, y) {

}

var player = {

}


function updateGameArea() {

}



function moveLeft() {
  player.speedX -= 1;
}

function moveRight() {
  player.speedX += 1;
}


function stopMove() {
  player.speedX = 0; 
}

function initialCanvas(selector) {
  var ctx = selector.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 50, 520);
  ctx.fillStyle = 'gray';
  ctx.fillRect(50, 0, 10, 520);
  ctx.fillStyle = 'white';
  ctx.fillRect(60, 0, 15, 520);
  ctx.fillStyle = 'gray';
  ctx.fillRect(75, 0, 200, 520);
  ctx.fillStyle = 'white';
  ctx.fillRect(275, 0, 15, 520);
  ctx.fillStyle = 'gray';
  ctx.fillRect(290, 0, 10, 520);
  ctx.fillStyle = 'green';
  ctx.fillRect(300, 0, 50, 520);

  var ypos = 0
  while(ypos < 520){
    ctx.fillStyle = 'white';
    ctx.fillRect(175, ypos, 2, 25);
    ypos += 45 
  }

}