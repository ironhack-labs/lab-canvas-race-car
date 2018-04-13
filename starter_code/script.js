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

function Cochecito(){
    this.x = 230;
    this.y = canvas.height - 60;
    this.alto = 60 ;
    this.ancho = 30;
    this.img = new Image();
    this.img.src = "./images/car.png"
    this.img.onload = function(){
            this.draw();
            }.bind(this);
    this.draw = function (){
      ctx.drawImage(this.img, this.x,this.y,this.ancho,this.alto);
    }

}

var ferrari = new Cochecito;


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
  ferrari.draw();
}

addEventListener("keydown",function(event){
  event.keyCode;
  if(event.keyCode===38 && ferrari.y >= 10){
    ferrari.y -=10;
  };
  if (event.keyCode===40 && ferrari.y <= canvas.height-70){
    ferrari.y +=10;
  };
  if(event.keyCode===37 && ferrari.x >= 70){
      ferrari.x -=10;
  };
  if(event.keyCode===39 && ferrari.x <= 400){
    ferrari.x +=10;
  }

})

