var initialScreen = document.querySelector(".canvas-road")
var firstCanvas = document.querySelector("#canvas-road")

window.onload = function() {
  
  initialCanvas(firstCanvas)
  document.getElementById("start-button").onclick = function() {
    //initialScreen.classList.add("hide");
    firstCanvas.classList.remove("hide");
    startGame();
  };

  function startGame() {
    gameArea.start();

  }
  var canvas = document.getElementById("canvas-road");
  var ctx = canvas.getContext("2d");

var gameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1200
  }
};

function initialCanvas(selector) {
  var ctx = selector.getContext('2d');
  ctx.fillStyle = '#456D16';
  ctx.fillRect(0, 0, 40, 520);
  ctx.fillStyle = '#B8B8B8';
  ctx.fillRect(40, 0, 10, 520);
  ctx.fillStyle = 'white';
  ctx.fillRect(50, 0, 10, 520);
  ctx.fillStyle = '#B8B8B8';
  ctx.fillRect(70, 0, 210, 520);
  ctx.fillStyle = 'white';
  ctx.fillRect(280, 0, 10, 520);
  ctx.fillStyle = '#B8B8B8';
  ctx.fillRect(300, 0, 10, 520);
  ctx.fillStyle = '#456D16';
  ctx.fillRect(310, 0, 40, 520);

   var ypos = 0
  while(ypos < 520){
    ctx.fillStyle = 'white';
    ctx.fillRect(175, ypos, 2, 25);
    ypos += 45 
  }
 } 

 var img = new Image();
  img.src = "images/car.png";
  var posX = 500;
  img.onload = function(){
    ctx.drawImage(img, posX, 1350);
   }
   ctx.scale(0.3, 0.3) 
   ypos= 70
 }
 