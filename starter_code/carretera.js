
/** @type HTMLCanvasElement */
var canvasDOMEl = document.querySelector("#race-game");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d")
  
var w = 400
var h = 700


var w2 = w / 2;
var h2 = h / 2;
var dashedLineY = 800

///posición de Delorean
var deloreanWidth = w2-30
var deloreanHeight = h -80

function boxCanvas() {
  
  canvasDOMEl.setAttribute("height", h)
  canvasDOMEl.setAttribute("width", w);
  
}

function drawGreen(){
  ctx.fillStyle = "green";
  ctx.beginPath()
  ctx.rect(0, 0, w, h)
  ctx.fill();
  ctx.closePath();
}

function drawRectWhite(){

  ctx.fillStyle = "white";
  ctx.beginPath()
  ctx.rect(+30, 0, w-60, h)
  ctx.fill();
  ctx.closePath();

}

function drawGrey(){
  ctx.fillStyle = "grey";
  ctx.beginPath()
  ctx.rect(+40, 0, w-80, h)
  ctx.fill();
  ctx.closePath();

}
var dashedLineY = 700
function drawMiniWhite(){
  
  ctx.beginPath()
  ctx.lineWidth = 4
  ctx.strokeStyle = "#f2f2f2"
  ctx.setLineDash([50, 10])
  ctx.moveTo(w / 2 , dashedLineY)
  ctx.lineTo(w / 2, 0)
  ctx.stroke()
}

function clearScreen(){
  ctx.clearRect(0, 0, w, h);
}

///////////////////////////////////////////
///////Parte Delorean
var imgDelorean = new Image();
imgDelorean.src ='./images/car.png'; ///./images/DeloreanR.png

imgDelorean.onload = function(){
  paintDelorean()
}
var deloreanSize = 60 


//var obstacle = 100
//function createObstacle(){
  
//  ctx.beginPath()
//  ctx.rect = 50
//  ctx.strokeStyle = "red"
//  ctx.moveTo(w / 2 , obstacle)
//  ctx.lineTo(w / 2, 0)
//}


function paintDelorean(){

  
  clearScreen()

  
  boxCanvas()
  drawGreen()
  drawRectWhite()
  drawGrey()
  drawMiniWhite()
  ctx.drawImage(imgDelorean, deloreanWidth, deloreanHeight, deloreanSize, deloreanSize);

}

///////////////////////////////////////////////////

window.onkeydown = function (e) {
  console.log(e.keyCode)

  const desplazamiento = 20
 

  switch (e.keyCode) {
      case 39: //goes to the right
      deloreanWidth+=desplazamiento;
        if(deloreanWidth > 320)
          deloreanWidth = 320;
        
          break;

      case 37: //goes to the left
      deloreanWidth-=desplazamiento;
       if(deloreanWidth < 50)
         deloreanWidth = desplazamiento;
         break;

  }
  
  
  paintDelorean()
  
}
paintDelorean()

//let setIntervalID;

function repaintingMiniWhite(){
  setInterval(()=>{

    dashedLineY ++
    paintDelorean()
  },10)
}


repaintingMiniWhite()
//createObstacle()

 

