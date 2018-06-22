

var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');
//var interval; 
//ctx.fillRect(0,0,100,100); // Ya funciona

// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

//   function startGame() {
//   } 

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//     //  function start() {
//     //   internval = setInterval(update, 1000 / 60);
//     // }
//   }
// }
// };



// Aquí creamos el asfalto
ctx.beginPath();
ctx.moveTo(25,5);
ctx.lineTo(25,1024);
ctx.lineTo(485,1024);
ctx.lineTo(485,5);
ctx.lineWidth = 15;
ctx.strokeStyle = "yellowgreen"
ctx.fillStyle = 'grey'
ctx.stroke();
ctx.fill(); 
ctx.closePath();

//CLASES
//Simplificar las ternarias en parentesis
//Bordes laterales
function Lineazo (x,y,color) {
  this.x = x ? x : 10;
  this.y = y ? y : 30;
  this.color = color ? color : 'blue'
 
  this.draw = function () {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y);
    ctx.lineTo(this.x, this.y+1024);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

  }
 }

 function Carril (x,y,color) {
  this.x = x ? x : 260;
  this.y = y ? y : 30;
  this.color = color ? color : 'white'
 
  this.draw = function () {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y);
    ctx.lineTo(this.x, this.y+100);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    
    this, (direction = 'left');

    this.draw = function() {
      if (this.direction === 'left') {
     this.y++;
     //if (this.y > 256) this.direction = 'up';
   } else {
     this.y--;
     if (this.y < 1) this.direction = 'left';

  }
 }
  }
 }

 
//  class Car {
//   constructor(x=50,y=50){
//     this.x=x;
//     this.y=y;
    
//     this.draw function () {
// var imagen = new Image();
// imagen.src ="./images/car.png"
// imagen.onload = function(){
// ctx.draw(imagen, 50, 50);  
//   }
//   }
//   }

  function  Car (x,y) {
    this.x = x ? x : 50;
    this.y = y ? y : 50;
    
    this.draw = function(){
    var imagen = new Image();
    imagen.src ="./images/car.png"
    imagen.onload = function(){
    ctx.draw.imagen(); 
    ctx.stroke();
    ctx.fillRect();
    }
  }
  }

  function start() {
    internval = setInterval(update, 1000 / 60);
   }
  
  // Movimiento de LINEAS
  function Moviemiento(x, y, color) {
     this.x = x || 0; // x=x && 0;
     this.y = 0;
  //   this.width = 50;
  //   this.height = 50;
  //   this.color = color ? color : "red";
     this, (direction = "down");
     this.draw = function() {
       if (this.direction === "down") {
         this.y++;
         if (this.y > 256) this.direction = "up";
       } else {
         this.y--;
         if (this.y < 1) this.direction = "down";
       }
      }
    }

 

 // Quiero utilizar toda al altura del canvas: canvas.height
 var bordeIzquierdo = new Lineazo(50, 5);
 bordeIzquierdo.draw();

 var bordeDerecho = new Lineazo(460, 5);
 bordeDerecho.draw();

 var centrales = new Carril(260, 05);
 centrales.draw();

 var muevelo = new Movimiento ()
 muevelo.draw();
 
//  var myCar = new Car (42,65);
//  myCar.draw();
 
//Para usar el teclado, no es necesario usar document...getElement
addEventListener('keydown', function(e){
   //El switch va checar que tecla presionamos
   console.log("pachurraste");
   switch(e.keyCode){
       case 37:
       car.direction = "left";
       break;
       case 39:
       car.direction = "rigth";
       break;
   }
  }
);