var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



function camino() {
    ctx.beginPath(); 
    ctx.fillStyle = "green";
    ctx.fillRect(0,0, 40, canvas.height);
    ctx.closePath();

    ctx.beginPath(); 
    ctx.fillStyle = "grey";
    ctx.fillRect(40,0, 10, canvas.height);
    ctx.closePath();

    ctx.beginPath(); 
    ctx.fillStyle = "white";
    ctx.fillRect(50,0, 10, canvas.height);
    ctx.closePath();

    ctx.beginPath(); 
    ctx.fillStyle = "grey";
    ctx.fillRect(60,0, 380, canvas.height);
    ctx.closePath();

    ctx.beginPath(); 
    ctx.fillStyle = "white";
    ctx.fillRect(440,0, 10, canvas.height);
    ctx.closePath();

    ctx.beginPath(); 
    ctx.fillStyle = "grey";
    ctx.fillRect(450,0, 10, canvas.height);
    ctx.closePath();

    ctx.beginPath(); 
    ctx.fillStyle = "green";
    ctx.fillRect(460,0, 40, canvas.height);
    ctx.closePath();
}



function Linea(y){  
  this.x = 240;
  this.y = y;
  this.color = "white";
  this.alto=30;
  this.ancho=10;
  this.draw = function(){
        this.y+=10;
        if(this.y > canvas.height) this.y = 0;
        ctx.beginPath(); 
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x ,this.y , this.ancho,this.alto);
        ctx.closePath();}
  
  }

var lineas = []; 
for(i=0;i<canvas.height;i+=60){
  lineas.push(new Linea(i))
};

function drawLines(){
  lineas.forEach(function(lupe){
  lupe.draw();
      })
};

// function Cochecito(){
//   this.x = x;
//   this.y = y;
//   this.alto = ;
//   this.ancho = ;

// }

  


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    
    startGame();
  };

  var interval;

    function startGame() {
      interval = setInterval(function(){
        update();
      },1000/40);


  }
  
  camino();
  drawLines();
};


function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  camino();
  drawLines();
  
}