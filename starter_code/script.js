var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var cw = canvas.width = 480;
var ch = canvas.height = 1000;
var cx = cw/2,
  cy = ch/10;

context.strokeStyle = "white"

var offset = 0;

function dibujarRectangulo() {
  context.clearRect(800, 40, cw + 400, ch + 900);
  context.setLineDash([70, 15]);
  context.lineDashOffset = -offset;
  context.strokeRect(cx - 10, cy - 105, 960, 3000);
}

function Animacion() {
  offset += .5;
  if (offset > 2) {
    offset = 0;
  }
  dibujarRectangulo();
  requestId = window.requestAnimationFrame(Animacion);
}

requestId = window.requestAnimationFrame(Animacion);

function draw() {
  var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = '#8E8D8B';
    ctx.fillRect(0, -1, 5000, 1000);
    ctx.fillStyle = '#8E8B';
    ctx.fillRect(456, 0, 209, 1000);
    ctx.fillRect(0, 0, 25, 1000);
    ctx.fillStyle = '#FCFBFB';
    ctx.fillRect(36, 0, 6, 1000);
    ctx.fillRect(440, 0, 6, 1000);

    var img = new Image();
    img.src = "https://github.com/ironhack-labs/lab-canvas-race-car/blob/master/starter_code/images/car.png?raw=true";
    // Importante el onload
    img.onload = function(){
      ctx.drawImage(img, 250, 680);

  }
}draw()
dibujarRectangulo()

function finishHim(){
  clearInterval(interval);
  interval = undefined;
  board.gameOver();
}

function restart(){
  if(interval) return;
  obst = [];
  car.x = 100;
  car.y = 100;
  start();
}

//listeners
addEventListener('keydown', function(e){
  if(e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39){
      flappy.rise();
      sound.play();
  }else if(e.keyCode === 27){
      restart();
  }
})

start();


 