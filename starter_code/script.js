window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

var canvas = document.getElementById("canvas").getContext("2d"); // está como base el código de flappy birds
var intervalo; // está como base el código de flappy birds

function GameBoard(){
  this.x=0;
  this.y=0;
  this.width=canvas.width;
  this.height=canvas.height;
  this.carX=185;
  this.carWidth=158/2.5;
  this.image = new Image;
  this.image.src = "images/car.png";
  this.obstacles = [];
  this.frames = 0;
  this.gameEnd = false;
  this.draw = function(){
    canvas.beginPath();
    canvas.rect(0,0,30,700);
    canvas.fillStyle = "#1c8100";
    canvas.fill();
    canvas.beginPath();
    canvas.rect(30,0,10,700);
    canvas.fillStyle = "#808080";
    canvas.fill();
    canvas.beginPath();
    canvas.rect(40,0,10,700);
    canvas.fillStyle = "#ffffff";
    canvas.fill();
    canvas.beginPath();
    canvas.rect(50,0,350,700);
    canvas.fillStyle = "#808080";
    canvas.fill();
    canvas.beginPath();
    canvas.rect(400,0,10,700);
    canvas.fillStyle = "#ffffff";
    canvas.fill();
    canvas.beginPath();
    canvas.rect(410,0,10,700);
    canvas.fillStyle = "#808080";
    canvas.fill();
    canvas.beginPath();
    canvas.rect(420,0,30,700);
    canvas.fillStyle = "#1c8100";
    canvas.fill();
    canvas.beginPath();
    canvas.rect(450,0,50,700);
    canvas.fillStyle = "#ffffff";
    canvas.fill();
    var posY = -700;
    for(i=0; i<100; i++){
      canvas.beginPath();
      canvas.rect(220,posY+this.y,10,20);
      canvas.fillStyle = "#ffffff";
      canvas.fill();
      posY +=35;
    }
    canvas.drawImage(this.image,this.carX,500,158/2.5,319/2.5);
    for(i=0; i<this.obstacles.length; i++){
      canvas.beginPath();
      canvas.rect(this.obstacles[i].x,this.obstacles[i].y,this.obstacles[i].width,this.obstacles[i].height);
      canvas.fillStyle = "#890500";
      canvas.fill();
      canvas.closePath();
    }
  }

  // éstos métodos también tienen como base lo de flappy birds y el ejercicio del jueves

  this.move=function(){
    this.y += 2;    
    if (this.y >= 700){
      this.y = 0;
    }
    this.frames++
    if (this.frames %120 == 0){
      this.obstacles.push(new Obstacle());//cada 60 frames se agrega un nuevo obstáculo/instancia
    }
    for (i=0 ; i<this.obstacles.length ; i++){
      this.obstacles[i].move();//moviendo los obstáculos
    }
  }
  this.moveLeft=function(){
    if (this.carX > 50){
      this.carX -=10;
    }
  }
  this.moveRight=function(){
    if (this.carX < 410-90){
      this.carX +=10;
    }
  }
  this.checkCollision=function(){
    for (i=0; i<this.obstacles.length;i++){
      if (this.carX > this.obstacles[i].x && this.carX < this.obstacles[i].x + this.obstacles[i].width
      && 500 > this.obstacles[i].y && 500 < this.obstacles[i].y + this.obstacles[i].height){
        this.gameEnd = true;
      }
      if (this.carX+this.carWidth > this.obstacles[i].x && this.carX+this.carWidth < this.obstacles[i].x + this.obstacles[i].width
        && 500 > this.obstacles[i].y && 500 < this.obstacles[i].y + this.obstacles[i].height){
          this.gameEnd = true;
        }
    }
  }
}

function Obstacle (){
  this.x = Math.random()*350-50
  this.y = 0;
  this.width = Math.random()*150+79;
  this.height = 30;
  this.move = function(){
    this.y +=2;
  }
}

var gameBoard = new GameBoard();
gameBoard.draw();

function startGame() {
    gameBoard = new GameBoard();
    if (intervalo > 0) return;
    intervalo = setInterval(function(){
      if (gameBoard.gameEnd) {

      } else {   
        gameBoard.move();
        gameBoard.draw();
        gameBoard.checkCollision();
      }
    },1000/60)
}

document.onkeydown = function (e) {
    if (e.keyCode==37){
      gameBoard.moveLeft();
    } else if (e.keyCode==39){
      gameBoard.moveRight();
    }
  }
};

