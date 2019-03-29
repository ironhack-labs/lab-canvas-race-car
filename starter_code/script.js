var canvas, ctx;
var counter = 0;


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    canvas = document.getElementById('container');
    ctx = canvas.getContext('2d');
    var carImg = new Image();
    carImg.src = './images/car.png';

    
    setInterval(() => {
      ctx.clearRect(0,0,500,600);
      paintField();
      paintRoad();
      paintLines();
      paintLines2();
      paintMoveLine();
      car(carImg);
      paintObstacles();
      obstaclesMoving();
      
    }, 100);

  }

  function paintField(){
    ctx.save();
    ctx.fillStyle = 'rgb(0,110,46)';
    ctx.fillRect(0, 0, 500, 600);
    ctx.restore();
  }

  function paintRoad(){
    ctx.save();
    ctx.fillStyle = 'rgb(181,189,200)';
    ctx.fillRect(25, 0, 450, 600);
    ctx.restore();
  }

  function paintLines(){
    ctx.save();
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(40, 0, 20, 600);
    ctx.restore();
  }

  function paintLines2(){
    ctx.save();
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(440, 0, 20, 600);
    ctx.restore();
  }

  function paintMoveLine(){
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgb(255,255,255)';
    ctx.lineDashOffset = counter -= 10;
    ctx.moveTo(240, 0);
    ctx.lineTo(240, 600);
    ctx.setLineDash([20, 20]);
    ctx.stroke();
  }

  function car(carImg) {
    
    var carWidth = 60;
    var carHeight = 100;
    var carPositionY = 450; 

    ctx.drawImage(carImg, carPositionX, carPositionY, carWidth, carHeight);

  }

    var carPositionX = 210;
    window.onkeydown = function (e) {

      if (e.keyCode === 37) {
        if(carPositionX > 40){
              carPositionX -= 20;
              car();
        }
      }

      if (e.keyCode === 39) {
          if(carPositionX < 400){
          carPositionX += 20;
          car();
          }
      }
  };


  var obstaclesPosX = Math.floor(Math.random() * (400 - 0 + 1) + 0);
  var obstaclesPosY = 0;
  var obstaclesWidth = Math.floor(Math.random() * (300 - 50 + 1) + 50);  

  function paintObstacles() {
    ctx.save();
    ctx.fillStyle = '#800000';
    //obstacleArr = [];

    ctx.fillRect(obstaclesPosX, obstaclesPosY, obstaclesWidth, 30);
    ctx.restore();
  }

  function obstaclesMoving() {
    setInterval(() => {
      obstaclesPosY ++;
      paintObstacles();
    }, 100);
  }

};