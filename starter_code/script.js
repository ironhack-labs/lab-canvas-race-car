window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    drawFondo();
    DrawCar();

    var carrito = new DrawCar();

addEventListener('keydown', function(e){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  console.log(e.keyCode);
  if(e.keyCode === 37){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    carrito.goToTheLeft();
    drawFondo();
    carrito.draw();
  }  if(e.keyCode === 39){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    carrito.goToTheRight();
    drawFondo();
    carrito.draw();
  }
});


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var backgroundImage = {
  img: drawFondo(),
  y: 0,
  speed: 1,

  move: function() {
    this.y += this.speed;
    this.y %= canvas.width;
  },

  draw: function() {
    ctx.drawFondo()(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawFondo()(this.img, this.img.height + this.y , 0);
    } else {
      ctx.drawFondo()(this.img, this.img.height - this.y , 0);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;





  }
};

function DrawCar(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  this.x = 150;
  this.y = 430;
  this.img = new Image();
  this.img.src = "images/car.png"
  this.img.onload = function(){
    this.draw();
  }.bind(this);
  this.draw = function(){
    ctx.drawImage(this.img, this.x,this.y,80,150);
  }
  
  this.goToTheLeft = function(){
    this.x -= 20;
  }
  
    this.goToTheRight = function(){
    this.x += 20;
  }
  
}


function drawFondo() {
  var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#008200"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#808080"
    ctx.fillRect(25, 0, 350, canvas.height);
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(40, 0, 10, canvas.height);
    ctx.fillRect(350, 0, 10, canvas.height);
    ctx.strokeStyle="white";
    ctx.beginPath();
    ctx.setLineDash([10, 15]);
    ctx.moveTo(190, 0);
    ctx.lineTo(190, 600);
    ctx.stroke();
}


/*
function drawLines(){

}

*/

/*
function drawCar(){
  x = 150;
  var img = new Image();
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  img.src="images/car.png";
  ctx.drawImage(img,x,430,80,150);


  goToTheLeft = function(){
    x -= 20;
  }
  
    goToTheRight = function(){
    x += 20;
  }
  var carrito = new drawCar();

  addEventListener('keydown', function(e){
    if(e.keyCode === 37){
      carrito.goToTheLeft();
      carrito.draw();
    }  if(e.keyCode === 39){
      carrito.goToTheRight();
      carrito.draw();
    }
  });

}

*/
