var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
//ctx.fillRect(0,0,50,50);

//Constantes
var interval;
var timer = 0;

//Clases
function Board(speed){
  this.xLine = -512;
  this.roadColor = 'grey';
  this.roadBorder = 'green';
  this.speed=speed;

  this.draw = function(){
    this.xLine+= this.speed;
    if(this.xLine >= 0){
      this.xLine = -512;
    }
    ctx.beginPath();
    ctx.fillStyle = this.roadColor;
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.strokeStyle = this.roadBorder;
    ctx.lineWidth=20;
    ctx.setLineDash([]);
    ctx.moveTo(10,0);
    ctx.lineTo(10,512);
    ctx.moveTo(246,512);
    ctx.lineTo(246,0);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth=5;
    ctx.setLineDash([]);
    ctx.moveTo(28,0);
    ctx.lineTo(28,512);
    ctx.moveTo(228,512);
    ctx.lineTo(228,0);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.setLineDash([12, 15]);
    ctx.moveTo(128,this.xLine);
    ctx.lineTo(128,this.xLine + (1024));
    ctx.stroke();
    ctx.closePath();

  }
}

function Car(){
  this.image = new Image();
  this.image.src = 'images/car.png';
  this.x = 108;

  this.draw = function(){
    ctx.drawImage(this.image, this.x, 420, 40, 80);
  }

  this.moveCar = function(move){
    this.x += move;
    if(this.x<30){
      this.x = 41;
    } else if(this.x >= 186){
      this.x = 175;
    }
  }
}

function Obstacle(speed,y){
  this.positionX = Math.floor((Math.random() * 160) + 28);
  this.long = Math.floor(Math.random() * 120) + 50;
  this.finalLen = this.positionX + this.long < 200 ? this.long : this.long - (this.positionX + this.long - 200);
  this.color = 'peru';
  this.y = y ? y : 0;
  this.speed = speed;

  this.draw = function(){
    this.y += this.speed;
    if (this.y>=512){
      var newX = Math.floor((Math.random() * 160)+28);
      var newL = Math.floor(Math.random() * 120);
      this.y=0;
      this.positionX = newX;
      this.finalLen = this.positionX + newL < 200 ? newL : newL - (this.positionX + newL - 200);
    }
    ctx.fillStyle = this.color;
    ctx.fillRect(this.positionX, this.y, this.finalLen, 10);
  }
}

//instancias
board = new Board(1);
car = new Car();
obstacle1 = new Obstacle(1);
obstacle2 = new Obstacle(1,-128);
obstacle3 = new Obstacle(1,-256);
obstacle4 = new Obstacle(1,-384);

//mainfunctions
//3 principales en todo juego...
  //1.-
function update(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  timer++;
  if(timer%600 === 0){
    board.speed += 1/10;
    obstacle1.speed += 1/10;
    obstacle2.speed += 1/10;
    obstacle3.speed += 1/10;
    obstacle4.speed += 1/10;
  }
  board.draw();
  car.draw();
  obstacle1.draw();
  obstacle2.draw();
  obstacle3.draw();
  obstacle4.draw();
}

  //2.-
function startGame(){
  interval = setInterval(update,1000/60);
}


//listeners
document.getElementById("start-button").onclick = function() {
  startGame();
};

addEventListener('keydown', function(e){
  switch(e.which){
    case 39:
      car.moveCar(15);
      break;
    case 37:
      car.moveCar(-15);
      break;
    default:
      break;
  }
});
