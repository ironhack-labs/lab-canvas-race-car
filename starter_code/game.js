/** @type HTMLCanvasElement */
var canvasDomEl = document.querySelector("#canvasGame");

/** @type CanvasRenderingContext2D */
var ctx = canvasDomEl.getContext("2d")

// let obstaculo = {
//   cantidad:[null,null],
//   posIniX: M,
//   posFinX: 0,
//   posVert: 0,
//   setWidth: 20
// }

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
// drawRectGrey()
// drawGreenLines()

// drawWhiteMidLine()


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

ctx.beginPath()
ctx.moveTo(w/2,separatorY)
ctx.setLineDash([20,8])
ctx.strokeStyle = "white"
ctx.lineWidth = 5;
ctx.lineTo(w/2,0)
ctx.stroke()
ctx.closePath();


}
function drawBrownThing() {
  
    ctx.fillStyle = `blue`
  ctx.beginPath();
  ctx.rect(400,i+200,500,10);
  ctx.fill();
  ctx.closePath();
  ctx.restore()
  
  }
  function drawBrownThing2() {
  
    ctx.fillStyle = `brown`
  ctx.beginPath();
  ctx.rect(120,i,100,50);
  ctx.fill();
  ctx.closePath();
  ctx.restore()
  
  }
  function drawBrownThing3() {
  
    ctx.fillStyle = `black`
  ctx.beginPath();
  ctx.rect(170,i+150,200,50);
  ctx.fill();
  ctx.closePath();
  ctx.restore()
  
  }

// 
function drawCar() {
  ctx.clearRect(0,0,w,h)
  setCanvasDim()
  drawRectGrey()
drawGreenLines()
drawWhiteLines()
drawWhiteMidLine()
drawBrownThing()
drawBrownThing2()
drawBrownThing3()
// drawBrownThing()
// drawObs()
// timerObs()
// timerObs()

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
var separatorY = 700
var i = 0
// var j = 300


function moveMidLine (){
  setInterval (() => {
   
    separatorY += 2
    if (i === 700){
      // j += Math.random()*10
      
      i -= 700

    } else {
      i += 1

    }
// drawObs()
drawCar()
   
  },10)}

  // moveMidLine()


  function drawObs() {
    let length =50
    let ancho = 50
    
    for(var i=0; i < h ; i+= 10){
      
      ctx.fillStyle = `#880000`
      ctx.save()
      ctx.rotate(i)
    ctx.beginPath();
    
    ctx.rect(50,i,length,ancho);
    ctx.fill();
    ctx.closePath();
    ctx.restore()
    
    }
    

   
    
  }
  
// drawObs()
// function timerObs() {
// setInterval (() => {
  
  

//   ctx.save()
//   ctx.fillStyle = `brown`
// ctx.beginPath();
// ctx.rect(30,i,300,50);
// ctx.fill();
// ctx.closePath();
// ctx.restore()
 
 
// },100)

// }

// timerObs()
moveMidLine()
// drawObs()


 