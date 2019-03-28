var canvas;
/** @type {CanvasRenderingContext2D} */
var ctx;
var w;
var h;
var dimensions;
var color;
var posX;
var speed;
var counter = 0;
var imgCar = new Image();
imgCar.src = "./images/car.png";


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
    canvas = document.querySelector("#container")
    ctx = canvas.getContext('2d');
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    dimensions = 400;
    color ='red';

  function startGame() {
    setInterval(() => {
      ctx.clearRect(0, 0, w, h);
      draw(ctx,w,h,color,dimensions);
      counter++;
    }, 1000/60);

  }
};

function draw (ctx,w,h,color,dimensions){
  drawRoad(ctx, 0, h, 'green', 400);
  drawRoad(ctx, 25, h, 'gray', 350);
  drawRoad(ctx, 35, h, 'white', 330);
  drawRoad(ctx, 45, h, 'gray', 310);
  drawLine(ctx,h);
  drawCar();
}

function drawRoad(ctx,w,h,color,dimensions) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.rect(0+w, 0, dimensions, h);
  ctx.fill();
  ctx.restore();
  ctx.closePath();
}

function drawLine(ctx,h) {
  ctx.beginPath();
  ctx.strokeStyle = `white`;
  ctx.lineWidth = 5;
  ctx.setLineDash([10, 0, 10]);
  ctx.lineDashOffset = -counter;
  ctx.moveTo(200, 0);
  ctx.lineTo(200, h);
  ctx.stroke();
  ctx.closePath();
}

function drawCar() {
    ctx.drawImage(imgCar,posX,600,70,150);
}

posX=165;
window.onkeydown = function (e) {
  if(posX > 25) {
    if (e.keyCode === 37) {
      posX-=5;
      drawCar();
    }
  }
  if(posX < 300) {
    if (e.keyCode === 39) {
      posX+=5;
      drawCar();
    }
  }
};








// function drawRoad(ctx,w,h) {
//   var dimensions = 400

//       ctx.beginPath()
//       ctx.fillStyle = 'green'
//       ctx.rect(0, 0, dimensions, h)
//       ctx.fill()
//       ctx.restore()
//       ctx.closePath()

//       ctx.beginPath()
//       ctx.fillStyle = 'gray'
//       ctx.rect(25, 0, dimensions - 50, h)
//       ctx.fill()
//       ctx.restore()
//       ctx.closePath()

//       ctx.stroke()
// }