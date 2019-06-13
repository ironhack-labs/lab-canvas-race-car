/** @type HTMLCanvasElement */
var canvasDomEl = document.querySelector("#canvasGame");

/** @type CanvasRenderingContext2D */
var ctx = canvasDomEl.getContext("2d")

var w = 500
var h = 700 

var img = new Image();
img.src = "images/car.png"

let dataCar = {
  x: w/2 - 50,
  y: 530
}

img.onload= function () {
  drawCar()
}


function setCanvasDim () {
  canvasDomEl.setAttribute("width",w)
  canvasDomEl.setAttribute("height",h)
  
}
setCanvasDim()
drawRectGrey()
drawGreenLines()
drawWhiteLines()
drawWhiteMidLine()
drawCar()
// moveMidLine ()

function drawRectGrey() {
  ctx.fillStyle = `#808080`
  ctx.beginPath();
  ctx.rect(0,0,w,h);
  ctx.fill();
  ctx.closePath();
  
}
function drawGreenLines() {
  ctx.fillStyle = `#008100`
  ctx.beginPath();
  ctx.rect(0,0,50,h);
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = `#008100`
  ctx.beginPath();
  ctx.rect(450,0,50,h);
  ctx.fill();
  ctx.closePath();
}
function drawWhiteLines () {
  ctx.fillStyle = `#FFFFFF`
  ctx.beginPath();
  ctx.rect(70,0,25,h);
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = `#FFFFFF`
  ctx.beginPath();
  ctx.rect(405,0,25,h);
  ctx.fill();
  ctx.closePath();
}
function drawWhiteMidLine() {
  ctx.strokeStyle = `#FFFFFF`
  ctx.lineWidth = 10;
  ctx.beginPath();
ctx.setLineDash([30, 30]);
ctx.lineDashOffset = 0
ctx.moveTo(w/2,0)
  ctx.lineTo(w/2,h)
  ctx.stroke()
  ctx.closePath();
}
// 
function drawCar() {
  ctx.clearRect(0,0,w,h)
  drawRectGrey()
drawGreenLines()
drawWhiteLines()
drawWhiteMidLine()
  ctx.drawImage(img, dataCar.x, dataCar.y,100,150)
}

window.onkeydown = function (e) {
  console.log(e.keyCode)
  const moveChange = 30
  switch(e.keyCode) {
    case 39:
      if(dataCar.x <= 320){
        dataCar.x += moveChange

      }
      
      break;
      case 37:
          if(dataCar.x >= 70){
            dataCar.x -= moveChange
    
          }
          
        break;

  }
  drawCar()
}

// function moveMidLine (){
//   setInterval (() => {
//     // clearInterval()
//     ctx.lineDashOffset+=50
//     drawWhiteMidLine()
//   },)}
  



