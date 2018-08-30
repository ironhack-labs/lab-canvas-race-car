window.onload = function() {
  
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var HEIGHT = 600;
var WIDTH = 400;

  function paintRoad() {    
  
    ctx.save();
    //grass
    ctx.fillStyle = "rgb(68, 139, 45)"
    ctx.fillRect(0, 0, 50, HEIGHT);
    ctx.fillRect(350, 0, 50, HEIGHT);
    
    //road
    ctx.fillStyle = "rgb(137, 127, 127)"
    ctx.fillRect(60, 0, 280, HEIGHT);
    
    //grey side lines
    ctx.strokeStyle = "rgb(137, 127, 127)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(50, HEIGHT)
    ctx.stroke();
    
    ctx.strokeStyle = "rgb(137, 127, 127)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(350, 0);
    ctx.lineTo(350, HEIGHT)
    ctx.stroke();

    //white side lines

    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(58, 0);
    ctx.lineTo(58, HEIGHT)
    ctx.stroke();
    
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(342, 0);
    ctx.lineTo(342, HEIGHT)
    ctx.stroke();
    
    //mid line
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.setLineDash([30, 10]);
    ctx.moveTo(200, 0);
    ctx.lineTo(200, HEIGHT)
    ctx.stroke();

    ctx.restore();
    
  }

  paintRoad();

  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  function startGame() {
    
    function moveRigth() {
      racingCar.x += 5;
    }
  
    function moveLeft() {
      racingCar.x -= 5;    
    }
    var racingCar = {
      x: 200,
      y: 400,
      width: 80,
      height: 160
    }

    var img = new Image();
    img.src = "images/car.png";
    img.onload = function()  {
      ctx.drawImage(img, racingCar.x, racingCar.y, racingCar.width, racingCar.height);
    }
    
    document.onkeydown = function(event) {

      switch (event.keyCode) {
        case 37:
        moveLeft();
        paintRoad();
        ctx.drawImage(img, racingCar.x, racingCar.y, racingCar.width, racingCar.height);
        break;

        case 39:
        moveRigth();
        paintRoad();
        ctx.drawImage(img, racingCar.x, racingCar.y, racingCar.width, racingCar.height)
      }
    }

  }



}
