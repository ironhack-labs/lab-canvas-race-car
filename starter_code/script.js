window.onload = function() {

  //constantes
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var carImage = new Image();
carImage.src = "images/car.png";
var counter = 0;
var obstacleCounter = 0;

//instances
var game = new Gameboard();
var car = new Car();
var obst = new Obstacle();



//Clases
function Gameboard (){
  this.width = canvas.width;
  this.height = canvas.height;
  this.draw = function (){

    ctx.strokeRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = 'green';
    ctx.fillRect(0,0,25,canvas.height);
    ctx.fillRect(325,0,25,canvas.height);

    ctx.fillStyle = 'gray';
    ctx.fillRect(25,0,300,canvas.height);

    ctx.fillStyle = 'white';
    ctx.fillRect(40,0,10,canvas.height);
    ctx.fillRect(300,0,10,canvas.height);
  }
}

function Car (){
  this.x = 150; //son los valores default para que el coche aparezca en medio.
  this.y = 520;
  this.width = 40;
  this.height = 80;
  this.draw = function(){
    ctx.drawImage(carImage,this.x,this.y,this.width,this.height);
  }
}

function Obstacle(){
  this.x = 100;
  this.y = 0;
  this.width = 50;
  this.height = 25;
  this.draw = function(){
    ctx.fillStyle = 'peru';
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}


//funciones
function startGame() {
   game.draw();
   road(counter);
   car.draw();
   move();
   obstacleTimer();
   
}

function move(){
  setInterval(function(){
    update();
}, 1000/60)
}

function road(i){
  ctx.beginPath();
  ctx.setLineDash([20,20]);
  ctx.lineWidth = 5;
  ctx.moveTo(175,i-500); //es -500 porque el counter se resetea al llegar al 500
  ctx.lineTo(175,canvas.height);
  ctx.strokeStyle ='white';
  ctx.stroke();
  ctx.closePath();
};

function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  game.draw();
  road(counter);
  car.draw();
  obst.draw();
  if (counter === 500) counter = 0;
  else counter+=5;
  if(obstacleCounter === canvas.height) obstacleCounter = 0;
  else obstacleCounter +=5;
  obst.y = obstacleCounter;
  obstacleTimer();
}

function obstacleRand(){
  var position = Math.floor(Math.random()*160); //El espacio para moverse es hasta 260, el tamaño maximo va a ser de 100, por lo que 160 es el valor maximo de x
  var size =Math.floor(Math.random()*100); //El tamaño maximo del obstaculo va a ser de 100px
  if(position < 50) obstacleRand(); else { //para evitar que salgan obstaculos fuera del camino
    obst.x = position;
    obst.width = size;
    obst.draw();
  }
}

function obstacleTimer(){
  if(obstacleCounter === 0){ //para que se randomize el nuevo obstaculo cuando el primero llegue al fondo
    obstacleRand();          //no se puede usar setInterval porque los obstaculos cambian de tamaño en donde esten cuando se cumple el intervalo
  }
}

//Listeners
document.getElementById("start-button").onclick = function() {
  startGame();
};

addEventListener('keydown', function(e){
  if(e.keyCode === 37 && car.x > 50) {  //los && son para evitar que salga del camino
    car.x -= 10;
    update();
  }else if (e.keyCode === 39 && car.x < 260) {
    car.x += 10;
    update();
  }
})


};

