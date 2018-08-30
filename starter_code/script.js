window.onload = function() {
  var game=document.getElementById('game-board');
  var canvas=document.createElement('canvas');
  var ctx=canvas.getContext("2d");
  var GREY = "#808080";
  var GREEN = "#3a8200";
  var ARROW_LEFT=37;
  var ARROW_RIGHT=39;
  var car = new Image();   // Create new img element
  var carPosition={
        x:0,
        y:0
      }
  var speed = 5;
  var pressed=false;
  car.src   = './images/car.png';
  canvas.width=400;
  canvas.height=500;
  carPosition.x=canvas.width/2-25/2;
  carPosition.y=canvas.height-55;
  startGame();
  document.getElementById("start-button").onclick = function() {
  };
  function startGame() {
    game.appendChild(canvas)
    drawRoad()
    drawCar(carPosition.x,carPosition.y)
    document.onkeyup=function(){
      pressed=false;
    }
    document.onkeydown=function(event){
      switch (event.keyCode) {
        case ARROW_LEFT:
          drawRoad();
          carPosition.x-=speed
          drawCar(carPosition.x,carPosition.y)
          break;
          case ARROW_RIGHT:
          drawRoad();
          carPosition.x+=speed
          drawCar(carPosition.x,carPosition.y)
          break;
        default:{
        }
          break;
      }
    }
     // Set source path
    // ctx.strokeRect(35,0,canvas.width-25*2,canvas.height)
    // ctx.fillStyle=white;
  }
  function drawCar(x,y){

    car.onload=function(){
      ctx.drawImage(car,x,y,25,50)
    }
    ctx.drawImage(car,x,y,25,50)
  }
  function drawRoad(){
    // ctx.restore();
    ctx.setLineDash([])
    ctx.fillStyle=GREEN;
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle=GREY;
    ctx.fillRect(25,0,canvas.width-25*2,canvas.height)
    ctx.strokeStyle="white";
    ctx.lineWidth=10;
    ctx.beginPath()
    ctx.moveTo(40,0)
    ctx.lineTo(40,canvas.height)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(canvas.width-40,0)
    ctx.lineTo(canvas.width-40,canvas.height)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(canvas.width/2,25)
    ctx.lineTo(canvas.width/2,canvas.height)
    ctx.setLineDash([20,10]);
    ctx.lineWidth=5;
    ctx.stroke()
  }
};
