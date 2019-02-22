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
    this.context.fillRect(0, 0, 130, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(130, 0, 20, 800);
    this.context.fillStyle = 'white';
    this.context.fillRect(150, 0, 30, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(180, 0, 840, 800);
    this.context.fillStyle = 'white';
    this.context.fillRect(1020, 0, 30, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(1050, 0, 20, 800);
    this.context.fillStyle = 'green';
    this.context.fillRect(1070, 0, 130, 800);
    var midLines = 0
    while(midLines < 800){
      this.context.fillStyle = 'white';
      this.context.fillRect(599, midLines, 2, 30);
      midLines += 50 
    }
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  }
}


function component(width, height, color, x, y) {

}

var player = {
  width: 50,
  height: 100,
  x: 575,
  y: 700,
  speedX: 0,
  update : function(){
    ctx = myGameArea.context;
    var img = new Image();
    img.onload = function() { 
      ctx.drawImage(img, player.x, player.y, player.width, player.height); 
    }
    img.src = "images/car.png"
  }


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