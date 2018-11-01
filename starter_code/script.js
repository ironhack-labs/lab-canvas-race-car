var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

//   function startGame() {

//   }

//   function Canvas() {


//   }
// };

//fondo
ctx.fillStyle="grey";
ctx.fillRect(0, 0, 400, 600);

// cesped
ctx.fillStyle="green";
ctx.fillRect(0, 0, 30, 600);
ctx.fillStyle="green";
ctx.fillRect(370, 0, 30, 600);

// arcen
ctx.fillStyle="white";
ctx.fillRect(40, 0, 10, 600);
ctx.fillStyle="white";
ctx.fillRect(350, 0, 10, 600);

// linea medio
ctx.beginPath();
ctx.lineWidth= 4;
ctx.strokeStyle="white";
ctx.setLineDash([25,20])
ctx.moveTo(200, 0);
ctx.lineTo(200,800)
ctx.stroke();
ctx.closePath();

//coche

function Canvas(id) {
this.canvas = document.getElementById("canvas");
this.ctx = this.canvas.getContext("2d");
this.fps = 60;
this.car = new Car();
}

function Car()
{
  imgCar = new Image();
  imgCar.src = 'https://github.com/YaredMyers/lab-canvas-race-car/blob/master/starter_code/images/car.png?raw=true';
  imgCar.onload = function(){
    ctx.drawImage(imgCar, 175, 450,50,100);
  }
}

Car();

function Road(){
//fondo
ctx.fillStyle="grey";
ctx.fillRect(0, 0, 400, 600);

// cesped
ctx.fillStyle="green";
ctx.fillRect(0, 0, 20, 600);
ctx.fillStyle="green";
ctx.fillRect(200, 0, 20, 600);

// arcen
ctx.fillStyle="white";
ctx.fillRect(55, 0, 15, 800);
ctx.fillStyle="white";
ctx.fillRect(430, 0, 15, 800);

// linea medio
ctx.beginPath();
ctx.lineWidth= 4;
ctx.strokeStyle="white";
ctx.setLineDash([25,20])
ctx.moveTo(250, 0);
ctx.lineTo(250,800)
ctx.stroke();
ctx.closePath();
}
