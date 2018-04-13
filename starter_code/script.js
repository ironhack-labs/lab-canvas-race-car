


  function startGame() {
  Car();
  Track();
  }
;
var canvas = document.getElementById('fastnfurious');
var ctx = canvas.getContext("2d");  
var car;
var road;

function Track(){
ctx.beginPath();
//bordes
ctx.fillStyle = '#1c8100';
ctx.fillRect(0, 0, 50, 500); 
ctx.fillRect(486, 0, 50, 500); 
//empieza camino
ctx.beginPath();
ctx.fillStyle = '#808080';
ctx.fillRect(50,0, 436, 500); 
ctx.beginPath();
ctx.fillStyle = '#FFF';
//divisor del camino
ctx.fillRect(71,0, 20, 500); 
ctx.fillRect(442,0, 20, 500); 
ctx.fillRect(260,10, 15, 50); 
ctx.fillRect(260,115,15, 50); 
ctx.fillRect(260,220, 15, 50); 
ctx.fillRect(260,325, 15, 50); 
ctx.fillRect(260,430, 15, 50); 
ctx.closePath();}



function Car(){
var img = new Image();
img.onload = function () {
ctx.drawImage(img, 235, 300,70,120);
}
img.src = "images/car.png";
//limites
  this.goLeft = function(){
    if(this.x>71){
      this.x-=90;
  }
  
  this.goRight = function(){
   if(this.x<442){
     this.x +=90;
   }
  }}
  this.draw = function(){
  var carrito = new Car();
  var x = this.x;
  var y = this.y;
  img.src= this.img;
  ctx.draw(img, x, y, 60, 100)}


addEventListener('keydown', function(e){
  console.log(e.keyCode);
  if(e.keyCode === 37){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    carrito.goLeft();
    carrito.draw();
  }
  if(e.keyCode === 39){
    
    carrito.goRight();
    carrito.draw();
  }
});}


function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  carrito.goLeft();
  carrito.draw();
}

var interval = setInterval(function(){
  update();
},1000/60);
  
  
  
//no sirve ¿?
  /*
  var carrito = new Car();
  addEventListener('keydown',function(e){
    if(e.keycode ==37){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      carrito.goLeft();
      carrito.draw();
    }
    if(e.keyCode ==39){
      carrito.goRight();
      carrito.draw();
    }
    else{alert("no sirve")}
    
  })
}  */

  window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
        Track();
        Car();}}