

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

};

function startGame() {
  myGameBoard.start()
  createBoard();
  updatePlayer()
};

var myGameBoard = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 640;
    this.context = this.canvas.getContext("2d");
    document.getElementById('game-board').appendChild(this.canvas);
  },
};

function Component(width, height, color, x, y){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = myGameBoard.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

function createBoard() {
  elementGreen = new Component(480, 640, '#288200', 0, 0);
  elementGrey = new Component(400, 640, '#808080', 40, 0);
  elementWhite = new Component(20, 640, 'rgb(255,255,255', 60, 0);
  elementWhite2 = new Component(20, 640, 'rgb(255,255,255', 400, 0);
  for (i = 0; i <= 11; i++) {
    var elementDiscWhite = [];
    elementDiscWhite[i] = new Component(10, 30, 'rgb(255, 255, 255', 235, 0 - 30 + (i*70));
  };
};

var car = {
  x: 150,
  y: 480,
  moveLeft:  function() {
    this.x -= 5;
    if(this.x <= 80){
      this.x = 80;
    }},
  moveRight: function() { 
    this.x += 5;
    if(this.x >= 330){
      this.x = 330;
    }},
}

function player(car) {
  var img = new Image();
  var imgScale = 159/319;
  var xScale = 150 * imgScale;
  img.onload = function() { 
     ctx.drawImage(img, car.x, car.y, xScale, 150); 
  }
  img.src = "./images/car.png";
}


document.onkeydown = function(e) {
  if (e.keyCode == 37) {
    car.moveLeft();
  } else if (e.keyCode == 39) {
    car.moveRight();
  }
  updatePlayer();
}

function updatePlayer() {
  ctx = myGameBoard.context;
  ctx.clearRect(0, 0, myGameBoard.width, myGameBoard.height);
  createBoard()
  player(car)
}
